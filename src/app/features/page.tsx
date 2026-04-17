"use client";

import { FeaturesHero } from "@/components/features/FeaturesHero";
import { FeaturesGrid } from "@/components/features/FeaturesGrid";
import { FeaturesCTA } from "@/components/features/FeaturesCTA";

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen bg-[#fcfcfd] overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero Section */}
      <FeaturesHero />

      {/* Features Grid Section - Now handles navigation internally */}
      <FeaturesGrid />

      {/* Call to Action Section */}
      <FeaturesCTA />
    </div>
  );
}