import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import ServiceFlow from "@/components/sections/ServiceFlow";
import Technologies from "@/components/sections/Technologies";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, software and mobile development, UI/UX, and engineering support — the full stack of a precision software studio.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="One standard."
        accent="Every discipline."
        description="From product strategy to design and engineering, every part of the work is held to the same standard. Whether we're responsible for a single phase or the entire product, the outcome is software your business can stand on."
      />
      <Services expandable />
      <Technologies />
      <Pricing />
      <ServiceFlow />
      <CtaBanner
        title="Not sure which"
        accent="service you need?"
        description="Most projects span multiple areas. We define scope and map the path forward in a short conversation."
      />
    </>
  );
}
