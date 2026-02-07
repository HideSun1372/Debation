import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUser } from "@/lib/user-context";
import { AI_OPPONENTS, DEBATE_TOPICS, DEBATE_FORMATS, getSkillTier, type AIOpponent, type DebateFormatConfig, type DebateSpeech } from "@shared/schema";
import { Swords, User, Target, ArrowRight, Clock, Circle, Hexagon, Star, Crown, Settings, ChevronDown, Users, Timer, MessageSquare, Shuffle, Gavel, Mic, MicOff, UserPlus, Link2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { apiUrl } from "@/lib/api-config";
import { useToast } from "@/hooks/use-toast";

const tierIcons = {
  BEGINNER: Circle,
  INTERMEDIATE: Hexagon,
  ADVANCED: Star,
  MASTER: Crown,
};

const tierColors = {
  BEGINNER: "border-tier-beginner/30 hover:border-tier-beginner/50",
  INTERMEDIATE: "border-tier-intermediate/30 hover:border-tier-intermediate/50",
  ADVANCED: "border-tier-advanced/30 hover:border-tier-advanced/50",
  MASTER: "border-tier-master/30 hover:border-tier-master/50",
};

const tierBgColors = {
  BEGINNER: "bg-tier-beginner/10",
  INTERMEDIATE: "bg-tier-intermediate/10",
  ADVANCED: "bg-tier-advanced/10",
  MASTER: "bg-tier-master/10",
};

const tierTextColors = {
  BEGINNER: "text-tier-beginner",
  INTERMEDIATE: "text-tier-intermediate",
  ADVANCED: "text-tier-advanced",
  MASTER: "text-tier-master",
};

export default function Practice() {
  const { user } = useUser();
  const { toast } = useToast();
  const userTier = getSkillTier(user.skillPoints);

  const [practiceMode, setPracticeMode] = useState<"ai" | "friend">("ai");
  const [friendUsername, setFriendUsername] = useState("");
  const [friendChallengeResult, setFriendChallengeResult] = useState<{ message: string } | null>(null);
  const [friendChallengeLoading, setFriendChallengeLoading] = useState(false);

  const [step, setStep] = useState<"opponent" | "format" | "topic" | "side">("opponent");
  const [selectedOpponent, setSelectedOpponent] = useState<AIOpponent | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedSide, setSelectedSide] = useState<"pro" | "con" | "random">("pro");
  const [selectedJudgeType, setSelectedJudgeType] = useState<"lay" | "traditional" | "circuit" | "random">("traditional");
  const [voiceMode, setVoiceMode] = useState(false);
  const [filterTier, setFilterTier] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  
  const [showTimeSettings, setShowTimeSettings] = useState(false);
  const [prepTime, setPrepTime] = useState<number>(4);
  const [speechTimes, setSpeechTimes] = useState<Record<string, number>>({});
  const [expandedFormat, setExpandedFormat] = useState<string | null>(null);
  
  const getFormat = (id: string): DebateFormatConfig | undefined => 
    DEBATE_FORMATS.find(f => f.id === id);
    
  const getSpeechTime = (speechId: string, defaultMinutes: number): number => 
    speechTimes[speechId] ?? defaultMinutes;
    
  const updateSpeechTime = (speechId: string, minutes: number) => {
    setSpeechTimes(prev => ({ ...prev, [speechId]: minutes }));
  };
  
  const resetToDefaults = (format: DebateFormatConfig) => {
    setPrepTime(format.defaultPrepMinutes);
    const defaults: Record<string, number> = {};
    format.speeches.forEach(s => { defaults[s.id] = s.defaultMinutes; });
    setSpeechTimes(defaults);
  };
  
  const getTotalDebateTime = (): number => {
    const format = getFormat(selectedFormat);
    if (!format) return 0;
    return format.speeches.reduce((sum, s) => sum + getSpeechTime(s.id, s.defaultMinutes), 0);
  };

  const filteredOpponents = AI_OPPONENTS.filter((opp) => {
    if (filterTier === "all") return true;
    return opp.tier === filterTier;
  });

  const categories = Array.from(new Set(DEBATE_TOPICS.map((t) => t.category)));
  
  const filteredTopics = DEBATE_TOPICS.filter((topic) => {
    if (filterCategory === "all") return true;
    return topic.category === filterCategory;
  });

  const handleStartDebate = () => {
    if (!selectedOpponent || !selectedFormat || !selectedTopic) return;
    
    const actualSide = selectedSide === "random" 
      ? (Math.random() > 0.5 ? "pro" : "con") 
      : selectedSide;
    
    const actualJudgeType = selectedJudgeType === "random"
      ? (["lay", "traditional", "circuit"][Math.floor(Math.random() * 3)] as "lay" | "traditional" | "circuit")
      : selectedJudgeType;
    
    const params = new URLSearchParams({
      opponent: selectedOpponent.id,
      format: selectedFormat,
      topic: selectedTopic,
      side: actualSide,
      judgeType: actualJudgeType,
      prepTime: prepTime.toString(),
      speechTimes: JSON.stringify(speechTimes),
      voiceMode: voiceMode.toString(),
    });
    
    window.location.href = `/debate?${params.toString()}`;
  };
  
  const handleFormatSelect = (formatId: string) => {
    const format = getFormat(formatId);
    if (format) {
      setSelectedFormat(formatId);
      setPrepTime(format.defaultPrepMinutes);
      const defaults: Record<string, number> = {};
      format.speeches.forEach(s => { defaults[s.id] = s.defaultMinutes; });
      setSpeechTimes(defaults);
    }
  };

  const getRecommendedOpponents = () => {
    return AI_OPPONENTS.filter(
      (opp) => user.skillPoints >= opp.minSkill - 100 && user.skillPoints <= opp.maxSkill + 100
    ).slice(0, 3);
  };

  const recommendedOpponents = getRecommendedOpponents();

  const handleCreateFriendChallenge = async () => {
    if (!friendUsername.trim() || !selectedFormat || !selectedTopic) return;
    setFriendChallengeLoading(true);
    try {
      const res = await fetch(apiUrl("/api/debates/request"), {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: friendUsername.trim(),
          topicId: selectedTopic,
          formatId: selectedFormat,
          userSide: selectedSide === "random" ? "pro" : selectedSide,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send request");
      setFriendChallengeResult({ message: data.message || `Debate request sent to ${friendUsername}` });
      toast({ title: "Request sent", description: data.message });
    } catch (e) {
      toast({ title: "Error", description: (e as Error).message, variant: "destructive" });
    } finally {
      setFriendChallengeLoading(false);
    }
  };

  // Poll for accepted debate request so challenger auto-redirects when friend accepts
  const sentRequestPollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (!friendChallengeResult) return;
    sentRequestPollRef.current = setInterval(async () => {
      try {
        const res = await fetch(apiUrl("/api/debates/requests/sent"), { credentials: "include" });
        if (!res.ok) return;
        const sent: Array<{ status: string; debateUrl?: string }> = await res.json();
        const accepted = sent.find((r) => r.status === "accepted" && r.debateUrl);
        if (accepted?.debateUrl) {
          if (sentRequestPollRef.current) {
            clearInterval(sentRequestPollRef.current);
            sentRequestPollRef.current = null;
          }
          window.location.href = accepted.debateUrl;
        }
      } catch {
        // ignore
      }
    }, 3000);
    return () => {
      if (sentRequestPollRef.current) {
        clearInterval(sentRequestPollRef.current);
      }
    };
  }, [friendChallengeResult]);

  if (friendChallengeResult) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-primary" />
              Request Sent
            </CardTitle>
            <CardDescription>
              {friendChallengeResult.message}. Your friend will receive a request they can accept or decline. You will be redirected automatically when they accept.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => { setFriendChallengeResult(null); setStep("opponent"); }}>
              Send Another Request
            </Button>
            <a href="/profile" className="ml-2">
              <Button variant="outline">Go to Profile</Button>
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Play Debate</h1>
        <p className="text-muted-foreground text-lg">
          Choose your opponent, format, and topic to begin a debate session.
        </p>
        <Tabs value={practiceMode} onValueChange={(v) => { setPracticeMode(v as "ai" | "friend"); setStep("opponent"); setSelectedOpponent(null); setFriendUsername(""); }} className="mt-4">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="ai" className="gap-2">
              <User className="h-4 w-4" />
              AI Opponent
            </TabsTrigger>
            <TabsTrigger value="friend" className="gap-2">
              <UserPlus className="h-4 w-4" />
              Friend Challenge
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {["opponent", "format", "topic", "side"].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <Button
              variant={step === s ? "default" : "secondary"}
              size="sm"
              onClick={() => setStep(s as typeof step)}
              disabled={
                (s === "format" && (practiceMode === "ai" ? !selectedOpponent : !friendUsername.trim())) ||
                (s === "topic" && !selectedFormat) ||
                (s === "side" && !selectedTopic)
              }
              data-testid={`button-step-${s}`}
            >
              {i + 1}. {s.charAt(0).toUpperCase() + s.slice(1)}
            </Button>
            {i < 3 && <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
          </div>
        ))}
      </div>

      {step === "opponent" && (
        <div className="space-y-6">
          {practiceMode === "friend" ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  Challenge a Friend
                </CardTitle>
                <CardDescription>
                  Enter your friend's username to invite them to a debate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 max-w-md">
                  <Input
                    placeholder="Friend's username"
                    value={friendUsername}
                    onChange={(e) => setFriendUsername(e.target.value)}
                    data-testid="input-friend-username"
                  />
                  <Button
                    onClick={() => setStep("format")}
                    disabled={!friendUsername.trim()}
                    data-testid="button-friend-continue"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : recommendedOpponents.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Recommended for You
                </CardTitle>
                <CardDescription>
                  Opponents matched to your current skill level ({user.skillPoints} points)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-4">
                  {recommendedOpponents.map((opp) => {
                    const Icon = tierIcons[opp.tier];
                    return (
                      <Card
                        key={opp.id}
                        className={cn(
                          "cursor-pointer transition-all",
                          tierColors[opp.tier],
                          selectedOpponent?.id === opp.id && "ring-2 ring-primary"
                        )}
                        onClick={() => setSelectedOpponent(opp)}
                        data-testid={`card-opponent-${opp.id}`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", tierBgColors[opp.tier])}>
                              <Icon className={cn("h-5 w-5", tierTextColors[opp.tier])} />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{opp.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {opp.minSkill}-{opp.maxSkill === Infinity ? "∞" : opp.maxSkill} pts
                              </p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">{opp.personality}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5" />
                  All Opponents
                </CardTitle>
                <CardDescription>Browse all AI opponents by skill tier</CardDescription>
              </div>
              <Select value={filterTier} onValueChange={setFilterTier}>
                <SelectTrigger className="w-40" data-testid="select-filter-tier">
                  <SelectValue placeholder="Filter by tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tiers</SelectItem>
                  <SelectItem value="BEGINNER">Beginner</SelectItem>
                  <SelectItem value="INTERMEDIATE">Intermediate</SelectItem>
                  <SelectItem value="ADVANCED">Advanced</SelectItem>
                  <SelectItem value="MASTER">Master</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2">
                {filteredOpponents.map((opp) => {
                  const Icon = tierIcons[opp.tier];
                  return (
                    <Card
                      key={opp.id}
                      className={cn(
                        "cursor-pointer transition-all hover-elevate",
                        tierColors[opp.tier],
                        selectedOpponent?.id === opp.id && "ring-2 ring-primary"
                      )}
                      onClick={() => setSelectedOpponent(opp)}
                      data-testid={`card-opponent-${opp.id}`}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={cn("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0", tierBgColors[opp.tier])}>
                            <Icon className={cn("h-4 w-4", tierTextColors[opp.tier])} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-sm truncate">{opp.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {opp.minSkill}-{opp.maxSkill === Infinity ? "∞" : opp.maxSkill}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {practiceMode === "ai" && selectedOpponent && (
            <div className="flex justify-end">
              <Button onClick={() => setStep("format")} data-testid="button-next-format">
                Continue to Format
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      )}

      {step === "format" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Select Debate Format
              </CardTitle>
              <CardDescription>
                Choose the style of debate you want to practice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {DEBATE_FORMATS.map((format) => (
                  <Card
                    key={format.id}
                    className={cn(
                      "cursor-pointer transition-all hover-elevate",
                      selectedFormat === format.id && "ring-2 ring-primary"
                    )}
                    onClick={() => handleFormatSelect(format.id)}
                    data-testid={`card-format-${format.id}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{format.name}</h3>
                        <Badge variant="secondary" className="gap-1">
                          <Clock className="h-3 w-3" />
                          {format.speeches.reduce((sum, s) => sum + s.defaultMinutes, 0)} min
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{format.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <Badge variant="outline" className="gap-1">
                          <Users className="h-3 w-3" />
                          {format.teamSize === 1 ? "1v1" : format.teamSize === 2 ? "2v2" : "3v3"}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <Timer className="h-3 w-3" />
                          {format.defaultPrepMinutes}m prep
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {format.speeches.length} speeches
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedFormat && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Format Settings
                    </CardTitle>
                    <CardDescription>
                      View speech order and customize times
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="gap-1">
                      Total: {getTotalDebateTime()} min
                    </Badge>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => resetToDefaults(getFormat(selectedFormat)!)}
                      data-testid="button-reset-times"
                    >
                      Reset to Default
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Prep Time</p>
                    <p className="text-sm text-muted-foreground">Time to prepare between speeches</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={0}
                      max={60}
                      value={prepTime}
                      onChange={(e) => setPrepTime(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-20 text-center"
                      data-testid="input-prep-time"
                    />
                    <span className="text-sm text-muted-foreground">min</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium text-sm">Speech Order</p>
                  <ScrollArea className="h-64 rounded-lg border">
                    <div className="p-3 space-y-2">
                      {getFormat(selectedFormat)?.speeches.map((speech, index) => (
                        <div 
                          key={speech.id} 
                          className={cn(
                            "flex items-center justify-between p-3 rounded-lg border",
                            speech.speaker === "aff" ? "bg-tier-beginner/5 border-tier-beginner/20" : "bg-destructive/5 border-destructive/20"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                              speech.speaker === "aff" ? "bg-tier-beginner text-white" : "bg-destructive text-white"
                            )}>
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{speech.name}</p>
                              <p className="text-xs text-muted-foreground">{speech.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              min={1}
                              max={30}
                              value={getSpeechTime(speech.id, speech.defaultMinutes)}
                              onChange={(e) => updateSpeechTime(speech.id, Math.max(1, parseInt(e.target.value) || 1))}
                              className="w-16 text-center h-8"
                              data-testid={`input-speech-${speech.id}`}
                            />
                            <span className="text-xs text-muted-foreground">min</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep("opponent")} data-testid="button-back-opponent">
              Back
            </Button>
            {selectedFormat && (
              <Button onClick={() => setStep("topic")} data-testid="button-next-topic">
                Continue to Topic
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      )}

      {step === "topic" && (
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Swords className="h-5 w-5" />
                  Select Debate Topic
                </CardTitle>
                <CardDescription>Choose what you want to debate about</CardDescription>
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-40" data-testid="select-filter-category">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {filteredTopics.map((topic) => (
                  <Card
                    key={topic.id}
                    className={cn(
                      "cursor-pointer transition-all hover-elevate",
                      selectedTopic === topic.id && "ring-2 ring-primary"
                    )}
                    onClick={() => setSelectedTopic(topic.id)}
                    data-testid={`card-topic-${topic.id}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                          <p className="font-medium">{topic.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{topic.category}</Badge>
                            <Badge 
                              variant="secondary" 
                              className={cn(
                                "text-xs",
                                topic.difficulty === "beginner" && "bg-tier-beginner/10 text-tier-beginner",
                                topic.difficulty === "intermediate" && "bg-tier-intermediate/10 text-tier-intermediate",
                                topic.difficulty === "advanced" && "bg-tier-advanced/10 text-tier-advanced"
                              )}
                            >
                              {topic.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep("format")} data-testid="button-back-format">
              Back
            </Button>
            {selectedTopic && (
              <Button onClick={() => setStep("side")} data-testid="button-next-side">
                Continue to Side
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      )}

      {step === "side" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Choose Your Side</CardTitle>
              <CardDescription>
                Will you argue for (Pro), against (Con), or let it be randomly assigned?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedSide}
                onValueChange={(v) => setSelectedSide(v as "pro" | "con" | "random")}
                className="grid sm:grid-cols-3 gap-4"
              >
                <Label
                  htmlFor="pro"
                  className={cn(
                    "flex items-center gap-4 p-6 rounded-lg border-2 cursor-pointer transition-all",
                    selectedSide === "pro" 
                      ? "border-tier-beginner bg-tier-beginner/5" 
                      : "border-border hover:border-tier-beginner/50"
                  )}
                  data-testid="label-side-pro"
                >
                  <RadioGroupItem value="pro" id="pro" />
                  <div>
                    <p className="font-semibold text-lg">Pro (For)</p>
                    <p className="text-sm text-muted-foreground">Argue in favor of the resolution</p>
                  </div>
                </Label>
                <Label
                  htmlFor="con"
                  className={cn(
                    "flex items-center gap-4 p-6 rounded-lg border-2 cursor-pointer transition-all",
                    selectedSide === "con" 
                      ? "border-destructive bg-destructive/5" 
                      : "border-border hover:border-destructive/50"
                  )}
                  data-testid="label-side-con"
                >
                  <RadioGroupItem value="con" id="con" />
                  <div>
                    <p className="font-semibold text-lg">Con (Against)</p>
                    <p className="text-sm text-muted-foreground">Argue against the resolution</p>
                  </div>
                </Label>
                <Label
                  htmlFor="random"
                  className={cn(
                    "flex items-center gap-4 p-6 rounded-lg border-2 cursor-pointer transition-all",
                    selectedSide === "random" 
                      ? "border-purple-500 bg-purple-500/5" 
                      : "border-border hover:border-purple-500/50"
                  )}
                  data-testid="label-side-random"
                >
                  <RadioGroupItem value="random" id="random" />
                  <div className="flex items-center gap-2">
                    <Shuffle className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="font-semibold text-lg">Random</p>
                      <p className="text-sm text-muted-foreground">Side assigned randomly</p>
                    </div>
                  </div>
                </Label>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Gavel className="h-5 w-5" />
                Judge Type
              </CardTitle>
              <CardDescription>
                Select the type of judge evaluating your debate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedJudgeType}
                onValueChange={(v) => setSelectedJudgeType(v as "lay" | "traditional" | "circuit" | "random")}
                className="grid sm:grid-cols-2 gap-4"
              >
                <Label
                  htmlFor="lay"
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all",
                    selectedJudgeType === "lay" 
                      ? "border-tier-beginner bg-tier-beginner/5" 
                      : "border-border hover:border-tier-beginner/50"
                  )}
                  data-testid="label-judge-lay"
                >
                  <RadioGroupItem value="lay" id="lay" className="mt-1" />
                  <div>
                    <p className="font-semibold">Lay Judge</p>
                    <p className="text-xs text-muted-foreground">Values clear explanations, relatable examples, and persuasive speaking. Less focused on technical debate skills.</p>
                  </div>
                </Label>
                <Label
                  htmlFor="traditional"
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all",
                    selectedJudgeType === "traditional" 
                      ? "border-tier-intermediate bg-tier-intermediate/5" 
                      : "border-border hover:border-tier-intermediate/50"
                  )}
                  data-testid="label-judge-traditional"
                >
                  <RadioGroupItem value="traditional" id="traditional" className="mt-1" />
                  <div>
                    <p className="font-semibold">Traditional Judge</p>
                    <p className="text-xs text-muted-foreground">Emphasizes stock issues, clear clash, and proper debate structure. Moderate speed preferred.</p>
                  </div>
                </Label>
                <Label
                  htmlFor="circuit"
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all",
                    selectedJudgeType === "circuit" 
                      ? "border-tier-advanced bg-tier-advanced/5" 
                      : "border-border hover:border-tier-advanced/50"
                  )}
                  data-testid="label-judge-circuit"
                >
                  <RadioGroupItem value="circuit" id="circuit" className="mt-1" />
                  <div>
                    <p className="font-semibold">Circuit Judge</p>
                    <p className="text-xs text-muted-foreground">Technical debate expert. Values spreading, kritiks, theory arguments, and technical execution.</p>
                  </div>
                </Label>
                <Label
                  htmlFor="random-judge"
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all",
                    selectedJudgeType === "random" 
                      ? "border-purple-500 bg-purple-500/5" 
                      : "border-border hover:border-purple-500/50"
                  )}
                  data-testid="label-judge-random"
                >
                  <RadioGroupItem value="random" id="random-judge" className="mt-1" />
                  <div className="flex items-center gap-2">
                    <Shuffle className="h-4 w-4 text-purple-500" />
                    <div>
                      <p className="font-semibold">Random Judge</p>
                      <p className="text-xs text-muted-foreground">Judge type assigned randomly. Prepare for any style!</p>
                    </div>
                  </div>
                </Label>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Mic className="h-5 w-5" />
                Voice Mode
              </CardTitle>
              <CardDescription>
                Debate using your voice instead of typing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 rounded-lg border-2 border-border">
                <div className="flex items-center gap-4">
                  {voiceMode ? (
                    <Mic className="h-6 w-6 text-primary" />
                  ) : (
                    <MicOff className="h-6 w-6 text-muted-foreground" />
                  )}
                  <div>
                    <p className="font-semibold">{voiceMode ? "Voice Debate Enabled" : "Text Debate (Default)"}</p>
                    <p className="text-sm text-muted-foreground">
                      {voiceMode 
                        ? "Speak your arguments - AI opponent will speak back" 
                        : "Type your arguments in the text box"}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={voiceMode}
                  onCheckedChange={setVoiceMode}
                  data-testid="switch-voice-mode"
                />
              </div>
              {voiceMode && (
                <p className="text-xs text-muted-foreground mt-3">
                  Voice mode uses your microphone and speakers. Make sure they're connected and your browser allows microphone access.
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Debate Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Opponent</span>
                  <span className="font-medium">{practiceMode === "friend" ? `@${friendUsername}` : selectedOpponent?.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Format</span>
                  <span className="font-medium">
                    {getFormat(selectedFormat)?.name}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Topic</span>
                  <span className="font-medium text-right max-w-xs">
                    {DEBATE_TOPICS.find((t) => t.id === selectedTopic)?.title}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Your Side</span>
                  <Badge className={
                    selectedSide === "pro" ? "bg-tier-beginner" : 
                    selectedSide === "con" ? "bg-destructive" : 
                    "bg-purple-500"
                  }>
                    {selectedSide === "pro" ? "Pro (Affirmative)" : 
                     selectedSide === "con" ? "Con (Negative)" : 
                     "Random"}
                  </Badge>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Judge Type</span>
                  <Badge variant="outline" className={
                    selectedJudgeType === "lay" ? "border-tier-beginner text-tier-beginner" :
                    selectedJudgeType === "traditional" ? "border-tier-intermediate text-tier-intermediate" :
                    selectedJudgeType === "circuit" ? "border-tier-advanced text-tier-advanced" :
                    "border-purple-500 text-purple-500"
                  }>
                    {selectedJudgeType === "lay" ? "Lay" :
                     selectedJudgeType === "traditional" ? "Traditional" :
                     selectedJudgeType === "circuit" ? "Circuit" :
                     "Random"}
                  </Badge>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Voice Mode</span>
                  <Badge variant="outline" className={voiceMode ? "border-primary text-primary" : ""}>
                    {voiceMode ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Total Debate Time</span>
                  <span className="font-medium">{getTotalDebateTime()} min</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Prep Time</span>
                  <span className="font-medium">{prepTime} min</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep("topic")} data-testid="button-back-topic">
              Back
            </Button>
            {practiceMode === "friend" ? (
              <Button
                size="lg"
                onClick={handleCreateFriendChallenge}
                disabled={!friendUsername.trim() || !selectedFormat || !selectedTopic || friendChallengeLoading}
                data-testid="button-create-challenge"
              >
                <Link2 className="h-5 w-5 mr-2" />
                {friendChallengeLoading ? "Creating..." : "Create Challenge"}
              </Button>
            ) : (
              <Button size="lg" onClick={handleStartDebate} data-testid="button-start-debate">
                <Swords className="h-5 w-5 mr-2" />
                Start Debate
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
