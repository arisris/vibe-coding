import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { UserRole } from "../types";

const createdAt = integer("created_at", { mode: "timestamp" })
  .default(sql`(unixepoch())`)
  .notNull();
const updatedAt = integer("updated_at", { mode: "timestamp" })
  .default(sql`(unixepoch())`)
  .notNull();

export const userTable = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("display_name").notNull(),
  image: text("photo_url"),
  emailVerified: integer("email_verified", { mode: "boolean" }).default(false),
  email: text("email").notNull(),
  role: text("role").notNull().default(UserRole.USER),
  createdAt,
  updatedAt,
});

export const chatTable = sqliteTable("chat", {
  id: text("id").notNull().primaryKey(),
  title: text("title").notNull(),
  userId: text("user_id").notNull(),
  createdAt,
  updatedAt,
});

export const messageTable = sqliteTable("message", {
  id: text("id").notNull().primaryKey(),
  chatId: text("chat_id").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  createdAt,
  updatedAt,
  deletedAt: integer("deleted_at", { mode: "timestamp" }),
});

export const chatRelations = relations(chatTable, ({ many }) => ({
  messages: many(messageTable),
}));
