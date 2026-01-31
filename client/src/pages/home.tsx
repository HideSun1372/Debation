import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { BookOpen, Swords, Trophy, TrendingUp, Target, Users, LogIn, LayoutDashboard } from "lucide-react";

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();

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
              {!isLoading && (
                isAuthenticated ? (
                  <>
                    <Link href="/dashboard">
                      <Button size="lg" className="gap-2 w-full sm:w-auto" data-testid="button-go-to-dashboard">
                        <LayoutDashboard className="h-5 w-5" />
                        Go to Dashboard
                      </Button>
                    </Link>
                    <Link href="/practice">
                      <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" data-testid="button-start-practice">
                        <Swords className="h-5 w-5" />
                        Start Practicing
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/auth">
                      <Button size="lg" className="gap-2 w-full sm:w-auto" data-testid="button-get-started">
                        <LogIn className="h-5 w-5" />
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/auth">
                      <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" data-testid="button-login">
                        Already have an account? Login
                      </Button>
                    </Link>
                  </>
                )
              )}
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
                <p className="text-muted-foreground max-w-md mx-auto mb-4">
                  Compete against real players with ELO-based matchmaking and qualify for global debate competitions.
                </p>
                {!isAuthenticated && !isLoading && (
                  <Link href="/auth">
                    <Button className="gap-2">
                      <LogIn className="h-4 w-4" />
                      Sign Up Now
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
