
import { users, sessions, debates, debateMessages, lessonProgress, type User, type InsertUser, type UpsertUser, type Debate, type InsertDebate, type DebateMessage, type InsertDebateMessage, type LessonProgress, type InsertLessonProgress } from "@shared/schema";
import { randomUUID } from "crypto";
import { eq } from "drizzle-orm";
import { db, pool } from "./db";

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
import connectPgSimple from "connect-pg-simple";
import session from "express-session";

const MemoryStore = createMemoryStore(session);
const PgSession = connectPgSimple(session);

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

// ============================================================================
// Database Storage - Persists data to PostgreSQL
// ============================================================================
export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
    if (!pool) {
      throw new Error("Database pool not available");
    }
    this.sessionStore = new PgSession({
      pool: pool,
      tableName: "sessions",
      createTableIfMissing: false, // We use drizzle migrations
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    if (!db) throw new Error("Database not available");
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!db) throw new Error("Database not available");
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    if (!db) throw new Error("Database not available");
    const [user] = await db.insert(users).values({
      ...insertUser,
      email: insertUser.email ?? null,
      firstName: insertUser.firstName ?? null,
      lastName: insertUser.lastName ?? null,
      profileImageUrl: insertUser.profileImageUrl ?? null,
      skillPoints: insertUser.skillPoints ?? 500,
      totalDebates: insertUser.totalDebates ?? 0,
      wins: insertUser.wins ?? 0,
      losses: insertUser.losses ?? 0,
    }).returning();
    return user;
  }

  async updateUser(id: string, updates: Partial<InsertUser>): Promise<User> {
    if (!db) throw new Error("Database not available");

    // Check username uniqueness
    if (updates.username) {
      const existing = await this.getUserByUsername(updates.username);
      if (existing && existing.id !== id) {
        throw new Error("Username already exists");
      }
    }

    // Check email uniqueness
    if (updates.email) {
      const [existingEmail] = await db.select().from(users).where(eq(users.email, updates.email));
      if (existingEmail && existingEmail.id !== id) {
        throw new Error("Email already exists");
      }
    }

    const [updatedUser] = await db.update(users)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();

    if (!updatedUser) throw new Error("User not found");
    return updatedUser;
  }

  async updateUserSkillPoints(id: string, points: number): Promise<User | undefined> {
    if (!db) throw new Error("Database not available");
    const [user] = await db.update(users)
      .set({ skillPoints: Math.max(0, points), updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return user;
  }

  async getDebate(id: string): Promise<Debate | undefined> {
    if (!db) throw new Error("Database not available");
    const [debate] = await db.select().from(debates).where(eq(debates.id, id));
    return debate;
  }

  async getDebatesByUser(userId: string): Promise<Debate[]> {
    if (!db) throw new Error("Database not available");
    return db.select().from(debates)
      .where(eq(debates.userId, userId))
      .orderBy(debates.startedAt);
  }

  async getAllDebates(): Promise<Debate[]> {
    if (!db) throw new Error("Database not available");
    return db.select().from(debates).orderBy(debates.startedAt);
  }

  async createDebate(input: CreateDebateInput): Promise<Debate> {
    if (!db) throw new Error("Database not available");
    const [debate] = await db.insert(debates).values({
      userId: input.userId,
      opponentId: input.opponentId,
      topicId: input.topicId,
      formatId: input.formatId,
      userSide: input.userSide,
      status: input.status || "in_progress",
      result: input.result || null,
      pointsChange: input.pointsChange || null,
      feedback: input.feedback || null,
    }).returning();
    return debate;
  }

  async updateDebate(id: string, updates: Partial<Debate>): Promise<Debate | undefined> {
    if (!db) throw new Error("Database not available");
    const [debate] = await db.update(debates)
      .set(updates)
      .where(eq(debates.id, id))
      .returning();
    return debate;
  }

  async getDebateMessages(debateId: string): Promise<DebateMessage[]> {
    if (!db) throw new Error("Database not available");
    return db.select().from(debateMessages)
      .where(eq(debateMessages.debateId, debateId))
      .orderBy(debateMessages.turnNumber);
  }

  async createDebateMessage(insertMessage: InsertDebateMessage): Promise<DebateMessage> {
    if (!db) throw new Error("Database not available");
    const [message] = await db.insert(debateMessages).values(insertMessage).returning();
    return message;
  }

  async getLessonProgress(userId: string): Promise<LessonProgress | undefined> {
    if (!db) throw new Error("Database not available");
    const [progress] = await db.select().from(lessonProgress).where(eq(lessonProgress.userId, userId));
    return progress;
  }

  async updateLessonProgress(userId: string, updates: Partial<LessonProgress>): Promise<LessonProgress> {
    if (!db) throw new Error("Database not available");
    const now = new Date();

    // Check if progress exists
    const existing = await this.getLessonProgress(userId);

    if (existing) {
      const [updated] = await db.update(lessonProgress)
        .set({ ...updates, updatedAt: now, lastVisitedAt: now })
        .where(eq(lessonProgress.userId, userId))
        .returning();
      return updated;
    } else {
      const [created] = await db.insert(lessonProgress).values({
        userId,
        hasCompletedOnboarding: updates.hasCompletedOnboarding ?? false,
        experienceLevel: updates.experienceLevel ?? null,
        assessmentScore: updates.assessmentScore ?? 0,
        currentUnitId: updates.currentUnitId ?? "unit-1",
        currentSectionId: updates.currentSectionId ?? null,
        currentLessonId: updates.currentLessonId ?? null,
        completedLessonIds: updates.completedLessonIds ?? [],
        lastVisitedAt: now,
      }).returning();
      return created;
    }
  }
}

// ============================================================================
// Memory Storage - Stores data in memory (development fallback)
// ============================================================================
export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private debates: Map<string, Debate>;
  private debateMessages: Map<string, DebateMessage>;
  private lessonProgressMap: Map<string, LessonProgress>;

  sessionStore: session.Store;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.debates = new Map();
    this.debateMessages = new Map();
    this.lessonProgressMap = new Map();

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
    return Array.from(this.lessonProgressMap.values()).find(p => p.userId === userId);
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
    this.lessonProgressMap.set(progress.id, progress);
    return progress;
  }
}

// ============================================================================
// Export storage - automatically picks the right implementation
// ============================================================================
function createStorage(): IStorage {
  if (process.env.DATABASE_URL && db) {
    console.log("✓ Using PostgreSQL database storage");
    return new DatabaseStorage();
  } else {
    console.warn("⚠ DATABASE_URL not set - using in-memory storage (data will be lost on restart)");
    return new MemStorage();
  }
}

export const storage = createStorage();
