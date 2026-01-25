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

export type LessonPage = LessonContentPage | LessonQuestionPage;

export interface MultiPageLesson {
  lessonId: string;
  pages: LessonPage[];
}
