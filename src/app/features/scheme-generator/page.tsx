import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Smart Scheme Generator | Tapito",
  description:
    "AI-driven staff incentives that turn single purchases into multi-category revenue. Generate and simulate staff-level incentive schemes automatically.",
  path: "/features/scheme-generator",
});

export default function SchemeGeneratorPage() {
  const url = `${SITE.url}/features/scheme-generator`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Smart Scheme Generator",
            "AI-driven staff incentives. Turn single purchases into multi-category revenue.",
            url,
          ),
          webPageSchema("Smart Scheme Generator | Tapito", "AI-driven staff incentives. Turn single purchases into multi-category revenue.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Smart Scheme Generator", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
