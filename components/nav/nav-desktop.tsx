/* eslint-disable @typescript-eslint/no-misused-promises */

"use client";

import Link from "next/link";
import { LogOut, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOutAction } from "@/actions/auth-action";
interface NavProps {
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    path: string;
  }[];
}

export function Nav({ links }: NavProps) {
  const { data } = useSession();
  const pathname = usePathname();
  return (
    <div className=" group h-screen border-r border-border w-60 flex flex-col gap-4 py-4 px-2 ">
      <div className="flex items-center px-2 py-1 rounded text-sm gap-2 bg-muted">
        <Image
          src={data?.user?.image || ""}
          alt={data?.user?.name || ""}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full"
        />
        <div className="flex flex-col ">
          <span className="text-muted-foreground">{data?.user?.name}</span>
          <span className="text-xs text-muted-foreground">
            {data?.user?.email}
          </span>
        </div>
      </div>

      <nav className="grid gap-1 px-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={cn(
              buttonVariants({
                variant: pathname.includes(link.path) ? "default" : "ghost",
                size: "sm",
              }),
              "justify-start"
            )}>
            <link.icon className="mr-2 h-4 w-4" />
            {link.title}
            {link.label && (
              <span
                className={cn(
                  "ml-auto",
                  pathname.includes(link.path) &&
                    "text-background dark:text-white"
                )}>
                {link.label}
              </span>
            )}
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <form action={signOutAction}>
          <Button type="submit" className="w-full h-8 space-x-2">
            <span>Logout</span>
            <LogOut size={16} />
          </Button>
        </form>
      </div>
    </div>
  );
}
