import Orb from "@/components/Orb";
import Particles from "@/components/Particles";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesListing } from "@/components/case-studies/CaseStudiesListing";

export const metadata = {
  title: "Case Studies | Tapito",
  description:
    "Discover how 500+ retail brands use Tapito AI to grow revenue, retain customers, and make smarter decisions.",
};

const CaseStudiesPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafbfc]">

      {/* ── Background (matches Pricing page) ──────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] -left-[10%] w-[70%] h-[70%] opacity-20">
          <Orb hue={240} hoverIntensity={0.5} />
        </div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] opacity-20">
          <Orb hue={280} hoverIntensity={0.5} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-40">
          <Particles />
        </div>
      </div>

      <CaseStudiesHero />
      <CaseStudiesListing />

    </main>
  );
};

export default CaseStudiesPage;
