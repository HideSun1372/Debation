import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Skill Tiers
export const SKILL_TIERS = {
  BEGINNER: { name: "Beginner", minPoints: 0, maxPoints: 999 },
  INTERMEDIATE: { name: "Intermediate", minPoints: 1000, maxPoints: 1999 },
  ADVANCED: { name: "Advanced", minPoints: 2000, maxPoints: 2999 },
  MASTER: { name: "Master", minPoints: 3000, maxPoints: Infinity },
} as const;

export function getSkillTier(points: number): keyof typeof SKILL_TIERS {
  if (points >= 3000) return "MASTER";
  if (points >= 2000) return "ADVANCED";
  if (points >= 1000) return "INTERMEDIATE";
  return "BEGINNER";
}

export function getTierProgress(points: number): number {
  const tier = getSkillTier(points);
  const tierInfo = SKILL_TIERS[tier];
  if (tier === "MASTER") return 100;
  const range = tierInfo.maxPoints - tierInfo.minPoints + 1;
  const progress = points - tierInfo.minPoints;
  return Math.min(100, Math.round((progress / range) * 100));
}

// Debate Formats
export const DEBATE_FORMATS = [
  { id: "lincoln-douglas", name: "Lincoln-Douglas", description: "One-on-one value debate focusing on philosophical and ethical issues", timeLimit: 6 },
  { id: "public-forum", name: "Public Forum", description: "Team debate on current events topics designed for general audiences", timeLimit: 4 },
  { id: "policy", name: "Policy Debate", description: "In-depth research-based debate on a year-long resolution", timeLimit: 8 },
  { id: "parliamentary", name: "Parliamentary", description: "Impromptu debate with limited prep time on diverse topics", timeLimit: 5 },
] as const;

export type DebateFormat = typeof DEBATE_FORMATS[number];

// AI Opponents - 10 per tier
export const AI_OPPONENTS = [
  // Beginner Tier (0-999)
  { id: "b1", name: "Novice Nick", tier: "BEGINNER", minSkill: 0, maxSkill: 99, personality: "Friendly and encouraging, makes simple arguments" },
  { id: "b2", name: "Starter Sam", tier: "BEGINNER", minSkill: 100, maxSkill: 199, personality: "Casual debater, sometimes forgets to support claims" },
  { id: "b3", name: "Learner Leo", tier: "BEGINNER", minSkill: 200, maxSkill: 299, personality: "Curious and asks good questions but weak rebuttals" },
  { id: "b4", name: "Beginner Bella", tier: "BEGINNER", minSkill: 300, maxSkill: 399, personality: "Enthusiastic but predictable in arguments" },
  { id: "b5", name: "Rookie Riley", tier: "BEGINNER", minSkill: 400, maxSkill: 499, personality: "Shows potential, occasionally makes good points" },
  { id: "b6", name: "Trainee Taylor", tier: "BEGINNER", minSkill: 500, maxSkill: 599, personality: "Methodical but slow to adapt to new arguments" },
  { id: "b7", name: "Apprentice Alex", tier: "BEGINNER", minSkill: 600, maxSkill: 699, personality: "Growing skills, starting to use evidence" },
  { id: "b8", name: "Developing Dana", tier: "BEGINNER", minSkill: 700, maxSkill: 799, personality: "Solid basics, preparing for intermediate level" },
  { id: "b9", name: "Rising Robin", tier: "BEGINNER", minSkill: 800, maxSkill: 899, personality: "Strong for a beginner, good structure" },
  { id: "b10", name: "Emerging Eli", tier: "BEGINNER", minSkill: 900, maxSkill: 999, personality: "Top beginner, ready to advance" },
  // Intermediate Tier (1000-1999)
  { id: "i1", name: "Debater Dylan", tier: "INTERMEDIATE", minSkill: 1000, maxSkill: 1099, personality: "Solid fundamentals, uses evidence effectively" },
  { id: "i2", name: "Arguer Avery", tier: "INTERMEDIATE", minSkill: 1100, maxSkill: 1199, personality: "Strong logical reasoning skills" },
  { id: "i3", name: "Reasoner Reagan", tier: "INTERMEDIATE", minSkill: 1200, maxSkill: 1299, personality: "Good at finding weaknesses in arguments" },
  { id: "i4", name: "Logical Logan", tier: "INTERMEDIATE", minSkill: 1300, maxSkill: 1399, personality: "Excellent structure and organization" },
  { id: "i5", name: "Strategic Sydney", tier: "INTERMEDIATE", minSkill: 1400, maxSkill: 1499, personality: "Plans ahead and sets up arguments" },
  { id: "i6", name: "Analytical Ash", tier: "INTERMEDIATE", minSkill: 1500, maxSkill: 1599, personality: "Deep analysis of complex issues" },
  { id: "i7", name: "Persuasive Parker", tier: "INTERMEDIATE", minSkill: 1600, maxSkill: 1699, personality: "Compelling delivery and rhetoric" },
  { id: "i8", name: "Skilled Sage", tier: "INTERMEDIATE", minSkill: 1700, maxSkill: 1799, personality: "Well-rounded with few weaknesses" },
  { id: "i9", name: "Competitive Casey", tier: "INTERMEDIATE", minSkill: 1800, maxSkill: 1899, personality: "Tournament-level preparation" },
  { id: "i10", name: "Advancing Adrian", tier: "INTERMEDIATE", minSkill: 1900, maxSkill: 1999, personality: "Nearly advanced, very challenging" },
  // Advanced Tier (2000-2999)
  { id: "a1", name: "Expert Emma", tier: "ADVANCED", minSkill: 2000, maxSkill: 2099, personality: "Years of experience, sophisticated arguments" },
  { id: "a2", name: "Veteran Victor", tier: "ADVANCED", minSkill: 2100, maxSkill: 2199, personality: "Seen every argument, hard to surprise" },
  { id: "a3", name: "Champion Charlie", tier: "ADVANCED", minSkill: 2200, maxSkill: 2299, personality: "Multiple tournament wins under belt" },
  { id: "a4", name: "Elite Evelyn", tier: "ADVANCED", minSkill: 2300, maxSkill: 2399, personality: "Razor-sharp analysis and rebuttals" },
  { id: "a5", name: "Premier Phoenix", tier: "ADVANCED", minSkill: 2400, maxSkill: 2499, personality: "Adapts strategy mid-debate brilliantly" },
  { id: "a6", name: "Superior Skyler", tier: "ADVANCED", minSkill: 2500, maxSkill: 2599, personality: "Near-flawless logical construction" },
  { id: "a7", name: "Distinguished Drew", tier: "ADVANCED", minSkill: 2600, maxSkill: 2699, personality: "Known for devastating cross-examinations" },
  { id: "a8", name: "Renowned River", tier: "ADVANCED", minSkill: 2700, maxSkill: 2799, personality: "Published papers on debate theory" },
  { id: "a9", name: "Prodigy Peyton", tier: "ADVANCED", minSkill: 2800, maxSkill: 2899, personality: "Youngest to reach this level" },
  { id: "a10", name: "Ascending Atlas", tier: "ADVANCED", minSkill: 2900, maxSkill: 2999, personality: "On the cusp of mastery" },
  // Master Tier (3000+)
  { id: "m1", name: "Grandmaster Grace", tier: "MASTER", minSkill: 3000, maxSkill: 3199, personality: "Legendary debater, teaches at universities" },
  { id: "m2", name: "Supreme Sterling", tier: "MASTER", minSkill: 3200, maxSkill: 3399, personality: "National champion, unmatched preparation" },
  { id: "m3", name: "Ultimate Uma", tier: "MASTER", minSkill: 3400, maxSkill: 3599, personality: "International competitor, multilingual debates" },
  { id: "m4", name: "Apex Archer", tier: "MASTER", minSkill: 3600, maxSkill: 3799, personality: "Writes the textbooks others study" },
  { id: "m5", name: "Pinnacle Palmer", tier: "MASTER", minSkill: 3800, maxSkill: Infinity, personality: "The ultimate challenge, near-perfect execution" },
] as const;

export type AIOpponent = typeof AI_OPPONENTS[number];

// Debate Topics by Category
export const DEBATE_TOPICS = [
  // Technology
  { id: "t1", title: "AI should be regulated by governments", category: "Technology", difficulty: "beginner" },
  { id: "t2", title: "Social media does more harm than good", category: "Technology", difficulty: "beginner" },
  { id: "t3", title: "Autonomous vehicles should replace human drivers", category: "Technology", difficulty: "intermediate" },
  { id: "t4", title: "Cryptocurrency will replace traditional currency", category: "Technology", difficulty: "intermediate" },
  { id: "t5", title: "Tech companies should be broken up as monopolies", category: "Technology", difficulty: "advanced" },
  // Ethics
  { id: "e1", title: "The death penalty should be abolished", category: "Ethics", difficulty: "beginner" },
  { id: "e2", title: "Animal testing for medical research is justified", category: "Ethics", difficulty: "intermediate" },
  { id: "e3", title: "Genetic engineering of humans should be permitted", category: "Ethics", difficulty: "advanced" },
  { id: "e4", title: "Privacy is more important than security", category: "Ethics", difficulty: "intermediate" },
  { id: "e5", title: "Universal basic income is a moral imperative", category: "Ethics", difficulty: "advanced" },
  // Politics
  { id: "p1", title: "Voting should be mandatory", category: "Politics", difficulty: "beginner" },
  { id: "p2", title: "Term limits should apply to all elected officials", category: "Politics", difficulty: "beginner" },
  { id: "p3", title: "Immigration policies should be more restrictive", category: "Politics", difficulty: "intermediate" },
  { id: "p4", title: "Climate change requires immediate radical action", category: "Politics", difficulty: "intermediate" },
  { id: "p5", title: "Lobbying should be banned in democratic systems", category: "Politics", difficulty: "advanced" },
  // Education
  { id: "ed1", title: "College education should be free for all", category: "Education", difficulty: "beginner" },
  { id: "ed2", title: "Standardized testing should be eliminated", category: "Education", difficulty: "beginner" },
  { id: "ed3", title: "Online learning is equal to in-person education", category: "Education", difficulty: "intermediate" },
  { id: "ed4", title: "Students should be grouped by ability, not age", category: "Education", difficulty: "intermediate" },
  { id: "ed5", title: "Philosophy should be a required subject in schools", category: "Education", difficulty: "advanced" },
  // Economics
  { id: "ec1", title: "Minimum wage should be significantly increased", category: "Economics", difficulty: "beginner" },
  { id: "ec2", title: "Free trade agreements benefit all participating nations", category: "Economics", difficulty: "intermediate" },
  { id: "ec3", title: "Wealth taxes are necessary for economic equality", category: "Economics", difficulty: "intermediate" },
  { id: "ec4", title: "Globalization has been net positive for humanity", category: "Economics", difficulty: "advanced" },
  { id: "ec5", title: "Central banks should embrace modern monetary theory", category: "Economics", difficulty: "advanced" },
] as const;

export type DebateTopic = typeof DEBATE_TOPICS[number];

// Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  skillPoints: integer("skill_points").notNull().default(500),
  totalDebates: integer("total_debates").notNull().default(0),
  wins: integer("wins").notNull().default(0),
  losses: integer("losses").notNull().default(0),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Debates table
export const debates = pgTable("debates", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  opponentId: text("opponent_id").notNull(),
  topicId: text("topic_id").notNull(),
  formatId: text("format_id").notNull(),
  userSide: text("user_side").notNull(), // "pro" or "con"
  status: text("status").notNull().default("in_progress"), // "in_progress", "completed"
  result: text("result"), // "win", "loss", or null if in progress
  pointsChange: integer("points_change"),
  feedback: text("feedback"),
  startedAt: timestamp("started_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  completedAt: timestamp("completed_at"),
});

export const insertDebateSchema = createInsertSchema(debates).omit({
  id: true,
  startedAt: true,
  completedAt: true,
});

export type InsertDebate = z.infer<typeof insertDebateSchema>;
export type Debate = typeof debates.$inferSelect;

// Debate Messages table
export const debateMessages = pgTable("debate_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  debateId: varchar("debate_id").notNull(),
  role: text("role").notNull(), // "user" or "opponent"
  content: text("content").notNull(),
  turnNumber: integer("turn_number").notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const insertDebateMessageSchema = createInsertSchema(debateMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertDebateMessage = z.infer<typeof insertDebateMessageSchema>;
export type DebateMessage = typeof debateMessages.$inferSelect;

// Educational Content
export const EDUCATIONAL_CONTENT = {
  fundamentals: [
    {
      id: "f1",
      title: "What is Debate?",
      content: "Debate is a formal discussion on a particular topic where opposing arguments are presented. It develops critical thinking, research skills, and the ability to articulate complex ideas clearly.",
      keyPoints: ["Structured argumentation", "Evidence-based reasoning", "Respectful disagreement", "Logical analysis"]
    },
    {
      id: "f2", 
      title: "The Claim-Warrant-Impact Framework",
      content: "Every strong argument follows this structure: make a CLAIM (your assertion), provide a WARRANT (your reasoning or evidence), and explain the IMPACT (why it matters).",
      keyPoints: ["Claim: What you assert to be true", "Warrant: Evidence supporting your claim", "Impact: Why your claim matters"]
    },
    {
      id: "f3",
      title: "Burden of Proof",
      content: "The side proposing change (affirmative) typically bears the burden of proof. They must demonstrate why the current situation is problematic and why their solution is better.",
      keyPoints: ["Affirmative must prove change is needed", "Negative can defend status quo", "Burden shifts when new claims are made"]
    },
    {
      id: "f4",
      title: "Types of Arguments",
      content: "Arguments can be categorized as definitional (what terms mean), factual (what is true), value (what is good/bad), and policy (what should be done).",
      keyPoints: ["Definitional arguments set terms", "Factual arguments establish truth", "Value arguments assess merit", "Policy arguments propose action"]
    }
  ],
  techniques: [
    {
      id: "t1",
      title: "Active Listening",
      content: "Great debaters listen carefully to their opponents. Take notes on key claims, identify weaknesses, and prepare targeted responses rather than simply waiting to speak.",
      keyPoints: ["Note opponent's main claims", "Identify logical gaps", "Prepare specific rebuttals", "Acknowledge valid points"]
    },
    {
      id: "t2",
      title: "Signposting",
      content: "Guide your audience through your arguments with clear transitions. Use phrases like 'My first point is...', 'Furthermore...', 'In response to my opponent's claim...'",
      keyPoints: ["Number your arguments", "Use transition phrases", "Summarize before moving on", "Reference opponent's points clearly"]
    },
    {
      id: "t3",
      title: "Cross-Examination Strategies",
      content: "Ask questions that expose weaknesses in your opponent's case. Use closed questions to pin down commitments, and open questions to reveal inconsistencies.",
      keyPoints: ["Ask clarifying questions", "Expose contradictions", "Don't argue during cross-ex", "Keep questions short and clear"]
    },
    {
      id: "t4",
      title: "Rebuttal Techniques",
      content: "Effective rebuttals directly address and dismantle opponent arguments. Don't just state your position again—explain specifically why their reasoning is flawed.",
      keyPoints: ["Attack the warrant, not just the claim", "Provide counter-evidence", "Show logical fallacies", "Explain why your argument prevails"]
    }
  ],
  strategies: [
    {
      id: "s1",
      title: "Time Management",
      content: "Allocate your speaking time wisely. Spend roughly 70% on your strongest arguments and 30% on rebuttals. Don't try to address every minor point.",
      keyPoints: ["Prioritize key arguments", "Don't over-extend on weak points", "Save time for summary", "Practice within time limits"]
    },
    {
      id: "s2",
      title: "Framework Debates",
      content: "Establish the criteria by which arguments should be judged. If you control the framework, you control how the debate is evaluated.",
      keyPoints: ["Define key terms early", "Establish evaluation criteria", "Argue why your framework matters", "Apply framework to all arguments"]
    },
    {
      id: "s3",
      title: "Flowing (Note-Taking)",
      content: "Develop a systematic way to track arguments across the debate. Use columns for each speech, abbreviations for common terms, and symbols for dropped arguments.",
      keyPoints: ["Create consistent abbreviations", "Track argument responses", "Note dropped arguments", "Organize by contention"]
    },
    {
      id: "s4",
      title: "Crystallization",
      content: "In final speeches, focus on the 2-3 most important issues. Explain why you've won these key points and why they should determine the outcome.",
      keyPoints: ["Identify voting issues", "Weigh competing arguments", "Summarize key wins", "Tell the story of the debate"]
    }
  ]
} as const;

export type EducationalSection = keyof typeof EDUCATIONAL_CONTENT;
export type EducationalItem = typeof EDUCATIONAL_CONTENT[EducationalSection][number];
