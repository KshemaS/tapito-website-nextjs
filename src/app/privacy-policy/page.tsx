import { buildMetadata, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PrivacyPolicyPageContent from "./PrivacyPolicyPageContent";

export const metadata = buildMetadata({
  title: "Privacy Policy | Tapito",
  description:
    "Read Tapito's Privacy Policy to understand how we collect, use, and protect your personal data.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  const url = `${SITE.url}/privacy-policy`;
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema("Privacy Policy | Tapito", "Read Tapito's Privacy Policy to understand how we collect, use, and protect your personal data.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Privacy Policy", url },
          ]),
        ]}
      />
      <PrivacyPolicyPageContent />
    </>
  );
}
