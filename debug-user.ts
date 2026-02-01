
import dotenv from "dotenv";

async function main() {
    dotenv.config();
    // Dynamic import to ensure env vars are loaded first
    const { storage } = await import("./server/storage");

    try {
        const id = "ba107d8a-0c2f-4639-8838-52392214ec98"; // ID from previous run
        console.log(`Fetching user with ID: ${id}`);
        const user = await storage.getUser(id);

        if (!user) {
            console.log("User not found!");
        } else {
            console.log("User found:");
            console.log(JSON.stringify(user, null, 2));

            const expected = {
                email: "siqichen0802@gmail.com",
                username: "HideSun1372",
                firstName: "Nandery",
                lastName: "Lolcat"
            };

            console.log("\nComparison:");
            console.log(`Email match: ${user.email === expected.email} ('${user.email}' vs '${expected.email}')`);
            console.log(`Username match: ${user.username === expected.username} ('${user.username}' vs '${expected.username}')`);
            console.log(`FirstName match: ${user.firstName === expected.firstName} ('${user.firstName}' vs '${expected.firstName}')`);
            console.log(`LastName match: ${user.lastName === expected.lastName} ('${user.lastName}' vs '${expected.lastName}')`);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
