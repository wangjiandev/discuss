"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { menus } from "@/config/menus";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import UserInfoClient from "./client/user-info";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 h-screen w-14 bg-white flex flex-col items-center z-[2] border-r border-[#eaeaef]">
      <div className="flex justify-center items-center p-3">
        <Image
          src="data:image/svg+xml,%3csvg width='800' height='800' viewBox='0 0 800 800' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M39 282c0-118 0-176.9 36.6-213.5C112.2 32 171.1 32 288.9 32h221.2c117.8 0 176.7 0 213.3 36.6C760 105.2 760 164.1 760 281.9v221.2c0 117.8 0 176.7-36.6 213.3C686.8 753 627.9 753 510.1 753H288.9c-117.8 0-176.7 0-213.3-36.6C39 679.8 39 620.9 39 503.1V281.9Z' fill='%234945FF'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M536.4 250.7H293.7v123.8h123.8v123.7h123.8V255.5c0-2.6-2.2-4.8-4.9-4.8Z' fill='white'/%3e %3cpath fill='white' d='M412.7 374.5h4.8v4.8h-4.8z'/%3e %3cpath d='M293.8 374.5h119c2.6 0 4.8 2.1 4.8 4.8v119h-119a4.8 4.8 0 0 1-4.8-4.9v-119Z' fill='%239593FF'/%3e %3cpath d='M417.5 498.2h123.8L421.6 618a2.4 2.4 0 0 1-4-1.7v-118ZM293.8 374.5h-118a2.4 2.4 0 0 1-1.7-4.1l119.7-119.7v123.8Z' fill='%239593FF'/%3e%3c/svg%3e"
          alt="logo"
          width={24}
          height={24}
        />
      </div>
      <div className="h-[1px] w-full bg-[#eaeaef]"></div>
      <ul className="flex-1 w-full flex py-3 flex-col items-center gap-3">
        {menus.map((menu) => {
          const isActive = pathname === menu.href;
          return (
            <li key={menu.label} className="flex justify-center items-center">
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <span className="text-center">
                      <Link
                        href={menu.href}
                        className={cn(
                          "flex items-center justify-center bg-white size-8 text-[#8e8ea9] hover:bg-[#f5f5f7] hover:rounded-md overflow-hidden transition-colors",
                          isActive && "bg-[#f0f0ff] rounded-md text-[#4945ff]"
                        )}
                      >
                        <menu.icon className="size-5" />
                      </Link>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={10}>
                    <p>{menu.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-center border-t w-full border-[#eaeaef] p-3">
        <UserInfoClient />
      </div>
    </nav>
  );
};

export default NavBar;
