import { createContext, useContext, useState, useCallback } from "react";
import { getSkillTier, getTierProgress, SKILL_TIERS, type ExperienceLevel, getPlacementUnit, getAllLessons } from "@shared/schema";
import { useAuth } from "@/hooks/use-auth";
import { useAdmin } from "@/hooks/use-admin";
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
  learnXp: number;
  learnLevel: number;
}

// XP required for each level (cumulative thresholds)
export const LEARN_LEVEL_THRESHOLDS = [
  0,      // Level 1: 0 XP
  100,    // Level 2: 100 XP
  250,    // Level 3: 250 XP
  450,    // Level 4: 450 XP
  700,    // Level 5: 700 XP
  1000,   // Level 6: 1000 XP
  1400,   // Level 7: 1400 XP
  1900,   // Level 8: 1900 XP
  2500,   // Level 9: 2500 XP
  3200,   // Level 10: 3200 XP
  4000,   // Level 11+: continues
];

export function getLearnLevel(xp: number): number {
  for (let i = LEARN_LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEARN_LEVEL_THRESHOLDS[i]) {
      return i + 1;
    }
  }
  return 1;
}

export function getXpForNextLevel(currentXp: number): { current: number; required: number; progress: number } {
  const level = getLearnLevel(currentXp);
  const currentThreshold = LEARN_LEVEL_THRESHOLDS[level - 1] || 0;
  const nextThreshold = LEARN_LEVEL_THRESHOLDS[level] || currentThreshold + 1000;
  const xpInLevel = currentXp - currentThreshold;
  const xpRequired = nextThreshold - currentThreshold;
  return {
    current: xpInLevel,
    required: xpRequired,
    progress: (xpInLevel / xpRequired) * 100,
  };
}

export function calculateLessonXp(
  timeSpentSeconds: number,
  questionsCorrect: number,
  questionsTotal: number
): number {
  // Base XP for completing a lesson
  let xp = 50;
  
  // Accuracy bonus (up to 50 XP for 100% accuracy)
  if (questionsTotal > 0) {
    const accuracy = questionsCorrect / questionsTotal;
    xp += Math.round(accuracy * 50);
  }
  
  // Time bonus (faster completion = more XP, max 25 XP if under 3 minutes)
  if (timeSpentSeconds < 180) {
    xp += 25;
  } else if (timeSpentSeconds < 300) {
    xp += 15;
  } else if (timeSpentSeconds < 600) {
    xp += 5;
  }
  
  return xp;
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
  completeLesson: (lessonId: string, xpEarned?: number) => void;
  addLearnXp: (xp: number) => void;
  setCurrentLesson: (unitId: string, sectionId: string, lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isLessonUnlocked: (lessonId: string, allLessonIds: string[]) => boolean;
  resetLessonProgress: () => void;
  isLoadingProgress: boolean;
  isAdmin: boolean;
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
  learnXp: 0,
  learnLevel: 1,
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
  const { isAdmin } = useAdmin();
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

  // Merge auth user data with progress (ensure new fields have defaults)
  // Also merge local completedLessonIds for optimistic updates before DB refreshes
  const mergedProgress: LessonProgressData = dbProgress ? {
    ...defaultLessonProgress,
    ...dbProgress,
    learnXp: Math.max(dbProgress.learnXp ?? 0, localUser.lessonProgress.learnXp),
    learnLevel: Math.max(dbProgress.learnLevel ?? 1, localUser.lessonProgress.learnLevel),
    // Merge completed lessons from both sources for optimistic updates
    completedLessonIds: Array.from(new Set([
      ...(dbProgress.completedLessonIds || []),
      ...localUser.lessonProgress.completedLessonIds,
    ])),
  } : localUser.lessonProgress;

  const user: UserState = isAuthenticated && authUser ? {
    id: authUser.id,
    username: authUser.firstName || authUser.email?.split('@')[0] || 'Debater',
    skillPoints: authUser.skillPoints,
    totalDebates: authUser.totalDebates,
    wins: authUser.wins,
    losses: authUser.losses,
    debateHistory: localUser.debateHistory,
    lessonProgress: mergedProgress,
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
    
    // Get all lessons and mark everything before placement unit as complete
    const allLessons = getAllLessons();
    const lessonsToComplete: string[] = [];
    
    // Find all lessons before the placement unit
    for (const lessonData of allLessons) {
      // Stop when we reach the placement unit
      if (lessonData.unitId === placementUnit) {
        break;
      }
      lessonsToComplete.push(lessonData.lesson.id);
    }
    
    // Merge with any existing completed lessons (deduplicate)
    const allCompletedLessons = Array.from(new Set([
      ...currentProgress.completedLessonIds,
      ...lessonsToComplete
    ]));
    
    const newProgress: LessonProgressData = {
      ...currentProgress,
      hasCompletedOnboarding: true,
      experienceLevel: experience,
      assessmentScore: score,
      currentUnitId: placementUnit,
      completedLessonIds: allCompletedLessons,
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

  const completeLesson = useCallback((lessonId: string, xpEarned: number = 0) => {
    const currentProgress = user.lessonProgress;
    
    if (currentProgress.completedLessonIds.includes(lessonId)) {
      return;
    }
    
    const newXp = currentProgress.learnXp + xpEarned;
    const newLevel = getLearnLevel(newXp);
    
    const newProgress: LessonProgressData = {
      ...currentProgress,
      completedLessonIds: [...currentProgress.completedLessonIds, lessonId],
      lastVisitedAt: new Date().toISOString(),
      learnXp: newXp,
      learnLevel: newLevel,
    };
    
    // Call mutation directly to avoid closure issues with saveProgress callback
    if (isAuthenticated) {
      saveProgressMutation.mutate(newProgress);
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
  }, [user.lessonProgress, isAuthenticated, saveProgressMutation]);

  const addLearnXp = useCallback((xp: number) => {
    // Use functional update to get the latest state
    setLocalUser((prev) => {
      const newXp = prev.lessonProgress.learnXp + xp;
      const newLevel = getLearnLevel(newXp);
      
      const newProgress: LessonProgressData = {
        ...prev.lessonProgress,
        learnXp: newXp,
        learnLevel: newLevel,
        lastVisitedAt: new Date().toISOString(),
      };
      
      if (isAuthenticated) {
        saveProgressMutation.mutate(newProgress);
      }
      
      const newUser = {
        ...prev,
        lessonProgress: newProgress,
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, [isAuthenticated, saveProgressMutation]);

  const setCurrentLesson = useCallback((unitId: string, sectionId: string, lessonId: string) => {
    // Use functional update to get the latest state and avoid overwriting completedLessonIds
    setLocalUser((prev) => {
      const newProgress: LessonProgressData = {
        ...prev.lessonProgress,
        currentUnitId: unitId,
        currentSectionId: sectionId,
        currentLessonId: lessonId,
        lastVisitedAt: new Date().toISOString(),
      };
      
      // Save to DB with latest state
      if (isAuthenticated) {
        saveProgressMutation.mutate(newProgress);
      }
      
      const newUser = {
        ...prev,
        lessonProgress: newProgress,
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, [isAuthenticated, saveProgressMutation]);

  const isLessonCompleted = useCallback((lessonId: string) => {
    return user.lessonProgress.completedLessonIds.includes(lessonId);
  }, [user.lessonProgress.completedLessonIds]);

  const isLessonUnlocked = useCallback((lessonId: string, allLessonIds: string[]) => {
    if (isAdmin) return true;
    const lessonIndex = allLessonIds.indexOf(lessonId);
    if (lessonIndex === 0) return true;
    const previousLessonId = allLessonIds[lessonIndex - 1];
    return user.lessonProgress.completedLessonIds.includes(previousLessonId);
  }, [user.lessonProgress.completedLessonIds, isAdmin]);

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
        addLearnXp,
        setCurrentLesson,
        isLessonCompleted,
        isLessonUnlocked,
        resetLessonProgress,
        isLoadingProgress,
        isAdmin,
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
