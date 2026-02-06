import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, index, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { CURRICULUM_UNITS, CurriculumUnit, CurriculumSection, CurriculumLesson, getAllCurriculumLessons } from "./curriculum";
export type { CurriculumUnit, CurriculumSection, CurriculumLesson } from "./curriculum";
import { ALL_MULTI_PAGE_LESSONS, LessonContentPage, LessonQuestionPage, LessonPage, MultiPageLesson, LessonPracticePage, PracticeType, PracticeConfig, DifficultyLevel, getDifficultyFromXp, getDifficultyFromLevel } from "./lessons";
export type { LessonContentPage, LessonQuestionPage, LessonPage, MultiPageLesson, LessonPracticePage, PracticeType, PracticeConfig, DifficultyLevel } from "./lessons";
export { getDifficultyFromXp, getDifficultyFromLevel } from "./lessons";
export type CurriculumTier = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT" | "MASTER";

// Session storage table (required for Replit Auth)
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)]
);

// Skill Tiers - matching 5 curriculum sections
export const SKILL_TIERS = {
  BEGINNER: { name: "Beginner", minPoints: 0, maxPoints: 699 },
  INTERMEDIATE: { name: "Intermediate", minPoints: 700, maxPoints: 1399 },
  ADVANCED: { name: "Advanced", minPoints: 1400, maxPoints: 2099 },
  EXPERT: { name: "Expert", minPoints: 2100, maxPoints: 2799 },
  MASTER: { name: "Master", minPoints: 2800, maxPoints: Infinity },
} as const;

export function getSkillTier(points: number): keyof typeof SKILL_TIERS {
  if (points >= 2800) return "MASTER";
  if (points >= 2100) return "EXPERT";
  if (points >= 1400) return "ADVANCED";
  if (points >= 700) return "INTERMEDIATE";
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

// Speech types for different debate formats
export type SpeechType =
  | "constructive"
  | "rebuttal"
  | "cross-examination"
  | "crossfire"
  | "summary"
  | "final-focus"
  | "reply"
  | "poi";

export interface DebateSpeech {
  id: string;
  name: string;
  speaker: "aff" | "neg" | "user" | "opponent";
  type: SpeechType;
  defaultMinutes: number;
  description: string;
}

export interface DebateFormatConfig {
  id: string;
  name: string;
  description: string;
  teamSize: 1 | 2 | 3;
  defaultPrepMinutes: number;
  speeches: DebateSpeech[];
  hasCrossEx: boolean;
  hasPOI: boolean;
}

// Debate Formats with full speech structures
export const DEBATE_FORMATS: DebateFormatConfig[] = [
  {
    id: "lincoln-douglas",
    name: "Lincoln-Douglas",
    description: "One-on-one value debate focusing on philosophical and ethical issues",
    teamSize: 1,
    defaultPrepMinutes: 4,
    hasCrossEx: true,
    hasPOI: false,
    speeches: [
      { id: "ld-ac", name: "Affirmative Constructive", speaker: "aff", type: "constructive", defaultMinutes: 6, description: "Present your value framework and contentions" },
      { id: "ld-cx1", name: "Cross-Examination", speaker: "neg", type: "cross-examination", defaultMinutes: 3, description: "Negative questions the Affirmative" },
      { id: "ld-nc", name: "Negative Constructive + Rebuttal", speaker: "neg", type: "constructive", defaultMinutes: 7, description: "Present negative case and respond to affirmative" },
      { id: "ld-cx2", name: "Cross-Examination", speaker: "aff", type: "cross-examination", defaultMinutes: 3, description: "Affirmative questions the Negative" },
      { id: "ld-1ar", name: "1st Affirmative Rebuttal", speaker: "aff", type: "rebuttal", defaultMinutes: 4, description: "Respond to negative case and rebuild affirmative" },
      { id: "ld-nr", name: "Negative Rebuttal", speaker: "neg", type: "rebuttal", defaultMinutes: 6, description: "Final negative speech, crystallize voting issues" },
      { id: "ld-2ar", name: "2nd Affirmative Rebuttal", speaker: "aff", type: "rebuttal", defaultMinutes: 3, description: "Final affirmative speech, crystallize voting issues" },
    ],
  },
  {
    id: "public-forum",
    name: "Public Forum",
    description: "Team debate on current events topics designed for general audiences",
    teamSize: 2,
    defaultPrepMinutes: 3,
    hasCrossEx: true,
    hasPOI: false,
    speeches: [
      { id: "pf-con1", name: "First Speaker Constructive (Team A)", speaker: "aff", type: "constructive", defaultMinutes: 4, description: "First team presents their case" },
      { id: "pf-con2", name: "First Speaker Constructive (Team B)", speaker: "neg", type: "constructive", defaultMinutes: 4, description: "Second team presents their case" },
      { id: "pf-cx1", name: "Crossfire", speaker: "aff", type: "crossfire", defaultMinutes: 3, description: "Both first speakers question each other" },
      { id: "pf-reb1", name: "Second Speaker Rebuttal (Team A)", speaker: "aff", type: "rebuttal", defaultMinutes: 4, description: "First team responds to opponent's case" },
      { id: "pf-reb2", name: "Second Speaker Rebuttal (Team B)", speaker: "neg", type: "rebuttal", defaultMinutes: 4, description: "Second team responds to opponent's case" },
      { id: "pf-cx2", name: "Crossfire", speaker: "neg", type: "crossfire", defaultMinutes: 3, description: "Both second speakers question each other" },
      { id: "pf-sum1", name: "First Speaker Summary (Team A)", speaker: "aff", type: "summary", defaultMinutes: 3, description: "Narrow the debate, extend key arguments" },
      { id: "pf-sum2", name: "First Speaker Summary (Team B)", speaker: "neg", type: "summary", defaultMinutes: 3, description: "Narrow the debate, extend key arguments" },
      { id: "pf-gcx", name: "Grand Crossfire", speaker: "aff", type: "crossfire", defaultMinutes: 3, description: "All four debaters question each other" },
      { id: "pf-ff1", name: "Second Speaker Final Focus (Team A)", speaker: "aff", type: "final-focus", defaultMinutes: 2, description: "Final persuasive appeal" },
      { id: "pf-ff2", name: "Second Speaker Final Focus (Team B)", speaker: "neg", type: "final-focus", defaultMinutes: 2, description: "Final persuasive appeal" },
    ],
  },
  {
    id: "policy",
    name: "Policy Debate",
    description: "In-depth research-based debate on a year-long resolution with plan/counterplan",
    teamSize: 2,
    defaultPrepMinutes: 8,
    hasCrossEx: true,
    hasPOI: false,
    speeches: [
      { id: "pol-1ac", name: "1st Affirmative Constructive", speaker: "aff", type: "constructive", defaultMinutes: 8, description: "Present the affirmative plan and advantages" },
      { id: "pol-cx1", name: "Cross-Examination", speaker: "neg", type: "cross-examination", defaultMinutes: 3, description: "Negative questions the 1AC speaker" },
      { id: "pol-1nc", name: "1st Negative Constructive", speaker: "neg", type: "constructive", defaultMinutes: 8, description: "Present disadvantages, counterplans, and attacks" },
      { id: "pol-cx2", name: "Cross-Examination", speaker: "aff", type: "cross-examination", defaultMinutes: 3, description: "Affirmative questions the 1NC speaker" },
      { id: "pol-2ac", name: "2nd Affirmative Constructive", speaker: "aff", type: "constructive", defaultMinutes: 8, description: "Respond to negative and extend case" },
      { id: "pol-cx3", name: "Cross-Examination", speaker: "neg", type: "cross-examination", defaultMinutes: 3, description: "Negative questions the 2AC speaker" },
      { id: "pol-2nc", name: "2nd Negative Constructive", speaker: "neg", type: "constructive", defaultMinutes: 8, description: "Extend negative strategy and attacks" },
      { id: "pol-cx4", name: "Cross-Examination", speaker: "aff", type: "cross-examination", defaultMinutes: 3, description: "Affirmative questions the 2NC speaker" },
      { id: "pol-1nr", name: "1st Negative Rebuttal", speaker: "neg", type: "rebuttal", defaultMinutes: 5, description: "Collapse and extend key arguments" },
      { id: "pol-1ar", name: "1st Affirmative Rebuttal", speaker: "aff", type: "rebuttal", defaultMinutes: 5, description: "Respond to both negative speeches" },
      { id: "pol-2nr", name: "2nd Negative Rebuttal", speaker: "neg", type: "rebuttal", defaultMinutes: 5, description: "Final negative speech, voting issues" },
      { id: "pol-2ar", name: "2nd Affirmative Rebuttal", speaker: "aff", type: "rebuttal", defaultMinutes: 5, description: "Final affirmative speech, voting issues" },
    ],
  },
  {
    id: "parliamentary",
    name: "Parliamentary",
    description: "Impromptu debate with Points of Information and limited prep time",
    teamSize: 2,
    defaultPrepMinutes: 15,
    hasCrossEx: false,
    hasPOI: true,
    speeches: [
      { id: "parl-pm", name: "Prime Minister Constructive", speaker: "aff", type: "constructive", defaultMinutes: 7, description: "Define the resolution and present government case" },
      { id: "parl-lo", name: "Leader of Opposition", speaker: "neg", type: "constructive", defaultMinutes: 8, description: "Attack government case and present opposition" },
      { id: "parl-mg", name: "Member of Government", speaker: "aff", type: "constructive", defaultMinutes: 8, description: "Rebuild government case and extend arguments" },
      { id: "parl-mo", name: "Member of Opposition", speaker: "neg", type: "constructive", defaultMinutes: 8, description: "Extend opposition and attack government" },
      { id: "parl-lor", name: "Leader of Opposition Rebuttal", speaker: "neg", type: "rebuttal", defaultMinutes: 4, description: "Summarize opposition case" },
      { id: "parl-pmr", name: "Prime Minister Rebuttal", speaker: "aff", type: "rebuttal", defaultMinutes: 5, description: "Final crystallization for government" },
    ],
  },
  {
    id: "world-schools",
    name: "World Schools",
    description: "International format combining prepared and impromptu debate with POIs",
    teamSize: 3,
    defaultPrepMinutes: 30,
    hasCrossEx: false,
    hasPOI: true,
    speeches: [
      { id: "ws-1p", name: "1st Proposition", speaker: "aff", type: "constructive", defaultMinutes: 8, description: "Define motion and present team line with first argument" },
      { id: "ws-1o", name: "1st Opposition", speaker: "neg", type: "constructive", defaultMinutes: 8, description: "Accept/challenge definition and present opposition line" },
      { id: "ws-2p", name: "2nd Proposition", speaker: "aff", type: "constructive", defaultMinutes: 8, description: "Rebuild and extend with second argument" },
      { id: "ws-2o", name: "2nd Opposition", speaker: "neg", type: "constructive", defaultMinutes: 8, description: "Rebut and extend with second argument" },
      { id: "ws-3p", name: "3rd Proposition", speaker: "aff", type: "constructive", defaultMinutes: 8, description: "Rebut and present third argument" },
      { id: "ws-3o", name: "3rd Opposition", speaker: "neg", type: "constructive", defaultMinutes: 8, description: "Rebut and present third argument" },
      { id: "ws-or", name: "Opposition Reply", speaker: "neg", type: "reply", defaultMinutes: 4, description: "Biased adjudicator summary from opposition view" },
      { id: "ws-pr", name: "Proposition Reply", speaker: "aff", type: "reply", defaultMinutes: 4, description: "Biased adjudicator summary from proposition view" },
    ],
  },
  {
    id: "congressional",
    name: "Congressional Debate",
    description: "Legislative simulation with speeches, questioning, and parliamentary procedure",
    teamSize: 1,
    defaultPrepMinutes: 0,
    hasCrossEx: true,
    hasPOI: false,
    speeches: [
      { id: "cong-author", name: "Authorship/Sponsorship", speaker: "aff", type: "constructive", defaultMinutes: 3, description: "Introduce and advocate for the legislation" },
      { id: "cong-q1", name: "Questioning Period", speaker: "neg", type: "cross-examination", defaultMinutes: 2, description: "Floor questions the speaker" },
      { id: "cong-opp1", name: "First Negation", speaker: "neg", type: "rebuttal", defaultMinutes: 3, description: "First speech against the legislation" },
      { id: "cong-q2", name: "Questioning Period", speaker: "aff", type: "cross-examination", defaultMinutes: 2, description: "Floor questions the speaker" },
      { id: "cong-aff2", name: "Second Affirmative", speaker: "aff", type: "constructive", defaultMinutes: 3, description: "Continue advocacy with new arguments" },
      { id: "cong-q3", name: "Questioning Period", speaker: "neg", type: "cross-examination", defaultMinutes: 2, description: "Floor questions the speaker" },
      { id: "cong-neg2", name: "Second Negation", speaker: "neg", type: "rebuttal", defaultMinutes: 3, description: "Continue opposition with new arguments" },
      { id: "cong-q4", name: "Questioning Period", speaker: "aff", type: "cross-examination", defaultMinutes: 2, description: "Floor questions the speaker" },
    ],
  },
];

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

// shared/schema.ts
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: varchar("username").unique().notNull(),
  password: text("password").notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  skillPoints: integer("skill_points").notNull().default(500),
  totalDebates: integer("total_debates").notNull().default(0),
  wins: integer("wins").notNull().default(0),
  losses: integer("losses").notNull().default(0),
  // --- DOMINION FIELDS ---
  isPro: boolean("is_pro").notNull().default(false),
  proType: varchar("pro_type").notNull().default("free"), // Will be "Dominion"
  // -----------------------
  isDeveloper: boolean("is_developer").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type UpsertUser = typeof users.$inferInsert;

/** Public user info (no password, email, or isDeveloper) for search/discover */
export type PublicUser = Pick<
  User,
  "id" | "username" | "firstName" | "lastName" | "profileImageUrl" | "skillPoints" | "totalDebates" | "wins" | "losses"
>;

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

// Lesson Progress table - stores user learning progress
export const lessonProgress = pgTable("lesson_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().unique(),
  hasCompletedOnboarding: boolean("has_completed_onboarding").notNull().default(false),
  experienceLevel: text("experience_level"), // "none", "some", "experienced"
  assessmentScore: integer("assessment_score").default(0),
  currentUnitId: text("current_unit_id").notNull().default("unit-1"),
  currentSectionId: text("current_section_id"),
  currentLessonId: text("current_lesson_id"),
  completedLessonIds: text("completed_lesson_ids").array().notNull().default(sql`ARRAY[]::text[]`),
  lastVisitedAt: timestamp("last_visited_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertLessonProgressSchema = createInsertSchema(lessonProgress).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertLessonProgress = z.infer<typeof insertLessonProgressSchema>;
export type LessonProgress = typeof lessonProgress.$inferSelect;

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

// Experience Levels for Initial Questionnaire
export const EXPERIENCE_LEVELS = [
  { id: "none", label: "No experience", description: "I've never participated in formal debate" },
  { id: "casual", label: "Casual experience", description: "I've had informal debates or discussions" },
  { id: "some", label: "Some experience", description: "I've participated in a few debates or a debate club" },
  { id: "competitive", label: "Competitive experience", description: "I've competed in debate tournaments" },
] as const;

export type ExperienceLevel = typeof EXPERIENCE_LEVELS[number]["id"];

// Skill Assessment Questions
export const ASSESSMENT_QUESTIONS = [
  {
    id: "q1",
    question: "What is the purpose of a 'warrant' in an argument?",
    options: [
      { id: "a", text: "To state your main claim" },
      { id: "b", text: "To summarize your argument" },
      { id: "c", text: "To provide evidence or reasoning that supports your claim" },
      { id: "d", text: "To attack your opponent's position" },
    ],
    correctAnswer: "c",
    difficulty: "beginner",
  },
  {
    id: "q2",
    question: "In a debate, what does 'burden of proof' typically mean?",
    options: [
      { id: "a", text: "The obligation to prove your claims are true" },
      { id: "b", text: "The weight of your evidence folder" },
      { id: "c", text: "The number of sources you must cite" },
      { id: "d", text: "How long your speech should be" },
    ],
    correctAnswer: "a",
    difficulty: "beginner",
  },
  {
    id: "q3",
    question: "What is 'signposting' in debate?",
    options: [
      { id: "a", text: "Holding up signs during your speech" },
      { id: "b", text: "Pointing at your opponent" },
      { id: "c", text: "Writing key points on a whiteboard" },
      { id: "d", text: "Using verbal cues to guide listeners through your arguments" },
    ],
    correctAnswer: "d",
    difficulty: "beginner",
  },
  {
    id: "q4",
    question: "What is a 'contention' in debate?",
    options: [
      { id: "a", text: "A disagreement with your partner" },
      { id: "b", text: "A main argument or point supporting your case" },
      { id: "c", text: "The time limit for speeches" },
      { id: "d", text: "A question asked during cross-examination" },
    ],
    correctAnswer: "b",
    difficulty: "beginner",
  },
  {
    id: "q5",
    question: "What does it mean to 'extend' an argument?",
    options: [
      { id: "a", text: "Make your speech longer" },
      { id: "b", text: "Add more evidence to your folder" },
      { id: "c", text: "Carry forward and develop an argument from an earlier speech" },
      { id: "d", text: "Speak louder so everyone can hear" },
    ],
    correctAnswer: "c",
    difficulty: "beginner",
  },
  {
    id: "q6",
    question: "What is the best way to handle cross-examination?",
    options: [
      { id: "a", text: "Give long, detailed answers to every question" },
      { id: "b", text: "Refuse to answer questions you don't like" },
      { id: "c", text: "Ask your own questions instead of answering" },
      { id: "d", text: "Answer concisely and honestly without volunteering extra information" },
    ],
    correctAnswer: "d",
    difficulty: "beginner",
  },
  {
    id: "q7",
    question: "What is 'crystallization' in a debate round?",
    options: [
      { id: "a", text: "Making your arguments as clear as crystal" },
      { id: "b", text: "Freezing up during your speech" },
      { id: "c", text: "Focusing on 2-3 key voting issues in final speeches" },
      { id: "d", text: "Using fancy vocabulary" },
    ],
    correctAnswer: "c",
    difficulty: "beginner",
  },
  {
    id: "q8",
    question: "What is 'flowing' in debate?",
    options: [
      { id: "a", text: "Speaking smoothly without pauses" },
      { id: "b", text: "Moving gracefully to the podium" },
      { id: "c", text: "Reading your evidence quickly" },
      { id: "d", text: "A note-taking system to track arguments across speeches" },
    ],
    correctAnswer: "d",
    difficulty: "intermediate",
  },
  {
    id: "q9",
    question: "What is 'impact weighing'?",
    options: [
      { id: "a", text: "Comparing the significance of different arguments to determine which matters most" },
      { id: "b", text: "Measuring how heavy your evidence binder is" },
      { id: "c", text: "Counting how many points you've made" },
      { id: "d", text: "Deciding how hard to hit the podium for emphasis" },
    ],
    correctAnswer: "a",
    difficulty: "intermediate",
  },
  {
    id: "q10",
    question: "What is a 'turn' in debate?",
    options: [
      { id: "a", text: "When it's your turn to speak" },
      { id: "b", text: "Rotating who speaks first each round" },
      { id: "c", text: "An argument that uses your opponent's evidence to support your side" },
      { id: "d", text: "Physically turning to face the judge" },
    ],
    correctAnswer: "c",
    difficulty: "intermediate",
  },
  {
    id: "q11",
    question: "What is a 'framework' in Lincoln-Douglas debate?",
    options: [
      { id: "a", text: "The physical structure of the podium" },
      { id: "b", text: "The outline format for your speech" },
      { id: "c", text: "The rules set by the tournament" },
      { id: "d", text: "A value criterion that determines how arguments should be evaluated" },
    ],
    correctAnswer: "d",
    difficulty: "advanced",
  },
  {
    id: "q12",
    question: "What is 'spreading' in competitive debate?",
    options: [
      { id: "a", text: "Distributing handouts to judges" },
      { id: "b", text: "Spreading your notes across the table" },
      { id: "c", text: "Speaking at an extremely rapid pace to present more arguments" },
      { id: "d", text: "Dividing arguments between partners" },
    ],
    correctAnswer: "c",
    difficulty: "advanced",
  },
  {
    id: "q13",
    question: "What is a 'theory argument' in policy debate?",
    options: [
      { id: "a", text: "A scientific hypothesis presented as evidence" },
      { id: "b", text: "An argument about the rules of debate itself and what practices should be allowed" },
      { id: "c", text: "A theoretical example with no real evidence" },
      { id: "d", text: "An argument based on philosophical theories" },
    ],
    correctAnswer: "b",
    difficulty: "advanced",
  },
  {
    id: "q14",
    question: "In policy debate, what does 'conditionality' refer to?",
    options: [
      { id: "a", text: "Arguments that depend on weather conditions" },
      { id: "b", text: "Conditions required to win the debate" },
      { id: "c", text: "The conditional format of if-then arguments" },
      { id: "d", text: "The negative's ability to run and later kick out of certain arguments" },
    ],
    correctAnswer: "d",
    difficulty: "master",
  },
  {
    id: "q15",
    question: "What is a 'kritik' (K) in advanced debate, and what distinguishes it from traditional policy arguments?",
    options: [
      { id: "a", text: "A German word for criticism; it focuses on grammatical errors" },
      { id: "b", text: "A critique of the opponent's speaking style and delivery" },
      { id: "c", text: "A philosophical challenge to the assumptions or language of the opponent's advocacy, often questioning systemic issues beyond the resolution" },
      { id: "d", text: "A technical argument about tournament rules and procedures" },
    ],
    correctAnswer: "c",
    difficulty: "master",
  },
] as const;

export type AssessmentQuestion = typeof ASSESSMENT_QUESTIONS[number];

// Lesson Structure: Units > Sections > Lessons
// Re-export from curriculum.ts for compatibility
export const LESSON_UNITS = CURRICULUM_UNITS;

// Legacy unit format type for backward compatibility
export type LessonUnit = CurriculumUnit;
export type LessonSection = CurriculumSection;
export type Lesson = CurriculumLesson;

// Helper to get all lessons flattened
export function getAllLessons(): Array<{ unitId: string; sectionId: string; lesson: Lesson }> {
  return getAllCurriculumLessons();
}

// Get placement unit based on experience and assessment score
// Assessment has 15 questions: 7 beginner, 3 intermediate, 3 advanced, 2 master
export function getPlacementUnit(experience: ExperienceLevel, assessmentScore: number): string {
  const maxScore = ASSESSMENT_QUESTIONS.length; // 15 questions
  const scorePercent = assessmentScore / maxScore;

  // For competitive debaters (have tournament experience)
  if (experience === "competitive") {
    if (scorePercent >= 0.93) {  // 14+ correct: Master level
      return "unit-41"; // Master section
    }
    if (scorePercent >= 0.87) {  // 13 correct: Expert level
      return "unit-31"; // Expert section
    }
    if (scorePercent >= 0.73) {  // 11+ correct: Advanced level
      return "unit-21"; // Advanced section
    }
    if (scorePercent >= 0.53) {  // 8+ correct: Intermediate level
      return "unit-11"; // Intermediate section
    }
    return "unit-06"; // Still some basics to cover
  }

  // For users with some debate experience (club/school)
  if (experience === "some") {
    if (scorePercent >= 0.93) {  // 14+ correct: Expert level
      return "unit-31"; // Expert section
    }
    if (scorePercent >= 0.80) {  // 12+ correct: Advanced level
      return "unit-21"; // Advanced section
    }
    if (scorePercent >= 0.60) {  // 9+ correct: Intermediate level
      return "unit-11"; // Intermediate section
    }
    if (scorePercent >= 0.40) {  // 6+ correct
      return "unit-06"; // Later beginner
    }
    return "unit-01"; // Start at beginning
  }

  // For casual argument/discussion experience only
  if (experience === "casual") {
    if (scorePercent >= 0.93) {  // 14+ correct - exceptional knowledge
      return "unit-21"; // Advanced section
    }
    if (scorePercent >= 0.73) {  // 11+ correct - very knowledgeable
      return "unit-11"; // Intermediate section
    }
    if (scorePercent >= 0.47) {  // 7+ correct
      return "unit-06"; // Later beginner units
    }
    return "unit-01"; // Start at beginning
  }

  // No experience - start from the very beginning
  return "unit-01";
}

// Exercise questions for each lesson (legacy - keeping for backward compatibility)
export interface LessonExercise {
  lessonId: string;
  questions: Array<{
    id: string;
    question: string;
    options: Array<{ id: string; text: string }>;
    correctAnswer: string;
    explanation: string;
  }>;
}

export const LESSON_EXERCISES: LessonExercise[] = [
  {
    lessonId: "l01-01",
    questions: [
      {
        id: "l01-01-q1",
        question: "What is the primary focus of formal debate compared to casual arguments?",
        options: [
          { id: "a", text: "Winning at all costs" },
          { id: "b", text: "Logical reasoning rather than emotional appeals" },
          { id: "c", text: "Speaking louder than your opponent" },
          { id: "d", text: "Having more friends in the audience" },
        ],
        correctAnswer: "b",
        explanation: "Formal debate focuses on structured, logical reasoning rather than emotional appeals or personal attacks.",
      },
      {
        id: "l01-01-q2",
        question: "Which skill does debate NOT primarily develop?",
        options: [
          { id: "a", text: "Critical thinking" },
          { id: "b", text: "Research skills" },
          { id: "c", text: "Memorizing facts" },
          { id: "d", text: "Clear articulation of ideas" },
        ],
        correctAnswer: "c",
        explanation: "While knowledge helps, debate primarily develops critical thinking, research, and communication skills rather than memorization.",
      },
    ],
  },
  {
    lessonId: "l01-02",
    questions: [
      {
        id: "l01-02-q1",
        question: "Which debate format is best known for one-on-one value debates?",
        options: [
          { id: "a", text: "Public Forum" },
          { id: "b", text: "Policy Debate" },
          { id: "c", text: "Lincoln-Douglas" },
          { id: "d", text: "Parliamentary" },
        ],
        correctAnswer: "c",
        explanation: "Lincoln-Douglas (LD) debate is a one-on-one format that focuses on value-based arguments.",
      },
      {
        id: "l01-02-q2",
        question: "Which format emphasizes quick thinking with limited preparation time?",
        options: [
          { id: "a", text: "Policy Debate" },
          { id: "b", text: "Parliamentary" },
          { id: "c", text: "Lincoln-Douglas" },
          { id: "d", text: "Public Forum" },
        ],
        correctAnswer: "b",
        explanation: "Parliamentary debate is known for impromptu topics and limited preparation time, requiring quick thinking.",
      },
    ],
  },
  {
    lessonId: "l01-03",
    questions: [
      {
        id: "l01-03-q1",
        question: "In the Claim-Warrant-Impact framework, what does the 'warrant' provide?",
        options: [
          { id: "a", text: "Your main assertion" },
          { id: "b", text: "Evidence or reasoning supporting your claim" },
          { id: "c", text: "The consequences of your argument" },
          { id: "d", text: "A summary of your speech" },
        ],
        correctAnswer: "b",
        explanation: "The warrant provides the evidence, reasoning, or logic that supports and justifies your claim.",
      },
      {
        id: "l01-03-q2",
        question: "What does the 'impact' explain in an argument?",
        options: [
          { id: "a", text: "What you believe to be true" },
          { id: "b", text: "Your sources and citations" },
          { id: "c", text: "Why your claim matters and its consequences" },
          { id: "d", text: "How to refute your opponent" },
        ],
        correctAnswer: "c",
        explanation: "The impact explains why your claim matters and what consequences follow from it being true.",
      },
    ],
  },
  {
    lessonId: "l01-04",
    questions: [
      {
        id: "l01-04-q1",
        question: "'We should increase funding for public schools' is what type of argument?",
        options: [
          { id: "a", text: "Definitional" },
          { id: "b", text: "Factual" },
          { id: "c", text: "Value" },
          { id: "d", text: "Policy" },
        ],
        correctAnswer: "d",
        explanation: "Policy arguments propose what should be done - in this case, increasing school funding is a proposed action.",
      },
      {
        id: "l01-04-q2",
        question: "'Justice means treating everyone equally' is what type of argument?",
        options: [
          { id: "a", text: "Definitional" },
          { id: "b", text: "Factual" },
          { id: "c", text: "Value" },
          { id: "d", text: "Policy" },
        ],
        correctAnswer: "a",
        explanation: "Definitional arguments establish what terms mean - here, defining what 'justice' means.",
      },
    ],
  },
  {
    lessonId: "l01-05",
    questions: [
      {
        id: "l01-05-q1",
        question: "Which side typically bears the burden of proof in a debate?",
        options: [
          { id: "a", text: "The negative (defending status quo)" },
          { id: "b", text: "The affirmative (proposing change)" },
          { id: "c", text: "Both sides equally" },
          { id: "d", text: "Neither side" },
        ],
        correctAnswer: "b",
        explanation: "The affirmative side, which proposes change, must prove that change is needed and beneficial.",
      },
      {
        id: "l01-05-q2",
        question: "What can the negative side do in response to the affirmative's case?",
        options: [
          { id: "a", text: "Only attack the affirmative's evidence" },
          { id: "b", text: "Defend the status quo or propose alternatives" },
          { id: "c", text: "Ignore the affirmative's arguments" },
          { id: "d", text: "Only agree with the affirmative" },
        ],
        correctAnswer: "b",
        explanation: "The negative can defend why the current situation is acceptable or propose different solutions.",
      },
    ],
  },
  {
    lessonId: "l02-01",
    questions: [
      {
        id: "l02-01-q1",
        question: "What should you do while your opponent is speaking?",
        options: [
          { id: "a", text: "Plan your entire speech in your head" },
          { id: "b", text: "Take notes on their claims and identify weaknesses" },
          { id: "c", text: "Practice your opening statement" },
          { id: "d", text: "Rest until it's your turn" },
        ],
        correctAnswer: "b",
        explanation: "Active listening means engaging with what's being said, noting key claims, and preparing targeted responses.",
      },
      {
        id: "l02-01-q2",
        question: "Why should you acknowledge valid points made by your opponent?",
        options: [
          { id: "a", text: "It makes you lose the debate" },
          { id: "b", text: "It shows intellectual honesty" },
          { id: "c", text: "It's required by debate rules" },
          { id: "d", text: "It confuses the judges" },
        ],
        correctAnswer: "b",
        explanation: "Acknowledging valid points shows intellectual honesty and can actually strengthen your credibility.",
      },
    ],
  },
  {
    lessonId: "l02-02",
    questions: [
      {
        id: "l02-02-q1",
        question: "What is 'flowing' in debate?",
        options: [
          { id: "a", text: "Speaking smoothly without pauses" },
          { id: "b", text: "A systematic note-taking method" },
          { id: "c", text: "Moving around the stage" },
          { id: "d", text: "Writing your speech beforehand" },
        ],
        correctAnswer: "b",
        explanation: "Flowing is a systematic way to track arguments across a debate using columns and abbreviations.",
      },
      {
        id: "l02-02-q2",
        question: "What should you note when an argument goes unanswered?",
        options: [
          { id: "a", text: "Ignore it - it wasn't important" },
          { id: "b", text: "Mark it as a 'dropped' argument" },
          { id: "c", text: "Assume it was addressed" },
          { id: "d", text: "Delete it from your notes" },
        ],
        correctAnswer: "b",
        explanation: "Dropped arguments are important to track because they can be used against your opponent later.",
      },
    ],
  },
  {
    lessonId: "l02-03",
    questions: [
      {
        id: "l02-03-q1",
        question: "What is signposting in debate?",
        options: [
          { id: "a", text: "Holding up physical signs" },
          { id: "b", text: "Using verbal cues to guide listeners through your arguments" },
          { id: "c", text: "Writing on a whiteboard" },
          { id: "d", text: "Pointing at your notes" },
        ],
        correctAnswer: "b",
        explanation: "Signposting uses phrases like 'My first point is...' to help the audience follow your argument structure.",
      },
      {
        id: "l02-03-q2",
        question: "Which phrase is an example of signposting?",
        options: [
          { id: "a", text: "I think..." },
          { id: "b", text: "In response to my opponent's claim about..." },
          { id: "c", text: "Maybe..." },
          { id: "d", text: "I guess..." },
        ],
        correctAnswer: "b",
        explanation: "This phrase clearly signals you're responding to a specific opponent argument, helping the audience follow.",
      },
    ],
  },
  {
    lessonId: "l02-04",
    questions: [
      {
        id: "l02-04-q1",
        question: "How should you allocate your speaking time?",
        options: [
          { id: "a", text: "50% introduction, 50% conclusion" },
          { id: "b", text: "70% strongest arguments, 30% rebuttals" },
          { id: "c", text: "Address every minor point equally" },
          { id: "d", text: "Spend all time on one argument" },
        ],
        correctAnswer: "b",
        explanation: "Focus most time on your strongest arguments while reserving time for rebuttals and summary.",
      },
      {
        id: "l02-04-q2",
        question: "What's the best way to develop good time management?",
        options: [
          { id: "a", text: "Never practice with a timer" },
          { id: "b", text: "Always speak as fast as possible" },
          { id: "c", text: "Practice within time limits regularly" },
          { id: "d", text: "Ignore time limits during debates" },
        ],
        correctAnswer: "c",
        explanation: "Regular practice within time limits develops a natural sense of pacing and helps you prioritize.",
      },
    ],
  },
  {
    lessonId: "l02-05",
    questions: [
      {
        id: "l02-05-q1",
        question: "What's the most effective target for a rebuttal?",
        options: [
          { id: "a", text: "Your opponent's appearance" },
          { id: "b", text: "The warrant (evidence/reasoning) of their argument" },
          { id: "c", text: "Simply denying their claim without explanation" },
          { id: "d", text: "Ignoring their argument completely" },
        ],
        correctAnswer: "b",
        explanation: "Attacking the warrant - the evidence and reasoning - undermines the foundation of their argument.",
      },
      {
        id: "l02-05-q2",
        question: "What should you explain when making a rebuttal?",
        options: [
          { id: "a", text: "Only why you're right" },
          { id: "b", text: "Why their reasoning is flawed AND why your argument prevails" },
          { id: "c", text: "Personal opinions about the topic" },
          { id: "d", text: "Unrelated facts" },
        ],
        correctAnswer: "b",
        explanation: "Effective rebuttals explain why the opponent's logic fails and why your argument is stronger.",
      },
    ],
  },
  {
    lessonId: "l02-06",
    questions: [
      {
        id: "l02-06-q1",
        question: "What is the main purpose of cross-examination?",
        options: [
          { id: "a", text: "To argue with your opponent" },
          { id: "b", text: "To expose weaknesses in your opponent's case" },
          { id: "c", text: "To give a speech" },
          { id: "d", text: "To make friends with your opponent" },
        ],
        correctAnswer: "b",
        explanation: "Cross-examination is your opportunity to ask questions that reveal weaknesses in their case.",
      },
      {
        id: "l02-06-q2",
        question: "What type of questions should you avoid during cross-ex?",
        options: [
          { id: "a", text: "Clarifying questions" },
          { id: "b", text: "Short, clear questions" },
          { id: "c", text: "Long, argumentative speeches disguised as questions" },
          { id: "d", text: "Questions about their evidence" },
        ],
        correctAnswer: "c",
        explanation: "Cross-ex is for asking questions, not making arguments. Keep questions short and don't argue.",
      },
    ],
  },
  {
    lessonId: "l03-01",
    questions: [
      {
        id: "l03-01-q1",
        question: "Why is controlling the framework important?",
        options: [
          { id: "a", text: "It makes your speech longer" },
          { id: "b", text: "It determines how arguments are evaluated" },
          { id: "c", text: "It makes you speak first" },
          { id: "d", text: "It's not actually important" },
        ],
        correctAnswer: "b",
        explanation: "The framework sets the criteria for judging arguments - whoever controls it controls how the debate is evaluated.",
      },
      {
        id: "l03-01-q2",
        question: "When should you define key terms in a debate?",
        options: [
          { id: "a", text: "At the very end" },
          { id: "b", text: "Early in your case" },
          { id: "c", text: "Never" },
          { id: "d", text: "Only if asked" },
        ],
        correctAnswer: "b",
        explanation: "Defining terms early establishes the ground rules and prevents your opponent from reframing the debate.",
      },
    ],
  },
  {
    lessonId: "l03-02",
    questions: [
      {
        id: "l03-02-q1",
        question: "Which is NOT a standard way to weigh arguments?",
        options: [
          { id: "a", text: "Magnitude (how big is the impact)" },
          { id: "b", text: "Probability (how likely is it)" },
          { id: "c", text: "How loudly it was stated" },
          { id: "d", text: "Reversibility (can it be undone)" },
        ],
        correctAnswer: "c",
        explanation: "Arguments are weighed by substance (magnitude, probability, timeframe, reversibility), not delivery style.",
      },
      {
        id: "l03-02-q2",
        question: "Why do judges need weighing analysis?",
        options: [
          { id: "a", text: "They don't need it" },
          { id: "b", text: "To understand why your argument outweighs the opponent's" },
          { id: "c", text: "To fill time" },
          { id: "d", text: "To confuse them" },
        ],
        correctAnswer: "b",
        explanation: "Weighing tells judges why your argument matters more when comparing to the opponent's claims.",
      },
    ],
  },
  {
    lessonId: "l03-03",
    questions: [
      {
        id: "l03-03-q1",
        question: "What is crystallization?",
        options: [
          { id: "a", text: "Making your arguments complicated" },
          { id: "b", text: "Focusing on 2-3 key voting issues in final speeches" },
          { id: "c", text: "Freezing during your speech" },
          { id: "d", text: "Using technical jargon" },
        ],
        correctAnswer: "b",
        explanation: "Crystallization means distilling the debate to the most important issues that should decide the outcome.",
      },
      {
        id: "l03-03-q2",
        question: "What should you do in your final speech?",
        options: [
          { id: "a", text: "Introduce new arguments" },
          { id: "b", text: "Tell the story of the debate and why you've won" },
          { id: "c", text: "Repeat everything from your first speech" },
          { id: "d", text: "Apologize for your mistakes" },
        ],
        correctAnswer: "b",
        explanation: "Final speeches should summarize the key issues and explain why you've won those critical points.",
      },
    ],
  },
  {
    lessonId: "l03-04",
    questions: [
      {
        id: "l03-04-q1",
        question: "How should you adapt for a lay (non-expert) judge?",
        options: [
          { id: "a", text: "Use as much technical jargon as possible" },
          { id: "b", text: "Prefer clear, simple arguments" },
          { id: "c", text: "Speak very quickly" },
          { id: "d", text: "Ignore the judge's background" },
        ],
        correctAnswer: "b",
        explanation: "Lay judges respond better to clear, accessible arguments rather than technical debate terminology.",
      },
      {
        id: "l03-04-q2",
        question: "Should adapting to your judge mean changing your core arguments?",
        options: [
          { id: "a", text: "Yes, completely change everything" },
          { id: "b", text: "No, maintain core arguments while adjusting style and complexity" },
          { id: "c", text: "Never adapt to judges" },
          { id: "d", text: "Only speak about what judges want to hear" },
        ],
        correctAnswer: "b",
        explanation: "Adapt your presentation style and complexity level while keeping your core arguments intact.",
      },
    ],
  },
  {
    lessonId: "l04-01",
    questions: [
      {
        id: "l04-01-q1",
        question: "What should a good research file include?",
        options: [
          { id: "a", text: "Only evidence supporting your side" },
          { id: "b", text: "Evidence from both affirmative and negative perspectives" },
          { id: "c", text: "Random articles from any source" },
          { id: "d", text: "Only your own opinions" },
        ],
        correctAnswer: "b",
        explanation: "Prepare both sides so you're ready regardless of which position you're assigned.",
      },
      {
        id: "l04-01-q2",
        question: "How should you organize your evidence?",
        options: [
          { id: "a", text: "Randomly in one big folder" },
          { id: "b", text: "By argument type and topic with proper citations" },
          { id: "c", text: "Don't organize - just memorize everything" },
          { id: "d", text: "Only by date collected" },
        ],
        correctAnswer: "b",
        explanation: "Organize by topic and argument type so you can quickly find evidence during a debate.",
      },
    ],
  },
  {
    lessonId: "l04-02",
    questions: [
      {
        id: "l04-02-q1",
        question: "What should you do before each debate round?",
        options: [
          { id: "a", text: "Only review your opening statement" },
          { id: "b", text: "Review your case, anticipate opponent arguments, and prepare responses" },
          { id: "c", text: "Sleep until the round starts" },
          { id: "d", text: "Ignore your preparation" },
        ],
        correctAnswer: "b",
        explanation: "Pre-round prep includes reviewing your case, anticipating opposition, and checking topic wording.",
      },
      {
        id: "l04-02-q2",
        question: "Why should you check the topic wording carefully?",
        options: [
          { id: "a", text: "It doesn't matter" },
          { id: "b", text: "To ensure your arguments directly address the resolution" },
          { id: "c", text: "To memorize it word for word" },
          { id: "d", text: "Topics never change" },
        ],
        correctAnswer: "b",
        explanation: "Your arguments must directly address the topic - missing key words can make your case irrelevant.",
      },
    ],
  },
  {
    lessonId: "l04-03",
    questions: [
      {
        id: "l04-03-q1",
        question: "How should you view some nervousness before a debate?",
        options: [
          { id: "a", text: "As a sign you should quit" },
          { id: "b", text: "As something good that keeps you sharp" },
          { id: "c", text: "As a major problem" },
          { id: "d", text: "As a reason to skip the round" },
        ],
        correctAnswer: "b",
        explanation: "Some nervousness is beneficial - it keeps you alert and focused during competition.",
      },
      {
        id: "l04-03-q2",
        question: "What should you focus on to manage debate anxiety?",
        options: [
          { id: "a", text: "Winning at all costs" },
          { id: "b", text: "The outcome and trophies" },
          { id: "c", text: "Your preparation and the process" },
          { id: "d", text: "What others think of you" },
        ],
        correctAnswer: "c",
        explanation: "Focusing on preparation and process (what you can control) reduces anxiety about outcomes.",
      },
    ],
  },
  {
    lessonId: "l04-04",
    questions: [
      {
        id: "l04-04-q1",
        question: "How should you approach losing a debate round?",
        options: [
          { id: "a", text: "Make excuses about the judge" },
          { id: "b", text: "View it as a learning opportunity and seek feedback" },
          { id: "c", text: "Give up on debate" },
          { id: "d", text: "Blame your partner" },
        ],
        correctAnswer: "b",
        explanation: "Losses are valuable learning opportunities - seek feedback and identify specific improvements.",
      },
      {
        id: "l04-04-q2",
        question: "What do the best debaters do differently with their losses?",
        options: [
          { id: "a", text: "Forget about them quickly" },
          { id: "b", text: "Analyze them more carefully than their wins" },
          { id: "c", text: "Never lose" },
          { id: "d", text: "Blame external factors" },
        ],
        correctAnswer: "b",
        explanation: "Top debaters learn more from analyzing losses than celebrating wins - they identify patterns and fix weaknesses.",
      },
    ],
  },
  // Unit 6: Sources & Credibility
  {
    lessonId: "l06-01",
    questions: [
      {
        id: "l06-01-q1",
        question: "What is an ad hominem fallacy?",
        options: [
          { id: "a", text: "Attacking the argument's evidence" },
          { id: "b", text: "Attacking the person making the argument instead of the argument itself" },
          { id: "c", text: "Using emotional appeals" },
          { id: "d", text: "Presenting only two options" },
        ],
        correctAnswer: "b",
        explanation: "Ad hominem attacks the person rather than their argument, which is fallacious because character doesn't determine argument validity.",
      },
      {
        id: "l06-01-q2",
        question: "How should you respond when an opponent uses ad hominem against you?",
        options: [
          { id: "a", text: "Attack them back with personal insults" },
          { id: "b", text: "Name the fallacy briefly and redirect to the substance of your argument" },
          { id: "c", text: "Leave the debate" },
          { id: "d", text: "Ignore it completely without mentioning it" },
        ],
        correctAnswer: "b",
        explanation: "The best response is to briefly identify the fallacy and redirect to substance, making the attack cost your opponent.",
      },
    ],
  },
  {
    lessonId: "l06-02",
    questions: [
      {
        id: "l06-02-q1",
        question: "Why should debaters be able to adjust their speaking speed?",
        options: [
          { id: "a", text: "Speed has no impact on debate success" },
          { id: "b", text: "Different judges and circuits have different expectations" },
          { id: "c", text: "Faster is always better" },
          { id: "d", text: "Slower is always better" },
        ],
        correctAnswer: "b",
        explanation: "Adaptability is crucial because different judges and circuits have different expectations for speaking pace.",
      },
      {
        id: "l06-02-q2",
        question: "What should you prioritize over raw speed when speaking?",
        options: [
          { id: "a", text: "Volume" },
          { id: "b", text: "Enunciation and clarity" },
          { id: "c", text: "Gestures" },
          { id: "d", text: "Eye contact" },
        ],
        correctAnswer: "b",
        explanation: "Clear enunciation matters more than raw speed. Judges can't evaluate arguments they can't understand.",
      },
    ],
  },
  {
    lessonId: "l06-03",
    questions: [
      {
        id: "l06-03-q1",
        question: "What does CRAAP stand for in source evaluation?",
        options: [
          { id: "a", text: "Credibility, Research, Authority, Accuracy, Purpose" },
          { id: "b", text: "Currency, Relevance, Authority, Accuracy, Purpose" },
          { id: "c", text: "Clarity, Relevance, Accuracy, Authority, Precision" },
          { id: "d", text: "Current, Reliable, Authentic, Accurate, Published" },
        ],
        correctAnswer: "b",
        explanation: "CRAAP stands for Currency, Relevance, Authority, Accuracy, and Purpose - a framework for evaluating sources.",
      },
      {
        id: "l06-03-q2",
        question: "Why is it important that an expert's credentials match the topic?",
        options: [
          { id: "a", text: "It isn't - all PhDs are equally credible on all topics" },
          { id: "b", text: "Expertise doesn't transfer between unrelated fields" },
          { id: "c", text: "Credentials never matter" },
          { id: "d", text: "Only medical doctors can be experts" },
        ],
        correctAnswer: "b",
        explanation: "Expertise doesn't transfer between fields. A PhD in art history doesn't make someone an authority on medicine.",
      },
    ],
  },
  {
    lessonId: "l06-04",
    questions: [
      {
        id: "l06-04-q1",
        question: "What is a strawman fallacy?",
        options: [
          { id: "a", text: "Attacking the person making the argument" },
          { id: "b", text: "Misrepresenting an opponent's position to make it easier to attack" },
          { id: "c", text: "Using fear to persuade" },
          { id: "d", text: "Claiming something is true because it's traditional" },
        ],
        correctAnswer: "b",
        explanation: "A strawman misrepresents an opponent's position to create an easier target to attack.",
      },
      {
        id: "l06-04-q2",
        question: "What is the best first step when responding to a strawman attack?",
        options: [
          { id: "a", text: "Accept the distorted version" },
          { id: "b", text: "Clearly restate what you actually argued" },
          { id: "c", text: "Attack your opponent personally" },
          { id: "d", text: "Change your argument to match the strawman" },
        ],
        correctAnswer: "b",
        explanation: "The best response is to clearly restate your actual position, correcting the record for the judge.",
      },
    ],
  },
  {
    lessonId: "l06-05",
    questions: [
      {
        id: "l06-05-q1",
        question: "What is the recommended balance between eye contact and checking notes?",
        options: [
          { id: "a", text: "100% eye contact, never look at notes" },
          { id: "b", text: "About 70-80% eye contact, 20-30% notes" },
          { id: "c", text: "Keep head down and read from notes" },
          { id: "d", text: "Only look at judges when they're writing" },
        ],
        correctAnswer: "b",
        explanation: "About 70-80% eye contact maintains connection while allowing you to stay organized with notes.",
      },
      {
        id: "l06-05-q2",
        question: "What should your posture look like when speaking?",
        options: [
          { id: "a", text: "Slouching to appear relaxed" },
          { id: "b", text: "Hands in pockets" },
          { id: "c", text: "Feet shoulder-width apart, shoulders back, head level" },
          { id: "d", text: "Leaning heavily on the podium" },
        ],
        correctAnswer: "c",
        explanation: "Balanced posture with feet shoulder-width apart, shoulders back, and head level projects confidence.",
      },
    ],
  },
  {
    lessonId: "l06-06",
    questions: [
      {
        id: "l06-06-q1",
        question: "What is a primary source?",
        options: [
          { id: "a", text: "A textbook analyzing other research" },
          { id: "b", text: "Original, uninterpreted materials like research studies or government data" },
          { id: "c", text: "A news article about a study" },
          { id: "d", text: "A Wikipedia entry" },
        ],
        correctAnswer: "b",
        explanation: "Primary sources are original, uninterpreted materials - the data itself, original studies, or firsthand accounts.",
      },
      {
        id: "l06-06-q2",
        question: "When is a secondary source most appropriate?",
        options: [
          { id: "a", text: "For precise statistical claims" },
          { id: "b", text: "To synthesize findings from many studies" },
          { id: "c", text: "When your opponent challenges your data" },
          { id: "d", text: "Primary sources are always better" },
        ],
        correctAnswer: "b",
        explanation: "Secondary sources are valuable for synthesizing findings across many studies, like meta-analyses.",
      },
    ],
  },
  {
    lessonId: "l06-07",
    questions: [
      {
        id: "l06-07-q1",
        question: "What distinguishes ad hominem from strawman?",
        options: [
          { id: "a", text: "They are the same fallacy" },
          { id: "b", text: "Ad hominem attacks the person; strawman attacks a distorted argument" },
          { id: "c", text: "Strawman attacks the person; ad hominem attacks the argument" },
          { id: "d", text: "Neither is a real fallacy" },
        ],
        correctAnswer: "b",
        explanation: "Ad hominem attacks the person making the argument, while strawman attacks a misrepresented version of their argument.",
      },
    ],
  },
  // Unit 7: Logic & Bias
  {
    lessonId: "l07-01",
    questions: [
      {
        id: "l07-01-q1",
        question: "What is funding bias?",
        options: [
          { id: "a", text: "Research funded by interested parties that may skew toward desired conclusions" },
          { id: "b", text: "Choosing only facts that confirm existing beliefs" },
          { id: "c", text: "Focusing only on successful examples" },
          { id: "d", text: "Bias toward older sources" },
        ],
        correctAnswer: "a",
        explanation: "Funding bias occurs when research funded by interested parties may skew toward conclusions that benefit the funder.",
      },
      {
        id: "l07-01-q2",
        question: "What makes an 'against interest' finding especially credible?",
        options: [
          { id: "a", text: "It comes from a famous person" },
          { id: "b", text: "The source admits something contrary to their expected bias" },
          { id: "c", text: "It's published in a newspaper" },
          { id: "d", text: "It's very old" },
        ],
        correctAnswer: "b",
        explanation: "When a source admits something against their apparent interest, they have no motivation to fabricate it.",
      },
    ],
  },
  {
    lessonId: "l07-02",
    questions: [
      {
        id: "l07-02-q1",
        question: "What is a false dichotomy?",
        options: [
          { id: "a", text: "Attacking the person instead of their argument" },
          { id: "b", text: "Presenting only two options when more exist" },
          { id: "c", text: "Assuming correlation proves causation" },
          { id: "d", text: "Using emotional appeals" },
        ],
        correctAnswer: "b",
        explanation: "False dichotomy presents only two options when more alternatives actually exist.",
      },
      {
        id: "l07-02-q2",
        question: "How do you respond to a false dichotomy?",
        options: [
          { id: "a", text: "Accept one of the two options" },
          { id: "b", text: "Introduce the hidden alternatives that were ignored" },
          { id: "c", text: "Attack the opponent personally" },
          { id: "d", text: "Change the subject" },
        ],
        correctAnswer: "b",
        explanation: "Respond by introducing the alternatives being hidden - showing more options exist.",
      },
    ],
  },
  {
    lessonId: "l07-03",
    questions: [
      {
        id: "l07-03-q1",
        question: "How does debate training improve essay writing?",
        options: [
          { id: "a", text: "It doesn't - they're unrelated" },
          { id: "b", text: "It teaches the same claim-evidence-reasoning structure used in essays" },
          { id: "c", text: "It only helps with speaking" },
          { id: "d", text: "Essays don't use arguments" },
        ],
        correctAnswer: "b",
        explanation: "The claim-evidence-reasoning structure in debate is exactly what strong essays require.",
      },
    ],
  },
  {
    lessonId: "l07-04",
    questions: [
      {
        id: "l07-04-q1",
        question: "In the Toulmin model, what is the function of the 'warrant'?",
        options: [
          { id: "a", text: "To state the main conclusion" },
          { id: "b", text: "To provide evidence" },
          { id: "c", text: "To explain why the evidence supports the claim" },
          { id: "d", text: "To acknowledge exceptions" },
        ],
        correctAnswer: "c",
        explanation: "The warrant is the logical bridge connecting data to claim - it explains WHY the evidence supports the claim.",
      },
      {
        id: "l07-04-q2",
        question: "Which Toulmin element is most commonly missing in incomplete arguments?",
        options: [
          { id: "a", text: "Claim" },
          { id: "b", text: "Data" },
          { id: "c", text: "Warrant" },
          { id: "d", text: "Rebuttal" },
        ],
        correctAnswer: "c",
        explanation: "Warrants are most commonly missing - people present claims with data but don't explain the logical connection.",
      },
    ],
  },
  {
    lessonId: "l07-05",
    questions: [
      {
        id: "l07-05-q1",
        question: "What makes a slippery slope argument fallacious rather than valid?",
        options: [
          { id: "a", text: "It predicts negative consequences" },
          { id: "b", text: "It assumes an inevitable chain without evidence" },
          { id: "c", text: "It involves more than two steps" },
          { id: "d", text: "It connects an action to future outcomes" },
        ],
        correctAnswer: "b",
        explanation: "A slippery slope becomes fallacious when it assumes an inevitable causal chain without providing evidence.",
      },
    ],
  },
  {
    lessonId: "l07-06",
    questions: [
      {
        id: "l07-06-q1",
        question: "Why doesn't correlation prove causation?",
        options: [
          { id: "a", text: "Correlation and causation are the same thing" },
          { id: "b", text: "Things can correlate due to coincidence, third variables, or reverse causation" },
          { id: "c", text: "Correlation always proves causation" },
          { id: "d", text: "Causation always creates correlation" },
        ],
        correctAnswer: "b",
        explanation: "Correlation can occur due to coincidence, third variables causing both, or reverse causation - not just direct causation.",
      },
      {
        id: "l07-06-q2",
        question: "What's needed beyond correlation to establish causation?",
        options: [
          { id: "a", text: "Nothing - correlation is enough" },
          { id: "b", text: "Temporal sequence, mechanism, controlled evidence, and ruling out alternatives" },
          { id: "c", text: "Just a larger sample size" },
          { id: "d", text: "Expert opinion" },
        ],
        correctAnswer: "b",
        explanation: "Causation requires temporal sequence plus plausible mechanism, controlled evidence, and ruling out alternatives.",
      },
    ],
  },
  {
    lessonId: "l07-07",
    questions: [
      {
        id: "l07-07-q1",
        question: "What do bias detection and evidence evaluation have in common?",
        options: [
          { id: "a", text: "Nothing - they're unrelated skills" },
          { id: "b", text: "Both require critically examining sources rather than accepting them at face value" },
          { id: "c", text: "Both are unnecessary in debate" },
          { id: "d", text: "Both only apply to scientific research" },
        ],
        correctAnswer: "b",
        explanation: "Both skills require critically examining sources rather than accepting claims at face value.",
      },
    ],
  },
  // Unit 8: Research & Appeals
  {
    lessonId: "l08-01",
    questions: [
      {
        id: "l08-01-q1",
        question: "Why should you anticipate objections in your case?",
        options: [
          { id: "a", text: "It's not necessary - just respond in rebuttals" },
          { id: "b", text: "It demonstrates depth and lets you control how objections are framed" },
          { id: "c", text: "It wastes time" },
          { id: "d", text: "Judges prefer cases without preemption" },
        ],
        correctAnswer: "b",
        explanation: "Anticipating objections demonstrates depth and lets you frame objections on your terms.",
      },
      {
        id: "l08-01-q2",
        question: "What is the 'even if' strategy?",
        options: [
          { id: "a", text: "Avoiding addressing objections" },
          { id: "b", text: "Creating layered defense - showing you win whether the objection is true or false" },
          { id: "c", text: "Conceding all opponent points" },
          { id: "d", text: "Only using emotional appeals" },
        ],
        correctAnswer: "b",
        explanation: "The 'even if' strategy creates layered defense where you win regardless of whether the objection is true.",
      },
    ],
  },
  {
    lessonId: "l08-02",
    questions: [
      {
        id: "l08-02-q1",
        question: "When is an appeal to authority legitimate?",
        options: [
          { id: "a", text: "Whenever someone has any credential" },
          { id: "b", text: "When the expert's credentials match the specific claim" },
          { id: "c", text: "When the expert is famous" },
          { id: "d", text: "Never - authority is always fallacious" },
        ],
        correctAnswer: "b",
        explanation: "Appeal to authority is legitimate when the expert's credentials and experience directly relate to the claim.",
      },
      {
        id: "l08-02-q2",
        question: "Why is expert consensus stronger than individual expert opinion?",
        options: [
          { id: "a", text: "It isn't stronger" },
          { id: "b", text: "When many qualified experts agree after reviewing evidence, that agreement itself is evidence" },
          { id: "c", text: "Consensus can never be wrong" },
          { id: "d", text: "Individual experts are never credible" },
        ],
        correctAnswer: "b",
        explanation: "When the overwhelming majority of qualified experts agree, that convergence is itself strong evidence.",
      },
    ],
  },
  {
    lessonId: "l08-03",
    questions: [
      {
        id: "l08-03-q1",
        question: "Why does acknowledging limitations build credibility?",
        options: [
          { id: "a", text: "It doesn't - always hide weaknesses" },
          { id: "b", text: "It shows you're being honest, making judges trust your other claims more" },
          { id: "c", text: "It confuses the judge" },
          { id: "d", text: "Judges prefer weaker evidence" },
        ],
        correctAnswer: "b",
        explanation: "Acknowledging limitations demonstrates honesty, which increases trust in everything else you say.",
      },
    ],
  },
  {
    lessonId: "l08-04",
    questions: [
      {
        id: "l08-04-q1",
        question: "Why do larger sample sizes produce more reliable results?",
        options: [
          { id: "a", text: "Sample size doesn't matter" },
          { id: "b", text: "Larger samples are less susceptible to random variation" },
          { id: "c", text: "Smaller samples are always better" },
          { id: "d", text: "Only experts can understand sample size" },
        ],
        correctAnswer: "b",
        explanation: "Larger samples are less susceptible to random variation and more likely to represent the actual population.",
      },
      {
        id: "l08-04-q2",
        question: "What does 'statistically significant' mean?",
        options: [
          { id: "a", text: "The effect is large and important" },
          { id: "b", text: "The result is unlikely to be due to random chance" },
          { id: "c", text: "The study is perfectly designed" },
          { id: "d", text: "The result will definitely replicate" },
        ],
        correctAnswer: "b",
        explanation: "Statistical significance means the result is unlikely due to random chance - but doesn't indicate importance or size.",
      },
    ],
  },
  {
    lessonId: "l08-05",
    questions: [
      {
        id: "l08-05-q1",
        question: "When are emotional appeals legitimate in debate?",
        options: [
          { id: "a", text: "When they replace logical arguments" },
          { id: "b", text: "When they illustrate and support logical arguments" },
          { id: "c", text: "Never" },
          { id: "d", text: "Always - emotion is more important than logic" },
        ],
        correctAnswer: "b",
        explanation: "Emotional appeals are legitimate when they illustrate and support logical arguments, not replace them.",
      },
    ],
  },
  {
    lessonId: "l08-06",
    questions: [
      {
        id: "l08-06-q1",
        question: "Why is Google Scholar useful for debate research?",
        options: [
          { id: "a", text: "It only shows unreliable sources" },
          { id: "b", text: "It provides free access to academic papers and shows citation counts" },
          { id: "c", text: "It's the same as regular Google" },
          { id: "d", text: "Academic papers aren't useful in debate" },
        ],
        correctAnswer: "b",
        explanation: "Google Scholar provides free access to academic papers and shows citation counts indicating influence.",
      },
    ],
  },
  {
    lessonId: "l08-07",
    questions: [
      {
        id: "l08-07-q1",
        question: "What makes a complete research strategy?",
        options: [
          { id: "a", text: "Only using one type of source" },
          { id: "b", text: "Combining academic, government, and news sources while evaluating each critically" },
          { id: "c", text: "Only trusting Wikipedia" },
          { id: "d", text: "Avoiding all research" },
        ],
        correctAnswer: "b",
        explanation: "A complete research strategy uses diverse quality sources and evaluates each critically.",
      },
    ],
  },
  // Unit 9: Evidence Quality
  {
    lessonId: "l09-01",
    questions: [
      {
        id: "l09-01-q1",
        question: "What is appeal to ignorance?",
        options: [
          { id: "a", text: "Attacking someone for being uneducated" },
          { id: "b", text: "Arguing something is true because it hasn't been proven false" },
          { id: "c", text: "Using complicated words" },
          { id: "d", text: "Ignoring your opponent" },
        ],
        correctAnswer: "b",
        explanation: "Appeal to ignorance argues something is true because it hasn't been proven false (or vice versa).",
      },
      {
        id: "l09-01-q2",
        question: "Who bears the burden of proof?",
        options: [
          { id: "a", text: "The person who denies the claim" },
          { id: "b", text: "Whoever makes the claim" },
          { id: "c", text: "The judge" },
          { id: "d", text: "No one" },
        ],
        correctAnswer: "b",
        explanation: "Whoever makes a claim bears the burden of proving it - you can't demand others disprove your claims.",
      },
    ],
  },
  {
    lessonId: "l09-02",
    questions: [
      {
        id: "l09-02-q1",
        question: "What's the difference between statistical significance and effect size?",
        options: [
          { id: "a", text: "They're the same thing" },
          { id: "b", text: "Significance shows it's not random; effect size shows how big the difference is" },
          { id: "c", text: "Effect size is about sample size" },
          { id: "d", text: "Significance is always more important" },
        ],
        correctAnswer: "b",
        explanation: "Significance indicates a result isn't due to chance; effect size tells you how large the actual difference is.",
      },
    ],
  },
  {
    lessonId: "l09-03",
    questions: [
      {
        id: "l09-03-q1",
        question: "What's the key difference between debate and personal conflict resolution?",
        options: [
          { id: "a", text: "Always try to win in both" },
          { id: "b", text: "In personal situations, the goal is understanding, not winning" },
          { id: "c", text: "Never use debate skills personally" },
          { id: "d", text: "There's no difference" },
        ],
        correctAnswer: "b",
        explanation: "In personal relationships, the goal shifts from winning to understanding and connection.",
      },
    ],
  },
  {
    lessonId: "l09-04",
    questions: [
      {
        id: "l09-04-q1",
        question: "When is anecdotal evidence most appropriate?",
        options: [
          { id: "a", text: "As your only evidence for a general claim" },
          { id: "b", text: "To illustrate a point already supported by broader data" },
          { id: "c", text: "To prove something always happens" },
          { id: "d", text: "To replace statistical analysis" },
        ],
        correctAnswer: "b",
        explanation: "Anecdotes work best when illustrating points already supported by broader data.",
      },
      {
        id: "l09-04-q2",
        question: "Why can't a single anecdote prove a general claim?",
        options: [
          { id: "a", text: "Anecdotes are always false" },
          { id: "b", text: "Individual cases may not be representative of typical experiences" },
          { id: "c", text: "Stories have no value in debate" },
          { id: "d", text: "Only statistics matter" },
        ],
        correctAnswer: "b",
        explanation: "Individual cases may be outliers and don't prove what typically happens.",
      },
    ],
  },
  {
    lessonId: "l09-05",
    questions: [
      {
        id: "l09-05-q1",
        question: "Why is 'we've always done it this way' not a valid argument?",
        options: [
          { id: "a", text: "Tradition is always wrong" },
          { id: "b", text: "Age doesn't determine correctness - many traditions were wrong" },
          { id: "c", text: "New things are always better" },
          { id: "d", text: "It's always a valid argument" },
        ],
        correctAnswer: "b",
        explanation: "Longevity doesn't prove correctness. Many long-standing traditions were wrong or have become outdated.",
      },
    ],
  },
  {
    lessonId: "l09-06",
    questions: [
      {
        id: "l09-06-q1",
        question: "What makes someone an expert on a specific topic?",
        options: [
          { id: "a", text: "Being famous" },
          { id: "b", text: "Relevant education, experience, and publication in that specific field" },
          { id: "c", text: "Having any credential" },
          { id: "d", text: "Being old" },
        ],
        correctAnswer: "b",
        explanation: "Expertise requires relevant credentials, experience, and work specifically in the field of the claim.",
      },
    ],
  },
  {
    lessonId: "l09-07",
    questions: [
      {
        id: "l09-07-q1",
        question: "How do evidence quality tools work together?",
        options: [
          { id: "a", text: "They're used separately, never together" },
          { id: "b", text: "Evaluate burden of proof, source type, sample size, representativeness, and expert qualifications together" },
          { id: "c", text: "Only one tool matters" },
          { id: "d", text: "They contradict each other" },
        ],
        correctAnswer: "b",
        explanation: "Comprehensive evidence evaluation uses multiple tools together for thorough assessment.",
      },
    ],
  },
  // Unit 10: Causation & Ethics + Capstone
  {
    lessonId: "l10-01",
    questions: [
      {
        id: "l10-01-q1",
        question: "What is a red herring fallacy?",
        options: [
          { id: "a", text: "Attacking the person" },
          { id: "b", text: "Diverting attention from the actual issue to something irrelevant" },
          { id: "c", text: "Using emotional appeals" },
          { id: "d", text: "Assuming causation from correlation" },
        ],
        correctAnswer: "b",
        explanation: "A red herring diverts attention from the actual issue to something irrelevant.",
      },
      {
        id: "l10-01-q2",
        question: "How should you respond when an opponent uses a red herring?",
        options: [
          { id: "a", text: "Follow them to the new topic" },
          { id: "b", text: "Redirect to the original question" },
          { id: "c", text: "Accept their new framing" },
          { id: "d", text: "End the debate" },
        ],
        correctAnswer: "b",
        explanation: "Respond by redirecting to the original question and noting they haven't addressed it.",
      },
    ],
  },
  {
    lessonId: "l10-02",
    questions: [
      {
        id: "l10-02-q1",
        question: "What is the post hoc fallacy?",
        options: [
          { id: "a", text: "Attacking someone's credentials" },
          { id: "b", text: "Assuming that because B followed A, A must have caused B" },
          { id: "c", text: "Presenting only two options" },
          { id: "d", text: "Using vague language" },
        ],
        correctAnswer: "b",
        explanation: "Post hoc assumes that because B happened after A, A must have caused B - confusing sequence with causation.",
      },
      {
        id: "l10-02-q2",
        question: "What else might explain why B happened after A?",
        options: [
          { id: "a", text: "Only A could cause B" },
          { id: "b", text: "Coincidence, natural progression, confounding variables, or reverse causation" },
          { id: "c", text: "Nothing else could explain it" },
          { id: "d", text: "Sequence always proves causation" },
        ],
        correctAnswer: "b",
        explanation: "Alternatives include coincidence, natural progression, confounding variables, or reverse causation.",
      },
    ],
  },
  {
    lessonId: "l10-03",
    questions: [
      {
        id: "l10-03-q1",
        question: "What should a proper citation include?",
        options: [
          { id: "a", text: "Just 'studies show'" },
          { id: "b", text: "Source, author, credentials, and date" },
          { id: "c", text: "Only the author's first name" },
          { id: "d", text: "Nothing specific is needed" },
        ],
        correctAnswer: "b",
        explanation: "Proper citations include source name, author, relevant credentials, and date for verifiability.",
      },
    ],
  },
  {
    lessonId: "l10-04",
    questions: [
      {
        id: "l10-04-q1",
        question: "What's the most important rule about evidence ethics?",
        options: [
          { id: "a", text: "Win at any cost" },
          { id: "b", text: "Never fabricate evidence" },
          { id: "c", text: "Hide your sources" },
          { id: "d", text: "Exaggerate for effect" },
        ],
        correctAnswer: "b",
        explanation: "Never fabricate evidence - it's the most serious ethical violation with severe consequences.",
      },
    ],
  },
  {
    lessonId: "l10-05",
    questions: [
      {
        id: "l10-05-q1",
        question: "What's the best approach when facing an unexpected argument?",
        options: [
          { id: "a", text: "Panic and give up" },
          { id: "b", text: "Stay calm and apply critical thinking skills" },
          { id: "c", text: "Pretend they didn't make it" },
          { id: "d", text: "Attack them personally" },
        ],
        correctAnswer: "b",
        explanation: "Stay calm and apply your critical thinking skills - this is a test of genuine debate ability.",
      },
    ],
  },
  {
    lessonId: "l10-06",
    questions: [
      {
        id: "l10-06-q1",
        question: "What are the core components of the Claim-Evidence-Reasoning structure?",
        options: [
          { id: "a", text: "Opinion, story, emotion" },
          { id: "b", text: "Claim, data supporting it, and explanation of why the data proves the claim" },
          { id: "c", text: "Introduction, body, conclusion" },
          { id: "d", text: "Speed, volume, clarity" },
        ],
        correctAnswer: "b",
        explanation: "CER includes the claim, evidence supporting it, and reasoning explaining why the evidence proves the claim.",
      },
    ],
  },
  {
    lessonId: "l10-07",
    questions: [
      {
        id: "l10-07-q1",
        question: "What mindset is most important for continued growth as a debater?",
        options: [
          { id: "a", text: "Believing you already know everything" },
          { id: "b", text: "A growth mindset: every round teaches something" },
          { id: "c", text: "Avoiding all feedback" },
          { id: "d", text: "Only debating weaker opponents" },
        ],
        correctAnswer: "b",
        explanation: "A growth mindset - viewing every round as a learning opportunity - is essential for improvement.",
      },
      {
        id: "l10-07-q2",
        question: "What's the main benefit of learning to argue both sides of issues?",
        options: [
          { id: "a", text: "It teaches dishonesty" },
          { id: "b", text: "You develop genuine understanding of multiple perspectives" },
          { id: "c", text: "You never have your own opinion" },
          { id: "d", text: "It has no benefit" },
        ],
        correctAnswer: "b",
        explanation: "Arguing both sides develops genuine understanding of multiple perspectives, making you a stronger advocate.",
      },
    ],
  },
];

export function getLessonExercise(lessonId: string): LessonExercise | undefined {
  return LESSON_EXERCISES.find(e => e.lessonId === lessonId);
}

// Multi-page lesson content - imported from lessons/ modules
// Units 1-10 (70 lessons) are fully built out with rich interactive content - complete Beginner section
export const MULTI_PAGE_LESSONS: MultiPageLesson[] = ALL_MULTI_PAGE_LESSONS;

export function getMultiPageLesson(lessonId: string): MultiPageLesson | undefined {
  return MULTI_PAGE_LESSONS.find(l => l.lessonId === lessonId);
}
