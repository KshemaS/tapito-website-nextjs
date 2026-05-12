"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Zap, TrendingUp, Cpu, ArrowRight, TrendingUpIcon } from "lucide-react";
import AnimatedLucideIcon from "@/components/AnimatedLucideIcon";
import { cn } from "@/lib/utils";

const SECTIONS = [
  {
    id: "insights",
    title: "Deep Behavioral Insights",
    shortTitle: "Insights",
    desc: "Transform raw retail data into deep behavioral mapping. Know not just what your customers buy, but why.",
    steps: ["Behavioral Mapping", "Persona Profiling", "Trend Analytics"],
    icon: Search,
    color: "#10b981", // Emerald
    bg: "bg-emerald-50/50",
    glow: "from-emerald-500/20 to-teal-500/0",
    lightColor: "bg-emerald-50 text-emerald-600"
  },
  {
    id: "automation",
    title: "Automated Engagement",
    shortTitle: "Automation",
    desc: "Connect with your audience effortlessly. Our AI-driven automation ensures every interaction is timely and personal.",
    steps: ["Triggered Workflows", "Smart Conversations", "Omnichannel Reach"],
    icon: Zap,
    color: "#3b82f6", // Blue
    bg: "bg-blue-50/50",
    glow: "from-blue-500/20 to-indigo-500/0",
    lightColor: "bg-blue-50 text-blue-600"
  },
  {
    id: "growth",
    title: "Sustainable Revenue Growth",
    shortTitle: "Growth",
    desc: "Turn engagement into profit. Strategies designed to maximize lifetime value and optimize ROI across all channels.",
    steps: ["Growth Orchestration", "Conversion Optimization", "Performance Insights"],
    icon: TrendingUpIcon,
    color: "#09358c", // Tapito Blue
    bg: "bg-indigo-50/50",
    glow: "from-[#09358c]/20 to-[#05a0ec]/0",
    lightColor: "bg-indigo-50 text-[#09358c]"
  },
  {
    id: "orchestration",
    title: "Superior AI Orchestration",
    shortTitle: "Orchestration",
    desc: "Deliver hyper-personalized moments that matter. Build trust and loyalty through real-time AI orchestration.",
    steps: ["Experience Analytics", "Loyalty Automation", "Hyper-Personalization"],
    icon: Cpu,
    color: "#8b5cf6", // Purple
    bg: "bg-purple-50/50",
    glow: "from-purple-500/20 to-pink-500/0",
    lightColor: "bg-purple-50 text-purple-600"
  }
];

export default function AboutWhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = SECTIONS[activeIndex];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <Container>
        {/* Mobile View: Vertical Cards (lg:hidden) */}
        <div className="lg:hidden space-y-12">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-4"
            >
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#09358c]">Our Capabilities</span>
            </motion.div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {SECTIONS.map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden",
                  section.bg
                )}
              >
                <div className={cn(
                  "absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 pointer-events-none",
                  section.glow.split(' ')[0]
                )} />
                
                <div className="relative z-10 space-y-6">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm", section.lightColor)}>
                    <AnimatedLucideIcon icon={section.icon} size={24} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                      {section.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      {section.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900/5">
                    {section.steps.map((step) => (
                      <span key={step} className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg bg-white/50 text-slate-500 border border-slate-100/50">
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop View: Interactive Stage (hidden lg:flex) */}
        <div className="hidden lg:flex flex-row items-start gap-24">
          {/* Left Side: Interactive Nav */}
          <div className="w-[400px] space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#09358c]">Our Core Capabilities</span>
              </motion.div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                What We Do
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Explore our core pillars to see how we orchestrate intelligence across the retail value chain.
              </p>
            </div>

            <nav className="flex flex-col gap-3">
              {SECTIONS.map((section, idx) => (
                <button
                  key={section.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "group relative w-full text-left p-6 rounded-3xl transition-all duration-500",
                    activeIndex === idx 
                      ? "bg-slate-900 text-white shadow-2xl shadow-slate-200 scale-105 z-10" 
                      : "bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500",
                        activeIndex === idx ? "bg-white/10" : "bg-slate-50"
                      )}>
                        <AnimatedLucideIcon 
                          icon={section.icon} 
                          size={20} 
                          className={activeIndex === idx ? "text-white" : "text-slate-400"}
                        />
                      </div>
                      <span className={cn(
                        "text-lg font-black tracking-tight transition-all duration-500",
                        activeIndex === idx ? "translate-x-1" : ""
                      )}>
                        {section.shortTitle}
                      </span>
                    </div>
                    {activeIndex === idx && (
                      <motion.div layoutId="arrow">
                        <ArrowRight size={18} />
                      </motion.div>
                    )}
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Side: Dynamic Stage */}
          <div className="flex-1 min-h-[600px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={cn(
                  "w-full h-full rounded-[3rem] p-20 border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.03)] flex flex-col justify-center overflow-hidden relative",
                  activeSection.bg
                )}
              >
                {/* Background Glow */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br transition-all duration-1000",
                  activeSection.glow
                )} />

                <div className="relative z-10 space-y-10">
                  <div className="flex flex-col gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="w-20 h-20 rounded-3xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center"
                      style={{ color: activeSection.color }}
                    >
                      <AnimatedLucideIcon icon={activeSection.icon} size={40} />
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-6xl font-black text-slate-900 tracking-tight leading-none"
                    >
                      {activeSection.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-slate-500 font-medium text-xl max-w-xl leading-relaxed"
                    >
                      {activeSection.desc}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Key Outcomes</p>
                    <div className="flex flex-wrap gap-3">
                      {activeSection.steps.map((step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + (i * 0.1) }}
                          className="px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm text-sm font-black text-slate-900 tracking-tight flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeSection.color }} />
                          {step}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="inline-flex items-center gap-2 text-[#09358c] font-black uppercase tracking-widest text-xs group pt-4"
                  >
                    View technical specifications
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </div>

                {/* Floating Decorative Icon */}
                <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                  <activeSection.icon size={300} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
