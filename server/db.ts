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
  // Keep idle connections alive slightly longer than the heartbeat interval
  // (4 min) so there is always a warm connection ready when a user request
  // arrives between heartbeat ticks. Without this, the pool drops its
  // connection after 60 s and every request in the 60s–240s window has to
  // establish a new TCP+SSL connection to Neon, which can fail or be slow
  // enough to trigger a 500 and a false client-side logout.
  idleTimeoutMillis: 270000, // 4.5 minutes — just above the 4-min heartbeat
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

// Keep the database connection (and Neon's compute) alive with a periodic
// heartbeat. Without this, two things happen after a cold start:
//   1. The pg pool closes its idle connection after idleTimeoutMillis (default 10s).
//   2. Neon's free tier suspends compute after ~5 minutes of inactivity.
// When the first user request arrives after either of these, connect-pg-simple
// needs to run TWO sequential DB queries before it can return a session.
// If those queries are slow (reconnect + Neon wake), express-session may create
// a NEW empty session and send a fresh Set-Cookie — permanently logging the user
// out because the browser's old session cookie is replaced.
// Pinging every 4 minutes keeps the pool connection warm and Neon awake.
export function startDbHeartbeat() {
  if (!pool) return;

  const HEARTBEAT_INTERVAL_MS = 4 * 60 * 1000; // 4 minutes

  const ping = async () => {
    try {
      await pool.query("SELECT 1");
    } catch (err: any) {
      console.warn("[DB Heartbeat] ping failed:", err.message);
    }
  };

  ping(); // warm Neon immediately — don't wait 4 min for the first tick
  const timer = setInterval(ping, HEARTBEAT_INTERVAL_MS);
  timer.unref();

  console.log("[DB Heartbeat] Started (immediate ping + interval: 4 min)");
}

export { pool };
export const db = pool ? drizzle(pool) : null;
