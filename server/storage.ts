import { type User, type InsertUser, type Debate, type DebateMessage, type InsertDebateMessage } from "@shared/schema";
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

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserSkillPoints(id: string, points: number): Promise<User | undefined>;
  
  getDebate(id: string): Promise<Debate | undefined>;
  getDebatesByUser(userId: string): Promise<Debate[]>;
  getAllDebates(): Promise<Debate[]>;
  createDebate(debate: CreateDebateInput): Promise<Debate>;
  updateDebate(id: string, updates: Partial<Debate>): Promise<Debate | undefined>;
  
  getDebateMessages(debateId: string): Promise<DebateMessage[]>;
  createDebateMessage(message: InsertDebateMessage): Promise<DebateMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private debates: Map<string, Debate>;
  private debateMessages: Map<string, DebateMessage>;

  constructor() {
    this.users = new Map();
    this.debates = new Map();
    this.debateMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
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
}

export const storage = new MemStorage();
