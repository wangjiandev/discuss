"use client";

import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

const Welcome = () => {
  const { data: session, status } = useSession();
  return (
    <div className="h-36 flex justify-center items-start px-8 flex-col">
      {status === "loading" ? (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold">{session?.user?.name}</h1>
          <p className="text-base text-[#666687]">
            Welcome to your administration panel
          </p>
        </>
      )}
    </div>
  );
};

export default Welcome;
