"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "@/components/Container";
import { CheckCircle2, Package, Home, PaintBucket, Lightbulb, Bath, Armchair, XCircle, Brain, Zap, MessageSquare, TrendingUp, DollarSign, Layers, ShieldCheck, Repeat, UserCheck, BarChart, Users, Search, Target } from "lucide-react";

const IndustryExample = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax transforms
  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, 100]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2], [0.9, 1]);

  const needs = [
    { icon: Package, label: "Tiles" },
    { icon: Lightbulb, label: "Electrical" },
    { icon: PaintBucket, label: "Paints" },
    { icon: Bath, label: "Sanitaryware" },
    { icon: Home, label: "Kitchen Fittings" },
    { icon: Armchair, label: "Interiors" },
  ];

  const consequences = [
    "Missed cross-selling opportunities",
    "Lower basket value",
    "Weak customer retention",
    "Unoptimized marketing spend",
    "Limited customer visibility",
    "Revenue leakage across categories"
  ];

  return (
    <section ref={containerRef} className="section-padding bg-slate-950 overflow-hidden relative">
      {/* Dynamic Background Blobs */}
      <motion.div 
        style={{ y: y1, opacity: 0.4 }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" 
      />
      <motion.div 
        style={{ y: y2, opacity: 0.3 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4" 
      />
      
      <Container>
        <motion.div style={{ opacity, scale }}>
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-xs font-black tracking-[0.3em] uppercase text-blue-400 mb-6 block"
              >
                The Real Problem
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Building Material <br /> <span className="text-blue-500">Businesses Lose Revenue</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Most sales teams only sell what the customer directly asks for. They miss the broader project intent, leading to significant revenue leakage.
              </p>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group">
                 <div className="text-sm font-bold mb-3 text-blue-500">EXAMPLE</div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  Plumbing Purchase Intent
                </h4>
                <p className="text-slate-400 mb-8 font-medium">A customer buying plumbing materials for a new home also requires:</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                  {needs.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-blue-600/20 transition-all"
                    >
                      <item.icon size={18} className="text-blue-400" />
                      <span className="text-sm font-bold text-slate-300">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-rose-400 text-xs font-black uppercase tracking-widest mb-4">Without Tapito, this leads to:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {consequences.map((text, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                        <XCircle size={14} className="text-rose-500/50" /> {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              style={{ y: y1 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 bg-white rounded-[3.5rem] p-10 lg:p-16 shadow-2xl shadow-blue-950/40 overflow-hidden">
                 <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-[#09358c] flex items-center justify-center text-white font-black text-xl italic">T</div>
                    <span className="text-xl font-black text-slate-900 tracking-tight">Tapito Intelligence</span>
                 </div>

                 <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight">
                   Connecting Intent with <br /> <span className="text-[#09358c]">Future Needs</span>
                 </h3>

                 <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                   Tapito acts as an AI Sales Intelligence Engine, automatically generating recommendations and offers that sales staff unintentionally miss.
                 </p>

                 <ul className="space-y-6">
                   {[
                     "Captures Cross-Selling Automatically",
                     "Increases Average Basket Value",
                     "Optimizes Marketing Spend with AI",
                     "Drives Sales Incentive Motivation",
                     "Reduces Revenue Leakage"
                   ].map((item, i) => (
                     <motion.li 
                       key={i} 
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-start gap-4"
                     >
                       <div className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 mt-1">
                         <CheckCircle2 size={14} />
                       </div>
                       <span className="text-slate-700 font-bold">{item}</span>
                     </motion.li>
                   ))}
                 </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* AI Sales Intelligence Engine Details */}
        <div className="mt-32 pt-32 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8">
                  <Brain size={32} />
                </div>
                <h3 className="text-3xl font-black text-white mb-8">Tapito Continuously Analyzes:</h3>
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                  <div className="space-y-6">
                    {[
                      "Purchase behavior & journey patterns",
                      "Product combinations & repeat buying cycles",
                      "Customer activity & regional demand trends",
                      "Staff sales performance"
                    ].map((text, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 text-slate-300 font-bold text-lg"
                      >
                        <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)] shrink-0" />
                        {text}
                      </motion.div>
                    ))}
                  </div>
                </div>
             </motion.div>
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-black text-white mb-8">And Automatically Generates:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Product recommendations",
                    "Personalized offers",
                    "AI-based upsell suggestions",
                    "Smart customer segmentation",
                    "Follow-up reminders",
                    "Cross-category opportunities",
                    "Automated campaigns",
                    "Incentive-based motivation"
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/5 p-5 rounded-2xl border border-white/5 text-slate-300 font-bold transition-all cursor-pointer hover:bg-blue-500/10 hover:border-blue-500/30"
                    >
                      {text}
                    </motion.div>
                  ))}
                </div>
             </motion.div>
          </div>
        </div>

        {/* Marketing Cost Reduction Section */}
        <div className="mt-32 pt-32 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div style={{ y: y1 }}>
                <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-400 mb-6 block">Efficiency Gain</span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">Reduce Marketing <br /> <span className="text-blue-500">Costs with AI</span></h2>
                <p className="text-lg text-slate-400 leading-relaxed font-medium">
                  Traditional marketing often wastes money by targeting the wrong audience. Tapito ensures every rupee of your budget is spent on high-conversion opportunities.
                </p>
                
                <div className="mt-10 flex flex-col gap-4">
                  {[
                    "Eliminating unnecessary promotions",
                    "Identifying high-conversion customers",
                    "Improving conversion rates through AI insights"
                  ].map((text, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-slate-300 font-bold"
                    >
                       <CheckCircle2 size={18} className="text-blue-500" />
                       {text}
                    </motion.div>
                  ))}
                </div>
             </motion.div>
             <motion.div 
                style={{ y: y2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
             >
                {[
                  { title: "Identify High-Conversion", desc: "Focus spend on customers most likely to purchase next." },
                  { title: "Automate Campaigns", desc: "Reduce manual effort and agency costs with AI-driven triggers." },
                  { title: "Personalized Outreach", desc: "Eliminate generic spam with highly relevant project-based offers." },
                  { title: "Maximize ROI", desc: "Achieve more revenue with significantly lower marketing spend." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10, rotate: [0, 1, -1, 0] }}
                    className="bg-white/5 border border-white/10 p-8 rounded-[2rem] transition-all group"
                  >
                    <h4 className="text-white font-bold mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
             </motion.div>
          </div>
        </div>

        <div className="mt-32 pt-32 border-t border-white/10 text-center">
           <motion.div style={{ opacity }}>
              <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-400 mb-6 block">The Result</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-20">Business Impact</h2>
           </motion.div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Increase average order value", desc: "Every customer project is maximized through intelligent AI recommendations.", icon: DollarSign },
                { title: "Improve cross-category sales", desc: "Connect plumbing, tiles, and paints seamlessly within a single customer journey.", icon: Layers },
                { title: "Reduce missed sales opportunities", desc: "Ensure no revenue leakage occurs due to human memory gaps or missed follow-ups.", icon: Target },
                { title: "Increase repeat purchases", desc: "Keep customers coming back for every phase of their building project.", icon: Repeat },
                { title: "Deliver personalized customer offers", desc: "High-conversion offers tailored exactly to what the customer needs next.", icon: UserCheck },
                { title: "Reduce marketing costs", desc: "Eliminate wasteful broad-market spend by targeting high-intent customers.", icon: BarChart },
                { title: "Motivate sales teams", desc: "Real-time incentive visibility drives better performance and staff retention.", icon: Users },
                { title: "Automate customer engagement", desc: "24/7 engagement through WhatsApp and SMS without manual staff effort.", icon: MessageSquare },
                { title: "Gain complete visibility", desc: "Deep insights into every aspect of your customer buying behavior.", icon: Search }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className="group flex flex-col items-start gap-6 p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] transition-all text-left relative overflow-hidden"
                >
                   {/* Background Accent */}
                   <div className="absolute left-0 top-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="flex w-full justify-between items-start">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center shrink-0">
                         <item.icon className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
                      </div>
                   </div>
                   
                   <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </Container>
    </section>
  );
};

export default IndustryExample;

