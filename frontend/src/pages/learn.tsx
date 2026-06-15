import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser, calculateLessonXp, getXpForNextLevel } from "@/lib/user-context";
import { 
  EXPERIENCE_LEVELS, 
  ASSESSMENT_QUESTIONS, 
  LESSON_UNITS, 
  LESSON_EXERCISES,
  type ExperienceLevel,
  type CurriculumTier,
  getPlacementUnit,
  getLessonExercise,
  getMultiPageLesson,
  type LessonPage,
  type LessonContentPage,
  type LessonQuestionPage,
  type LessonPracticePage,
} from "@shared/schema";
import { LessonPractice } from "@/components/lesson-practice";
import { 
  BookOpen, 
  GraduationCap, 
  Lock, 
  Check, 
  ChevronRight, 
  PlayCircle,
  Clock,
  Trophy,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  CircleCheck,
  CircleX,
  HelpCircle,
  X,
  FastForward,
} from "lucide-react";
import { cn } from "@/lib/utils";

type OnboardingStep = "welcome" | "experience" | "assessment" | "result";

export default function Learn() {
  const {
    user,
    completeOnboarding,
    completeLesson,
    completeLessons,
    setCurrentLesson,
    isLessonCompleted,
    resetLessonProgress,
    isAdmin,
    isLoadingProgress,
  } = useUser();

  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>("welcome");
  const [selectedExperience, setSelectedExperience] = useState<ExperienceLevel | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [assessmentScore, setAssessmentScore] = useState(0);
  const [placementResult, setPlacementResult] = useState<string | null>(null);
  
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  
  const [lessonStep, setLessonStep] = useState<"content" | "quiz">("content");
  const [exerciseQuestionIndex, setExerciseQuestionIndex] = useState(0);
  const [exerciseAnswer, setExerciseAnswer] = useState<string | null>(null);
  const [exerciseAnswered, setExerciseAnswered] = useState(false);
  const [exerciseCorrect, setExerciseCorrect] = useState(false);
  
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [pageAnswer, setPageAnswer] = useState<string | null>(null);
  const [pageAnswered, setPageAnswered] = useState(false);
  const [pageCorrect, setPageCorrect] = useState(false);
  const [completedPageQuestions, setCompletedPageQuestions] = useState<Set<number>>(new Set());
  const [activeSection, setActiveSection] = useState<CurriculumTier>("BEGINNER");
  const [lastViewedLessonId, setLastViewedLessonId] = useState<string | null>(null);

  // Practice page state
  const [practiceCompleted, setPracticeCompleted] = useState(false);
  const [practiceScore, setPracticeScore] = useState(0);
  
  // Lesson completion tracking
  const [lessonStartTime, setLessonStartTime] = useState<number | null>(null);
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [attemptedExerciseQuestions, setAttemptedExerciseQuestions] = useState<Set<number>>(new Set());
  const [showCompletionSummary, setShowCompletionSummary] = useState(false);
  const [completionStats, setCompletionStats] = useState<{
    timeSpent: number;
    accuracy: number;
    xpEarned: number;
    lessonTitle: string;
  } | null>(null);

  // Advancement test state
  interface ScrambledQuestion {
    id: string;
    question: string;
    options: Array<{ label: string; id: string; text: string }>;
    correctAnswer: string;
    originalLessonId: string;
  }
  
  const [showAdvancementTest, setShowAdvancementTest] = useState(false);
  const [advancementTestTarget, setAdvancementTestTarget] = useState<{ type: "unit" | "section"; unitId: string; sectionId?: string } | null>(null);
  const [advancementQuestions, setAdvancementQuestions] = useState<ScrambledQuestion[]>([]);
  const [advancementQuestionIndex, setAdvancementQuestionIndex] = useState(0);
  const [advancementAnswer, setAdvancementAnswer] = useState<string | null>(null);
  const [advancementAnswered, setAdvancementAnswered] = useState(false);
  const [advancementCorrect, setAdvancementCorrect] = useState(false);
  const [advancementScore, setAdvancementScore] = useState(0);
  const [advancementTestComplete, setAdvancementTestComplete] = useState(false);

  const hasCompletedOnboarding = user.lessonProgress.hasCompletedOnboarding;

  // Track if we just exited a lesson to skip loading screen
  const lastActiveLessonId = useRef<string | null>(null);
  const justExitedLesson = useRef(false);

  // Detect when exiting a lesson (transition from non-null to null)
  useEffect(() => {
    if (lastActiveLessonId.current !== null && activeLessonId === null) {
      justExitedLesson.current = true;
    }
    lastActiveLessonId.current = activeLessonId;
  }, [activeLessonId]);

  // Reset the flag after one render
  useEffect(() => {
    if (justExitedLesson.current) {
      justExitedLesson.current = false;
    }
  }, []);

  const getAllLessonIds = (): string[] => {
    const ids: string[] = [];
    for (const unit of LESSON_UNITS) {
      for (const section of unit.sections) {
        for (const lesson of section.lessons) {
          ids.push(lesson.id);
        }
      }
    }
    return ids;
  };

  const allLessonIds = getAllLessonIds();

  const getPlacementUnitIndex = (): number => {
    const placementUnitId = user.lessonProgress.currentUnitId;
    return LESSON_UNITS.findIndex(u => u.id === placementUnitId);
  };

  const getLessonUnitIndex = (lessonId: string): number => {
    for (let i = 0; i < LESSON_UNITS.length; i++) {
      for (const section of LESSON_UNITS[i].sections) {
        for (const lesson of section.lessons) {
          if (lesson.id === lessonId) return i;
        }
      }
    }
    return -1;
  };

  const isLessonUnlocked = (lessonId: string): boolean => {
    if (isAdmin) return true;
    
    const lessonUnitIndex = getLessonUnitIndex(lessonId);
    const placementUnitIndex = getPlacementUnitIndex();
    
    // If lesson or placement unit not found, default to unlocking first unit lessons
    if (lessonUnitIndex < 0 || placementUnitIndex < 0) {
      return lessonUnitIndex === 0;
    }
    
    // Lessons before placement are always unlocked
    if (lessonUnitIndex < placementUnitIndex) {
      return true;
    }
    
    // Get lessons for the current unit safely
    const getUnitLessons = (unitIndex: number): string[] => {
      if (unitIndex < 0 || unitIndex >= LESSON_UNITS.length) return [];
      const unit = LESSON_UNITS[unitIndex];
      if (!unit?.sections) return [];
      const lessons: string[] = [];
      for (const section of unit.sections) {
        for (const lesson of section.lessons) {
          lessons.push(lesson.id);
        }
      }
      return lessons;
    };
    
    if (lessonUnitIndex === placementUnitIndex) {
      const unitLessons = getUnitLessons(lessonUnitIndex);
      const lessonPositionInUnit = unitLessons.indexOf(lessonId);
      if (lessonPositionInUnit === 0) return true;
      if (lessonPositionInUnit < 0) return false;
      const previousLessonId = unitLessons[lessonPositionInUnit - 1];
      return user.lessonProgress.completedLessonIds.includes(previousLessonId);
    }
    
    // For lessons beyond placement unit, check if previous unit is completed
    const previousUnitLessons = getUnitLessons(lessonUnitIndex - 1);
    const allPreviousCompleted = previousUnitLessons.length > 0 && previousUnitLessons.every(id => 
      user.lessonProgress.completedLessonIds.includes(id)
    );
    if (!allPreviousCompleted) return false;
    
    const unitLessons = getUnitLessons(lessonUnitIndex);
    const lessonPositionInUnit = unitLessons.indexOf(lessonId);
    if (lessonPositionInUnit === 0) return true;
    if (lessonPositionInUnit < 0) return false;
    const previousLessonId = unitLessons[lessonPositionInUnit - 1];
    return user.lessonProgress.completedLessonIds.includes(previousLessonId);
  };

  const getActiveLesson = () => {
    for (const unit of LESSON_UNITS) {
      for (const section of unit.sections) {
        for (const lesson of section.lessons) {
          if (lesson.id === activeLessonId) {
            return { unit, section, lesson };
          }
        }
      }
    }
    return null;
  };

  const getCompletedCount = () => user.lessonProgress.completedLessonIds.length;
  const getTotalLessons = () => allLessonIds.length;
  const getOverallProgress = () => Math.round((getCompletedCount() / getTotalLessons()) * 100);

  const handleExperienceSelect = (exp: ExperienceLevel) => {
    setSelectedExperience(exp);
  };

  const handleExperienceNext = () => {
    if (selectedExperience) {
      if (selectedExperience === "none") {
        // Skip assessment and result for users with no experience
        const placement = getPlacementUnit("none", 0);
        const placementUnit = getPlacementUnitInfo(placement);
        if (placementUnit) {
          setActiveSection(placementUnit.tier);
        }
        completeOnboarding("none", 0);
      } else {
        setOnboardingStep("assessment");
      }
    }
  };

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      const currentQuestion = ASSESSMENT_QUESTIONS[currentQuestionIndex];
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      const newScore = isCorrect ? assessmentScore + 1 : assessmentScore;
      setAssessmentScore(newScore);

      if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        const placement = getPlacementUnit(selectedExperience!, newScore);
        setPlacementResult(placement);
        setOnboardingStep("result");
      }
    }
  };

  const isTierAvailable = (tier: CurriculumTier): boolean => {
    if (isAdmin) return true;
    
    // Get placement unit info
    const placementUnitIndex = getPlacementUnitIndex();
    if (placementUnitIndex < 0) return tier === "BEGINNER";
    
    const placementUnit = LESSON_UNITS[placementUnitIndex];
    const tiers = ["BEGINNER", "INTERMEDIATE", "ADVANCED", "EXPERT", "MASTER"];
    const placementTierIndex = tiers.indexOf(placementUnit.tier);
    const targetTierIndex = tiers.indexOf(tier);
    
    // Future tiers are unavailable
    return targetTierIndex <= placementTierIndex;
  };

  // Scramble answer options to always be A, B, C, D
  const scrambleOptions = (options: Array<{ id: string; text: string }>, correctAnswer: string): { scrambled: Array<{ label: string; id: string; text: string }>; newCorrectAnswer: string } | null => {
    const labels = ["A", "B", "C", "D"];
    // Only support questions with exactly 4 options
    if (options.length !== 4) return null;
    
    const shuffled = [...options].sort(() => Math.random() - 0.5);
    const scrambled = shuffled.map((opt, idx) => ({
      label: labels[idx],
      id: opt.id,
      text: opt.text,
    }));
    const correctIndex = scrambled.findIndex(opt => opt.id === correctAnswer);
    if (correctIndex === -1) return null;
    
    return { scrambled, newCorrectAnswer: labels[correctIndex] };
  };

  // Get questions from lessons that would be SKIPPED when advancing to a unit
  // Tests should cover material you're skipping, not material you're jumping into
  const getSkippedLessonsQuestions = (targetUnitId: string): ScrambledQuestion[] => {
    const targetUnitIndex = LESSON_UNITS.findIndex(u => u.id === targetUnitId);
    const placementUnitIndex = getPlacementUnitIndex();
    
    // Get the user's current progress - find first incomplete lesson
    let currentUnitIndex = placementUnitIndex;
    for (let i = placementUnitIndex; i < targetUnitIndex; i++) {
      const unit = LESSON_UNITS[i];
      let unitComplete = true;
      for (const section of unit.sections) {
        for (const lesson of section.lessons) {
          if (!isLessonCompleted(lesson.id)) {
            unitComplete = false;
            break;
          }
        }
        if (!unitComplete) break;
      }
      if (!unitComplete) {
        currentUnitIndex = i;
        break;
      }
    }
    
    const questions: ScrambledQuestion[] = [];
    
    // Collect questions from all lessons between current position and target
    // These are the lessons being skipped
    for (let i = currentUnitIndex; i < targetUnitIndex; i++) {
      const unit = LESSON_UNITS[i];
      for (const section of unit.sections) {
        for (const lesson of section.lessons) {
          // Only include lessons that have exercises
          const exercise = LESSON_EXERCISES.find(e => e.lessonId === lesson.id);
          if (exercise) {
            for (const q of exercise.questions) {
              const result = scrambleOptions(q.options, q.correctAnswer);
              if (result) {
                questions.push({
                  id: q.id,
                  question: q.question,
                  options: result.scrambled,
                  correctAnswer: result.newCorrectAnswer,
                  originalLessonId: lesson.id,
                });
              }
            }
          }
        }
      }
    }
    return questions;
  };

  // Get the tier of the user's placement unit
  const getPlacementTier = (): CurriculumTier | null => {
    const placementUnitIndex = getPlacementUnitIndex();
    if (placementUnitIndex < 0 || placementUnitIndex >= LESSON_UNITS.length) return null;
    return LESSON_UNITS[placementUnitIndex].tier;
  };

  // Get questions from lessons in BEGINNER tier that would be skipped when advancing to INTERMEDIATE
  // Uses the same logic as unit skip: finds first incomplete lesson and collects from there
  const getSkippedSectionQuestions = (targetTier: CurriculumTier): ScrambledQuestion[] => {
    // Only support skipping to INTERMEDIATE from BEGINNER for now
    if (targetTier !== "INTERMEDIATE") return [];
    
    const placementTier = getPlacementTier();
    if (placementTier !== "BEGINNER") return [];
    
    const placementUnitIndex = getPlacementUnitIndex();
    
    // Find the first incomplete unit starting from placement
    let currentUnitIndex = placementUnitIndex;
    for (let i = placementUnitIndex; i < LESSON_UNITS.length; i++) {
      const unit = LESSON_UNITS[i];
      if (unit.tier !== "BEGINNER") break;
      
      let unitComplete = true;
      for (const section of unit.sections) {
        for (const lesson of section.lessons) {
          if (!isLessonCompleted(lesson.id)) {
            unitComplete = false;
            break;
          }
        }
        if (!unitComplete) break;
      }
      if (!unitComplete) {
        currentUnitIndex = i;
        break;
      }
    }
    
    const questions: ScrambledQuestion[] = [];
    
    // Collect questions from all remaining BEGINNER lessons from current position
    for (let i = currentUnitIndex; i < LESSON_UNITS.length; i++) {
      const unit = LESSON_UNITS[i];
      if (unit.tier !== "BEGINNER") break;
      
      for (const section of unit.sections) {
        for (const lesson of section.lessons) {
          if (!isLessonCompleted(lesson.id)) {
            const exercise = LESSON_EXERCISES.find(e => e.lessonId === lesson.id);
            if (exercise) {
              for (const q of exercise.questions) {
                const result = scrambleOptions(q.options, q.correctAnswer);
                if (result) {
                  questions.push({
                    id: q.id,
                    question: q.question,
                    options: result.scrambled,
                    correctAnswer: result.newCorrectAnswer,
                    originalLessonId: lesson.id,
                  });
                }
              }
            }
          }
        }
      }
    }
    return questions;
  };

  // Check if a section/tier is locked (first unit of that tier is beyond placement)
  const isSectionLocked = (tier: CurriculumTier): boolean => {
    if (isAdmin) return false;
    const tierUnits = LESSON_UNITS.filter(u => u.tier === tier);
    if (tierUnits.length === 0) return true;
    const firstUnitOfTier = tierUnits[0];
    const firstUnitIndex = LESSON_UNITS.findIndex(u => u.id === firstUnitOfTier.id);
    const placementUnitIndex = getPlacementUnitIndex();
    return firstUnitIndex > placementUnitIndex;
  };

  // Check if a unit is locked (beyond placement)
  const isUnitLocked = (unitId: string): boolean => {
    if (isAdmin) return false;
    const unitIndex = LESSON_UNITS.findIndex(u => u.id === unitId);
    const placementUnitIndex = getPlacementUnitIndex();
    return unitIndex > placementUnitIndex;
  };

  // Start advancement test for a unit
  const startAdvancementTest = (unitId: string) => {
    const questions = getSkippedLessonsQuestions(unitId);
    if (questions.length === 0) return;
    
    // Select up to 10 random questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(10, shuffled.length));
    
    setAdvancementQuestions(selected);
    setAdvancementTestTarget({ type: "unit", unitId });
    setAdvancementQuestionIndex(0);
    setAdvancementAnswer(null);
    setAdvancementAnswered(false);
    setAdvancementCorrect(false);
    setAdvancementScore(0);
    setAdvancementTestComplete(false);
    setShowAdvancementTest(true);
  };

  // Start advancement test for a section/tier
  const startSectionAdvancementTest = (targetTier: CurriculumTier) => {
    const questions = getSkippedSectionQuestions(targetTier);
    if (questions.length === 0) return;
    
    // Select up to 10 random questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(10, shuffled.length));
    
    // Find the first unit of the target tier to use as the target
    const tierUnits = LESSON_UNITS.filter(u => u.tier === targetTier);
    if (tierUnits.length === 0) return;
    const firstUnitOfTier = tierUnits[0];
    
    setAdvancementQuestions(selected);
    setAdvancementTestTarget({ type: "section", unitId: firstUnitOfTier.id, sectionId: targetTier });
    setAdvancementQuestionIndex(0);
    setAdvancementAnswer(null);
    setAdvancementAnswered(false);
    setAdvancementCorrect(false);
    setAdvancementScore(0);
    setAdvancementTestComplete(false);
    setShowAdvancementTest(true);
  };

  // Handle advancement test answer selection
  const handleAdvancementAnswerSelect = (label: string) => {
    if (!advancementAnswered) {
      setAdvancementAnswer(label);
    }
  };

  // Check advancement test answer
  const handleCheckAdvancementAnswer = () => {
    if (!advancementAnswer) return;
    const currentQ = advancementQuestions[advancementQuestionIndex];
    const isCorrect = advancementAnswer === currentQ.correctAnswer;
    setAdvancementAnswered(true);
    setAdvancementCorrect(isCorrect);
    if (isCorrect) {
      setAdvancementScore(prev => prev + 1);
    }
  };

  // Go to next advancement question or complete test
  const handleNextAdvancementQuestion = () => {
    if (advancementQuestionIndex < advancementQuestions.length - 1) {
      setAdvancementQuestionIndex(prev => prev + 1);
      setAdvancementAnswer(null);
      setAdvancementAnswered(false);
      setAdvancementCorrect(false);
    } else {
      setAdvancementTestComplete(true);
    }
  };

  // Complete advancement test and unlock unit or section
  const handleAdvancementTestComplete = () => {
    if (!advancementTestTarget) return;
    
    const passingScore = Math.ceil(advancementQuestions.length * 0.7); // 70% to pass
    const passed = advancementScore >= passingScore;
    
    if (passed) {
      // Collect all lessons from placement unit up to (but not including) target unit
      // This makes the target unit's first lesson unlocked
      const targetUnitIndex = LESSON_UNITS.findIndex(u => u.id === advancementTestTarget.unitId);
      const placementUnitIndex = getPlacementUnitIndex();
      
      const lessonsToComplete: string[] = [];
      
      // Collect all lesson IDs from units between placement and target
      for (let i = placementUnitIndex; i < targetUnitIndex; i++) {
        const unit = LESSON_UNITS[i];
        for (const section of unit.sections) {
          for (const lesson of section.lessons) {
            lessonsToComplete.push(lesson.id);
          }
        }
      }
      
      // First, update the user's current lesson to the first lesson of the target unit
      // This updates the placement and unlocks the new section
      const targetUnit = LESSON_UNITS[targetUnitIndex];
      if (targetUnit && targetUnit.sections.length > 0 && targetUnit.sections[0].lessons.length > 0) {
        const firstSection = targetUnit.sections[0];
        const firstLesson = firstSection.lessons[0];
        setCurrentLesson(targetUnit.id, firstSection.id, firstLesson.id);
      }
      
      // Then batch complete all lessons
      if (lessonsToComplete.length > 0) {
        completeLessons(lessonsToComplete);
      }
      
      // If this was a section skip, switch to the target section tab
      if (advancementTestTarget.type === "section" && advancementTestTarget.sectionId) {
        setActiveSection(advancementTestTarget.sectionId as CurriculumTier);
      }
    }
    
    setShowAdvancementTest(false);
    setAdvancementTestTarget(null);
  };

  // Close advancement test
  const handleCloseAdvancementTest = () => {
    setShowAdvancementTest(false);
    setAdvancementTestTarget(null);
  };

  const handleStartLearning = () => {
    if (selectedExperience && placementResult) {
      const placementUnit = getPlacementUnitInfo(placementResult);
      if (placementUnit) {
        setActiveSection(placementUnit.tier);
      }
      completeOnboarding(selectedExperience, assessmentScore);
    }
  };

  const handleLessonClick = (unitId: string, sectionId: string, lessonId: string) => {
    if (isLessonUnlocked(lessonId) || isLessonCompleted(lessonId)) {
      setActiveLessonId(lessonId);
      setCurrentLesson(unitId, sectionId, lessonId);
      setLessonStep("content");
      setExerciseQuestionIndex(0);
      setExerciseAnswer(null);
      setExerciseAnswered(false);
      setExerciseCorrect(false);
      setCurrentPageIndex(0);
      setPageAnswer(null);
      setPageAnswered(false);
      setPageCorrect(false);
      setCompletedPageQuestions(new Set());
      // Start tracking lesson time and reset question counters
      setLessonStartTime(Date.now());
      setQuestionsAttempted(0);
      setQuestionsCorrect(0);
      setAttemptedExerciseQuestions(new Set());
    }
  };

  const handleStartQuiz = () => {
    setLessonStep("quiz");
    setExerciseQuestionIndex(0);
    setExerciseAnswer(null);
    setExerciseAnswered(false);
    setExerciseCorrect(false);
  };

  const handleSimpleLessonComplete = () => {
    if (!activeLessonId) return;
    // Show completion summary for simple lessons (no quiz, no multi-page)
    const timeSpent = lessonStartTime ? Math.floor((Date.now() - lessonStartTime) / 1000) : 0;
    const accuracy = questionsAttempted > 0 ? Math.round((questionsCorrect / questionsAttempted) * 100) : 100;
    const xpEarned = calculateLessonXp(timeSpent, questionsCorrect, questionsAttempted);
    const lessonTitle = getLessonTitle(activeLessonId);
    
    setCompletionStats({
      timeSpent,
      accuracy,
      xpEarned,
      lessonTitle,
    });
    setShowCompletionSummary(true);
  };

  const handleExerciseAnswerSelect = (answerId: string) => {
    if (!exerciseAnswered) {
      setExerciseAnswer(answerId);
    }
  };

  const handleCheckAnswer = () => {
    if (!activeLessonId || !exerciseAnswer) return;
    const exercise = getLessonExercise(activeLessonId);
    if (!exercise) return;
    
    const currentQ = exercise.questions[exerciseQuestionIndex];
    const isCorrect = exerciseAnswer === currentQ.correctAnswer;
    setExerciseAnswered(true);
    setExerciseCorrect(isCorrect);
    // Track exercise question attempt (only first attempt per question counts)
    if (!attemptedExerciseQuestions.has(exerciseQuestionIndex)) {
      setAttemptedExerciseQuestions(prev => new Set(Array.from(prev).concat(exerciseQuestionIndex)));
      setQuestionsAttempted(prev => prev + 1);
      if (isCorrect) {
        setQuestionsCorrect(prev => prev + 1);
      }
    }
  };

  const handleNextExerciseQuestion = () => {
    if (!activeLessonId) return;
    const exercise = getLessonExercise(activeLessonId);
    if (!exercise) return;
    
    if (exerciseQuestionIndex < exercise.questions.length - 1) {
      setExerciseQuestionIndex(exerciseQuestionIndex + 1);
      setExerciseAnswer(null);
      setExerciseAnswered(false);
      setExerciseCorrect(false);
    } else {
      // Show completion summary for quiz-based lessons
      const timeSpent = lessonStartTime ? Math.floor((Date.now() - lessonStartTime) / 1000) : 0;
      const accuracy = questionsAttempted > 0 ? Math.round((questionsCorrect / questionsAttempted) * 100) : 100;
      const xpEarned = calculateLessonXp(timeSpent, questionsCorrect, questionsAttempted);
      const lessonTitle = getLessonTitle(activeLessonId);
      
      setCompletionStats({
        timeSpent,
        accuracy,
        xpEarned,
        lessonTitle,
      });
      setShowCompletionSummary(true);
    }
  };

  const handleRetryQuestion = () => {
    setExerciseAnswer(null);
    setExerciseAnswered(false);
    setExerciseCorrect(false);
  };

  const goToNextLesson = () => {
    if (!activeLessonId) return;
    
    const currentIndex = allLessonIds.indexOf(activeLessonId);
    if (currentIndex < allLessonIds.length - 1) {
      const nextLessonId = allLessonIds[currentIndex + 1];
      for (const unit of LESSON_UNITS) {
        for (const section of unit.sections) {
          for (const lesson of section.lessons) {
            if (lesson.id === nextLessonId) {
              setActiveLessonId(nextLessonId);
              setCurrentLesson(unit.id, section.id, nextLessonId);
              setLessonStep("content");
              setExerciseQuestionIndex(0);
              setExerciseAnswer(null);
              setExerciseAnswered(false);
              setExerciseCorrect(false);
              setCurrentPageIndex(0);
              setPageAnswer(null);
              setPageAnswered(false);
              setPageCorrect(false);
              setCompletedPageQuestions(new Set());
              // Reset tracking for new lesson
              setLessonStartTime(Date.now());
              setQuestionsAttempted(0);
              setQuestionsCorrect(0);
              setAttemptedExerciseQuestions(new Set());
              return;
            }
          }
        }
      }
    } else {
      setActiveLessonId(null);
    }
  };

  const handlePageAnswerSelect = (answerId: string) => {
    if (!pageAnswered && !completedPageQuestions.has(currentPageIndex)) {
      setPageAnswer(answerId);
    }
  };

  const handleCheckPageAnswer = (page: LessonQuestionPage) => {
    if (!pageAnswer) return;
    const isCorrect = pageAnswer === page.correctAnswer;
    setPageAnswered(true);
    setPageCorrect(isCorrect);
    // Track question attempt (only first attempt per question counts)
    if (!completedPageQuestions.has(currentPageIndex)) {
      setQuestionsAttempted(prev => prev + 1);
      if (isCorrect) {
        setQuestionsCorrect(prev => prev + 1);
        setCompletedPageQuestions(prev => new Set(Array.from(prev).concat(currentPageIndex)));
      }
    }
  };

  const handleRetryPageQuestion = () => {
    setPageAnswer(null);
    setPageAnswered(false);
    setPageCorrect(false);
  };

  const getLessonTitle = (lessonId: string): string => {
    for (const unit of LESSON_UNITS) {
      for (const section of unit.sections) {
        for (const lesson of section.lessons) {
          if (lesson.id === lessonId) {
            return lesson.title;
          }
        }
      }
    }
    return "Lesson";
  };

  const handleNextPage = () => {
    if (!activeLessonId) return;
    const multiPageLesson = getMultiPageLesson(activeLessonId);
    if (!multiPageLesson) return;
    
    if (currentPageIndex < multiPageLesson.pages.length - 1) {
      const nextPageIndex = currentPageIndex + 1;
      setCurrentPageIndex(nextPageIndex);
      const isNextQuestionCompleted = completedPageQuestions.has(nextPageIndex);
      setPageAnswer(null);
      setPageAnswered(isNextQuestionCompleted);
      setPageCorrect(isNextQuestionCompleted);
      // Reset practice state for the new page
      setPracticeCompleted(false);
      setPracticeScore(0);
    } else {
      // Calculate stats and show completion summary
      const timeSpent = lessonStartTime ? Math.floor((Date.now() - lessonStartTime) / 1000) : 0;
      const accuracy = questionsAttempted > 0 ? Math.round((questionsCorrect / questionsAttempted) * 100) : 100;
      const xpEarned = calculateLessonXp(timeSpent, questionsCorrect, questionsAttempted);
      const lessonTitle = getLessonTitle(activeLessonId);
      
      setCompletionStats({
        timeSpent,
        accuracy,
        xpEarned,
        lessonTitle,
      });
      setShowCompletionSummary(true);
    }
  };

  // Helper to reset lesson UI state for a fresh lesson
  const resetLessonUIState = () => {
    setLessonStep("content");
    setExerciseQuestionIndex(0);
    setExerciseAnswer(null);
    setExerciseAnswered(false);
    setExerciseCorrect(false);
    setCurrentPageIndex(0);
    setPageAnswer(null);
    setPageAnswered(false);
    setPageCorrect(false);
    setCompletedPageQuestions(new Set());
    setLessonStartTime(Date.now());
    setQuestionsAttempted(0);
    setQuestionsCorrect(0);
    setAttemptedExerciseQuestions(new Set());
    setPracticeCompleted(false);
    setPracticeScore(0);
  };

  // X button handler - completes lesson and returns to curriculum
  const handleCompletionClose = () => {
    if (!activeLessonId || !completionStats) {
      setShowCompletionSummary(false);
      setActiveLessonId(null);
      return;
    }
    
    const completedLessonId = activeLessonId;
    const xpToAdd = completionStats.xpEarned;
    
    // Complete the lesson
    completeLesson(completedLessonId, xpToAdd);
    
    // Set last viewed lesson for scroll
    setLastViewedLessonId(completedLessonId);
    
    // Reset and go to curriculum
    setShowCompletionSummary(false);
    setCompletionStats(null);
    setActiveLessonId(null);
    resetLessonUIState();
  };

  // Continue button handler - completes lesson and goes to next lesson
  const handleCompletionContinue = () => {
    if (!activeLessonId || !completionStats) {
      return;
    }
    
    const completedLessonId = activeLessonId;
    const xpToAdd = completionStats.xpEarned;
    
    // Find the next lesson before closing dialog
    const currentIndex = allLessonIds.indexOf(completedLessonId);
    const nextLessonId = currentIndex < allLessonIds.length - 1 
      ? allLessonIds[currentIndex + 1] 
      : null;
    
    // Complete the lesson with XP
    completeLesson(completedLessonId, xpToAdd);
    
    // Reset completion state
    setShowCompletionSummary(false);
    setCompletionStats(null);
    
    // Navigate to next lesson or close lesson view
    if (nextLessonId) {
      // Find the next lesson's unit and section info
      for (const unit of LESSON_UNITS) {
        for (const section of unit.sections) {
          for (const lesson of section.lessons) {
            if (lesson.id === nextLessonId) {
              setActiveLessonId(nextLessonId);
              setCurrentLesson(unit.id, section.id, nextLessonId);
              setLessonStep("content");
              setExerciseQuestionIndex(0);
              setExerciseAnswer(null);
              setExerciseAnswered(false);
              setExerciseCorrect(false);
              setCurrentPageIndex(0);
              setPageAnswer(null);
              setPageAnswered(false);
              setPageCorrect(false);
              setCompletedPageQuestions(new Set());
              setLessonStartTime(Date.now());
              setQuestionsAttempted(0);
              setQuestionsCorrect(0);
              setAttemptedExerciseQuestions(new Set());
              return;
            }
          }
        }
      }
    }
    
    // No more lessons or lesson not found, go back to curriculum
    setLastViewedLessonId(completedLessonId);
    setActiveLessonId(null);
    resetLessonUIState();
  };

  const handleExitLesson = () => {
    // Only show confirmation if user has progressed (attempted questions or moved past first page)
    const hasProgressed = questionsAttempted > 0 || currentPageIndex > 0 || lessonStep === "quiz";
    
    if (hasProgressed) {
      setShowExitConfirm(true);
    } else {
      if (activeLessonId) {
        setLastViewedLessonId(activeLessonId);
      }
      setActiveLessonId(null);
      resetLessonUIState();
    }
  };

  const confirmExit = () => {
    if (activeLessonId) {
      setLastViewedLessonId(activeLessonId);
    }
    setShowExitConfirm(false);
    setActiveLessonId(null);
    resetLessonUIState();
  };

  useEffect(() => {
    if (!activeLessonId && lastViewedLessonId) {
      // Small delay to ensure the DOM has rendered the lesson list
      const timer = setTimeout(() => {
        const element = document.getElementById(`lesson-card-${lastViewedLessonId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          setLastViewedLessonId(null);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeLessonId, lastViewedLessonId]);

  const getTimeLeft = () => {
    const active = getActiveLesson();
    if (!active || !lessonStartTime) return "0:00";
    
    const durationMinutes = active.lesson.estimatedMinutes;
    const elapsedSeconds = Math.floor((Date.now() - lessonStartTime) / 1000);
    const totalSeconds = durationMinutes * 60;
    const remainingSeconds = Math.max(0, totalSeconds - elapsedSeconds);
    
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      const prevPageIndex = currentPageIndex - 1;
      setCurrentPageIndex(prevPageIndex);
      const isPrevQuestionCompleted = completedPageQuestions.has(prevPageIndex);
      setPageAnswer(null);
      setPageAnswered(isPrevQuestionCompleted);
      setPageCorrect(isPrevQuestionCompleted);
      // Reset practice state for the previous page
      setPracticeCompleted(false);
      setPracticeScore(0);
    }
  };

  const handleResetProgress = () => {
    resetLessonProgress();
    setShowResetDialog(false);
    setOnboardingStep("welcome");
    setSelectedExperience(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAssessmentScore(0);
    setPlacementResult(null);
    setActiveLessonId(null);
  };

  const getPlacementUnitInfo = (unitId: string) => {
    return LESSON_UNITS.find(u => u.id === unitId);
  };

  const getTierLabel = (tier: CurriculumTier): string => {
    const labels: Record<CurriculumTier, string> = {
      "BEGINNER": "Beginner",
      "INTERMEDIATE": "Intermediate",
      "ADVANCED": "Advanced",
      "EXPERT": "Expert",
      "MASTER": "Master"
    };
    return labels[tier] || tier;
  };

  if (isLoadingProgress && !activeLessonId && !justExitedLesson.current) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl flex items-center justify-center">
        <div className="text-center text-muted-foreground">Loading your progress...</div>
      </div>
    );
  }

  if (!hasCompletedOnboarding) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {onboardingStep === "welcome" && (
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Welcome to Debate Lessons</CardTitle>
              <CardDescription className="text-base">
                Learn debate skills through structured lessons. We'll start by understanding your experience level.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                After a quick assessment, we'll place you in the right starting unit based on your skills.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button onClick={() => setOnboardingStep("experience")} size="lg" data-testid="button-start-assessment">
                Get Started
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {onboardingStep === "experience" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Your Debate Experience
              </CardTitle>
              <CardDescription>
                How much experience do you have with formal debate?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedExperience || ""}
                onValueChange={(val) => handleExperienceSelect(val as ExperienceLevel)}
                className="space-y-3"
              >
                {EXPERIENCE_LEVELS.map((level) => (
                  <div key={level.id} className="relative">
                    <RadioGroupItem
                      value={level.id}
                      id={level.id}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={level.id}
                      className={cn(
                        "flex flex-col gap-1 rounded-lg border-2 p-4 cursor-pointer transition-colors",
                        "hover:bg-accent/50",
                        selectedExperience === level.id 
                          ? "border-primary bg-primary/5" 
                          : "border-muted"
                      )}
                      data-testid={`option-experience-${level.id}`}
                    >
                      <span className="font-medium">{level.label}</span>
                      <span className="text-sm text-muted-foreground">{level.description}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="ghost" onClick={() => setOnboardingStep("welcome")}>
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              <Button 
                onClick={handleExperienceNext} 
                disabled={!selectedExperience}
                data-testid="button-continue-assessment"
              >
                Continue
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {onboardingStep === "assessment" && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">
                  Question {currentQuestionIndex + 1} of {ASSESSMENT_QUESTIONS.length}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Score: {assessmentScore}/{currentQuestionIndex}
                </span>
              </div>
              <Progress 
                value={((currentQuestionIndex) / ASSESSMENT_QUESTIONS.length) * 100} 
                className="h-2"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-6">
                {ASSESSMENT_QUESTIONS[currentQuestionIndex].question}
              </h3>
              <RadioGroup
                value={selectedAnswer || ""}
                onValueChange={handleAnswerSelect}
                className="space-y-3"
              >
                {ASSESSMENT_QUESTIONS[currentQuestionIndex].options.map((option) => (
                  <div key={option.id} className="relative">
                    <RadioGroupItem
                      value={option.id}
                      id={`answer-${option.id}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`answer-${option.id}`}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border-2 p-4 cursor-pointer transition-colors",
                        "hover:bg-accent/50",
                        selectedAnswer === option.id 
                          ? "border-primary bg-primary/5" 
                          : "border-muted"
                      )}
                      data-testid={`option-answer-${option.id}`}
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border text-sm font-medium">
                        {option.id.toUpperCase()}
                      </span>
                      <span>{option.text}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="justify-end">
              <Button 
                onClick={handleNextQuestion} 
                disabled={!selectedAnswer}
                data-testid="button-next-question"
              >
                {currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1 ? "Next Question" : "See Results"}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {onboardingStep === "result" && placementResult && (() => {
          const placementUnit = getPlacementUnitInfo(placementResult);
          const tierLabel = placementUnit ? getTierLabel(placementUnit.tier) : "Beginner";
          const remainingUnits = LESSON_UNITS.filter(u => u.order >= (placementUnit?.order || 1)).length;
          const remainingLessons = LESSON_UNITS
            .filter(u => u.order >= (placementUnit?.order || 1))
            .reduce((sum, u) => sum + u.sections.reduce((s, sec) => s + sec.lessons.length, 0), 0);
          
          return (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-tier-intermediate/20 flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-tier-intermediate" />
                </div>
                <CardTitle className="text-2xl">Assessment Complete!</CardTitle>
                <CardDescription className="text-base">
                  You scored {assessmentScore} out of {ASSESSMENT_QUESTIONS.length}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">Based on your experience and assessment, you'll start at the <strong>{tierLabel}</strong> level:</p>
                  <div className="rounded-lg border-2 border-primary p-4 bg-primary/5">
                    <Badge className="mb-2">{tierLabel} Level</Badge>
                    <h3 className="text-xl font-bold mb-1">
                      {placementUnit?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {placementUnit?.description}
                    </p>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    You have <strong>{remainingLessons} lessons</strong> across <strong>{remainingUnits} units</strong> ahead of you!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Earlier lessons are unlocked if you want to review fundamentals.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button onClick={handleStartLearning} size="lg" data-testid="button-start-learning">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          );
        })()}
      </div>
    );
  }

  if (activeLessonId) {
    const activeData = getActiveLesson();
    if (!activeData) return null;
    const { unit, section, lesson } = activeData;
    const isCompleted = isLessonCompleted(lesson.id);
    const exercise = getLessonExercise(lesson.id);
    const multiPageLesson = getMultiPageLesson(lesson.id);

    const exitConfirmDialog = (
      <Dialog open={showExitConfirm} onOpenChange={setShowExitConfirm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Exit Lesson?</DialogTitle>
            <DialogDescription>
              Are you sure you want to exit? Your progress in this session will not be saved.
              <br />
              <span className="text-primary font-medium mt-2 block">
                Estimated time remaining: {getTimeLeft()}
              </span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:justify-end">
            <Button variant="outline" onClick={() => setShowExitConfirm(false)}>
              Keep Learning
            </Button>
            <Button variant="destructive" onClick={confirmExit}>
              Exit Lesson
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    const completionDialog = (
      <Dialog open={showCompletionSummary} onOpenChange={(open) => { if (!open) handleCompletionClose(); }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
              <Trophy className="h-8 w-8 text-green-500" />
            </div>
            <DialogTitle className="text-center text-xl">Lesson Complete!</DialogTitle>
            <DialogDescription className="text-center">
              {completionStats?.lessonTitle}
            </DialogDescription>
          </DialogHeader>
          
          {completionStats && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold">
                    {completionStats.timeSpent < 60 
                      ? `${completionStats.timeSpent}s`
                      : `${Math.floor(completionStats.timeSpent / 60)}m ${completionStats.timeSpent % 60}s`
                    }
                  </div>
                  <div className="text-xs text-muted-foreground">Time Spent</div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <CircleCheck className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold">
                    {completionStats.accuracy}%
                  </div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    +{completionStats.xpEarned}
                  </div>
                  <div className="text-xs text-muted-foreground">XP Earned</div>
                </div>
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Level {user.lessonProgress.learnLevel}</span>
                  <span className="text-muted-foreground">
                    {getXpForNextLevel(user.lessonProgress.learnXp + completionStats.xpEarned).current} / {getXpForNextLevel(user.lessonProgress.learnXp + completionStats.xpEarned).required} XP
                  </span>
                </div>
                <Progress 
                  value={getXpForNextLevel(user.lessonProgress.learnXp + completionStats.xpEarned).progress} 
                  className="h-2"
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button onClick={handleCompletionContinue} className="w-full" data-testid="button-continue-lesson">
              Continue
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    if (multiPageLesson) {
      const totalPages = multiPageLesson.pages.length;
      const currentPage = multiPageLesson.pages[currentPageIndex];
      const progressValue = ((currentPageIndex + 1) / totalPages) * 100;
      const isLastPage = currentPageIndex === totalPages - 1;

      const renderContentPage = (page: LessonContentPage) => (
        <div className="space-y-6">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {page.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-base leading-relaxed whitespace-pre-line">{paragraph}</p>
            ))}
          </div>

          {page.keyPoints && page.keyPoints.length > 0 && (
            <div className="rounded-lg bg-muted/50 p-4">
              <h4 className="font-medium mb-3">Key Points</h4>
              <ul className="space-y-2">
                {page.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-tier-beginner mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );

      const isQuestionAlreadyCompleted = completedPageQuestions.has(currentPageIndex);
      const showAsCompleted = isQuestionAlreadyCompleted || (pageAnswered && pageCorrect);
      const showAsIncorrect = pageAnswered && !pageCorrect && !isQuestionAlreadyCompleted;

      const renderQuestionPage = (page: LessonQuestionPage) => (
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            {isQuestionAlreadyCompleted ? (
              <Badge className="gap-1 bg-tier-beginner">
                <CircleCheck className="h-3 w-3" />
                Previously Answered Correctly
              </Badge>
            ) : (
              <Badge variant="secondary" className="gap-1">
                <HelpCircle className="h-3 w-3" />
                Check Your Understanding
              </Badge>
            )}
          </div>
          
          <h3 className="text-lg font-medium">{page.question}</h3>
          
          <div className="space-y-3">
            {page.options.map((option) => {
              const isSelected = pageAnswer === option.id;
              const isCorrectOption = option.id === page.correctAnswer;
              
              let optionStyle = "border-muted hover:bg-accent/50";
              if (showAsCompleted) {
                if (isCorrectOption) {
                  optionStyle = "border-tier-beginner bg-tier-beginner/10";
                }
              } else if (showAsIncorrect) {
                if (isSelected && !isCorrectOption) {
                  optionStyle = "border-destructive bg-destructive/10";
                }
              } else if (isSelected) {
                optionStyle = "border-primary bg-primary/5";
              }
              
              return (
                <button
                  key={option.id}
                  onClick={() => handlePageAnswerSelect(option.id)}
                  disabled={showAsCompleted || showAsIncorrect}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-lg border-2 p-4 text-left transition-colors",
                    optionStyle,
                    (showAsCompleted || showAsIncorrect) && "cursor-default"
                  )}
                  data-testid={`option-page-${option.id}`}
                >
                  <span className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full border text-sm font-medium",
                    showAsCompleted && isCorrectOption && "bg-tier-beginner text-white border-tier-beginner",
                    showAsIncorrect && isSelected && !isCorrectOption && "bg-destructive text-white border-destructive"
                  )}>
                    {showAsCompleted && isCorrectOption ? (
                      <Check className="h-3 w-3" />
                    ) : showAsIncorrect && isSelected && !isCorrectOption ? (
                      <CircleX className="h-3 w-3" />
                    ) : (
                      option.id.toUpperCase()
                    )}
                  </span>
                  <span>{option.text}</span>
                </button>
              );
            })}
          </div>

          {showAsCompleted && (
            <div className="rounded-lg p-4 bg-tier-beginner/10 border border-tier-beginner/30">
              <div className="flex items-center gap-2 mb-2">
                <CircleCheck className="h-5 w-5 text-tier-beginner" />
                <span className="font-medium text-tier-beginner">
                  {isQuestionAlreadyCompleted ? "You answered this correctly!" : "Correct!"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{page.explanation}</p>
            </div>
          )}
          
          {showAsIncorrect && (
            <div className="rounded-lg p-4 bg-destructive/10 border border-destructive/30">
              <div className="flex items-center gap-2 mb-2">
                <CircleX className="h-5 w-5 text-destructive" />
                <span className="font-medium text-destructive">Not quite right</span>
              </div>
              <p className="text-sm text-muted-foreground">Try again to find the correct answer.</p>
            </div>
          )}
        </div>
      );

      const handlePracticeComplete = (score: number) => {
        setPracticeScore(score);
        setPracticeCompleted(true);
      };

      const handlePracticeSkip = () => {
        setPracticeCompleted(true);
      };

      const renderPracticePage = (page: LessonPracticePage) => (
        <LessonPractice
          practice={page.practice}
          practiceId={`${lesson.id}-page-${currentPageIndex}`}
          userLevel={user?.lessonProgress?.learnLevel || 1}
          onComplete={handlePracticeComplete}
          onSkip={handlePracticeSkip}
        />
      );

      const canProceed = 
        currentPage.type === "content" || 
        isQuestionAlreadyCompleted || 
        (pageAnswered && pageCorrect) ||
        (currentPage.type === "practice" && practiceCompleted);

      return (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          {exitConfirmDialog}
          {completionDialog}
          <header className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleExitLesson}
                data-testid="button-exit-lesson"
              >
                <X className="h-5 w-5" />
              </Button>
              <div>
                <h2 className="font-semibold text-sm line-clamp-1">{lesson.title}</h2>
                <p className="text-xs text-muted-foreground">{unit.title}</p>
              </div>
            </div>
            <div className="flex-1 max-w-xs mx-4">
              <Progress value={progressValue} className="h-2" />
            </div>
            <div className="text-xs font-medium text-muted-foreground whitespace-nowrap">
              Page {currentPageIndex + 1} of {totalPages}
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
              {currentPage.type === "content" && renderContentPage(currentPage)}
              {currentPage.type === "question" && renderQuestionPage(currentPage)}
              {currentPage.type === "practice" && renderPracticePage(currentPage)}
            </div>
          </main>

          <footer className="border-t p-4 bg-muted/30">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handlePrevPage}
                disabled={currentPageIndex === 0}
                className="gap-1"
                data-testid="button-prev-page"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Previous
              </Button>

              <div className="flex gap-2">
                {currentPage.type === "question" && !pageAnswered && !isQuestionAlreadyCompleted && (
                  <Button 
                    onClick={() => handleCheckPageAnswer(currentPage)}
                    disabled={!pageAnswer}
                    data-testid="button-check-page-answer"
                  >
                    Check Answer
                  </Button>
                )}
                
                {currentPage.type === "question" && pageAnswered && !pageCorrect && !isQuestionAlreadyCompleted && (
                  <Button 
                    onClick={handleRetryPageQuestion} 
                    variant="outline"
                    data-testid="button-retry-page"
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Try Again
                  </Button>
                )}
                
                {canProceed && (
                  <Button 
                    onClick={handleNextPage}
                    data-testid="button-next-page"
                  >
                    {isLastPage ? (
                      <>
                        Complete Lesson
                        <Check className="h-4 w-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Continue
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </footer>
        </div>
      );
    }

    if (lessonStep === "quiz" && exercise) {
      const currentQ = exercise.questions[exerciseQuestionIndex];
      
      return (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          {exitConfirmDialog}
          {completionDialog}
          <header className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleExitLesson}
                data-testid="button-exit-lesson"
              >
                <X className="h-5 w-5" />
              </Button>
              <div>
                <h2 className="font-semibold text-sm line-clamp-1">{lesson.title}</h2>
                <p className="text-xs text-muted-foreground">{unit.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1">
                <Clock className="h-3 w-3" />
                {lesson.estimatedMinutes}m
              </Badge>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Lesson Quiz</h3>
                  <div className="text-sm text-muted-foreground">
                    Question {exerciseQuestionIndex + 1} of {exercise.questions.length}
                  </div>
                </div>
                
                <Progress value={((exerciseQuestionIndex + 1) / exercise.questions.length) * 100} className="h-2 mb-8" />
                
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">{currentQ.question}</h4>
                  
                  <RadioGroup
                    value={exerciseAnswer || ""}
                    onValueChange={handleExerciseAnswerSelect}
                    disabled={exerciseAnswered}
                    className="space-y-3"
                  >
                    {currentQ.options.map((option) => {
                      const isSelected = exerciseAnswer === option.id;
                      const isCorrectOption = option.id === currentQ.correctAnswer;
                      
                      let optionStyle = "border-muted hover:bg-accent/50";
                      if (exerciseAnswered) {
                        if (exerciseCorrect && isCorrectOption) {
                          optionStyle = "border-tier-beginner bg-tier-beginner/10";
                        } else if (isSelected && !isCorrectOption) {
                          optionStyle = "border-destructive bg-destructive/10";
                        }
                      } else if (isSelected) {
                        optionStyle = "border-primary bg-primary/5";
                      }
                      
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleExerciseAnswerSelect(option.id)}
                          disabled={exerciseAnswered}
                          className={cn(
                            "w-full flex items-center gap-3 rounded-lg border-2 p-4 text-left transition-colors",
                            optionStyle,
                            exerciseAnswered && "cursor-default"
                          )}
                          data-testid={`option-exercise-${option.id}`}
                        >
                          <span className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-full border text-sm font-medium",
                            exerciseAnswered && exerciseCorrect && isCorrectOption && "bg-tier-beginner text-white border-tier-beginner",
                            exerciseAnswered && isSelected && !isCorrectOption && "bg-destructive text-white border-destructive"
                          )}>
                            {exerciseAnswered && exerciseCorrect && isCorrectOption ? (
                              <Check className="h-3 w-3" />
                            ) : exerciseAnswered && isSelected && !isCorrectOption ? (
                              <CircleX className="h-3 w-3" />
                            ) : (
                              option.id.toUpperCase()
                            )}
                          </span>
                          <span>{option.text}</span>
                        </button>
                      );
                    })}
                  </RadioGroup>
                </div>
                
                <div className="mt-8 flex justify-end gap-3">
                  {!exerciseAnswered ? (
                    <Button 
                      onClick={handleCheckAnswer} 
                      disabled={!exerciseAnswer}
                      data-testid="button-check-answer"
                    >
                      Check Answer
                    </Button>
                  ) : exerciseCorrect ? (
                    <Button onClick={handleNextExerciseQuestion} data-testid="button-continue-quiz">
                      {exerciseQuestionIndex < exercise.questions.length - 1 ? "Next Question" : "Complete Lesson"}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  ) : (
                    <Button onClick={handleRetryQuestion} variant="outline" data-testid="button-retry-question">
                      <RotateCcw className="h-4 w-4 mr-1" />
                      Try Again
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }

    return (
      <div className="fixed inset-0 z-50 bg-background flex flex-col">
        {exitConfirmDialog}
        {completionDialog}
        <header className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleExitLesson}
              data-testid="button-exit-lesson"
            >
              <X className="h-5 w-5" />
            </Button>
            <div>
              <h2 className="font-semibold text-sm line-clamp-1">{lesson.title}</h2>
              <p className="text-xs text-muted-foreground">{unit.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              {lesson.estimatedMinutes}m
            </Badge>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">{lesson.content}</p>
              </div>

              {lesson.keyPoints && lesson.keyPoints.length > 0 && (
                <div className="rounded-lg bg-muted/50 p-4">
                  <h4 className="font-medium mb-3">Key Points</h4>
                  <ul className="space-y-2">
                    {lesson.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-tier-beginner mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {lesson.exercise && (
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <PlayCircle className="h-4 w-4 text-primary" />
                    Practice Exercise
                  </h4>
                  <p className="text-sm text-muted-foreground">{lesson.exercise}</p>
                </div>
              )}
            </div>
          </div>
        </main>
        
        <footer className="border-t p-4 bg-muted/30">
          <div className="max-w-3xl mx-auto flex justify-end">
            {isCompleted ? (
              <Button onClick={goToNextLesson} variant="outline" data-testid="button-next-lesson">
                Next Lesson
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            ) : exercise ? (
              <Button onClick={handleStartQuiz} data-testid="button-start-quiz">
                <HelpCircle className="h-4 w-4 mr-1" />
                Take Quiz to Complete
              </Button>
            ) : (
              <Button onClick={handleSimpleLessonComplete} data-testid="button-complete-lesson">
                <Check className="h-4 w-4 mr-1" />
                Mark Complete & Continue
              </Button>
            )}
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Learn Debate</h1>
          <p className="text-muted-foreground">
            Progress through structured lessons to master debate skills.
          </p>
          {isAdmin && (
            <Badge variant="outline" className="mt-2 gap-1 text-primary border-primary">
              <Sparkles className="h-3 w-3" />
              Developer Mode
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          {isAdmin && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setOnboardingStep("welcome");
                resetLessonProgress();
              }}
              data-testid="button-retake-placement"
            >
              <GraduationCap className="h-4 w-4 mr-1" />
              Retake Placement Test
            </Button>
          )}
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowResetDialog(true)}
            data-testid="button-reset-progress"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset Progress
          </Button>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Overall Progress</p>
              <p className="text-2xl font-bold">{getCompletedCount()} / {getTotalLessons()} lessons</p>
            </div>
            <div className="flex-1 max-w-xs">
              <Progress value={getOverallProgress()} className="h-3" />
              <p className="text-sm text-muted-foreground mt-1 text-right">{getOverallProgress()}% complete</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeSection} onValueChange={(v) => setActiveSection(v as CurriculumTier)} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 h-auto">
          {(["BEGINNER", "INTERMEDIATE", "ADVANCED", "EXPERT", "MASTER"] as CurriculumTier[]).map((tier) => {
            const isAvailable = isTierAvailable(tier);
            const tierUnits = LESSON_UNITS.filter(u => u.tier === tier);
            const tierLessonIds: string[] = [];
            tierUnits.forEach(unit => {
              unit.sections.forEach(s => s.lessons.forEach(l => tierLessonIds.push(l.id)));
            });
            const completedInTier = tierLessonIds.filter(id => user.lessonProgress.completedLessonIds.includes(id)).length;
            
            const tierNames: Record<CurriculumTier, string> = {
              BEGINNER: "Beginner",
              INTERMEDIATE: "Intermediate", 
              ADVANCED: "Advanced",
              EXPERT: "Expert",
              MASTER: "Master",
            };
            
            const tierColors: Record<CurriculumTier, string> = {
              BEGINNER: "bg-tier-beginner",
              INTERMEDIATE: "bg-tier-intermediate",
              ADVANCED: "bg-tier-advanced",
              EXPERT: "bg-tier-expert",
              MASTER: "bg-tier-master",
            };
            
            return (
              <TabsTrigger 
                key={tier} 
                value={tier}
                disabled={!isAvailable}
                className={cn(
                  "flex flex-col gap-1 py-2 px-1 data-[state=active]:bg-accent",
                  !isAvailable && "opacity-50 cursor-not-allowed grayscale"
                )}
                data-testid={`tab-section-${tier.toLowerCase()}`}
              >
                <div className="flex items-center gap-1.5">
                  <div className={cn("h-2 w-2 rounded-full", tierColors[tier])} />
                  <span className="text-xs sm:text-sm font-medium">{tierNames[tier]}</span>
                  {!isAvailable && <Lock className="h-3 w-3 ml-auto text-muted-foreground" />}
                </div>
                <div className="text-[10px] text-muted-foreground">
                  {isAvailable ? `${completedInTier}/${tierLessonIds.length} done` : "Locked"}
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>
        
        {(["BEGINNER", "INTERMEDIATE", "ADVANCED", "EXPERT", "MASTER"] as CurriculumTier[]).map((tier) => {
          const tierUnits = LESSON_UNITS.filter(u => u.tier === tier);
          if (tierUnits.length === 0) return null;
          
          const tierLessonIds: string[] = [];
          tierUnits.forEach(unit => {
            unit.sections.forEach(s => s.lessons.forEach(l => tierLessonIds.push(l.id)));
          });
          const completedInTier = tierLessonIds.filter(id => user.lessonProgress.completedLessonIds.includes(id)).length;
          const tierProgress = Math.round((completedInTier / tierLessonIds.length) * 100);
          
          const sectionInfo: Record<CurriculumTier, { name: string; lessonRange: string; color: string }> = {
            BEGINNER: { name: "Section 1: Beginner", lessonRange: "Lessons 1-70", color: "bg-tier-beginner" },
            INTERMEDIATE: { name: "Section 2: Intermediate", lessonRange: "Lessons 71-140", color: "bg-tier-intermediate" },
            ADVANCED: { name: "Section 3: Advanced", lessonRange: "Lessons 141-210", color: "bg-tier-advanced" },
            EXPERT: { name: "Section 4: Expert", lessonRange: "Lessons 211-280", color: "bg-tier-expert" },
            MASTER: { name: "Section 5: Master", lessonRange: "Lessons 281-365", color: "bg-tier-master" },
          };
          
          const info = sectionInfo[tier];
          
          // Check if we can show "Skip to Section 2" button (only in BEGINNER section when Section 2 is locked)
          const canSkipToSection2 = tier === "BEGINNER" && isSectionLocked("INTERMEDIATE") && getSkippedSectionQuestions("INTERMEDIATE").length > 0;
          
          return (
            <TabsContent key={tier} value={tier} className="space-y-4 mt-0">
              <div className="flex items-center justify-between gap-4 py-3 border-b">
                <div className="flex items-center gap-3">
                  <div className={cn("h-3 w-3 rounded-full", info.color)} />
                  <div>
                    <h2 className="text-xl font-bold">{info.name}</h2>
                    <p className="text-sm text-muted-foreground">{info.lessonRange}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {canSkipToSection2 && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startSectionAdvancementTest("INTERMEDIATE")}
                      className="gap-1"
                      data-testid="button-skip-to-section-2"
                    >
                      <FastForward className="h-4 w-4" />
                      Skip to Section 2
                    </Button>
                  )}
                  <Badge variant="outline">{completedInTier}/{tierLessonIds.length}</Badge>
                  <div className="w-24">
                    <Progress value={tierProgress} className="h-2" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {tierUnits.map((unit) => {
                  const unitLessons: string[] = [];
                  unit.sections.forEach(s => s.lessons.forEach(l => unitLessons.push(l.id)));
                  const completedInUnit = unitLessons.filter(id => user.lessonProgress.completedLessonIds.includes(id)).length;
                  const unitProgress = Math.round((completedInUnit / unitLessons.length) * 100);
                  const unitLocked = isUnitLocked(unit.id);
                  const hasQuestions = getSkippedLessonsQuestions(unit.id).length > 0;

                  return (
                    <Card key={unit.id} className={cn(unitLocked && "border-dashed opacity-75")}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {unitLocked ? <Lock className="h-5 w-5 text-muted-foreground" /> : <BookOpen className="h-5 w-5" />}
                              {unit.title}
                            </CardTitle>
                            <CardDescription className="mt-1">{unit.description}</CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            {unitLocked && hasQuestions && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => startAdvancementTest(unit.id)}
                                className="gap-1"
                                data-testid={`button-skip-to-${unit.id}`}
                              >
                                <FastForward className="h-4 w-4" />
                                Skip Ahead
                              </Button>
                            )}
                            <Badge variant="outline">{completedInUnit}/{unitLessons.length}</Badge>
                          </div>
                        </div>
                        <Progress value={unitProgress} className="h-2 mt-3" />
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {unit.sections.map((section) => (
                          <div key={section.id} className="rounded-lg border p-4">
                            <h4 className="font-medium mb-3">{section.title}</h4>
                            <div className="space-y-2">
                              {section.lessons.map((lesson) => {
                                const completed = isLessonCompleted(lesson.id);
                                const unlocked = isLessonUnlocked(lesson.id);
                                const showTitle = completed || unlocked;
                                
                                return (
                                  <div key={lesson.id} id={`lesson-card-${lesson.id}`}>
                                    <button
                                      onClick={() => handleLessonClick(unit.id, section.id, lesson.id)}
                                      disabled={!unlocked && !completed}
                                      className={cn(
                                        "w-full flex items-center gap-3 p-3 rounded-md text-left transition-colors",
                                        completed && "bg-tier-beginner/10",
                                        unlocked && !completed && "hover:bg-accent",
                                        !unlocked && !completed && "opacity-50 cursor-not-allowed"
                                      )}
                                      data-testid={`button-lesson-${lesson.id}`}
                                    >
                                      <div className={cn(
                                        "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0",
                                        completed ? "bg-tier-beginner text-white" : unlocked ? "bg-muted" : "bg-muted"
                                      )}>
                                        {completed ? (
                                          <Check className="h-4 w-4" />
                                        ) : unlocked ? (
                                          <PlayCircle className="h-4 w-4" />
                                        ) : (
                                          <Lock className="h-4 w-4" />
                                        )}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className={cn(
                                          "font-medium truncate",
                                          completed && "text-tier-beginner",
                                          !showTitle && "text-muted-foreground italic"
                                        )}>
                                          {showTitle ? lesson.title : "Locked Lesson"}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                          {showTitle ? `${lesson.estimatedMinutes} min` : "Complete previous lessons to unlock"}
                                        </p>
                                      </div>
                                      {(unlocked || completed) && (
                                        <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                      )}
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {(() => {
                const allTiers: CurriculumTier[] = ["BEGINNER", "INTERMEDIATE", "ADVANCED", "EXPERT", "MASTER"];
                const tierIndex = allTiers.indexOf(tier);
                const prevTier = tierIndex > 0 ? allTiers[tierIndex - 1] : null;
                const nextTier = tierIndex < allTiers.length - 1 ? allTiers[tierIndex + 1] : null;
                const isSectionComplete = tierLessonIds.length > 0 && completedInTier === tierLessonIds.length;
                const isNextAvailable = nextTier ? isTierAvailable(nextTier) : false;

                if (!prevTier && !isSectionComplete) return null;

                return (
                  <div className="flex items-center justify-between gap-3 pt-4 border-t">
                    {prevTier ? (
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => { setActiveSection(prevTier); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back to {prevTier.charAt(0) + prevTier.slice(1).toLowerCase()}
                      </Button>
                    ) : <div />}
                    {isSectionComplete && nextTier && isNextAvailable && (
                      <Button
                        className="gap-2"
                        onClick={() => { setActiveSection(nextTier); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      >
                        Move to {nextTier.charAt(0) + nextTier.slice(1).toLowerCase()}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                );
              })()}
            </TabsContent>
          );
        })}
      </Tabs>

      <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reset Learning Progress?</DialogTitle>
            <DialogDescription>
              This will clear all your completed lessons and restart the placement assessment. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setShowResetDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleResetProgress} data-testid="button-confirm-reset">
              Reset Progress
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showCompletionSummary} onOpenChange={(open) => { if (!open) handleCompletionClose(); }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
              <Trophy className="h-8 w-8 text-green-500" />
            </div>
            <DialogTitle className="text-center text-xl">Lesson Complete!</DialogTitle>
            <DialogDescription className="text-center">
              {completionStats?.lessonTitle}
            </DialogDescription>
          </DialogHeader>
          
          {completionStats && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold">
                    {completionStats.timeSpent < 60 
                      ? `${completionStats.timeSpent}s`
                      : `${Math.floor(completionStats.timeSpent / 60)}m ${completionStats.timeSpent % 60}s`
                    }
                  </div>
                  <div className="text-xs text-muted-foreground">Time Spent</div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <CircleCheck className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold">
                    {completionStats.accuracy}%
                  </div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    +{completionStats.xpEarned}
                  </div>
                  <div className="text-xs text-muted-foreground">XP Earned</div>
                </div>
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Level {user.lessonProgress.learnLevel}</span>
                  <span className="text-muted-foreground">
                    {getXpForNextLevel(user.lessonProgress.learnXp + completionStats.xpEarned).current} / {getXpForNextLevel(user.lessonProgress.learnXp + completionStats.xpEarned).required} XP
                  </span>
                </div>
                <Progress 
                  value={getXpForNextLevel(user.lessonProgress.learnXp + completionStats.xpEarned).progress} 
                  className="h-2"
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button onClick={handleCompletionContinue} className="w-full" data-testid="button-continue-lesson">
              Continue
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showAdvancementTest} onOpenChange={(open) => { if (!open) handleCloseAdvancementTest(); }}>
        <DialogContent className="sm:max-w-lg">
          {!advancementTestComplete ? (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <FastForward className="h-5 w-5" />
                  Advancement Test
                </DialogTitle>
                <DialogDescription>
                  Answer {Math.ceil(advancementQuestions.length * 0.7)} out of {advancementQuestions.length} questions correctly to skip ahead.
                </DialogDescription>
              </DialogHeader>
              
              {advancementQuestions.length > 0 && (
                <div className="space-y-6 py-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Question {advancementQuestionIndex + 1} of {advancementQuestions.length}</span>
                    <span>Score: {advancementScore}/{advancementQuestionIndex + (advancementAnswered ? 1 : 0)}</span>
                  </div>
                  
                  <Progress 
                    value={((advancementQuestionIndex + (advancementAnswered ? 1 : 0)) / advancementQuestions.length) * 100} 
                    className="h-2" 
                  />
                  
                  <div className="space-y-4">
                    <p className="font-medium">{advancementQuestions[advancementQuestionIndex].question}</p>
                    
                    <RadioGroup
                      value={advancementAnswer || ""}
                      onValueChange={handleAdvancementAnswerSelect}
                      className="space-y-2"
                    >
                      {advancementQuestions[advancementQuestionIndex].options.map((option) => (
                        <div
                          key={option.label}
                          className={cn(
                            "flex items-center space-x-3 p-3 rounded-lg border transition-colors",
                            advancementAnswer === option.label && !advancementAnswered && "border-primary bg-primary/5",
                            advancementAnswered && option.label === advancementQuestions[advancementQuestionIndex].correctAnswer && "border-green-500 bg-green-500/10",
                            advancementAnswered && advancementAnswer === option.label && option.label !== advancementQuestions[advancementQuestionIndex].correctAnswer && "border-red-500 bg-red-500/10"
                          )}
                        >
                          <RadioGroupItem
                            value={option.label}
                            id={`adv-${option.label}`}
                            disabled={advancementAnswered}
                          />
                          <Label
                            htmlFor={`adv-${option.label}`}
                            className="flex-1 cursor-pointer flex items-center gap-2"
                          >
                            <span className="font-medium text-muted-foreground">{option.label}.</span>
                            <span>{option.text}</span>
                          </Label>
                          {advancementAnswered && option.label === advancementQuestions[advancementQuestionIndex].correctAnswer && (
                            <CircleCheck className="h-5 w-5 text-green-500" />
                          )}
                          {advancementAnswered && advancementAnswer === option.label && option.label !== advancementQuestions[advancementQuestionIndex].correctAnswer && (
                            <CircleX className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              )}
              
              <DialogFooter className="gap-2">
                {!advancementAnswered ? (
                  <Button 
                    onClick={handleCheckAdvancementAnswer} 
                    disabled={!advancementAnswer}
                    className="w-full"
                    data-testid="button-check-advancement-answer"
                  >
                    Check Answer
                  </Button>
                ) : (
                  <Button 
                    onClick={handleNextAdvancementQuestion}
                    className="w-full"
                    data-testid="button-next-advancement-question"
                  >
                    {advancementQuestionIndex < advancementQuestions.length - 1 ? "Next Question" : "See Results"}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                )}
              </DialogFooter>
            </>
          ) : (
            <>
              <DialogHeader>
                <div className={cn(
                  "mx-auto mb-2 h-16 w-16 rounded-full flex items-center justify-center",
                  advancementScore >= Math.ceil(advancementQuestions.length * 0.7) 
                    ? "bg-green-500/10" 
                    : "bg-red-500/10"
                )}>
                  {advancementScore >= Math.ceil(advancementQuestions.length * 0.7) ? (
                    <Trophy className="h-8 w-8 text-green-500" />
                  ) : (
                    <CircleX className="h-8 w-8 text-red-500" />
                  )}
                </div>
                <DialogTitle className="text-center text-xl">
                  {advancementScore >= Math.ceil(advancementQuestions.length * 0.7) 
                    ? "Test Passed!" 
                    : "Not Quite Yet"}
                </DialogTitle>
                <DialogDescription className="text-center">
                  {advancementScore >= Math.ceil(advancementQuestions.length * 0.7) 
                    ? "You've demonstrated mastery of this content and can skip ahead!" 
                    : "You need more practice. Complete the lessons to learn the material."}
                </DialogDescription>
              </DialogHeader>
              
              <div className="py-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  {advancementScore} / {advancementQuestions.length}
                </div>
                <div className="text-muted-foreground">
                  {Math.round((advancementScore / advancementQuestions.length) * 100)}% correct
                  <span className="mx-2">|</span>
                  {Math.ceil(advancementQuestions.length * 0.7)} needed to pass
                </div>
              </div>
              
              <DialogFooter>
                <Button 
                  onClick={handleAdvancementTestComplete}
                  className="w-full"
                  variant={advancementScore >= Math.ceil(advancementQuestions.length * 0.7) ? "default" : "outline"}
                  data-testid="button-finish-advancement-test"
                >
                  {advancementScore >= Math.ceil(advancementQuestions.length * 0.7) ? "Skip Ahead" : "Back to Lessons"}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
