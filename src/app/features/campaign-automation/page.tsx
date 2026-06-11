import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Campaign Automation | Tapito",
  description:
    "Set once. Run forever. Fully automated customer engagement across WhatsApp, SMS, and Email that scales with your retail business.",
  path: "/features/campaign-automation",
});

export default function CampaignAutomationPage() {
  const url = `${SITE.url}/features/campaign-automation`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Campaign Automation",
            "Set once. Run forever. Fully automated customer engagement that scales.",
            url,
          ),
          webPageSchema("Campaign Automation | Tapito", "Set once. Run forever. Fully automated customer engagement that scales.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Campaign Automation", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
