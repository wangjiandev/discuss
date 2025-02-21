"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SignInButtonClient = () => {
  return <Button onClick={() => signIn()}>Sign In Client</Button>;
};

export default SignInButtonClient;
