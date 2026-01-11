import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useUser } from "@/lib/user-context";
import { 
  EXPERIENCE_LEVELS, 
  ASSESSMENT_QUESTIONS, 
  LESSON_UNITS, 
  type ExperienceLevel,
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
    }
  };

  const handleStartQuiz = () => {
    setLessonStep("quiz");
    setExerciseQuestionIndex(0);
    setExerciseAnswer(null);
    setExerciseAnswered(false);
    setExerciseCorrect(false);
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
      completeLesson(activeLessonId);
      goToNextLesson();
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
    if (isCorrect) {
      setCompletedPageQuestions(prev => new Set(Array.from(prev).concat(currentPageIndex)));
    }
  };

  const handleRetryPageQuestion = () => {
    setPageAnswer(null);
    setPageAnswered(false);
    setPageCorrect(false);
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
      completeLesson(activeLessonId);
      goToNextLesson();
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

        {onboardingStep === "result" && placementResult && (
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
                <p className="text-muted-foreground mb-4">Based on your experience and assessment, we recommend starting with:</p>
                <div className="rounded-lg border-2 border-primary p-4 bg-primary/5">
                  <h3 className="text-xl font-bold mb-1">
                    {getPlacementUnitInfo(placementResult)?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {getPlacementUnitInfo(placementResult)?.description}
                  </p>
                </div>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                You can always go back and complete earlier lessons if needed.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button onClick={handleStartLearning} size="lg" data-testid="button-start-learning">
                <Sparkles className="h-4 w-4 mr-2" />
                Start Learning
              </Button>
            </CardFooter>
          </Card>
        )}
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
                if (isCorrectOption) {
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
                    showAsIncorrect && isCorrectOption && "bg-tier-beginner text-white border-tier-beginner",
                    showAsIncorrect && isSelected && !isCorrectOption && "bg-destructive text-white border-destructive"
                  )}>
                    {(showAsCompleted && isCorrectOption) || (showAsIncorrect && isCorrectOption) ? (
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
              <p className="text-sm text-muted-foreground">{page.explanation}</p>
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
                    if (isCorrectOption) {
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
                        exerciseAnswered && isCorrectOption && "bg-tier-beginner text-white border-tier-beginner",
                        exerciseAnswered && isSelected && !isCorrectOption && "bg-destructive text-white border-destructive"
                      )}>
                        {exerciseAnswered && isCorrectOption ? (
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
                  <p className="text-sm text-muted-foreground">{currentQ.explanation}</p>
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
              <Button onClick={() => { completeLesson(lesson.id); goToNextLesson(); }} data-testid="button-complete-lesson">
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

      <div className="space-y-6">
        {LESSON_UNITS.map((unit) => {
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
                                completed && "text-tier-beginner"
                              )}>
                                {lesson.title}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {lesson.estimatedMinutes} min
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
    </div>
  );
}
