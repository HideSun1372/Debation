import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SkillBadge } from "@/components/skill-badge";
import { Search, Users as UsersIcon, Loader2 } from "lucide-react";
import { apiUrl } from "@/lib/api-config";

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

function getDisplayName(u: PublicUser): string {
  const first = u.firstName?.trim();
  const last = u.lastName?.trim();
  if (first || last) return [first, last].filter(Boolean).join(" ");
  return u.username;
}

function getInitials(u: PublicUser): string {
  const first = u.firstName?.charAt(0) || "";
  const last = u.lastName?.charAt(0) || "";
  return (first + last).toUpperCase() || u.username.slice(0, 2).toUpperCase();
}

export default function Users() {
  const { isLoading: authLoading } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const searchQ = searchQuery.trim();
  const isSearch = searchQ.length > 0;

  const discoverQuery = useQuery<PublicUser[]>({
    queryKey: ["/api/users/discover"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/users/discover?limit=24"), { credentials: "include" });
      if (!res.ok) throw new Error("Failed to load users");
      return res.json();
    },
    enabled: !isSearch,
  });

  const searchResultsQuery = useQuery<PublicUser[]>({
    queryKey: ["/api/users/search", searchQ],
    queryFn: async () => {
      const res = await fetch(
        apiUrl(`/api/users/search?q=${encodeURIComponent(searchQ)}&limit=30`),
        { credentials: "include" }
      );
      if (!res.ok) throw new Error("Search failed");
      return res.json();
    },
    enabled: isSearch,
  });

  const users = useMemo(() => {
    if (isSearch) return searchResultsQuery.data ?? [];
    return discoverQuery.data ?? [];
  }, [isSearch, discoverQuery.data, searchResultsQuery.data]);

  const isLoading = isSearch ? searchResultsQuery.isLoading : discoverQuery.isLoading;
  const isFetching = isSearch ? searchResultsQuery.isFetching : discoverQuery.isFetching;

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <UsersIcon className="h-8 w-8" />
          Find users
        </h1>
        <p className="text-muted-foreground mt-1">
          Search by username or discover recent users.
        </p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by username..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
          autoComplete="off"
        />
      </div>

      {isSearch && !searchQ && (
        <p className="text-muted-foreground text-sm mb-4">Enter a username to search.</p>
      )}

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      )}

      {!isLoading && (
        <>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-muted-foreground">
              {isSearch ? `Search results for "${searchQ}"` : "Discover — recent users"}
            </span>
            {isFetching && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
          </div>

          {users.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                {isSearch ? "No users match your search." : "No users to show yet."}
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {users.map((u) => (
                <Card key={u.id} className="overflow-hidden">
                  <CardContent className="p-4 flex items-center gap-4">
                    <Avatar className="h-12 w-12 shrink-0">
                      <AvatarImage src={u.profileImageUrl ?? undefined} alt={u.username} />
                      <AvatarFallback className="text-sm">{getInitials(u)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium truncate">{getDisplayName(u)}</p>
                      <p className="text-sm text-muted-foreground truncate">@{u.username}</p>
                    </div>
                    <SkillBadge points={u.skillPoints} size="sm" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
