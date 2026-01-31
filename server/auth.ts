
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
    res.status(401).send("Not authenticated");
}

export function setupAuth(app: Express) {
    // Session setup
    const sessionSettings: session.SessionOptions = {
        secret: process.env.SESSION_SECRET || "dev_secret_key",
        resave: false,
        saveUninitialized: false,
        store: storage.sessionStore,
    };

    if (app.get("env") === "production") {
        app.set("trust proxy", 1);
    }

    app.use(session(sessionSettings));
    app.use(passport.initialize());
    app.use(passport.session());

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
            done(null, user);
        } catch (err) {
            done(err);
        }
    });

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

            req.login(user, (err) => {
                if (err) return next(err);
                res.status(201).json(user);
            });
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
            req.login(user, (err) => {
                if (err) return next(err);
                res.status(200).json(user);
            });
        })(req, res, next);
    });

    app.post("/api/logout", (req, res, next) => {
        req.logout((err) => {
            if (err) return next(err);
            res.sendStatus(200);
        });
    });

    app.get("/api/user", (req, res) => {
        if (!req.isAuthenticated()) return res.sendStatus(401);
        res.json(req.user);
    });

    app.patch("/api/user", async (req, res) => {
        if (!req.isAuthenticated()) return res.sendStatus(401);
        try {
            const userId = (req.user as User).id;
            const { username, email, firstName, lastName, profileImageUrl } = req.body;

            const updates: Partial<InsertUser> = {};
            if (username !== undefined) updates.username = username;
            if (email !== undefined) updates.email = email;
            if (firstName !== undefined) updates.firstName = firstName;
            if (lastName !== undefined) updates.lastName = lastName;
            if (profileImageUrl !== undefined) updates.profileImageUrl = profileImageUrl;

            const updatedUser = await storage.updateUser(userId, updates);

            // Login with updated user to refresh session
            req.login(updatedUser, (err) => {
                if (err) {
                    // Even if login update fails, we return the user, 
                    // though session might be stale until next reload.
                    console.error("Session update failed:", err);
                }
                res.json(updatedUser);
            });
        } catch (error: any) {
            if (error.message === "Username already exists" || error.message === "Email already exists") {
                res.status(400).send(error.message);
            } else {
                console.error("Update profile error:", error);
                res.status(500).json({ error: "Failed to update profile" });
            }
        }
    });
}
