import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/components/case-studies/data";
import CaseStudyDetail from "@/components/case-studies/CaseStudyDetail";
import { buildMetadata, articleSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ id: String(cs.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cs = CASE_STUDIES.find((c) => String(c.id) === id);
  if (!cs) return {};
  return buildMetadata({
    title: `${cs.company} Case Study | Tapito`,
    description: cs.summary,
    path: `/case-studies/${id}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cs = CASE_STUDIES.find((c) => String(c.id) === id);
  if (!cs) notFound();
  const url = `${SITE.url}/case-studies/${id}`;
  return (
    <>
      <JsonLd
        schema={[
          articleSchema(
            `${cs.company} Case Study | Tapito`,
            cs.summary,
            url,
            cs.date,
          ),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Case Studies", url: `${SITE.url}/case-studies` },
            { name: `${cs.company} Case Study`, url },
          ]),
        ]}
      />
      <CaseStudyDetail cs={cs} />
    </>
  );
}
