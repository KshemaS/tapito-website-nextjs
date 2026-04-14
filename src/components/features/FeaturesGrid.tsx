"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/FeatureCard";
import Container from "@/components/Container";
import {
  BarChart3,
  BrainCircuit,
  LayoutDashboard,
  Mic,
  PlayCircle,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap
} from "lucide-react";

const featuresData = [
  {
    title: "Business Intelligence Dashboard",
    description: "Comprehensive real-time reporting with raw data sync across all your retail outlets.",
    longDescription: "Our BI Dashboard transforms raw retail data into actionable strategy. It integrates directly with your existing POS, e-commerce, and inventory systems to provide a single, unified view of your entire retail performance.",
    icon: LayoutDashboard,
    slug: "business-intelligence-dashboard",
    benefits: ["Real-time KPI tracking", "Multi-store synchronization", "Custom report builder", "Predictive maintenance alerts"]
  },
  {
    title: "AI Smart Analytics Engine",
    description: "Deep learning insights specifically trained for high-velocity retail environments and supply chains.",
    longDescription: "Harness the power of neural networks specifically optimized for high-velocity retail environments. Our AI Smart Analytics Engine identifies hidden correlations between product categories, seasonal trends, and consumer behavior.",
    icon: BrainCircuit,
    slug: "ai-smart-analytics-engine",
    benefits: ["Neural network forecasting", "Pattern recognition", "Anomaly detection", "Automated stock reordering"]
  },
  {
    title: "Campaign Automation",
    description: "Personalized marketing at scale. Trigger communications based on granular behavioral triggers.",
    longDescription: "Stop relying on generic email blasts and switch to behavioral marketing automation. Our Campaign Engine allows you to launch targeted multi-channel campaigns triggered by granular customer actions.",
    icon: Zap,
    slug: "campaign-automation",
    benefits: ["Behavioral triggers", "A/B testing automation", "Multi-channel delivery", "Engagement analytics"]
  },
  {
    title: "Revenue Growth Insights",
    description: "Identify high-value opportunities, identify hidden opportunities in your sales funnel.",
    longDescription: "Pinpoint exactly where your revenue leakage is occurring with laser precision. The Revenue Growth module analyzes your entire sales funnel to identify hidden upsell and cross-sell opportunities.",
    icon: TrendingUp,
    slug: "revenue-growth-insights",
    benefits: ["Price optimization", "Bundle effectiveness", "Upsell opportunities", "Customer LTV mapping"]
  },
  {
    title: "AI Assistant with Voice",
    description: "Hands-free operational control. Query real-time performance while on the warehouse floor.",
    longDescription: "Command your retail empire using only your voice. The Tapito AI Assistant utilizes natural language processing (NLP) to understand complex operational queries.",
    icon: Mic,
    slug: "ai-assistant",
    benefits: ["Voice command support", "Intent analysis", "Hands-free operations", "Real-time query execution"]
  },
  {
    title: "Mobile App Analytics",
    description: "Real-time decisions on the go. Get push notifications for inventory alerts and sales milestones.",
    longDescription: "Get the full power of Tapito delivered to your pocket. Our mobile analytics companion app ensures you are never out of the loop, providing a high-level overview formatted perfectly for fast-paced monitoring.",
    icon: Smartphone,
    slug: "mobile-app",
    benefits: ["Push notification alerts", "Mobile-first dashboards", "Instant alert escalation", "Remote store monitoring"]
  },
  {
    title: "Smart Scheme Generator",
    description: "Optimize promotional planning. Generate the most profitable discount structures for your goals.",
    longDescription: "Eliminate guesswork in sales planning. Tapito generates and simulates thousands of promotional schemes to find the one that clears inventory fastest while maintaining healthy margins.",
    icon: Sparkles,
    slug: "smart-scheme-generator",
    benefits: ["Profitability simulations", "Automatic scheme generation", "Clearance optimization", "Margin protection"]
  },
  {
    title: "Predictive Profitability",
    description: "Forecast future margins with AI. Get bottom-line predictability based on current market trends.",
    longDescription: "Look forward, not backward. By analyzing seasonal volatility, regional market trends, and your own historical performance, Tapito's Predictive Profitability engine builds a future-focused financial outlook.",
    icon: BarChart3,
    slug: "predictive-profitability-engine",
    benefits: ["Market trend analysis", "Seasonal forecasting", "Margin risk assessment", "Future-proof planning"]
  },
  {
    title: "Growth Simulator",
    description: "Model customer growth carefully. Utilize AI to predict mounting changes and avert migrations.",
    longDescription: "Utilize your store's Digital Twin to model high-stakes decisions with extreme precision. Run complex growth probability scoring against your current customer base to predict migrations.",
    icon: PlayCircle,
    slug: "growth-simulator",
    benefits: ["growth probability scoring", "Retention strategy modeling", "Customer sentiment analysis", "Win-back automation"]
  },
];

export const FeaturesGrid = () => {
  return (
    <section id="features-grid" className="py-20 md:py-24 relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-8 lg:gap-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 ring-1 ring-slate-200 mb-5">
              Built for Retail Teams
            </span>
            <h2 className="text-3xl lg:text-5xl 4xl:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-5">
              Features That Drive Better Decisions
            </h2>
            <p className="text-slate-600 text-base lg:text-lg font-medium leading-relaxed max-w-xl">
              From analytics to automation, each module is designed to help you act faster, improve margins, and scale with confidence.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 4xl:gap-12"
        >
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={feature.slug}
              title={feature.title}
              description={feature.description}
              benefits={feature.benefits}
              slug={feature.slug}
              icon={feature.icon}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export { featuresData as features };
