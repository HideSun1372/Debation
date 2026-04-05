
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Express } from "express";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import { User, InsertUser } from "@shared/schema";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
    const salt = randomBytes(16).toString("hex");
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${buf.toString("hex")}.${salt}`;
}

async function comparePasswords(supplied: string, stored: string) {
    const [hashed, salt] = stored.split(".");
    const hashedBuf = Buffer.from(hashed, "hex");
    const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
    return timingSafeEqual(hashedBuf, suppliedBuf);
}

export function isAuthenticated(req: any, res: any, next: any) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ error: "Not authenticated" });
}

export function setupAuth(app: Express) {
    // server/auth.ts - Inside your setupAuth function
const isProd = process.env.NODE_ENV === "production";

if (isProd && (!process.env.SESSION_SECRET || process.env.SESSION_SECRET === "dev_secret_key")) {
    throw new Error("SESSION_SECRET must be a strong secret in production");
}

const sessionSettings: session.SessionOptions = {
    secret: process.env.SESSION_SECRET || "dev_secret_key",
    resave: false,
    saveUninitialized: false,
    store: storage.sessionStore,
    proxy: isProd, 
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: isProd,           // Required for SameSite: 'none'
        sameSite: isProd ? "none" : "lax", 
    },
};

if (isProd) {
    app.set("trust proxy", 1); // Essential for Render
}

    // Surface session store errors in Render logs — these are silent by default
    // and are the most likely cause of cold-start logouts.
    storage.sessionStore.on("error", (err: Error) => {
        console.error("[Auth] Session store error:", err.message);
    });

    console.log("[Auth] Applying session middleware...");
    app.use(session(sessionSettings));
    console.log("[Auth] Session middleware applied");

    console.log("[Auth] Applying passport middleware...");
    app.use(passport.initialize());
    console.log("[Auth] Passport initialized");

    app.use(passport.session());
    console.log("[Auth] Passport session middleware applied");

    passport.use(
        new LocalStrategy(async (username, password, done) => {
            try {
                const user = await storage.getUserByUsername(username);
                if (!user || !(await comparePasswords(password, user.password))) {
                    return done(null, false);
                } else {
                    return done(null, user);
                }
            } catch (err) {
                return done(err);
            }
        }),
    );

    passport.serializeUser((user, done) => {
        done(null, (user as User).id);
    });

    passport.deserializeUser(async (id: string, done) => {
        try {
            const user = await storage.getUser(id);
            if (!user) {
                console.warn(`[Auth] deserializeUser: no user found for id=${id} — session will be invalidated`);
            }
            done(null, user);
        } catch (err: any) {
            console.error(`[Auth] deserializeUser error for id=${id}:`, err.message);
            done(err);
        }
    });

    function loginAndSave(req: any, res: any, next: any, user: User, statusCode: number) {
        req.login(user, (err: Error) => {
            if (err) return next(err);
            req.session.save((err: Error) => {
                if (err) return next(err);
                res.status(statusCode).json(user);
            });
        });
    }

    // Auth Routes
    app.post("/api/register", async (req, res, next) => {
        try {
            const { username, password, email } = req.body;
            const existingUser = await storage.getUserByUsername(username);
            if (existingUser) {
                return res.status(400).send("Username already exists");
            }

            const hashedPassword = await hashPassword(password);
            const user = await storage.createUser({
                username,
                email,
                password: hashedPassword,
                skillPoints: 500, // Default start
                totalDebates: 0,
                wins: 0,
                losses: 0,
            });

            loginAndSave(req, res, next, user, 201);
        } catch (err) {
            next(err);
        }
    });

    app.post("/api/login", (req, res, next) => {
        passport.authenticate("local", (err: Error | null, user: User | false, info: { message: string } | undefined) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(401).send("Invalid credentials");
            }
            loginAndSave(req, res, next, user, 200);
        })(req, res, next);
    });

    app.post("/api/logout", (req, res, next) => {
        req.logout((err) => {
            if (err) return next(err);
            res.sendStatus(200);
        });
    });

    // Auth user endpoint - returns current authenticated user
    app.get("/api/auth/user", (req, res) => {
        if (!req.isAuthenticated()) {
            // Log enough context to diagnose cold-start logouts without needing DEBUG=true
            const hasPassportSession = !!(req.session as any)?.passport?.user;
            console.log(`[Auth] /api/auth/user 401 — session id: ${req.sessionID}, has passport.user: ${hasPassportSession}, isNew: ${req.session.isNew ?? 'n/a'}`);
            return res.sendStatus(401);
        }
        res.json(req.user);
    });

    app.get("/api/user", (req, res) => {
        if (!req.isAuthenticated()) return res.sendStatus(401);
        res.json(req.user);
    });

    app.patch("/api/user", async (req, res, next) => {
        if (!req.isAuthenticated()) return res.sendStatus(401);
        try {
            const userId = (req.user as User).id;
            const { username, email, firstName, lastName, profileImageUrl, bio } = req.body;

            const updates: Partial<InsertUser> = {};
            if (username !== undefined) updates.username = username;
            if (email !== undefined) updates.email = email;
            if (firstName !== undefined) updates.firstName = firstName;
            if (lastName !== undefined) updates.lastName = lastName;
            if (profileImageUrl !== undefined) updates.profileImageUrl = profileImageUrl;
            if (bio !== undefined) updates.bio = bio;

            const updatedUser = await storage.updateUser(userId, updates);

            loginAndSave(req, res, next, updatedUser, 200);
        } catch (error: any) {
            if (error.message === "Username already exists" || error.message === "Email already exists") {
                res.status(400).send(error.message);
            } else {
                console.error("Update profile error:", error);
                res.status(500).json({ error: "Failed to update profile" });
            }
        }
    });

    app.patch("/api/user/password", async (req, res) => {
        if (!req.isAuthenticated()) return res.sendStatus(401);
        try {
            const userId = (req.user as User).id;
            const { currentPassword, newPassword } = req.body;
            if (!currentPassword || typeof currentPassword !== "string" || !newPassword || typeof newPassword !== "string") {
                return res.status(400).json({ error: "Current password and new password are required" });
            }
            if (newPassword.length < 6) {
                return res.status(400).json({ error: "New password must be at least 6 characters" });
            }
            const user = await storage.getUser(userId);
            if (!user || !(await comparePasswords(currentPassword, user.password))) {
                return res.status(401).json({ error: "Current password is incorrect" });
            }
            const hashedPassword = await hashPassword(newPassword);
            await storage.updateUser(userId, { password: hashedPassword });
            res.json({ ok: true });
        } catch (error: any) {
            console.error("Change password error:", error);
            res.status(500).json({ error: "Failed to change password" });
        }
    });
}
