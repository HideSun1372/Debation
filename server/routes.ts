import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { randomBytes } from "crypto";
import { Readable } from "stream";
import { storage } from "./storage";
import { setupWebSocket } from "./websocket";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { setupAuth, isAuthenticated } from "./auth";
import { z } from "zod";
import { generatePracticePrompt, evaluatePracticeResponse } from "./practice";
import type { PracticeType, DifficultyLevel } from "@shared/lessons/types";
import Stripe from "stripe";
import rateLimit, { ipKeyGenerator } from "express-rate-limit";
import multer from "multer";

const audioUpload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

const debateMessageLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20,
  keyGenerator: (req: any) => req.user?.id || ipKeyGenerator(req),
  message: { error: "Too many requests. Please slow down." },
  standardHeaders: true,
  legacyHeaders: false,
});

const practiceGenerateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  keyGenerator: (req: any) => req.user?.id || ipKeyGenerator(req),
  message: { error: "Too many practice generation requests. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// server/routes.ts

// Use 'any' as a quick bypass or just remove the version property entirely
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // @ts-ignore - This tells TypeScript to stop being a "nerd" about the version
  apiVersion: "2026-01-28.clover", 
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// One-time tokens for success URL: token -> { userId, createdAt }. Deleted after use or when expired.
const checkoutTokens = new Map<string, { userId: string; createdAt: number }>();
const CHECKOUT_TOKEN_TTL_MS = 15 * 60 * 1000; // 15 minutes

function pruneExpiredTokens() {
  const now = Date.now();
  Array.from(checkoutTokens.entries()).forEach(([token, data]) => {
    if (now - data.createdAt > CHECKOUT_TOKEN_TTL_MS) checkoutTokens.delete(token);
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Setup authentication (must be before other routes)
  setupAuth(app);

  // WebSocket for multiplayer debates
  setupWebSocket(httpServer);

  app.get(["/api/webhook", "/api/webhook/"], (_req, res) => {
    res.status(200).send("Stripe webhook endpoint. Use POST from Stripe (or stripe listen). Server is reachable at /api/webhook.");
  });

  const webhookHandler = async (req: express.Request, res: express.Response) => {
    console.log("[Stripe Webhook] POST /api/webhook received");
    const sig = req.headers["stripe-signature"];
    let event: Stripe.Event;

    try {
      const rawBody = (req as any).rawBody;
      if (!rawBody) {
        console.error("[Stripe Webhook] raw body missing");
        return res.status(400).send("Webhook Error: raw body required");
      }
      if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
        console.error("[Stripe Webhook] missing signature or STRIPE_WEBHOOK_SECRET");
        return res.status(400).send("Webhook misconfigured");
      }
      event = stripe.webhooks.constructEvent(
        rawBody,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err: any) {
      console.error("[Stripe Webhook] constructEvent failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      if (event.type === "checkout.session.completed") {
        let session = event.data.object as any;
        let userId = session.metadata?.userId || session.client_reference_id;

        if (!userId && session.id) {
          try {
            const full = await stripe.checkout.sessions.retrieve(session.id);
            session = full as any;
            userId = session.metadata?.userId || session.client_reference_id;
          } catch (e) {
            console.error("[Stripe Webhook] session.retrieve failed:", (e as Error).message);
          }
        }

        if (userId) {
          const uid = String(userId);
          try {
            await storage.updateUser(uid, { isPro: true, proType: "paid" });
            console.log("[Stripe Webhook] Dominion granted for user:", uid);
          } catch (err: any) {
            console.warn("[Stripe Webhook] updateUser failed (user may not exist):", err.message);
            // Return 200 so Stripe doesn't retry; test events have fake userIds
          }
        } else {
          console.warn("[Stripe Webhook] checkout.session.completed but no userId (metadata or client_reference_id)");
        }
      }
    } catch (err: any) {
      console.error("[Stripe Webhook] unexpected error:", err.message);
      // Still return 200 so Stripe doesn't retry on every event
    }

    res.json({ received: true });
  };

  app.post(["/api/webhook", "/api/webhook/"], webhookHandler);

  // Grant Dominion when user returns from checkout (no webhook needed). One-time token in URL expires after use.
  app.post("/api/confirm-checkout", isAuthenticated, async (req: any, res) => {
    try {
      const { session_id: sessionId, token } = req.body;
      if (!sessionId || typeof sessionId !== "string") {
        return res.status(400).json({ error: "session_id required" });
      }
      if (!token || typeof token !== "string") {
        return res.status(400).json({ error: "token required" });
      }
      pruneExpiredTokens();
      const tokenData = checkoutTokens.get(token);
      if (!tokenData) {
        return res.status(400).json({ error: "Invalid or already-used link; complete a new checkout to activate Dominion" });
      }
      const currentUserId = String(req.user.id);
      if (tokenData.userId !== currentUserId) {
        return res.status(403).json({ error: "Token does not match user" });
      }
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (session.status !== "complete") {
        return res.status(400).json({ error: "Checkout not complete" });
      }
      const sessionUserId = (session as any).metadata?.userId || (session as any).client_reference_id;
      if (sessionUserId !== currentUserId) {
        return res.status(403).json({ error: "Session does not match user" });
      }
      checkoutTokens.delete(token); // one-time use: link is dead after this
      await storage.updateUser(currentUserId, { isPro: true, proType: "paid" });
      res.json({ ok: true });
    } catch (e: any) {
      console.error("[confirm-checkout]", e.message);
      res.status(500).json({ error: e.message || "Failed to confirm checkout" });
    }
  });

  // 2. The Checkout Session (The "Redirector")
  app.post("/api/create-checkout-session", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);

    try {
      const userId = String((req.user as any).id);
      const oneTimeToken = randomBytes(24).toString("hex");
      checkoutTokens.set(oneTimeToken, { userId, createdAt: Date.now() });
      pruneExpiredTokens();
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price: 'price_1SwyTGIjMxHslLyBZj3DGSCp', 
          quantity: 1,
        }],
        mode: 'subscription',
        success_url: `${req.headers.origin}/profile?success=true&session_id={CHECKOUT_SESSION_ID}&token=${oneTimeToken}`,
        cancel_url: `${req.headers.origin}/profile?canceled=true`,
        client_reference_id: userId,
        metadata: { userId },
      });
      res.json({ url: session.url });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // Send debate request to a friend (they can accept or decline)
  app.post("/api/debates/request", isAuthenticated, async (req: any, res) => {
    try {
      const { username, topicId, formatId, userSide } = req.body;
      const challengerId = String(req.user.id);

      if (!username || typeof username !== "string" || !topicId || !formatId) {
        return res.status(400).json({ error: "username, topicId, and formatId required" });
      }

      const opponent = await storage.getUserByUsername(username.trim());
      if (!opponent) {
        return res.status(404).json({ error: "User not found" });
      }
      if (opponent.id === challengerId) {
        return res.status(400).json({ error: "Cannot challenge yourself" });
      }

      const friendStatus = await storage.getFriendStatus(challengerId, opponent.id);
      if (friendStatus !== "friends") {
        return res.status(400).json({ error: "You can only challenge friends. Add them as a friend first." });
      }

      const side = (userSide === "pro" || userSide === "con") ? userSide : "pro";
      const request = await storage.createDebateRequest(
        challengerId,
        opponent.id,
        topicId,
        formatId,
        side
      );

      res.status(201).json({ request, message: `Debate request sent to ${opponent.username}` });
    } catch (error) {
      console.error("Error creating debate request:", error);
      res.status(500).json({ error: "Failed to send request" });
    }
  });

  // List debate requests sent by current user (for challenger to poll until accepted)
  app.get("/api/debates/requests/sent", isAuthenticated, async (req: any, res) => {
    try {
      const userId = String(req.user.id);
      const requests = await storage.listDebateRequestsSentBy(userId);
      res.json(requests);
    } catch (error) {
      console.error("Error fetching sent debate requests:", error);
      res.status(500).json({ error: "Failed to fetch requests" });
    }
  });

  // List pending debate requests for current user
  app.get("/api/debates/requests", isAuthenticated, async (req: any, res) => {
    try {
      const userId = String(req.user.id);
      const requests = await storage.listDebateRequestsPendingFor(userId);
      res.json(requests);
    } catch (error) {
      console.error("Error fetching debate requests:", error);
      res.status(500).json({ error: "Failed to fetch requests" });
    }
  });

  // Accept debate request - creates debate and returns it
  app.post("/api/debates/requests/:id/accept", isAuthenticated, async (req: any, res) => {
    try {
      const { id } = req.params;
      const userId = String(req.user.id);

      const debate = await storage.acceptDebateRequest(id);
      if (!debate) {
        return res.status(404).json({ error: "Request not found or already processed" });
      }

      const isRecipient = debate.opponentUserId === userId;
      if (!isRecipient && debate.userId !== userId) {
        return res.status(403).json({ error: "Not authorized to accept this request" });
      }

      const side = debate.userId === userId ? debate.userSide : (debate.userSide === "pro" ? "con" : "pro");
      const debateUrl = `/debate?room=${debate.id}&format=${debate.formatId}&topic=${debate.topicId}&side=${side}`;

      res.json({ debate, debateUrl });
    } catch (error) {
      console.error("Error accepting debate request:", error);
      res.status(500).json({ error: "Failed to accept request" });
    }
  });

  // Decline debate request
  app.post("/api/debates/requests/:id/decline", isAuthenticated, async (req: any, res) => {
    try {
      const { id } = req.params;
      const reqInfo = await storage.getDebateRequest(id);
      if (!reqInfo || reqInfo.status !== "pending") {
        return res.status(404).json({ error: "Request not found or already processed" });
      }
      const userId = String(req.user.id);
      if (reqInfo.toUserId !== userId) {
        return res.status(403).json({ error: "Not authorized to decline this request" });
      }
      await storage.declineDebateRequest(id);
      res.json({ message: "Request declined" });
    } catch (error) {
      console.error("Error declining debate request:", error);
      res.status(500).json({ error: "Failed to decline request" });
    }
  });

  app.post("/api/debates", async (req: any, res) => {
    try {
      const { userId, opponentId, topicId, formatId, userSide } = req.body;

      // If authenticated, force the userId to match the session user
      // This prevents "local-user" debates from being created when a user is actually logged in
      const isAuthenticated = req.isAuthenticated();
      const effectiveUserId = isAuthenticated ? req.user.id : userId;

      console.log(`[CreateDebate] Auth: ${isAuthenticated}, InputUser: ${userId}, EffectiveUser: ${effectiveUserId}`);

      const debate = await storage.createDebate({
        userId: effectiveUserId,
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

  app.get("/api/debates", isAuthenticated, async (req: any, res) => {
    try {
      // Always fetch debates for the authenticated user
      const userId = req.user.id;
      const debates = await storage.getDebatesByUser(userId);

      res.json(debates);
    } catch (error) {
      console.error("Error fetching debates:", error);
      res.status(500).json({ error: "Failed to fetch debates" });
    }
  });

  app.get("/api/debates/:id", isAuthenticated, async (req: any, res) => {
    try {
      const debate = await storage.getDebate(req.params.id);
      if (!debate) {
        return res.status(404).json({ error: "Debate not found" });
      }
      const userId = String(req.user.id);
      if (debate.userId !== userId && debate.opponentUserId !== userId) {
        return res.status(403).json({ error: "Not authorized" });
      }
      const messages = await storage.getDebateMessages(req.params.id);
      res.json({ ...debate, messages });
    } catch (error) {
      console.error("Error fetching debate:", error);
      res.status(500).json({ error: "Failed to fetch debate" });
    }
  });

  app.patch("/api/debates/:id", isAuthenticated, async (req: any, res) => {
    try {
      const debate = await storage.getDebate(req.params.id);
      if (!debate) {
        return res.status(404).json({ error: "Debate not found" });
      }
      const userId = String(req.user.id);
      if (debate.userId !== userId && debate.opponentUserId !== userId) {
        return res.status(403).json({ error: "Not authorized" });
      }
      const { status, result, pointsChange, feedback } = req.body;
      const allowedUpdates: Record<string, any> = {};
      if (status !== undefined) allowedUpdates.status = status;
      if (result !== undefined) allowedUpdates.result = result;
      if (pointsChange !== undefined) allowedUpdates.pointsChange = pointsChange;
      if (feedback !== undefined) allowedUpdates.feedback = feedback;
      const updated = await storage.updateDebate(req.params.id, allowedUpdates);
      res.json(updated);
    } catch (error) {
      console.error("Error updating debate:", error);
      res.status(500).json({ error: "Failed to update debate" });
    }
  });

  app.post("/api/debate/message", isAuthenticated, debateMessageLimiter, async (req: any, res) => {
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

      // Ensure history starts with a user message (Gemini requirement)
      // Filter out leading assistant messages
      while (contextMessages.length > 0 && contextMessages[0].role === "assistant") {
        contextMessages.shift();
      }

      // Add crossfire question context if provided (as system instruction, not history)
      let systemInstruction = systemPrompt;
      if (cxIntent === "crossfire-answer-check" && crossfireQuestion) {
        systemInstruction += `\n\nContext: The question you asked was: "${crossfireQuestion}"`;
      }

      const modelWithSystem = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: systemInstruction
      });

      const chat = modelWithSystem.startChat({
        history: contextMessages.map((m: any) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })),
      });

      const result = await chat.sendMessage(message || "Please continue.");
      const aiResponse = result.response.text();

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
        opponentSkillRange: inputOpponentSkillRange,
        userSkillPoints,
        topic,
        side,
        format,
        opponentUserId: pvpOpponentUserId
      } = req.body;

      let opponentSkillRange = inputOpponentSkillRange;
      if (opponentId === "human" && debateId) {
        const debate = await storage.getDebate(debateId);
        const oppUserId = pvpOpponentUserId || debate?.opponentUserId;
        if (oppUserId) {
          const oppUser = await storage.getUser(oppUserId);
          const oppPoints = oppUser?.skillPoints ?? 500;
          opponentSkillRange = { min: Math.max(0, oppPoints - 100), max: oppPoints + 100 };
        } else {
          opponentSkillRange = { min: 400, max: 600 };
        }
      }

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

      const modelWithSystemEvaluation = genAI.getGenerativeModel({
        model: "gemini-3.1-pro-preview",
        systemInstruction: "You are a professional debate judge. Respond only with valid JSON.",
        generationConfig: { responseMimeType: "application/json" }
      });

      console.log(`[Evaluate] Starting evaluation for debate ${debateId}`);
      const result = await modelWithSystemEvaluation.generateContent(evaluationPrompt);
      const evaluation = JSON.parse(result.response.text());
      console.log(`[Evaluate] AI response received for debate ${debateId}`);

      const pointsChange = calculatePointsChange(
        evaluation.won,
        evaluation.score || 50,
        userSkillPoints,
        (opponentSkillRange.min + opponentSkillRange.max) / 2
      );

      if (debateId) {
        console.log(`[Evaluate] Updating debate ${debateId} to completed`);
        const updatedDebate = await storage.updateDebate(debateId, {
          status: "completed",
          result: evaluation.won ? "win" : "loss",
          pointsChange,
          feedback: evaluation.feedback,
          completedAt: new Date(),
        });

        if (!updatedDebate) {
          console.error(`[Evaluate] Failed to update debate ${debateId} - not found?`);
        } else {
          console.log(`[Evaluate] Debate ${debateId} updated successfully`);
        }

        // Update user stats if authenticated
        if (req.isAuthenticated()) {
          const user = req.user as any;
          const currentPoints = user.skillPoints || 0;
          const newPoints = Math.max(0, currentPoints + pointsChange);

          const updates: any = {
            skillPoints: newPoints,
            totalDebates: (user.totalDebates || 0) + 1
          };

          if (evaluation.won) {
            updates.wins = (user.wins || 0) + 1;
          } else {
            updates.losses = (user.losses || 0) + 1;
          }

          await storage.updateUser(user.id, updates);

          // PvP: also update opponent's stats
          if (updatedDebate?.opponentType === "human" && updatedDebate?.opponentUserId) {
            const oppUserId = updatedDebate.opponentUserId;
            const oppUser = await storage.getUser(oppUserId);
            if (oppUser) {
              const oppPointsChange = -pointsChange;
              const oppNewPoints = Math.max(0, oppUser.skillPoints + oppPointsChange);
              const oppUpdates: any = {
                skillPoints: oppNewPoints,
                totalDebates: (oppUser.totalDebates || 0) + 1
              };
              if (evaluation.won) {
                oppUpdates.losses = (oppUser.losses || 0) + 1;
              } else {
                oppUpdates.wins = (oppUser.wins || 0) + 1;
              }
              await storage.updateUser(oppUserId, oppUpdates);
            }
          }
        }
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
        console.log(`[Evaluate] Error fallback: Updating debate ${req.body.debateId} to completed`);
        const updatedDebate = await storage.updateDebate(req.body.debateId, {
          status: "completed",
          result: randomWon ? "win" : "loss",
          pointsChange,
          feedback: "Your debate showed promise. Continue practicing to improve your argumentation skills.",
          completedAt: new Date(),
        });

        if (!updatedDebate) {
          console.error(`[Evaluate] Error fallback: Failed to update debate ${req.body.debateId}`);
        }

        // Also update stats on error fallback
        if (req.isAuthenticated()) {
          try {
            const user = req.user as any;
            const currentPoints = user.skillPoints || 0;
            const newPoints = Math.max(0, currentPoints + pointsChange);

            const updates: any = {
              skillPoints: newPoints,
              totalDebates: (user.totalDebates || 0) + 1
            };

            if (randomWon) {
              updates.wins = (user.wins || 0) + 1;
            } else {
              updates.losses = (user.losses || 0) + 1;
            }

            await storage.updateUser(user.id, updates);
            console.log(`[Evaluate] Error fallback: Updated stats for user ${user.id}`);
          } catch (statError) {
            console.error(`[Evaluate] Error fallback: Failed to update stats:`, statError);
          }
        }
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

      const modelWithSystemCrossfire = genAI.getGenerativeModel({
        model: "gemini-3.1-pro-preview",
        systemInstruction: "You are a debate evaluator. Respond only with valid JSON. Be lenient - if they made any attempt to answer, consider it complete.",
        generationConfig: { responseMimeType: "application/json" }
      });

      const result = await modelWithSystemCrossfire.generateContent(evaluationPrompt);
      const evaluation = JSON.parse(result.response.text());

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

  // Search users by username (authenticated)
  app.get("/api/users/search", isAuthenticated, async (req: any, res) => {
    try {
      const q = (req.query.q as string)?.trim() ?? "";
      const limit = Math.min(parseInt(req.query.limit as string, 10) || 30, 50);
      const users = await storage.searchUsers(q, limit);
      res.json(users);
    } catch (error) {
      console.error("Error searching users:", error);
      res.status(500).json({ error: "Failed to search users" });
    }
  });

  // Discover users (recent, for browsing)
  app.get("/api/users/discover", isAuthenticated, async (req: any, res) => {
    try {
      const limit = Math.min(parseInt(req.query.limit as string, 10) || 24, 50);
      const users = await storage.listUsersDiscover(limit);
      res.json(users);
    } catch (error) {
      console.error("Error listing users:", error);
      res.status(500).json({ error: "Failed to discover users" });
    }
  });

  // Public profile by username (stats only; includes friendStatus for authenticated viewer)
  app.get("/api/users/profile/:username", isAuthenticated, async (req: any, res) => {
    try {
      let username: string;
      try {
        username = decodeURIComponent(req.params.username || "");
      } catch {
        return res.status(400).json({ error: "Invalid username in URL" });
      }
      if (!username.trim()) return res.status(400).json({ error: "Username is required" });
      const user = await storage.getUserByUsername(username.trim());
      if (!user) return res.status(404).json({ error: "User not found" });
      const isCreator = user.email === CREATOR_EMAIL;
      const isDeveloper =
        isCreator ||
        (user as any).isDeveloper === true ||
        (process.env.ADMIN_EMAIL && user.email === process.env.ADMIN_EMAIL);
      const publicProfile = {
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        bio: user.bio,
        isCreator,
        isDeveloper: !!isDeveloper,
        isPro: user.isPro,
        skillPoints: user.skillPoints,
        totalDebates: user.totalDebates,
        wins: user.wins,
        losses: user.losses,
      };
      // Support both full user object and serialized id from session
      const meId = String((req.user && typeof (req.user as any).id !== "undefined" ? (req.user as any).id : req.user) ?? "");
      if (!meId) return res.status(401).json({ error: "Not authenticated" });
      if (meId !== user.id) {
        let friendStatus: "none" | "pending_sent" | "pending_received" | "friends";
        try {
          friendStatus = await storage.getFriendStatus(meId, user.id);
        } catch (fsErr) {
          const e = fsErr as Error;
          console.error("Error in getFriendStatus (returning none):", e.message, e.stack);
          friendStatus = "none";
        }
        return res.json({ ...publicProfile, friendStatus });
      }
      res.json({ ...publicProfile, friendStatus: "self" });
    } catch (error) {
      const err = error as Error;
      console.error("Error fetching profile:", err.message, err.stack);
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });

  const friendUsernameSchema = z.object({
    username: z.string().min(1, "username is required").max(255).transform((s) => s.trim()),
  });

  // Helper: get current user id from session (supports full user object or serialized id)
  const getMeId = (req: any) => String((req.user && typeof (req.user as any).id !== "undefined" ? (req.user as any).id : req.user) ?? "");

  // Send friend request
  app.post("/api/friends/request", isAuthenticated, async (req: any, res) => {
    try {
      const parseResult = friendUsernameSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.errors[0]?.message ?? "Invalid request", details: parseResult.error.errors });
      }
      const { username } = parseResult.data;
      const target = await storage.getUserByUsername(username);
      if (!target) return res.status(404).json({ error: "User not found" });
      const meId = getMeId(req);
      if (!meId) return res.status(401).json({ error: "Not authenticated" });
      if (target.id === meId) return res.status(400).json({ error: "Cannot send request to yourself" });
      const existing = await storage.getFriendRequest(meId, target.id);
      if (existing) {
        if (existing.status === "accepted") return res.status(400).json({ error: "Already friends" });
        return res.status(400).json({ error: "Friend request already sent" });
      }
      const fromThem = await storage.getFriendRequest(target.id, meId);
      if (fromThem && fromThem.status === "pending") {
        return res.status(400).json({ error: "They already sent you a request - accept it instead" });
      }
      await storage.createFriendRequest(meId, target.id);
      res.json({ success: true, message: `Friend request sent to ${target.username}` });
    } catch (error: any) {
      if (error.message === "Friend request already exists") return res.status(400).json({ error: error.message });
      console.error("Error sending friend request:", error);
      res.status(500).json({ error: "Failed to send request" });
    }
  });

  // Accept friend request
  app.post("/api/friends/accept", isAuthenticated, async (req: any, res) => {
    try {
      const parseResult = friendUsernameSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.errors[0]?.message ?? "Invalid request", details: parseResult.error.errors });
      }
      const { username } = parseResult.data;
      const fromUser = await storage.getUserByUsername(username);
      if (!fromUser) return res.status(404).json({ error: "User not found" });
      const meId = getMeId(req);
      if (!meId) return res.status(401).json({ error: "Not authenticated" });
      const request = await storage.getFriendRequest(fromUser.id, meId);
      if (!request || request.status !== "pending") {
        return res.status(400).json({ error: "No pending request from that user" });
      }
      await storage.acceptFriendRequest(fromUser.id, meId);
      res.json({ success: true, message: `You are now friends with ${fromUser.username}` });
    } catch (error) {
      console.error("Error accepting friend request:", error);
      res.status(500).json({ error: "Failed to accept request" });
    }
  });

  // Reject / decline friend request (recipient declines a pending request)
  app.post("/api/friends/reject", isAuthenticated, async (req: any, res) => {
    try {
      const parseResult = friendUsernameSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.errors[0]?.message ?? "Invalid request", details: parseResult.error.errors });
      }
      const { username } = parseResult.data;
      const fromUser = await storage.getUserByUsername(username);
      if (!fromUser) return res.status(404).json({ error: "User not found" });
      const meId = getMeId(req);
      if (!meId) return res.status(401).json({ error: "Not authenticated" });
      const request = await storage.getFriendRequest(fromUser.id, meId);
      if (!request || request.status !== "pending") {
        return res.status(400).json({ error: "No pending request from that user" });
      }
      await storage.deleteFriendRequest(fromUser.id, meId);
      res.json({ success: true, message: "Friend request declined" });
    } catch (error) {
      console.error("Error rejecting friend request:", error);
      res.status(500).json({ error: "Failed to decline request" });
    }
  });

  // Cancel friend request (sender cancels their own pending request)
  app.delete("/api/friends/requests", isAuthenticated, async (req: any, res) => {
    try {
      const parseResult = friendUsernameSchema.safeParse(req.query);
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.errors[0]?.message ?? "Invalid request", details: parseResult.error.errors });
      }
      const { username } = parseResult.data;
      const target = await storage.getUserByUsername(username);
      if (!target) return res.status(404).json({ error: "User not found" });
      const meId = getMeId(req);
      if (!meId) return res.status(401).json({ error: "Not authenticated" });
      const request = await storage.getFriendRequest(meId, target.id);
      if (!request || request.status !== "pending") {
        return res.status(400).json({ error: "No pending request to that user" });
      }
      await storage.deleteFriendRequest(meId, target.id);
      res.json({ success: true, message: "Friend request cancelled" });
    } catch (error) {
      console.error("Error cancelling friend request:", error);
      res.status(500).json({ error: "Failed to cancel request" });
    }
  });

  // Unfriend (remove accepted friendship)
  app.delete("/api/friends", isAuthenticated, async (req: any, res) => {
    try {
      const parseResult = friendUsernameSchema.safeParse(req.query);
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.errors[0]?.message ?? "Invalid request", details: parseResult.error.errors });
      }
      const { username } = parseResult.data;
      const other = await storage.getUserByUsername(username);
      if (!other) return res.status(404).json({ error: "User not found" });
      const meId = getMeId(req);
      if (!meId) return res.status(401).json({ error: "Not authenticated" });
      if (other.id === meId) return res.status(400).json({ error: "Cannot unfriend yourself" });
      await storage.removeFriendship(meId, other.id);
      res.json({ success: true, message: "Friend removed" });
    } catch (error) {
      console.error("Error removing friend:", error);
      res.status(500).json({ error: "Failed to remove friend" });
    }
  });

  // List pending friend requests (received)
  app.get("/api/friends/requests", isAuthenticated, async (req: any, res) => {
    try {
      const meId = getMeId(req);
      if (!meId) return res.status(401).json({ error: "Not authenticated" });
      const list = await storage.listPendingReceived(meId);
      res.json(list);
    } catch (error) {
      console.error("Error listing requests:", error);
      res.status(500).json({ error: "Failed to list requests" });
    }
  });

  // List my friends
  app.get("/api/friends", isAuthenticated, async (req: any, res) => {
    try {
      const meId = getMeId(req);
      if (!meId) return res.status(401).json({ error: "Not authenticated" });
      const friends = await storage.listFriends(meId);
      res.json(friends);
    } catch (error) {
      console.error("Error listing friends:", error);
      res.status(500).json({ error: "Failed to list friends" });
    }
  });

  // Delete own account (authenticated)
  app.delete("/api/user", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.id;
      await storage.deleteUser(userId);
      req.logout((err: any) => {
        if (err) console.error("Logout after delete:", err);
        res.json({ success: true, message: "Account deleted" });
      });
    } catch (error) {
      console.error("Error deleting account:", error);
      res.status(500).json({ error: "Failed to delete account" });
    }
  });

  // Creator: the original dev; cannot have dev revoked and has "Creator" badge
  const CREATOR_EMAIL = "siqichen0802@gmail.com";

  // Check if user is admin/developer/creator
  app.get("/api/auth/admin", isAuthenticated, async (req: any, res) => {
    try {
      const user = req.user;

      const isCreator = user.email === CREATOR_EMAIL;

      // Developer: Creator email, env ADMIN_EMAIL, or DB flag
      const isDeveloper =
        isCreator ||
        (user as any).isDeveloper === true ||
        (process.env.ADMIN_EMAIL && user.email === process.env.ADMIN_EMAIL);

      const isAdmin = isDeveloper;

      res.json({ isAdmin, isDeveloper, isCreator });
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
      // Gemini does not support text-to-speech directly in the same way. 
      // Returning a 501 Not Implemented or a placeholder audio/error.
      console.warn("TTS requested but Gemini migration de-scoped TTS.");
      return res.status(501).json({ error: "Text-to-Speech is not supported with Gemini yet." });

      /* 
      // Original OpenAI Code for reference:
      const response = await openai.chat.completions.create({
        model: "gpt-audio-mini",
        ...
      */

      // Extract audio from response content parts
      /*
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
      */
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

  app.post("/api/practice/generate", isAuthenticated, practiceGenerateLimiter, async (req: any, res) => {
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

  app.post("/api/practice/hint", async (req, res) => {
    try {
      const { practiceType, difficulty, context } = req.body;
      const { generatePracticeHint } = await import("./practice");

      const hint = await generatePracticeHint(
        practiceType,
        difficulty,
        context
      );

      res.json({ hint });
    } catch (error) {
      console.error("Error generating hint:", error);
      res.status(500).json({ error: "Failed to generate hint" });
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
      user.email === CREATOR_EMAIL ||
      (user as any).isDeveloper === true ||
      (process.env.ADMIN_EMAIL && user.email === process.env.ADMIN_EMAIL);
    if (!isDev) {
      return res.status(403).json({ error: "Developer access required" });
    }
    next();
  };

  // Middleware: only the Creator can grant/revoke dev privileges
  const isCreatorMiddleware = async (req: any, res: any, next: any) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    if (req.user.email !== CREATOR_EMAIL) {
      return res.status(403).json({ error: "Only the Creator can grant or revoke developer privileges" });
    }
    next();
  };

  // Resolve target user: body.username -> that user's id; else current user's id
  async function resolveTargetUserId(req: any): Promise<{ userId: string; forUsername: string }> {
    const username = req.body?.username;
    if (username && typeof username === "string" && username.trim()) {
      const target = await storage.getUserByUsername(username.trim());
      if (!target) throw new Error(`User not found: ${username}`);
      return { userId: target.id, forUsername: target.username };
    }
    return { userId: req.user.id, forUsername: (req.user as any).username };
  }

  // Unlock all lessons (mark as complete)
  app.post("/api/dev/unlock-all", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const { userId, forUsername } = await resolveTargetUserId(req);

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
        message: forUsername ? `Unlocked ${allLessonIds.length} lessons for ${forUsername}` : `Unlocked ${allLessonIds.length} lessons`,
        completedLessonIds: allLessonIds
      });
    } catch (error: any) {
      if (error.message?.startsWith("User not found")) return res.status(404).json({ error: error.message });
      console.error("Error unlocking lessons:", error);
      res.status(500).json({ error: "Failed to unlock lessons" });
    }
  });

  // Instant complete a specific lesson
  app.post("/api/dev/complete-lesson", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const { userId } = await resolveTargetUserId(req);
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
    } catch (error: any) {
      if (error.message?.startsWith("User not found")) return res.status(404).json({ error: error.message });
      console.error("Error completing lesson:", error);
      res.status(500).json({ error: "Failed to complete lesson" });
    }
  });

  // Set skill points to any value
  app.post("/api/dev/set-skill-points", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const { userId, forUsername } = await resolveTargetUserId(req);
      const { points } = req.body;

      if (typeof points !== "number" || points < 0) {
        return res.status(400).json({ error: "points must be a non-negative number" });
      }

      const updatedUser = await storage.updateUser(userId, {
        skillPoints: points,
      });

      res.json({
        success: true,
        message: forUsername ? `Set skill points to ${points} for ${forUsername}` : `Set skill points to ${points}`,
        user: updatedUser
      });
    } catch (error: any) {
      if (error.message?.startsWith("User not found")) return res.status(404).json({ error: error.message });
      console.error("Error setting skill points:", error);
      res.status(500).json({ error: "Failed to set skill points" });
    }
  });

  // Reset all lesson progress
  app.post("/api/dev/reset-progress", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const { userId, forUsername } = await resolveTargetUserId(req);

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
        message: forUsername ? `Progress reset for ${forUsername}` : "Progress reset to initial state"
      });
    } catch (error: any) {
      if (error.message?.startsWith("User not found")) return res.status(404).json({ error: error.message });
      console.error("Error resetting progress:", error);
      res.status(500).json({ error: "Failed to reset progress" });
    }
  });


  // Set wins/losses/total debates
  app.post("/api/dev/set-stats", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const { userId, forUsername } = await resolveTargetUserId(req);
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
        message: forUsername ? `Stats updated for ${forUsername}` : "Stats updated",
        user: updatedUser,
      });
    } catch (error: any) {
      if (error.message?.startsWith("User not found")) return res.status(404).json({ error: error.message });
      console.error("Error setting stats:", error);
      res.status(500).json({ error: "Failed to set stats" });
    }
  });

  // Grant Dominion (for testing when webhook doesn't fire)
  app.post("/api/dev/grant-dominion", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const { userId, forUsername } = await resolveTargetUserId(req);
      await storage.updateUser(userId, { isPro: true, proType: "paid" });
      res.json({ success: true, message: forUsername ? `Dominion granted for ${forUsername}` : "Dominion granted" });
    } catch (error: any) {
      if (error.message?.startsWith("User not found")) return res.status(404).json({ error: error.message });
      console.error("Error granting Dominion:", error);
      res.status(500).json({ error: "Failed to grant Dominion" });
    }
  });

  // Revoke Dominion (for testing subscription flow)
  app.post("/api/dev/revoke-dominion", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const { userId, forUsername } = await resolveTargetUserId(req);
      await storage.updateUser(userId, { isPro: false, proType: "free" });
      res.json({
        success: true,
        message: forUsername ? `Dominion revoked for ${forUsername}` : "Dominion revoked",
      });
    } catch (error: any) {
      if (error.message?.startsWith("User not found")) return res.status(404).json({ error: error.message });
      console.error("Error revoking Dominion:", error);
      res.status(500).json({ error: "Failed to revoke Dominion" });
    }
  });

  // Make another user a developer (Creator only)
  app.post("/api/dev/promote-developer", isDeveloperMiddleware, isCreatorMiddleware, async (req: any, res) => {
    try {
      const { username } = req.body;
      if (!username || typeof username !== "string" || !username.trim()) {
        return res.status(400).json({ error: "username is required" });
      }
      const target = await storage.getUserByUsername(username.trim());
      if (!target) return res.status(404).json({ error: `User not found: ${username}` });
      await storage.updateUser(target.id, { isDeveloper: true });
      res.json({ success: true, message: `${target.username} is now a developer` });
    } catch (error: any) {
      console.error("Error promoting developer:", error);
      res.status(500).json({ error: "Failed to promote developer" });
    }
  });

  // Revoke a user's developer status (Creator only). Creator cannot be revoked.
  app.post("/api/dev/revoke-developer", isDeveloperMiddleware, isCreatorMiddleware, async (req: any, res) => {
    try {
      const { username } = req.body;
      if (!username || typeof username !== "string" || !username.trim()) {
        return res.status(400).json({ error: "username is required" });
      }
      const target = await storage.getUserByUsername(username.trim());
      if (!target) return res.status(404).json({ error: `User not found: ${username}` });
      if (target.email === CREATOR_EMAIL) {
        return res.status(400).json({ error: "The Creator's developer privileges cannot be revoked" });
      }
      await storage.updateUser(target.id, { isDeveloper: false });
      res.json({ success: true, message: `Developer privileges revoked for ${target.username}` });
    } catch (error: any) {
      console.error("Error revoking developer:", error);
      res.status(500).json({ error: "Failed to revoke developer" });
    }
  });

  // Delete another user's account (developer only; requires username in body)
  app.post("/api/dev/delete-user", isDeveloperMiddleware, async (req: any, res) => {
    try {
      const { username } = req.body;
      if (!username || typeof username !== "string" || !username.trim()) {
        return res.status(400).json({ error: "username is required" });
      }
      const target = await storage.getUserByUsername(username.trim());
      if (!target) return res.status(404).json({ error: `User not found: ${username}` });
      const currentUserId = req.user.id;
      if (target.id === currentUserId) {
        return res.status(400).json({ error: "Use the profile page to delete your own account" });
      }
      await storage.deleteUser(target.id);
      res.json({ success: true, message: `Account ${target.username} has been deleted` });
    } catch (error: any) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  });

  // ── Gemini 2.5 Flash TTS ──────────────────────────────────────────────
  // POST /api/tts/stream  { text: string }
  // Returns audio blob using Gemini 2.5 Flash TTS.
  app.post("/api/tts/stream", isAuthenticated, async (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== "string") {
      return res.status(400).json({ error: "text is required" });
    }

    try {
      console.log("[TTS] Calling Gemini 2.5 Flash TTS for:", text.substring(0, 50));

      const apiKey = process.env.GEMINI_API_KEY;
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text }] }],
            generationConfig: {
              responseModalities: ["AUDIO"],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: {
                    voiceName: "Kore",
                  },
                },
              },
            },
          }),
        }
      );

      if (!response.ok) {
        const error = await response.text();
        console.error("[TTS] API error:", error);
        return res.status(response.status).json({ error });
      }

      const data = await response.json();
      console.log("[TTS] Gemini response keys:", Object.keys(data));
      console.log("[TTS] Candidates:", data.candidates?.length);
      if (data.candidates?.[0]) {
        console.log("[TTS] First candidate keys:", Object.keys(data.candidates[0]));
        console.log("[TTS] Content keys:", Object.keys(data.candidates[0].content || {}));
        console.log("[TTS] Parts:", data.candidates[0].content?.parts?.length);
        if (data.candidates[0].content?.parts?.[0]) {
          console.log("[TTS] First part keys:", Object.keys(data.candidates[0].content.parts[0]));
        }
      }

      const audioData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!audioData) {
        console.error("[TTS] No audio data in response", JSON.stringify(data, null, 2));
        return res.status(500).json({ error: "TTS failed to generate audio - no audio data in response" });
      }

      const pcmData = Buffer.from(audioData, "base64");
      console.log("[TTS] Generated PCM audio:", pcmData.length, "bytes");

      if (pcmData.length === 0) {
        console.error("[TTS] PCM data is empty!");
        return res.status(500).json({ error: "TTS generated empty audio" });
      }

      // Convert PCM to WAV format
      const sampleRate = 24000;
      const channels = 1;
      const bitsPerSample = 16;
      const byteRate = sampleRate * channels * bitsPerSample / 8;
      const blockAlign = channels * bitsPerSample / 8;

      // WAV header (44 bytes)
      const wavHeader = Buffer.alloc(44);
      wavHeader.write("RIFF", 0);
      wavHeader.writeUInt32LE(36 + pcmData.length, 4); // File size - 8
      wavHeader.write("WAVE", 8);
      wavHeader.write("fmt ", 12);
      wavHeader.writeUInt32LE(16, 16); // Subchunk1Size
      wavHeader.writeUInt16LE(1, 20); // AudioFormat (1 = PCM)
      wavHeader.writeUInt16LE(channels, 22);
      wavHeader.writeUInt32LE(sampleRate, 24);
      wavHeader.writeUInt32LE(byteRate, 28);
      wavHeader.writeUInt16LE(blockAlign, 32);
      wavHeader.writeUInt16LE(bitsPerSample, 34);
      wavHeader.write("data", 36);
      wavHeader.writeUInt32LE(pcmData.length, 40);

      const wavBuffer = Buffer.concat([wavHeader, pcmData]);
      console.log("[TTS] Converted to WAV:", wavBuffer.length, "bytes (header: 44, data:", pcmData.length, ")");
      console.log("[TTS] WAV header:", wavHeader.toString("hex").substring(0, 20));
      res.setHeader("Content-Type", "audio/wav");
      res.setHeader("Content-Length", wavBuffer.length);
      res.send(wavBuffer);
    } catch (err: any) {
      console.error("[TTS] Error:", err.message);
      res.status(500).json({ error: "TTS request failed: " + err.message });
    }
  });

  // ── Gemini 2.5 Flash STT (Speech-to-Text) ──────────────────────────────────
  // POST /api/transcribe  multipart: audio file
  // Uploads audio to Gemini Files API via REST, transcribes, returns { transcript: string }.
  app.post("/api/transcribe", isAuthenticated, audioUpload.single("audio"), async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "audio file required" });
    }

    try {
      console.log("[STT] Received audio file:", req.file.mimetype, req.file.size, "bytes");
      const apiKey = process.env.GEMINI_API_KEY;

      // Upload file to Gemini Files API via REST
      const uploadFormData = new FormData();
      uploadFormData.append("file", new Blob([req.file.buffer], { type: req.file.mimetype }));

      console.log("[STT] Uploading to Gemini Files API...");
      const uploadRes = await fetch(
        `https://generativelanguage.googleapis.com/upload/v1beta/files?key=${apiKey}`,
        {
          method: "POST",
          body: uploadFormData,
        }
      );

      if (!uploadRes.ok) {
        const err = await uploadRes.text();
        console.error("[STT] Upload failed:", err);
        return res.status(uploadRes.status).json({ error: "File upload failed" });
      }

      const uploadData = await uploadRes.json();
      const fileUri = uploadData.file.uri;
      console.log("[STT] File uploaded, URI:", fileUri);

      // Call Gemini 2.5 Flash to transcribe
      console.log("[STT] Calling Gemini 2.5 Flash for transcription...");
      const transcribeRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: "Please transcribe this audio file and return only the transcribed text, nothing else.",
                  },
                  {
                    fileData: {
                      mimeType: req.file.mimetype,
                      fileUri: fileUri,
                    },
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!transcribeRes.ok) {
        const err = await transcribeRes.text();
        console.error("[STT] Transcription API error:", err);
        return res.status(transcribeRes.status).json({ error: "Transcription failed" });
      }

      const transcribeData = await transcribeRes.json();
      const transcript = transcribeData.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

      if (!transcript) {
        console.error("[STT] No transcript in response:", JSON.stringify(transcribeData));
        return res.status(500).json({ error: "Failed to extract transcript" });
      }

      console.log("[STT] Transcription complete:", transcript);

      // Clean up: delete the uploaded file
      console.log("[STT] Deleting uploaded file...");
      await fetch(`https://generativelanguage.googleapis.com/v1beta/${uploadData.file.name}?key=${apiKey}`, {
        method: "DELETE",
      });

      res.json({ transcript });
    } catch (err: any) {
      console.error("[STT] Error:", err.message);
      res.status(500).json({ error: "Transcription request failed: " + err.message });
    }
  });

  // AI-powered personalized insights based on debate history
  app.get("/api/insights", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.id;
      const user = await storage.getUser(userId);
      if (!user) return res.status(404).json({ error: "User not found" });

      const debates = await storage.getDebatesByUser(userId);
      const completedDebates = debates.filter(d => d.status === "completed");

      // Need at least 1 completed debate to give insights
      if (completedDebates.length === 0) {
        return res.json({
          hasData: false,
          message: "Complete your first debate to get personalized insights!",
        });
      }

      // Stats (always computed fresh — cheap)
      const wins = completedDebates.filter(d => d.result === "win").length;
      const losses = completedDebates.filter(d => d.result === "loss").length;
      const formatCounts: Record<string, { total: number; wins: number }> = {};
      for (const d of completedDebates) {
        if (!formatCounts[d.formatId]) formatCounts[d.formatId] = { total: 0, wins: 0 };
        formatCounts[d.formatId].total++;
        if (d.result === "win") formatCounts[d.formatId].wins++;
      }

      const stats = {
        totalDebates: completedDebates.length,
        wins,
        losses,
        winRate: completedDebates.length > 0 ? Math.round((wins / completedDebates.length) * 100) : 0,
        skillPoints: user.skillPoints,
        formatCounts,
      };

      // Return cached insights if debate count hasn't changed
      if (user.cachedInsights && user.insightsDebateCount === completedDebates.length) {
        try {
          const insights = JSON.parse(user.cachedInsights);
          return res.json({ hasData: true, insights, stats });
        } catch {
          // Corrupted cache — fall through to regenerate
        }
      }

      // Generate fresh insights with AI
      const recentDebates = completedDebates.slice(0, 10);
      const debateSummaries = recentDebates.map(d => ({
        format: d.formatId,
        topic: d.topicId,
        side: d.userSide,
        result: d.result,
        pointsChange: d.pointsChange,
        feedback: d.feedback,
        date: d.completedAt || d.startedAt,
      }));

      const prompt = `You are a debate coach AI. Analyze this student's debate history and provide personalized improvement advice.

STUDENT STATS:
- Skill Points: ${user.skillPoints}
- Total Debates: ${completedDebates.length}
- Wins: ${wins}, Losses: ${losses}
- Win Rate: ${stats.winRate}%

FORMAT BREAKDOWN:
${Object.entries(formatCounts).map(([fmt, s]) => `- ${fmt}: ${s.total} debates, ${s.wins} wins (${Math.round((s.wins / s.total) * 100)}% win rate)`).join("\n")}

RECENT DEBATE FEEDBACK:
${debateSummaries.map((d, i) => `${i + 1}. Format: ${d.format}, Side: ${d.side}, Result: ${d.result}, Points: ${(d.pointsChange ?? 0) > 0 ? "+" : ""}${d.pointsChange ?? 0}\n   Feedback: ${d.feedback || "No feedback available"}`).join("\n\n")}

Based on this data, respond in EXACTLY this JSON format (no markdown, no code blocks, just raw JSON):
{
  "strengths": ["strength 1", "strength 2"],
  "improvements": ["area to improve 1", "area to improve 2", "area to improve 3"],
  "formatRecommendation": {
    "format": "format-id to practice more",
    "reason": "why this format would help"
  },
  "tips": ["specific actionable tip 1", "specific actionable tip 2", "specific actionable tip 3"],
  "summary": "A 1-2 sentence overall assessment of the student's debate skills and trajectory"
}

Keep each string concise (under 20 words for array items, under 40 words for summary/reason). Be encouraging but honest.`;

      const insightsModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await insightsModel.generateContent(prompt);
      const text = result.response.text().trim();

      let insights;
      try {
        const cleaned = text.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
        insights = JSON.parse(cleaned);
      } catch {
        console.error("[Insights] Failed to parse AI response:", text);
        return res.status(500).json({ error: "Failed to parse insights" });
      }

      // Cache insights in the database
      await storage.updateUser(userId, {
        cachedInsights: JSON.stringify(insights),
        insightsDebateCount: completedDebates.length,
      });

      res.json({ hasData: true, insights, stats });
    } catch (err: any) {
      console.error("[Insights] Error:", err.message);
      res.status(500).json({ error: "Failed to generate insights" });
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
  // Handle cross-examination AND crossfire with specific intents
  if ((speechType === "cross-examination" || speechType === "crossfire") && cxIntent) {
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
