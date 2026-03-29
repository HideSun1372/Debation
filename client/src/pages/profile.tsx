import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";
import { SkillBadge } from "@/components/skill-badge";
import { SkillProgress } from "@/components/skill-progress";
import { getSkillTier, SKILL_TIERS } from "@shared/schema";
import { Trophy, Target, TrendingUp, TrendingDown, Percent, Award, LogIn, Crown, Code } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useAdmin } from "@/hooks/use-admin";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";
import { EditProfileDialog } from "@/components/edit-profile-dialog";
import { ChangePasswordDialog } from "@/components/change-password-dialog";
import { Settings, KeyRound } from "lucide-react";
import { apiUrl } from "@/lib/api-config";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash2, UserPlus, Check, Users, Swords, X } from "lucide-react";
export default function Profile() {
  const search = typeof window !== "undefined" ? window.location.search : "";
  const queryClient = useQueryClient();
  const { user, isLoading, isAuthenticated } = useAuth();
  const { isCreator, isDeveloper } = useAdmin();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const isSuccessReturn = search.includes("success=true");
  const sessionIdMatch = search.match(/session_id=([^&]+)/);
  const tokenMatch = search.match(/token=([^&]+)/);
  const sessionId = sessionIdMatch ? sessionIdMatch[1] : null;
  const token = tokenMatch ? tokenMatch[1] : null;

  // When returning from checkout with session_id and token: confirm with backend and grant Dominion (token is one-time use)
  useEffect(() => {
    if (!isSuccessReturn || !sessionId || !token || !isAuthenticated) return;
    (async () => {
      try {
        const res = await fetch(apiUrl("/api/confirm-checkout"), {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ session_id: sessionId, token }),
        });
        if (res.ok) {
          await queryClient.invalidateQueries({ queryKey: ["/api/auth/user"] });
          window.history.replaceState(null, "", "/profile");
        }
      } catch (_) {}
    })();
  }, [isSuccessReturn, sessionId, token, isAuthenticated, queryClient]);

  const handleJoinDominion = async () => {
    try {
      const response = await fetch(apiUrl("/api/create-checkout-session"), {
        method: "POST",
        credentials: "include",
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Failed to create checkout session");
      }
    } catch (error) {
      console.error("Stripe Error:", error);
      alert("Could not open checkout. Check if your server is running!");
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-48" />
          <div className="h-48 bg-muted rounded" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-muted rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="text-center py-12">
          <CardContent>
            <LogIn className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Sign In to View Your Profile</h2>
            <p className="text-muted-foreground mb-6">
              Track your debate progress, view your stats, and earn skill points by logging in.
            </p>
            <Button asChild size="lg" data-testid="button-login-profile">
              <a href={apiUrl("/api/login")}>Sign In with Replit</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const tier = getSkillTier(user.skillPoints);
  const tierInfo = SKILL_TIERS[tier];

  const winRate = user.totalDebates > 0
    ? Math.round((user.wins / user.totalDebates) * 100)
    : 0;

  const displayName = user.firstName && user.lastName
    ? `${user.firstName} ${user.lastName}`
    : user.firstName || user.email?.split('@')[0] || 'Debater';

  const initials = user.firstName && user.lastName
    ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`
    : displayName.charAt(0).toUpperCase();

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
      <Card className="border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/10 via-background to-transparent shadow-md mb-2">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-amber-700 dark:text-amber-500 flex items-center gap-2">
                    <Award className="h-6 w-6" />
                    The Dominion of Debate
                  </CardTitle>
                  <CardDescription>Unlimited AI sparring & exclusive tournament access</CardDescription>
                </div>
                {user?.isPro && (
                  <div className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
                    ACTIVE MEMBER
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {!user?.isPro ? (
                <Button
                  onClick={handleJoinDominion}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold h-11 transition-all hover:scale-[1.01]"
                >
                  Upgrade to Dominion ($6/mo)
                </Button>
              ) : (
                <p className="text-sm text-amber-800/80 dark:text-amber-400/80 italic">
                  Your Dominion status is active. Prepare for glory.
                </p>
              )}
            </CardContent>
          </Card>
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={user.profileImageUrl || undefined} alt={displayName} />
                  <AvatarFallback className="text-2xl font-bold bg-primary/20 text-primary">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold" data-testid="text-profile-name">{displayName}</h2>
                    <div className="h-0 overflow-visible flex items-center gap-1">
                    <TooltipProvider>
                      {isCreator && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="cursor-default inline-flex items-center justify-center h-7 w-7 rounded-full bg-amber-600 text-white shadow-sm self-center">
                              <Crown className="h-4 w-4" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>Creator</TooltipContent>
                        </Tooltip>
                      )}
                      {!isCreator && isDeveloper && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="cursor-default inline-flex items-center justify-center h-7 w-7 rounded-full bg-destructive text-destructive-foreground shadow-sm">
                              <Code className="h-4 w-4" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>Developer</TooltipContent>
                        </Tooltip>
                      )}
                      {user.isPro && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <img src="/dominion-logo.png" alt="Dominion" className="h-[85px] w-[85px] object-contain cursor-default self-center -ml-5" />
                          </TooltipTrigger>
                          <TooltipContent>Dominion Member</TooltipContent>
                        </Tooltip>
                      )}
                    </TooltipProvider>
                    </div>
                  </div>
                  {user.email && (
                    <p className="text-sm text-muted-foreground" data-testid="text-profile-email">{user.email}</p>
                  )}
                  {user.bio?.trim() && (
                    <p className="text-sm mt-2 max-w-md">{user.bio}</p>
                  )}
                  <SkillBadge points={user.skillPoints} size="lg" className="mt-2" />
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="text-right">
                  <p className="text-4xl font-bold text-primary" data-testid="text-profile-points">{user.skillPoints}</p>
                  <p className="text-muted-foreground">Total Points</p>
                </div>
                <div className="flex gap-2">
                  <EditProfileDialog user={user}>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Settings className="h-4 w-4" />
                      Edit Profile
                    </Button>
                  </EditProfileDialog>
                  <ChangePasswordDialog>
                    <Button variant="outline" size="sm" className="gap-2">
                      <KeyRound className="h-4 w-4" />
                      Change password
                    </Button>
                  </ChangePasswordDialog>
                </div>
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
                  <p className="text-2xl font-bold" data-testid="text-total-debates">{user.totalDebates}</p>
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
                  <p className="text-2xl font-bold text-tier-beginner" data-testid="text-wins">{user.wins}</p>
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
                  <p className="text-2xl font-bold text-destructive" data-testid="text-losses">{user.losses}</p>
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
                  <p className="text-2xl font-bold text-tier-intermediate" data-testid="text-win-rate">{winRate}%</p>
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
                    <RechartsTooltip
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
                      className={`absolute left-2 w-5 h-5 rounded-full border-2 ${milestone.reached
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
              <Button asChild data-testid="button-start-practicing">
                <a href="/play">Start Playing</a>
              </Button>
            </CardContent>
          </Card>
        )}

        <FriendRequestsCard queryClient={queryClient} />
        <DebateRequestsCard queryClient={queryClient} />
        <FriendsCard />

        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <Trash2 className="h-5 w-5" />
              Danger zone
            </CardTitle>
            <CardDescription>
              Permanently delete your account and all associated data. This cannot be undone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="destructive"
              onClick={() => setDeleteDialogOpen(true)}
              data-testid="button-delete-account"
            >
              Delete my account
            </Button>
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete your account?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your account, profile, debate history, and progress. You will need to sign up again to use Debation. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleteLoading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              disabled={deleteLoading}
              onClick={async (e) => {
                e.preventDefault();
                setDeleteLoading(true);
                try {
                  const res = await fetch(apiUrl("/api/user"), {
                    method: "DELETE",
                    credentials: "include",
                  });
                  const data = await res.json();
                  if (res.ok) {
                    await queryClient.invalidateQueries({ queryKey: ["/api/auth/user"] });
                    setDeleteDialogOpen(false);
                    window.location.href = "/";
                  } else {
                    alert(data.error || "Failed to delete account");
                  }
                } catch (err) {
                  alert("Failed to delete account");
                } finally {
                  setDeleteLoading(false);
                }
              }}
            >
              {deleteLoading ? "Deleting…" : "Delete account"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

type PendingRequest = {
  id: string;
  fromUserId: string;
  toUserId: string;
  status: string;
  createdAt: string;
  fromUser: {
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    profileImageUrl: string | null;
    skillPoints: number;
    totalDebates: number;
    wins: number;
    losses: number;
  };
};

type PublicUser = {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  profileImageUrl: string | null;
  skillPoints: number;
  totalDebates: number;
  wins: number;
  losses: number;
};

function FriendRequestsCard({ queryClient }: { queryClient: ReturnType<typeof useQueryClient> }) {
  const { data: requests, isLoading } = useQuery<PendingRequest[]>({
    queryKey: ["/api/friends/requests"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/friends/requests"), { credentials: "include" });
      if (!res.ok) throw new Error("Failed to load requests");
      return res.json();
    },
    refetchInterval: 5000, // Poll every 5 seconds for new requests
  });

  const acceptMutation = useMutation({
    mutationFn: async (username: string) => {
      const res = await fetch(apiUrl("/api/friends/accept"), {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to accept");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/friends/requests"] });
      queryClient.invalidateQueries({ queryKey: ["/api/friends"] });
    },
  });

  const rejectMutation = useMutation({
    mutationFn: async (username: string) => {
      const res = await fetch(apiUrl("/api/friends/reject"), {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to decline");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/friends/requests"] });
    },
  });

  if (isLoading || !requests?.length) return null;

  const getDisplayName = (u: PendingRequest["fromUser"]) =>
    [u.firstName, u.lastName].filter(Boolean).join(" ") || u.username;
  const getInitials = (u: PendingRequest["fromUser"]) =>
    (u.firstName?.charAt(0) || "") + (u.lastName?.charAt(0) || "") || u.username.slice(0, 2).toUpperCase();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Friend requests
        </CardTitle>
        <CardDescription>Accept or decline pending friend requests</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {requests.map((req) => (
          <div key={req.id} className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted/50">
            <a href={`/users/${encodeURIComponent(req.fromUser.username)}`} className="flex items-center gap-3 min-w-0 flex-1">
              <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage src={req.fromUser.profileImageUrl ?? undefined} />
                <AvatarFallback className="text-xs">{getInitials(req.fromUser)}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-medium truncate">{getDisplayName(req.fromUser)}</p>
                <p className="text-sm text-muted-foreground truncate">@{req.fromUser.username}</p>
              </div>
            </a>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                size="sm"
                variant="outline"
                className="gap-1"
                onClick={() => rejectMutation.mutate(req.fromUser.username)}
                disabled={rejectMutation.isPending}
              >
                Decline
              </Button>
              <Button
                size="sm"
                className="gap-1"
                onClick={() => acceptMutation.mutate(req.fromUser.username)}
                disabled={acceptMutation.isPending}
              >
                <Check className="h-4 w-4" />
                Accept
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

type DebateRequestItem = {
  id: string;
  fromUserId: string;
  toUserId: string;
  topicId: string;
  formatId: string;
  challengerSide: string;
  status: string;
  debateId: string | null;
  createdAt: string;
  fromUser: PublicUser;
};

function DebateRequestsCard({ queryClient }: { queryClient: ReturnType<typeof useQueryClient> }) {
  const { data: requests, isLoading } = useQuery<DebateRequestItem[]>({
    queryKey: ["/api/debates/requests"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/debates/requests"), { credentials: "include" });
      if (!res.ok) throw new Error("Failed to load debate requests");
      return res.json();
    },
    refetchInterval: 5000, // Poll every 5 seconds for new requests
  });

  const acceptMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(apiUrl(`/api/debates/requests/${id}/accept`), {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to accept");
      return data as { debate: { id: string; formatId: string; topicId: string }; debateUrl: string };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/debates/requests"] });
      window.location.href = data.debateUrl;
    },
  });

  const declineMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(apiUrl(`/api/debates/requests/${id}/decline`), {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to decline");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/debates/requests"] });
    },
  });

  if (isLoading || !requests?.length) return null;

  const getDisplayName = (u: PublicUser) =>
    [u.firstName, u.lastName].filter(Boolean).join(" ") || u.username;
  const getInitials = (u: PublicUser) =>
    (u.firstName?.charAt(0) || "") + (u.lastName?.charAt(0) || "") || u.username.slice(0, 2).toUpperCase();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Swords className="h-5 w-5" />
          Debate requests
        </CardTitle>
        <CardDescription>Accept or decline debate challenges from friends</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {requests.map((req) => (
          <div key={req.id} className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted/50">
            <a href={`/users/${encodeURIComponent(req.fromUser.username)}`} className="flex items-center gap-3 min-w-0 flex-1">
              <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage src={req.fromUser.profileImageUrl ?? undefined} />
                <AvatarFallback className="text-xs">{getInitials(req.fromUser)}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-medium truncate">{getDisplayName(req.fromUser)} wants to debate</p>
                <p className="text-sm text-muted-foreground truncate">
                  Topic & format selected • You would be {req.challengerSide === "pro" ? "Con" : "Pro"}
                </p>
              </div>
            </a>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                size="sm"
                variant="outline"
                className="gap-1"
                onClick={() => declineMutation.mutate(req.id)}
                disabled={declineMutation.isPending}
              >
                <X className="h-4 w-4" />
                Decline
              </Button>
              <Button
                size="sm"
                className="gap-1"
                onClick={() => acceptMutation.mutate(req.id)}
                disabled={acceptMutation.isPending}
              >
                <Check className="h-4 w-4" />
                Accept
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function FriendsCard() {
  const { data: friends, isLoading } = useQuery<PublicUser[]>({
    queryKey: ["/api/friends"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/friends"), { credentials: "include" });
      if (!res.ok) throw new Error("Failed to load friends");
      return res.json();
    },
  });

  if (isLoading || !friends?.length) return null;

  const getDisplayName = (u: PublicUser) =>
    [u.firstName, u.lastName].filter(Boolean).join(" ") || u.username;
  const getInitials = (u: PublicUser) =>
    (u.firstName?.charAt(0) || "") + (u.lastName?.charAt(0) || "") || u.username.slice(0, 2).toUpperCase();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Friends
        </CardTitle>
        <CardDescription>Your friends on Debation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 sm:grid-cols-2">
          {friends.map((u) => (
            <a key={u.id} href={`/users/${encodeURIComponent(u.username)}`}>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src={u.profileImageUrl ?? undefined} />
                  <AvatarFallback className="text-xs">{getInitials(u)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="font-medium truncate">{getDisplayName(u)}</p>
                  <p className="text-sm text-muted-foreground truncate">@{u.username}</p>
                </div>
                <SkillBadge points={u.skillPoints} size="sm" className="ml-auto" />
              </div>
            </a>
          ))}
        </div>
        <Button asChild variant="outline" size="sm" className="mt-3">
          <a href="/users">Find more users</a>
        </Button>
      </CardContent>
    </Card>
  );
}
