import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(import.meta.dirname, "src") },
      { find: "@shared", replacement: path.resolve(import.meta.dirname, "..", "backend", "shared") },
      // drizzle-orm/drizzle-zod are in frontend/node_modules but imported by
      // backend/shared/schema.ts (outside frontend/). Rollup climbs from backend/shared/
      // upward and never reaches frontend/node_modules, so we pin them here.
      { find: /^drizzle-orm(.*)$/, replacement: path.resolve(import.meta.dirname, "node_modules/drizzle-orm") + "$1" },
      { find: /^drizzle-zod(.*)$/, replacement: path.resolve(import.meta.dirname, "node_modules/drizzle-zod") + "$1" },
    ],
  },
  root: import.meta.dirname,
  build: {
    outDir: path.resolve(import.meta.dirname, "..", "dist", "public"),
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000",
      "/ws": { target: "ws://localhost:5000", ws: true },
    },
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
