import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  as?: "p" | "span";
  weight?: "normal" | "medium" | "semibold" | "bold";
  size?: "xl" | "l" | "m" | "s";
  className?: string;
  children: React.ReactNode;
}

const styles = {
  p: "",
  span: "",
};

const weights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const sizes = {
  xl: "text-lg",
  l: "text-base",
  m: "text-sm",
  s: "text-xs",
};

export const Subtitle: React.FC<Props> = ({
  className,
  children,
  as = "p",
  size = "l",
  weight = "normal",
}) => {
  return (
    <p className={cn(styles[as], sizes[size], weights[weight], className)}>
      {children}
    </p>
  );
};
