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

      // Clean up expired sessions
      const result = await pool.query(`
        DELETE FROM sessions WHERE expire < NOW();
      `);
      console.log(`[Session Init] Cleaned up ${result.rowCount} expired sessions`);

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

// Call on module load for background init
initializeSessionTable().catch(err => {
  console.error("Session table initialization failed:", err.message);
  // Don't exit, allow the app to run and create table on-demand if needed
});

export { pool };
export const db = pool ? drizzle(pool) : null;
