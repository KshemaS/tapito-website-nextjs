"use client";

import { useState } from "react";
import { FeatureModal } from "@/components/FeatureModal";
import { FeaturesHero } from "@/components/features/FeaturesHero";
import { FeaturesGrid, features } from "@/components/features/FeaturesGrid";
import { FeaturesCTA } from "@/components/features/FeaturesCTA";

export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (feature: any) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#fcfcfd] overflow-hidden selection:bg-purple-100 selection:text-purple-900">
      
      {/* Hero Section */}
      <FeaturesHero />

      {/* Features Grid Section */}
      <FeaturesGrid onCardClick={handleCardClick} />

      {/* Call to Action Section */}
      <FeaturesCTA />

      {/* Modals & Buttons */}
      <FeatureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        feature={selectedFeature} 
      />
    </div>
  );
}