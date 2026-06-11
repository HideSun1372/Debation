import { Switch, Route } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { UserProvider } from "@/lib/user-context";
import { Navbar } from "@/components/navbar";
import { AuthGuard } from "@/components/auth-guard";
import { ColdStartScreen } from "@/components/cold-start-screen";
import { useEffect, useState } from "react";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import Learn from "@/pages/learn";
import Practice from "@/pages/practice";
import Profile from "@/pages/profile";
import History from "@/pages/history";
import Debate from "@/pages/debate";
import Users from "@/pages/users";
import UserProfile from "@/pages/user-profile";
import AuthPage from "@/pages/auth-page";
import Pricing from "@/pages/pricing";
import Things from "@/pages/things";
import NotFound from "@/pages/not-found";

// Wrapper for protected routes
function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  return (
    <AuthGuard>
      <Component />
    </AuthGuard>
  );
}

function Router() {
  return (
    <Switch>
      {/* Public routes */}
      <Route path="/" component={Home} />
      <Route path="/auth" component={AuthPage} />

      {/* Protected routes - require authentication */}
      <Route path="/dashboard">
        {() => <ProtectedRoute component={Dashboard} />}
      </Route>
      <Route path="/learn">
        {() => <ProtectedRoute component={Learn} />}
      </Route>
      <Route path="/play">
        {() => <ProtectedRoute component={Practice} />}
      </Route>
      <Route path="/profile">
        {() => <ProtectedRoute component={Profile} />}
      </Route>
      <Route path="/history">
        {() => <ProtectedRoute component={History} />}
      </Route>
      <Route path="/debate">
        {() => <ProtectedRoute component={Debate} />}
      </Route>
      <Route path="/users/:username">
        {() => <ProtectedRoute component={UserProfile} />}
      </Route>
      <Route path="/users">
        {() => <ProtectedRoute component={Users} />}
      </Route>
      <Route path="/pricing">
        {() => <ProtectedRoute component={Pricing} />}
      </Route>
      <Route path="/things">
        {() => <ProtectedRoute component={Things} />}
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  // In dev, Vite and the API share one process — no cold start possible.
  // In production, poll /api/health (proxied to Render by Vercel) until the
  // backend is up before rendering the app.
  const [backendReady, setBackendReady] = useState(!import.meta.env.PROD);

  useEffect(() => {
    if (!import.meta.env.PROD) return;
    const poll = () => {
      fetch("/api/health")
        .then(res => { if (res.ok) setBackendReady(true); else setTimeout(poll, 2000); })
        .catch(() => setTimeout(poll, 2000));
    };
    poll();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {backendReady ? <Router /> : <ColdStartScreen />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserProvider>
          <TooltipProvider>
            <AppContent />
            <Toaster />
          </TooltipProvider>
        </UserProvider>
      </ThemeProvider>
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
