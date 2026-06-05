"use client";

import AnimatedLucideIcon from "./AnimatedLucideIcon";
import { motion } from "framer-motion";
import Container from "./Container";

const steps = [
  {
    title: "Clear business insights",
    desc: "Instantly visualize performance across all stores and channels without manual reporting or messy spreadsheets.",
    icon: "Database",
    color: "bg-[#05a0ec1a] text-[#05a0ec]"
  },
  {
    title: "Identified growth opportunities",
    desc: "Tap into AI that highlights underlying trends and pinpoints exactly where your next revenue boost is hiding.",
    icon: "Lightbulb",
    color: "bg-[#06dcc31a] text-[#06dcc3]"
  },
  {
    title: "Automated actions",
    desc: "Let our engine trigger high-performing campaigns and operational tasks automatically based on real-time data.",
    icon: "Zap",
    color: "bg-[#09358c1a] text-[#09358c]"
  }
];

export default function Process() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-white">
      {/* 1. Multi-layered Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(9,53,140,0.03),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(5,160,236,0.03),transparent_40%)]" />
      <div className="absolute inset-0 bg-[#fafafa]/50" />

      {/* 2. Circuit & Insights Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Side Circuit & Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute left-0 top-[20%] w-[300px] h-[500px] hidden xl:block"
        >
          <svg width="300" height="500" viewBox="0 0 300 500" fill="none" className="opacity-40">
            <path d="M-50 100 H150 A20 20 0 0 1 170 120 V250 A20 20 0 0 0 190 270 H300" stroke="#09358c" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="150" cy="100" r="4" fill="#09358c" />
            <circle cx="250" cy="270" r="6" stroke="#09358c" strokeWidth="1" fill="white" />
          </svg>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-10 top-[30%] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-100 w-[200px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <AnimatedLucideIcon name="Database" size={16} />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Data Stream</span>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div animate={{ width: ["10%", "95%", "10%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-blue-500" />
              </div>
              <p className="text-[11px] font-bold text-slate-700">Metrics Synced</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Circuit & Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute right-0 top-[5%] w-[350px] h-[500px] hidden xl:block"
        >
          <svg width="350" height="500" viewBox="0 0 350 500" fill="none" className="opacity-60">
            <path d="M400 400 H200 A30 30 0 0 0 170 370 V150 A30 30 0 0 1 200 120 H350" stroke="#05a0ec" strokeWidth="1.5" />
            <circle cx="200" cy="400" r="4" fill="#05a0ec" />
            <circle cx="250" cy="120" r="6" stroke="#05a0ec" strokeWidth="1" fill="white" />
          </svg>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-12 top-[15%] bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-100 w-[220px]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <AnimatedLucideIcon name="Zap" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Growth Engine</p>
                <p className="text-sm font-bold text-slate-800">Campaign Ready</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#09358c] font-bold text-xs bg-blue-50 px-2 py-1 rounded-lg w-fit">
              <AnimatedLucideIcon name="TrendingUp" size={12} />
              <span>Revenue +14.2%</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Container className="relative z-10">
        <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#09358c] text-[11px] font-black tracking-[0.4em] uppercase mb-8 opacity-60 flex items-center justify-center gap-4"
             >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100  text-xs font-bold uppercase tracking-widest text-[#09358c]">
               <AnimatedLucideIcon name="Sparkles" size={14} color="#09358c" />
              METHODOLOGY
              </div>
            </motion.div>
          <h3 className="text-3xl lg:text-5xl 3xl:text-7xl font-black text-slate-900 mb-10 leading-[1.05] tracking-tight">
            From Data to Decisions<br /><span className="text-[#09358c]">— In Seconds.</span>
          </h3>
          <p className="text-md lg:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto opacity-80">
            Precision-engineered analytics that transform raw retail data into actionable growth strategies.
          </p>
        </div>

        {/* 2. Integrated Content Grid (No separate background or borders) */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="px-6 py-6 flex flex-col items-center text-center group relative transition-all duration-700 rounded-2xl"
              >
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-10 shadow-sm shadow-slate-200 relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                  <AnimatedLucideIcon name={step.icon} size={32} />
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-5 tracking-tight relative z-10">{step.title}</h4>
                <p className="text-slate-500 text-base leading-relaxed relative z-10 max-w-[280px] xl:max-w-[360px]">
                  {step.desc}
                </p>
                
                {/* Visual Connector for Desktop */}
                {i < 2 && (
                   <div className="absolute top-1/2 -right-4 translate-y-[-50%] text-slate-200 hidden xl:block z-10 opacity-30">
                      <AnimatedLucideIcon name="ChevronRight" size={24} />
                   </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

