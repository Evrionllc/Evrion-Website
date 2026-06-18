import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Labs from "@/components/sections/Labs";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "Built in the open — live demos, works in progress, and experiments from the studio. Some shipped, some half-finished, all honest.",
};

export default function LabsPage() {
  return (
    <>
      <PageHero
        label="Labs"
        title="Built in"
        accent="the open."
        description="Not everything is a polished case study. Labs is the workbench — live demos you can click, projects mid-flight, and experiments that may or may not graduate. We'd rather show you the work in motion than only the highlight reel."
        meta={[
          { label: "Live demos", value: "3" },
          { label: "In progress", value: "4" },
        ]}
      />
      <Labs />
      <CtaBanner
        title="Got an experiment"
        accent="worth running?"
        description="Some of our favorite projects started as a half-formed idea in here. If you've got one, tell us — we like building things nobody's sure will work yet."
      />
    </>
  );
}
