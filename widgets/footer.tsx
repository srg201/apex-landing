'use client';
import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className={cn('py-6', className)}>
      <Container className='flex flex-col md:flex-row gap-6 justify-between items-center'>
        <Link href={'/'}>
          {!mounted ? (
            <Image 
              src="/logo-white.svg"
              width={150} 
              height={150} 
              alt='APEX Nerd Labs'
            />
          ) : (
            <Image 
              src={resolvedTheme === 'dark' ? '/logo-white.svg' : '/logo-dark.svg'}
              width={150} 
              height={150} 
              alt='APEX Nerd Labs'
              suppressHydrationWarning
            />
          )}
        </Link>
        <small>
          &copy; {new Date().getFullYear()} APEX Nerd Labs. All rights reserved.
        </small>
      </Container>
    </footer>
  );
};