import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { getSkillTier, getTierProgress, SKILL_TIERS, type ExperienceLevel, getPlacementUnit } from "@shared/schema";
import { useAuth } from "@/hooks/use-auth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export interface DebateHistoryItem {
  id: string;
  date: string;
  opponentId: string;
  topicId: string;
  formatId: string;
  result: "win" | "loss";
  pointsChange: number;
  side: "pro" | "con";
}

export interface LessonProgressData {
  hasCompletedOnboarding: boolean;
  experienceLevel: ExperienceLevel | null;
  assessmentScore: number;
  currentUnitId: string;
  currentSectionId: string | null;
  currentLessonId: string | null;
  completedLessonIds: string[];
  lastVisitedAt: string | null;
}

export interface UserState {
  id: string;
  username: string;
  skillPoints: number;
  totalDebates: number;
  wins: number;
  losses: number;
  debateHistory: DebateHistoryItem[];
  lessonProgress: LessonProgressData;
}

interface UserContextType {
  user: UserState;
  updateSkillPoints: (change: number) => void;
  recordDebate: (won: boolean, pointsChange: number) => void;
  addDebateToHistory: (debate: DebateHistoryItem) => void;
  getSkillTierName: () => string;
  getProgress: () => number;
  completeOnboarding: (experience: ExperienceLevel, score: number) => void;
  completeLesson: (lessonId: string) => void;
  setCurrentLesson: (unitId: string, sectionId: string, lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isLessonUnlocked: (lessonId: string, allLessonIds: string[]) => boolean;
  resetLessonProgress: () => void;
  isLoadingProgress: boolean;
}

const defaultLessonProgress: LessonProgressData = {
  hasCompletedOnboarding: false,
  experienceLevel: null,
  assessmentScore: 0,
  currentUnitId: "unit-1",
  currentSectionId: null,
  currentLessonId: null,
  completedLessonIds: [],
  lastVisitedAt: null,
};

const defaultUser: UserState = {
  id: "local-user",
  username: "Debater",
  skillPoints: 500,
  totalDebates: 0,
  wins: 0,
  losses: 0,
  debateHistory: [],
  lessonProgress: defaultLessonProgress,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

function getLocalStorageUser(): UserState {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("debate-user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return {
          ...defaultUser,
          ...parsed,
          debateHistory: parsed.debateHistory || [],
          lessonProgress: {
            ...defaultLessonProgress,
            ...(parsed.lessonProgress || {}),
          },
        };
      } catch {
        return defaultUser;
      }
    }
  }
  return defaultUser;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { user: authUser, isAuthenticated, isLoading: isAuthLoading } = useAuth();
  const queryClient = useQueryClient();
  
  const [localUser, setLocalUser] = useState<UserState>(getLocalStorageUser);

  // Fetch progress from database when authenticated
  const { data: dbProgress, isLoading: isProgressLoading } = useQuery<LessonProgressData>({
    queryKey: ["/api/progress"],
    enabled: isAuthenticated && !isAuthLoading,
    staleTime: 1000 * 60 * 5,
  });

  // Mutation to save progress to database
  const saveProgressMutation = useMutation({
    mutationFn: async (progress: Partial<LessonProgressData>) => {
      const response = await apiRequest("POST", "/api/progress", progress);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/progress"] });
    },
  });

  // Merge auth user data with progress
  const user: UserState = isAuthenticated && authUser ? {
    id: authUser.id,
    username: authUser.firstName || authUser.email?.split('@')[0] || 'Debater',
    skillPoints: authUser.skillPoints,
    totalDebates: authUser.totalDebates,
    wins: authUser.wins,
    losses: authUser.losses,
    debateHistory: localUser.debateHistory,
    lessonProgress: dbProgress || localUser.lessonProgress,
  } : localUser;

  const saveLocalUser = useCallback((newUser: UserState) => {
    setLocalUser(newUser);
    localStorage.setItem("debate-user", JSON.stringify(newUser));
  }, []);

  const saveProgress = useCallback((progress: Partial<LessonProgressData>) => {
    if (isAuthenticated) {
      saveProgressMutation.mutate(progress);
    }
  }, [isAuthenticated, saveProgressMutation]);

  const updateSkillPoints = useCallback((change: number) => {
    setLocalUser((prev) => {
      const newUser = {
        ...prev,
        skillPoints: Math.max(0, prev.skillPoints + change),
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, []);

  const recordDebate = useCallback((won: boolean, pointsChange: number) => {
    setLocalUser((prev) => {
      const newUser = {
        ...prev,
        totalDebates: prev.totalDebates + 1,
        wins: won ? prev.wins + 1 : prev.wins,
        losses: won ? prev.losses : prev.losses + 1,
        skillPoints: Math.max(0, prev.skillPoints + pointsChange),
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, []);

  const addDebateToHistory = useCallback((debate: DebateHistoryItem) => {
    setLocalUser((prev) => {
      const newUser = {
        ...prev,
        debateHistory: [debate, ...prev.debateHistory].slice(0, 100),
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, []);

  const getSkillTierName = useCallback(() => {
    const tier = getSkillTier(user.skillPoints);
    return SKILL_TIERS[tier].name;
  }, [user.skillPoints]);

  const getProgress = useCallback(() => {
    return getTierProgress(user.skillPoints);
  }, [user.skillPoints]);

  const completeOnboarding = useCallback((experience: ExperienceLevel, score: number) => {
    const placementUnit = getPlacementUnit(experience, score);
    const currentProgress = user.lessonProgress;
    const newProgress: LessonProgressData = {
      ...currentProgress,
      hasCompletedOnboarding: true,
      experienceLevel: experience,
      assessmentScore: score,
      currentUnitId: placementUnit,
      lastVisitedAt: new Date().toISOString(),
    };
    
    if (isAuthenticated) {
      saveProgress(newProgress);
    }
    
    setLocalUser((prev) => {
      const newUser = {
        ...prev,
        lessonProgress: newProgress,
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, [isAuthenticated, saveProgress, user.lessonProgress]);

  const completeLesson = useCallback((lessonId: string) => {
    const currentProgress = user.lessonProgress;
    if (currentProgress.completedLessonIds.includes(lessonId)) {
      return;
    }
    
    const newProgress: LessonProgressData = {
      ...currentProgress,
      completedLessonIds: [...currentProgress.completedLessonIds, lessonId],
      lastVisitedAt: new Date().toISOString(),
    };
    
    if (isAuthenticated) {
      saveProgress(newProgress);
    }
    
    setLocalUser((prev) => {
      if (prev.lessonProgress.completedLessonIds.includes(lessonId)) {
        return prev;
      }
      const newUser = {
        ...prev,
        lessonProgress: newProgress,
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, [user.lessonProgress, isAuthenticated, saveProgress]);

  const setCurrentLesson = useCallback((unitId: string, sectionId: string, lessonId: string) => {
    const currentProgress = user.lessonProgress;
    const newProgress: LessonProgressData = {
      ...currentProgress,
      currentUnitId: unitId,
      currentSectionId: sectionId,
      currentLessonId: lessonId,
      lastVisitedAt: new Date().toISOString(),
    };
    
    if (isAuthenticated) {
      saveProgress(newProgress);
    }
    
    setLocalUser((prev) => {
      const newUser = {
        ...prev,
        lessonProgress: newProgress,
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, [isAuthenticated, saveProgress, user.lessonProgress]);

  const isLessonCompleted = useCallback((lessonId: string) => {
    return user.lessonProgress.completedLessonIds.includes(lessonId);
  }, [user.lessonProgress.completedLessonIds]);

  const isLessonUnlocked = useCallback((lessonId: string, allLessonIds: string[]) => {
    const lessonIndex = allLessonIds.indexOf(lessonId);
    if (lessonIndex === 0) return true;
    const previousLessonId = allLessonIds[lessonIndex - 1];
    return user.lessonProgress.completedLessonIds.includes(previousLessonId);
  }, [user.lessonProgress.completedLessonIds]);

  const resetLessonProgress = useCallback(() => {
    if (isAuthenticated) {
      saveProgress(defaultLessonProgress);
    }
    
    setLocalUser((prev) => {
      const newUser = {
        ...prev,
        lessonProgress: defaultLessonProgress,
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, [isAuthenticated, saveProgress]);

  const isLoadingProgress = isAuthLoading || (isAuthenticated && isProgressLoading);

  return (
    <UserContext.Provider
      value={{
        user,
        updateSkillPoints,
        recordDebate,
        addDebateToHistory,
        getSkillTierName,
        getProgress,
        completeOnboarding,
        completeLesson,
        setCurrentLesson,
        isLessonCompleted,
        isLessonUnlocked,
        resetLessonProgress,
        isLoadingProgress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
