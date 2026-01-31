import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { User } from "@shared/schema";

async function fetchUser(): Promise<User | null> {
  const response = await fetch("/api/auth/user", {
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

async function register(credentials: Pick<InsertUser, "username" | "password" | "email">): Promise<User> {
  const res = await apiRequest("POST", "/api/register", credentials);
  return await res.json();
}

async function updateProfile(updates: Partial<InsertUser>): Promise<User> {
  const res = await apiRequest("PATCH", "/api/user", updates);
  return await res.json();
}

async function logout(): Promise<void> {
  await apiRequest("POST", "/api/logout");
}

export function useAuth() {
  const queryClient = useQueryClient();
  const { data: user, isLoading, error } = useQuery<User | null>({
    queryKey: ["/api/auth/user"],
    queryFn: fetchUser,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      queryClient.setQueryData(["/api/auth/user"], user);
    },
  });

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (user) => {
      queryClient.setQueryData(["/api/auth/user"], user);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["/api/auth/user"], null);
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (user) => {
      queryClient.setQueryData(["/api/auth/user"], user);
    },
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
    // maintain backward compatibility explicitly if needed, via logoutMutation
    logout: logoutMutation.mutate,
  };
}
