import { buildMetadata, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import IntegrationsPageContent from "./IntegrationsPageContent";

export const metadata = buildMetadata({
  title: "Integrations | Tapito",
  description:
    "Connect Tapito with your existing POS, ERP, CRM, and e-commerce platforms. Seamless integrations for a unified retail data ecosystem.",
  path: "/integrations",
});

export default function IntegrationsPage() {
  const url = `${SITE.url}/integrations`;
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema("Integrations | Tapito", "Connect Tapito with your existing POS, ERP, CRM, and e-commerce platforms.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Integrations", url },
          ]),
        ]}
      />
      <IntegrationsPageContent />
    </>
  );
}
