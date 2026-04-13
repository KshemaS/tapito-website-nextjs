"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Zap } from "lucide-react";
import Container from "./Container";

export default function Overview() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100  text-xs font-bold uppercase tracking-widest text-[#0f172b]">
              <BarChart3 size={14} className="text-[#0f172b]" />
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
                  <TrendingUp className="text-blue-600 mb-4" />
                  <h4 className="font-bold text-lg mb-1">24.2%</h4>
                  <p className="text-xs text-slate-400 uppercase font-black">Average ROI Gain</p>
               </div>
               <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <Zap className="text-purple-600 mb-4" />
                  <h4 className="font-bold text-lg mb-1">1 sec</h4>
                  <p className="text-xs text-slate-400 uppercase font-black">Data Latency</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Visual Representation of Platform Integration */}
            <div className="aspect-square bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-12 flex flex-col items-center justify-center overflow-hidden">
               <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-3xl bg-blue-600 shadow-2xl shadow-blue-600/20 flex items-center justify-center text-white z-10">
                     <span className="text-4xl font-black">T</span>
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
