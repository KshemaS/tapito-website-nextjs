"use client";

import { motion } from "framer-motion";
import { LineChart, PieChart, Send, ShieldCheck, DollarSign, Users, ShoppingBag, Layers, BarChart, TrendingUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "./Container";
import Image from "next/image";

const coreCapabilities = [
  {
    title: "Executive Dashboard",
    desc: "A high-fidelity vantage point for your entire operation. Real-time metrics presented with uncompromising clarity.",
    icon: LineChart,
    color: "from-[#09358c] to-[#05a0ec]",
    delay: 0
  },
  {
    title: "Smart Analytics",
    desc: "Deep neural networks analyzing millions of data points to predict your next multi-million dollar opportunity.",
    icon: PieChart,
    color: "from-[#05a0ec] to-[#06dcc3]",
    delay: 0.1
  },
  {
    title: "Auto-Engagement",
    desc: "A tireless workforce that personalizes every interaction, turning first-time buyers into lifelong advocates.",
    icon: Send,
    color: "from-[#06dcc3] to-[#09358c]",
    delay: 0.2
  }
];

export default function Capabilities() {
  return (
    <section className="bg-white py-[60px] lg:py-[80px] 2xl:py-[100px] 4xl:py-[120px] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 -z-10" />
      
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-end mb-24">
          <div className="flex-1">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#05a0ec] text-xs font-bold mb-6"
             >
               <Sparkles size={14} />
               CORE CAPABILITIES
             </motion.div>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
               Built for the <br /> <span className="gradient-text">Top 1% of Retail</span>
             </h2>
          </div>
          <div className="lg:w-1/3">
             <p className="text-xl text-slate-500 leading-relaxed">
               We don't just provide tools. We provide the intelligence that separates market leaders from everyone else.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coreCapabilities.map((cap, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: cap.delay }}
              viewport={{ once: true }}
              className="glass-card p-10 group"
            >
              <div className={cn("w-16 h-16 rounded-[20px] flex items-center justify-center mb-10 bg-gradient-to-br shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6", cap.color)}>
                <cap.icon className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-6 group-hover:text-[#05a0ec] transition-colors">{cap.title}</h4>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">{cap.desc}</p>
              
              <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 mb-8">
                <Image 
                  src={i === 0 ? "/retail_ai_dashboard_premium_1775651628420.png" : i === 1 ? "/retail_customer_analytics_digital_overlay_1775651982487.png" : "/predictive_inventory_retail_ai_1775652149852.png"}
                  alt={cap.title}
                  fill
                  className="object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between group-hover:border-blue-100 transition-colors">
                 <span className="text-sm font-bold text-slate-400 uppercase tracking-widest group-hover:text-[#000]">Learn More</span>
                 <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#05a0ec] group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
