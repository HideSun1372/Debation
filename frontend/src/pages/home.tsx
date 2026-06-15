import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/use-auth";
import { useUser } from "@/lib/user-context";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "@/lib/api-config";
import { getSkillTier } from "@shared/schema";
import { SKILL_TIERS } from "@shared/schema";
import {
  BookOpen, Swords, Trophy, TrendingUp, Target, Users, LogIn, LayoutDashboard,
  Lightbulb, AlertCircle, CheckCircle2, ArrowRight, Flame, BarChart3, Sparkles,
} from "lucide-react";

type InsightsData = {
  hasData: boolean;
  message?: string;
  insights?: {
    strengths: string[];
    improvements: string[];
    formatRecommendation: { format: string; reason: string };
    tips: string[];
    summary: string;
  };
  stats?: {
    totalDebates: number;
    wins: number;
    losses: number;
    winRate: number;
    skillPoints: number;
    formatCounts: Record<string, { total: number; wins: number }>;
  };
};

function PersonalizedHome() {
  const { user } = useUser();
  const { user: authUser } = useAuth();
  const tierKey = getSkillTier(user.skillPoints);
  const tierName = SKILL_TIERS[tierKey].name;

  const { data, isLoading, error } = useQuery<InsightsData>({
    queryKey: ["/api/insights"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/insights"), { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch insights");
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 1,
  });

  const formatNames: Record<string, string> = {
    "lincoln-douglas": "Lincoln-Douglas",
    "public-forum": "Public Forum",
    "policy": "Policy Debate",
    "parliamentary": "Parliamentary",
    "world-schools": "World Schools",
    "congressional": "Congressional",
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Welcome back, {authUser?.firstName || user.username}
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              {tierName} Debater &middot; {user.skillPoints} SP
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/play">
                <Button size="lg" className="gap-2">
                  <Swords className="h-5 w-5" />
                  Play
                </Button>
              </a>
              <a href="/dashboard">
                <Button size="lg" variant="outline" className="gap-2">
                  <LayoutDashboard className="h-5 w-5" />
                  Dashboard
                </Button>
              </a>
              <a href="/learn">
                <Button size="lg" variant="outline" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Learn
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,hsl(var(--primary)/0.1),transparent)]" />
      </section>

      <section className="py-8 md:py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Loading state */}
          {isLoading && (
            <div className="space-y-4">
              <Skeleton className="h-32 w-full" />
              <div className="grid md:grid-cols-2 gap-4">
                <Skeleton className="h-48" />
                <Skeleton className="h-48" />
              </div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <Card>
              <CardContent className="py-8 text-center">
                <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Couldn't load your insights right now. Play a debate and check back!</p>
              </CardContent>
            </Card>
          )}

          {/* No data state */}
          {data && !data.hasData && (
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="py-8 text-center">
                <Swords className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ready to start debating?</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-4">
                  {data.message}
                </p>
                <a href="/play">
                  <Button className="gap-2">
                    <Swords className="h-4 w-4" />
                    Start Your First Debate
                  </Button>
                </a>
              </CardContent>
            </Card>
          )}

          {/* Has insights */}
          {data?.hasData && data.insights && data.stats && (
            <>
              {/* AI Summary */}
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    AI Coach Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{data.insights.summary}</p>
                </CardContent>
              </Card>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Card>
                  <CardContent className="py-4 text-center">
                    <BarChart3 className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                    <p className="text-2xl font-bold">{data.stats.totalDebates}</p>
                    <p className="text-xs text-muted-foreground">Total Debates</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="py-4 text-center">
                    <Trophy className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                    <p className="text-2xl font-bold">{data.stats.wins}</p>
                    <p className="text-xs text-muted-foreground">Wins</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="py-4 text-center">
                    <Flame className="h-5 w-5 text-orange-500 mx-auto mb-1" />
                    <p className="text-2xl font-bold">{data.stats.winRate}%</p>
                    <p className="text-xs text-muted-foreground">Win Rate</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="py-4 text-center">
                    <TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-2xl font-bold">{data.stats.skillPoints}</p>
                    <p className="text-xs text-muted-foreground">Skill Points</p>
                  </CardContent>
                </Card>
              </div>

              {/* Strengths & Improvements */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Your Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.insights.strengths.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-green-500 mt-0.5 shrink-0">+</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Target className="h-5 w-5 text-orange-500" />
                      Areas to Improve
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.insights.improvements.map((imp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="h-3.5 w-3.5 text-orange-500 mt-0.5 shrink-0" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Format recommendation */}
              <Card className="border-blue-500/20 bg-blue-500/5">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    Recommended Format to Practice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {formatNames[data.insights.formatRecommendation.format] || data.insights.formatRecommendation.format}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{data.insights.formatRecommendation.reason}</p>
                    </div>
                    <a href="/play">
                      <Button size="sm" className="gap-1 shrink-0">
                        Practice Now <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Tips to Improve
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {data.insights.tips.map((tip, i) => (
                      <div key={i} className="p-3 rounded-lg bg-muted/50 text-sm">
                        {tip}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Format breakdown */}
              {Object.keys(data.stats.formatCounts).length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Format Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(data.stats.formatCounts).map(([fmt, stats]) => {
                        const winPct = Math.round((stats.wins / stats.total) * 100);
                        return (
                          <div key={fmt}>
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="font-medium">{formatNames[fmt] || fmt}</span>
                              <span className="text-muted-foreground">{stats.wins}W / {stats.total - stats.wins}L ({winPct}%)</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full rounded-full bg-primary transition-all"
                                style={{ width: `${winPct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function PublicHome() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Master the Art of
              <span className="text-primary block mt-2">Debate</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Learn debate techniques, practice against AI opponents of varying skill levels,
              and track your progress as you climb from Beginner to Master.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/auth">
                <Button size="lg" className="gap-2 w-full sm:w-auto" data-testid="button-get-started">
                  <LogIn className="h-5 w-5" />
                  Get Started
                </Button>
              </a>
              <a href="/auth">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" data-testid="button-login">
                  Already have an account? Login
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,hsl(var(--primary)/0.1),transparent)]" />
      </section>

      <section className="py-12 md:py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">1. Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Study debate fundamentals, techniques, and strategies through our comprehensive educational content.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-tier-intermediate/10 flex items-center justify-center mb-2">
                  <Target className="h-6 w-6 text-tier-intermediate" />
                </div>
                <CardTitle className="text-lg">2. Play</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Debate against AI opponents or challenge friends. Choose from various formats and topics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-tier-master/10 flex items-center justify-center mb-2">
                  <Trophy className="h-6 w-6 text-tier-master" />
                </div>
                <CardTitle className="text-lg">3. Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Earn skill points based on your performance and climb through the ranks from Beginner to Master.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">Skill Tiers</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-tier-beginner/30">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-tier-beginner/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-tier-beginner" />
                  </div>
                  <CardTitle className="text-lg text-tier-beginner">Beginner</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">0 - 999 points</p>
                <p className="text-xs text-muted-foreground">Learn the basics and build your foundation</p>
              </CardContent>
            </Card>

            <Card className="border-tier-intermediate/30">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-tier-intermediate/20 flex items-center justify-center">
                    <div className="w-3 h-3 rotate-45 bg-tier-intermediate" />
                  </div>
                  <CardTitle className="text-lg text-tier-intermediate">Intermediate</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">1000 - 1999 points</p>
                <p className="text-xs text-muted-foreground">Develop advanced techniques and strategies</p>
              </CardContent>
            </Card>

            <Card className="border-tier-advanced/30">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-tier-advanced/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-tier-advanced" />
                  </div>
                  <CardTitle className="text-lg text-tier-advanced">Advanced</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">2000 - 2999 points</p>
                <p className="text-xs text-muted-foreground">Compete at tournament level</p>
              </CardContent>
            </Card>

            <Card className="border-tier-master/30">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-tier-master/20 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-tier-master" />
                  </div>
                  <CardTitle className="text-lg text-tier-master">Master</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">3000+ points</p>
                <p className="text-xs text-muted-foreground">Achieve mastery and compete with the best</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="py-8">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Online Multiplayer</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-4">
                  Challenge friends to debate. Send a request and they can accept or decline. Compete against real players!
                </p>
                <a href="/auth">
                  <Button className="gap-2">
                    <LogIn className="h-4 w-4" />
                    Sign Up Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <Skeleton className="h-8 w-48" />
      </div>
    );
  }

  return isAuthenticated ? <PersonalizedHome /> : <PublicHome />;
}
