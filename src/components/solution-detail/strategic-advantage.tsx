"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ArrowRight, Plus } from "lucide-react";
import AnimatedLucideIcon from "../AnimatedLucideIcon";
import { cn } from "@/lib/utils";

interface StrategicAdvantageProps {
  data: {
    title: string;
    howWeHelp: {
      title: string;
      desc: string;
      image: string;
      icon: any;
    }[];
  };
}

const StrategicAdvantage = ({ data }: StrategicAdvantageProps) => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <Container>
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm"
          >
            <img src="/logo.svg" alt="Tapito" className="h-4 w-auto" />
            <div className="w-[1px] h-3 bg-slate-300" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#09358c]">
              Strategic Advantage
            </span>
          </motion.div>
        </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Which way we help <br /> the{" "}
            <span className="text-[#09358c]">{data.title}</span> vertical
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.howWeHelp.map((item: any, i: number) => {
            const themes = [
              { bg: "from-emerald-50/60", glow: "bg-emerald-400/15", icon: "from-emerald-500 to-emerald-600" },
              { bg: "from-blue-50/60", glow: "bg-blue-400/15", icon: "from-blue-500 to-blue-600" },
              { bg: "from-purple-50/60", glow: "bg-purple-400/15", icon: "from-purple-500 to-purple-600" },
              { bg: "from-indigo-50/60", glow: "bg-indigo-400/15", icon: "from-indigo-500 to-indigo-600" },
              { bg: "from-orange-50/60", glow: "bg-orange-400/15", icon: "from-orange-500 to-orange-600" },
              { bg: "from-teal-50/60", glow: "bg-teal-400/15", icon: "from-teal-500 to-teal-600" }
            ];
            
            const vectorImages = [
              "/assets/vectors/undraw_revenue-analysis_fjh2.svg",
              "/assets/vectors/undraw_performance-overview_1b4y.svg",
              "/assets/vectors/undraw_target_d6hf.svg",
              "/assets/vectors/undraw_progress-data_gvcq.svg",
              "/assets/vectors/undraw_portfolio_btd8.svg",
              "/assets/vectors/undraw_under-construction_hdrn.svg"
            ];
            
            const theme = themes[i % themes.length];
            const vectorImage = vectorImages[i % vectorImages.length];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={cn(
                  "group relative h-[340px] rounded-[2.5rem] border border-white p-10 cursor-pointer shadow-xl shadow-slate-200/40 flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden bg-gradient-to-br to-white",
                  theme.bg
                )}
              >
                {/* Vector Background Image from Assets */}
                <div className="absolute -bottom-6 -left-2 w-48 h-48 opacity-[0.08] grayscale text-slate-900 pointer-events-none group-hover:scale-125 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-[0.15] transition-all duration-1000">
                  <img src={vectorImage} alt="" className="w-full h-full object-contain" />
                </div>

                {/* Reference-style Background Glow */}
                <div className={cn(
                  "absolute -bottom-24 -left-24 w-80 h-80 blur-[100px] rounded-full transition-opacity duration-700 opacity-60 group-hover:opacity-100",
                  theme.glow
                )} />
                
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className={cn(
                    "shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br shadow-blue-500/10",
                    theme.icon
                  )}>
                    <AnimatedLucideIcon icon={item.icon} size={26} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 leading-tight tracking-tight group-hover:text-[#09358c] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <p className="text-slate-500 font-medium leading-relaxed line-clamp-4">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Redirection Arrow */}
                <div className="relative z-10 flex justify-end">
                  <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-md border border-white shadow-lg flex items-center justify-center text-slate-400 transition-all duration-500 group-hover:bg-[#09358c] group-hover:text-white group-hover:translate-x-1">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StrategicAdvantage;
