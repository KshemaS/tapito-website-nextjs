import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Real-Time Profitability Engine | Tapito",
  description:
    "Stop scaling losses. Identify and block profit leaks while spend is active with Tapito's live margin-protection intelligence and real-time profitability tracking.",
  path: "/features/profitability-engine",
});

export default function ProfitabilityEnginePage() {
  const url = `${SITE.url}/features/profitability-engine`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Real-Time Profitability Engine",
            "Stop scaling losses. Identify and block profit leaks while spend is active with live margin-protection intelligence.",
            url,
          ),
          webPageSchema("Real-Time Profitability Engine | Tapito", "Stop scaling losses. Identify and block profit leaks while spend is active with live margin-protection intelligence.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Real-Time Profitability Engine", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
