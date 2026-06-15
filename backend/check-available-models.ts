import { exec } from "child_process";
import * as dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const command = `curl "https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}"`;

console.log("Fetching model list...");
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    try {
        const data = JSON.parse(stdout);
        if (data.models) {
            const flashModels = data.models.filter((m: any) => m.name.includes("flash"));
            console.log("Found Flash Models:");
            flashModels.forEach((m: any) => console.log(`- ${m.name} (${m.displayName})`));

            const proModels = data.models.filter((m: any) => m.name.includes("pro"));
            console.log("\nFound Pro Models:");
            proModels.forEach((m: any) => console.log(`- ${m.name} (${m.displayName})`));
        } else {
            console.log("No models found in response:", stdout.substring(0, 200));
        }
    } catch (e) {
        console.error("Failed to parse JSON:", e);
        console.log("Raw output:", stdout.substring(0, 200));
    }
});
