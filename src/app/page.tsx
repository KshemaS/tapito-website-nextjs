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
import CTASection, { Footer } from "@/components/Footer";
import highlightimg from '@/public/assets/images/dashboard-1.avif';
import highlightimg1 from '@/public/assets/images/dashboard.png';

const keyHighlights = [
  {
    name: "Real-time business intelligence",
    image: highlightimg1
  },
  {
    name: "AI-driven growth recommendations",
    image: highlightimg
  },
  {
    name: "Zero-effort campaign automation",
    image: highlightimg1
  },
  {
    name: "Multi-store performance visibility",
    image: highlightimg
  },
  {
    name: "Voice-enabled AI assistant (mobile)",
    image: highlightimg1
  }
];

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero keyHighlights={keyHighlights} />
        <Overview />
        <ValueStrip />
        <Process />
        <Capabilities />
        <Insights />
        <FeaturedVideo />
        <Automation />
        <AIAssistant />
        <Audience />
        <Metrics />
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Precision Control</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">Experience the depth of our AI engine with interactive real-time data visualization.</p>
            </div>
            <InteractiveDashboard />
          </Container>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
