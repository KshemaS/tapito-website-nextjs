import { solutionDetails, defaultData } from "./solution-data";
import { Metadata } from "next";
import SolutionDetailPageClient from "./SolutionDetailPageClient";
import { buildMetadata, webPageSchema, softwareAppSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

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
  return buildMetadata({
    title: `${data.title} | Tapito - Next-Gen AI Engagement Platform`,
    description: data.description,
    path: `/solutions/${slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = solutionDetails[slug] || defaultData;
  const url = `${SITE.url}/solutions/${slug}`;
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema(`${data.title} | Tapito`, data.description, url),
          softwareAppSchema(data.title, data.description, url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Solutions", url: `${SITE.url}/solutions` },
            { name: data.title, url },
          ]),
        ]}
      />
      <SolutionDetailPageClient slug={slug} />
    </>
  );
}
