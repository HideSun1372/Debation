import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL is not set. Using in-memory storage.");
}

const pool = process.env.DATABASE_URL ? new pg.Pool({
  connectionString: process.env.DATABASE_URL,
}) : null;

if (pool) {
  pool.on("error", (err) => {
    console.error("Unexpected DB pool error:", err.message);
  });
}

// Ensure session table exists on startup
export async function initializeSessionTable() {
  if (!pool) return;

  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS sessions (
        sid varchar NOT NULL COLLATE "default" PRIMARY KEY,
        sess json NOT NULL,
        expire timestamp(6) NOT NULL
      );
      CREATE INDEX IF NOT EXISTS "IDX_session_expire" on sessions ("expire");
    `);
    console.log("Session table initialized");
  } catch (err) {
    console.error("Failed to initialize session table:", err);
  }
}

// Call on module load for background init
initializeSessionTable().catch(err => {
  console.error("Background session table init failed:", err);
});

export { pool };
export const db = pool ? drizzle(pool) : null;
