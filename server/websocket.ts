import { WebSocketServer, WebSocket } from "ws";
import { IncomingMessage } from "http";
import { parse as parseUrl } from "url";
import type { Server } from "http";
import { storage } from "./storage";
import type { SessionData } from "express-session";

export type WsMessage =
  | { type: "join-debate"; debateId: string }
  | { type: "speech"; debateId: string; content: string; speechId: string; speechName: string; role: "user" | "opponent" }
  | { type: "timer-sync"; debateId: string; action: "start" | "tick" | "end"; speechId?: string; remainingSeconds?: number }
  | { type: "typing"; debateId: string; isTyping: boolean }
  | { type: "opponent-joined"; debateId: string; username: string }
  | { type: "opponent-left"; debateId: string }
  | { type: "error"; message: string };

interface AuthenticatedWebSocket extends WebSocket {
  userId?: string;
  username?: string;
  debateId?: string;
  userSide?: "pro" | "con";
}

interface DebateRoom {
  aff?: AuthenticatedWebSocket;
  neg?: AuthenticatedWebSocket;
  debateId: string;
}

const rooms = new Map<string, DebateRoom>();

function getSessionIdFromCookie(cookieHeader: string | undefined): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(/connect\.sid=([^;]+)/);
  const signed = match?.[1] ? decodeURIComponent(match[1]) : null;
  if (!signed) return null;
  // Express session cookie format: s:sessionId.signature
  const raw = signed.startsWith("s:") ? signed.slice(2).split(".")[0] : signed.split(".")[0];
  return raw || null;
}

function verifySession(sessionId: string): Promise<{ userId: string; username: string } | null> {
  return new Promise((resolve) => {
    (storage.sessionStore as any).get(sessionId, (err: Error | null, session: (SessionData & { passport?: { user: string } }) | undefined) => {
      if (err || !session || !session.passport?.user) {
        return resolve(null);
      }
      const userId = session.passport.user;
      storage.getUser(userId).then((user) => {
        if (!user) return resolve(null);
        resolve({ userId: user.id, username: user.username });
      }).catch(() => resolve(null));
    });
  });
}

function sendTo(ws: AuthenticatedWebSocket, msg: WsMessage) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(msg));
  }
}

function broadcastToRoom(room: DebateRoom, msg: WsMessage, exclude?: AuthenticatedWebSocket) {
  [room.aff, room.neg].forEach((ws) => {
    if (ws && ws !== exclude) sendTo(ws, msg);
  });
}

export function setupWebSocket(httpServer: Server) {
  const wss = new WebSocketServer({ noServer: true });

  httpServer.on("upgrade", async (req: IncomingMessage, socket, head) => {
    const { pathname } = parseUrl(req.url || "", true);
    if (pathname !== "/ws") {
      socket.destroy();
      return;
    }

    const cookieHeader = req.headers.cookie;
    const sessionId = getSessionIdFromCookie(cookieHeader);
    if (!sessionId) {
      socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
      socket.destroy();
      return;
    }

    const auth = await verifySession(sessionId);
    if (!auth) {
      socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
      socket.destroy();
      return;
    }

    wss.handleUpgrade(req, socket, head, (ws) => {
      const aws = ws as AuthenticatedWebSocket;
      aws.userId = auth.userId;
      aws.username = auth.username;
      wss.emit("connection", aws, req);
    });
  });

  wss.on("connection", (ws: AuthenticatedWebSocket) => {
    ws.on("message", async (data: Buffer) => {
      try {
        const msg = JSON.parse(data.toString()) as WsMessage;
        switch (msg.type) {
          case "join-debate": {
            const { debateId } = msg;
            const debate = await storage.getDebate(debateId);
            if (!debate) {
              sendTo(ws, { type: "error", message: "Debate not found" });
              return;
            }
            if (debate.opponentType !== "human") {
              sendTo(ws, { type: "error", message: "Not a multiplayer debate" });
              return;
            }
            const userId = ws.userId!;
            const isChallenger = debate.userId === userId;
            const isOpponent = debate.opponentUserId === userId;
            if (!isChallenger && !isOpponent) {
              sendTo(ws, { type: "error", message: "You are not in this debate" });
              return;
            }
            const userSide = isChallenger ? (debate.userSide as "pro" | "con") : (debate.userSide === "pro" ? "con" : "pro");
            ws.debateId = debateId;
            ws.userSide = userSide;

            let room = rooms.get(debateId);
            if (!room) {
              room = { debateId };
              rooms.set(debateId, room);
            }
            if (userSide === "pro") room.aff = ws;
            else room.neg = ws;

            if (room.aff && room.neg) {
              storage.updateDebate(debateId, { status: "in_progress" }).catch(() => {});
            }

            broadcastToRoom(room, { type: "opponent-joined", debateId, username: ws.username! }, ws);
            break;
          }
          case "speech": {
            const { debateId, content, speechId, speechName, role } = msg;
            if (ws.debateId !== debateId) {
              sendTo(ws, { type: "error", message: "Not in this debate" });
              return;
            }
            const room = rooms.get(debateId);
            if (!room) return;
            const turnNumber = (await storage.getDebateMessages(debateId)).length + 1;
            await storage.createDebateMessage({
              debateId,
              role,
              content,
              turnNumber,
            });
            const relayRole = role === "user" ? "opponent" : "user";
            broadcastToRoom(room, { ...msg, type: "speech", role: relayRole } as WsMessage, ws);
            break;
          }
          case "timer-sync":
          case "typing": {
            const { debateId } = msg;
            const room = rooms.get(debateId);
            if (room) broadcastToRoom(room, msg, ws);
            break;
          }
        }
      } catch (e) {
        sendTo(ws, { type: "error", message: (e as Error).message || "Invalid message" });
      }
    });

    ws.on("close", () => {
      const debateId = ws.debateId;
      if (debateId) {
        const room = rooms.get(debateId);
        if (room) {
          if (room.aff === ws) room.aff = undefined;
          if (room.neg === ws) room.neg = undefined;
          broadcastToRoom(room, { type: "opponent-left", debateId });
          if (!room.aff && !room.neg) rooms.delete(debateId);
        }
      }
    });
  });

  return wss;
}
