import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import { setupAuth, registerAuthRoutes, isAuthenticated } from "./replit_integrations/auth";
import { db } from "./db";
import { lessonProgress } from "@shared/schema";
import { eq } from "drizzle-orm";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Setup authentication (must be before other routes)
  await setupAuth(app);
  registerAuthRoutes(app);

  app.post("/api/debates", async (req, res) => {
    try {
      const { userId, opponentId, topicId, formatId, userSide } = req.body;
      
      const debate = await storage.createDebate({
        userId,
        opponentId,
        topicId,
        formatId,
        userSide,
        status: "in_progress",
      });
      
      res.status(201).json(debate);
    } catch (error) {
      console.error("Error creating debate:", error);
      res.status(500).json({ error: "Failed to create debate" });
    }
  });

  app.get("/api/debates", async (req, res) => {
    try {
      const userId = req.query.userId as string | undefined;
      let debates;
      
      if (userId) {
        debates = await storage.getDebatesByUser(userId);
      } else {
        debates = await storage.getAllDebates();
      }
      
      res.json(debates);
    } catch (error) {
      console.error("Error fetching debates:", error);
      res.status(500).json({ error: "Failed to fetch debates" });
    }
  });

  app.get("/api/debates/:id", async (req, res) => {
    try {
      const debate = await storage.getDebate(req.params.id);
      if (!debate) {
        return res.status(404).json({ error: "Debate not found" });
      }
      const messages = await storage.getDebateMessages(req.params.id);
      res.json({ ...debate, messages });
    } catch (error) {
      console.error("Error fetching debate:", error);
      res.status(500).json({ error: "Failed to fetch debate" });
    }
  });

  app.patch("/api/debates/:id", async (req, res) => {
    try {
      const updates = req.body;
      const debate = await storage.updateDebate(req.params.id, updates);
      if (!debate) {
        return res.status(404).json({ error: "Debate not found" });
      }
      res.json(debate);
    } catch (error) {
      console.error("Error updating debate:", error);
      res.status(500).json({ error: "Failed to update debate" });
    }
  });
  
  app.post("/api/debate/message", async (req, res) => {
    try {
      const { 
        message, 
        debateId,
        opponentId, 
        opponentTier, 
        opponentPersonality, 
        topic, 
        side, 
        speechId,
        speechName,
        speechType,
        cxIntent,
        previousMessages 
      } = req.body;

      if (debateId && message) {
        await storage.createDebateMessage({
          debateId,
          role: "user",
          content: message,
          turnNumber: previousMessages.length + 1,
        });
      }

      const skillModifier = getSkillModifier(opponentTier);
      const systemPrompt = buildDebateSpeechPrompt(
        opponentPersonality,
        topic,
        side === "pro" ? "con" : "pro",
        skillModifier,
        speechName,
        speechType,
        cxIntent
      );

      const conversationHistory = previousMessages.map((m: { role: string; content: string }) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content,
      }));

      const response = await openai.chat.completions.create({
        model: "gpt-5.1",
        messages: [
          { role: "system", content: systemPrompt },
          ...conversationHistory,
          ...(message ? [{ role: "user" as const, content: message }] : []),
        ],
        max_completion_tokens: 1024,
      });

      const aiResponse = response.choices[0]?.message?.content || "I need a moment to consider my response.";

      if (debateId) {
        await storage.createDebateMessage({
          debateId,
          role: "opponent",
          content: aiResponse,
          turnNumber: previousMessages.length + 2,
        });
      }

      res.json({ response: aiResponse });
    } catch (error) {
      console.error("Error generating debate response:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  app.post("/api/debate/evaluate", async (req, res) => {
    try {
      const { 
        debateId,
        messages, 
        opponentId, 
        opponentSkillRange, 
        userSkillPoints, 
        topic, 
        side, 
        format 
      } = req.body;

      const userMessages = messages
        .filter((m: { role: string }) => m.role === "user")
        .map((m: { content: string }) => m.content)
        .join("\n\n");

      const opponentMessages = messages
        .filter((m: { role: string }) => m.role === "opponent")
        .map((m: { content: string }) => m.content)
        .join("\n\n");

      const evaluationPrompt = `You are an expert debate judge. Evaluate this debate and provide a fair assessment.

Topic: "${topic}"
User's Side: ${side === "pro" ? "Pro (For)" : "Con (Against)"}
Opponent Skill Level: ${opponentSkillRange.min}-${opponentSkillRange.max} points
User's Current Skill: ${userSkillPoints} points

USER'S ARGUMENTS:
${userMessages}

OPPONENT'S ARGUMENTS:
${opponentMessages}

Evaluate the debate based on:
1. Argument quality and logical structure
2. Use of evidence and examples
3. Rebuttal effectiveness
4. Overall persuasiveness

Respond with a JSON object containing:
{
  "won": boolean (did the user win?),
  "score": number (0-100, how well did the user perform),
  "feedback": string (2-3 sentences of overall feedback),
  "strengths": array of strings (2-3 things the user did well),
  "improvements": array of strings (2-3 areas to improve)
}

Be fair but consider the skill level difference. If the user is debating someone much higher skilled and performs well, they should still potentially win.`;

      const response = await openai.chat.completions.create({
        model: "gpt-5.1",
        messages: [
          { role: "system", content: "You are a professional debate judge. Respond only with valid JSON." },
          { role: "user", content: evaluationPrompt },
        ],
        response_format: { type: "json_object" },
        max_completion_tokens: 1024,
      });

      const evaluation = JSON.parse(response.choices[0]?.message?.content || "{}");
      
      const pointsChange = calculatePointsChange(
        evaluation.won,
        evaluation.score || 50,
        userSkillPoints,
        (opponentSkillRange.min + opponentSkillRange.max) / 2
      );

      if (debateId) {
        await storage.updateDebate(debateId, {
          status: "completed",
          result: evaluation.won ? "win" : "loss",
          pointsChange,
          feedback: evaluation.feedback,
          completedAt: new Date(),
        });
      }

      res.json({
        won: evaluation.won ?? false,
        pointsChange,
        feedback: evaluation.feedback || "Debate completed.",
        strengths: evaluation.strengths || [],
        improvements: evaluation.improvements || [],
      });
    } catch (error) {
      console.error("Error evaluating debate:", error);
      
      const randomWon = Math.random() > 0.5;
      const baseChange = Math.floor(Math.random() * 30) + 10;
      const pointsChange = randomWon ? baseChange : -Math.floor(baseChange * 0.7);
      
      if (req.body.debateId) {
        await storage.updateDebate(req.body.debateId, {
          status: "completed",
          result: randomWon ? "win" : "loss",
          pointsChange,
          feedback: "Your debate showed promise. Continue practicing to improve your argumentation skills.",
          completedAt: new Date(),
        });
      }
      
      res.json({
        won: randomWon,
        pointsChange,
        feedback: "Your debate showed promise. Continue practicing to improve your argumentation skills.",
        strengths: ["Engaged with the topic", "Made coherent arguments"],
        improvements: ["Provide more evidence", "Strengthen rebuttals"],
      });
    }
  });

  app.get("/api/user/:id", async (req, res) => {
    try {
      const user = await storage.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Failed to fetch user" });
    }
  });

  // Check if user is admin/developer
  app.get("/api/auth/admin", isAuthenticated, async (req: any, res) => {
    try {
      const userEmail = req.user.claims.email;
      const adminEmail = process.env.ADMIN_EMAIL;
      const isAdmin = adminEmail && userEmail === adminEmail;
      res.json({ isAdmin });
    } catch (error) {
      console.error("Error checking admin status:", error);
      res.status(500).json({ error: "Failed to check admin status" });
    }
  });

  // Get lesson progress for authenticated user
  app.get("/api/progress", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const [progress] = await db.select().from(lessonProgress).where(eq(lessonProgress.userId, userId));
      
      if (!progress) {
        // Return default progress if none exists
        return res.json({
          hasCompletedOnboarding: false,
          experienceLevel: null,
          assessmentScore: 0,
          currentUnitId: "unit-1",
          currentSectionId: null,
          currentLessonId: null,
          completedLessonIds: [],
          lastVisitedAt: null,
        });
      }
      
      res.json(progress);
    } catch (error) {
      console.error("Error fetching lesson progress:", error);
      res.status(500).json({ error: "Failed to fetch progress" });
    }
  });

  // Save/update lesson progress for authenticated user
  app.post("/api/progress", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const {
        hasCompletedOnboarding,
        experienceLevel,
        assessmentScore,
        currentUnitId,
        currentSectionId,
        currentLessonId,
        completedLessonIds,
      } = req.body;

      const [existingProgress] = await db.select().from(lessonProgress).where(eq(lessonProgress.userId, userId));

      if (existingProgress) {
        // Update existing progress
        const [updated] = await db.update(lessonProgress)
          .set({
            hasCompletedOnboarding: hasCompletedOnboarding ?? existingProgress.hasCompletedOnboarding,
            experienceLevel: experienceLevel ?? existingProgress.experienceLevel,
            assessmentScore: assessmentScore ?? existingProgress.assessmentScore,
            currentUnitId: currentUnitId ?? existingProgress.currentUnitId,
            currentSectionId: currentSectionId ?? existingProgress.currentSectionId,
            currentLessonId: currentLessonId ?? existingProgress.currentLessonId,
            completedLessonIds: completedLessonIds ?? existingProgress.completedLessonIds,
            lastVisitedAt: new Date(),
            updatedAt: new Date(),
          })
          .where(eq(lessonProgress.userId, userId))
          .returning();
        
        res.json(updated);
      } else {
        // Create new progress
        const [created] = await db.insert(lessonProgress)
          .values({
            userId,
            hasCompletedOnboarding: hasCompletedOnboarding ?? false,
            experienceLevel,
            assessmentScore: assessmentScore ?? 0,
            currentUnitId: currentUnitId ?? "unit-1",
            currentSectionId,
            currentLessonId,
            completedLessonIds: completedLessonIds ?? [],
            lastVisitedAt: new Date(),
          })
          .returning();
        
        res.status(201).json(created);
      }
    } catch (error) {
      console.error("Error saving lesson progress:", error);
      res.status(500).json({ error: "Failed to save progress" });
    }
  });

  return httpServer;
}

function getSkillModifier(tier: string): string {
  switch (tier) {
    case "BEGINNER":
      return "You are a beginner debater. Make simple arguments, occasionally forget to support claims with evidence, and sometimes miss opportunities for strong rebuttals. Be friendly and not too aggressive.";
    case "INTERMEDIATE":
      return "You are an intermediate debater. Make solid, well-structured arguments with evidence. Provide good rebuttals but occasionally miss subtle points. Be competitive but fair.";
    case "ADVANCED":
      return "You are an advanced debater. Make sophisticated, multi-layered arguments with strong evidence. Provide devastating rebuttals that expose logical flaws. Be highly competitive and strategic.";
    case "MASTER":
      return "You are a master debater. Make near-perfect arguments with impeccable logic and comprehensive evidence. Anticipate opponent moves and counter them preemptively. Be ruthlessly effective while maintaining professionalism.";
    default:
      return "You are a debater participating in a formal debate.";
  }
}

function buildDebateSystemPrompt(
  personality: string,
  topic: string,
  side: string,
  skillModifier: string,
  turnNumber: number
): string {
  return `You are an AI debate opponent with the following characteristics:
Personality: ${personality}

${skillModifier}

DEBATE CONTEXT:
- Topic: "${topic}"
- Your position: ${side === "pro" ? "PRO (arguing FOR the resolution)" : "CON (arguing AGAINST the resolution)"}
- Current turn: ${turnNumber}

RULES:
1. Stay in character based on your personality and skill level
2. Make arguments appropriate for your side of the debate
3. Respond directly to your opponent's points when relevant
4. Keep responses focused and between 100-200 words
5. Use the claim-warrant-impact framework when making arguments
6. Be respectful but competitive

${turnNumber === 1 ? "This is the opening exchange. Establish your core position." : ""}
${turnNumber >= 3 ? "This is a later round. Focus on rebuttals and strengthening your strongest arguments." : ""}

Respond as your debate character would, making your best argument for your side.`;
}

function buildDebateSpeechPrompt(
  personality: string,
  topic: string,
  side: string,
  skillModifier: string,
  speechName: string,
  speechType: string,
  cxIntent?: string
): string {
  // Handle cross-examination with specific intents
  if (speechType === "cross-examination" && cxIntent) {
    if (cxIntent === "cx-question") {
      return `You are an AI debate opponent conducting cross-examination.
Personality: ${personality}
${skillModifier}

DEBATE CONTEXT:
- Topic: "${topic}"
- Your position: ${side === "pro" ? "PRO/AFFIRMATIVE" : "CON/NEGATIVE"}
- You are the QUESTIONER in cross-examination

YOUR TASK:
Ask ONE single, focused question to probe your opponent's case. The question should:
- Be specific and targeted at a weakness in their argument
- Be answerable in 1-2 sentences
- Aim to expose contradictions or gaps in their reasoning

CRITICAL RULES:
1. Ask ONLY ONE question - no follow-ups, no multiple questions
2. Keep it brief (one sentence)
3. Do not make arguments - only ask a question
4. End with a question mark

Ask your single question now:`;
    }
    
    if (cxIntent === "cx-answer") {
      return `You are an AI debate opponent answering cross-examination questions.
Personality: ${personality}
${skillModifier}

DEBATE CONTEXT:
- Topic: "${topic}"
- Your position: ${side === "pro" ? "PRO/AFFIRMATIVE" : "CON/NEGATIVE"}
- You are the ANSWERER in cross-examination

YOUR TASK:
Answer the opponent's question directly and concisely. You should:
- Give a clear, direct answer
- Defend your position without being evasive
- Keep your answer brief (1-3 sentences)

CRITICAL RULES:
1. Answer ONLY the question asked - do not ask questions back
2. Be direct - do not dodge or deflect
3. Keep it brief (1-3 sentences max)

Provide your answer now:`;
    }
    
    if (cxIntent === "cx-followup") {
      return `You are an AI debate opponent continuing cross-examination.
Personality: ${personality}
${skillModifier}

DEBATE CONTEXT:
- Topic: "${topic}"
- Your position: ${side === "pro" ? "PRO/AFFIRMATIVE" : "CON/NEGATIVE"}
- You are the QUESTIONER in cross-examination (continuing)

Based on your opponent's answer, ask ONE follow-up question that:
- Builds on their previous response
- Pushes them further on a weakness
- Is specific and focused

CRITICAL RULES:
1. Ask ONLY ONE question
2. Keep it brief (one sentence)
3. End with a question mark

Ask your follow-up question:`;
    }
    
    if (cxIntent === "crossfire-exchange") {
      return `You are an AI debate opponent in a CROSSFIRE period.
Personality: ${personality}
${skillModifier}

DEBATE CONTEXT:
- Topic: "${topic}"
- Your position: ${side === "pro" ? "PRO/AFFIRMATIVE" : "CON/NEGATIVE"}
- This is CROSSFIRE - both sides can ask AND answer questions

Your opponent just said something. You MUST:
1. First, respond to what they said (answer their question or counter their point) in 1-2 sentences
2. Then, ALWAYS ask them a challenging follow-up question to keep the exchange going

FORMAT YOUR RESPONSE LIKE THIS:
[Your answer/response to their point]. [Your follow-up question to them?]

CRITICAL RULES:
1. Keep your total response to 2-4 sentences
2. ALWAYS end with a question directed at them
3. Be direct and competitive
4. Your question should probe a weakness in their position

Respond now (remember to end with a question):`;
    }
    
    if (cxIntent === "cx-timeout") {
      return `Cross-examination time has expired. Respond with a brief, professional statement acknowledging that time is up (e.g., "Time's up. Let's move on to the next speech."). Keep it to one sentence.`;
    }
  }

  const speechGuidelines: Record<string, string> = {
    constructive: "Present your main arguments with clear claims, warrants, and impacts. Establish your case structure.",
    rebuttal: "Focus on attacking your opponent's arguments. Identify weaknesses and refute their points directly.",
    "cross-examination": "Engage in cross-examination. If you are the questioner, ask probing questions. If answering, respond directly.",
    crossfire: "Engage in crossfire. Both sides can ask and answer questions. Keep exchanges brief and direct.",
    summary: "Crystallize the key voting issues. Explain why your side has won the most important arguments.",
    "final-focus": "Make your closing appeal. Weigh the debate and explain why judges should vote for your side.",
    poi: "Make brief, strategic interventions. Points of Information should be concise (15 seconds max).",
  };

  return `You are an AI debate opponent with the following characteristics:
Personality: ${personality}

${skillModifier}

DEBATE CONTEXT:
- Topic: "${topic}"
- Your position: ${side === "pro" ? "PRO/AFFIRMATIVE (arguing FOR the resolution)" : "CON/NEGATIVE (arguing AGAINST the resolution)"}
- Current speech: ${speechName}
- Speech type: ${speechType}

SPEECH-SPECIFIC GUIDANCE:
${speechGuidelines[speechType] || "Present your arguments clearly and persuasively."}

RULES:
1. Stay in character based on your personality and skill level
2. Make arguments appropriate for your side and the speech type
3. Respond directly to your opponent's points when relevant
4. Keep responses focused and appropriate for the speech (150-300 words for constructives, 100-200 for rebuttals)
5. Use the claim-warrant-impact framework when making arguments
6. Be respectful but competitive
7. Adapt your approach based on the specific speech type

Respond as your debate character would, making your best ${speechType} speech for your side.`;
}

function calculatePointsChange(
  won: boolean,
  score: number,
  userSkill: number,
  opponentSkill: number
): number {
  const basePoints = 25;
  const skillDiff = opponentSkill - userSkill;
  const diffMultiplier = 1 + (skillDiff / 500);
  const scoreMultiplier = score / 50;
  
  if (won) {
    let points = Math.round(basePoints * diffMultiplier * scoreMultiplier);
    points = Math.max(10, Math.min(100, points));
    return points;
  } else {
    let points = Math.round(basePoints * (2 - diffMultiplier) * (1 - scoreMultiplier / 2));
    points = Math.max(5, Math.min(50, points));
    return -points;
  }
}
