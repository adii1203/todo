"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

interface NavProps {
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    path: string;
  }[];
}

export function Nav({ links }: NavProps) {
  const pathname = usePathname();
  return (
    <div className=" group h-screen border-r border-border w-60 flex flex-col gap-4 py-2 ">
      <nav className="grid gap-1 px-2 py-4">
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
    </div>
  );
}
