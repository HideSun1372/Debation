import { cn } from "@/lib/utils";
import { useUser } from "@/lib/user-context";
import { useAuth } from "@/hooks/use-auth";
import { SkillBadge } from "./skill-badge";
import { ThemeToggle } from "./theme-toggle";
import { LayoutDashboard, Home, Menu, X, LogIn, LogOut, Code, Swords, Crown, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { useAdmin } from "@/hooks/use-admin";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "@/lib/api-config";
import { useToast } from "@/hooks/use-toast";

type PendingRequest = { id: string; fromUser: { username: string } };

export function Navbar() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const { user } = useUser();
  const { user: authUser, isLoading: authLoading, isAuthenticated, logout } = useAuth();
  const { isAdmin, isDeveloper, isCreator } = useAdmin();
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hasToastedFriendRef = useRef(false);
  const hasToastedDebateRef = useRef(false);

  const { data: pendingRequests } = useQuery<PendingRequest[]>({
    queryKey: ["/api/friends/requests"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/friends/requests"), { credentials: "include" });
      if (!res.ok) return [];
      return res.json();
    },
    enabled: isAuthenticated,
    refetchOnWindowFocus: true,
    refetchInterval: 5000, // Poll every 5 seconds for new requests
  });

  const { data: debateRequests } = useQuery<{ id: string }[]>({
    queryKey: ["/api/debates/requests"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/debates/requests"), { credentials: "include" });
      if (!res.ok) return [];
      return res.json();
    },
    enabled: isAuthenticated,
    refetchOnWindowFocus: true,
    refetchInterval: 5000, // Poll every 5 seconds for new requests
  });

  const pendingFriendCount = pendingRequests?.length ?? 0;
  const pendingDebateCount = debateRequests?.length ?? 0;

  useEffect(() => {
    if (pendingFriendCount === 0) hasToastedFriendRef.current = false;
    else if (isAuthenticated && !hasToastedFriendRef.current) {
      hasToastedFriendRef.current = true;
      toast({
        title: "Friend request" + (pendingFriendCount > 1 ? "s" : ""),
        description:
          pendingFriendCount === 1
            ? "Someone sent you a friend request. Check your profile to accept."
            : `${pendingFriendCount} people sent you friend requests. Check your profile to accept.`,
      });
    }
  }, [isAuthenticated, pendingFriendCount, toast]);

  useEffect(() => {
    if (pendingDebateCount === 0) hasToastedDebateRef.current = false;
    else if (isAuthenticated && !hasToastedDebateRef.current) {
      hasToastedDebateRef.current = true;
      toast({
        title: "Debate request" + (pendingDebateCount > 1 ? "s" : ""),
        description:
          pendingDebateCount === 1
            ? "A friend wants to debate. Check your profile to accept or decline."
            : `${pendingDebateCount} friends want to debate. Check your profile.`,
      });
    }
  }, [isAuthenticated, pendingDebateCount, toast]);

  // Disable navbar in debate route
  if (pathname === "/debate") {
    return null;
  }

  const getInitials = (firstName?: string | null, lastName?: string | null) => {
    const first = firstName?.charAt(0) || "";
    const last = lastName?.charAt(0) || "";
    return (first + last).toUpperCase() || "U";
  };

  // Navigation items differ based on authentication status
  const publicNavItems = [
    { href: "/", label: "Home", icon: Home },
  ];

  const authNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/things", label: "Things", icon: Newspaper },
  ];

  const navItems = isAuthenticated ? authNavItems : publicNavItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
        <a href="/" className="flex items-center gap-2">
          <Swords className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline">Debation</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <a key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "gap-2",
                    isActive && "bg-accent text-accent-foreground"
                  )}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {isCreator && <Badge variant="default" className="hidden sm:inline-flex items-center gap-1 text-[10px] h-5 px-1.5 bg-amber-600 hover:bg-amber-600"><Crown className="h-3 w-3" /> Creator</Badge>}
          {!isCreator && (isAdmin || isDeveloper) && <Badge variant="destructive" className="hidden sm:inline-flex items-center gap-1 text-[10px] h-5 px-1.5"><Code className="h-3 w-3" /> Dev</Badge>}
          {isAuthenticated && <SkillBadge points={user.skillPoints} size="sm" />}
          <ThemeToggle />

          {!authLoading && (
            isAuthenticated && authUser ? (
              <div className="flex items-center gap-2">
                <a href="/profile" className="relative inline-block">
                  <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                    <AvatarImage src={authUser.profileImageUrl || undefined} alt={authUser.firstName || "User"} />
                    <AvatarFallback className="text-xs">
                      {getInitials(authUser.firstName, authUser.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  {(pendingFriendCount + pendingDebateCount) > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center rounded-full p-0 text-xs"
                    >
                      {pendingFriendCount + pendingDebateCount > 99 ? "99+" : pendingFriendCount + pendingDebateCount}
                    </Badge>
                  )}
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:flex gap-1"
                  onClick={() => logout()}
                  disabled={authLoading}
                  data-testid="button-logout"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <a href="/auth">
                <Button
                  variant="default"
                  size="sm"
                  className="gap-1"
                  data-testid="button-login"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </a>
            )
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-2 flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <a key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-2",
                      isActive && "bg-accent text-accent-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </a>
              );
            })}

            {!authLoading && (
              isAuthenticated ? (
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => logout()}
                  data-testid="link-mobile-logout"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              ) : (
                <a href="/auth">
                  <Button
                    variant="default"
                    className="w-full justify-start gap-2 mt-2"
                    data-testid="link-mobile-login"
                  >
                    <LogIn className="h-4 w-4" />
                    Login
                  </Button>
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
