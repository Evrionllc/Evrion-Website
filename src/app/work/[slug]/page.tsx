import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudy from "@/components/sections/CaseStudy";
import CtaBanner from "@/components/sections/CtaBanner";
import { PROJECTS, WORK_ARCHIVE } from "@/lib/data";

// Both featured projects and archive entries get a detail page.
const ALL_PROJECTS = [...PROJECTS, ...WORK_ARCHIVE];

export function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <CaseStudyHero project={project} />
      <CaseStudy project={project} />
      <CtaBanner
        title="Want your product"
        accent="on this page?"
        description="The next case study could be yours. Tell us what you're building and we'll tell you honestly how we'd ship it."
      />
    </>
  );
}
