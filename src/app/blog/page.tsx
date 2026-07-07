import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Blog from "@/components/sections/Blog";
import CtaBanner from "@/components/sections/CtaBanner";
import { ARTICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the studio on how we build — process, engineering, and craft. Opinions from shipping real products, written plainly and happy to be argued with.",
};

export default function BlogPage() {
  const topicCount = new Set(ARTICLES.map((a) => a.category)).size;

  return (
    <>
      <PageHero
        label="Blog"
        title="Notes from"
        accent="the studio."
        description="Honest writing on how we actually build — the tech we're betting on, the industry shifts worth caring about, and the process and craft calls we stand by. No thought-leadership fog, just what we've learned shipping real work."
        meta={[
          { label: "Posts", value: String(ARTICLES.length) },
          { label: "Topics", value: String(topicCount) },
        ]}
      />
      <Blog />
      <CtaBanner
        title="Like how we think?"
        accent="Let's build together."
        description="If our take on process and craft lines up with how you want your product built, tell us what you're working on — we reply within 24 hours."
      />
    </>
  );
}
