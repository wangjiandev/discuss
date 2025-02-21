import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import authConfig from "./auth.config";

import { db } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
