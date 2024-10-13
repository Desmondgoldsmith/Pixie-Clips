import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });
const sql = neon(
  "postgresql://pixieClipsDB_owner:PfV5ga9GqZDs@ep-falling-meadow-a5tnb744.us-east-2.aws.neon.tech/pixieClipsDB?sslmode=require"
);
export const db = drizzle(sql);
