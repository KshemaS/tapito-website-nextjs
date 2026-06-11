import { buildMetadata, collectionPageSchema, breadcrumbSchema, softwareAppSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import FeaturesPageContent from "./FeaturesPageContent";

export const metadata = buildMetadata({
  title: "Features | Tapito AI Platform",
  description:
    "Explore Tapito's full suite of retail AI features — from business intelligence dashboards to campaign automation, revenue insights, and more.",
  path: "/features",
});

export default function FeaturesPage() {
  const url = `${SITE.url}/features`;
  return (
    <>
      <JsonLd
        schema={[
          collectionPageSchema(
            "Tapito Features",
            "Explore Tapito's full suite of retail AI features.",
            url,
          ),
          softwareAppSchema("Tapito", "AI-powered customer engagement platform for modern retail.", SITE.url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url },
          ]),
        ]}
      />
      <FeaturesPageContent />
    </>
  );
}
