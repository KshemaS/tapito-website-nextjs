"use client";

import { motion } from "framer-motion";
import { InteractiveGrid } from "@/components/InteractiveGrid";
import Container from "@/components/Container";
import Link from "next/link";
import { ChevronDown, Network, Target, BarChart3, Zap } from "lucide-react";

const FloatingBadge = ({ icon: Icon, text, delay, left }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [150, -100], // Rises 250px total
        x: [0, 10, -10, 0] // Subtle side-to-side drift
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute bottom-0 z-0 pointer-events-none hidden lg:flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full border border-white/40 shadow-sm"
      style={{ left: `${left}%` }}
    >
      <Icon size={14} className="text-violet-600" />
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">{text}</span>
    </motion.div>
  );
};

interface SolutionsHeroProps {
  badge?: string;
  titlePrimary?: string;
  titleSecondary?: string;
  description?: string;
  floatingBadges?: Array<{ icon: any, text: string, delay: number, left: number }>;
}

export const SolutionsHero = ({
  badge = "ENTERPRISE SOLUTIONS",
  titlePrimary = "Retail Intelligence",
  titleSecondary = "Redefined",
  description = "Tapito provides a comprehensive suite of AI-driven solutions designed to empower modern retail operations from the warehouse to the storefront.",
  floatingBadges = [
    { icon: Network, text: "Omnichannel Sync", delay: 0, left: 10 },
    { icon: Target, text: "Dynamic Pricing", delay: 4, left: 30 },
    { icon: BarChart3, text: "Revenue Logic", delay: 2, left: 65 },
    { icon: Zap, text: "SOP Automation", delay: 7, left: 85 },
  ]
}: SolutionsHeroProps) => {
  return (
    <section className="relative lg:min-h-svh flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      <InteractiveGrid />

      {/* Floating Elements Rising from the Bottom */}
      {floatingBadges.map((badge, index) => (
        <FloatingBadge
          key={index}
          icon={badge.icon}
          text={badge.text}
          delay={badge.delay}
          left={badge.left}
        />
      ))}

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block mb-8 text-[10px] lg:text-sm font-black tracking-[0.4em] uppercase text-violet-600/80">
            {badge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 4xl:text-8xl font-black text-slate-900 leading-none mb-10 tracking-tight">
            {titlePrimary} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-800">
              {titleSecondary}
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl 4xl:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-5 rounded-2xl font-black text-base lg:text-lg shadow-[0_20px_40px_-10px_rgba(124,58,237,0.3)] transition-all hover:scale-105 active:scale-95 text-center">
              Request a Demo
            </button>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-base lg:text-lg transition-all hover:scale-105 active:scale-95">
              Watch Product Tour
            </button>
          </div>
        </motion.div>
      </Container>

      {/* Moving Arrow (Animated Chevron) */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <Link
          href="#features-grid"
          aria-label="Scroll down to feature list"
          className="group flex flex-col items-center text-slate-500 hover:text-purple-600 transition-colors"
        >
          <div className="flex flex-col items-center leading-none">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{ y: [0, 5, 0], opacity: [0.35, 1, 0.35] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  delay: index * 0.15,
                  ease: "easeInOut",
                }}
                className="-my-1"
              >
                <ChevronDown size={18} />
              </motion.div>
            ))}
          </div>
        </Link>
      </motion.div>
    </section>
  );
};
