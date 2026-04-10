"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Hero from "./Hero";
import Container from "./Container";
import { Sparkles, BarChart3, TrendingUp, Zap } from "lucide-react";

export default function SlidingHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform for sliding the Hero to the left
  const heroX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);

  // Transform for revealing the Overview from the right
  const overviewX = useTransform(scrollYProgress, [0.3, 0.8], ["100%", "0%"]);
  const overviewScale = useTransform(scrollYProgress, [0.4, 0.8], [0.8, 1]);
  const overviewOpacity = useTransform(scrollYProgress, [0.3, 0.5, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {/* The Hero Section that slides away */}
        <motion.div 
          style={{ x: heroX, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full z-20"
        >
          <Hero keyHighlights={[]} />
        </motion.div>

        {/* The Overview Section that reveals */}
        <motion.div 
          style={{ x: overviewX, scale: overviewScale, opacity: overviewOpacity }}
          className="absolute inset-0 w-full h-full z-10 bg-slate-50 flex items-center justify-center p-8 lg:p-20"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#05a0ec] text-xs font-bold uppercase tracking-widest">
                  <BarChart3 size={14} />
                  PLATFORM OVERVIEW
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                  One Unified Engine. <br />
                  <span className="gradient-text">Infinite Opportunities.</span>
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                  Tapito isn't just a dashboard. It's a comprehensive AI layer that sits on top of your existing retail stack, 
                  synthesizing every transaction into a strategic advantage.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-8">
                   <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                      <TrendingUp className="text-[#05a0ec] mb-4" />
                      <h4 className="font-bold text-lg mb-1 text-slate-900">24.2%</h4>
                      <p className="text-xs text-slate-400 uppercase font-black">Average ROI Gain</p>
                   </div>
                   <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                      <Zap className="text-[#06dcc3] mb-4" />
                      <h4 className="font-bold text-lg mb-1 text-slate-900">1 sec</h4>
                      <p className="text-xs text-slate-400 uppercase font-black">Data Latency</p>
                   </div>
                </div>
              </div>

              <div className="relative">
                {/* Visual Representation of Platform Integration */}
                <div className="aspect-square bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-12 flex flex-col items-center justify-center overflow-hidden">
                   <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-32 h-32 rounded-3xl bg-white shadow-2xl shadow-blue-600/10 flex items-center justify-center z-10 p-6 border border-slate-50">
                         <img 
                            src="/logo.svg" 
                            alt="Tapito Logo" 
                            className="w-full h-full object-contain"
                         />
                      </div>
                      
                      {/* Connecting Orbs */}
                      {[0, 72, 144, 216, 288].map((angle, i) => (
                        <motion.div
                          key={i}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                          className="absolute w-full h-full"
                          style={{ rotate: angle }}
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl shadow-lg flex items-center justify-center -rotate-angle">
                             <div className="w-8 h-8 rounded bg-slate-100" />
                          </div>
                        </motion.div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </Container>
        </motion.div>
      </div>
    </div>
  );
}
