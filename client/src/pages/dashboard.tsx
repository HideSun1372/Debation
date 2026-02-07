import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useUser } from "@/lib/user-context";
import { useAdmin } from "@/hooks/use-admin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SkillBadge } from "@/components/skill-badge";
import { SkillProgress } from "@/components/skill-progress";
import { BookOpen, Swords, History, User, Trophy, TrendingUp, Loader2 } from "lucide-react";
import { apiUrl } from "@/lib/api-config";

export default function Dashboard() {
    const { user: authUser, isLoading } = useAuth();
    const { user } = useUser();
    const { isAdmin, isDeveloper, isCreator } = useAdmin();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    const winRate = user.totalDebates > 0
        ? Math.round((user.wins / user.totalDebates) * 100)
        : 0;

    const features = [
        {
            href: "/learn",
            icon: BookOpen,
            title: "Learn",
            description: "Study debate fundamentals and techniques",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
        },
        {
            href: "/play",
            icon: Swords,
            title: "Play",
            description: "Debate against AI opponents or friends",
            color: "text-orange-500",
            bgColor: "bg-orange-500/10",
        },
        {
            href: "/history",
            icon: History,
            title: "History",
            description: "View your past debates",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
        },
        {
            href: "/profile",
            icon: User,
            title: "Profile",
            description: "Manage your account settings",
            color: "text-green-500",
            bgColor: "bg-green-500/10",
        },
    ];

    return (
        <div className="min-h-[calc(100vh-3.5rem)] py-8">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Welcome Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        Welcome back, {authUser?.firstName || authUser?.username || "Debater"}!
                    </h1>
                    <p className="text-muted-foreground">
                        Ready to sharpen your debate skills?
                    </p>
                </div>

                {/* Stats Overview */}
                <Card className="mb-8">
                    <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap">
                        <div>
                            <CardTitle className="text-xl">Your Progress</CardTitle>
                            <CardDescription>Keep practicing to level up</CardDescription>
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



                <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <a key={feature.href} href={feature.href}>
                                <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 hover:scale-[1.02]">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className={cn("p-3 rounded-lg", feature.bgColor)}>
                                            <Icon className={cn("h-6 w-6", feature.color)} />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                                            <CardDescription>{feature.description}</CardDescription>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </a>
                        );
                    })}
                </div>

                {/* Quick Start */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardContent className="py-8 text-center">
                        <Trophy className="h-10 w-10 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Ready to Play?</h3>
                        <p className="text-muted-foreground max-w-md mx-auto mb-4">
                            Jump into a debate and put your skills to the test!
                        </p>
                        <a href="/play">
                            <Button size="lg" className="gap-2">
                                <Swords className="h-5 w-5" />
                                Start Playing
                            </Button>
                        </a>
                    </CardContent>
                </Card>

                {/* Admin Panel (only for developers) */}
                {(isAdmin || isDeveloper) && (
                    <DeveloperToolsCard isCreator={isCreator} />
                )}
            </div>
        </div >
    );
}

function DeveloperToolsCard({ isCreator }: { isCreator: boolean }) {
    const [targetUsername, setTargetUsername] = useState("");

    const devPost = async (path: string, body?: Record<string, unknown>) => {
        const payload = { ...body };
        if (targetUsername.trim()) payload.username = targetUsername.trim();
        const res = await fetch(apiUrl(path), {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        alert(data.message || data.error || "Done!");
        if (res.ok) window.location.reload();
    };

    return (
        <Card className="mt-8 border-destructive/50">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                    <TrendingUp className="h-5 w-5" />
                    Developer Tools
                </CardTitle>
                <CardDescription>
                    Quick actions for testing. Optionally apply to another account by entering their username.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                    <Label htmlFor="dev-target-username" className="text-sm text-muted-foreground whitespace-nowrap">
                        Apply to username (blank = self):
                    </Label>
                    <Input
                        id="dev-target-username"
                        placeholder="e.g. thehiddensun1372"
                        value={targetUsername}
                        onChange={(e) => setTargetUsername(e.target.value)}
                        className="max-w-[200px]"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" onClick={() => devPost("/api/dev/unlock-all")}>
                        Unlock All Lessons
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => devPost("/api/dev/reset-progress")}>
                        Reset Progress
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            const points = prompt("Enter skill points:", "3000");
                            if (points != null) devPost("/api/dev/set-skill-points", { points: parseInt(points) });
                        }}
                    >
                        Set Skill Points
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            const wins = prompt("Wins:", "10");
                            const losses = prompt("Losses:", "5");
                            if (wins != null && losses != null)
                                devPost("/api/dev/set-stats", {
                                    wins: parseInt(wins),
                                    losses: parseInt(losses),
                                    totalDebates: parseInt(wins) + parseInt(losses),
                                });
                        }}
                    >
                        Set Win/Loss Stats
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => devPost("/api/dev/grant-dominion")}>
                        Grant Dominion
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => devPost("/api/dev/revoke-dominion")}>
                        Revoke Dominion
                    </Button>
                    {isCreator && (
                        <>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    const username = targetUsername.trim() || prompt("Username to make a developer:", "");
                                    if (username && username.trim()) {
                                        fetch(apiUrl("/api/dev/promote-developer"), {
                                            method: "POST",
                                            credentials: "include",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify({ username: username.trim() }),
                                        })
                                            .then((r) => r.json())
                                            .then((data) => {
                                                alert(data.message || data.error || "Done!");
                                                if (data.success) window.location.reload();
                                            });
                                    }
                                }}
                            >
                                Make developer
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    const username = targetUsername.trim() || prompt("Username to revoke developer:", "");
                                    if (!username || !username.trim()) return;
                                    if (!confirm(`Revoke developer privileges for "${username}"?`)) return;
                                    fetch(apiUrl("/api/dev/revoke-developer"), {
                                        method: "POST",
                                        credentials: "include",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({ username: username.trim() }),
                                    })
                                        .then((r) => r.json())
                                        .then((data) => {
                                            alert(data.message || data.error || "Done!");
                                            if (data.success) window.location.reload();
                                        });
                                }}
                            >
                                Revoke developer
                            </Button>
                        </>
                    )}
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            const username = targetUsername.trim() || prompt("Username to delete (cannot be yourself):", "");
                            if (!username || !username.trim()) return;
                            if (!confirm(`Permanently delete account "${username}"? This cannot be undone.`)) return;
                            fetch(apiUrl("/api/dev/delete-user"), {
                                method: "POST",
                                credentials: "include",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ username: username.trim() }),
                            })
                                .then((r) => r.json())
                                .then((data) => {
                                    alert(data.message || data.error || "Done!");
                                    if (data.success) window.location.reload();
                                });
                        }}
                    >
                        Delete user
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}
