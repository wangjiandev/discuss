"use client";

import { auth } from "@/auth";

const UserInfoClient = async () => {
  const session = await auth();

  return <div>{session?.user?.email}</div>;
};

export default UserInfoClient;
