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

// Multi-page lesson structure with inline questions
export interface LessonContentPage {
  type: "content";
  title: string;
  content: string;
  keyPoints?: string[];
}

export interface LessonQuestionPage {
  type: "question";
  id: string;
  question: string;
  options: Array<{ id: string; text: string }>;
  correctAnswer: string;
  explanation: string;
}

export type LessonPage = LessonContentPage | LessonQuestionPage;

export interface MultiPageLesson {
  lessonId: string;
  pages: LessonPage[];
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

// Multi-page lesson content with intro/explain/conclude format and inline questions
export const MULTI_PAGE_LESSONS: MultiPageLesson[] = [
  {
    lessonId: "l1-1-1",
    pages: [
      {
        type: "content",
        title: "Introduction: What is Debate?",
        content: "Welcome to your first lesson in the art of debate! Before we dive into techniques and strategies, let's build a solid foundation by understanding what debate actually is and why it matters.\n\nDebate is more than just arguing—it's a structured form of discourse where participants present and defend different positions on a topic. Think of it as intellectual sparring, where the goal isn't to 'win' through aggression, but to convince others through reason, evidence, and clear thinking.\n\nIn this lesson, you'll learn the fundamental nature of debate, how it differs from casual arguments, and the core skills it develops. By the end, you'll have a clear picture of what makes debate such a valuable skill for academics, careers, and everyday life.",
      },
      {
        type: "content",
        title: "Debate vs. Casual Arguments",
        content: "You've probably had plenty of arguments in your life—with friends, family, or even strangers on the internet. But formal debate is quite different from these everyday disagreements.\n\nIn a casual argument, people often:\n• Interrupt each other constantly\n• Let emotions drive the conversation\n• Make personal attacks instead of addressing ideas\n• Refuse to acknowledge valid points from the other side\n• 'Win' by being louder or more persistent\n\nIn formal debate, the approach is completely different:\n• Each speaker has designated time to present their case\n• Arguments must be backed by evidence and logic\n• Personal attacks are explicitly forbidden\n• Acknowledging good points from opponents is seen as intellectually honest\n• 'Winning' comes from presenting the more compelling case",
        keyPoints: [
          "Debate is structured and rule-based",
          "Logic and evidence matter more than emotion",
          "Personal attacks have no place in debate"
        ],
      },
      {
        type: "question",
        id: "l1-1-1-q1",
        question: "What distinguishes formal debate from a casual argument?",
        options: [
          { id: "a", text: "The person who speaks loudest wins" },
          { id: "b", text: "Each speaker has designated time and must use evidence" },
          { id: "c", text: "Personal attacks are encouraged to win" },
          { id: "d", text: "There are no rules to follow" },
        ],
        correctAnswer: "b",
        explanation: "Unlike casual arguments, formal debate provides structured speaking time for each participant and requires arguments to be supported by evidence and logical reasoning, not emotion or personal attacks.",
      },
      {
        type: "content",
        title: "The Core Purpose of Debate",
        content: "At its heart, debate serves a crucial purpose: it helps us discover truth and make better decisions. When two sides vigorously argue opposing positions, the strengths and weaknesses of each position become clear.\n\nThis is why debates are used in:\n• Legal courts (prosecution vs. defense)\n• Legislative bodies (debating proposed laws)\n• Academic settings (exploring complex topics)\n• Business meetings (evaluating different strategies)\n\nThe adversarial nature of debate isn't about conflict—it's about stress-testing ideas. When you have to defend a position against someone actively trying to find flaws in it, you're forced to think more deeply and build stronger arguments.\n\nInterestingly, many debaters report that arguing for positions they personally disagree with makes them better thinkers. It forces them to understand opposing viewpoints genuinely, not just dismiss them.",
      },
      {
        type: "content",
        title: "Skills Developed Through Debate",
        content: "Debate is often called 'the ultimate liberal art' because it develops such a wide range of valuable skills. Let's examine the key abilities you'll build:\n\n**Critical Thinking**\nYou'll learn to analyze arguments, identify logical fallacies, and evaluate evidence quality. These skills help in everything from reading news articles to making major life decisions.\n\n**Research Skills**\nDebaters become expert researchers, learning to find credible sources quickly, understand complex topics, and organize information effectively.\n\n**Public Speaking**\nFew activities build speaking confidence like debate. You'll learn to organize your thoughts clearly, speak persuasively, and handle pressure.\n\n**Listening Skills**\nTo respond effectively to opponents, you must listen carefully and take accurate notes. Active listening is one of the most underrated life skills.\n\n**Quick Thinking**\nDebate trains you to think on your feet, respond to unexpected arguments, and adapt your strategy in real-time.",
        keyPoints: [
          "Critical thinking: analyze arguments and spot fallacies",
          "Research: find and organize quality information",
          "Public speaking: organize thoughts and speak clearly under pressure",
          "Active listening: truly hear and process what others say",
          "Adaptability: think quickly and adjust strategies",
        ],
      },
      {
        type: "question",
        id: "l1-1-1-q2",
        question: "Which skill does debate NOT primarily develop?",
        options: [
          { id: "a", text: "Critical thinking and logical analysis" },
          { id: "b", text: "Memorizing large amounts of facts" },
          { id: "c", text: "Research and information gathering" },
          { id: "d", text: "Public speaking and clear communication" },
        ],
        correctAnswer: "b",
        explanation: "While knowledge is helpful, debate primarily develops critical thinking, research, speaking, and listening skills—not pure memorization. Understanding concepts and applying them matters more than memorizing facts.",
      },
      {
        type: "content",
        title: "The Structure of Debate",
        content: "Every formal debate follows a predictable structure, though specifics vary by format. Understanding this structure helps you see how debates unfold.\n\n**Resolution/Topic**\nEvery debate centers on a specific statement (the 'resolution') that one side supports and the other opposes. For example: 'Social media does more harm than good.'\n\n**Affirmative & Negative**\nThe side supporting the resolution is called the 'Affirmative' (or 'Pro'). The side opposing it is the 'Negative' (or 'Con'). In tournaments, you'll often debate both sides of the same topic.\n\n**Speeches**\nDebates consist of multiple speeches with set time limits. Typically:\n• Opening/Constructive speeches: Present your main arguments\n• Rebuttal speeches: Respond to opponent's arguments\n• Summary/Closing speeches: Tie everything together\n\n**Cross-Examination**\nMany formats include 'cross-ex' periods where debaters can ask each other questions. This is used to clarify positions and expose weaknesses.",
      },
      {
        type: "question",
        id: "l1-1-1-q3",
        question: "In a debate about 'Voting should be mandatory,' which side would the Affirmative take?",
        options: [
          { id: "a", text: "Against mandatory voting" },
          { id: "b", text: "In favor of mandatory voting" },
          { id: "c", text: "Neutral on the topic" },
          { id: "d", text: "It depends on the debater's personal opinion" },
        ],
        correctAnswer: "b",
        explanation: "The Affirmative side always supports the resolution as stated. Since the resolution says 'Voting should be mandatory,' the Affirmative argues in favor of making voting mandatory.",
      },
      {
        type: "content",
        title: "Why Debate Matters in the Real World",
        content: "You might wonder: 'When will I ever use debate skills?' The answer is: constantly.\n\n**In Your Career**\nEvery job interview is a mini-debate where you argue why you're the best candidate. Meetings involve persuading colleagues. Negotiations require understanding the other side while advocating for your position.\n\n**In Academics**\nWriting essays, defending theses, participating in class discussions—all involve the same skills you develop in debate. Students who debate typically see significant improvements in their grades and test scores.\n\n**As a Citizen**\nDemocracy depends on informed citizens who can evaluate political arguments, identify misinformation, and articulate their views. Debate makes you a more thoughtful voter and civic participant.\n\n**In Relationships**\nEven personal relationships benefit. Learning to disagree respectfully, listen actively, and express yourself clearly leads to better communication with friends, family, and partners.\n\nStudies show that students who participate in debate earn higher grades, score better on standardized tests, and report greater confidence in their communication abilities.",
        keyPoints: [
          "Career: interviews, meetings, and negotiations",
          "Academics: better essays, discussions, and grades",
          "Citizenship: evaluate arguments and participate in democracy",
          "Relationships: communicate clearly and disagree respectfully",
        ],
      },
      {
        type: "content",
        title: "Common Misconceptions About Debate",
        content: "Before we conclude, let's address some common misconceptions that prevent people from trying debate:\n\n**'You need to be naturally argumentative'**\nActually, the best debaters are often calm, thoughtful people. Being 'argumentative' in the aggressive sense can hurt you. Debate rewards careful analysis, not combativeness.\n\n**'You have to believe in your position'**\nNot at all! Many debaters are assigned positions randomly. The ability to argue for ideas you might not personally hold is actually one of debate's greatest benefits—it teaches you to truly understand other perspectives.\n\n**'It's all about winning'**\nWhile competition can be fun, most debaters value the learning process more than trophies. Losing a debate often teaches you more than winning one.\n\n**'You need to be an expert on everything'**\nDebaters learn as they go. Each new topic is an opportunity to research and understand a new area. You don't need prior expertise—just curiosity and willingness to learn.",
      },
      {
        type: "question",
        id: "l1-1-1-q4",
        question: "What is a common misconception about debate?",
        options: [
          { id: "a", text: "Debate develops critical thinking skills" },
          { id: "b", text: "You must personally believe in the position you're arguing" },
          { id: "c", text: "Debate follows structured rules" },
          { id: "d", text: "Evidence and logic are important" },
        ],
        correctAnswer: "b",
        explanation: "It's a misconception that you must believe in your position. Debaters are often assigned sides randomly, and arguing for positions you disagree with actually helps you understand different perspectives better.",
      },
      {
        type: "content",
        title: "Conclusion: Your Debate Journey Begins",
        content: "Congratulations! You've completed your first lesson and now understand the foundations of debate.\n\nLet's recap what you've learned:\n• Debate is structured discourse focused on logic and evidence, not emotional arguments or personal attacks\n• It develops critical thinking, research, speaking, listening, and quick thinking skills\n• Debates follow a clear structure with resolutions, affirmative/negative sides, speeches, and often cross-examination\n• These skills transfer directly to careers, academics, citizenship, and personal relationships\n• You don't need to be naturally argumentative or an expert to succeed—just curious and willing to learn\n\n**Looking Ahead**\nIn the next lesson, we'll explore the major debate formats: Lincoln-Douglas, Public Forum, Policy, and Parliamentary. You'll learn the unique features of each and discover which might be the best fit for your interests and goals.\n\nRemember: every master debater started exactly where you are now. The skills you build through debate will serve you for a lifetime.\n\n**Practice Thought**\nThink of a topic you feel strongly about. Can you identify one solid argument for the opposing side? This exercise in perspective-taking is at the heart of debate.",
        keyPoints: [
          "Debate is structured, logical discourse",
          "It develops skills valuable for life",
          "The journey starts with curiosity, not expertise",
        ],
      },
    ],
  },
  {
    lessonId: "l1-1-2",
    pages: [
      {
        type: "content",
        title: "Introduction: The World of Debate Formats",
        content: "Now that you understand what debate is, let's explore the different ways it's practiced. Just as there are many genres of music or styles of cooking, there are several distinct debate formats—each with its own rules, focus, and flavor.\n\nUnderstanding these formats is important because:\n• Different formats emphasize different skills\n• Tournaments typically use specific formats\n• Your personality and interests may align better with certain styles\n• Many of the skills transfer between formats\n\nIn this lesson, we'll cover the four major debate formats used in academic competition: Lincoln-Douglas, Public Forum, Policy Debate, and Parliamentary. By the end, you'll have a clear picture of each format and can start thinking about which might interest you most.",
      },
      {
        type: "content",
        title: "Lincoln-Douglas Debate: Values in Focus",
        content: "Lincoln-Douglas (LD) debate is named after the famous 1858 debates between Abraham Lincoln and Stephen Douglas over slavery and democracy. True to its namesake, LD focuses on profound philosophical and ethical questions.\n\n**Key Characteristics:**\n• One-on-one format: Just you against one opponent\n• Value-based: Centers on philosophical principles rather than specific policies\n• Shorter prep: Topics change every two months\n• Individual accountability: No partner to rely on\n\n**Typical LD Topics:**\n• 'Justice requires the recognition of animal rights'\n• 'Civil disobedience in a democracy is morally justified'\n• 'Privacy is more valuable than security'\n\n**Speech Structure:**\n• Affirmative Constructive: 6 minutes\n• Negative Cross-Examination: 3 minutes\n• Negative Constructive: 7 minutes\n• Affirmative Cross-Examination: 3 minutes\n• First Affirmative Rebuttal: 4 minutes\n• Negative Rebuttal: 6 minutes\n• Second Affirmative Rebuttal: 3 minutes\n\n**Who Thrives in LD?**\nPhilosophy lovers, independent thinkers, and those who enjoy ethical dilemmas. If you love debating the 'big questions' of right and wrong, LD might be your home.",
        keyPoints: [
          "One-on-one format with no partner",
          "Focus on values and philosophy, not policies",
          "Topics change every two months",
          "Great for philosophical thinkers",
        ],
      },
      {
        type: "question",
        id: "l1-1-2-q1",
        question: "What is the primary focus of Lincoln-Douglas debate?",
        options: [
          { id: "a", text: "Specific government policies and legislation" },
          { id: "b", text: "Philosophical values and ethical principles" },
          { id: "c", text: "Current events and news topics" },
          { id: "d", text: "Team coordination and strategy" },
        ],
        correctAnswer: "b",
        explanation: "Lincoln-Douglas debate centers on philosophical values and ethical principles. Topics ask about abstract concepts like justice, rights, and moral obligations, rather than specific policies.",
      },
      {
        type: "content",
        title: "Public Forum Debate: Accessible and Current",
        content: "Public Forum (PF) was created in 2002 to make debate more accessible to both participants and audiences. If LD is philosophical, PF is journalistic—focusing on current events that everyday people care about.\n\n**Key Characteristics:**\n• Team format: You and a partner work together\n• Current events: Topics relate to real-world issues in the news\n• Audience-friendly: Designed for lay (non-expert) judges to understand\n• New topics: Changes monthly, keeping debate fresh\n\n**Typical PF Topics:**\n• 'The United States should substantially reduce its military presence in the Middle East'\n• 'The benefits of the European Union outweigh the costs for member states'\n• 'Standardized testing improves educational outcomes'\n\n**Speech Structure:**\n• Each team has a 'First Speaker' and 'Second Speaker'\n• Short, punchy speeches (4 minutes constructive, 2 minute rebuttals, 2 minute summary, 2 minute final focus)\n• Crossfire periods allow both sides to question each other simultaneously\n\n**Who Thrives in PF?**\nThose who love current events, work well with a partner, and prefer arguments accessible to general audiences. PF emphasizes clarity over technical jargon.",
        keyPoints: [
          "Team format with a partner",
          "Current events focus—topics change monthly",
          "Designed for non-expert audiences",
          "Great for news junkies and team players",
        ],
      },
      {
        type: "question",
        id: "l1-1-2-q2",
        question: "How often do topics typically change in Public Forum debate?",
        options: [
          { id: "a", text: "Once per year" },
          { id: "b", text: "Every two months" },
          { id: "c", text: "Monthly" },
          { id: "d", text: "Topics never change" },
        ],
        correctAnswer: "c",
        explanation: "Public Forum topics change monthly, keeping the debate focused on current, relevant issues. This rapid turnover means debaters stay engaged with recent news and developments.",
      },
      {
        type: "content",
        title: "Policy Debate: Deep Research, High Stakes",
        content: "Policy Debate (also called 'CX' for cross-examination) is the oldest and most research-intensive form of competitive debate. It's known for its depth, complexity, and fast speaking speeds.\n\n**Key Characteristics:**\n• Team format: Two-person teams\n• Year-long topic: One resolution for the entire school year\n• Policy focus: Topics ask what the government 'should do'\n• Evidence-heavy: Debaters often read from prepared briefs with extensive citations\n• Technical: Highly specialized vocabulary and strategies\n\n**Example Topic:**\n'The United States federal government should substantially increase its protection of water resources in the United States.'\n\nThis single topic is debated for an entire year, allowing for incredibly deep research.\n\n**Speech Structure:**\n• Eight total speeches (four per team)\n• Longer time limits: 8-minute constructives, 5-minute rebuttals\n• Four cross-examination periods\n\n**The Speed Factor:**\nPolicy debate is famous for 'spreading'—speaking extremely fast to fit more arguments into limited time. Top debaters can speak 300+ words per minute. This is controversial but common in competitive circuits.\n\n**Who Thrives in Policy?**\nResearch lovers, those who enjoy complexity, and debaters who want to master every angle of a topic. If you love diving deep rather than wide, Policy might be for you.",
        keyPoints: [
          "Two-person teams with year-long topics",
          "Extremely research-intensive",
          "Focuses on government policy changes",
          "Known for fast speaking and technical strategies",
        ],
      },
      {
        type: "content",
        title: "Parliamentary Debate: Think on Your Feet",
        content: "Parliamentary Debate (Parli) is the format that most emphasizes quick thinking and adaptability. Unlike other formats, you often don't know your topic until minutes before the round.\n\n**Key Characteristics:**\n• Team format: Usually two-person teams (some circuits use three)\n• Limited prep: Topics announced 15-20 minutes before the round\n• Broad knowledge: Topics can be about anything\n• No evidence reading: Arguments rely on general knowledge and logic\n• Points of Order: Interactive elements allow challenges during speeches\n\n**The Prep Experience:**\nImagine being handed a topic like 'This House believes that space exploration is more valuable than ocean exploration' and having just 15 minutes to prepare your entire case—with your partner, with no internet, and no notes from past rounds. That's Parli.\n\n**Topic Variety:**\nParli topics range from serious ('This House would prioritize climate change over economic growth') to quirky ('This House believes that superheroes do more harm than good').\n\n**Speech Structure:**\n• Varies by circuit but typically shorter than Policy\n• 'Points of Information' allow you to interject brief challenges during opponent speeches\n• Often uses Parliamentary terminology (calling teams 'Government' and 'Opposition')\n\n**Who Thrives in Parli?**\nQuick thinkers, generalists who know a little about many topics, and those who enjoy spontaneity. If you hate extensive preparation and love thinking on your feet, Parli is your format.",
        keyPoints: [
          "Very limited preparation time (15-20 minutes)",
          "Topics can cover any subject",
          "No reading evidence—pure argumentation",
          "Perfect for quick thinkers who hate prep work",
        ],
      },
      {
        type: "question",
        id: "l1-1-2-q3",
        question: "Which debate format emphasizes quick thinking with minimal preparation time?",
        options: [
          { id: "a", text: "Lincoln-Douglas" },
          { id: "b", text: "Policy Debate" },
          { id: "c", text: "Parliamentary" },
          { id: "d", text: "Public Forum" },
        ],
        correctAnswer: "c",
        explanation: "Parliamentary debate gives debaters only 15-20 minutes to prepare after receiving their topic, making it the format that most emphasizes quick thinking and adaptability.",
      },
      {
        type: "content",
        title: "Comparing the Formats",
        content: "Let's put all four formats side by side so you can compare:\n\n**Lincoln-Douglas (LD)**\n• Team Size: 1 (solo)\n• Topic Duration: Every 2 months\n• Focus: Values and philosophy\n• Preparation Level: Moderate\n• Best For: Philosophers, independent thinkers\n\n**Public Forum (PF)**\n• Team Size: 2\n• Topic Duration: Monthly\n• Focus: Current events\n• Preparation Level: Moderate\n• Best For: News lovers, team players\n\n**Policy (CX)**\n• Team Size: 2\n• Topic Duration: Full year\n• Focus: Government policy\n• Preparation Level: Extremely high\n• Best For: Research enthusiasts, detail-oriented debaters\n\n**Parliamentary (Parli)**\n• Team Size: 2-3\n• Topic Duration: Each round (15-20 min prep)\n• Focus: Anything\n• Preparation Level: Minimal\n• Best For: Quick thinkers, generalists\n\n**Skill Transfer:**\nThe good news? Skills developed in any format transfer to others. A Policy debater moving to PF brings excellent research skills. A Parli debater brings adaptability. Many competitive debaters try multiple formats throughout their careers.",
      },
      {
        type: "question",
        id: "l1-1-2-q4",
        question: "Which format uses the same topic for an entire school year?",
        options: [
          { id: "a", text: "Lincoln-Douglas" },
          { id: "b", text: "Policy Debate" },
          { id: "c", text: "Parliamentary" },
          { id: "d", text: "Public Forum" },
        ],
        correctAnswer: "b",
        explanation: "Policy Debate uses a single resolution for the entire school year, allowing debaters to research one topic in extraordinary depth. This is why Policy is known as the most research-intensive format.",
      },
      {
        type: "content",
        title: "How to Choose Your Format",
        content: "With four distinct options, how do you choose? Here are some questions to ask yourself:\n\n**Do you prefer working alone or with a partner?**\n• Alone: Lincoln-Douglas is your only solo option\n• Partner: PF, Policy, or Parli all offer team formats\n\n**How do you feel about extensive preparation?**\n• Love deep research: Policy\n• Enjoy moderate prep: LD or PF\n• Prefer minimal prep: Parliamentary\n\n**What topics interest you?**\n• Philosophy and ethics: Lincoln-Douglas\n• Current events: Public Forum\n• Government policy: Policy\n• Everything/anything: Parliamentary\n\n**What's available near you?**\nNot every school or tournament offers every format. Check what's available in your area before falling in love with a specific format.\n\n**The Best Advice:**\nTry multiple formats if you can! Many debaters start in one format and switch when they discover what truly fits their style. There's no wrong choice—each format builds valuable skills.",
        keyPoints: [
          "Consider solo vs. team preferences",
          "Match preparation style to format",
          "Think about topic interests",
          "Check local availability",
          "Don't be afraid to try multiple formats",
        ],
      },
      {
        type: "content",
        title: "Conclusion: Finding Your Debate Home",
        content: "You now have a roadmap of the debate landscape! Let's summarize what you've learned:\n\n**Lincoln-Douglas:** Solo, philosophical debate with bi-monthly topics. Perfect for independent thinkers who love ethical questions.\n\n**Public Forum:** Team-based current events debate with monthly topics. Ideal for news followers who want accessible, real-world discussions.\n\n**Policy Debate:** Team format with year-long topics and intensive research. Built for those who love diving deep into complex issues.\n\n**Parliamentary:** Team debate with minimal prep time. Made for quick thinkers who thrive on spontaneity.\n\nNo matter which format you choose, remember that the core skills—critical thinking, clear communication, research, and active listening—will serve you in every area of life.\n\n**Looking Ahead:**\nIn our next lesson, we'll dive into one of the most important concepts in debate: how to build a strong argument. You'll learn the Claim-Warrant-Impact framework that forms the foundation of persuasive argumentation.\n\n**Quick Action:**\nIf you have access to debate videos online, try watching a few minutes of each format. Seeing them in action often helps clarify which style appeals to you most.",
        keyPoints: [
          "Four major formats: LD, PF, Policy, Parli",
          "Each emphasizes different skills and interests",
          "Core debate skills transfer between formats",
        ],
      },
    ],
  },
  {
    lessonId: "l1-2-1",
    pages: [
      {
        type: "content",
        title: "Introduction: The Building Blocks of Arguments",
        content: "In our previous lessons, you learned what debate is and explored different formats. Now it's time to learn the most fundamental skill in debate: how to construct a strong argument.\n\nThink of arguments like buildings. A poorly constructed building might look impressive from the outside, but it collapses under stress. A well-built argument, like a solid structure, can withstand challenges from every direction.\n\nThe framework we'll learn today is called Claim-Warrant-Impact, or CWI. This simple three-part structure is the foundation of virtually every debate argument, from casual conversations to Supreme Court cases. Once you master CWI, you'll see arguments everywhere—and you'll notice when they're missing critical components.\n\nBy the end of this lesson, you'll be able to construct complete arguments and identify weaknesses in others' arguments.",
      },
      {
        type: "content",
        title: "The Claim: Your Core Assertion",
        content: "Every argument begins with a CLAIM—the central assertion you're trying to prove. The claim is what you believe to be true and want others to accept.\n\n**Characteristics of a Good Claim:**\n• Clear and specific: No ambiguity about what you're arguing\n• Debatable: Reasonable people could disagree\n• Relevant: Connected to the broader debate topic\n\n**Examples of Claims:**\n• 'Social media usage increases anxiety in teenagers'\n• 'Raising the minimum wage reduces poverty'\n• 'Space exploration benefits humanity more than ocean exploration'\n\n**What Makes a Bad Claim?**\n• Too vague: 'Social media is bad' (bad how? for whom?)\n• Not debatable: 'Water is wet' (no one will argue otherwise)\n• Irrelevant: 'Pizza is delicious' (in a debate about education policy)\n\n**Common Mistake:**\nMany beginning debaters state claims without realizing they need more. A claim alone is just an opinion. 'I think social media is harmful' is a starting point, not a complete argument. What makes it harmful? Who is harmed? Why should we care? The answers to these questions come from the next two components.",
        keyPoints: [
          "A claim is your core assertion",
          "Good claims are clear, debatable, and relevant",
          "A claim alone is just an opinion—it needs support",
        ],
      },
      {
        type: "question",
        id: "l1-2-1-q1",
        question: "Which of these is the best example of a clear, debatable claim?",
        options: [
          { id: "a", text: "Things should be better" },
          { id: "b", text: "Mandatory voting increases civic engagement by 15%" },
          { id: "c", text: "The sky is blue" },
          { id: "d", text: "Some policies have effects" },
        ],
        correctAnswer: "b",
        explanation: "'Mandatory voting increases civic engagement by 15%' is specific, debatable (some might argue it doesn't help real engagement), and measurable. The other options are either too vague, not debatable, or meaningless.",
      },
      {
        type: "content",
        title: "The Warrant: Your Evidence and Reasoning",
        content: "The WARRANT is where you provide the evidence, logic, or reasoning that supports your claim. If the claim is 'what' you believe, the warrant is 'why' we should believe it.\n\n**Types of Warrants:**\n\n1. **Empirical Evidence**\n   Facts, statistics, and research studies\n   Example: 'A 2023 study by Harvard researchers found that teenagers who use social media more than 3 hours daily show 40% higher rates of anxiety symptoms.'\n\n2. **Logical Reasoning**\n   Step-by-step logic showing why the claim must be true\n   Example: 'If minimum wage workers earn more, they have more spending power. More spending stimulates local economies. Therefore, raising minimum wage can boost economic growth.'\n\n3. **Expert Testimony**\n   Statements from credible authorities in the field\n   Example: 'According to Dr. Jean Twenge, a psychology professor who has studied generational trends for 25 years, the correlation between smartphone use and depression is significant.'\n\n4. **Historical Examples**\n   Past events that demonstrate a pattern\n   Example: 'When Australia implemented mandatory voting in 1924, voter turnout increased from 47% to over 90% and has remained there since.'\n\n**The Key Question:**\nAlways ask yourself: 'Does my warrant actually support my specific claim?' Having evidence isn't enough—it must connect logically to what you're trying to prove.",
        keyPoints: [
          "Warrants provide the 'why' behind your claim",
          "Types: evidence, logic, expert opinion, historical examples",
          "The warrant must directly connect to your claim",
        ],
      },
      {
        type: "content",
        title: "Evaluating Warrant Quality",
        content: "Not all warrants are created equal. Strong warrants make your argument nearly unassailable; weak warrants invite attack. Here's how to evaluate warrant quality:\n\n**For Evidence:**\n• Is the source credible? (Peer-reviewed journals > random websites)\n• Is it recent? (2023 study > 1990 study, usually)\n• Is the sample size adequate? (10,000 participants > 12 participants)\n• Is there bias? (Independent research > company-funded research)\n\n**For Logical Reasoning:**\n• Does each step follow from the previous one?\n• Are there hidden assumptions that might be wrong?\n• Could the logic apply to absurd conclusions? (If so, something's off)\n\n**For Expert Testimony:**\n• Is the expert actually an expert in this specific field?\n• Do other experts agree, or is this an outlier opinion?\n• Does the expert have any conflicts of interest?\n\n**Common Warrant Weaknesses:**\n• Cherry-picking: Selecting only evidence that supports your view\n• Outdated sources: The world changes; old evidence may not apply\n• Correlation vs. causation: Just because two things happen together doesn't mean one causes the other\n• Overgeneralization: One example doesn't prove a universal rule",
        keyPoints: [
          "Evaluate source credibility and recency",
          "Check logical reasoning for hidden assumptions",
          "Verify expert credentials and consensus",
          "Watch for cherry-picking and false causation",
        ],
      },
      {
        type: "question",
        id: "l1-2-1-q2",
        question: "A debater says 'Studies show that coffee is healthy.' What makes this warrant weak?",
        options: [
          { id: "a", text: "It mentions coffee" },
          { id: "b", text: "It lacks specificity—no source, date, or methodology" },
          { id: "c", text: "Studies are never valid evidence" },
          { id: "d", text: "The word 'healthy' is used" },
        ],
        correctAnswer: "b",
        explanation: "Saying 'studies show' without specifying which studies, when they were conducted, by whom, or what they actually measured is a weak warrant. Specific citations make warrants much stronger.",
      },
      {
        type: "content",
        title: "The Impact: Why It Matters",
        content: "The IMPACT answers the crucial question: 'So what?' Even if your claim is true and well-supported, why should anyone care? The impact explains the consequences and significance.\n\n**Components of Strong Impacts:**\n\n1. **Magnitude**\n   How big is the effect? Does it affect millions of people or just a few?\n   'Affects 40 million American workers' > 'Affects some people'\n\n2. **Timeframe**\n   When do these effects occur? Immediate harms often weigh more than distant ones.\n   'Will happen within 5 years' > 'Might eventually happen'\n\n3. **Probability**\n   How likely is the impact to occur?\n   '78% likely based on current trends' > 'Might possibly happen'\n\n4. **Reversibility**\n   Can the damage be undone? Irreversible harms are more serious.\n   'Extinction of a species' > 'Temporary economic downturn'\n\n**Example Impact Chain:**\nClaim: 'Social media increases teen anxiety'\nWarrant: 'Studies show 40% higher anxiety in heavy users'\nImpact: 'This matters because anxiety disorders are linked to lower academic achievement, which affects college admissions, career prospects, and lifetime earnings. With 70% of teens using social media heavily, we're looking at an entire generation facing reduced life outcomes.'",
        keyPoints: [
          "Impact answers 'so what?' and 'why should we care?'",
          "Consider magnitude, timeframe, probability, and reversibility",
          "Strong impacts connect to broad, significant consequences",
        ],
      },
      {
        type: "question",
        id: "l1-2-1-q3",
        question: "When evaluating two competing impacts, which factor would typically make one impact outweigh another?",
        options: [
          { id: "a", text: "The impact that sounds more dramatic" },
          { id: "b", text: "The impact that affects more people more severely" },
          { id: "c", text: "The impact mentioned first in the debate" },
          { id: "d", text: "The impact from the better speaker" },
        ],
        correctAnswer: "b",
        explanation: "Judges evaluate impacts based on their actual significance—magnitude (how many affected), severity (how badly), probability, and timeframe. The substance of the impact matters, not how it's presented or when it's mentioned.",
      },
      {
        type: "content",
        title: "Putting CWI Together: Complete Examples",
        content: "Let's see how Claim-Warrant-Impact works as a complete argument:\n\n**Example 1: Environmental Policy**\nCLAIM: Carbon taxes effectively reduce greenhouse gas emissions.\nWARRANT: British Columbia implemented a carbon tax in 2008 and saw emissions drop 15% by 2015 while their economy grew 18%, according to a Stanford study.\nIMPACT: If implemented nationally, similar reductions could prevent an estimated 2°F of warming, avoiding $3 trillion in climate-related damages and protecting coastal cities from flooding.\n\n**Example 2: Education**\nCLAIM: Smaller class sizes improve educational outcomes.\nWARRANT: The Tennessee STAR study tracked 11,600 students and found those in classes of 13-17 showed significantly higher achievement than those in classes of 22-25, with effects lasting through high school.\nIMPACT: Better educational outcomes translate to higher lifetime earnings—the study estimated $4,800 more per year per student—and reduced social costs from lower crime rates and better health.\n\n**Practice Noticing:**\nOnce you understand CWI, you'll start noticing it everywhere—in newspaper editorials, political speeches, even advertisements. You'll also notice when one component is missing, which weakens the argument.",
        keyPoints: [
          "Strong arguments have all three: Claim, Warrant, and Impact",
          "Each component builds on the previous",
          "Missing components create vulnerabilities",
        ],
      },
      {
        type: "content",
        title: "Common Mistakes in Building Arguments",
        content: "Now that you understand CWI, let's examine common mistakes so you can avoid them:\n\n**Mistake 1: All Claim, No Warrant**\n'Social media is terrible for society!' (But why? Based on what evidence?)\nFix: Always ask 'what's my evidence?' after stating a claim.\n\n**Mistake 2: Weak Warrant-to-Claim Connection**\n'Violent crime decreased 20% from 2000-2010, therefore video games don't cause violence.'\n(The warrant doesn't prove the claim—many factors affect crime rates)\nFix: Make sure your evidence directly proves your specific claim.\n\n**Mistake 3: No Impact**\n'Studies show students learn 15% more in morning classes.' (Okay, but... so what?)\nFix: Explain why your audience should care about this finding.\n\n**Mistake 4: Impact Without Foundation**\n'This will destroy the economy and ruin millions of lives!' (Based on what? How?)\nFix: Every scary impact needs to be connected back to warrants and claims.\n\n**Mistake 5: Assertion Stacking**\nMaking many claims without supporting any of them: 'This policy is expensive, ineffective, and harmful to minorities.' (Where's the evidence for each?)\nFix: Fully develop one strong argument rather than listing unsupported claims.",
        keyPoints: [
          "Every claim needs evidence",
          "Evidence must directly prove your specific claim",
          "Impacts need clear connections to warrants",
          "Quality over quantity—develop arguments fully",
        ],
      },
      {
        type: "question",
        id: "l1-2-1-q4",
        question: "A debater says: 'This policy will hurt poor people the most. Crime rates went up in 2019. Therefore, we should reject this proposal.' What's wrong with this argument?",
        options: [
          { id: "a", text: "It has too many claims" },
          { id: "b", text: "The warrant doesn't connect to the claim about poor people" },
          { id: "c", text: "It mentions crime rates" },
          { id: "d", text: "Nothing is wrong with this argument" },
        ],
        correctAnswer: "b",
        explanation: "There's no logical connection between 'crime rates went up in 2019' and 'this policy will hurt poor people.' The warrant doesn't support the claim—these are two unrelated statements. A proper warrant would explain HOW or WHY the policy harms poor people.",
      },
      {
        type: "content",
        title: "CWI in Different Contexts",
        content: "The Claim-Warrant-Impact framework isn't just for formal debate—it's how effective arguments work everywhere:\n\n**Job Interview:**\nClaim: 'I'm the best candidate for this position.'\nWarrant: 'I increased sales 40% at my previous company, led a team of 12, and have certifications in your key software systems.'\nImpact: 'I can hit the ground running and contribute to your growth targets immediately.'\n\n**Academic Essay:**\nClaim: 'Shakespeare's Hamlet explores the paralysis caused by overthinking.'\nWarrant: 'Throughout the play, Hamlet repeatedly delays action while delivering soliloquies analyzing his options—most famously in \"To be or not to be.\"'\nImpact: 'This theme resonates today, where information overload can lead to similar decision paralysis.'\n\n**Persuading Friends:**\nClaim: 'We should try that new Thai restaurant tonight.'\nWarrant: 'It got 4.8 stars on 500+ reviews, my coworker said it was the best Thai she'd ever had, and they have that noodle dish you mentioned wanting to try.'\nImpact: 'We're all craving something new, and this way everyone gets something they'll love.'\n\nMastering CWI doesn't just make you a better debater—it makes you more persuasive in every situation.",
        keyPoints: [
          "CWI applies to interviews, essays, and everyday persuasion",
          "Practice identifying CWI in real-world arguments",
          "The framework makes all communication more compelling",
        ],
      },
      {
        type: "content",
        title: "Conclusion: Building Unshakeable Arguments",
        content: "Congratulations! You've now mastered the most fundamental tool in any debater's toolkit: the Claim-Warrant-Impact framework.\n\n**Key Takeaways:**\n\n• **CLAIM** = Your assertion (what you believe is true)\n• **WARRANT** = Your evidence and reasoning (why we should believe it)\n• **IMPACT** = The significance (why it matters)\n\nA complete argument needs all three. Missing any component creates a vulnerability opponents can exploit.\n\n**Quality Matters:**\n• Claims should be clear, specific, and debatable\n• Warrants need credible sources and logical connections\n• Impacts should quantify significance when possible\n\n**Looking Ahead:**\nIn our next lesson, we'll explore the different types of arguments: definitional, factual, value, and policy. Understanding these categories will help you choose the right approach for any debate topic.\n\n**Practice Exercise:**\nTake any opinion you hold and try to build a complete CWI argument for it:\n1. Write your claim clearly\n2. Find at least one piece of evidence\n3. Explain why someone should care\n\nThis simple practice, repeated over time, will transform how you think and communicate.",
        keyPoints: [
          "C = Claim (what you believe)",
          "W = Warrant (why we should believe it)",
          "I = Impact (why it matters)",
          "All three are essential for complete arguments",
        ],
      },
    ],
  },
  {
    lessonId: "l1-2-2",
    pages: [
      {
        type: "content",
        title: "Introduction: The Four Argument Types",
        content: "Now that you've mastered the Claim-Warrant-Impact framework, it's time to learn about the different categories of arguments. Not all arguments are trying to do the same thing—some establish facts, others define terms, and still others evaluate what's good or propose what we should do.\n\nUnderstanding these four types will help you:\n• Choose the right approach for any debate topic\n• Identify what type of argument your opponent is making\n• Know what you need to prove to be convincing\n• Avoid mismatched arguments that talk past each other\n\nThe four types are: Definitional, Factual, Value, and Policy. Each has its own logic, standards of proof, and common applications. Let's explore each one in depth.",
      },
      {
        type: "content",
        title: "Definitional Arguments: What Does It Mean?",
        content: "Definitional arguments establish what terms mean. This might seem trivial, but definitions often determine who wins a debate—whoever controls the meaning of key terms controls the framework for evaluation.\n\n**Examples:**\n• 'Freedom means the absence of government restriction'\n• 'Violence includes psychological and emotional harm, not just physical'\n• 'Intelligence should be defined as the ability to adapt to new situations'\n\n**Why Definitions Matter:**\nConsider the topic: 'The government should protect human rights.' If we define 'human rights' to include healthcare, that's a very different debate than if we define it only as freedoms from government interference.\n\n**Common Contexts:**\n• Legal debates: What counts as 'assault'? What is 'fair use'?\n• Philosophy: What is 'justice'? What makes something 'art'?\n• Policy: Who qualifies as a 'refugee'? What is 'poverty'?\n\n**How to Build Definitional Arguments:**\n1. State your proposed definition clearly\n2. Explain WHY this definition is better (more useful, more accurate, more fair)\n3. Show how your definition affects the debate\n\n**Defense Strategies:**\n• Appeal to common usage: 'Most people understand X to mean...'\n• Appeal to authority: 'Legal scholars/dictionaries define X as...'\n• Appeal to function: 'Defining X this way leads to better outcomes because...'",
        keyPoints: [
          "Definitional arguments establish what terms mean",
          "Definitions can determine who wins",
          "Defend with usage, authority, or functional arguments",
        ],
      },
      {
        type: "question",
        id: "l1-2-2-q1",
        question: "'Justice means treating everyone equally regardless of outcome' is what type of argument?",
        options: [
          { id: "a", text: "Factual" },
          { id: "b", text: "Definitional" },
          { id: "c", text: "Value" },
          { id: "d", text: "Policy" },
        ],
        correctAnswer: "b",
        explanation: "This is a definitional argument because it establishes what 'justice' means. The statement isn't claiming a fact, evaluating something as good/bad, or proposing an action—it's defining a term.",
      },
      {
        type: "content",
        title: "Factual Arguments: What Is True?",
        content: "Factual arguments claim that something is or isn't true about the world. They assert facts that can theoretically be verified or falsified through evidence.\n\n**Examples:**\n• 'Climate change is caused by human activity'\n• 'Violent crime rates have decreased over the past 30 years'\n• 'This medication is effective at treating depression'\n\n**Key Characteristics:**\n• Objective: There's a right answer, even if we don't know it yet\n• Evidence-dependent: Must be supported by data, studies, or observations\n• Verifiable: Could theoretically be proven true or false\n\n**How to Build Factual Arguments:**\n1. State your factual claim specifically\n2. Provide strong evidence (studies, statistics, expert consensus)\n3. Explain why your evidence is credible\n4. Address potential counter-evidence\n\n**Common Challenges:**\n• Source credibility: 'That study was funded by the industry it evaluated'\n• Methodology: 'The sample size was too small to be meaningful'\n• Counter-evidence: 'But this other study found the opposite'\n• Correlation vs. causation: 'Just because A and B occur together doesn't mean A causes B'\n\n**Standard of Proof:**\nFactual claims are often held to high evidentiary standards. 'I think' or 'I believe' isn't enough—you need real evidence.",
        keyPoints: [
          "Factual arguments claim something is true or false",
          "Must be supported by verifiable evidence",
          "Can be challenged on methodology or counter-evidence",
        ],
      },
      {
        type: "content",
        title: "Value Arguments: Is It Good or Bad?",
        content: "Value arguments evaluate whether something is good, bad, right, wrong, just, unjust, or otherwise morally/ethically assessable. Unlike factual arguments, they involve normative judgments.\n\n**Examples:**\n• 'Democracy is the best form of government'\n• 'Capital punishment is morally wrong'\n• 'Privacy is more important than security'\n\n**Key Characteristics:**\n• Normative: Make judgments about right/wrong, good/bad\n• Values-dependent: Rely on ethical frameworks and principles\n• Often subjective: Reasonable people can disagree based on different values\n\n**How to Build Value Arguments:**\n1. Identify the relevant value criteria (freedom, equality, utility, etc.)\n2. Argue why your criteria are the right ones\n3. Show that your position better upholds those values\n4. Address competing values\n\n**Common Value Frameworks:**\n• Utilitarianism: What produces the most good for the most people?\n• Deontology: What rules or duties apply regardless of outcomes?\n• Rights-based: What fundamental rights are at stake?\n• Virtue ethics: What would a good person do?\n\n**Value Conflict:**\nMany debates pit values against each other: freedom vs. security, equality vs. liberty, individual rights vs. collective good. Winning often requires arguing why one value should take priority.",
        keyPoints: [
          "Value arguments judge good/bad, right/wrong",
          "Require explicit value criteria or frameworks",
          "Often involve weighing competing values",
        ],
      },
      {
        type: "question",
        id: "l1-2-2-q2",
        question: "'Capital punishment is morally wrong because it violates human dignity' is what type of argument?",
        options: [
          { id: "a", text: "Definitional" },
          { id: "b", text: "Factual" },
          { id: "c", text: "Value" },
          { id: "d", text: "Policy" },
        ],
        correctAnswer: "c",
        explanation: "This is a value argument because it makes an ethical judgment ('morally wrong') based on an evaluative criterion ('human dignity'). It's assessing whether something is right or wrong, not stating a fact or proposing an action.",
      },
      {
        type: "content",
        title: "Policy Arguments: What Should Be Done?",
        content: "Policy arguments propose that something should or shouldn't be done. They're the most action-oriented type, calling for specific changes to laws, rules, behaviors, or practices.\n\n**Examples:**\n• 'The federal government should implement universal healthcare'\n• 'Schools should require financial literacy courses'\n• 'Companies should be required to disclose their carbon emissions'\n\n**Key Characteristics:**\n• Action-oriented: Propose concrete changes\n• Solution-focused: Address a problem with a specific fix\n• Multiple requirements: Must prove there's a problem AND your solution works\n\n**Components of Policy Arguments (The 'Stock Issues'):**\n\n1. **Inherency**: Is there a current problem?\n   'The current system fails because...'\n\n2. **Harms**: How bad is this problem?\n   'This causes X deaths, costs $Y, creates Z suffering...'\n\n3. **Solvency**: Does your plan actually fix it?\n   'Our solution would reduce deaths by 50% because...'\n\n4. **Advantages**: What benefits result?\n   'Beyond solving the problem, our plan also creates...'\n\n5. **Disadvantages**: Are there downsides?\n   (You'll need to address these or opponents will raise them)\n\n**The Burden:**\nPolicy advocates bear a significant burden—they must prove the status quo is broken AND their alternative is better.",
        keyPoints: [
          "Policy arguments propose specific actions",
          "Must prove both problem and solution",
          "Include inherency, harms, solvency, and advantages",
        ],
      },
      {
        type: "question",
        id: "l1-2-2-q3",
        question: "'The city should invest $50 million in public transportation to reduce traffic congestion' is what type of argument?",
        options: [
          { id: "a", text: "Definitional" },
          { id: "b", text: "Factual" },
          { id: "c", text: "Value" },
          { id: "d", text: "Policy" },
        ],
        correctAnswer: "d",
        explanation: "This is a policy argument because it proposes a specific action ('invest $50 million in public transportation') to achieve a particular goal ('reduce traffic congestion'). Policy arguments always propose what should be done.",
      },
      {
        type: "content",
        title: "How the Types Interact",
        content: "In real debates, these argument types don't exist in isolation—they build on each other:\n\n**Policy arguments often require all other types:**\nTo argue 'We should ban plastic bags' (policy), you might need:\n• 'Harmful pollution includes microplastics in water' (definitional)\n• 'Plastic bags take 500 years to decompose and kill marine life' (factual)\n• 'Environmental protection should be prioritized over convenience' (value)\n\n**Value arguments often depend on facts:**\n'Democracy is the best form of government' (value) requires factual support about how democracies actually perform compared to alternatives.\n\n**Definitional arguments shape everything else:**\nHow you define 'best' in the above value argument determines what evidence counts. If 'best' means 'most stable,' you need different facts than if 'best' means 'most protective of individual rights.'\n\n**The Cascade Effect:**\nWin a definitional argument, and you might win the whole debate. If you successfully argue that 'violence includes economic deprivation,' suddenly arguments about poverty become arguments about violence.\n\nRecognizing how these types interact helps you understand the structure of complex debates and identify where to focus your attack.",
        keyPoints: [
          "All four types often appear in the same debate",
          "Policy arguments build on factual and value claims",
          "Definitional victories can cascade through the debate",
        ],
      },
      {
        type: "content",
        title: "Identifying Argument Types",
        content: "A crucial skill is quickly identifying what type of argument you're hearing. Here's a practical guide:\n\n**Look for Signal Words:**\n\nDefinitional:\n• 'X means...' / 'X is defined as...'\n• 'The term X refers to...'\n• 'We should understand X as...'\n\nFactual:\n• 'Studies show...' / 'Research indicates...'\n• 'The data proves...' / 'Statistics demonstrate...'\n• 'In fact...' / 'The reality is...'\n\nValue:\n• 'X is good/bad/right/wrong'\n• 'We should value...' / 'X is more important than Y'\n• 'It's ethical/moral/just to...'\n\nPolicy:\n• 'We should...' / 'The government ought to...'\n• 'X should be implemented/banned/required'\n• 'I propose that...' / 'My plan is...'\n\n**The Quick Test:**\nAsk yourself what the argument is trying to establish:\n• Meaning of a term → Definitional\n• Something true/false → Factual\n• Something good/bad → Value\n• Something we should do → Policy",
        keyPoints: [
          "Signal words help identify argument types",
          "Ask: What is this argument trying to establish?",
          "Quick identification helps you respond appropriately",
        ],
      },
      {
        type: "question",
        id: "l1-2-2-q4",
        question: "Which signal phrase most likely indicates a factual argument?",
        options: [
          { id: "a", text: "'We should implement...'" },
          { id: "b", text: "'Research demonstrates that...'" },
          { id: "c", text: "'The right thing to do is...'" },
          { id: "d", text: "'By democracy, I mean...'" },
        ],
        correctAnswer: "b",
        explanation: "'Research demonstrates that...' signals a factual argument because it's claiming something is objectively true based on evidence. The other phrases indicate policy ('should implement'), value ('right thing'), and definitional ('by X, I mean') arguments.",
      },
      {
        type: "content",
        title: "Strategic Use of Argument Types",
        content: "Different debate topics and situations call for different argument type emphases:\n\n**Lincoln-Douglas (Value Debate):**\nValue arguments dominate. Success requires establishing a clear value framework and showing your side better upholds that value. Definitional arguments about key terms are also crucial.\n\n**Public Forum (Current Events):**\nMix of factual and policy arguments. You'll cite recent studies and statistics while arguing what should be done about contemporary issues.\n\n**Policy Debate:**\nPolicy arguments are central, but you'll need all types. Factual evidence about problems, value-based impacts, and sometimes definitional disputes all appear.\n\n**Parliamentary:**\nQuick thinking across all types. Without deep research, you'll often rely more on value and definitional arguments supported by general knowledge.\n\n**Matching Type to Topic:**\n'Resolved: Privacy is more important than security' → Primarily VALUE\n'Resolved: Social media causes depression' → Primarily FACTUAL\n'Resolved: The US should adopt universal healthcare' → Primarily POLICY\n'Resolved: Terrorism should be defined to include state actions' → Primarily DEFINITIONAL",
        keyPoints: [
          "Different debate formats emphasize different types",
          "Match your argument type to the resolution's demands",
          "Most debates require multiple argument types",
        ],
      },
      {
        type: "content",
        title: "Conclusion: Your Argument Type Toolkit",
        content: "You now have a complete taxonomy for understanding and constructing arguments!\n\n**The Four Types:**\n\n1. **Definitional**: Establishes what terms mean\n   - Signal: 'X means...' 'X is defined as...'\n   - Proves: The correct interpretation of key concepts\n\n2. **Factual**: Claims something is true or false\n   - Signal: 'Studies show...' 'The data proves...'\n   - Proves: Verifiable facts about the world\n\n3. **Value**: Evaluates good/bad, right/wrong\n   - Signal: 'X is moral...' 'We should value...'\n   - Proves: Normative judgments based on ethical frameworks\n\n4. **Policy**: Proposes what should be done\n   - Signal: 'We should...' 'The government ought to...'\n   - Proves: A course of action is beneficial\n\n**Looking Ahead:**\nIn our next lesson, we'll explore the concept of 'burden of proof'—understanding who needs to prove what in a debate and how this affects your strategy.\n\n**Practice Exercise:**\nRead a newspaper editorial and identify each argument type the author uses. Notice how they often layer together to build a complete case.",
        keyPoints: [
          "Four types: Definitional, Factual, Value, Policy",
          "Each has distinct signals and proof requirements",
          "Strong debaters use all types strategically",
        ],
      },
    ],
  },
];

export function getMultiPageLesson(lessonId: string): MultiPageLesson | undefined {
  return MULTI_PAGE_LESSONS.find(l => l.lessonId === lessonId);
}
