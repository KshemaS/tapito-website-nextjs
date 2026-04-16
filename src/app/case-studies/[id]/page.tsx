import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/components/case-studies/data";
import CaseStudyDetail from "@/components/case-studies/CaseStudyDetail";

/* ── Static params for pre-rendering ─────────────────────── */
export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ id: String(cs.id) }));
}

/* ── Metadata ─────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cs = CASE_STUDIES.find((c) => String(c.id) === id);
  if (!cs) return {};
  return {
    title: `${cs.company} Case Study | Tapito`,
    description: cs.summary,
  };
}

/* ── Page ─────────────────────────────────────────────────── */
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cs = CASE_STUDIES.find((c) => String(c.id) === id);
  if (!cs) notFound();
  return <CaseStudyDetail cs={cs} />;
}
