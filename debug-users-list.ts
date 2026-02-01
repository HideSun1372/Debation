
import dotenv from "dotenv";

async function main() {
    dotenv.config();

    // Dynamic import to ensure env vars are loaded first
    const { db } = await import("./server/db");
    const { users } = await import("./shared/schema");

    // Ensure DB connection
    if (!db) {
        console.error("Database connection not available");
        return;
    }

    console.log("Fetching all users...");
    const allUsers = await db.select().from(users);

    console.log(`Found ${allUsers.length} users:`);
    allUsers.forEach(u => {
        console.log({
            id: u.id,
            username: u.username,
            email: u.email,
            totalDebates: u.totalDebates
        });
    });

    process.exit(0);
}

main().catch(console.error);
