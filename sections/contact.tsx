import { ContactForm } from '@/components/contact-form';
import { Container } from '@/components/container';
import { Heading } from '@/components/heading';
import { Subtitle } from '@/components/subtitle';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
className?: string;
}

export const Contact: React.FC<Props> = ({ className }) => {
  return (
    <section id='contact' className={cn('py-16', className)}>
        <Container className='flex flex-col items-center gap-7'>
            <Heading as='h2' weight='medium'>Contact</Heading>
            <Subtitle className='text-center'>
                Get in touch with us for any inquiries, questions, or suggestions.
            </Subtitle>
            <ContactForm />
        </Container>
    </section>
  );
};