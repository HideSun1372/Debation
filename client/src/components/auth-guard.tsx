import { useAuth } from "@/hooks/use-auth";
import { useEffect } from "react";
import { Loader2, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AuthGuardProps {
    children: React.ReactNode;
}

/**
 * Protects routes that require authentication.
 * Redirects to /auth only on a confirmed 401 (data === null).
 * Shows a retry screen on server/network errors so a transient DB hiccup
 * doesn't silently log the user out.
 */
export function AuthGuard({ children }: AuthGuardProps) {
    const { isLoading, isAuthenticated, user, error } = useAuth();

    useEffect(() => {
        // Only redirect when the server explicitly said "not authenticated" (data=null).
        // Don't redirect on 500/network errors (data=undefined) — that would log the
        // user out on a transient DB connection failure.
        if (!isLoading && !error && user === null) {
            window.location.href = "/auth";
        }
    }, [isLoading, isAuthenticated, user, error]);

    if (isLoading) {
        return (
            <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center gap-4 text-center px-4">
                <WifiOff className="h-10 w-10 text-muted-foreground" />
                <div>
                    <p className="font-semibold">Connection error</p>
                    <p className="text-sm text-muted-foreground mt-1">Could not reach the server. Please try again.</p>
                </div>
                <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null; // Will redirect via useEffect
    }

    return <>{children}</>;
}
