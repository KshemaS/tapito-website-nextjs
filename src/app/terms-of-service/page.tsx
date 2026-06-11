import { buildMetadata, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import TermsPageContent from "./TermsPageContent";

export const metadata = buildMetadata({
  title: "Terms of Service | Tapito",
  description:
    "Read Tapito's Terms of Service to understand your rights and responsibilities when using our AI-powered retail platform.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  const url = `${SITE.url}/terms-of-service`;
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema("Terms of Service | Tapito", "Read Tapito's Terms of Service to understand your rights and responsibilities.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Terms of Service", url },
          ]),
        ]}
      />
      <TermsPageContent />
    </>
  );
}
