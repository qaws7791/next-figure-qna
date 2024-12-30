import { defineConfig } from "drizzle-kit";
import "./src/utils/env";

export default defineConfig({
  dialect: "turso",
  schema: "./src/lib/db/schema.ts",
  out: "./src/lib/db/drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
});
