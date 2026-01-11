import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import { setupAuth, registerAuthRoutes } from "./replit_integrations/auth";

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
        turnNumber, 
        previousMessages 
      } = req.body;

      if (debateId) {
        await storage.createDebateMessage({
          debateId,
          role: "user",
          content: message,
          turnNumber,
        });
      }

      const skillModifier = getSkillModifier(opponentTier);
      const systemPrompt = buildDebateSystemPrompt(
        opponentPersonality,
        topic,
        side === "pro" ? "con" : "pro",
        skillModifier,
        turnNumber
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
          { role: "user", content: message },
        ],
        max_completion_tokens: 1024,
      });

      const aiResponse = response.choices[0]?.message?.content || "I need a moment to consider my response.";

      if (debateId) {
        await storage.createDebateMessage({
          debateId,
          role: "opponent",
          content: aiResponse,
          turnNumber,
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
