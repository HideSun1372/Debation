import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL is not set. Using in-memory storage.");
}

const pool = process.env.DATABASE_URL ? new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  // Keep TCP connections alive so the first request after cold start doesn't
  // need a full reconnect (which can fail when connect-pg-simple's session
  // lookup races against a dropped idle connection).
  keepAlive: true,
  keepAliveInitialDelayMillis: 10000,
  // Don't close idle connections too aggressively — 60 s gives the server
  // time to warm up and serve the first user request before the connection
  // is dropped.
  idleTimeoutMillis: 60000,
  // Fail fast if Neon is somehow unreachable, rather than hanging forever.
  connectionTimeoutMillis: 10000,
}) : null;

if (pool) {
  pool.on("error", (err) => {
    console.error("Unexpected DB pool error:", err.message);
  });
}

// Ensure session table exists on startup
export async function initializeSessionTable() {
  if (!pool) {
    console.log("No database pool available, skipping session table init");
    return;
  }

  const maxRetries = 3;
  let lastError: any;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[Session Init] Attempt ${attempt}/${maxRetries}: Initializing session table...`);

      await pool.query(`
        CREATE TABLE IF NOT EXISTS sessions (
          sid varchar PRIMARY KEY,
          sess jsonb NOT NULL,
          expire timestamp NOT NULL
        );
      `);

      await pool.query(`
        CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON sessions ("expire");
      `);

      console.log("✓ Session table initialized successfully");
      return;
    } catch (err: any) {
      lastError = err;
      console.error(`✗ Attempt ${attempt} failed:`, err.message);

      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1s before retry
      }
    }
  }

  console.error("✗ Failed to initialize session table after", maxRetries, "attempts");
  throw lastError;
}

// Don't initialize here - it's done in index.ts before routes are registered
// initializeSessionTable().catch(err => {
//   console.error("Session table initialization failed:", err.message);
// });

export { pool };
export const db = pool ? drizzle(pool) : null;
