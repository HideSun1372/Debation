import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./use-auth";
import { apiUrl } from "@/lib/api-config";

interface AdminStatus {
  isAdmin: boolean;
  isDeveloper: boolean;
}

export function useAdmin() {
  const { user, isAuthenticated, isLoading: isAuthLoading } = useAuth();

  const { data, isLoading } = useQuery<AdminStatus>({
    queryKey: ["/api/auth/admin"],
    queryFn: async () => {
      const res = await fetch(apiUrl("/api/auth/admin"), { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch admin status");
      return res.json();
    },
    enabled: isAuthenticated && !isAuthLoading,
    retry: false,
    refetchOnWindowFocus: true,
  });

  /*
  if (isAuthenticated && !isAuthLoading) {
    console.log("useAdmin data:", data, "User ID:", user?.id);
  }
  */

  return {
    isAdmin: data?.isAdmin ?? false,
    isDeveloper: data?.isDeveloper ?? false,
    isLoading: isAuthLoading || (isAuthenticated && isLoading),
  };
}
