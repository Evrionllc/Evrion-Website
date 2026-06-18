import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OurValues from "@/components/sections/OurValues";
import WhyUs from "@/components/sections/WhyUs";
import Articles from "@/components/sections/Articles";
import Stats from "@/components/sections/Stats";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "The values and people behind Kinetiq — a deliberately small, senior-only studio measured on outcomes.",
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        label="Studio"
        title="Deliberately small."
        accent="Relentlessly senior."
        description="Kinetiq is what happens when designers and engineers who got tired of how agencies work build the alternative: a small team, a high bar, and zero interest in being the biggest — only the best to work with."
      />
      <OurValues />
      <Stats />
      <WhyUs />
      <Articles />
      <CtaBanner
        title="Sound like a team"
        accent="you'd want on yours?"
        description="We take on a handful of new partners each year — deliberately. Tell us about your product and let's see if we're a fit."
      />
    </>
  );
}
