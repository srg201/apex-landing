"use client";
import ContactDialog from "@/components/contact-dialog";
import { Container } from "@/components/container";
import { HeaderMenu } from "@/components/header-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menu } from "@/data/menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  className?: string;
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex gap-1 items-center md:hidden">
      <ThemeToggle />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu className="stroke-primary w-7 h-7" size={25} />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start gap-4 w-full">
          <SheetHeader>
            <SheetTitle className="hidden"></SheetTitle>
          </SheetHeader>
              <nav className={cn("")}>
      <ul className={cn("flex gap-7",'flex-col gap-4 justify-center')}>
        {menu.map((item) => (
          <li
            onClick={() => setOpen(false)}
            className={cn(
              "text-md bg-gradient-to-r from-gray-500 to-gray-500 inline-block text-transparent bg-clip-text font-bold relative before:content-[''] before:w-0 transition-all duration-500 before:transition-all before:duration-500 before:h-[1px] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:bg-gradient-to-r before:from-primary before:to-secondary hover:before:w-full hover:bg-gradient-to-r hover:from-primary hover:to-secondary",
              'text-2xl',
            )}
            key={item.id}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
          <div className="flex gap-1 items-center mt-4">
            <ContactDialog>
              <Button className="w-full md:w-auto" size={"default"}>
              Apply Now
            </Button>
            </ContactDialog>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const DesktopMenu = () => {
  return (
    <>
      <HeaderMenu className="md:block hidden" />

      <div className="hidden gap-1 items-center md:flex">
        <ContactDialog><Button size={"default"}>Apply Now</Button></ContactDialog>
        <ThemeToggle />
      </div>
    </>
  );
};

export const Header: React.FC<Props> = ({ className }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = '/logo-white.svg';

  return (
    <header
      className={cn(
        "py-2 md:py-4 sticky w-full left-0 top-0 bg-background/90 backdrop-blur-lg z-50",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href={"/#hero"}>
          {!mounted ? (
            <Image 
              src={logoSrc}
              width={150} 
              height={150} 
              alt='APEX Nerd Labs'
              priority
            />
          ) : (
            <Image 
              src={resolvedTheme === 'dark' ? '/logo-white.svg' : '/logo-dark.svg'}
              width={150} 
              height={150} 
              alt='APEX Nerd Labs'
              priority
              suppressHydrationWarning
            />
          )}
        </Link>

        <DesktopMenu />
        <MobileMenu />
      </Container>
    </header>
  );
};
