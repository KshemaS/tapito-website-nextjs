"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ArrowRight, Calculator, PieChart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="relative rounded-[1.5rem] bg-slate-950 p-10 md:p-16 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#05a0ec]/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#06dcc3]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03]" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#05a0ec] text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
                >
                    <Sparkles size={14} className="animate-pulse" /> Ready to Transform?
                </motion.div>

                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter leading-[1.1]"
                >
                    Unlock Your <br /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05a0ec] to-sky-300">
                        Growth Potential
                    </span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 font-medium mb-10 leading-relaxed max-w-2xl mx-auto"
                >
                    Join hundreds of retail brands that are scaling with zero manual effort. See the difference AI can make in your revenue growth.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-5"
                >
                    <Link href="/contact" className="w-full md:w-auto relative group">
                        <div className="absolute inset-0 bg-white/10 blur-xl group-hover:blur-2xl transition-all rounded-2xl scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
                        <div className="relative px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]">
                            Book a Live Demo <ArrowRight size={20} />
                        </div>
                    </Link>
                    
                    <button className="w-full md:w-auto px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 group">
                        Launch Product Tour
                        <div className="w-1.5 h-1.5 rounded-full bg-[#06dcc3] group-hover:scale-150 transition-transform" />
                    </button>

                    <button className="w-full md:w-auto px-6 py-4 flex items-center justify-center gap-3 text-white/50 hover:text-white font-bold transition-colors">
                        <Calculator size={18} className="text-[#05a0ec]" />
                        <span>ROI Calculator</span>
                    </button>
                </motion.div>

                {/* Sub-note */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 pt-10 border-t border-white/5"
                >
                    <p className="text-[11px] text-slate-500 font-medium uppercase tracking-[0.25em]">
                         Estimate your revenue uplift — <span className="text-[#06dcc3] font-bold">$1.2M+ Annual Average</span>
                    </p>
                </motion.div>
            </div>
        </div>
      </Container>
    </section>
  );
}
