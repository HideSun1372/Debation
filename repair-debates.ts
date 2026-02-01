
import dotenv from "dotenv";
dotenv.config();

async function main() {
    const { db } = await import("./server/db");
    const { debates } = await import("./shared/schema");
    const { eq, and } = await import("drizzle-orm");

    const userId = "ba107d8a-0c2f-4639-8838-52392214ec98"; // ID from debug-debates.ts

    if (!db) {
        console.error("Database connection not available");
        return;
    }

    console.log(`Checking for in_progress debates for user ${userId}...`);

    const stuckDebates = await db.select().from(debates)
        .where(and(eq(debates.userId, userId), eq(debates.status, "in_progress")));

    console.log(`Found ${stuckDebates.length} stuck debates.`);

    for (const debate of stuckDebates) {
        console.log(`Fixing debate ${debate.id} (started at ${debate.startedAt})...`);
        await db.update(debates)
            .set({
                status: "completed",
                result: "loss", // Default to loss for abandoned/stuck debates
                pointsChange: -5,
                feedback: "Debate ended unexpectedly.",
                completedAt: new Date()
            })
            .where(eq(debates.id, debate.id));
    }

    console.log("Repair complete.");
    process.exit(0);
}

main().catch(console.error);
