import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useUser } from "@/lib/user-context";
import { useAuth } from "@/hooks/use-auth";
import { SkillBadge } from "./skill-badge";
import { ThemeToggle } from "./theme-toggle";
import { LayoutDashboard, Home, Menu, X, LogIn, LogOut, Code, Swords, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useAdmin } from "@/hooks/use-admin";

export function Navbar() {
  const [location] = useLocation();
  const { user } = useUser();
  const { user: authUser, isLoading: authLoading, isAuthenticated, logout } = useAuth();
  const { isAdmin, isDeveloper } = useAdmin();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Disable navbar in debate route
  if (location === "/debate") {
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
    { href: "/users", label: "Users", icon: Users },
  ];

  const navItems = isAuthenticated ? authNavItems : publicNavItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Swords className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline">Debation</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href ||
              (item.href !== "/" && location.startsWith(item.href));

            return (
              <Link key={item.href} href={item.href}>
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
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {(isAdmin || isDeveloper) && <Badge variant="destructive" className="hidden sm:inline-flex items-center gap-1 text-[10px] h-5 px-1.5"><Code className="h-3 w-3" /> Dev</Badge>}
          {isAuthenticated && <SkillBadge points={user.skillPoints} size="sm" />}
          <ThemeToggle />

          {!authLoading && (
            isAuthenticated && authUser ? (
              <div className="flex items-center gap-2">
                <Link href="/profile">
                  <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                    <AvatarImage src={authUser.profileImageUrl || undefined} alt={authUser.firstName || "User"} />
                    <AvatarFallback className="text-xs">
                      {getInitials(authUser.firstName, authUser.lastName)}
                    </AvatarFallback>
                  </Avatar>
                </Link>
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
              <Link href="/auth">
                <Button
                  variant="default"
                  size="sm"
                  className="gap-1"
                  data-testid="button-login"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </Link>
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
              const isActive = location === item.href ||
                (item.href !== "/" && location.startsWith(item.href));

              return (
                <Link key={item.href} href={item.href}>
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
                </Link>
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
                <Link href="/auth">
                  <Button
                    variant="default"
                    className="w-full justify-start gap-2 mt-2"
                    data-testid="link-mobile-login"
                  >
                    <LogIn className="h-4 w-4" />
                    Login
                  </Button>
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
