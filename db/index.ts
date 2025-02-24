import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

export const db = drizzle(process.env.AUTH_DRIZZLE_URL!, { schema });
