import { env } from "$env/dynamic/private";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./db.schema";

const database = createClient({
  url: env.DATABASE_URL,
  encryptionKey: env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(database, { schema });
