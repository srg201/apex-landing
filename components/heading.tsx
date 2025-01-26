'use client';
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4";
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  children: React.ReactNode;
}

const styles = {
    'h1': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium',
    'h2': 'text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-primary inline-block text-transparent to-secondary bg-clip-text text-center',
    'h3': 'text-lg sm:text-xl md:text-2xl ',
    'h4': 'text-md sm:text-lg md:text-xl',
}

const weights = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

export const Heading: React.FC<Props> = ({ className, as = 'h2', children, weight = 'bold' }) => {
    const Tag = as;
  return <Tag className={cn('', styles[as], weights[weight], className)}>
    {children}
  </Tag>;
};
