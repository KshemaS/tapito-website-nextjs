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
import highlightimg2 from '@/public/assets/images/dashboard-3.jpg';
import highlightimg3 from '@/public/assets/images/dashboard4.jpg';
import highlightimg4 from '@/public/assets/images/dashboard5.jpg';
import highlightimg5 from '@/public/assets/images/dashboard6.jpg';
import highlightimg6 from '@/public/assets/images/dashboard7.jpg';

const keyHighlights = [
  {
    name: "Real-time business intelligence",
    image: highlightimg5
  },
  {
    name: "AI-driven growth recommendations",
    image: highlightimg
  },
  {
    name: "Zero-effort campaign automation",
    image: highlightimg3
  },
  {
    name: "Multi-store performance visibility",
    image: highlightimg6
  },
  {
    name: "Voice-enabled AI assistant (mobile)",
    image: highlightimg4
  }
];

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
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
