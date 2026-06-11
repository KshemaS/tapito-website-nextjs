import { buildMetadata, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import ResourcesPageContent from "./ResourcesPageContent";

export const metadata = buildMetadata({
  title: "Resources | Tapito",
  description:
    "Explore Tapito's guides, case studies, and retail AI resources to help you grow your retail business with data-driven intelligence.",
  path: "/resources",
});

export default function ResourcesPage() {
  const url = `${SITE.url}/resources`;
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema("Resources | Tapito", "Explore Tapito's guides, case studies, and retail AI resources.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Resources", url },
          ]),
        ]}
      />
      <ResourcesPageContent />
    </>
  );
}
