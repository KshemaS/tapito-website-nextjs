"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AnimatedLucideIcon from "./AnimatedLucideIcon";
import { cn } from "@/lib/utils";
import Container from "./Container";
import Image from "next/image";

const coreCapabilities = [
  {
    title: "Executive Dashboard",
    desc: "A high-fidelity vantage point for your entire operation. Real-time metrics presented with uncompromising clarity.",
    icon: "ChartSpline",
    color: "from-[#09358c] to-[#05a0ec]",
    delay: 0
  },
  {
    title: "Smart Analytics",
    desc: "Deep neural networks analyzing millions of data points to predict your next multi-million dollar opportunity.",
    icon: "ChartPie",
    color: "from-[#05a0ec] to-[#06dcc3]",
    delay: 0.1
  },
  {
    title: "Auto-Engagement",
    desc: "A tireless workforce that personalizes every interaction, turning first-time buyers into lifelong advocates.",
    icon: "Send",
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
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-16 lg:items-center mb-6 lg:mb-10 xl:mb-16 3xl:mb-24">
          <div className="flex-1">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#09358c] text-xs font-bold mb-6"
             >
              <AnimatedLucideIcon name="Sparkles" size={14} color="#09358c" />
               CORE CAPABILITIES
             </motion.div>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
               The Architecture of <br /> <span className="text-[#09358c]">Retail Dominance.</span>
            </h2>
             <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-slate-800 leading-relaxed font-normal relative z-10 max-w-[550px] pt-8">
                  We don't just provide tools. We provide the intelligence that separates market leaders from everyone else.
              </p>
          </div>

          {/* Data Architecture Ornament */}
          <div className="hidden lg:flex flex-1 justify-end items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative w-[320px] h-[320px] 2xl:w-[450px] 2xl:h-[450px]"
            >
              {/* Main Rotating Architecture Grid */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Hexagonal Core Pattern */}
                  <path d="M100 40 L152 70 L152 130 L100 160 L48 130 L48 70 Z" stroke="#09358c" strokeWidth="0.5" strokeDasharray="4 2" />
                  <circle cx="100" cy="100" r="90" stroke="#05a0ec" strokeWidth="0.4" strokeDasharray="1 4" />
                  
                  {/* Node Connections */}
                  <g className="opacity-40">
                    <line x1="100" y1="40" x2="100" y2="160" stroke="#09358c" strokeWidth="0.3" />
                    <line x1="48" y1="70" x2="152" y2="130" stroke="#09358c" strokeWidth="0.3" />
                    <line x1="152" y1="70" x2="48" y2="130" stroke="#09358c" strokeWidth="0.3" />
                  </g>

                  {/* Interconnected Nodes */}
                  {[
                    { cx: 100, cy: 40 }, { cx: 152, cy: 70 }, { cx: 152, cy: 130 },
                    { cx: 100, cy: 160 }, { cx: 48, cy: 130 }, { cx: 48, cy: 70 }
                  ].map((node, i) => (
                    <circle key={i} cx={node.cx} cy={node.cy} r="3" fill="white" stroke="#09358c" strokeWidth="1" />
                  ))}
                </svg>
              </motion.div>
              
              {/* Orbital Data Packets */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#06dcc3] to-[#05a0ec] rounded-lg shadow-lg rotate-45 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-[#09358c] to-[#05a0ec] rounded-full shadow-lg" />
              </motion.div>

              {/* Central Engine Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-16 h-16 2xl:w-24 2xl:h-24">
                    <div className="absolute inset-0 bg-[#09358c]/5 rounded-full animate-ping" />
                    <div className="absolute inset-4 bg-gradient-to-br from-[#09358c] to-[#05a0ec] rounded-2xl rotate-45 shadow-2xl flex items-center justify-center overflow-hidden">
                       <motion.div 
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full h-full bg-white/20 backdrop-blur-sm"
                       />
                       <AnimatedLucideIcon name="Cpu" className="absolute text-white" size={24} />
                    </div>
                 </div>
              </div>
            </motion.div>
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
              className="glass-card p-[20px] md:p-[30px] xl:p-10 group"
            >
              <div className={cn("w-16 h-16 rounded-[20px] flex items-center justify-center mb-10 bg-gradient-to-br shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 text-white", cap.color)}>
                <AnimatedLucideIcon name={cap.icon} className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-6 group-hover:text-[#05a0ec] transition-colors">{cap.title}</h4>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">{cap.desc}</p>
              
              <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 mb-8">
                <Image 
                  src={i === 0 ? "/retail_ai_dashboard_premium_1775651628420.png" : i === 1 ? "/retail_customer_analytics_digital_overlay_1775651982487.png" : "/predictive_inventory_retail_ai_1775652149852.png"}
                  alt={cap.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

