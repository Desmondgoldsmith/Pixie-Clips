import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("user_table", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  imageURL: varchar("imageURL"),
  subscription: boolean("subscription").default(false),
});
