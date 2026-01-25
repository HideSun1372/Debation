import { useState } from "react";
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
  type ExperienceLevel,
  type CurriculumTier,
  getPlacementUnit,
  getLessonExercise,
  getMultiPageLesson,
  type LessonPage,
  type LessonContentPage,
  type LessonQuestionPage,
} from "@shared/schema";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

type OnboardingStep = "welcome" | "experience" | "assessment" | "result";

export default function Learn() {
  const { 
    user, 
    completeOnboarding, 
    completeLesson, 
    setCurrentLesson, 
    isLessonCompleted,
    resetLessonProgress,
    isAdmin,
  } = useUser();

  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>("welcome");
  const [selectedExperience, setSelectedExperience] = useState<ExperienceLevel | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [assessmentScore, setAssessmentScore] = useState(0);
  const [placementResult, setPlacementResult] = useState<string | null>(null);
  
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [showResetDialog, setShowResetDialog] = useState(false);
  
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

  const hasCompletedOnboarding = user.lessonProgress.hasCompletedOnboarding;

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
      setOnboardingStep("assessment");
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

  const handleCompletionContinue = () => {
    if (!activeLessonId || !completionStats) return;
    
    // Store the current lesson ID before any state changes
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
      // Find unit and section for the next lesson
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
    } else {
      // No more lessons, go back to curriculum
      setActiveLessonId(null);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      const prevPageIndex = currentPageIndex - 1;
      setCurrentPageIndex(prevPageIndex);
      const isPrevQuestionCompleted = completedPageQuestions.has(prevPageIndex);
      setPageAnswer(null);
      setPageAnswered(isPrevQuestionCompleted);
      setPageCorrect(isPrevQuestionCompleted);
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

      const canProceed = currentPage.type === "content" || isQuestionAlreadyCompleted || (pageAnswered && pageCorrect);

      return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => setActiveLessonId(null)}
            data-testid="button-back-to-lessons"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Lessons
          </Button>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>{unit.title}</span>
                <ChevronRight className="h-4 w-4" />
                <span>{section.title}</span>
              </div>
              <CardTitle className="text-2xl">
                {currentPage.type === "content" ? currentPage.title : lesson.title}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <Badge variant="outline" className="gap-1">
                  <BookOpen className="h-3 w-3" />
                  Page {currentPageIndex + 1} of {totalPages}
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Clock className="h-3 w-3" />
                  {lesson.estimatedMinutes} min
                </Badge>
                {isCompleted && (
                  <Badge className="bg-tier-beginner gap-1">
                    <Check className="h-3 w-3" />
                    Completed
                  </Badge>
                )}
              </div>
              <Progress value={progressValue} className="h-2 mt-4" />
            </CardHeader>
            <CardContent className="space-y-6">
              {currentPage.type === "content" 
                ? renderContentPage(currentPage) 
                : renderQuestionPage(currentPage)
              }
            </CardContent>
            <CardFooter className="justify-between gap-2">
              <Button 
                variant="outline" 
                onClick={handlePrevPage}
                disabled={currentPageIndex === 0}
                data-testid="button-prev-page"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
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
            </CardFooter>
          </Card>
        </div>
      );
    }

    if (lessonStep === "quiz" && exercise) {
      const currentQ = exercise.questions[exerciseQuestionIndex];
      
      return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => setLessonStep("content")}
            data-testid="button-back-to-content"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Lesson
          </Button>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="gap-1">
                  <HelpCircle className="h-3 w-3" />
                  Question {exerciseQuestionIndex + 1} of {exercise.questions.length}
                </Badge>
                <span className="text-sm text-muted-foreground">{lesson.title}</span>
              </div>
              <Progress 
                value={((exerciseQuestionIndex + (exerciseAnswered && exerciseCorrect ? 1 : 0)) / exercise.questions.length) * 100} 
                className="h-2"
              />
            </CardHeader>
            <CardContent className="space-y-6">
              <h3 className="text-lg font-medium">{currentQ.question}</h3>
              
              <div className="space-y-3">
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
              </div>

              {exerciseAnswered && (
                <div className={cn(
                  "rounded-lg p-4",
                  exerciseCorrect ? "bg-tier-beginner/10 border border-tier-beginner/30" : "bg-destructive/10 border border-destructive/30"
                )}>
                  <div className="flex items-center gap-2 mb-2">
                    {exerciseCorrect ? (
                      <>
                        <CircleCheck className="h-5 w-5 text-tier-beginner" />
                        <span className="font-medium text-tier-beginner">Correct!</span>
                      </>
                    ) : (
                      <>
                        <CircleX className="h-5 w-5 text-destructive" />
                        <span className="font-medium text-destructive">Not quite right</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exerciseCorrect ? currentQ.explanation : "Try again to find the correct answer."}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="justify-end gap-2">
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
            </CardFooter>
          </Card>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => setActiveLessonId(null)}
          data-testid="button-back-to-lessons"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Lessons
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{unit.title}</span>
              <ChevronRight className="h-4 w-4" />
              <span>{section.title}</span>
            </div>
            <CardTitle className="text-2xl">{lesson.title}</CardTitle>
            <div className="flex items-center gap-3 mt-2">
              <Badge variant="outline" className="gap-1">
                <Clock className="h-3 w-3" />
                {lesson.estimatedMinutes} min
              </Badge>
              {isCompleted && (
                <Badge className="bg-tier-beginner gap-1">
                  <Check className="h-3 w-3" />
                  Completed
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
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
          </CardContent>
          <CardFooter className="justify-end gap-2">
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
          </CardFooter>
        </Card>
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
                className="flex flex-col gap-1 py-2 px-1 data-[state=active]:bg-accent"
                data-testid={`tab-section-${tier.toLowerCase()}`}
              >
                <div className="flex items-center gap-1.5">
                  <div className={cn("h-2 w-2 rounded-full", tierColors[tier])} />
                  <span className="text-xs sm:text-sm font-medium">{tierNames[tier]}</span>
                </div>
                <span className="text-[10px] text-muted-foreground">{completedInTier}/{tierLessonIds.length}</span>
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

                  return (
                    <Card key={unit.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              <BookOpen className="h-5 w-5" />
                              {unit.title}
                            </CardTitle>
                            <CardDescription className="mt-1">{unit.description}</CardDescription>
                          </div>
                          <Badge variant="outline">{completedInUnit}/{unitLessons.length}</Badge>
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
                                  <button
                                    key={lesson.id}
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

      <Dialog open={showCompletionSummary} onOpenChange={setShowCompletionSummary}>
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
    </div>
  );
}
