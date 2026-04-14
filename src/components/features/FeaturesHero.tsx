"use client";

import { motion } from "framer-motion";
import { InteractiveGrid } from "@/components/InteractiveGrid";
import Container from "@/components/Container";
import Link from "next/link";
import { ChevronDown, Sparkles, Zap, Shield, Globe } from "lucide-react";

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
            <Icon size={14} className="text-purple-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">{text}</span>
        </motion.div>
    );
};

export const FeaturesHero = () => {
  return (
    <section className="relative lg:min-h-svh flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      <InteractiveGrid />
      
      {/* Floating Elements Rising from the Bottom */}
      <FloatingBadge icon={Zap} text="Real-time BI" delay={0} left={15} />
      <FloatingBadge icon={Shield} text="AI-Powered Forecasting" delay={3} left={35} />
      <FloatingBadge icon={Sparkles} text="Predictive Profitability" delay={6} left={60} />
      <FloatingBadge icon={Globe} text="Campaign Automation" delay={9} left={80} />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block mb-8 text-[10px] lg:text-sm font-black tracking-[0.4em] uppercase text-purple-600/80">
            OUR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 4xl:text-8xl font-black text-slate-900 leading-none mb-10 tracking-tight">
            All-in-One <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-indigo-600 to-purple-800">
              Growth Platform
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl 4xl:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Tapito leverages advanced neural networks to transform fragmented retail data into a streamlined growth engine for your entire organization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button className="bg-[#4112e0] hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-black text-base lg:text-lg shadow-xl shadow-indigo-500/10 transition-all hover:scale-105 active:scale-95 text-center">
              Get Started Now
            </button>
            <button className="bg-[#e9e9e9] hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-xl font-black text-base lg:text-lg transition-all hover:scale-105 active:scale-95">
              View Demo
            </button>
          </div>
        </motion.div>
      </Container>

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
