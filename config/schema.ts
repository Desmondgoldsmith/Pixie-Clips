import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("user_table", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  imageURL: varchar("imageURL"),
  subscription: boolean("subscription").default(false),
});

export type InsertUser = typeof usersTable.$inferInsert;
