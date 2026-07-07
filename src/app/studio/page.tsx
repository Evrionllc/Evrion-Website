import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NameOrigin from "@/components/sections/NameOrigin";
import OurValues from "@/components/sections/OurValues";
import WhyUs from "@/components/sections/WhyUs";
// Writing/Articles is hidden on the Studio page — the same posts live on the
// Blog page. Re-enable the import and the <Articles /> below to bring it back.
// import Articles from "@/components/sections/Articles";
import Stats from "@/components/sections/Stats";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "The values and people behind Evrion — a studio measured on outcomes, not hours.",
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        label="Studio"
        title="Built on discipline,"
        accent={"not momentum."}
        description="Evrion is a precision software studio focused on disciplined engineering and clear decision-making. We build with long-term intent, not short-term pressure."
      />
      <NameOrigin />
      <OurValues />
      <Stats />
      <WhyUs />
      {/* Writing section hidden — articles are shown on the Blog page instead. */}
      {/* <Articles /> */}
      <CtaBanner
        title="Think we'd work"
        accent="well together?"
        description="If our way of working feels like the right fit, we'd love to hear what you have in mind."
      />
    </>
  );
}
