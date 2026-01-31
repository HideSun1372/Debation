import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./use-auth";

interface AdminStatus {
  isAdmin: boolean;
  isDeveloper: boolean;
}

export function useAdmin() {
  const { isAuthenticated, isLoading: isAuthLoading } = useAuth();

  const { data, isLoading } = useQuery<AdminStatus>({
    queryKey: ["/api/auth/admin"],
    enabled: isAuthenticated && !isAuthLoading,
    staleTime: 1000 * 60 * 30,
    retry: false,
  });

  return {
    isAdmin: data?.isAdmin ?? false,
    isDeveloper: data?.isDeveloper ?? false,
    isLoading: isAuthLoading || (isAuthenticated && isLoading),
  };
}
