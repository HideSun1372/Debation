import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import 'dotenv/config';
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

const app = express();

// 1. Trust Proxy (Must be at the very top for Render/Vercel sessions)
app.set("trust proxy", 1);

// 2. BUM-PROOF CORS: Supports IP hopping and Production
const allowedOrigins = [
  'https://debation.vercel.app', 
  'http://localhost:5173', 
  'https://localhost:5000',
  'https://127.0.0.1:5000',
  'http://127.0.0.1:5173',
  'https://10.0.0.236:5000',
  'https://10.0.0.236:5173',
  'https://hidesun1372.instatunnel.my'
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow if: No origin (mobile/curl), in list, or is a local network IP
    if (!origin || allowedOrigins.includes(origin) || origin.includes("192.168.")) {
      callback(null, true);
    } else {
      callback(new Error('CORS blocked this origin'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['set-cookie']
}));

const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      log(logLine);
    }
  });
  next();
});

(async () => {
  // registerRoutes will call setupAuth, which attaches the session middleware
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    // Removed 'throw err' to prevent server crashing on simple API errors
  });

  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0", // Allows access from other IPs on your network
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();