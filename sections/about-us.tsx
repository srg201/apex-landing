import { Container } from '@/components/container';
import { Heading } from '@/components/heading';
import { Subtitle } from '@/components/subtitle';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
className?: string;
}

export const AboutUs: React.FC<Props> = ({ className }) => {
  return (
    <section id='about-us' className={cn('py-16', className)}>
        <Container className='flex flex-col items-center gap-7'>
            <Heading as='h2' weight='medium'>Company</Heading>
            <Subtitle className='text-center'>
                Our mission is to create a world where every person feels heard, understood, and valued. We believe in empowering individuals to lead meaningful lives and contribute to a better future.
            </Subtitle>
            {/* About us content */}
        </Container>
    </section>
  );
};