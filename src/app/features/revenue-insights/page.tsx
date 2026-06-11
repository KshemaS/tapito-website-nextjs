import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Revenue Growth Insights | Tapito",
  description:
    "Identify hidden revenue opportunities and stop sales funnel leakage. Tapito's Revenue Insights pinpoints where your revenue is being lost.",
  path: "/features/revenue-insights",
});

export default function RevenueInsightsPage() {
  const url = `${SITE.url}/features/revenue-insights`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Revenue Growth Insights",
            "Identify high-value opportunities and hidden opportunities in your sales funnel.",
            url,
          ),
          webPageSchema("Revenue Growth Insights | Tapito", "Identify high-value opportunities and hidden opportunities in your sales funnel.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Revenue Growth Insights", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
