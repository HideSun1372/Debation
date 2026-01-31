
import session from "express-session";
import createMemoryStore from "memorystore";

try {
    console.log("Importing...");
    const MemoryStore = createMemoryStore(session);
    console.log("Created Store Constructor");
    const store = new MemoryStore({
        checkPeriod: 86400000
    });
    console.log("Instantiated Store");
} catch (e) {
    console.error("Error:", e);
}
