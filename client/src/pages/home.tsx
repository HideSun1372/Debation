import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/lib/user-context";
import { SkillBadge } from "@/components/skill-badge";
import { SkillProgress } from "@/components/skill-progress";
import { BookOpen, Swords, Trophy, TrendingUp, Target, Users } from "lucide-react";

export default function Home() {
  const { user } = useUser();
  const winRate = user.totalDebates > 0 
    ? Math.round((user.wins / user.totalDebates) * 100) 
    : 0;

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
              <Link href="/practice">
                <Button size="lg" className="gap-2 w-full sm:w-auto" data-testid="button-start-practice">
                  <Swords className="h-5 w-5" />
                  Start Practicing
                </Button>
              </Link>
              <Link href="/learn">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" data-testid="button-learn-more">
                  <BookOpen className="h-5 w-5" />
                  Learn Techniques
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,hsl(var(--primary)/0.1),transparent)]" />
      </section>

      <section className="py-12 md:py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap">
              <div>
                <CardTitle className="text-2xl">Your Progress</CardTitle>
                <CardDescription>Keep practicing to level up your debate skills</CardDescription>
              </div>
              <SkillBadge points={user.skillPoints} size="lg" />
            </CardHeader>
            <CardContent>
              <SkillProgress points={user.skillPoints} className="mb-6" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-foreground">{user.totalDebates}</div>
                  <div className="text-sm text-muted-foreground">Total Debates</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-tier-beginner">{user.wins}</div>
                  <div className="text-sm text-muted-foreground">Wins</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-destructive">{user.losses}</div>
                  <div className="text-sm text-muted-foreground">Losses</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary">{winRate}%</div>
                  <div className="text-sm text-muted-foreground">Win Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

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
                <CardTitle className="text-lg">2. Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Debate against AI opponents matched to your skill level. Choose from various formats and topics.
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
                <h3 className="text-xl font-semibold mb-2">Coming Soon: Online Multiplayer</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Compete against real players with ELO-based matchmaking and qualify for global debate competitions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
