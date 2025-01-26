import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { ServicesCard } from "@/components/services-card";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Services: React.FC<Props> = ({ className }) => {
  return (
    <section id='services' className={cn("py-16", className)}>
      <Container className="flex flex-col items-center gap-7">
        <Heading as="h2" weight="medium">
          Services
        </Heading>
        <p className="text-center">
          We offer a wide range of services. We are here to help you unlock the
          full potential of your AI solutions.
        </p>
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(17.5rem,1fr))] gap-4 w-full">
          {[...new Array(3)].map((_, i) => (
            <ServicesCard key={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
