import { solutionDetails, defaultData } from "./solution-data";
import { Metadata } from "next";
import SolutionDetailPageClient from "./SolutionDetailPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(solutionDetails).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = solutionDetails[slug] || defaultData;
  return {
    title: `${data.title} | Tapito - Next-Gen AI Engagement Platform`,
    description: data.description,
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  return <SolutionDetailPageClient slug={resolvedParams.slug} />;
}
