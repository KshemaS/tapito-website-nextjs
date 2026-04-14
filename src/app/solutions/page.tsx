"use client";

import CTASection from "@/components/CTASection";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <SolutionsHero />

      {/* Solutions Grid Section - Now populated with Industry Verticals */}
      <SolutionsGrid />

      {/* Call to Action Section */}
      <CTASection 
        title={<> Ready to transform <br /> your retail empire?</>}
        description="Join the new generation of retail leaders using Tapito to automate growth and reclaim their time."
        className="bg-white"
      />
    </main>
  );
}
