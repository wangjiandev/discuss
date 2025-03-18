import * as schema from "./schema";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: process.env.AUTH_DRIZZLE_URL!,
  max: 10,
});

export const db = drizzle(pool, { schema });
