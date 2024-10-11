import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_NEON_DATABASE_URL!);
export const db = drizzle(sql);
