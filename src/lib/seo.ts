import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export const SITE = {
  name: "Tapito",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "Turn your retail data into revenue automatically with Tapito's AI-powered analytics, real-time insights, and automated engagement.",
  email: "hello@tapito.ai",
  ogImage: `${siteUrl}/retail_ai_dashboard_premium_1775651628420.png`,
};

interface BuildMetadataArgs {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: BuildMetadataArgs = {}): Metadata {
  const resolvedTitle = title ?? "Tapito | AI-Powered Customer Engagement Platform";
  const resolvedDesc = description ?? SITE.description;
  const canonicalUrl = `${SITE.url}${path}`;

  return {
    title: resolvedTitle,
    description: resolvedDesc,
    metadataBase: SITE.url ? new URL(SITE.url) : undefined,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDesc,
      url: canonicalUrl,
      siteName: SITE.name,
      type: "website",
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: resolvedTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDesc,
      images: [SITE.ogImage],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

// ── JSON-LD schema builders ──────────────────────────────────

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    email: SITE.email,
    sameAs: [
      "https://www.instagram.com/tapito.ai",
      "https://www.youtube.com/@tapito",
      "https://www.facebook.com/tapito.ai",
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
  };
}

export function softwareAppSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export function mobileAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Tapito Mobile App",
    description:
      "Command your retail empire hands-free with real-time voice and chat decisions.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android, iOS",
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function collectionPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
  };
}

export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    ...(datePublished && { datePublished }),
    publisher: { "@type": "Organization", name: SITE.name, logo: SITE.logo },
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
  };
}
