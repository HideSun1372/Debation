
import { users, type User, type InsertUser, type UpsertUser, type Debate, type InsertDebate, type DebateMessage, type InsertDebateMessage, type LessonProgress, type InsertLessonProgress } from "@shared/schema";
import { randomUUID } from "crypto";

interface CreateDebateInput {
  userId: string;
  opponentId: string;
  topicId: string;
  formatId: string;
  userSide: string;
  status?: string;
  result?: string | null;
  pointsChange?: number | null;
  feedback?: string | null;
}

import createMemoryStore from "memorystore";
import session from "express-session";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, updates: Partial<InsertUser>): Promise<User>;
  upsertUser?: (user: InsertUser) => Promise<User>; // Keep optional for backward compat if needed, or remove
  sessionStore: session.Store;
  updateUserSkillPoints(id: string, points: number): Promise<User | undefined>;

  getDebate(id: string): Promise<Debate | undefined>;
  getDebatesByUser(userId: string): Promise<Debate[]>;
  getAllDebates(): Promise<Debate[]>;
  createDebate(debate: CreateDebateInput): Promise<Debate>;
  updateDebate(id: string, updates: Partial<Debate>): Promise<Debate | undefined>;

  getDebateMessages(debateId: string): Promise<DebateMessage[]>;
  createDebateMessage(message: InsertDebateMessage): Promise<DebateMessage>;

  // Lesson Progress
  getLessonProgress(userId: string): Promise<LessonProgress | undefined>;
  updateLessonProgress(userId: string, progress: Partial<LessonProgress>): Promise<LessonProgress>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private debates: Map<string, Debate>;
  private debateMessages: Map<string, DebateMessage>;
  private lessonProgress: Map<string, LessonProgress>;

  sessionStore: session.Store;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.debates = new Map();
    this.debateMessages = new Map();
    this.lessonProgress = new Map();

    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });
    this.currentId = 1;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = (this.currentId++).toString();
    const now = new Date();
    const user: User = {
      ...insertUser,
      id,
      email: insertUser.email ?? null,
      firstName: insertUser.firstName ?? null,
      lastName: insertUser.lastName ?? null,
      profileImageUrl: insertUser.profileImageUrl ?? null,
      skillPoints: insertUser.skillPoints ?? 500,
      totalDebates: insertUser.totalDebates ?? 0,
      wins: insertUser.wins ?? 0,
      losses: insertUser.losses ?? 0,
      createdAt: now,
      updatedAt: now,
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: string, updates: Partial<InsertUser>): Promise<User> {
    const user = this.users.get(id);
    if (!user) throw new Error("User not found");

    if (updates.username) {
      const existing = await this.getUserByUsername(updates.username);
      if (existing && existing.id !== id) {
        throw new Error("Username already exists");
      }
    }

    // Basic email uniqueness check for memory storage
    if (updates.email) {
      const existingEmail = Array.from(this.users.values()).find(u => u.email === updates.email);
      if (existingEmail && existingEmail.id !== id) {
        throw new Error("Email already exists");
      }
    }

    const updatedUser: User = { ...user, ...updates, updatedAt: new Date() };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  // Optional compat method
  async upsertUser(insertUser: InsertUser): Promise<User> {
    return this.createUser(insertUser);
  }

  async updateUserSkillPoints(id: string, points: number): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    user.skillPoints = Math.max(0, points);
    this.users.set(id, user);
    return user;
  }

  async getDebate(id: string): Promise<Debate | undefined> {
    return this.debates.get(id);
  }

  async getDebatesByUser(userId: string): Promise<Debate[]> {
    return Array.from(this.debates.values())
      .filter((d) => d.userId === userId)
      .sort((a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime());
  }

  async getAllDebates(): Promise<Debate[]> {
    return Array.from(this.debates.values())
      .sort((a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime());
  }

  async createDebate(input: CreateDebateInput): Promise<Debate> {
    const id = randomUUID();
    const debate: Debate = {
      id,
      userId: input.userId,
      opponentId: input.opponentId,
      topicId: input.topicId,
      formatId: input.formatId,
      userSide: input.userSide,
      status: input.status || "in_progress",
      result: input.result || null,
      pointsChange: input.pointsChange || null,
      feedback: input.feedback || null,
      startedAt: new Date(),
      completedAt: null,
    };
    this.debates.set(id, debate);
    return debate;
  }

  async updateDebate(id: string, updates: Partial<Debate>): Promise<Debate | undefined> {
    const debate = this.debates.get(id);
    if (!debate) return undefined;
    const updated = { ...debate, ...updates };
    this.debates.set(id, updated);
    return updated;
  }

  async getDebateMessages(debateId: string): Promise<DebateMessage[]> {
    return Array.from(this.debateMessages.values())
      .filter((m) => m.debateId === debateId)
      .sort((a, b) => a.turnNumber - b.turnNumber);
  }

  async createDebateMessage(insertMessage: InsertDebateMessage): Promise<DebateMessage> {
    const id = randomUUID();
    const message: DebateMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.debateMessages.set(id, message);
    return message;
  }

  async getLessonProgress(userId: string): Promise<LessonProgress | undefined> {
    return Array.from(this.lessonProgress.values()).find(p => p.userId === userId);
  }

  async updateLessonProgress(userId: string, updates: Partial<LessonProgress>): Promise<LessonProgress> {
    let progress = await this.getLessonProgress(userId);
    const now = new Date();

    if (progress) {
      progress = { ...progress, ...updates, updatedAt: now, lastVisitedAt: now };
    } else {
      const id = randomUUID();
      progress = {
        id,
        userId,
        hasCompletedOnboarding: updates.hasCompletedOnboarding ?? false,
        experienceLevel: updates.experienceLevel ?? null,
        assessmentScore: updates.assessmentScore ?? 0,
        currentUnitId: updates.currentUnitId ?? "unit-1",
        currentSectionId: updates.currentSectionId ?? null,
        currentLessonId: updates.currentLessonId ?? null,
        completedLessonIds: updates.completedLessonIds ?? [],
        lastVisitedAt: now,
        createdAt: now,
        updatedAt: now,
      };
    }
    this.lessonProgress.set(progress.id, progress);
    return progress;
  }
}

export const storage = new MemStorage();
