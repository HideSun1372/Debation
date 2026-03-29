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

export { pool };
export const db = pool ? drizzle(pool) : null;
