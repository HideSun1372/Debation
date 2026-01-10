import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { UserProvider } from "@/lib/user-context";
import { Navbar } from "@/components/navbar";
import Home from "@/pages/home";
import Learn from "@/pages/learn";
import Practice from "@/pages/practice";
import Profile from "@/pages/profile";
import History from "@/pages/history";
import Debate from "@/pages/debate";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/learn" component={Learn} />
      <Route path="/practice" component={Practice} />
      <Route path="/profile" component={Profile} />
      <Route path="/history" component={History} />
      <Route path="/debate" component={Debate} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserProvider>
          <TooltipProvider>
            <div className="min-h-screen bg-background">
              <Navbar />
              <Router />
            </div>
            <Toaster />
          </TooltipProvider>
        </UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
