"use client";

import { Database, Lightbulb, Zap, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

const steps = [
  {
    title: "Clear business insights",
    desc: "Instantly visualize performance across all stores and channels without manual reporting or messy spreadsheets.",
    icon: Database,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Identified growth opportunities",
    desc: "Tap into AI that highlights underlying trends and pinpoints exactly where your next revenue boost is hiding.",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Automated actions",
    desc: "Let our engine trigger high-performing campaigns and operational tasks automatically based on real-time data.",
    icon: Zap,
    color: "bg-purple-100 text-purple-600"
  }
];

export default function Process() {
  return (
    <section className="bg-white section-padding">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 text-[14px]"
             >
               <Sparkles size={14} />
               So you stop guessing and start scaling
             </motion.div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            From Data to Decisions<br /><span className="gradient-text">— In Seconds</span>
          </h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Most businesses are drowning in data but starving for insights. Tapito closes that gap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10" />
          
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center mb-8 shadow-xl shadow-slate-200/50 group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon size={32} />
                </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
                
                {i < 2 && (
                   <div className="mt-8 text-slate-300 md:hidden">
                      <ArrowRight size={24} className="rotate-90" />
                   </div>
                )}
              </motion.div>
            ))}
          </div>
      </Container>
    </section>
  );
}
