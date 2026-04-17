"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import { featuresData } from "./FeaturesGrid";

interface ExploreMoreFeaturesProps {
  currentSlug: string;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
} as any);

export const ExploreMoreFeatures = ({ currentSlug }: ExploreMoreFeaturesProps) => {
  const otherFeatures = featuresData.filter(f => f.slug !== currentSlug).slice(0, 4);

  return (
    <section className="py-16 md:py-20 2xl:py-28 relative overflow-hidden bg-slate-50/50">
      <Container>
        <div className="mb-16 text-center">
          <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">
            Next Generation Retail
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-6">
            Explore More Features
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Discover other powerful modules designed to transform your retail operations and drive exponential growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherFeatures.map((feature, idx) => (
            <motion.div
              key={feature.slug}
              {...fadeUp(0.1 + idx * 0.1)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 p-8 hover:border-blue-300 hover:shadow-[0_30px_70px_-20px_rgba(37,99,235,0.15)] transition-all flex flex-col h-full"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-950 mb-3 group-hover:text-blue-700 transition-colors uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8 flex-1">
                {feature.description}
              </p>
              <Link 
                href={`/features/${feature.slug}`}
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-950 hover:text-blue-600 transition-colors"
              >
                View Details <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* <motion.div 
          {...fadeUp(0.5)}
          className="mt-20 rounded-[3.5rem] bg-slate-950 p-12 lg:p-16 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none" />
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 180 }}
            className="mx-auto w-20 h-20 rounded-3xl bg-blue-600 text-white flex items-center justify-center mb-10 shadow-2xl shadow-blue-500/40 relative z-10"
          >
            <Sparkles size={32} />
          </motion.div>
          <h3 className="text-3xl lg:text-5xl font-black text-white mb-8 relative z-10 uppercase tracking-tight max-w-4xl mx-auto">
            Ready to transform your retail operations with Tapito?
          </h3>
          <Link 
            href="/enterprise" 
            className="inline-flex items-center gap-4 bg-white text-slate-950 px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all hover:scale-[1.05] shadow-xl relative z-10"
          >
            Book a Full Platform Demo <ArrowRight size={20} />
          </Link>
        </motion.div> */}
      </Container>
    </section>
  );
};
