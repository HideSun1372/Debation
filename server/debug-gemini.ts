import { exec } from "child_process";
import * as dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("GEMINI_API_KEY is missing in .env");
    process.exit(1);
}

// Check if key looks like an OpenAI key (sk-...)
if (apiKey.startsWith("sk-proj") || apiKey.startsWith("sk-")) {
    console.warn("WARNING: The key starting with 'sk-' might be an OpenAI key, not a Gemini key (usually AIza... or similar).");
}

const command = `curl "https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}"`;

console.log("Executing curl command to list models...");
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    if (stderr && !stdout) {
        console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
});
