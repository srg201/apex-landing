import React from "react";
import { HeaderMenu } from "./header-menu";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

interface Props {
  className?: string;
}

export const DesktopMenu: React.FC<Props> = ({ }) => {
  return (
    <>
      <HeaderMenu className="md:block hidden" />

      <div className="hidden gap-1 items-center md:flex">
        <Button size={"default"}>Apply Now</Button>
        <ThemeToggle />
      </div>
    </>
  );
};
