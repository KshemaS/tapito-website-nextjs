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
    logoColor: "from-rose-500 to-pink-600",
    region: "United States",
    date: "March 12, 2025",
    readTime: "8 MIN READ",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    headline:
      "3× Revenue Growth in 6 Months with AI-Powered Customer Segmentation",
    summary:
      "StyleVault used Tapito's RFM segmentation and automated campaign engine to identify high-value customers, reduce churn by 38%, and triple their repeat purchase rate.",
    author: "Sarah Mitchell",
    overview:
      "StyleVault is a leading US-based fashion retailer with over 120 physical stores and a rapidly growing e-commerce presence. Facing intense competition and rising customer acquisition costs, StyleVault partnered with Tapito to build a data-driven engagement strategy. By deeply understanding their RFM (Recency, Frequency, Monetary) segments, they were able to deliver hyper-personalized campaigns that resonated with each customer tier — from first-time buyers to lifetime VIPs.",
    metrics: [
      { label: "Revenue Growth", value: "3×", icon: "TrendingUp" },
      { label: "Churn Reduced", value: "38%", icon: "Users" },
      { label: "Campaign ROI", value: "4.8×", icon: "BarChart3" },
    ],
    tag: "AI Segmentation",
    featured: true,
    sections: [
      {
        heading: "The Challenge: Flying Blind on Customer Data",
        paragraphs: [
          "Before Tapito, StyleVault's marketing team relied on batch-and-blast email campaigns with little personalization. They had siloed POS data, a disconnected loyalty system, and no unified view of the customer journey.",
          "The result was a high unsubscribe rate, declining repeat purchase rates, and a marketing budget that was difficult to justify. Leadership needed a smarter approach — and fast.",
        ],
        images: [
          "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
        ],
      },
      {
        heading: "The Right Segmentation Model for Your Business",
        paragraphs: [
          "Choosing the right segmentation approach is the first step toward meaningful personalization. Consider your customer diversity, purchase frequency, and loyalty goals.",
        ],
        subsections: [
          {
            title: "RFM Micro-Segmentation",
            body: "Ideal for brands with high purchase frequency (StyleVault averages 4 transactions per year). It allows for precise targeting based on recency, frequency, and monetary value.",
          },
          {
            title: "Predictive Churn Scoring",
            body: "Best for brands looking to retain at-risk customers before they leave. Tapito's ML model flags customers 30 days before predicted churn with 87% accuracy.",
          },
          {
            title: "Zero-Party Data Integration",
            body: "A future-proof approach combining RFM capabilities with declared preference data, ensuring campaigns resonate even in a cookie-less world.",
          },
        ],
      },
      {
        heading: "Implementation: From Data to Revenue in 8 Weeks",
        paragraphs: [
          "Tapito's onboarding team integrated directly with StyleVault's POS system, loyalty platform, and e-commerce stack within 2 weeks. The unified customer data platform immediately surfaced insights that were previously invisible.",
          "Within 6 weeks, StyleVault launched their first AI-personalized campaign targeting lapsed customers. The results were immediate — a 28% re-engagement rate that outperformed their previous campaigns by 3×.",
          "By month 6, all three revenue metrics had hit record highs. The team went from manually building 2 campaigns per month to automating 40+ personalized journeys running simultaneously.",
        ],
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "FreshMart",
    industry: "Grocery",
    logo: "FM",
    logoColor: "from-emerald-500 to-teal-600",
    region: "United Kingdom",
    date: "February 28, 2025",
    readTime: "6 MIN READ",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80",
    headline:
      "FreshMart Increased Basket Size by 22% Using Tapito's Predictive Analytics",
    summary:
      "By leveraging real-time predictive insights and personalized promotions, FreshMart boosted average basket size and drove a 22% uplift in overall store revenue.",
    author: "James Alderton",
    overview:
      "FreshMart is a UK grocery chain with 85 stores operating in a fiercely competitive market. With margins under pressure from both discount retailers and online delivery players, FreshMart needed to find new ways to grow revenue from existing customers. Tapito's predictive analytics engine helped them move beyond generic weekly promotions to highly targeted, personalized offers based on each shopper's purchase history.",
    metrics: [
      { label: "Basket Size", value: "+22%", icon: "ShoppingBag" },
      { label: "Store Revenue", value: "+22%", icon: "TrendingUp" },
      { label: "Repeat Visits", value: "+31%", icon: "Users" },
    ],
    tag: "Predictive Analytics",
    featured: false,
    sections: [
      {
        heading: "Understanding Grocery Shopper Behaviour",
        paragraphs: [
          "Grocery shoppers are creatures of habit — but their habits are deeply personal. FreshMart's data revealed that the top 20% of customers drove 68% of revenue, yet they were being marketed to identically as infrequent shoppers.",
          "Tapito's first step was to segment FreshMart's 1.2 million loyalty members based on category affinity, visit frequency, and price sensitivity — enabling a fundamentally different marketing approach for each group.",
        ],
        images: [
          "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80",
          "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=800&q=80",
        ],
      },
      {
        heading: "Personalized Promotions at Scale",
        paragraphs: [
          "FreshMart launched AI-generated 'Your Weekly Picks' — a personalized promotional flyer delivered via app and email, unique to each loyalty member. Items were selected based on purchase history, seasonal trends, and predicted next purchase.",
          "The impact was immediate. Customers who received personalized picks added an average of 2.4 additional items per basket, driving the 22% basket size increase.",
        ],
        subsections: [
          {
            title: "Standard Promotions",
            body: "Broad-based discounts on popular categories (e.g., dairy, produce). Low cost to execute but limited uplift in basket size.",
          },
          {
            title: "AI-Personalized Picks",
            body: "Machine-learning driven item recommendations unique to each shopper. Higher operational complexity but 3.6× better conversion than standard promos.",
          },
          {
            title: "Loyalty Tier Rewards",
            body: "Exclusive offers unlocked by loyalty tier, incentivizing higher spend and more frequent visits to maintain premium status.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    company: "TechZone",
    industry: "Electronics",
    logo: "TZ",
    logoColor: "from-blue-500 to-indigo-600",
    region: "Singapore",
    date: "February 10, 2025",
    readTime: "10 MIN READ",
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1200&q=80",
    headline:
      "How TechZone Automated 80% of Their Campaigns and Saved 200 Hours/Month",
    summary:
      "TechZone replaced manual marketing workflows with Tapito's automated campaign orchestration, freeing up their team and boosting campaign performance significantly.",
    author: "Priya Nair",
    overview:
      "TechZone is Singapore's leading consumer electronics retailer with 34 stores and a dominant e-commerce platform. Their marketing team of 6 was managing over 50 monthly campaigns manually — a clear bottleneck. With Tapito, they transformed their operations into a lean, AI-powered campaign engine that runs 24/7 without manual intervention.",
    metrics: [
      { label: "Campaigns Automated", value: "80%", icon: "Zap" },
      { label: "Hours Saved / Mo.", value: "200+", icon: "Star" },
      { label: "Click-Through Rate", value: "+55%", icon: "TrendingUp" },
    ],
    tag: "Automation",
    featured: false,
    sections: [
      {
        heading: "The Cost of Manual Marketing",
        paragraphs: [
          "Before Tapito, TechZone's marketing team spent 60% of their time on execution — building email templates, segmenting lists, scheduling send times — leaving little bandwidth for strategy or creative thinking.",
          "Campaigns were often delayed by days, seasonal opportunities were missed, and A/B testing was practically non-existent. The team needed a way to scale without adding headcount.",
        ],
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
          "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80",
        ],
      },
      {
        heading: "Building an Autonomous Campaign Engine",
        paragraphs: [
          "Tapito's campaign orchestration layer connects directly to TechZone's inventory system, customer data platform, and e-commerce analytics. Triggers are set based on customer behaviour, stock levels, and external signals like product launches.",
          "Today, TechZone runs 120+ automated journeys simultaneously — from post-purchase follow-ups to win-back sequences — all without a single manual send.",
        ],
        subsections: [
          {
            title: "Trigger-Based Campaigns",
            body: "Campaigns fire automatically based on real-time events like purchases, cart abandonment, or product stock changes.",
          },
          {
            title: "AI Send-Time Optimisation",
            body: "Each message is sent at the individually predicted optimal time for maximum open rate — not a fixed broadcast time.",
          },
          {
            title: "Continuous A/B Testing",
            body: "Every campaign runs multiple variant tests in parallel, with the AI automatically shifting traffic to winning variants within hours.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    company: "BrewHouse Co.",
    industry: "F&B",
    logo: "BH",
    logoColor: "from-amber-500 to-orange-600",
    region: "Australia",
    date: "January 22, 2025",
    readTime: "7 MIN READ",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80",
    headline:
      "BrewHouse Co. Built a Loyalty Program That Drives 45% of All Revenue",
    summary:
      "With Tapito's loyalty and rewards engine, BrewHouse Co. launched a tiered loyalty program that turned casual visitors into brand advocates and consistent revenue drivers.",
    author: "Liam Donovan",
    overview:
      "BrewHouse Co. is an Australian hospitality brand operating 28 café-bars across Melbourne, Sydney, and Brisbane. With a transactional customer base and high competition from independent venues, BrewHouse Co. needed a way to convert occasional visitors into loyal regulars. Tapito's loyalty engine provided the infrastructure to launch a sophisticated tiered membership program within 6 weeks of signing.",
    metrics: [
      { label: "Revenue from Loyalty", value: "45%", icon: "Star" },
      { label: "Member Growth", value: "12×", icon: "Users" },
      { label: "NPS Score", value: "+68", icon: "TrendingUp" },
    ],
    tag: "Loyalty & Retention",
    featured: false,
    sections: [
      {
        heading: "Why One-Size Loyalty Fails in F&B",
        paragraphs: [
          "The typical 'stamp card' loyalty model fails because it treats all customers equally. A customer who visits once a week and one who visits twice a year earn rewards at the same rate — with no incentive for the weekly visitor to feel special.",
          "BrewHouse Co. needed a tiered system that rewarded frequency, spending, and advocacy — and made top-tier members feel like genuine VIPs.",
        ],
        images: [
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
        ],
      },
      {
        heading: "Designing the BrewHouse Rewards Tiers",
        paragraphs: [
          "Working with Tapito's customer success team, BrewHouse Co. designed a three-tier program: Brew Starter, Brew Regular, and Brew Legend. Each tier unlocks progressively more valuable rewards, from free coffee upgrades to exclusive member events.",
        ],
        subsections: [
          {
            title: "Brew Starter",
            body: "Entry-level tier for new members. Earn 1 point per $1 spent. Access to birthday rewards and first-purchase bonus.",
          },
          {
            title: "Brew Regular",
            body: "Achieved after 10 visits or $200 spend. Earn 1.5× points, priority ordering during peak hours, and exclusive monthly offers.",
          },
          {
            title: "Brew Legend",
            body: "Top tier for brand advocates. Earn 2× points, free monthly brunch, access to new menu tastings, and dedicated customer support.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    company: "GlowLab",
    industry: "Beauty",
    logo: "GL",
    logoColor: "from-violet-500 to-purple-600",
    region: "India",
    date: "January 8, 2025",
    readTime: "9 MIN READ",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80",
    headline:
      "GlowLab Scaled from 2 to 24 Locations Using Tapito's Multi-Location Analytics",
    summary:
      "GlowLab used Tapito's multi-location dashboard and AI insights to standardize operations, identify top-performing stores, and replicate success across new locations.",
    author: "Ananya Krishnan",
    overview:
      "GlowLab is a premium beauty retail brand headquartered in Bengaluru, India. Starting with 2 flagship stores in 2022, they set an ambitious target of reaching 25 locations by 2025. The challenge: maintaining consistent service quality, customer experience, and marketing effectiveness across every new store. Tapito's multi-location analytics platform became the backbone of their expansion strategy.",
    metrics: [
      { label: "Locations Opened", value: "24", icon: "Building2" },
      { label: "Revenue / Location", value: "+40%", icon: "BarChart3" },
      { label: "Markets Entered", value: "6", icon: "Globe" },
    ],
    tag: "Multi-Location",
    featured: false,
    sections: [
      {
        heading: "The Expansion Paradox",
        paragraphs: [
          "Many retail brands experience declining per-location performance as they scale — what works in one city doesn't translate to another, and management attention gets diluted across too many locations.",
          "GlowLab's founders were determined to expand without sacrificing quality. They needed a platform that could surface location-level insights, flag underperformers early, and share best practices across the network.",
        ],
        images: [
          "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
        ],
      },
      {
        heading: "Tapito's Multi-Location Command Centre",
        paragraphs: [
          "Tapito provides GlowLab's leadership team with a single dashboard view of all 24 locations — real-time revenue, basket size, loyalty enrolment, and campaign performance — all in one place.",
          "When a new store opens, Tapito's AI immediately begins benchmarking it against comparable locations and surfacing targeted recommendations for the store manager.",
        ],
        subsections: [
          {
            title: "Real-Time Revenue Monitoring",
            body: "Every transaction is captured and surfaced in the central dashboard within minutes, with automatic alerts for any location deviating from targets.",
          },
          {
            title: "AI-Driven Benchmarking",
            body: "Each store is compared against a peer group of similar locations (size, city, demographics) so performance is measured fairly and insights are actionable.",
          },
          {
            title: "Expansion Readiness Score",
            body: "Tapito's proprietary score evaluates whether a new location's customer base, purchase behaviour, and loyalty enrolment are on track for long-term success.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    company: "NestWell",
    industry: "Home & Living",
    logo: "NW",
    logoColor: "from-cyan-500 to-sky-600",
    region: "Canada",
    date: "December 15, 2024",
    readTime: "5 MIN READ",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    headline: "NestWell's Personalized Email Campaigns Achieved a 62% Open Rate",
    summary:
      "NestWell replaced broadcast emails with Tapito's AI-personalized messaging, resulting in one of the highest open rates in the home décor segment.",
    author: "Claire Bouchard",
    overview:
      "NestWell is a Canadian home décor and furniture retailer with a premium positioning and a devoted customer base of design-conscious shoppers. Despite strong brand affinity, their email marketing underperformed with a 14% open rate — far below industry benchmarks for premium home brands. By adopting Tapito's AI personalization engine, NestWell transformed every email into a curated, one-to-one experience.",
    metrics: [
      { label: "Email Open Rate", value: "62%", icon: "Star" },
      { label: "Conversion Rate", value: "+44%", icon: "TrendingUp" },
      { label: "Unsubscribe Rate", value: "−71%", icon: "Users" },
    ],
    tag: "Personalization",
    featured: false,
    sections: [
      {
        heading: "Why Generic Emails Damage Premium Brands",
        paragraphs: [
          "For a premium brand like NestWell, sending the same promotional email to every subscriber is more than a missed opportunity — it's actively damaging. Subscribers who feel like a number, not a valued customer, are 3× more likely to unsubscribe after receiving irrelevant content.",
          "NestWell's leadership recognized that their email program needed to match the quality of their in-store experience: warm, curated, and deeply personal.",
        ],
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
          "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
        ],
      },
      {
        heading: "From Broadcast to One-to-One",
        paragraphs: [
          "Tapito's personalization engine analyses each subscriber's product browse history, wish lists, past purchases, and price point preferences to dynamically assemble every email — images, copy, product selections, and CTAs — in real time.",
          "NestWell now sends 40,000 unique email variants per campaign. Each subscriber receives a version that feels hand-curated for them — with products they love, at price points that match their spending patterns.",
        ],
        subsections: [
          {
            title: "Dynamic Content Blocks",
            body: "Product images, headlines, and offers are assembled dynamically at send time, ensuring every email reflects the most current inventory and the subscriber's latest interests.",
          },
          {
            title: "Predictive Send Time",
            body: "Emails are delivered at each subscriber's individual peak engagement window — not a fixed send time for the whole list.",
          },
          {
            title: "Lifecycle-Aware Messaging",
            body: "Whether a subscriber is a new browser, a recent buyer, or a long-lapsed customer, the email content and tone adapts to their relationship with the brand.",
          },
        ],
      },
    ],
  },
];
