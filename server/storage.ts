
import { users, sessions, debates, debateMessages, lessonProgress, friendRequests, debateRequests, type User, type InsertUser, type UpsertUser, type PublicUser, type Debate, type InsertDebate, type DebateMessage, type InsertDebateMessage, type LessonProgress, type InsertLessonProgress, type FriendRequest, type DebateRequest } from "@shared/schema";
import { randomUUID } from "crypto";
import { eq, desc, ilike, inArray, and, or } from "drizzle-orm";
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
  opponentType?: "ai" | "human";
  opponentUserId?: string | null;
  affUserId?: string | null;
  negUserId?: string | null;
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

  searchUsers(query: string, limit?: number): Promise<PublicUser[]>;
  listUsersDiscover(limit?: number): Promise<PublicUser[]>;

  deleteUser(userId: string): Promise<void>;

  // Friends
  createFriendRequest(fromUserId: string, toUserId: string): Promise<FriendRequest>;
  getFriendRequest(fromUserId: string, toUserId: string): Promise<FriendRequest | undefined>;
  acceptFriendRequest(fromUserId: string, toUserId: string): Promise<void>;
  deleteFriendRequest(fromUserId: string, toUserId: string): Promise<void>;
  removeFriendship(userId1: string, userId2: string): Promise<void>;
  getFriendStatus(userId: string, otherUserId: string): Promise<"none" | "pending_sent" | "pending_received" | "friends">;
  listPendingReceived(userId: string): Promise<Array<FriendRequest & { fromUser: PublicUser }>>;
  listFriends(userId: string): Promise<PublicUser[]>;

  // Debate requests
  createDebateRequest(fromUserId: string, toUserId: string, topicId: string, formatId: string, challengerSide: string): Promise<DebateRequest>;
  getDebateRequest(id: string): Promise<(DebateRequest & { fromUser?: PublicUser }) | undefined>;
  listDebateRequestsPendingFor(userId: string): Promise<Array<DebateRequest & { fromUser: PublicUser }>>;
  listDebateRequestsSentBy(userId: string): Promise<Array<DebateRequest & { debateUrl?: string }>>;
  acceptDebateRequest(id: string): Promise<Debate | null>;
  declineDebateRequest(id: string): Promise<void>;
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
      createTableIfMissing: false,
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

  async searchUsers(query: string, limit = 30): Promise<PublicUser[]> {
    if (!db) throw new Error("Database not available");
    const q = query.trim();
    if (!q) return [];
    const rows = await db
      .select({
        id: users.id,
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
        profileImageUrl: users.profileImageUrl,
        skillPoints: users.skillPoints,
        totalDebates: users.totalDebates,
        wins: users.wins,
        losses: users.losses,
      })
      .from(users)
      .where(ilike(users.username, `%${q}%`))
      .limit(limit);
    return rows;
  }

  async listUsersDiscover(limit = 24): Promise<PublicUser[]> {
    if (!db) throw new Error("Database not available");
    const rows = await db
      .select({
        id: users.id,
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
        profileImageUrl: users.profileImageUrl,
        skillPoints: users.skillPoints,
        totalDebates: users.totalDebates,
        wins: users.wins,
        losses: users.losses,
      })
      .from(users)
      .orderBy(desc(users.createdAt))
      .limit(limit);
    return rows;
  }

  async deleteUser(userId: string): Promise<void> {
    if (!db) throw new Error("Database not available");
    const userDebates = await db.select({ id: debates.id }).from(debates).where(eq(debates.userId, userId));
    const debateIds = userDebates.map((d) => d.id);
    if (debateIds.length > 0) {
      await db.delete(debateMessages).where(inArray(debateMessages.debateId, debateIds));
    }
    await db.delete(debates).where(eq(debates.userId, userId));
    await db.delete(lessonProgress).where(eq(lessonProgress.userId, userId));
    await db.delete(users).where(eq(users.id, userId));
    await db.delete(friendRequests).where(or(eq(friendRequests.fromUserId, userId), eq(friendRequests.toUserId, userId)));
  }

  async createFriendRequest(fromUserId: string, toUserId: string): Promise<FriendRequest> {
    if (!db) throw new Error("Database not available");
    const [row] = await db.insert(friendRequests).values({
      fromUserId,
      toUserId,
      status: "pending",
    }).returning();
    return row;
  }

  async getFriendRequest(fromUserId: string, toUserId: string): Promise<FriendRequest | undefined> {
    if (!db) throw new Error("Database not available");
    const [row] = await db.select().from(friendRequests).where(
      and(eq(friendRequests.fromUserId, fromUserId), eq(friendRequests.toUserId, toUserId))
    );
    return row;
  }

  async acceptFriendRequest(fromUserId: string, toUserId: string): Promise<void> {
    if (!db) throw new Error("Database not available");
    await db.update(friendRequests)
      .set({ status: "accepted" })
      .where(and(eq(friendRequests.fromUserId, fromUserId), eq(friendRequests.toUserId, toUserId)));
  }

  async deleteFriendRequest(fromUserId: string, toUserId: string): Promise<void> {
    if (!db) throw new Error("Database not available");
    await db.delete(friendRequests).where(
      and(eq(friendRequests.fromUserId, fromUserId), eq(friendRequests.toUserId, toUserId))
    );
  }

  async removeFriendship(userId1: string, userId2: string): Promise<void> {
    if (!db) throw new Error("Database not available");
    const row =
      (await this.getFriendRequest(userId1, userId2)) ?? (await this.getFriendRequest(userId2, userId1));
    if (!row || row.status !== "accepted") return;
    await this.deleteFriendRequest(row.fromUserId, row.toUserId);
  }

  async getFriendStatus(userId: string, otherUserId: string): Promise<"none" | "pending_sent" | "pending_received" | "friends"> {
    if (!db) throw new Error("Database not available");
    const sent = await this.getFriendRequest(userId, otherUserId);
    const received = await this.getFriendRequest(otherUserId, userId);
    if (sent) {
      if (sent.status === "accepted") return "friends";
      return "pending_sent";
    }
    if (received) {
      if (received.status === "accepted") return "friends";
      return "pending_received";
    }
    return "none";
  }

  async listPendingReceived(userId: string): Promise<Array<FriendRequest & { fromUser: PublicUser }>> {
    if (!db) throw new Error("Database not available");
    const rows = await db
      .select({
        id: friendRequests.id,
        fromUserId: friendRequests.fromUserId,
        toUserId: friendRequests.toUserId,
        status: friendRequests.status,
        createdAt: friendRequests.createdAt,
        uid: users.id,
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
        profileImageUrl: users.profileImageUrl,
        skillPoints: users.skillPoints,
        totalDebates: users.totalDebates,
        wins: users.wins,
        losses: users.losses,
      })
      .from(friendRequests)
      .innerJoin(users, eq(friendRequests.fromUserId, users.id))
      .where(and(eq(friendRequests.toUserId, userId), eq(friendRequests.status, "pending")));
    return rows.map((r) => ({
      id: r.id,
      fromUserId: r.fromUserId,
      toUserId: r.toUserId,
      status: r.status,
      createdAt: r.createdAt,
      fromUser: {
        id: r.uid,
        username: r.username,
        firstName: r.firstName,
        lastName: r.lastName,
        profileImageUrl: r.profileImageUrl,
        skillPoints: r.skillPoints,
        totalDebates: r.totalDebates,
        wins: r.wins,
        losses: r.losses,
      },
    }));
  }

  async listFriends(userId: string): Promise<PublicUser[]> {
    if (!db) throw new Error("Database not available");
    const rows = await db
      .select({ fromUserId: friendRequests.fromUserId, toUserId: friendRequests.toUserId })
      .from(friendRequests)
      .where(and(eq(friendRequests.status, "accepted"), or(eq(friendRequests.fromUserId, userId), eq(friendRequests.toUserId, userId))));
    const ids = rows.map((r) => (r.fromUserId === userId ? r.toUserId : r.fromUserId));
    if (ids.length === 0) return [];
    const userRows = await db
      .select({
        id: users.id,
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
        profileImageUrl: users.profileImageUrl,
        skillPoints: users.skillPoints,
        totalDebates: users.totalDebates,
        wins: users.wins,
        losses: users.losses,
      })
      .from(users)
      .where(inArray(users.id, ids));
    return userRows;
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
      .where(or(eq(debates.userId, userId), eq(debates.opponentUserId, userId)))
      .orderBy(desc(debates.startedAt));
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
      opponentType: input.opponentType || "ai",
      opponentUserId: input.opponentUserId ?? null,
      affUserId: input.affUserId ?? null,
      negUserId: input.negUserId ?? null,
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

  async createDebateRequest(fromUserId: string, toUserId: string, topicId: string, formatId: string, challengerSide: string): Promise<DebateRequest> {
    if (!db) throw new Error("Database not available");
    const [req] = await db.insert(debateRequests).values({
      fromUserId,
      toUserId,
      topicId,
      formatId,
      challengerSide,
      status: "pending",
    }).returning();
    return req;
  }

  async getDebateRequest(id: string): Promise<(DebateRequest & { fromUser?: PublicUser }) | undefined> {
    if (!db) throw new Error("Database not available");
    const [r] = await db.select().from(debateRequests).where(eq(debateRequests.id, id));
    if (!r) return undefined;
    const [from] = await db.select({
      id: users.id,
      username: users.username,
      firstName: users.firstName,
      lastName: users.lastName,
      profileImageUrl: users.profileImageUrl,
      skillPoints: users.skillPoints,
      totalDebates: users.totalDebates,
      wins: users.wins,
      losses: users.losses,
    }).from(users).where(eq(users.id, r.fromUserId));
    return { ...r, fromUser: from };
  }

  async listDebateRequestsPendingFor(userId: string): Promise<Array<DebateRequest & { fromUser: PublicUser }>> {
    if (!db) throw new Error("Database not available");
    const rows = await db.select().from(debateRequests)
      .where(and(eq(debateRequests.toUserId, userId), eq(debateRequests.status, "pending")))
      .orderBy(desc(debateRequests.createdAt));
    const result: Array<DebateRequest & { fromUser: PublicUser }> = [];
    for (const r of rows) {
      const [from] = await db.select({
        id: users.id,
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
        profileImageUrl: users.profileImageUrl,
        skillPoints: users.skillPoints,
        totalDebates: users.totalDebates,
        wins: users.wins,
        losses: users.losses,
      }).from(users).where(eq(users.id, r.fromUserId));
      if (from) result.push({ ...r, fromUser: from });
    }
    return result;
  }

  async listDebateRequestsSentBy(userId: string): Promise<Array<DebateRequest & { debateUrl?: string }>> {
    if (!db) throw new Error("Database not available");
    const rows = await db.select().from(debateRequests)
      .where(eq(debateRequests.fromUserId, userId))
      .orderBy(desc(debateRequests.createdAt));
    return rows.map((r) => {
      const result = { ...r };
      if (r.status === "accepted" && r.debateId) {
        const side = r.challengerSide as "pro" | "con";
        (result as any).debateUrl = `/debate?room=${r.debateId}&format=${r.formatId}&topic=${r.topicId}&side=${side}`;
      }
      return result;
    });
  }

  async acceptDebateRequest(id: string): Promise<Debate | null> {
    if (!db) throw new Error("Database not available");
    const [r] = await db.select().from(debateRequests).where(eq(debateRequests.id, id));
    if (!r || r.status !== "pending") return null;

    const challengerId = r.fromUserId;
    const opponentId = r.toUserId;
    const side = r.challengerSide as "pro" | "con";
    const affUserId = side === "pro" ? challengerId : opponentId;
    const negUserId = side === "pro" ? opponentId : challengerId;
    const opponentSide = side === "pro" ? "con" : "pro";

    const [newDebate] = await db.insert(debates).values({
      userId: challengerId,
      opponentId: "human",
      opponentType: "human",
      opponentUserId: opponentId,
      topicId: r.topicId,
      formatId: r.formatId,
      userSide: side,
      status: "waiting",
      affUserId,
      negUserId,
    }).returning();

    await db.update(debateRequests).set({ status: "accepted", debateId: newDebate.id }).where(eq(debateRequests.id, id));
    return newDebate;
  }

  async declineDebateRequest(id: string): Promise<void> {
    if (!db) throw new Error("Database not available");
    await db.update(debateRequests).set({ status: "declined" }).where(eq(debateRequests.id, id));
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
  private friendRequestsMap: Map<string, FriendRequest>;
  private debateRequestsMap: Map<string, DebateRequest>;

  sessionStore: session.Store;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.debates = new Map();
    this.debateMessages = new Map();
    this.lessonProgressMap = new Map();
    this.friendRequestsMap = new Map();
    this.debateRequestsMap = new Map();

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
      isPro: insertUser.isPro ?? false,
      proType: insertUser.proType ?? "free",
      isDeveloper: insertUser.isDeveloper ?? false,
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
      .filter((d) => d.userId === userId || d.opponentUserId === userId)
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
      opponentType: input.opponentType || "ai",
      opponentUserId: input.opponentUserId ?? null,
      affUserId: input.affUserId ?? null,
      negUserId: input.negUserId ?? null,
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

  private toPublicUser(user: User): PublicUser {
    return {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImageUrl: user.profileImageUrl,
      skillPoints: user.skillPoints,
      totalDebates: user.totalDebates,
      wins: user.wins,
      losses: user.losses,
    };
  }

  async searchUsers(query: string, limit = 30): Promise<PublicUser[]> {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const list = Array.from(this.users.values())
      .filter((u) => u.username.toLowerCase().includes(q))
      .slice(0, limit)
      .map((u) => this.toPublicUser(u));
    return list;
  }

  async listUsersDiscover(limit = 24): Promise<PublicUser[]> {
    const list = Array.from(this.users.values())
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime())
      .slice(0, limit)
      .map((u) => this.toPublicUser(u));
    return list;
  }

  async deleteUser(userId: string): Promise<void> {
    const userDebates = Array.from(this.debates.values()).filter((d) => d.userId === userId);
    const debateIds = new Set(userDebates.map((d) => d.id));
    const messageIdsToDelete = Array.from(this.debateMessages.entries())
      .filter(([, m]) => debateIds.has(m.debateId))
      .map(([id]) => id);
    messageIdsToDelete.forEach((id) => this.debateMessages.delete(id));
    userDebates.forEach((d) => this.debates.delete(d.id));
    const progressIdsToDelete = Array.from(this.lessonProgressMap.entries())
      .filter(([, p]) => p.userId === userId)
      .map(([id]) => id);
    progressIdsToDelete.forEach((id) => this.lessonProgressMap.delete(id));
    Array.from(this.friendRequestsMap.entries())
      .filter(([, r]) => r.fromUserId === userId || r.toUserId === userId)
      .forEach(([id]) => this.friendRequestsMap.delete(id));
    this.users.delete(userId);
  }

  async createFriendRequest(fromUserId: string, toUserId: string): Promise<FriendRequest> {
    const existing = await this.getFriendRequest(fromUserId, toUserId);
    if (existing) throw new Error("Friend request already exists");
    const id = randomUUID();
    const req: FriendRequest = {
      id,
      fromUserId,
      toUserId,
      status: "pending",
      createdAt: new Date(),
    };
    this.friendRequestsMap.set(id, req);
    return req;
  }

  async getFriendRequest(fromUserId: string, toUserId: string): Promise<FriendRequest | undefined> {
    return Array.from(this.friendRequestsMap.values()).find(
      (r) => r.fromUserId === fromUserId && r.toUserId === toUserId
    );
  }

  async acceptFriendRequest(fromUserId: string, toUserId: string): Promise<void> {
    const req = await this.getFriendRequest(fromUserId, toUserId);
    if (!req) throw new Error("Friend request not found");
    req.status = "accepted";
    this.friendRequestsMap.set(req.id, req);
  }

  async deleteFriendRequest(fromUserId: string, toUserId: string): Promise<void> {
    const req = await this.getFriendRequest(fromUserId, toUserId);
    if (req) this.friendRequestsMap.delete(req.id);
  }

  async removeFriendship(userId1: string, userId2: string): Promise<void> {
    const row =
      (await this.getFriendRequest(userId1, userId2)) ?? (await this.getFriendRequest(userId2, userId1));
    if (row && row.status === "accepted") this.friendRequestsMap.delete(row.id);
  }

  async getFriendStatus(userId: string, otherUserId: string): Promise<"none" | "pending_sent" | "pending_received" | "friends"> {
    const sent = await this.getFriendRequest(userId, otherUserId);
    const received = await this.getFriendRequest(otherUserId, userId);
    if (sent) {
      if (sent.status === "accepted") return "friends";
      return "pending_sent";
    }
    if (received) {
      if (received.status === "accepted") return "friends";
      return "pending_received";
    }
    return "none";
  }

  async listPendingReceived(userId: string): Promise<Array<FriendRequest & { fromUser: PublicUser }>> {
    const list = Array.from(this.friendRequestsMap.values())
      .filter((r) => r.toUserId === userId && r.status === "pending");
    const result: Array<FriendRequest & { fromUser: PublicUser }> = [];
    for (const r of list) {
      const u = await this.getUser(r.fromUserId);
      if (!u) continue;
      result.push({ ...r, fromUser: this.toPublicUser(u) });
    }
    return result;
  }

  async listFriends(userId: string): Promise<PublicUser[]> {
    const rows = Array.from(this.friendRequestsMap.values())
      .filter((r) => r.status === "accepted" && (r.fromUserId === userId || r.toUserId === userId));
    const ids = rows.map((r) => (r.fromUserId === userId ? r.toUserId : r.fromUserId));
    const result: PublicUser[] = [];
    for (const id of ids) {
      const u = await this.getUser(id);
      if (u) result.push(this.toPublicUser(u));
    }
    return result;
  }

  async createDebateRequest(fromUserId: string, toUserId: string, topicId: string, formatId: string, challengerSide: string): Promise<DebateRequest> {
    const id = randomUUID();
    const req: DebateRequest = {
      id,
      fromUserId,
      toUserId,
      topicId,
      formatId,
      challengerSide,
      status: "pending",
      debateId: null,
      createdAt: new Date(),
    };
    this.debateRequestsMap.set(id, req);
    return req;
  }

  async getDebateRequest(id: string): Promise<(DebateRequest & { fromUser?: PublicUser }) | undefined> {
    const r = this.debateRequestsMap.get(id);
    if (!r) return undefined;
    const u = await this.getUser(r.fromUserId);
    return { ...r, fromUser: u ? this.toPublicUser(u) : undefined };
  }

  async listDebateRequestsPendingFor(userId: string): Promise<Array<DebateRequest & { fromUser: PublicUser }>> {
    const list = Array.from(this.debateRequestsMap.values())
      .filter((r) => r.toUserId === userId && r.status === "pending");
    const result: Array<DebateRequest & { fromUser: PublicUser }> = [];
    for (const r of list) {
      const u = await this.getUser(r.fromUserId);
      if (u) result.push({ ...r, fromUser: this.toPublicUser(u) });
    }
    return result;
  }

  async listDebateRequestsSentBy(userId: string): Promise<Array<DebateRequest & { debateUrl?: string }>> {
    const list = Array.from(this.debateRequestsMap.values())
      .filter((r) => r.fromUserId === userId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return list.map((r) => {
      const result = { ...r };
      if (r.status === "accepted" && r.debateId) {
        const side = r.challengerSide as "pro" | "con";
        (result as any).debateUrl = `/debate?room=${r.debateId}&format=${r.formatId}&topic=${r.topicId}&side=${side}`;
      }
      return result;
    });
  }

  async acceptDebateRequest(id: string): Promise<Debate | null> {
    const r = this.debateRequestsMap.get(id);
    if (!r || r.status !== "pending") return null;
    const challengerId = r.fromUserId;
    const opponentId = r.toUserId;
    const side = r.challengerSide as "pro" | "con";
    const affUserId = side === "pro" ? challengerId : opponentId;
    const negUserId = side === "pro" ? opponentId : challengerId;
    const newDebate: Debate = {
      id: randomUUID(),
      userId: challengerId,
      opponentId: "human",
      opponentType: "human",
      opponentUserId: opponentId,
      topicId: r.topicId,
      formatId: r.formatId,
      userSide: side,
      status: "waiting",
      result: null,
      pointsChange: null,
      feedback: null,
      startedAt: new Date(),
      completedAt: null,
      affUserId,
      negUserId,
    };
    this.debates.set(newDebate.id, newDebate);
    r.status = "accepted";
    r.debateId = newDebate.id;
    this.debateRequestsMap.set(id, r);
    return newDebate;
  }

  async declineDebateRequest(id: string): Promise<void> {
    const r = this.debateRequestsMap.get(id);
    if (r) {
      r.status = "declined";
      this.debateRequestsMap.set(id, r);
    }
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
