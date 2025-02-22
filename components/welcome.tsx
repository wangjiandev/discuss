"use client";

import { useSession } from "next-auth/react";

const Welcome = () => {
  const { data: session } = useSession();
  return (
    <div className="h-36">
      <div className="py-14 px-10">
        <h1 className="text-3xl font-bold">Hello {session?.user?.name}</h1>
        <p className="text-base text-[#666687]">
          Welcome to your administration panel
        </p>
      </div>
    </div>
  );
};

export default Welcome;
