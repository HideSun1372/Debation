import dotenv from "dotenv";
dotenv.config();

async function main() {
    const { db } = await import("./server/db");
    const { debates } = await import("./shared/schema");
    const { desc } = await import("drizzle-orm");

    // Ensure DB connection
    if (!db) {
        console.error("Database connection not available");
        return;
    }

    console.log("Fetching recent debates...");
    const recentDebates = await db.select().from(debates).orderBy(desc(debates.startedAt)).limit(5);

    console.log("Found", recentDebates.length, "debates:");
    recentDebates.forEach(d => {
        console.log({
            id: d.id,
            userId: d.userId,
            status: d.status,
            startedAt: d.startedAt,
            completedAt: d.completedAt,
            result: d.result
        });
    });

    process.exit(0);
}

main().catch(console.error);
