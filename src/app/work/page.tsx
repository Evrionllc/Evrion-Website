import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Work from "@/components/sections/Work";
import WorkArchive from "@/components/sections/WorkArchive";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects — platforms, products, and experiences we have designed and engineered for ambitious teams.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="Proof,"
        accent="not promises."
        description="Every project here is built to a defined scope and delivered on a committed timeline. We show outcomes, not descriptions."
        meta={[
          { label: "Projects delivered", value: "20+" },
          { label: "Industries", value: "14" },
        ]}
      />
      <Work />
      <WorkArchive />
      <Testimonials />
      <CtaBanner
        title="Want your product"
        accent="on this page?"
        description="The next case study could be yours. Tell us what you have in mind and we'll build it for you."
      />
    </>
  );
}
