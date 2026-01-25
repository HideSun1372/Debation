import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Loader2, 
  Send, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle,
  Lightbulb,
  Target,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { 
  LessonPracticePage, 
  PracticeType, 
  DifficultyLevel,
  PracticeConfig 
} from "@shared/lessons/types";
import { getDifficultyFromLevel } from "@shared/lessons/types";
import { apiRequest } from "@/lib/queryClient";

interface PracticePrompt {
  argument?: string;
  claim?: string;
  fallacyType?: string;
}

interface PracticeFeedback {
  score: number;
  strengths: string[];
  improvements: string[];
  exampleResponse?: string;
  encouragement: string;
}

interface LessonPracticeProps {
  practice: PracticeConfig;
  practiceId: string;
  userLevel: number;
  onComplete: (score: number) => void;
  onSkip?: () => void;
}

const CLAIM_TYPES = [
  { id: "fact", label: "Claim of Fact", description: "Asserts something is true or false" },
  { id: "value", label: "Claim of Value", description: "Asserts something is good/bad, right/wrong" },
  { id: "policy", label: "Claim of Policy", description: "Asserts something should or shouldn't be done" },
];

const FALLACY_TYPES = [
  { id: "ad_hominem", label: "Ad Hominem", description: "Attacking the person instead of the argument" },
  { id: "strawman", label: "Strawman", description: "Misrepresenting the opponent's argument" },
  { id: "false_dichotomy", label: "False Dichotomy", description: "Presenting only two options when more exist" },
  { id: "slippery_slope", label: "Slippery Slope", description: "Claiming one thing will lead to extreme consequences" },
  { id: "appeal_to_authority", label: "Appeal to Authority", description: "Misusing expert opinion" },
  { id: "hasty_generalization", label: "Hasty Generalization", description: "Drawing conclusions from insufficient evidence" },
  { id: "circular_reasoning", label: "Circular Reasoning", description: "Using the conclusion as a premise" },
  { id: "red_herring", label: "Red Herring", description: "Introducing an irrelevant topic" },
  { id: "appeal_to_emotion", label: "Appeal to Emotion", description: "Using emotion instead of logic" },
  { id: "bandwagon", label: "Bandwagon", description: "Arguing something is true because many believe it" },
];

export function LessonPractice({ practice, practiceId, userLevel, onComplete, onSkip }: LessonPracticeProps) {
  const [stage, setStage] = useState<"loading" | "prompt" | "responding" | "evaluating" | "feedback">("loading");
  const [aiPrompt, setAiPrompt] = useState<PracticePrompt | null>(null);
  const [userResponse, setUserResponse] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<PracticeFeedback | null>(null);
  const [error, setError] = useState<string | null>(null);

  const difficulty = getDifficultyFromLevel(userLevel);

  useEffect(() => {
    generatePrompt();
  }, [practiceId]);

  const generatePrompt = async () => {
    setStage("loading");
    setError(null);
    setUserResponse("");
    setSelectedOption(null);
    setFeedback(null);

    try {
      const response = await apiRequest("POST", "/api/practice/generate", {
        practiceType: practice.type,
        difficulty,
        topic: practice.topic,
        targetSkill: practice.targetSkill,
      });
      
      const prompt = await response.json();
      setAiPrompt(prompt);
      setStage("prompt");
    } catch (err) {
      console.error("Failed to generate practice prompt:", err);
      setError("Failed to load practice. Please try again.");
      setStage("prompt");
    }
  };

  const submitResponse = async () => {
    if (!aiPrompt) return;

    const responseText = practice.type === "claim-classifier" || practice.type === "fallacy-spotter"
      ? selectedOption || ""
      : userResponse.trim();

    if (!responseText) return;

    setStage("evaluating");

    try {
      const response = await apiRequest("POST", "/api/practice/evaluate", {
        practiceType: practice.type,
        difficulty,
        aiPrompt,
        userResponse: responseText,
        targetSkill: practice.targetSkill,
        successCriteria: practice.successCriteria,
      });

      const result = await response.json();
      setFeedback(result);
      setStage("feedback");
    } catch (err) {
      console.error("Failed to evaluate response:", err);
      setFeedback({
        score: 50,
        strengths: ["You attempted the exercise"],
        improvements: ["Try to be more specific"],
        encouragement: "Keep practicing!",
      });
      setStage("feedback");
    }
  };

  const handleComplete = () => {
    onComplete(feedback?.score || 50);
  };

  const renderPromptContent = () => {
    if (!aiPrompt) return null;

    switch (practice.type) {
      case "argument-builder":
        return (
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium mb-2">Your task:</p>
              <p className="text-muted-foreground">{practice.instructions}</p>
            </div>
            {aiPrompt.claim && (
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Argue for this claim:</p>
                <p className="font-medium text-lg">"{aiPrompt.claim}"</p>
              </div>
            )}
          </div>
        );

      case "refutation":
        return (
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium mb-2">Your task:</p>
              <p className="text-muted-foreground">{practice.instructions}</p>
            </div>
            {aiPrompt.argument && (
              <div className="p-4 border-l-4 border-destructive bg-destructive/5 rounded-r-lg">
                <p className="text-sm text-muted-foreground mb-1">Opponent's argument:</p>
                <p className="italic">"{aiPrompt.argument}"</p>
              </div>
            )}
          </div>
        );

      case "claim-classifier":
        return (
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium mb-2">Your task:</p>
              <p className="text-muted-foreground">{practice.instructions}</p>
            </div>
            {aiPrompt.claim && (
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Classify this claim:</p>
                <p className="font-medium text-lg">"{aiPrompt.claim}"</p>
              </div>
            )}
            <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-3">
              {CLAIM_TYPES.map((type) => (
                <div key={type.id} className="flex items-start space-x-3 p-3 border rounded-lg hover-elevate cursor-pointer">
                  <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                  <Label htmlFor={type.id} className="flex-1 cursor-pointer">
                    <span className="font-medium">{type.label}</span>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case "fallacy-spotter":
        return (
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium mb-2">Your task:</p>
              <p className="text-muted-foreground">{practice.instructions}</p>
            </div>
            {aiPrompt.argument && (
              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg">
                <p className="text-sm text-muted-foreground mb-1">Identify the fallacy:</p>
                <p className="italic">"{aiPrompt.argument}"</p>
              </div>
            )}
            <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {FALLACY_TYPES.map((type) => (
                <div key={type.id} className="flex items-start space-x-2 p-2 border rounded-lg hover-elevate cursor-pointer">
                  <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                  <Label htmlFor={type.id} className="flex-1 cursor-pointer text-sm">
                    <span className="font-medium">{type.label}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case "evidence-defense":
      case "warrant-builder":
        return (
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium mb-2">Your task:</p>
              <p className="text-muted-foreground">{practice.instructions}</p>
            </div>
            {(aiPrompt.argument || aiPrompt.claim) && (
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  {practice.type === "warrant-builder" ? "Build a warrant for:" : "Respond to this challenge:"}
                </p>
                <p className="font-medium whitespace-pre-line">{aiPrompt.argument || aiPrompt.claim}</p>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="p-4 bg-muted rounded-lg">
            <p>{practice.instructions}</p>
          </div>
        );
    }
  };

  const needsTextResponse = !["claim-classifier", "fallacy-spotter"].includes(practice.type);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="h-5 w-5 text-primary" />
            Practice: {practice.targetSkill}
          </CardTitle>
          <Badge variant="outline" className="capitalize">{difficulty}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {stage === "loading" && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <p className="text-muted-foreground">Generating practice scenario...</p>
          </div>
        )}

        {stage === "prompt" && (
          <>
            {error ? (
              <div className="flex flex-col items-center justify-center py-8 gap-4">
                <AlertCircle className="h-8 w-8 text-destructive" />
                <p className="text-destructive">{error}</p>
                <Button onClick={generatePrompt} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
              </div>
            ) : (
              <>
                {renderPromptContent()}
                
                {needsTextResponse && (
                  <div className="space-y-2">
                    <Label htmlFor="response">Your Response:</Label>
                    <Textarea
                      id="response"
                      data-testid="input-practice-response"
                      placeholder="Type your response here..."
                      value={userResponse}
                      onChange={(e) => setUserResponse(e.target.value)}
                      className="min-h-32 resize-none"
                    />
                    <p className="text-xs text-muted-foreground">
                      {userResponse.length} characters
                    </p>
                  </div>
                )}

                {practice.exampleResponse && (
                  <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Hint</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{practice.exampleResponse}</p>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {stage === "evaluating" && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Evaluating your response...</p>
          </div>
        )}

        {stage === "feedback" && feedback && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Your Score</p>
                <p className="text-3xl font-bold">{feedback.score}/100</p>
              </div>
              <div className="w-24 h-24 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${feedback.score * 2.51} 251`}
                    className={cn(
                      feedback.score >= 70 ? "text-green-500" :
                      feedback.score >= 50 ? "text-yellow-500" : "text-red-500"
                    )}
                  />
                </svg>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border border-green-500/20 bg-green-500/5 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="font-medium text-green-700 dark:text-green-400">Strengths</span>
                </div>
                <ul className="space-y-1 text-sm">
                  {feedback.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 border border-yellow-500/20 bg-yellow-500/5 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium text-yellow-700 dark:text-yellow-400">Areas to Improve</span>
                </div>
                <ul className="space-y-1 text-sm">
                  {feedback.improvements.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {feedback.exampleResponse && (
              <div className="p-4 border rounded-lg">
                <p className="text-sm font-medium mb-2">Example of a strong response:</p>
                <p className="text-sm text-muted-foreground italic">"{feedback.exampleResponse}"</p>
              </div>
            )}

            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-center">
              <p className="text-primary font-medium">{feedback.encouragement}</p>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between gap-2">
        {stage === "prompt" && (
          <>
            {onSkip && (
              <Button variant="ghost" onClick={onSkip} data-testid="button-skip-practice">
                Skip
              </Button>
            )}
            <div className="flex gap-2 ml-auto">
              <Button variant="outline" onClick={generatePrompt} data-testid="button-new-prompt">
                <RefreshCw className="h-4 w-4 mr-2" />
                New Prompt
              </Button>
              <Button 
                onClick={submitResponse}
                disabled={needsTextResponse ? !userResponse.trim() : !selectedOption}
                data-testid="button-submit-practice"
              >
                <Send className="h-4 w-4 mr-2" />
                Submit
              </Button>
            </div>
          </>
        )}

        {stage === "feedback" && (
          <>
            <Button variant="outline" onClick={generatePrompt} data-testid="button-try-again">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Another
            </Button>
            <Button onClick={handleComplete} data-testid="button-continue-practice">
              Continue
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
