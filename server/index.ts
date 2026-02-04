import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import 'dotenv/config';
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http"; // 1. Keep this import

const app = express();

// 2. INITIALIZE httpServer HERE
const httpServer = createServer(app); 

app.set("trust proxy", 1);

const allowedOrigins = [
  'https://debation.vercel.app', 
  'http://localhost:5173', 
  'http://localhost:5000',
  'http://127.0.0.1:5000',
  'http://127.0.0.1:5173',
  'https://hidesun1372.instatunnel.my'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const isLocal = origin.includes("localhost") || 
                    origin.includes("127.0.0.1") || 
                    origin.startsWith("http://192.168.") || 
                    origin.startsWith("http://10.");
    const isAllowedDomain = allowedOrigins.includes(origin);

    if (isLocal || isAllowedDomain) {
      callback(null, true);
    } else {
      console.log("CORS Blocked Origin:", origin);
      callback(new Error('CORS blocked this origin'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['set-cookie']
}));

// 3. Don't forget your JSON parser or your API won't see req.body!
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

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
      if (capturedJsonResponse) logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      log(logLine);
    }
  });
  next();
});

(async () => {
  // Now httpServer is defined and can be passed here!
  await registerRoutes(httpServer, app);

  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    log(`ERROR: ${message}`);
    res.status(status).json({ message });
  });

  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen({ port, host: "0.0.0.0" }, () => {
    log(`serving on port ${port}`);
  });
})();