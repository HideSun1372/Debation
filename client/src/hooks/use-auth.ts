import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { User } from "@shared/schema";
import { apiUrl } from "@/lib/api-config";

async function fetchUser(): Promise<User | null> {
  const response = await fetch(apiUrl("/api/auth/user"), {
    credentials: "include",
  });

  if (response.status === 401) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return response.json();
}

import { apiRequest } from "@/lib/queryClient";
import type { InsertUser } from "@shared/schema";

async function login(credentials: Pick<InsertUser, "username" | "password">): Promise<User> {
  const res = await apiRequest("POST", "/api/login", credentials);
  return await res.json();
}

async function register(credentials: Pick<InsertUser, "username" | "password" | "email" | "displayName">): Promise<User> {
  const res = await apiRequest("POST", "/api/register", credentials);
  return await res.json();
}

async function updateProfile(updates: Partial<InsertUser>): Promise<User> {
  const res = await apiRequest("PATCH", "/api/user", updates);
  return await res.json();
}

async function changePassword(currentPassword: string, newPassword: string): Promise<{ ok: boolean }> {
  const res = await apiRequest("PATCH", "/api/user/password", { currentPassword, newPassword });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Failed to change password");
  }
  return res.json();
}

async function logout(): Promise<void> {
  await apiRequest("POST", "/api/logout");
}

export function useAuth() {
  const queryClient = useQueryClient();
  const { data: user, isLoading, error } = useQuery<User | null>({
    queryKey: ["/api/auth/user"],
    queryFn: fetchUser,
    retry: (failureCount, err) => {
      // Never retry a real 401 — that's a genuine "not logged in".
      // Do retry on server/network errors (500, ECONNRESET, etc.) up to 2x.
      if (err instanceof Error && err.message.startsWith("401")) return false;
      return failureCount < 2;
    },
    retryDelay: 1500,
    staleTime: Infinity,
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      queryClient.setQueryData(["/api/auth/user"], user);
      queryClient.invalidateQueries({ queryKey: ["/api/auth/admin"] });
    },
  });

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (user) => {
      queryClient.setQueryData(["/api/auth/user"], user);
      queryClient.invalidateQueries({ queryKey: ["/api/auth/admin"] });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["/api/auth/user"], null);
      queryClient.removeQueries({ queryKey: ["/api/auth/admin"] });
      queryClient.removeQueries({ queryKey: ["/api/debates"] });
      queryClient.removeQueries({ queryKey: ["/api/progress"] });
      localStorage.removeItem("debate-user"); // Clear local session data
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (user) => {
      queryClient.setQueryData(["/api/auth/user"], user);
    },
  });

  const changePasswordMutation = useMutation({
    mutationFn: ({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }) =>
      changePassword(currentPassword, newPassword),
  });

  return {
    user,
    isLoading,
    error,
    isAuthenticated: !!user,
    loginMutation,
    registerMutation,
    logoutMutation,
    updateProfileMutation,
    changePasswordMutation,
    logout: logoutMutation.mutate,
  };
}
