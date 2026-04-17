import Container from "@/components/Container";
import { PageBackground } from "@/components/PageBackground";
import AboutHero from "@/components/about/AboutHero";
import AboutClients from "@/components/about/AboutClients";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutTeam from "@/components/about/AboutTeam";
import AboutPresence from "@/components/about/AboutPresence";
import AboutDifferentiators from "@/components/about/AboutDifferentiators";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | Tapito - Next-Gen AI Engagement Platform",
  description: "Learn more about Tapito, the AI-powered platform by Fegno Technologies that empowers retail businesses through data automation and intelligent engagement.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafbfc]">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* High-end animated background */}
      <PageBackground />

      <div className="relative z-10">
        <AboutHero />
        
        <AboutClients />
        
        <AboutWhoWeAre />
        
        <AboutWhatWeDo />
        
        <AboutDifferentiators />

        <AboutTeam />
        
        <AboutPresence />
        
        <AboutCTA />
      </div>
    </main>
  );
}
