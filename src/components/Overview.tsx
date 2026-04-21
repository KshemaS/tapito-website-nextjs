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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
              Tapito isn't just a dashboard. It's a comprehensive AI layer that sits on top of your existing retail stack,
              synthesizing every transaction into a strategic advantage.
            </p>
            <div className="pt-4">
              <Link 
                href="/features" 
                className="inline-flex items-center gap-3 text-[#09358c] font-black text-sm uppercase tracking-[0.2em] hover:gap-5 transition-all group"
              >
                <span>Explore More</span>
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#09358c] group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <TrendingUp className="text-blue-600 mb-4" />
                <h4 className="font-bold text-lg mb-1">24.2%</h4>
                <p className="text-xs text-slate-400 uppercase font-black">Average ROI Gain</p>
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
            <OverViewCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
