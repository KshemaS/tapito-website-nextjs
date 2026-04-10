import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
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
import InteractiveDashboard from "@/components/InteractiveDashboard";
import { CTASection, Footer } from "@/components/Footer";
import highlightimg from '@/public/assets/images/dashboard-1.avif';
import highlightimg1 from '@/public/assets/images/dashboard.png';
import highlightimg2 from '@/public/assets/images/dashboard-3.jpg';
import highlightimg3 from '@/public/assets/images/dashboard4.jpg';
import highlightimg4 from '@/public/assets/images/dashboard5.jpg';
import highlightimg5 from '@/public/assets/images/dashboard6.jpg';
import highlightimg6 from '@/public/assets/images/dashboard7.jpg';

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

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <main className="flex flex-col w-full">
        <Hero keyHighlights={keyHighlights} />
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
        {/* <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Precision Control</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">Experience the depth of our AI engine with interactive real-time data visualization.</p>
            </div>
            <InteractiveDashboard />
          </Container>
        </section> */}
        <CTASection />
      </main>
    </div>
  );
}
