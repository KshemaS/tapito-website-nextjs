"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Mic, TrendingDown, TrendingUp, ShieldCheck, PieChart, PlayCircle } from "lucide-react";

export default function AboutDifferentiators() {
  return (
    <section className="pt-24 pb-12 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-12">
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#09358c] text-[11px] font-bold uppercase tracking-widest mb-6">
                    Our Edge
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-[1.1]">
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
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                <item.icon className="text-[#05a0ec]" size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2 relative bg-slate-50 rounded-[3.5rem] overflow-hidden shadow-2xl group">
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="w-full h-full min-h-[400px] lg:min-h-[500px]"
                >
                    <img 
                        src="/assets/images/about/IMG_20260417_143058.png" 
                        alt="Our Edge - AI Performance" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </div>

      </Container>
    </section>
  );
}
