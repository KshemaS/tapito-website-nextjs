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
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    headline: "How StyleVault Increased Mobile Conversion by 45% using AI-Logic",
    summary: "Luxury fashion retailer StyleVault leveraged Tapito's trend-sync engine to automate inventory pushes across global regions.",
    author: "Elena Rodriguez",
    overview: "StyleVault faced challenges with seasonal inventory stagnation until they implemented Tapito's real-time trend monitoring system.",
    tag: "Mobile Growth",
    featured: true,
    metrics: [
      { label: "Conversion Lift", value: "+45%", icon: "TrendingUp" },
      { label: "Inventory Turn", value: "3.2x", icon: "RefreshCw" },
      { label: "Revenue Growth", value: "$2.4M", icon: "DollarSign" }
    ],
    sections: [
      {
        heading: "The Challenge",
        paragraphs: ["Slow feedback loops between storefront and warehouse were causing seasonal collections to go stagnant."],
        subsections: [{ title: "Trend Disconnect", body: "Supply chain couldn't react fast enough to social media viral trends." }]
      }
    ]
  },
  {
    id: 2,
    company: "FreshMart",
    industry: "Grocery",
    logo: "FM",
    logoColor: "from-[#05a0ec] to-[#06dcc3]",
    region: "United Kingdom",
    date: "February 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    headline: "Optimizing Local Supply Chains with Predictive Logistics",
    summary: "FreshMart reduced food waste by 30% through Tapito's automated stock-logic redistribution system.",
    author: "David Thorne",
    overview: "Grocery logistics require extreme precision. FreshMart used Tapito to sync localized demand with warehouse delivery schedules.",
    tag: "Logistics",
    featured: false,
    metrics: [
      { label: "Waste Reduction", value: "-30%", icon: "Leaf" },
      { label: "Fulfillment Speed", value: "+18%", icon: "Zap" },
      { label: "Operational Savings", value: "£1.2M", icon: "PieChart" }
    ],
    sections: [
      {
        heading: "Operational Strategy",
        paragraphs: ["By moving stock dynamically based on regional adoption, FreshMart eliminated bottlenecks."],
        subsections: [{ title: "Dynamic Routing", body: "Delivery fleets were rerouted daily based on real-time consumption patterns." }]
      }
    ]
  },
  {
    id: 3,
    company: "TechZone",
    industry: "Electronics",
    logo: "TZ",
    logoColor: "from-[#09358c] via-[#05a0ec] to-[#06dcc3]",
    region: "Singapore",
    date: "February 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    headline: "Automating Tech Upgrade Cycles for Electronics Consumers",
    summary: "TechZone triggered $5M in additional revenue by predicting exactly when consumers were ready for a hardware refresh.",
    author: "Michael Tan",
    overview: "Identifying the precise moment a customer's tech becomes 'dated' is the key to repeating sales in electronics.",
    tag: "Revenue AI",
    featured: false,
    metrics: [
      { label: "LTV Increase", value: "+22%", icon: "UserPlus" },
      { label: "Upgrade Rate", value: "35%", icon: "Rocket" },
      { label: "New Revenue", value: "$5.2M", icon: "TrendingUp" }
    ],
    sections: [
      {
        heading: "The Logic",
        paragraphs: ["Tapito's engine monitors hardware lifespan and automatically sends trade-in offers during peak intent windows."],
        subsections: [{ title: "Intent Signals", body: "User behavior patterns flagged readiness for high-spec device upgrades." }]
      }
    ]
  },
  {
    id: 4,
    company: "BrewHouse Co.",
    industry: "F&B",
    logo: "BH",
    logoColor: "from-[#06dcc3] to-[#09358c]",
    region: "Australia",
    date: "January 22, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    headline: "Hyper-Localized Marketing for National F&B Chains",
    summary: "Managing 150 locations became effortless with Tapito's localized promotional logic.",
    author: "Sarah Jenkins",
    overview: "BrewHouse needed to run different promotions based on local stock levels and weather conditions across Australia.",
    tag: "Hyper-Local",
    featured: false,
    metrics: [
      { label: "Ad Spend ROI", value: "6.5x", icon: "Target" },
      { label: "Store Footfall", value: "+12%", icon: "MapPin" },
      { label: "New Signups", value: "15K", icon: "Users" }
    ],
    sections: [
      {
        heading: "Regional Precision",
        paragraphs: ["Tapito automated the launch of weather-triggered cold beverage ads during heatwaves."],
        subsections: [{ title: "Auto-Triggers", body: "Promoted high-margin inventory only where stock count was over 40%." }]
      }
    ]
  },
  {
    id: 5,
    company: "GlowLab",
    industry: "Beauty",
    logo: "GL",
    logoColor: "from-[#05a0ec] via-[#06dcc3] to-[#05a0ec]",
    region: "India",
    date: "January 8, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522335789183-b1140738d8d0?q=80&w=1200&auto=format&fit=crop",
    headline: "Personalized Skincare Routines via AI Engagement",
    summary: "GlowLab increased repeat purchase rates by 50% using automated replenishment logic.",
    author: "Ananya Sharma",
    overview: "Beauty is about consistency. GlowLab used Tapito to ensure customers never ran out of their core products.",
    tag: "Retention",
    featured: true,
    metrics: [
      { label: "Repeat Sales", value: "+50%", icon: "Repeat" },
      { label: "CAC Reduction", value: "-15%", icon: "ShieldCheck" },
      { label: "Survey Completion", value: "68%", icon: "MessageSquare" }
    ],
    sections: [
      {
        heading: "Lifecycle Sync",
        paragraphs: ["By tracking average usage periods, Tapito predicts when a bottle is 10% full and sends an SMS."],
        subsections: [{ title: "Predictive Fill", body: "Replenishment reminders have a 92% open rate across our user base." }]
      }
    ]
  },
  {
    id: 6,
    company: "NestWell",
    industry: "Home & Living",
    logo: "NW",
    logoColor: "from-[#09358c] to-[#06dcc3]",
    region: "Canada",
    date: "December 15, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    headline: "Unifying Omni-Channel Data for Furniture Retailers",
    summary: "NestWell consolidated every showroom and online touchpoint into one high-velocity growth engine.",
    author: "Robert Miller",
    overview: "High-ticket items like furniture require multi-touch attribution and deep customer profiling to close sales over time.",
    tag: "Omni-Channel",
    featured: false,
    metrics: [
      { label: "Sales Cycle", value: "-14 days", icon: "Clock" },
      { label: "Showroom Attrib", value: "100%", icon: "Store" },
      { label: "Revenue Lift", value: "$3.8M", icon: "TrendingUp" }
    ],
    sections: [
      {
        heading: "Connected Showrooms",
        paragraphs: ["Digital kiosk data in physical stores is synced with online browsing to build complete profiles."],
        subsections: [{ title: "Showroom to Web", body: "Automated follow-ups on specific items viewed in person increased sales." }]
      }
    ]
  },
];
