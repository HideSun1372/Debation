import { createContext, useContext, useState, useCallback } from "react";
import { getSkillTier, getTierProgress, SKILL_TIERS } from "@shared/schema";

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

export interface UserState {
  id: string;
  username: string;
  skillPoints: number;
  totalDebates: number;
  wins: number;
  losses: number;
  debateHistory: DebateHistoryItem[];
}

interface UserContextType {
  user: UserState;
  updateSkillPoints: (change: number) => void;
  recordDebate: (won: boolean, pointsChange: number) => void;
  addDebateToHistory: (debate: DebateHistoryItem) => void;
  getSkillTierName: () => string;
  getProgress: () => number;
}

const defaultUser: UserState = {
  id: "local-user",
  username: "Debater",
  skillPoints: 500,
  totalDebates: 0,
  wins: 0,
  losses: 0,
  debateHistory: [],
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

  return (
    <UserContext.Provider
      value={{
        user,
        updateSkillPoints,
        recordDebate,
        addDebateToHistory,
        getSkillTierName,
        getProgress,
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
