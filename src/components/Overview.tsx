"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "./Container";
import OverViewCard from "./overview-card";

export default function Overview() {
  return (
    <section className="relative section-padding bg-slate-50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] 2xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100  text-xs font-bold uppercase tracking-widest text-[#09358c]">
              <BarChart3 size={14} color="#09358c" />
              PLATFORM OVERVIEW
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              One Unified Engine. <br />
              <span className="text-[#09358c]">Infinite Integrations.</span>
            </h2>
            <p className="text-[16px] xl:text-xl text-slate-500 leading-relaxed max-w-xl">
              Tapito isn't just a dashboard. It's a comprehensive AI layer that sits on top of your existing retail stack,
              synthesizing every transaction into a strategic advantage.
            </p>
        
            {/* <div className="grid grid-cols-2 gap-6 pb-10">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <TrendingUp className="text-blue-600 mb-4" />
                <h4 className="font-bold text-lg mb-1">24.2%</h4>
                <p className="text-xs text-slate-400 uppercase font-black">Average ROI Gain</p>
              </div>
            </div> */}
            <div>
              <Link
                href="/integrations"
                className="inline-flex items-center gap-4 bg-[#09358c] text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-[0.15em] hover:bg-[#0a3faa] transition-all shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:shadow-blue-900/30 group active:scale-95"
              >
                <span>Explore More</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#09358c] transition-all duration-300">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex"
          >
            <OverViewCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
