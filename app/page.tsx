import { AboutUs } from "@/sections/about-us";
import { Contact } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
    </>
  );
}
