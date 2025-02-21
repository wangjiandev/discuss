"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SignOutButtonClient = () => {
  return (
    <Button variant="secondary" onClick={() => signOut()}>
      Sign Out Client
    </Button>
  );
};

export default SignOutButtonClient;
