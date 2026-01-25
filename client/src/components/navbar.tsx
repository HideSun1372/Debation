import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useUser } from "@/lib/user-context";
import { useAuth } from "@/hooks/use-auth";
import { SkillBadge } from "./skill-badge";
import { ThemeToggle } from "./theme-toggle";
import { BookOpen, Swords, User, History, Home, Menu, X, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/practice", label: "Practice", icon: Swords },
  { href: "/history", label: "History", icon: History },
  { href: "/profile", label: "Profile", icon: User },
];

export function Navbar() {
  const [location] = useLocation();
  const { user } = useUser();
  const { user: authUser, isLoading: authLoading, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Disable navbar in debate route or if user is in a lesson
  // The Learn page renders lessons in a full-screen fixed overlay, so hiding navbar here
  // ensures it doesn't peek through or interfere.
  if (location === "/debate") {
    return null;
  }

  const getInitials = (firstName?: string | null, lastName?: string | null) => {
    const first = firstName?.charAt(0) || "";
    const last = lastName?.charAt(0) || "";
    return (first + last).toUpperCase() || "U";
  };

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
          <SkillBadge points={user.skillPoints} size="sm" />
          <ThemeToggle />
          
          {!authLoading && (
            isAuthenticated && authUser ? (
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={authUser.profileImageUrl || undefined} alt={authUser.firstName || "User"} />
                  <AvatarFallback className="text-xs">
                    {getInitials(authUser.firstName, authUser.lastName)}
                  </AvatarFallback>
                </Avatar>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:flex gap-1"
                  onClick={() => { window.location.href = "/api/logout"; }}
                  data-testid="button-logout"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                variant="default"
                size="sm"
                className="gap-1"
                onClick={() => { window.location.href = "/api/login"; }}
                data-testid="button-login"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Button>
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
                  onClick={() => { window.location.href = "/api/logout"; }}
                  data-testid="link-mobile-logout"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              ) : (
                <Button
                  variant="default"
                  className="w-full justify-start gap-2 mt-2"
                  onClick={() => { window.location.href = "/api/login"; }}
                  data-testid="link-mobile-login"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
