"use client";

import { FeaturesHero } from "@/components/features/FeaturesHero";
import { FeaturesGrid } from "@/components/features/FeaturesGrid";
import CTASection from "@/components/CTA-card";

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen bg-[#fcfcfd] overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero Section */}
      <FeaturesHero />

      {/* Features Grid Section - Now handles navigation internally */}
      <FeaturesGrid />

      {/* Call to Action Section */}
      <CTASection
        title="Ready to revolutionize your retail analytics?"
        description="Join 500+ leading retailers who use Tapito to make smarter, faster, more profitable decisions every day."
        badge="GET STARTED"
        image="/assets/images/about/ready-to-tranform.png"
        isAbout={false}
        showTalkButton={false}
      />
    </div>
  );
}