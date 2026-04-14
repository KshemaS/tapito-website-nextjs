"use client";

import { motion } from "framer-motion";
import { InteractiveGrid } from "@/components/InteractiveGrid";
import Container from "@/components/Container";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const FeaturesHero = () => {
  return (
    <section className="relative lg:min-h-svh flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      <InteractiveGrid />
      
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
            <button className="bg-[#4112e0] hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-black text-base lg:text-lg shadow-xl shadow-indigo-500/10 transition-all hover:scale-105 active:scale-95">
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
