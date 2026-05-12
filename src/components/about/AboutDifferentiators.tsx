"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Mic, TrendingDown, TrendingUp, ShieldCheck, PieChart, PlayCircle } from "lucide-react";
import AnimatedLucideIcon from "../AnimatedLucideIcon";

export default function AboutDifferentiators() {
  return (
    <section className="lg:pt-24 pb-12 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch mb-12">
            <div className="w-full lg:w-1/2">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#09358c] text-[11px] font-bold uppercase tracking-widest mb-6"
                >
                    Our Edge
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                    Outperforming the <br /> Competition with AI
                </h2>
                <div className="space-y-6">
                    {[
                        { title: "Zero Manual Effort", desc: "Our platform automates the heavy lifting, allowing your team to focus on strategy.", icon: ShieldCheck },
                        { title: "Voice Query AI Assistant", desc: "Ask questions in natural language and get instant data-driven answers.", icon: Mic },
                        { title: "Growth Simulator", desc: "Predict the impact of your marketing campaigns before you launch them.", icon: TrendingUp }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-5"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#05a0ec]">
                                <AnimatedLucideIcon icon={item.icon} size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-1/2 relative min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] rounded-[2rem] overflow-hidden shadow-[0_32px_84px_-12px_rgba(0,0,0,0.15)] group bg-slate-950">
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img 
                        src="/assets/images/about/embracing-artificial-intelligence-business-innovation.jpg" 
                        alt="Our Edge - AI Performance" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </motion.div>
            </div>
        </div>
      </Container>
    </section>
  );
}
