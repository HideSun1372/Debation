import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("GEMINI_API_KEY is missing in .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    try {
        // There isn't a direct listModels method on the client instance in some versions, 
        // but we can try to get a model and see if it works, or check documentation.
        // Actually, checking the error message "Call ListModels to see the list..." 
        // suggests there might be a way, but the SDK simplifies this.
        // Let's try to just run a simple prompt on a few common variants.

        const candidates = [
            "gemini-1.5-flash",
            "gemini-1.5-flash-001",
            "gemini-1.5-flash-latest",
            "gemini-pro",
            "gemini-1.0-pro"
        ];

        console.log("Testing model availability...");

        for (const modelName of candidates) {
            process.stdout.write(`Testing ${modelName}... `);
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Hello, are you there?");
                const response = result.response.text();
                console.log(`SUCCESS!`);
            } catch (error: any) {
                console.log(`FAILED: ${error.message.split('\n')[0]}`);
            }
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

listModels();
