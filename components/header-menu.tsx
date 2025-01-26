"use client";
import { menu } from "@/data/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

interface Props {
  className?: string;
  isMobile?: boolean;
}

export const HeaderMenu: React.FC<Props> = ({ className, isMobile = false }) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, []);

  return (
    <nav className={cn("", className)}>
      <ul className={cn("flex gap-7", {'flex-col gap-4 justify-center': isMobile})}>
        {menu.map((item) => (
          <li
            className={cn(
              "text-md bg-gradient-to-r from-gray-500 to-gray-500 inline-block text-transparent bg-clip-text font-bold relative before:content-[''] before:w-0 transition-all duration-500 before:transition-all before:duration-500 before:h-[1px] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:bg-gradient-to-r before:from-primary before:to-secondary hover:before:w-full hover:bg-gradient-to-r hover:from-primary hover:to-secondary",
              {'text-2xl': isMobile},
              { "bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text": pathname === item.path }
            )}
            key={item.id}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
