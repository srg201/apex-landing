import ContactDialog from "@/components/contact-dialog";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subtitle } from "@/components/subtitle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  return (
    <section
      id='hero'
      className={cn(
        "py-20 lg:py-60 bg-[url('/gradient.png')] bg-center bg-no-repeat bg-cover relative bg-fixed",
        className
      )}
    >
      <Container className="text-center flex flex-col gap-7 items-center relative z-[2]">
        <Heading as="h1" weight="medium">
          APEX Nerd Labs - Your <br /> Trusted AI Consulting Partner
        </Heading>
        <Subtitle className="max-w-lg text-center text-gray-300" size="xl" weight="medium">
          We&apos;re here to help you unlock the full potential of your AI solutions.
          Let&apos;s build the future together.
          <br />
          Learn more about us
        </Subtitle>
        <ContactDialog>
          <Button className="self-center" size={'lg'}>Apply Now</Button>
        </ContactDialog>
      </Container>
    </section>
  );
};
