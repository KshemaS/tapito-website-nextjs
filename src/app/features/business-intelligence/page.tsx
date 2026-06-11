import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Business Intelligence Dashboard | Tapito",
  description:
    "Comprehensive real-time reporting with raw data sync across all your retail outlets. One live command center for revenue, branch performance, and category momentum.",
  path: "/features/business-intelligence",
});

export default function BusinessIntelligencePage() {
  const url = `${SITE.url}/features/business-intelligence`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Business Intelligence Dashboard",
            "Comprehensive real-time reporting with raw data sync across all your retail outlets.",
            url,
          ),
          webPageSchema("Business Intelligence Dashboard | Tapito", "Comprehensive real-time reporting with raw data sync across all your retail outlets.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Business Intelligence Dashboard", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
