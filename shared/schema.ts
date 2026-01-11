import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, index, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

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

// Users table - merged with auth fields
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  skillPoints: integer("skill_points").notNull().default(500),
  totalDebates: integer("total_debates").notNull().default(0),
  wins: integer("wins").notNull().default(0),
  losses: integer("losses").notNull().default(0),
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
      { id: "b", text: "To provide evidence or reasoning that supports your claim" },
      { id: "c", text: "To summarize your argument" },
      { id: "d", text: "To attack your opponent's position" },
    ],
    correctAnswer: "b",
    difficulty: "beginner",
  },
  {
    id: "q2",
    question: "In a debate, what does 'burden of proof' typically mean?",
    options: [
      { id: "a", text: "The weight of your evidence folder" },
      { id: "b", text: "The obligation to prove your claims are true" },
      { id: "c", text: "The number of sources you must cite" },
      { id: "d", text: "How long your speech should be" },
    ],
    correctAnswer: "b",
    difficulty: "beginner",
  },
  {
    id: "q3",
    question: "What is 'signposting' in debate?",
    options: [
      { id: "a", text: "Holding up signs during your speech" },
      { id: "b", text: "Using verbal cues to guide listeners through your arguments" },
      { id: "c", text: "Pointing at your opponent" },
      { id: "d", text: "Writing key points on a whiteboard" },
    ],
    correctAnswer: "b",
    difficulty: "intermediate",
  },
  {
    id: "q4",
    question: "What is the best way to handle cross-examination?",
    options: [
      { id: "a", text: "Give long, detailed answers to every question" },
      { id: "b", text: "Refuse to answer questions you don't like" },
      { id: "c", text: "Answer concisely and honestly without volunteering extra information" },
      { id: "d", text: "Ask your own questions instead of answering" },
    ],
    correctAnswer: "c",
    difficulty: "intermediate",
  },
  {
    id: "q5",
    question: "What is 'crystallization' in a debate round?",
    options: [
      { id: "a", text: "Making your arguments as clear as crystal" },
      { id: "b", text: "Focusing on 2-3 key voting issues in final speeches" },
      { id: "c", text: "Freezing up during your speech" },
      { id: "d", text: "Using fancy vocabulary" },
    ],
    correctAnswer: "b",
    difficulty: "advanced",
  },
] as const;

export type AssessmentQuestion = typeof ASSESSMENT_QUESTIONS[number];

// Lesson Structure: Units > Sections > Lessons
export const LESSON_UNITS = [
  {
    id: "unit-1",
    title: "Foundations of Debate",
    description: "Master the fundamental concepts every debater needs to know",
    recommendedLevel: "none" as ExperienceLevel,
    order: 1,
    sections: [
      {
        id: "s1-1",
        title: "Understanding Debate",
        order: 1,
        lessons: [
          {
            id: "l1-1-1",
            title: "What is Debate?",
            order: 1,
            estimatedMinutes: 5,
            content: "Debate is a formal discussion on a particular topic where opposing arguments are presented. It develops critical thinking, research skills, and the ability to articulate complex ideas clearly. Unlike casual arguments, debate follows structured rules and focuses on logical reasoning rather than emotional appeals.",
            keyPoints: ["Structured argumentation", "Evidence-based reasoning", "Respectful disagreement", "Logical analysis"],
            exercise: "Think of a topic you feel strongly about. Write down one argument for each side of the issue.",
          },
          {
            id: "l1-1-2",
            title: "Debate Formats Overview",
            order: 2,
            estimatedMinutes: 8,
            content: "There are several major debate formats, each with unique rules and structures. Lincoln-Douglas focuses on value debates between two individuals. Public Forum is team-based and designed for general audiences. Policy Debate involves in-depth research on year-long resolutions. Parliamentary debate emphasizes quick thinking with limited preparation time.",
            keyPoints: ["Lincoln-Douglas: One-on-one value debate", "Public Forum: Team-based current events", "Policy: Research-intensive year-long topics", "Parliamentary: Impromptu and adaptive"],
            exercise: "Research one debate format and write a brief summary of its rules.",
          },
        ],
      },
      {
        id: "s1-2",
        title: "Building Arguments",
        order: 2,
        lessons: [
          {
            id: "l1-2-1",
            title: "The Claim-Warrant-Impact Framework",
            order: 1,
            estimatedMinutes: 10,
            content: "Every strong argument follows the CWI structure. The CLAIM is your assertion—what you believe to be true. The WARRANT is your reasoning or evidence that supports the claim. The IMPACT explains why your claim matters and what consequences follow from it being true.",
            keyPoints: ["Claim: Your main assertion", "Warrant: Evidence and reasoning", "Impact: Why it matters"],
            exercise: "Take a simple claim like 'Exercise is good for you' and build a complete CWI argument around it.",
          },
          {
            id: "l1-2-2",
            title: "Types of Arguments",
            order: 2,
            estimatedMinutes: 8,
            content: "Arguments can be categorized into four main types. Definitional arguments establish what terms mean. Factual arguments claim something is true or false. Value arguments assess whether something is good or bad. Policy arguments propose what should be done.",
            keyPoints: ["Definitional: What terms mean", "Factual: What is true", "Value: What is good/bad", "Policy: What should be done"],
            exercise: "Identify which type each of these arguments is: 'Democracy is the best form of government', 'Climate change is real', 'We should ban plastic bags'.",
          },
          {
            id: "l1-2-3",
            title: "Burden of Proof",
            order: 3,
            estimatedMinutes: 7,
            content: "The side proposing change (affirmative) typically bears the burden of proof. They must demonstrate why the current situation is problematic and why their solution is better. The negative side can defend the status quo or propose alternatives. Understanding burden of proof helps you know what you need to prove to win.",
            keyPoints: ["Affirmative must prove change is needed", "Negative can defend status quo", "Burden shifts when new claims are made"],
            exercise: "For the topic 'Schools should start later', identify what the affirmative side needs to prove.",
          },
        ],
      },
    ],
  },
  {
    id: "unit-2",
    title: "Debate Techniques",
    description: "Learn the skills that separate good debaters from great ones",
    recommendedLevel: "casual" as ExperienceLevel,
    order: 2,
    sections: [
      {
        id: "s2-1",
        title: "Listening and Note-Taking",
        order: 1,
        lessons: [
          {
            id: "l2-1-1",
            title: "Active Listening",
            order: 1,
            estimatedMinutes: 8,
            content: "Great debaters listen carefully to their opponents. Rather than just waiting for your turn to speak, actively engage with what's being said. Take notes on key claims, identify weaknesses in reasoning, and prepare targeted responses. Acknowledge valid points—it shows intellectual honesty.",
            keyPoints: ["Note opponent's main claims", "Identify logical gaps", "Prepare specific rebuttals", "Acknowledge valid points"],
            exercise: "Watch a debate video and take notes on one speaker's main arguments and potential weaknesses.",
          },
          {
            id: "l2-1-2",
            title: "Flowing (Note-Taking System)",
            order: 2,
            estimatedMinutes: 12,
            content: "Flowing is a systematic way to track arguments across a debate. Create columns for each speech, use abbreviations for common terms, and symbols for dropped arguments. Good flowing helps you see the entire debate structure and identify which arguments have gone unanswered.",
            keyPoints: ["Create consistent abbreviations", "Track argument responses", "Note dropped arguments", "Organize by contention"],
            exercise: "Create your own flowing abbreviation system for 10 common debate terms.",
          },
        ],
      },
      {
        id: "s2-2",
        title: "Speaking Skills",
        order: 2,
        lessons: [
          {
            id: "l2-2-1",
            title: "Signposting",
            order: 1,
            estimatedMinutes: 6,
            content: "Guide your audience through your arguments with clear verbal signposts. Use phrases like 'My first point is...', 'Furthermore...', 'In response to my opponent's claim...' Signposting helps judges follow your reasoning and shows organization.",
            keyPoints: ["Number your arguments", "Use transition phrases", "Summarize before moving on", "Reference opponent's points clearly"],
            exercise: "Rewrite a paragraph of an essay using signposting techniques.",
          },
          {
            id: "l2-2-2",
            title: "Time Management",
            order: 2,
            estimatedMinutes: 8,
            content: "Allocate your speaking time wisely. Spend roughly 70% on your strongest arguments and 30% on rebuttals. Don't try to address every minor point—focus on what matters most. Practice within time limits to develop a natural sense of pacing.",
            keyPoints: ["Prioritize key arguments", "Don't over-extend on weak points", "Save time for summary", "Practice within time limits"],
            exercise: "Time yourself giving a 2-minute speech on any topic. Did you finish early, late, or right on time?",
          },
        ],
      },
      {
        id: "s2-3",
        title: "Rebuttals",
        order: 3,
        lessons: [
          {
            id: "l2-3-1",
            title: "Rebuttal Techniques",
            order: 1,
            estimatedMinutes: 10,
            content: "Effective rebuttals directly address and dismantle opponent arguments. Don't just restate your position—explain specifically why their reasoning is flawed. Attack the warrant (their evidence or reasoning) rather than just denying the claim.",
            keyPoints: ["Attack the warrant, not just the claim", "Provide counter-evidence", "Show logical fallacies", "Explain why your argument prevails"],
            exercise: "Take an argument you disagree with and write a rebuttal that attacks the warrant.",
          },
          {
            id: "l2-3-2",
            title: "Cross-Examination Strategies",
            order: 2,
            estimatedMinutes: 10,
            content: "Cross-examination is your chance to expose weaknesses in your opponent's case. Ask questions that clarify their position, then use closed questions to pin down commitments and open questions to reveal inconsistencies. Don't argue during cross-ex—just gather information.",
            keyPoints: ["Ask clarifying questions", "Expose contradictions", "Don't argue during cross-ex", "Keep questions short and clear"],
            exercise: "Write 5 cross-examination questions for a topic of your choice.",
          },
        ],
      },
    ],
  },
  {
    id: "unit-3",
    title: "Advanced Strategy",
    description: "Master strategic thinking to win competitive debates",
    recommendedLevel: "some" as ExperienceLevel,
    order: 3,
    sections: [
      {
        id: "s3-1",
        title: "Framework and Weighing",
        order: 1,
        lessons: [
          {
            id: "l3-1-1",
            title: "Framework Debates",
            order: 1,
            estimatedMinutes: 12,
            content: "Establish the criteria by which arguments should be judged. If you control the framework, you control how the debate is evaluated. Define key terms early, establish clear evaluation criteria, and consistently apply your framework to all arguments in the round.",
            keyPoints: ["Define key terms early", "Establish evaluation criteria", "Argue why your framework matters", "Apply framework to all arguments"],
            exercise: "For the topic 'Privacy is more important than security', propose a framework and explain how it should be used to evaluate arguments.",
          },
          {
            id: "l3-1-2",
            title: "Weighing Arguments",
            order: 2,
            estimatedMinutes: 10,
            content: "Not all arguments are equal. Learn to weigh competing claims by magnitude (how big is the impact?), probability (how likely is it?), timeframe (when does it happen?), and reversibility (can it be undone?). Judges need to know why your argument outweighs your opponent's.",
            keyPoints: ["Magnitude: Size of impact", "Probability: Likelihood of occurrence", "Timeframe: When it happens", "Reversibility: Can it be undone"],
            exercise: "Compare two arguments on opposite sides of an issue and explain which outweighs and why.",
          },
        ],
      },
      {
        id: "s3-2",
        title: "Closing Strong",
        order: 2,
        lessons: [
          {
            id: "l3-2-1",
            title: "Crystallization",
            order: 1,
            estimatedMinutes: 8,
            content: "In final speeches, focus on the 2-3 most important voting issues. Explain why you've won these key points and why they should determine the outcome. Tell the story of the debate and guide the judge to your conclusion.",
            keyPoints: ["Identify voting issues", "Weigh competing arguments", "Summarize key wins", "Tell the story of the debate"],
            exercise: "After a practice debate, identify the 2 most important voting issues and explain why you won them.",
          },
          {
            id: "l3-2-2",
            title: "Judge Adaptation",
            order: 2,
            estimatedMinutes: 8,
            content: "Different judges value different things. Lay judges (non-experts) prefer clear, simple arguments. Flow judges (experts) expect technical precision. Learn to read your judge and adapt your style accordingly without compromising your arguments.",
            keyPoints: ["Know your judge's background", "Adapt complexity level", "Maintain core arguments", "Adjust speaking speed and style"],
            exercise: "How would you explain the same argument to a parent vs. a debate coach?",
          },
        ],
      },
    ],
  },
  {
    id: "unit-4",
    title: "Competition Mastery",
    description: "Prepare for tournament-level competition",
    recommendedLevel: "competitive" as ExperienceLevel,
    order: 4,
    sections: [
      {
        id: "s4-1",
        title: "Research and Preparation",
        order: 1,
        lessons: [
          {
            id: "l4-1-1",
            title: "Building a Research File",
            order: 1,
            estimatedMinutes: 15,
            content: "Competitive debaters maintain organized research files. Collect evidence from credible sources, cite properly, and organize by topic and argument type. Include both affirmative and negative evidence so you're prepared for any side.",
            keyPoints: ["Use credible sources", "Organize by argument type", "Maintain both sides", "Update regularly"],
            exercise: "Start a research file for one debate topic with at least 5 sources.",
          },
          {
            id: "l4-1-2",
            title: "Pre-Round Preparation",
            order: 2,
            estimatedMinutes: 10,
            content: "Before each round, review your case, anticipate opponent arguments, and prepare responses. If you know your opponent, study their tendencies. Check the topic wording carefully and ensure your arguments directly address it.",
            keyPoints: ["Review your case", "Anticipate opposition", "Research opponents if possible", "Check topic wording"],
            exercise: "Create a pre-round checklist of everything you should do before a debate.",
          },
        ],
      },
      {
        id: "s4-2",
        title: "Tournament Psychology",
        order: 2,
        lessons: [
          {
            id: "l4-2-1",
            title: "Managing Nerves",
            order: 1,
            estimatedMinutes: 8,
            content: "Even experienced debaters get nervous. Use breathing techniques, positive visualization, and physical warm-ups to manage anxiety. Remember that some nervousness is good—it keeps you sharp. Focus on your preparation, not the outcome.",
            keyPoints: ["Practice breathing techniques", "Visualize success", "Physical warm-ups help", "Focus on process, not outcome"],
            exercise: "Try a 4-7-8 breathing exercise: inhale for 4 seconds, hold for 7, exhale for 8. Do this 3 times.",
          },
          {
            id: "l4-2-2",
            title: "Learning from Losses",
            order: 2,
            estimatedMinutes: 8,
            content: "Losses are learning opportunities. After each round, reflect on what worked and what didn't. Ask judges for feedback. Don't make excuses—identify specific improvements. The best debaters analyze their losses more carefully than their wins.",
            keyPoints: ["Seek judge feedback", "Identify specific improvements", "No excuses", "Track patterns over time"],
            exercise: "After your next debate (win or lose), write down 3 things you could have done better.",
          },
        ],
      },
    ],
  },
] as const;

export type LessonUnit = typeof LESSON_UNITS[number];
export type LessonSection = LessonUnit["sections"][number];
export type Lesson = LessonSection["lessons"][number];

// Helper to get all lessons flattened
export function getAllLessons(): Array<{ unitId: string; sectionId: string; lesson: Lesson }> {
  const lessons: Array<{ unitId: string; sectionId: string; lesson: Lesson }> = [];
  for (const unit of LESSON_UNITS) {
    for (const section of unit.sections) {
      for (const lesson of section.lessons) {
        lessons.push({ unitId: unit.id, sectionId: section.id, lesson });
      }
    }
  }
  return lessons;
}

// Get placement unit based on experience and assessment score
export function getPlacementUnit(experience: ExperienceLevel, assessmentScore: number): string {
  const maxScore = ASSESSMENT_QUESTIONS.length;
  const scorePercent = assessmentScore / maxScore;
  
  if (experience === "competitive" && scorePercent >= 0.6) {
    return "unit-4";
  }
  if (experience === "some" || (experience === "competitive" && scorePercent < 0.6)) {
    return scorePercent >= 0.6 ? "unit-3" : "unit-2";
  }
  if (experience === "casual") {
    return scorePercent >= 0.8 ? "unit-2" : "unit-1";
  }
  return "unit-1";
}

// Exercise questions for each lesson
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
    lessonId: "l1-1-1",
    questions: [
      {
        id: "l1-1-1-q1",
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
        id: "l1-1-1-q2",
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
    lessonId: "l1-1-2",
    questions: [
      {
        id: "l1-1-2-q1",
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
        id: "l1-1-2-q2",
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
    lessonId: "l1-2-1",
    questions: [
      {
        id: "l1-2-1-q1",
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
        id: "l1-2-1-q2",
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
    lessonId: "l1-2-2",
    questions: [
      {
        id: "l1-2-2-q1",
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
        id: "l1-2-2-q2",
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
    lessonId: "l1-2-3",
    questions: [
      {
        id: "l1-2-3-q1",
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
        id: "l1-2-3-q2",
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
    lessonId: "l2-1-1",
    questions: [
      {
        id: "l2-1-1-q1",
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
        id: "l2-1-1-q2",
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
    lessonId: "l2-1-2",
    questions: [
      {
        id: "l2-1-2-q1",
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
        id: "l2-1-2-q2",
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
    lessonId: "l2-2-1",
    questions: [
      {
        id: "l2-2-1-q1",
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
        id: "l2-2-1-q2",
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
    lessonId: "l2-2-2",
    questions: [
      {
        id: "l2-2-2-q1",
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
        id: "l2-2-2-q2",
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
    lessonId: "l2-3-1",
    questions: [
      {
        id: "l2-3-1-q1",
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
        id: "l2-3-1-q2",
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
    lessonId: "l2-3-2",
    questions: [
      {
        id: "l2-3-2-q1",
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
        id: "l2-3-2-q2",
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
    lessonId: "l3-1-1",
    questions: [
      {
        id: "l3-1-1-q1",
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
        id: "l3-1-1-q2",
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
    lessonId: "l3-1-2",
    questions: [
      {
        id: "l3-1-2-q1",
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
        id: "l3-1-2-q2",
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
    lessonId: "l3-2-1",
    questions: [
      {
        id: "l3-2-1-q1",
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
        id: "l3-2-1-q2",
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
    lessonId: "l3-2-2",
    questions: [
      {
        id: "l3-2-2-q1",
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
        id: "l3-2-2-q2",
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
    lessonId: "l4-1-1",
    questions: [
      {
        id: "l4-1-1-q1",
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
        id: "l4-1-1-q2",
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
    lessonId: "l4-1-2",
    questions: [
      {
        id: "l4-1-2-q1",
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
        id: "l4-1-2-q2",
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
    lessonId: "l4-2-1",
    questions: [
      {
        id: "l4-2-1-q1",
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
        id: "l4-2-1-q2",
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
    lessonId: "l4-2-2",
    questions: [
      {
        id: "l4-2-2-q1",
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
        id: "l4-2-2-q2",
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
];

export function getLessonExercise(lessonId: string): LessonExercise | undefined {
  return LESSON_EXERCISES.find(e => e.lessonId === lessonId);
}
