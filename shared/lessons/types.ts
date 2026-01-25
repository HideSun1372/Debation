// Shared types for multi-page lessons

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

// Practice page types for interactive AI-powered exercises
export type PracticeType = 
  | "argument-builder"      // Build Claim-Evidence-Reasoning arguments
  | "refutation"            // Refute an AI argument using 4 S's or direct attack
  | "claim-classifier"      // Identify claim types (fact, value, policy)
  | "evidence-defense"      // Present/defend evidence against AI challenges
  | "fallacy-spotter"       // Identify logical fallacies in AI arguments
  | "warrant-builder";      // Build and defend warrants

export interface PracticeConfig {
  type: PracticeType;
  topic?: string;           // Optional debate topic for context
  targetSkill: string;      // Skill being practiced (for feedback focus)
  instructions: string;     // What the student should do
  exampleResponse?: string; // Optional example of a good response
  successCriteria: string[]; // What makes a good response
}

export interface LessonPracticePage {
  type: "practice";
  id: string;
  title: string;
  description: string;
  practice: PracticeConfig;
}

// Difficulty levels for AI opponent scaling
export type DifficultyLevel = "beginner" | "intermediate" | "advanced" | "expert";

export function getDifficultyFromXp(learnXp: number): DifficultyLevel {
  if (learnXp >= 2000) return "expert";
  if (learnXp >= 1000) return "advanced";
  if (learnXp >= 400) return "intermediate";
  return "beginner";
}

export function getDifficultyFromLevel(learnLevel: number): DifficultyLevel {
  if (learnLevel >= 8) return "expert";
  if (learnLevel >= 5) return "advanced";
  if (learnLevel >= 3) return "intermediate";
  return "beginner";
}

export type LessonPage = LessonContentPage | LessonQuestionPage | LessonPracticePage;

export interface MultiPageLesson {
  lessonId: string;
  pages: LessonPage[];
}
