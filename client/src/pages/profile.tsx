import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/lib/user-context";
import { SkillBadge } from "@/components/skill-badge";
import { SkillProgress } from "@/components/skill-progress";
import { getSkillTier, SKILL_TIERS } from "@shared/schema";
import { Trophy, Target, TrendingUp, TrendingDown, Percent, Calendar, Swords, Award } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Profile() {
  const { user } = useUser();
  const tier = getSkillTier(user.skillPoints);
  const tierInfo = SKILL_TIERS[tier];
  
  const winRate = user.totalDebates > 0 
    ? Math.round((user.wins / user.totalDebates) * 100) 
    : 0;

  const mockProgressData = [
    { debate: 1, points: 500 },
    { debate: 2, points: 520 },
    { debate: 3, points: 505 },
    { debate: 4, points: 540 },
    { debate: 5, points: user.skillPoints },
  ].slice(0, Math.max(1, user.totalDebates + 1));

  const tierMilestones = [
    { tier: "Beginner", points: 0, reached: user.skillPoints >= 0 },
    { tier: "Intermediate", points: 1000, reached: user.skillPoints >= 1000 },
    { tier: "Advanced", points: 2000, reached: user.skillPoints >= 2000 },
    { tier: "Master", points: 3000, reached: user.skillPoints >= 3000 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Profile</h1>
        <p className="text-muted-foreground text-lg">
          Track your debate journey and skill progression
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">
                    {user.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{user.username}</h2>
                  <SkillBadge points={user.skillPoints} size="lg" className="mt-2" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-primary">{user.skillPoints}</p>
                <p className="text-muted-foreground">Total Points</p>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <SkillProgress points={user.skillPoints} />
          </CardContent>
        </Card>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Swords className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.totalDebates}</p>
                  <p className="text-sm text-muted-foreground">Total Debates</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tier-beginner/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-tier-beginner" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-tier-beginner">{user.wins}</p>
                  <p className="text-sm text-muted-foreground">Wins</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-destructive">{user.losses}</p>
                  <p className="text-sm text-muted-foreground">Losses</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tier-intermediate/10 flex items-center justify-center">
                  <Percent className="h-6 w-6 text-tier-intermediate" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-tier-intermediate">{winRate}%</p>
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {user.totalDebates > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Skill Progression
              </CardTitle>
              <CardDescription>Your points over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockProgressData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="debate" 
                      className="text-xs" 
                      tickFormatter={(v) => `#${v}`}
                    />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px"
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="points" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Tier Milestones
            </CardTitle>
            <CardDescription>Your journey through the ranks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-6">
                {tierMilestones.map((milestone, index) => (
                  <div key={milestone.tier} className="relative flex items-center gap-4 pl-10">
                    <div 
                      className={`absolute left-2 w-5 h-5 rounded-full border-2 ${
                        milestone.reached 
                          ? "bg-primary border-primary" 
                          : "bg-background border-muted-foreground"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className={`font-medium ${milestone.reached ? "text-foreground" : "text-muted-foreground"}`}>
                          {milestone.tier}
                        </p>
                        <p className="text-sm text-muted-foreground">{milestone.points} points</p>
                      </div>
                      {milestone.reached && index === tierMilestones.filter(m => m.reached).length - 1 && (
                        <p className="text-xs text-primary mt-1">Current Tier</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {user.totalDebates === 0 && (
          <Card className="border-dashed">
            <CardContent className="py-12 text-center">
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No debates yet</h3>
              <p className="text-muted-foreground mb-4">
                Start practicing to build your debate skills and track your progress!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
