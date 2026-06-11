import { buildMetadata, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PartnersPageContent from "./PartnersPageContent";

export const metadata = buildMetadata({
  title: "Partners | Tapito",
  description:
    "Partner with Tapito to bring AI-powered retail intelligence to your clients. Explore reseller, technology, and implementation partnerships.",
  path: "/partners",
});

export default function PartnersPage() {
  const url = `${SITE.url}/partners`;
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema("Partners | Tapito", "Partner with Tapito to bring AI-powered retail intelligence to your clients.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Partners", url },
          ]),
        ]}
      />
      <PartnersPageContent />
    </>
  );
}
