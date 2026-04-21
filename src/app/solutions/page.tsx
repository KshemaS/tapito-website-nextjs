"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Layers, Target, TrendingUp, Sparkles, Building2, Globe, Shield, Zap } from "lucide-react";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

const SOLUTION_SEGMENTS = [
  {
    icon: Layers,
    title: "Unified Retail Data Integration",
    subtitle: "Consolidate every data stream into a single source of truth.",
    description: "Break down data silos across POS, CRM, and eCommerce platforms. Tapito's engine ingests raw transaction data, customer behaviors, and inventory levels in real-time, providing a unified foundation for strategic decision-making.",
    features: ["Real-time POS Syncing", "Multi-store Data Consolidation", "Automatic Data Cleaning", "Identity Resolution"],
    image: "/assets/images/solution-data.png", // Hypothetical path
    color: "blue"
  },
  {
    icon: Sparkles,
    title: "AI-Driven Customer Intelligence",
    subtitle: "Predictive modeling that understands every customer journey.",
    description: "Move beyond basic reporting with Tapito’s deep learning models. Analyze RFM patterns, predict churn risks, and identify high-value customer segments before they even complete a purchase. Our AI doesn't just show 'what' happened—it tells you 'why'.",
    features: ["Advanced RFM Segmentation", "Churn Prediction Models", "Customer Lifetime Value (CLV)", "Behavioral Pattern Matching"],
    image: "/assets/images/solution-ai.png",
    color: "indigo"
  },
  {
    icon: Zap,
    title: "Automated Campaign Orchestration",
    subtitle: "Launch perfect campaigns at the perfect moment.",
    description: "Close the loop between insights and action. Tapito automatically triggers personalized marketing campaigns across email, SMS, and push notifications based on real-time triggers. Zero manual effort, maximum ROI focus.",
    features: ["Event-Driven Triggers", "Cross-Channel Automation", "A/B Testing & Optimization", "End-to-end ROI Attribution"],
    image: "/assets/images/solution-automation.png",
    color: "violet"
  }
];

const SolutionCard = ({ solution, index }: { solution: typeof SOLUTION_SEGMENTS[0], index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="py-24 md:py-32 overflow-hidden border-b border-slate-50 last:border-0">
      <Container>
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        )}>
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-8",
                solution.color === "blue" ? "bg-blue-50 text-blue-600" :
                  solution.color === "indigo" ? "bg-indigo-50 text-indigo-600" : "bg-violet-50 text-violet-600"
              )}>
                <solution.icon size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                {solution.title}
              </h2>
              <p className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-widest text-sm">
                {solution.subtitle}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                {solution.description}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-900 group">
                Explore this solution <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Visual Placeholder */}
          <div className="flex-1 w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-[3rem] bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-2xl overflow-hidden group"
            >
              {/* Abstract pattern mock */}
              <div className="absolute inset-0 bg-[#f8fafc]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-3xl shadow-2xl p-8 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1">
                  <div className="w-full h-full bg-slate-50 rounded-xl overflow-hidden relative">
                    <div className="absolute top-4 left-4 right-4 flex gap-4">
                      <div className="w-1/3 h-2 bg-slate-100 rounded-full" />
                      <div className="w-1/4 h-2 bg-slate-100 rounded-full" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-1/2 bg-white rounded-lg shadow-sm" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import CTASection from "@/components/CTA-card";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <SolutionsHero />

      {/* Solutions Grid Section - Now populated with Industry Verticals */}
      <SolutionsGrid />

      {/* Call to Action Section */}
      <CTASection
        title="Transform Your Retail Empire"
        description="Join hundreds of retail giants who have transformed their data into a revenue engine with Tapito."
        badge="READY TO TRANSFORM?"
        image="/assets/images/about/ready-to-tranform.png"
        isAbout={false}
      />
    </main>
  );
}
