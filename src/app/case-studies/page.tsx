import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesListing } from "@/components/case-studies/CaseStudiesListing";
import { PageBackground } from "@/components/PageBackground";
import { buildMetadata, collectionPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Case Studies | Tapito",
  description:
    "Discover how 500+ retail brands use Tapito AI to grow revenue, retain customers, and make smarter decisions.",
  path: "/case-studies",
});

const CaseStudiesPage = () => {
  const url = `${SITE.url}/case-studies`;
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafbfc]">
      <JsonLd
        schema={[
          collectionPageSchema(
            "Case Studies | Tapito",
            "Discover how 500+ retail brands use Tapito AI to grow revenue, retain customers, and make smarter decisions.",
            url,
          ),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Case Studies", url },
          ]),
        ]}
      />

      {/* ── Background ──────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <PageBackground />

      <CaseStudiesHero />
      <CaseStudiesListing />

    </main>
  );
};

export default CaseStudiesPage;
