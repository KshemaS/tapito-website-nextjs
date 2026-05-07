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
    "Revenue leakage across categories",
    "Customer profile"
  ];

  return (
    <section ref={containerRef} className="overflow-hidden relative">
      {/* Dynamic Background Blobs */}
      <div className="bg-slate-900 py-[80px] xl:py-[100px] 2xl:py-[160px]">
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
        </Container>
        <Container>
        {/* AI Sales Intelligence Engine Details */}
        <div className="mt-32 pt-32 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
             {/* Tapito Continuously Analyzes Card */}
             {/* Tapito Continuously Analyzes Card */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative p-10 lg:p-14 rounded-[2rem] border border-blue-500/20 overflow-hidden group shadow-2xl shadow-blue-500/5 min-h-[500px]"
             >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-slate-950" />
                  <img 
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000" 
                    alt="Analyzes Background" 
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Top Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Brain size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4">Tapito Continuously Analyzes</h3>
                  <div className="w-16 h-1 bg-blue-600/50 rounded-full mb-10" />

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
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                           <CheckCircle2 size={16} className="text-white" />
                        </div>
                        {text}
                      </motion.div>
                    ))}
                  </div>
                </div>
             </motion.div>

             {/* And Automatically Generates Card */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative p-10 lg:p-14 rounded-[2rem] border border-purple-500/20 overflow-hidden group shadow-2xl shadow-purple-500/5 min-h-[500px]"
             >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-slate-950" />
                  <img 
                    src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000" 
                    alt="Generates Background" 
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Top Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-500 mb-8 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                    <Zap size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4">And Automatically Generates</h3>
                  <div className="w-24 h-1 bg-purple-600/50 rounded-full mb-10" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
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
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-4 text-slate-300 font-bold text-[15px]"
                      >
                        <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                           <CheckCircle2 size={14} className="text-white" />
                        </div>
                        {text}
                      </motion.div>
                    ))}
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
        </Container>
      </div>
      <div className="bg-blue-50 pt-[80px] xl:pt-[100px] 2xl:pt-[160px]">
        <Container>
        {/* Marketing Cost Reduction Section */}
        <div className="border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             {/* Left Content */}
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                   Efficiency Gain
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                  Reduce Marketing <br /> <span className="text-[#09358c]">Costs with AI</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12 max-w-xl">
                  Traditional marketing often wastes money by targeting the wrong audience. Tapito ensures every rupee of your budget is spent on high-conversion opportunities.
                </p>
                
                <div className="space-y-5">
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
                      className="flex items-center gap-4 text-slate-700 font-bold"
                    >
                       <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={12} className="text-blue-600 font-black" />
                       </div>
                       {text}
                    </motion.div>
                  ))}
                </div>
             </motion.div>

             {/* Right Content - Vertical Timeline */}
             <div className="relative pl-12 lg:pl-24">
                {/* Vertical Line */}
                <div className="absolute left-[23px] lg:left-[39px] top-3 bottom-8 w-[3px] bg-blue-400" />

                <div className="space-y-16 relative z-10">
                   {[
                     { title: "Identify High-Conversion", desc: "Focus spend on customers most likely to purchase next.", icon: Target },
                     { title: "Automate Campaigns", desc: "Reduce manual effort and agency costs with AI-driven triggers.", icon: Zap },
                     { title: "Personalized Outreach", desc: "Eliminate generic spam with highly relevant project-based offers.", icon: Users },
                     { title: "Maximize ROI", desc: "Achieve more revenue with significantly lower marketing spend.", icon: BarChart }
                   ].map((item, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-start gap-6 relative group"
                     >
                        {/* Branching Dot and Connector Line */}
                        <div className="absolute -left-[32px] lg:-left-[48px] top-6 lg:top-8 flex items-center">
                           <div className="w-2 h-2 rounded-full bg-blue-400" />
                           <div className="w-4 lg:w-6 h-[1px] bg-blue-400" />
                        </div>

                        {/* Timeline Icon */}
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-blue-50/50 backdrop-blur-sm border border-blue-100/50 flex items-center justify-center text-blue-600 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-500">
                           <item.icon size={24} color="#09358c" />
                        </div>
                        
                        <div className="pt-1 lg:pt-3">
                           <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                           <p className="text-slate-500 font-medium leading-relaxed max-w-sm">{item.desc}</p>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        <div className="pt-32 border-t border-white/10 text-center">
           <motion.div style={{ opacity }}>
              <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-400 mb-6 block">The Result</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#09358c] mb-20">
                Business Impact
              </h2>
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
      </div>
    </section>
  );
};

export default IndustryExample;

