import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { buildMetadata, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Pricing Plans | Tapito - Retail AI Platform",
  description:
    "Choose the right plan for your retail growth. From startups to enterprise retailers, scale your customer engagement with AI-powered automation.",
  path: "/plans",
});

export default function PricingPage() {
  const url = `${SITE.url}/plans`;
  return (
    <main className="flex flex-col w-full">
      <JsonLd
        schema={[
          webPageSchema("Pricing Plans | Tapito", "Choose the right plan for your retail growth.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Pricing Plans", url },
          ]),
        ]}
      />
      <Pricing />
    </main>
  );
}
