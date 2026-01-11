import { createContext, useContext, useState, useCallback } from "react";
import { getSkillTier, getTierProgress, SKILL_TIERS, type ExperienceLevel, getPlacementUnit } from "@shared/schema";

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

export interface LessonProgress {
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
  lessonProgress: LessonProgress;
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
}

const defaultLessonProgress: LessonProgress = {
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

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserState>(() => {
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
  });

  const saveUser = useCallback((newUser: UserState) => {
    setUser(newUser);
    localStorage.setItem("debate-user", JSON.stringify(newUser));
  }, []);

  const updateSkillPoints = useCallback((change: number) => {
    setUser((prev) => {
      const newUser = {
        ...prev,
        skillPoints: Math.max(0, prev.skillPoints + change),
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, []);

  const recordDebate = useCallback((won: boolean, pointsChange: number) => {
    setUser((prev) => {
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
    setUser((prev) => {
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
    setUser((prev) => {
      const newUser = {
        ...prev,
        lessonProgress: {
          ...prev.lessonProgress,
          hasCompletedOnboarding: true,
          experienceLevel: experience,
          assessmentScore: score,
          currentUnitId: placementUnit,
          lastVisitedAt: new Date().toISOString(),
        },
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, []);

  const completeLesson = useCallback((lessonId: string) => {
    setUser((prev) => {
      if (prev.lessonProgress.completedLessonIds.includes(lessonId)) {
        return prev;
      }
      const newUser = {
        ...prev,
        lessonProgress: {
          ...prev.lessonProgress,
          completedLessonIds: [...prev.lessonProgress.completedLessonIds, lessonId],
          lastVisitedAt: new Date().toISOString(),
        },
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, []);

  const setCurrentLesson = useCallback((unitId: string, sectionId: string, lessonId: string) => {
    setUser((prev) => {
      const newUser = {
        ...prev,
        lessonProgress: {
          ...prev.lessonProgress,
          currentUnitId: unitId,
          currentSectionId: sectionId,
          currentLessonId: lessonId,
          lastVisitedAt: new Date().toISOString(),
        },
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, []);

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
    setUser((prev) => {
      const newUser = {
        ...prev,
        lessonProgress: defaultLessonProgress,
      };
      localStorage.setItem("debate-user", JSON.stringify(newUser));
      return newUser;
    });
  }, []);

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
