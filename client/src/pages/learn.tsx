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
  } = useUser();

  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>("welcome");
  const [selectedExperience, setSelectedExperience] = useState<ExperienceLevel | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [assessmentScore, setAssessmentScore] = useState(0);
  const [placementResult, setPlacementResult] = useState<string | null>(null);
  
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [showResetDialog, setShowResetDialog] = useState(false);

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

  const isLessonUnlocked = (lessonId: string): boolean => {
    const lessonIndex = allLessonIds.indexOf(lessonId);
    if (lessonIndex === 0) return true;
    const previousLessonId = allLessonIds[lessonIndex - 1];
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
    }
  };

  const handleCompleteLesson = () => {
    if (activeLessonId) {
      completeLesson(activeLessonId);
      
      const currentIndex = allLessonIds.indexOf(activeLessonId);
      if (currentIndex < allLessonIds.length - 1) {
        const nextLessonId = allLessonIds[currentIndex + 1];
        for (const unit of LESSON_UNITS) {
          for (const section of unit.sections) {
            for (const lesson of section.lessons) {
              if (lesson.id === nextLessonId) {
                setActiveLessonId(nextLessonId);
                setCurrentLesson(unit.id, section.id, nextLessonId);
                return;
              }
            }
          }
        }
      } else {
        setActiveLessonId(null);
      }
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
            {!isCompleted ? (
              <Button onClick={handleCompleteLesson} data-testid="button-complete-lesson">
                <Check className="h-4 w-4 mr-1" />
                Mark Complete & Continue
              </Button>
            ) : (
              <Button onClick={handleCompleteLesson} variant="outline" data-testid="button-next-lesson">
                Next Lesson
                <ChevronRight className="h-4 w-4 ml-1" />
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
        </div>
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
