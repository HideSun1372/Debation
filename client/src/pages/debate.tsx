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
import { AI_OPPONENTS, DEBATE_TOPICS, DEBATE_FORMATS, getSkillTier, type DebateSpeech } from "@shared/schema";
import { Send, Clock, User, Bot, Trophy, TrendingUp, TrendingDown, ArrowLeft, Loader2, Play, MessageSquare, Timer, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { apiRequest } from "@/lib/queryClient";

interface DebateMessage {
  id: string;
  role: "user" | "opponent";
  content: string;
  speechId: string;
  speechName: string;
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
  const customPrepTime = parseInt(params.get("prepTime") || "0");
  const customSpeechTimes: Record<string, number> = (() => {
    try { return JSON.parse(params.get("speechTimes") || "{}"); } 
    catch { return {}; }
  })();

  const opponent = AI_OPPONENTS.find((o) => o.id === opponentId);
  const topic = DEBATE_TOPICS.find((t) => t.id === topicId);
  const format = DEBATE_FORMATS.find((f) => f.id === formatId);
  
  const getSpeechTime = (speech: DebateSpeech): number => 
    customSpeechTimes[speech.id] ?? speech.defaultMinutes;
  
  const isUserSpeech = (speech: DebateSpeech): boolean => {
    if (side === "pro") return speech.speaker === "aff";
    return speech.speaker === "neg";
  };

  const [debateId, setDebateId] = useState<string | null>(null);
  const [messages, setMessages] = useState<DebateMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentSpeechIndex, setCurrentSpeechIndex] = useState(0);
  const [speechTimeRemaining, setSpeechTimeRemaining] = useState(0);
  const [prepTimeRemaining, setPrepTimeRemaining] = useState(0);
  const [isInPrepTime, setIsInPrepTime] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [debateResult, setDebateResult] = useState<DebateResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [showSpeechPanel, setShowSpeechPanel] = useState(true);
  
  // Cross-examination (CX) state
  const [isCxMode, setIsCxMode] = useState(false);
  const [cxQuestioner, setCxQuestioner] = useState<"user" | "opponent" | null>(null);
  const [cxAwaitingResponse, setCxAwaitingResponse] = useState(false);
  const [cxExchangeCount, setCxExchangeCount] = useState(0);
  const [cxStarted, setCxStarted] = useState(false); // Track if first question has been asked
  const [cxTimedOut, setCxTimedOut] = useState(false); // Track if CX should end due to timeout
  
  // Crossfire race state - who gets to ask first
  const [crossfireRacing, setCrossfireRacing] = useState(false);
  const [crossfireRaceWinner, setCrossfireRaceWinner] = useState<"user" | "opponent" | null>(null);
  const crossfireRaceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [crossfireCurrentQuestion, setCrossfireCurrentQuestion] = useState<string | null>(null);
  const [crossfireQuestionAsker, setCrossfireQuestionAsker] = useState<"user" | "opponent" | null>(null);
  const [isEvaluatingAnswer, setIsEvaluatingAnswer] = useState(false);
  
  const currentSpeech = format?.speeches[currentSpeechIndex];
  const isUserTurn = currentSpeech ? isUserSpeech(currentSpeech) : false;
  const isDebateComplete = format ? currentSpeechIndex >= format.speeches.length : false;
  const isCrossExamination = currentSpeech?.type === "cross-examination";
  const isCrossfire = currentSpeech?.type === "crossfire";

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
    if (format && currentSpeech) {
      setSpeechTimeRemaining(getSpeechTime(currentSpeech) * 60);
      setIsInPrepTime(false);
      
      // Initialize CX mode if this is a cross-examination speech
      if (currentSpeech.type === "cross-examination") {
        setIsCxMode(true);
        setCxExchangeCount(0);
        // In CX, the speaker listed is the questioner (who asks questions)
        const questioner = isUserSpeech(currentSpeech) ? "user" : "opponent";
        setCxQuestioner(questioner);
        setCxAwaitingResponse(false);
        // If user is questioner, CX starts immediately; otherwise wait for opponent's first question
        setCxStarted(questioner === "user");
        setIsTimerRunning(true); // Timer always runs during CX
      } else {
        setIsCxMode(false);
        setCxQuestioner(null);
        setCxStarted(false);
        
        if (isUserSpeech(currentSpeech)) {
          setIsTimerRunning(true);
        }
      }
    }
  }, [currentSpeechIndex, format]);

  useEffect(() => {
    if (customPrepTime > 0) {
      setPrepTimeRemaining(customPrepTime * 60);
    }
  }, [customPrepTime]);

  useEffect(() => {
    // Timer runs when: it's user's turn, OR we're in CX mode (regardless of questioner role)
    const shouldRun = isTimerRunning && !isLoading && !isDebateComplete && (isUserTurn || isCxMode);
    if (!shouldRun) return;
    
    const interval = setInterval(() => {
      if (isInPrepTime) {
        setPrepTimeRemaining(prev => {
          if (prev <= 1) {
            setIsInPrepTime(false);
            return 0;
          }
          return prev - 1;
        });
      } else {
        setSpeechTimeRemaining(prev => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, isLoading, isUserTurn, isDebateComplete, isInPrepTime, isCxMode]);

  // Auto-end CX when timer runs out
  useEffect(() => {
    if (isCxMode && speechTimeRemaining <= 0 && !cxTimedOut && !isLoading) {
      setCxTimedOut(true);
    }
  }, [isCxMode, speechTimeRemaining, cxTimedOut, isLoading]);

  // Handle crossfire race result
  useEffect(() => {
    if (crossfireRaceWinner && crossfireRacing && currentSpeech) {
      setCrossfireRacing(false);
      setCxStarted(true);
      setIsCxMode(true);
      setCxQuestioner(null); // Crossfire - both can ask
      setCrossfireQuestionAsker(crossfireRaceWinner);
      
      if (crossfireRaceWinner === "opponent") {
        // AI won - trigger AI's question
        const triggerAiQuestion = async () => {
          setIsLoading(true);
          try {
            const response = await apiRequest("POST", "/api/debate/message", {
              message: null,
              debateId,
              opponentId: opponent?.id,
              opponentTier: opponent?.tier,
              opponentPersonality: opponent?.personality,
              topic: topic?.title,
              side,
              speechId: currentSpeech.id,
              speechName: currentSpeech.name,
              speechType: currentSpeech.type,
              cxIntent: "crossfire-start",
              previousMessages: messages,
            });

            const data = await response.json();
            
            const opponentMessage: DebateMessage = {
              id: `opponent-cf-${Date.now()}`,
              role: "opponent",
              content: data.response,
              speechId: currentSpeech.id,
              speechName: currentSpeech.name,
            };

            setMessages((prev) => [...prev, opponentMessage]);
            setCrossfireCurrentQuestion(data.response);
            setCxExchangeCount(prev => prev + 1);
          } catch (error) {
            console.error("Error getting AI crossfire question:", error);
          } finally {
            setIsLoading(false);
          }
        };
        triggerAiQuestion();
      }
      // If user won, they type their question - track it when they send
    }
  }, [crossfireRaceWinner, crossfireRacing]);

  // User claims first question in crossfire race
  const handleClaimFirstQuestion = () => {
    if (crossfireRacing && !crossfireRaceWinner) {
      // Clear AI's pending timeout
      if (crossfireRaceTimeoutRef.current) {
        clearTimeout(crossfireRaceTimeoutRef.current);
        crossfireRaceTimeoutRef.current = null;
      }
      setCrossfireRaceWinner("user");
    }
  };

  // Start a new crossfire race (for subsequent questions after the first)
  const startCrossfireRace = () => {
    if (!currentSpeech || speechTimeRemaining <= 0) return;
    
    setCrossfireRacing(true);
    setCrossfireRaceWinner(null);
    setCrossfireCurrentQuestion(null);
    setCrossfireQuestionAsker(null);
    
    // Calculate AI reaction time based on skill tier
    const tierDelays: Record<string, [number, number]> = {
      beginner: [2000, 4000],
      intermediate: [1500, 3000],
      advanced: [1000, 2000],
      expert: [500, 1500],
      master: [300, 1000],
    };
    const [minDelay, maxDelay] = tierDelays[opponent?.tier || "beginner"] || [2000, 4000];
    const aiReactionTime = minDelay + Math.random() * (maxDelay - minDelay);
    
    // Set up AI's attempt to claim question
    crossfireRaceTimeoutRef.current = setTimeout(() => {
      setCrossfireRaceWinner("opponent");
    }, aiReactionTime);
  };

  // Evaluate if a crossfire answer is complete
  const evaluateCrossfireAnswer = async (question: string, answer: string) => {
    if (!topic) return true;
    
    setIsEvaluatingAnswer(true);
    try {
      const response = await apiRequest("POST", "/api/debate/crossfire/evaluate", {
        question,
        answer,
        topic: topic.title,
        context: messages.slice(-4).map(m => `${m.role}: ${m.content}`).join("\n"),
      });
      
      const result = await response.json();
      return result.isComplete;
    } catch (error) {
      console.error("Error evaluating crossfire answer:", error);
      return true; // Default to complete on error
    } finally {
      setIsEvaluatingAnswer(false);
    }
  };

  const handleRequestPrepTime = () => {
    if (prepTimeRemaining > 0 && !isInPrepTime) {
      setIsInPrepTime(true);
    }
  };

  const handleResumeSpeech = () => {
    setIsInPrepTime(false);
  };

  // Trigger opponent's regular speech OR first CX question if opponent is questioner
  useEffect(() => {
    if (!isInitializing && !isLoading && format && currentSpeech && !isDebateComplete) {
      const speechToDeliver = currentSpeech;
      const indexToAdvance = currentSpeechIndex;
      const isCxSpeech = speechToDeliver.type === "cross-examination";
      const isCfSpeech = speechToDeliver.type === "crossfire";
      const isOpponentSpeech = !isUserSpeech(speechToDeliver);
      
      // Handle Crossfire: Start a race to see who asks the first question
      if (isCfSpeech && !cxStarted && !crossfireRacing) {
        setCrossfireRacing(true);
        setCrossfireRaceWinner(null);
        setIsTimerRunning(true);
        
        // Calculate AI reaction time based on skill tier
        // Beginner: 2-4 seconds, Intermediate: 1.5-3s, Advanced: 1-2s, Expert: 0.5-1.5s, Master: 0.3-1s
        const tierDelays: Record<string, [number, number]> = {
          beginner: [2000, 4000],
          intermediate: [1500, 3000],
          advanced: [1000, 2000],
          expert: [500, 1500],
          master: [300, 1000],
        };
        const [minDelay, maxDelay] = tierDelays[opponent?.tier || "beginner"] || [2000, 4000];
        const aiReactionTime = minDelay + Math.random() * (maxDelay - minDelay);
        
        // Set up AI's attempt to claim first question
        crossfireRaceTimeoutRef.current = setTimeout(() => {
          // AI wins the race if user hasn't clicked yet
          if (crossfireRacing && !crossfireRaceWinner) {
            setCrossfireRaceWinner("opponent");
          }
        }, aiReactionTime);
        
        return;
      }
      
      // Handle CX mode: user is questioner - set up CX mode and wait for user to ask
      if (isCxSpeech && !isOpponentSpeech && !cxStarted) {
        setCxStarted(true);
        setIsCxMode(true);
        setCxQuestioner("user");
        setIsTimerRunning(true);
        setCxExchangeCount(0);
        // Don't trigger AI - wait for user to ask first question
        return;
      }
      
      // Handle CX mode: opponent is questioner and needs to ask first question
      // Check directly from speech type to avoid race conditions with state
      if (isCxSpeech && isOpponentSpeech && !cxStarted) {
        const triggerCxQuestion = async () => {
          setIsLoading(true);
          setIsTimerRunning(true);
          setCxStarted(true); // Mark CX as started to prevent re-triggering
          setIsCxMode(true);
          setCxQuestioner("opponent");
          try {
            const response = await apiRequest("POST", "/api/debate/message", {
              message: null,
              debateId,
              opponentId: opponent?.id,
              opponentTier: opponent?.tier,
              opponentPersonality: opponent?.personality,
              topic: topic?.title,
              side,
              speechId: speechToDeliver.id,
              speechName: speechToDeliver.name,
              speechType: speechToDeliver.type,
              cxIntent: "cx-question",
              previousMessages: messages,
            });

            const data = await response.json();
            
            const opponentMessage: DebateMessage = {
              id: `opponent-cx-${Date.now()}`,
              role: "opponent",
              content: data.response,
              speechId: speechToDeliver.id,
              speechName: speechToDeliver.name,
            };

            setMessages((prev) => [...prev, opponentMessage]);
            setCxAwaitingResponse(true);
            setCxExchangeCount(1);
          } catch (error) {
            console.error("Error getting CX question:", error);
          } finally {
            setIsLoading(false);
          }
        };
        
        triggerCxQuestion();
        return;
      }
      
      // Handle regular opponent speech (non-CX, non-crossfire)
      if (isOpponentSpeech && !isCxSpeech && !isCfSpeech) {
        const triggerOpponentSpeech = async () => {
          setIsLoading(true);
          
          try {
            const response = await apiRequest("POST", "/api/debate/message", {
              message: null,
              debateId,
              opponentId: opponent?.id,
              opponentTier: opponent?.tier,
              opponentPersonality: opponent?.personality,
              topic: topic?.title,
              side,
              speechId: speechToDeliver.id,
              speechName: speechToDeliver.name,
              speechType: speechToDeliver.type,
              previousMessages: messages,
            });

            const data = await response.json();
            
            const opponentMessage: DebateMessage = {
              id: `opponent-${Date.now()}`,
              role: "opponent",
              content: data.response,
              speechId: speechToDeliver.id,
              speechName: speechToDeliver.name,
            };

            setMessages((prev) => [...prev, opponentMessage]);
            setCurrentSpeechIndex(indexToAdvance + 1);
          } catch (error) {
            console.error("Error getting opponent speech:", error);
          } finally {
            setIsLoading(false);
          }
        };
        
        triggerOpponentSpeech();
      }
    }
  }, [isInitializing, isLoading, currentSpeechIndex, isDebateComplete, cxStarted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const advanceToNextSpeech = () => {
    if (format && currentSpeechIndex < format.speeches.length) {
      setCurrentSpeechIndex(prev => prev + 1);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading || !currentSpeech || !format) return;

    const userMessage: DebateMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: inputValue.trim(),
      speechId: currentSpeech.id,
      speechName: currentSpeech.name,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Handle CX/Crossfire mode interactions
      if (isCxMode) {
        if (cxQuestioner === null && isCrossfire) {
          // Crossfire mode with race system
          
          if (crossfireQuestionAsker === "user") {
            // User asked a question, this is the AI's answer
            setCrossfireCurrentQuestion(userMessage.content);
            
            const response = await apiRequest("POST", "/api/debate/message", {
              message: userMessage.content,
              debateId,
              opponentId: opponent?.id,
              opponentTier: opponent?.tier,
              opponentPersonality: opponent?.personality,
              topic: topic?.title,
              side,
              speechId: currentSpeech.id,
              speechName: currentSpeech.name,
              speechType: currentSpeech.type,
              cxIntent: "cx-answer", // AI answers user's question
              previousMessages: messages.concat(userMessage),
            });

            const data = await response.json();
            
            const opponentMessage: DebateMessage = {
              id: `opponent-cf-${Date.now()}`,
              role: "opponent",
              content: data.response,
              speechId: currentSpeech.id,
              speechName: currentSpeech.name,
            };

            setMessages((prev) => [...prev, opponentMessage]);
            setCxExchangeCount(prev => prev + 1);
            
            // Evaluate if answer is complete, then start new race
            const isComplete = await evaluateCrossfireAnswer(userMessage.content, data.response);
            if (isComplete && speechTimeRemaining > 0) {
              // Small delay then start new race
              setTimeout(() => startCrossfireRace(), 500);
            }
          } else if (crossfireQuestionAsker === "opponent") {
            // AI asked a question, user is answering
            const response = await apiRequest("POST", "/api/debate/message", {
              message: userMessage.content,
              debateId,
              opponentId: opponent?.id,
              opponentTier: opponent?.tier,
              opponentPersonality: opponent?.personality,
              topic: topic?.title,
              side,
              speechId: currentSpeech.id,
              speechName: currentSpeech.name,
              speechType: currentSpeech.type,
              cxIntent: "crossfire-exchange", // AI may respond to user's answer
              previousMessages: messages.concat(userMessage),
            });

            const data = await response.json();
            
            const opponentMessage: DebateMessage = {
              id: `opponent-cf-${Date.now()}`,
              role: "opponent",
              content: data.response,
              speechId: currentSpeech.id,
              speechName: currentSpeech.name,
            };

            setMessages((prev) => [...prev, opponentMessage]);
            setCxExchangeCount(prev => prev + 1);
            
            // Evaluate if user's answer is complete
            const isComplete = await evaluateCrossfireAnswer(crossfireCurrentQuestion || "", userMessage.content);
            if (isComplete && speechTimeRemaining > 0) {
              // Start new race for next question
              setTimeout(() => startCrossfireRace(), 500);
            }
          } else {
            // No question asker set yet (shouldn't happen, but fallback)
            setCrossfireQuestionAsker("user");
            setCrossfireCurrentQuestion(userMessage.content);
            
            const response = await apiRequest("POST", "/api/debate/message", {
              message: userMessage.content,
              debateId,
              opponentId: opponent?.id,
              opponentTier: opponent?.tier,
              opponentPersonality: opponent?.personality,
              topic: topic?.title,
              side,
              speechId: currentSpeech.id,
              speechName: currentSpeech.name,
              speechType: currentSpeech.type,
              cxIntent: "cx-answer",
              previousMessages: messages.concat(userMessage),
            });

            const data = await response.json();
            
            const opponentMessage: DebateMessage = {
              id: `opponent-cf-${Date.now()}`,
              role: "opponent",
              content: data.response,
              speechId: currentSpeech.id,
              speechName: currentSpeech.name,
            };

            setMessages((prev) => [...prev, opponentMessage]);
            setCxExchangeCount(prev => prev + 1);
            // Start a new race
            if (speechTimeRemaining > 0) {
              setTimeout(() => startCrossfireRace(), 500);
            }
          }
        } else if (cxQuestioner === "opponent") {
          // User is answering opponent's question - AI asks follow-up
          setCxAwaitingResponse(false);
          
          const response = await apiRequest("POST", "/api/debate/message", {
            message: userMessage.content,
            debateId,
            opponentId: opponent?.id,
            opponentTier: opponent?.tier,
            opponentPersonality: opponent?.personality,
            topic: topic?.title,
            side,
            speechId: currentSpeech.id,
            speechName: currentSpeech.name,
            speechType: currentSpeech.type,
            cxIntent: "cx-followup",
            previousMessages: messages.concat(userMessage),
          });

          const data = await response.json();
          
          const opponentMessage: DebateMessage = {
            id: `opponent-cx-${Date.now()}`,
            role: "opponent",
            content: data.response,
            speechId: currentSpeech.id,
            speechName: currentSpeech.name,
          };

          setMessages((prev) => [...prev, opponentMessage]);
          setCxAwaitingResponse(true);
          setCxExchangeCount(prev => prev + 1);
        } else {
          // User is the questioner (cxQuestioner === "user") - AI needs to answer
          const response = await apiRequest("POST", "/api/debate/message", {
            message: userMessage.content,
            debateId,
            opponentId: opponent?.id,
            opponentTier: opponent?.tier,
            opponentPersonality: opponent?.personality,
            topic: topic?.title,
            side,
            speechId: currentSpeech.id,
            speechName: currentSpeech.name,
            speechType: currentSpeech.type,
            cxIntent: "cx-answer",
            previousMessages: messages.concat(userMessage),
          });

          const data = await response.json();
          
          const opponentMessage: DebateMessage = {
            id: `opponent-cx-${Date.now()}`,
            role: "opponent",
            content: data.response,
            speechId: currentSpeech.id,
            speechName: currentSpeech.name,
          };

          setMessages((prev) => [...prev, opponentMessage]);
          setCxExchangeCount(prev => prev + 1);
          // User can ask another question (no awaiting state change needed)
        }
      } else {
        // Regular speech flow (non-CX)
        const newSpeechIndex = currentSpeechIndex + 1;
        setCurrentSpeechIndex(newSpeechIndex);

        const nextSpeech = format.speeches[newSpeechIndex];
        const nextIsCxOrCf = nextSpeech?.type === "cross-examination" || nextSpeech?.type === "crossfire";
        const shouldAIRespond = nextSpeech && !isUserSpeech(nextSpeech) && !nextIsCxOrCf;

        // If next speech is CX, let the useEffect handle it
        if (shouldAIRespond && nextSpeech) {
          const response = await apiRequest("POST", "/api/debate/message", {
            message: userMessage.content,
            debateId,
            opponentId: opponent?.id,
            opponentTier: opponent?.tier,
            opponentPersonality: opponent?.personality,
            topic: topic?.title,
            side,
            speechId: nextSpeech.id,
            speechName: nextSpeech.name,
            speechType: nextSpeech.type,
            previousMessages: messages.concat(userMessage),
          });

          const data = await response.json();
          
          const opponentMessage: DebateMessage = {
            id: `opponent-${Date.now()}`,
            role: "opponent",
            content: data.response,
            speechId: nextSpeech.id,
            speechName: nextSpeech.name,
          };

          setMessages((prev) => [...prev, opponentMessage]);
          setCurrentSpeechIndex(newSpeechIndex + 1);
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle advancing from CX to next speech when user clicks End CX
  const handleEndCx = async () => {
    if (!currentSpeech) return;
    
    setIsTimerRunning(false);
    setIsLoading(true);
    
    try {
      // Generate a brief CX summary/transition message
      const response = await apiRequest("POST", "/api/debate/message", {
        message: null,
        debateId,
        opponentId: opponent?.id,
        opponentTier: opponent?.tier,
        opponentPersonality: opponent?.personality,
        topic: topic?.title,
        side,
        speechId: currentSpeech.id,
        speechName: currentSpeech.name,
        speechType: currentSpeech.type,
        cxIntent: "cx-timeout",
        cxExchangeCount,
        previousMessages: messages,
      });

      const data = await response.json();
      
      if (data.response) {
        const transitionMessage: DebateMessage = {
          id: `system-${Date.now()}`,
          role: "opponent",
          content: data.response,
          speechId: currentSpeech.id,
          speechName: currentSpeech.name,
        };
        setMessages((prev) => [...prev, transitionMessage]);
      }
    } catch (error) {
      console.error("Error ending CX:", error);
    } finally {
      setIsLoading(false);
      setIsCxMode(false);
      setCxStarted(false);
      setCxAwaitingResponse(false);
      setCxTimedOut(false);
      setCurrentSpeechIndex(prev => prev + 1);
    }
  };

  // Effect to handle CX timeout - calls handleEndCx when timer expires
  useEffect(() => {
    if (cxTimedOut && isCxMode && !isLoading) {
      handleEndCx();
    }
  }, [cxTimedOut, isCxMode, isLoading]);

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

  const progressPercent = format ? (currentSpeechIndex / format.speeches.length) * 100 : 0;

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
                <p className="text-xs text-muted-foreground mb-1">Speech</p>
                <p className="font-mono font-bold">{Math.min(currentSpeechIndex + 1, format.speeches.length)}/{format.speeches.length}</p>
              </div>
              
              {currentSpeech && !isInPrepTime && (
                <div className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  speechTimeRemaining < 60 ? "bg-destructive/10 text-destructive animate-pulse" : 
                  speechTimeRemaining < 120 ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" : "bg-muted"
                )}>
                  <Clock className="h-4 w-4" />
                  <span className="font-mono font-bold text-lg">{formatTime(speechTimeRemaining)}</span>
                  <span className="text-xs text-muted-foreground">Speech</span>
                </div>
              )}
              
              {isInPrepTime && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-tier-intermediate/20 border border-tier-intermediate/40 animate-pulse">
                  <Timer className="h-4 w-4 text-tier-intermediate" />
                  <span className="font-mono font-bold text-lg text-tier-intermediate">{formatTime(prepTimeRemaining)}</span>
                  <span className="text-xs text-muted-foreground">Prep</span>
                </div>
              )}
              
              {!isInPrepTime && prepTimeRemaining > 0 && isUserTurn && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleRequestPrepTime}
                  className="border-tier-intermediate/50 text-tier-intermediate hover:bg-tier-intermediate/10"
                  data-testid="button-request-prep"
                >
                  <Timer className="h-4 w-4 mr-1" />
                  Prep ({formatTime(prepTimeRemaining)})
                </Button>
              )}

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
            {messages.length === 0 && currentSpeech && (
              <Card className="mb-6 border-dashed">
                <CardContent className="py-8 text-center">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Ready to Debate</h3>
                  <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                    You are arguing <strong>{side === "pro" ? "FOR (Affirmative)" : "AGAINST (Negative)"}</strong> the topic: 
                    <br />
                    <em>"{topic.title}"</em>
                  </p>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg inline-block">
                    <p className="text-sm font-medium mb-1">First Speech: {currentSpeech.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {isUserTurn ? "You speak first - present your opening argument below" : `${opponent?.name} will speak first`}
                    </p>
                  </div>
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
                      <span className="text-xs opacity-50">{message.speechName}</span>
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

      {!isDebateComplete && currentSpeech && (
        <div className="border-t bg-background">
          {crossfireRacing ? (
            <div className="p-4">
              <div className="container mx-auto max-w-4xl">
                <div className="p-6 rounded-lg bg-purple-500/10 border border-purple-500/30 text-center">
                  <p className="font-medium text-lg mb-2">Crossfire Starting!</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Race to ask the first question - click the button before your opponent!
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      size="lg"
                      onClick={handleClaimFirstQuestion}
                      disabled={!!crossfireRaceWinner}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-6 text-lg animate-pulse"
                      data-testid="button-claim-first-question"
                    >
                      {crossfireRaceWinner === "user" ? "You got it!" : 
                       crossfireRaceWinner === "opponent" ? `${opponent?.name} was faster!` :
                       "Claim First Question!"}
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Clock className="h-3 w-3" />
                      {formatTime(speechTimeRemaining)}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ) : (isUserTurn || isCxMode) ? (
            <div className="p-4">
              <div className="container mx-auto max-w-4xl">
                <div className={cn(
                  "mb-3 p-3 rounded-lg flex items-center justify-between gap-4",
                  isCxMode ? "bg-purple-500/10 border border-purple-500/30" :
                  isInPrepTime ? "bg-tier-intermediate/10 border border-tier-intermediate/30" :
                  speechTimeRemaining <= 0 ? "bg-destructive/10 border border-destructive/30" :
                  "bg-tier-beginner/10 border border-tier-beginner/30"
                )}>
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                      isCxMode ? "bg-purple-500 text-white" :
                      isInPrepTime ? "bg-tier-intermediate text-white" :
                      speechTimeRemaining <= 0 ? "bg-destructive text-white" :
                      "bg-tier-beginner text-white"
                    )}>
                      {currentSpeechIndex + 1}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{currentSpeech.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {isCxMode 
                          ? (cxQuestioner === null 
                              ? "Crossfire - both sides can ask and answer questions"
                              : cxQuestioner === "user" 
                              ? "You're the questioner - ask one question at a time" 
                              : "Answer the question, then wait for the next one")
                          : isInPrepTime ? "Prep time - speech timer paused" 
                          : speechTimeRemaining <= 0 ? "Time expired! Submit now or use prep time" 
                          : currentSpeech.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCxMode && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={handleEndCx}
                        disabled={isLoading}
                        data-testid="button-end-cx"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        End CX
                      </Button>
                    )}
                    {isInPrepTime && (
                      <Button 
                        size="sm" 
                        onClick={handleResumeSpeech}
                        className="bg-tier-intermediate hover:bg-tier-intermediate/90"
                        data-testid="button-resume-speech"
                      >
                        Resume Speech
                      </Button>
                    )}
                    <Badge variant="outline" className={cn(
                      "gap-1",
                      speechTimeRemaining <= 0 && !isInPrepTime && "border-destructive text-destructive"
                    )}>
                      <Clock className="h-3 w-3" />
                      {formatTime(speechTimeRemaining)}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={
                      isCxMode 
                        ? (cxQuestioner === null 
                            ? "Ask a question or respond..." 
                            : cxQuestioner === "user" 
                            ? "Ask your question..." 
                            : "Type your answer...") 
                        : isInPrepTime ? "Take your time to prepare your argument..." 
                        : `Your ${currentSpeech.name}...`
                    }
                    className="min-h-[80px] resize-none"
                    disabled={isLoading || (speechTimeRemaining <= 0 && !isInPrepTime && prepTimeRemaining <= 0 && !isCxMode)}
                    data-testid="input-message"
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={!inputValue.trim() || isLoading || (speechTimeRemaining <= 0 && !isInPrepTime && prepTimeRemaining <= 0 && !isCxMode)}
                    className="h-auto"
                    data-testid="button-send"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>
                    {speechTimeRemaining <= 0 && !isInPrepTime && prepTimeRemaining > 0 
                      ? "Click 'Prep' button above to get more time" 
                      : "Press Enter to send, Shift+Enter for new line"}
                  </span>
                  <span>{inputValue.length} characters</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4">
              <div className="container mx-auto max-w-4xl">
                <div className="p-4 rounded-lg bg-muted/50 border border-dashed flex items-center justify-center gap-3">
                  <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  <div className="text-center">
                    <p className="font-medium text-sm">Waiting for {opponent?.name}'s {currentSpeech.name}</p>
                    <p className="text-xs text-muted-foreground">{currentSpeech.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
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
