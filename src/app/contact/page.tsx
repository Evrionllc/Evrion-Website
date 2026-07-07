import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";
import ContactSteps from "@/components/sections/ContactSteps";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with us — tell us where you want to go and we will map the fastest route there.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Built by the people"
        accent="who stay with it."
        description="Your message goes directly to the people who design and build your system."
        meta={[
          { label: "Response time", value: "< 24 hours" },
        ]}
      />
      <Contact />
      <ContactSteps />
      <Faq />
    </>
  );
}
