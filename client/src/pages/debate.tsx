import { useState, useEffect, useRef } from "react";
import { useLocation, useSearch } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useUser } from "@/lib/user-context";
import { AI_OPPONENTS, DEBATE_TOPICS, DEBATE_FORMATS, getSkillTier } from "@shared/schema";
import { Send, Clock, User, Bot, Trophy, TrendingUp, TrendingDown, ArrowLeft, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { apiRequest } from "@/lib/queryClient";

interface DebateMessage {
  id: string;
  role: "user" | "opponent";
  content: string;
  turnNumber: number;
}

interface DebateResult {
  won: boolean;
  pointsChange: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
}

export default function Debate() {
  const searchString = useSearch();
  const [, setLocation] = useLocation();
  const { user, recordDebate, addDebateToHistory } = useUser();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const params = new URLSearchParams(searchString);
  const opponentId = params.get("opponent");
  const formatId = params.get("format");
  const topicId = params.get("topic");
  const side = params.get("side") as "pro" | "con";

  const opponent = AI_OPPONENTS.find((o) => o.id === opponentId);
  const topic = DEBATE_TOPICS.find((t) => t.id === topicId);
  const format = DEBATE_FORMATS.find((f) => f.id === formatId);

  const [debateId, setDebateId] = useState<string | null>(null);
  const [messages, setMessages] = useState<DebateMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(format ? format.timeLimit * 60 : 300);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [turnNumber, setTurnNumber] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [debateResult, setDebateResult] = useState<DebateResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  const maxTurns = 4;

  useEffect(() => {
    if (!opponent || !topic || !format) {
      setLocation("/practice");
      return;
    }

    const initDebate = async () => {
      try {
        const response = await apiRequest("POST", "/api/debates", {
          userId: user.id,
          opponentId: opponent.id,
          topicId: topic.id,
          formatId: format.id,
          userSide: side,
        });
        const debate = await response.json();
        setDebateId(debate.id);
      } catch (error) {
        console.error("Error creating debate:", error);
      } finally {
        setIsInitializing(false);
      }
    };

    initDebate();
  }, [opponent, topic, format, side, user.id, setLocation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: DebateMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: inputValue.trim(),
      turnNumber,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setIsTimerRunning(true);

    try {
      const response = await apiRequest("POST", "/api/debate/message", {
        message: userMessage.content,
        debateId,
        opponentId: opponent?.id,
        opponentTier: opponent?.tier,
        opponentPersonality: opponent?.personality,
        topic: topic?.title,
        side,
        turnNumber,
        previousMessages: messages,
      });

      const data = await response.json();
      
      const opponentMessage: DebateMessage = {
        id: `opponent-${Date.now()}`,
        role: "opponent",
        content: data.response,
        turnNumber,
      };

      setMessages((prev) => [...prev, opponentMessage]);
      setTurnNumber((prev) => prev + 1);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndDebate = async () => {
    setIsEvaluating(true);
    setIsTimerRunning(false);

    try {
      const response = await apiRequest("POST", "/api/debate/evaluate", {
        debateId,
        messages,
        opponentId: opponent?.id,
        opponentSkillRange: { min: opponent?.minSkill, max: opponent?.maxSkill },
        userSkillPoints: user.skillPoints,
        topic: topic?.title,
        side,
        format: format?.id,
      });

      const result = await response.json();
      
      setDebateResult(result);
      recordDebate(result.won, result.pointsChange);
      
      if (debateId && opponent && topic && format) {
        addDebateToHistory({
          id: debateId,
          date: new Date().toLocaleDateString(),
          opponentId: opponent.id,
          topicId: topic.id,
          formatId: format.id,
          result: result.won ? "win" : "loss",
          pointsChange: result.pointsChange,
          side,
        });
      }
      
      setShowResult(true);
    } catch (error) {
      console.error("Error evaluating debate:", error);
      const mockResult: DebateResult = {
        won: Math.random() > 0.5,
        pointsChange: Math.floor(Math.random() * 50) * (Math.random() > 0.5 ? 1 : -1),
        feedback: "Unable to evaluate debate. Please try again.",
        strengths: [],
        improvements: [],
      };
      setDebateResult(mockResult);
      recordDebate(mockResult.won, mockResult.pointsChange);
      
      if (debateId && opponent && topic && format) {
        addDebateToHistory({
          id: debateId,
          date: new Date().toLocaleDateString(),
          opponentId: opponent.id,
          topicId: topic.id,
          formatId: format.id,
          result: mockResult.won ? "win" : "loss",
          pointsChange: mockResult.pointsChange,
          side,
        });
      }
      
      setShowResult(true);
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!opponent || !topic || !format) {
    return null;
  }

  if (isInitializing) {
    return (
      <div className="h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Preparing your debate...</p>
        </div>
      </div>
    );
  }

  const progressPercent = (turnNumber / maxTurns) * 100;
  const isDebateComplete = turnNumber > maxTurns || timeRemaining === 0;

  return (
    <div className="h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setLocation("/practice")}
                data-testid="button-back"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Exit
              </Button>
              <div className="hidden sm:block">
                <p className="font-medium text-sm">{topic.title}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>vs {opponent.name}</span>
                  <span className="mx-1">|</span>
                  <span>{format.name}</span>
                  <span className="mx-1">|</span>
                  <Badge variant="outline" className="text-xs">
                    {side === "pro" ? "Pro" : "Con"}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Turn</p>
                <p className="font-mono font-bold">{Math.min(turnNumber, maxTurns)}/{maxTurns}</p>
              </div>
              
              <div className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg",
                timeRemaining < 60 ? "bg-destructive/10 text-destructive" : "bg-muted"
              )}>
                <Clock className="h-4 w-4" />
                <span className="font-mono font-bold text-lg">{formatTime(timeRemaining)}</span>
              </div>

              {!isDebateComplete && messages.length >= 2 && (
                <Button 
                  onClick={handleEndDebate} 
                  disabled={isEvaluating}
                  data-testid="button-end-debate"
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Evaluating...
                    </>
                  ) : (
                    "End Debate"
                  )}
                </Button>
              )}
            </div>
          </div>

          <Progress value={progressPercent} className="mt-3 h-1" />
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="container mx-auto px-4 h-full max-w-4xl">
          <ScrollArea className="h-full py-6">
            {messages.length === 0 && (
              <Card className="mb-6 border-dashed">
                <CardContent className="py-8 text-center">
                  <Bot className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Ready to Debate</h3>
                  <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                    You are arguing <strong>{side === "pro" ? "FOR" : "AGAINST"}</strong> the topic: 
                    <br />
                    <em>"{topic.title}"</em>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Make your opening argument to begin the debate.
                  </p>
                </CardContent>
              </Card>
            )}

            <div className="space-y-4 pb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.role === "opponent" && (
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                  
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-3",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium opacity-70">
                        {message.role === "user" ? "You" : opponent.name}
                      </span>
                      <span className="text-xs opacity-50">Turn {message.turnNumber}</span>
                    </div>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>

                  {message.role === "user" && (
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Bot className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="bg-muted rounded-lg px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm text-muted-foreground">{opponent.name} is responding...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </div>
      </div>

      {!isDebateComplete && (
        <div className="border-t bg-background p-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex gap-3">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your argument..."
                className="min-h-[80px] resize-none"
                disabled={isLoading}
                data-testid="input-message"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputValue.trim() || isLoading}
                className="h-auto"
                data-testid="button-send"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Press Enter to send, Shift+Enter for new line</span>
              <span>{inputValue.length} characters</span>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-2 text-2xl">
              {debateResult?.won ? (
                <>
                  <Trophy className="h-8 w-8 text-tier-intermediate" />
                  Victory!
                </>
              ) : (
                <>
                  <TrendingDown className="h-8 w-8 text-destructive" />
                  Defeat
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-center">
              Debate completed against {opponent?.name}
            </DialogDescription>
          </DialogHeader>

          {debateResult && (
            <div className="space-y-4 py-4">
              <div className="text-center">
                <p className={cn(
                  "text-4xl font-bold mb-1",
                  debateResult.pointsChange > 0 ? "text-tier-beginner" : "text-destructive"
                )}>
                  {debateResult.pointsChange > 0 ? "+" : ""}{debateResult.pointsChange}
                </p>
                <p className="text-sm text-muted-foreground">Skill Points</p>
              </div>

              <Card>
                <CardContent className="p-4">
                  <p className="text-sm leading-relaxed">{debateResult.feedback}</p>
                </CardContent>
              </Card>

              {debateResult.strengths.length > 0 && (
                <div>
                  <p className="font-medium text-sm mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-tier-beginner" />
                    Strengths
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                    {debateResult.strengths.map((s, i) => (
                      <li key={i} className="list-disc">{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {debateResult.improvements.length > 0 && (
                <div>
                  <p className="font-medium text-sm mb-2 flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-tier-intermediate" />
                    Areas to Improve
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                    {debateResult.improvements.map((s, i) => (
                      <li key={i} className="list-disc">{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={() => setLocation("/history")}
              data-testid="button-view-history"
            >
              View History
            </Button>
            <Button 
              onClick={() => setLocation("/practice")}
              data-testid="button-debate-again"
            >
              Debate Again
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
