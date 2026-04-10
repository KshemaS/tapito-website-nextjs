// No Lucide imports here — icons are resolved by name in client components

export const INDUSTRIES = [
  "All",
  "Fashion",
  "Grocery",
  "Electronics",
  "F&B",
  "Beauty",
  "Home & Living",
];

export type CaseStudy = {
  id: number;
  company: string;
  industry: string;
  logo: string;
  logoColor: string;
  region: string;
  date: string;
  readTime: string;
  image: string;
  headline: string;
  summary: string;
  author: string;
  overview: string;
  metrics: {
    label: string;
    value: string;
    icon: string; // lucide icon name resolved on the client
  }[];
  tag: string;
  featured: boolean;
  sections: {
    heading: string;
    paragraphs: string[];
    images?: string[];
    subsections?: { title: string; body: string }[];
  }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    company: "StyleVault",
    industry: "Fashion",
    logo: "SV",
    logoColor: "from-[#09358c] to-[#05a0ec]",
    region: "United States",
    date: "March 12, 2025",
    // ...
  },
  {
    id: 2,
    company: "FreshMart",
    industry: "Grocery",
    logo: "FM",
    logoColor: "from-[#05a0ec] to-[#06dcc3]",
    region: "United Kingdom",
    date: "February 28, 2025",
    // ...
  },
  {
    id: 3,
    company: "TechZone",
    industry: "Electronics",
    logo: "TZ",
    logoColor: "from-[#09358c] via-[#05a0ec] to-[#06dcc3]",
    region: "Singapore",
    date: "February 10, 2025",
    // ...
  },
  {
    id: 4,
    company: "BrewHouse Co.",
    industry: "F&B",
    logo: "BH",
    logoColor: "from-[#06dcc3] to-[#09358c]",
    region: "Australia",
    date: "January 22, 2025",
    // ...
  },
  {
    id: 5,
    company: "GlowLab",
    industry: "Beauty",
    logo: "GL",
    logoColor: "from-[#05a0ec] via-[#06dcc3] to-[#05a0ec]",
    region: "India",
    date: "January 8, 2025",
    // ...
  },
  {
    id: 6,
    company: "NestWell",
    industry: "Home & Living",
    logo: "NW",
    logoColor: "from-[#09358c] to-[#06dcc3]",
    region: "Canada",
    date: "December 15, 2024",
    // ...
  },
];
