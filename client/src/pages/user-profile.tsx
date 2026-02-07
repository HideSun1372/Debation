import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SkillBadge } from "@/components/skill-badge";
import { Trophy, Swords, ArrowLeft, Loader2, UserPlus, Check, Users, UserMinus } from "lucide-react";
import { apiUrl } from "@/lib/api-config";

type ProfileData = {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  profileImageUrl: string | null;
  skillPoints: number;
  totalDebates: number;
  wins: number;
  losses: number;
  friendStatus: "none" | "pending_sent" | "pending_received" | "friends" | "self";
};

function getDisplayName(p: ProfileData): string {
  const first = p.firstName?.trim();
  const last = p.lastName?.trim();
  if (first || last) return [first, last].filter(Boolean).join(" ");
  return p.username;
}

function getInitials(p: ProfileData): string {
  const first = p.firstName?.charAt(0) || "";
  const last = p.lastName?.charAt(0) || "";
  return (first + last).toUpperCase() || p.username.slice(0, 2).toUpperCase();
}

export default function UserProfile() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const match = pathname.match(/^\/users\/([^/]+)/);
  const username = match ? decodeURIComponent(match[1]) : "";
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { isLoading: authLoading } = useAuth();

  const { data: profile, isLoading, error } = useQuery<ProfileData>({
    queryKey: ["/api/users/profile", username],
    queryFn: async () => {
      const res = await fetch(apiUrl(`/api/users/profile/${encodeURIComponent(username)}`), {
        credentials: "include",
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "User not found");
      }
      return res.json();
    },
    enabled: !!username && !authLoading,
    refetchOnWindowFocus: true,
    // Poll while sender is waiting so we update to "Friends" when the other person accepts
    refetchInterval: (query) =>
      (query.state.data as ProfileData | undefined)?.friendStatus === "pending_sent" ? 8000 : false,
  });

  const sendRequest = useMutation({
    mutationFn: async () => {
      const res = await fetch(apiUrl("/api/friends/request"), {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: profile!.username }),
      });
      const data = await res.json().catch(() => ({}));
      const message = data?.error ?? (res.status === 401 ? "Not authenticated" : "Failed to send request");
      if (!res.ok) throw new Error(message);
      return data;
    },
    onSuccess: (data: { message?: string }) => {
      queryClient.invalidateQueries({ queryKey: ["/api/users/profile", username] });
      toast({ title: "Friend request sent", description: data?.message ?? undefined });
    },
    onError: (err: Error) => {
      toast({ title: "Could not send request", description: err.message, variant: "destructive" });
    },
  });

  const acceptRequest = useMutation({
    mutationFn: async () => {
      const res = await fetch(apiUrl("/api/friends/accept"), {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: profile!.username }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to accept");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users/profile", username] });
      queryClient.invalidateQueries({ queryKey: ["/api/friends/requests"] });
      queryClient.invalidateQueries({ queryKey: ["/api/friends"] });
    },
  });

  const cancelRequest = useMutation({
    mutationFn: async () => {
      const res = await fetch(apiUrl(`/api/friends/requests?username=${encodeURIComponent(profile!.username)}`), {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to cancel request");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users/profile", username] });
      queryClient.invalidateQueries({ queryKey: ["/api/friends/requests"] });
    },
  });

  const unfriendMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(apiUrl(`/api/friends?username=${encodeURIComponent(profile!.username)}`), {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to remove friend");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users/profile", username] });
      queryClient.invalidateQueries({ queryKey: ["/api/friends"] });
    },
  });

  if (authLoading || (username && isLoading)) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!username) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            <p>No user specified.</p>
            <Button asChild variant="link" className="mt-2">
              <a href="/users">Find users</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <a href="/users">
          <Button variant="ghost" size="sm" className="mb-4 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Find users
          </Button>
        </a>
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            <p>{(error as Error)?.message || "User not found"}</p>
            <Button asChild variant="link" className="mt-2">
              <a href="/users">Find users</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const winRate = profile.totalDebates > 0
    ? Math.round((profile.wins / profile.totalDebates) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <a href="/users">
        <Button variant="ghost" size="sm" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Find users
        </Button>
      </a>

      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={profile.profileImageUrl ?? undefined} alt={profile.username} />
                <AvatarFallback className="text-2xl font-bold bg-primary/20 text-primary">
                  {getInitials(profile)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">{getDisplayName(profile)}</h1>
                <p className="text-muted-foreground">@{profile.username}</p>
                <SkillBadge points={profile.skillPoints} size="lg" className="mt-2" />
              </div>
            </div>
            {profile.friendStatus !== "self" && (
              <div className="flex items-center gap-2">
                {profile.friendStatus === "none" && (
                  <Button
                    size="sm"
                    className="gap-2"
                    onClick={() => sendRequest.mutate()}
                    disabled={sendRequest.isPending}
                  >
                    {sendRequest.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserPlus className="h-4 w-4" />}
                    Send friend request
                  </Button>
                )}
                {profile.friendStatus === "pending_sent" && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => cancelRequest.mutate()}
                    disabled={cancelRequest.isPending}
                  >
                    {cancelRequest.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Cancel request
                  </Button>
                )}
                {profile.friendStatus === "pending_received" && (
                  <Button
                    size="sm"
                    className="gap-2"
                    onClick={() => acceptRequest.mutate()}
                    disabled={acceptRequest.isPending}
                  >
                    {acceptRequest.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                    Accept request
                  </Button>
                )}
                {profile.friendStatus === "friends" && (
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="secondary" className="gap-2" disabled>
                      <Users className="h-4 w-4" />
                      Friends
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2"
                      onClick={() => unfriendMutation.mutate()}
                      disabled={unfriendMutation.isPending}
                    >
                      {unfriendMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserMinus className="h-4 w-4" />}
                      Unfriend
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Swords className="h-5 w-5" />
            Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold">{profile.totalDebates}</div>
              <div className="text-sm text-muted-foreground">Total Debates</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-green-600">{profile.wins}</div>
              <div className="text-sm text-muted-foreground">Wins</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-red-600">{profile.losses}</div>
              <div className="text-sm text-muted-foreground">Losses</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                <Trophy className="h-6 w-6" />
                {winRate}%
              </div>
              <div className="text-sm text-muted-foreground">Win rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
