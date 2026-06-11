import { buildMetadata, softwareAppSchema, webPageSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import ValueStrip from "@/components/ValueStrip";
import Process from "@/components/Process";
import Capabilities from "@/components/Capabilities";
import Insights from "@/components/Insights";
import Automation from "@/components/Automation";
import AIAssistant from "@/components/AIAssistant";
import Audience from "@/components/Audience";
import Metrics from "@/components/Metrics";
import FeaturedVideo from "@/components/FeaturedVideo";
import highlightimg from '@/public/assets/images/dashboard-1.avif';
import highlightimg3 from '@/public/assets/images/dashboard4.jpg';
import highlightimg4 from '@/public/assets/images/dashboard5.jpg';
import highlightimg5 from '@/public/assets/images/dashboard6.jpg';
import highlightimg6 from '@/public/assets/images/dashboard7.jpg';
import CTASection from "@/components/CTA-card";

const keyHighlights = [
  {
    name: "Real-time business intelligence",
    subheading: "Live Performance Analytics",
    description: "Real-time tracking of every transaction and KPI across your network.",
    image: highlightimg5,
    video: "/dashboard-overview.mp4"
  },
  {
    name: "AI-driven growth recommendations",
    subheading: "Predictive Growth Engine",
    description: "AI-powered insights that identify revenue leakage and expansion opportunities.",
    image: highlightimg,
    video: "/dashboard-overview.mp4"
  },
  {
    name: "Zero-effort campaign automation",
    subheading: "Autonomous Marketing",
    description: "Fully automated customer engagement workflows that run on autopilot.",
    image: highlightimg3,
    video: "/dashboard-overview.mp4"
  },
  {
    name: "Multi-store performance visibility",
    subheading: "Global Inventory Control",
    description: "Centralized view of stock levels and sales performance for all locations.",
    image: highlightimg6,
    video: "/dashboard-overview.mp4"
  },
  {
    name: "Voice-enabled AI assistant (mobile)",
    subheading: "Natural Language Query",
    description: "Talk to your data naturally and get instant answers on the move.",
    image: highlightimg4,
    video: "/dashboard-overview.mp4"
  }
];

export const metadata = buildMetadata({
  title: "Tapito | AI-Powered Customer Engagement Platform",
  description:
    "Turn your retail data into revenue automatically with Tapito's AI-powered analytics, real-time insights, and automated engagement.",
  path: "",
});

export default function Home() {
  const url = SITE.url;
  return (
    <div className="relative w-full overflow-x-hidden">
      <JsonLd
        schema={[
          softwareAppSchema(
            "Tapito",
            "AI-powered customer engagement platform for modern retail.",
            url,
          ),
          webPageSchema(
            "Tapito | AI-Powered Customer Engagement Platform",
            "Turn your retail data into revenue automatically with Tapito's AI-powered analytics, real-time insights, and automated engagement.",
            url,
          ),
        ]}
      />
      <main className="flex flex-col w-full">
        <Hero />
        <Process />
        <Overview />
        <ValueStrip />
        <Capabilities />
        <Insights />
        <FeaturedVideo />
        <Automation />
        <AIAssistant />
        <Audience />
        <Metrics />
        <CTASection
          title="Stop Guessing."
          subtitle="Start Growing."
          description="Join hundreds of retail giants who have transformed their data into a revenue engine with Tapito."
          badge="READY TO TRANSFORM?"
          image="/assets/images/about/ready-to-tranform.png"
          isAbout={false}
        />
      </main>
    </div>
  );
}
