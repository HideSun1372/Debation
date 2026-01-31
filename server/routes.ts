import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import { setupAuth, isAuthenticated } from "./auth";
import { z } from "zod";
import { generatePracticePrompt, evaluatePracticeResponse } from "./practice";
import type { PracticeType, DifficultyLevel } from "@shared/lessons/types";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Setup authentication (must be before other routes)
  setupAuth(app);

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
        crossfireQuestion,
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

      // For crossfire-answer-check, include the question that was asked
      let contextMessages = previousMessages.map((m: { role: string; content: string }) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content,
      }));

      // Add crossfire question context if provided
      if (cxIntent === "crossfire-answer-check" && crossfireQuestion) {
        contextMessages = [
          { role: "system", content: `The question you asked was: "${crossfireQuestion}"` },
          ...contextMessages,
        ];
      }

      const response = await openai.chat.completions.create({
        model: "gpt-5.1",
        messages: [
          { role: "system", content: systemPrompt },
          ...contextMessages,
          ...(message ? [{ role: "user" as const, content: message }] : []),
        ],
        max_completion_tokens: 1024,
      });

      const aiResponse = response.choices[0]?.message?.content || "I need a moment to consider my response.";

      // For answer-check intents, parse the JSON response
      if (cxIntent === "crossfire-answer-check" || cxIntent === "cx-answer-check") {
        try {
          // Try to parse the JSON response
          const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            return res.json({
              isProperAnswer: parsed.isProperAnswer === true,
              response: parsed.response || "",
            });
          }
        } catch (parseError) {
          console.error("Failed to parse crossfire-answer-check response:", parseError);
          // Default to treating it as a proper answer if parsing fails
          return res.json({ isProperAnswer: true, response: "" });
        }
      }

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

  // Evaluate if a crossfire answer is complete (triggers new race if so)
  app.post("/api/debate/crossfire/evaluate", async (req, res) => {
    try {
      const { question, answer, topic, context } = req.body;

      const evaluationPrompt = `You are evaluating a crossfire exchange in a debate.

Topic: "${topic}"

The question asked was:
"${question}"

The answer given was:
"${answer}"

Recent context:
${context || "No additional context."}

Determine if the answer adequately addresses the question. Consider:
1. Did they directly respond to what was asked?
2. Is the answer complete or are they still mid-thought?
3. Did they dodge or deflect the question?

Respond with a JSON object:
{
  "isComplete": boolean (true if the question has been answered, false if they need to continue),
  "reason": string (brief explanation of your judgment)
}`;

      const response = await openai.chat.completions.create({
        model: "gpt-5.1",
        messages: [
          { role: "system", content: "You are a debate evaluator. Respond only with valid JSON. Be lenient - if they made any attempt to answer, consider it complete." },
          { role: "user", content: evaluationPrompt },
        ],
        response_format: { type: "json_object" },
        max_completion_tokens: 256,
      });

      const evaluation = JSON.parse(response.choices[0]?.message?.content || '{"isComplete": true, "reason": "Default: treating as complete"}');

      res.json({
        isComplete: evaluation.isComplete ?? true,
        reason: evaluation.reason || "Evaluation complete.",
      });
    } catch (error) {
      console.error("Error evaluating crossfire answer:", error);
      // Default to complete on error to avoid blocking the debate
      res.json({
        isComplete: true,
        reason: "Evaluation error - proceeding as complete.",
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
  // Developer account is enabled when all these match:
  // - Email: siqichen0802@gmail.com
  // - Username: HideSun1372
  // - First name: Nandery
  // - Last name: Lolcat
  app.get("/api/auth/admin", isAuthenticated, async (req: any, res) => {
    try {
      const user = req.user;

      // Check if user matches developer credentials
      const isDeveloper =
        user.email === "siqichen0802@gmail.com" &&
        user.username === "HideSun1372" &&
        user.firstName === "Nandery" &&
        user.lastName === "Lolcat";

      // Also allow via environment variable for flexibility
      const adminEmail = process.env.ADMIN_EMAIL;
      const isEnvAdmin = adminEmail && user.email === adminEmail;

      const isAdmin = isDeveloper || isEnvAdmin;

      res.json({ isAdmin, isDeveloper });
    } catch (error) {
      console.error("Error checking admin status:", error);
      res.status(500).json({ error: "Failed to check admin status" });
    }
  });

  // Get lesson progress for authenticated user
  app.get("/api/progress", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.id;
      const progress = await storage.getLessonProgress(userId);

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
      const userId = req.user.id;
      const {
        hasCompletedOnboarding,
        experienceLevel,
        assessmentScore,
        currentUnitId,
        currentSectionId,
        currentLessonId,
        completedLessonIds,
      } = req.body;

      const existingProgress = await storage.getLessonProgress(userId);

      if (existingProgress) {
        // Update existing progress
        const updated = await storage.updateLessonProgress(userId, {
          hasCompletedOnboarding: hasCompletedOnboarding ?? existingProgress.hasCompletedOnboarding,
          experienceLevel: experienceLevel ?? existingProgress.experienceLevel,
          assessmentScore: assessmentScore ?? existingProgress.assessmentScore,
          currentUnitId: currentUnitId ?? existingProgress.currentUnitId,
          currentSectionId: currentSectionId ?? existingProgress.currentSectionId,
          currentLessonId: currentLessonId ?? existingProgress.currentLessonId,
          completedLessonIds: completedLessonIds ?? existingProgress.completedLessonIds,
        });

        res.json(updated);
      } else {
        // Create new progress
        const created = await storage.updateLessonProgress(userId, {
          hasCompletedOnboarding: hasCompletedOnboarding ?? false,
          experienceLevel,
          assessmentScore: assessmentScore ?? 0,
          currentUnitId: currentUnitId ?? "unit-1",
          currentSectionId,
          currentLessonId,
          completedLessonIds: completedLessonIds ?? [],
        });

        res.status(201).json(created);
      }
    } catch (error) {
      console.error("Error saving lesson progress:", error);
      res.status(500).json({ error: "Failed to save progress" });
    }
  });

  // Text-to-Speech endpoint for AI opponent voice
  app.post("/api/tts", async (req, res) => {
    try {
      const { text, voice = "alloy" } = req.body;

      if (!text || typeof text !== "string") {
        return res.status(400).json({ error: "Text is required" });
      }

      // Truncate to 4096 characters (OpenAI TTS limit)
      const truncatedText = text.slice(0, 4096);

      // Use chat-completions with audio output via gpt-audio-mini
      // Using typed content array format as required by Replit AI Integrations
      const response = await openai.chat.completions.create({
        model: "gpt-audio-mini",
        modalities: ["text", "audio"],
        audio: {
          voice: voice as "alloy" | "ash" | "coral" | "echo" | "fable" | "onyx" | "nova" | "sage" | "shimmer",
          format: "mp3",
        },
        messages: [
          {
            role: "system",
            content: [
              {
                type: "text",
                text: "You are a text-to-speech converter. Speak the user's message exactly as given, with natural speech patterns. Do not add any commentary or changes."
              }
            ]
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: truncatedText
              }
            ]
          }
        ],
      } as any);

      // Extract audio from response content parts
      const message = response.choices[0]?.message;
      let audioData: string | undefined;

      // Check for audio in content array
      if (Array.isArray((message as any)?.content)) {
        const audioPart = (message as any).content.find((part: any) => part.type === "audio");
        audioData = audioPart?.data || audioPart?.audio;
      }

      // Fallback: check message.audio property
      if (!audioData && (message as any)?.audio?.data) {
        audioData = (message as any).audio.data;
      }

      if (!audioData) {
        console.error("TTS response structure:", JSON.stringify(response.choices[0], null, 2));
        return res.status(500).json({ error: "No audio generated" });
      }

      // Convert base64 to buffer and send as audio
      const audioBuffer = Buffer.from(audioData, "base64");
      res.set({
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length,
      });
      res.send(audioBuffer);
    } catch (error) {
      console.error("Error generating TTS:", error);
      res.status(500).json({ error: "Failed to generate speech" });
    }
  });

  // Practice API routes for interactive lessons
  const practiceGenerateSchema = z.object({
    practiceType: z.enum(["argument-builder", "refutation", "claim-classifier", "evidence-defense", "fallacy-spotter", "warrant-builder"]),
    difficulty: z.enum(["beginner", "intermediate", "advanced", "expert"]),
    topic: z.string().optional(),
    targetSkill: z.string().min(1),
  });

  const practiceEvaluateSchema = z.object({
    practiceType: z.enum(["argument-builder", "refutation", "claim-classifier", "evidence-defense", "fallacy-spotter", "warrant-builder"]),
    difficulty: z.enum(["beginner", "intermediate", "advanced", "expert"]),
    aiPrompt: z.object({
      argument: z.string().optional(),
      claim: z.string().optional(),
      fallacyType: z.string().optional(),
    }),
    userResponse: z.string().min(1),
    targetSkill: z.string().min(1),
    successCriteria: z.array(z.string()),
  });

  app.post("/api/practice/generate", async (req, res) => {
    try {
      const parseResult = practiceGenerateSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({
          error: "Invalid request",
          details: parseResult.error.errors
        });
      }

      const { practiceType, difficulty, topic, targetSkill } = parseResult.data;

      const prompt = await generatePracticePrompt({
        practiceType: practiceType as PracticeType,
        difficulty: difficulty as DifficultyLevel,
        topic,
        targetSkill,
      });

      res.json(prompt);
    } catch (error) {
      console.error("Error generating practice prompt:", error);
      res.status(500).json({ error: "Failed to generate practice prompt" });
    }
  });

  app.post("/api/practice/evaluate", async (req, res) => {
    try {
      const parseResult = practiceEvaluateSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({
          error: "Invalid request",
          details: parseResult.error.errors
        });
      }

      const { practiceType, difficulty, aiPrompt, userResponse, targetSkill, successCriteria } = parseResult.data;

      const feedback = await evaluatePracticeResponse({
        practiceType: practiceType as PracticeType,
        difficulty: difficulty as DifficultyLevel,
        aiPrompt,
        userResponse,
        targetSkill,
        successCriteria,
      });

      res.json(feedback);
    } catch (error) {
      console.error("Error evaluating practice response:", error);
      res.status(500).json({
        error: "Failed to evaluate response",
        score: 50,
        strengths: ["You attempted the exercise"],
        improvements: ["Try again with more detail"],
        encouragement: "Keep practicing!"
      });
    }
  });

  // ============================================================================
  // Developer-Only Endpoints
  // ============================================================================

  // Middleware to check if user is a developer
  const isDeveloperMiddleware = async (req: any, res: any, next: any) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    const user = req.user;
    const isDev =
      user.email === "siqichen0802@gmail.com" &&
      user.username === "HideSun1372" &&
      user.firstName === "Nandery" &&
      user.lastName === "Lolcat";

    if (!isDev) {
      return res.status(403).json({ error: "Developer access required" });
    }
    next();
  };

  // Unlock all lessons (mark as complete)
  app.post("/api/dev/unlock-all", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const userId = req.user.id;

      // Get all lesson IDs from the curriculum
      const { getAllLessons } = await import("@shared/schema");
      const allLessons = getAllLessons();
      const allLessonIds = allLessons.map(l => l.lesson.id);

      // Update progress to mark all lessons complete
      await storage.updateLessonProgress(userId, {
        hasCompletedOnboarding: true,
        completedLessonIds: allLessonIds,
      });

      res.json({
        success: true,
        message: `Unlocked ${allLessonIds.length} lessons`,
        completedLessonIds: allLessonIds
      });
    } catch (error) {
      console.error("Error unlocking lessons:", error);
      res.status(500).json({ error: "Failed to unlock lessons" });
    }
  });

  // Instant complete a specific lesson
  app.post("/api/dev/complete-lesson", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const userId = req.user.id;
      const { lessonId } = req.body;

      if (!lessonId) {
        return res.status(400).json({ error: "lessonId is required" });
      }

      const currentProgress = await storage.getLessonProgress(userId);
      const completedIds = currentProgress?.completedLessonIds || [];

      if (!completedIds.includes(lessonId)) {
        completedIds.push(lessonId);
      }

      await storage.updateLessonProgress(userId, {
        completedLessonIds: completedIds,
      });

      res.json({
        success: true,
        message: `Completed lesson ${lessonId}`,
        completedLessonIds: completedIds,
      });
    } catch (error) {
      console.error("Error completing lesson:", error);
      res.status(500).json({ error: "Failed to complete lesson" });
    }
  });

  // Set skill points to any value
  app.post("/api/dev/set-skill-points", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const userId = req.user.id;
      const { points } = req.body;

      if (typeof points !== "number" || points < 0) {
        return res.status(400).json({ error: "points must be a non-negative number" });
      }

      const updatedUser = await storage.updateUser(userId, {
        skillPoints: points,
      });

      res.json({
        success: true,
        message: `Set skill points to ${points}`,
        user: updatedUser
      });
    } catch (error) {
      console.error("Error setting skill points:", error);
      res.status(500).json({ error: "Failed to set skill points" });
    }
  });

  // Reset all lesson progress
  app.post("/api/dev/reset-progress", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const userId = req.user.id;

      await storage.updateLessonProgress(userId, {
        hasCompletedOnboarding: false,
        experienceLevel: null,
        assessmentScore: 0,
        currentUnitId: "unit-1",
        currentSectionId: null,
        currentLessonId: null,
        completedLessonIds: [],
      });

      res.json({
        success: true,
        message: "Progress reset to initial state"
      });
    } catch (error) {
      console.error("Error resetting progress:", error);
      res.status(500).json({ error: "Failed to reset progress" });
    }
  });


  // Set wins/losses/total debates
  app.post("/api/dev/set-stats", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const userId = req.user.id;
      const { wins, losses, totalDebates } = req.body;

      const updates: any = {};
      if (typeof wins === "number") updates.wins = wins;
      if (typeof losses === "number") updates.losses = losses;
      if (typeof totalDebates === "number") updates.totalDebates = totalDebates;

      if (Object.keys(updates).length === 0) {
        return res.status(400).json({ error: "Provide at least one stat to update" });
      }

      const updatedUser = await storage.updateUser(userId, updates);

      res.json({
        success: true,
        message: "Stats updated",
        user: updatedUser
      });
    } catch (error) {
      console.error("Error setting stats:", error);
      res.status(500).json({ error: "Failed to set stats" });
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

    if (cxIntent === "cx-answer-check") {
      return `You are an AI debate opponent in a CROSS-EXAMINATION period.
Personality: ${personality}
${skillModifier}

DEBATE CONTEXT:
- Topic: "${topic}"
- Your position: ${side === "pro" ? "PRO/AFFIRMATIVE" : "CON/NEGATIVE"}
- You are the QUESTIONER and just asked a question

Your opponent just responded. You need to determine:
1. Did they actually ANSWER your question? (A direct, substantive response to what you asked)
2. Or did they EVADE by asking their own question, deflecting, or not answering?

IF THEY PROPERLY ANSWERED:
- Respond with ONLY: {"isProperAnswer": true}

IF THEY DID NOT ANSWER (asked a question, evaded, or deflected):
- Call them out! Be firm but professional.
- Remind them that YOU are the questioner during this cross-examination period.
- Examples: "I'm asking the questions here. Please answer my question." or "That's not an answer. You don't get to ask questions right now - I do. Answer directly."
- Respond with: {"isProperAnswer": false, "response": "[your callout]"}

CRITICAL: Respond ONLY with valid JSON in one of the two formats above.`;
    }

    if (cxIntent === "crossfire-start") {
      return `You are an AI debate opponent starting a CROSSFIRE period.
Personality: ${personality}
${skillModifier}

DEBATE CONTEXT:
- Topic: "${topic}"
- Your position: ${side === "pro" ? "PRO/AFFIRMATIVE" : "CON/NEGATIVE"}
- This is CROSSFIRE - both sides can ask AND answer questions
- You are STARTING the crossfire by asking the first question

Ask ONE strategic opening question that:
- Challenges a key part of your opponent's case
- Is direct and specific
- Sets you up to expose a weakness

CRITICAL RULES:
1. Ask ONLY ONE question
2. Keep it brief (one sentence)
3. End with a question mark
4. Be challenging but respectful

Ask your opening crossfire question:`;
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

    if (cxIntent === "crossfire-answer-check") {
      return `You are an AI debate opponent in a CROSSFIRE period.
Personality: ${personality}
${skillModifier}

DEBATE CONTEXT:
- Topic: "${topic}"
- Your position: ${side === "pro" ? "PRO/AFFIRMATIVE" : "CON/NEGATIVE"}
- You asked a question and are waiting for an answer

YOUR QUESTION WAS: [The question you asked is in the context]

Your opponent just responded. You need to determine:
1. Did they actually ANSWER your question? (A direct, substantive response)
2. Or did they EVADE by asking their own question, deflecting, or not answering?

IF THEY PROPERLY ANSWERED:
- Respond with ONLY: {"isProperAnswer": true}

IF THEY DID NOT ANSWER (asked a question, evaded, or deflected):
- Call them out! Be firm but professional.
- Remind them it's their turn to answer, not ask questions.
- Examples: "Hold on, I asked you a question first. Please answer it." or "That's not an answer. I'm asking you [repeat question briefly]. Answer directly."
- Respond with: {"isProperAnswer": false, "response": "[your callout]"}

CRITICAL: Respond ONLY with valid JSON in one of the two formats above.`;
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

  // Add variety with different strategic approaches
  const approaches = [
    "Focus on practical, real-world impacts and concrete examples.",
    "Emphasize ethical and moral dimensions of the issue.",
    "Use economic and cost-benefit analysis.",
    "Highlight precedents and historical comparisons.",
    "Focus on rights, freedoms, and individual impacts.",
    "Emphasize systemic effects and long-term consequences.",
    "Use expert opinions and academic research.",
    "Focus on stakeholder perspectives and who is affected.",
  ];
  const randomApproach = approaches[Math.floor(Math.random() * approaches.length)];

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

STRATEGIC APPROACH FOR THIS DEBATE:
${randomApproach}

RULES:
1. Stay in character based on your personality and skill level
2. Make arguments appropriate for your side and the speech type
3. Respond directly to your opponent's points when relevant
4. Keep responses focused and appropriate for the speech (150-300 words for constructives, 100-200 for rebuttals)
5. Use the claim-warrant-impact framework when making arguments
6. Be respectful but competitive
7. Adapt your approach based on the specific speech type
8. IMPORTANT: Make your arguments unique and creative - do not use generic or repetitive points

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
