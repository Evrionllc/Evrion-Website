import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/sections/ArticleView";
import CtaBanner from "@/components/sections/CtaBanner";
import { ARTICLES } from "@/lib/data";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <ArticleView article={article} />
      <CtaBanner
        title="Like how we think?"
        accent="Let's build together."
        description="If our take on process and craft lines up with how you want your product built, tell us what you're working on — we reply within 24 hours."
      />
    </>
  );
}
