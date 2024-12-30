import { drizzle } from "drizzle-orm/libsql";

const DATABASE_URL = process.env.DATABASE_URL!;
const DATABASE_AUTH_TOKEN = process.env.DATABASE_AUTH_TOKEN!;

export const db = drizzle({
  connection: {
    url: DATABASE_URL,
    authToken: DATABASE_AUTH_TOKEN,
  },
});
