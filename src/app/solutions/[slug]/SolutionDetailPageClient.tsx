"use client";

import { solutionDetails, defaultData } from "./solution-data";   
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import ClientStrip from "@/components/ClientStrip";
import { FeatureShowcase } from "@/components/solution-detail/feature-showcase";
import { IntegrationSection } from "@/components/solutions/IntegrationSection";
import Capabilities from "@/components/solution-detail/core-capabilities";
import StrategicAdvantage from "@/components/solution-detail/strategic-advantage";
import Challenges from "@/components/solution-detail/challenges";
import CTASection from "@/components/CTA-card";
import { FAQ } from "@/components/solutions/FAQ";
import { motion, AnimatePresence } from "framer-motion";
import BuildingMaterial from "@/components/solution-detail/building-material";
import HomeFurnishing from "@/components/solution-detail/home-furnishing";
import Electronics from "@/components/solution-detail/electronics";
import Supermarket from "@/components/solution-detail/supermarket";
import Fashion from "@/components/solution-detail/fashion";
import BeautyHealth from "@/components/solution-detail/beauty-health";
import Jewelry from "@/components/solution-detail/jewelry";
import FBRetail from "@/components/solution-detail/fb-retail";
import Ecommerce from "@/components/solution-detail/ecommerce";
import cta_img from '@/public/assets/images/about/ready-to-tranform.avif';
import { SolutionTestimonials } from "@/components/solutions/SolutionTestimonials";

export default function SolutionDetailPageClient({ slug }: { slug: string }) {
  const data = solutionDetails[slug] || defaultData;
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={slug}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="min-h-screen bg-white"
      >
        <SolutionsHero
          badge="VERTICAL SOLUTION"
          titlePrimary={data.title}
          description={data.description}
        />
        <ClientStrip />
        <StrategicAdvantage data={data.howWeHelp} />
        {slug === "building-materials" && <BuildingMaterial />}
        {slug === "home-furnishing" && <HomeFurnishing />}
        {slug === "electronics" && <Electronics />}
        {slug === "supermarkets" && <Supermarket />}
        {slug === "fashion" && <Fashion />}
        {slug === "beauty-health" && <BeautyHealth />}
        {slug === "jewelry" && <Jewelry />}
        {slug === "fb-retail" && <FBRetail />}
        {slug === "ecommerce" && <Ecommerce />}
        <Challenges data={data} />
        <Capabilities data={{ 
          features: data.features, 
          title: data.capabilitiesTitle, 
          subtitle: data.capabilitiesSubtitle 
        }} />
        <FeatureShowcase items={data.showcaseItems} industry={slug} />
        <IntegrationSection />
        <SolutionTestimonials />
        <FAQ items={data.faqs} />
        <CTASection
          title="Ready to solve your challenges?"
          description="Join hundreds of retail giants who have transformed their data into a revenue engine with Tapito."
          badge="READY TO TRANSFORM?"
          image={cta_img.src}
          isAbout={false}
          showTalkButton={false}
        />
      </motion.main>
    </AnimatePresence>
  );
}
