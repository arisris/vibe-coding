import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  schema: "./src/lib/server/db.schema.ts",
  out: "./migrations",
});
