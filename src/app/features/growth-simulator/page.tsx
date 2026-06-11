import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Growth Simulator | Tapito",
  description:
    "Model customer growth carefully with AI. Predict mounting changes, avert migrations, and run high-stakes what-if scenarios with your store's Digital Twin.",
  path: "/features/growth-simulator",
});

export default function GrowthSimulatorPage() {
  const url = `${SITE.url}/features/growth-simulator`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Growth Simulator",
            "Model customer growth carefully. Utilize AI to predict mounting changes and avert migrations.",
            url,
          ),
          webPageSchema("Growth Simulator | Tapito", "Model customer growth carefully. Utilize AI to predict mounting changes and avert migrations.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Growth Simulator", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
