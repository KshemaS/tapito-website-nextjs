"use client";
 
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "@/components/Container";
import {
  CheckCircle2,
  ShoppingCart,
  MousePointer2,
  Target,
  RefreshCcw,
  Smartphone,
  Watch,
  Headphones,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  Zap,
  BarChart,
  Users,
  Search,
  MessageSquare,
  DollarSign,
  Layers,
  Repeat,
  UserCheck,
  XCircle,
  Brain,
  LayoutDashboard,
  Award,
  TrendingUp,
  Clock,
  Calendar,
  Heart,
  Smile,
  Eye,
  SearchCode
} from "lucide-react";
import AnimatedLucideIcon from "../AnimatedLucideIcon";
import { ActivityIcon } from "lucide-animated";
import Image from "next/image";
// import analyzesBg from "@/public/assets/images/solutions/analyzes-ecommerce.jpg";
// import generatesBg from "@/public/assets/images/solutions/generates-ecommerce.jpg";

const Ecommerce = () => {
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
    { icon: Smartphone, label: "Electronics" },
    { icon: Shirt, label: "Fashion" },
    { icon: Headphones, label: "Accessories" },
    { icon: Watch, label: "Wearables" },
    { icon: ShieldCheck, label: "Protection" },
    { icon: ShoppingBag, label: "Seasonal" },
    { icon: Repeat, label: "Subscriptions" },
    { icon: Eye, label: "View Patterns" },
  ];

  const consequences = [
    "High cart abandonment rates",
    "Missed upselling opportunities",
    "Lower repeat purchase cycles",
    "Weak customer retention",
    "Generic promotional campaigns",
    "Unoptimized marketing spend"
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
                The Conversion Gap
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why eCommerce Businesses <br /> <span className="text-blue-500">Lose Digital Revenue</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Most eCommerce platforms only focus on completed purchases and fail to understand the customer journey and browsing intent behind every interaction.
              </p>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group">
                 <div className="text-sm font-bold mb-3 text-blue-500 uppercase tracking-widest">Digital Case Study</div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  The Journey Blindspot
                </h4>
                <p className="text-slate-400 mb-8 font-medium">A customer viewing smartphones inherently needs:</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {needs.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col items-center gap-3 bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-blue-600/20 transition-all text-center"
                    >
                      <AnimatedLucideIcon icon={item.icon} size={20} color="white" />
                      <span className="text-[10px] font-black uppercase tracking-tighter text-slate-300 leading-tight">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-rose-400 text-xs font-black uppercase tracking-widest mb-4">Without Tapito, this leads to:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {consequences.map((text, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-xs font-bold">
                        <AnimatedLucideIcon icon={XCircle} size={14} className="text-rose-500/50" /> {text}
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
                    <span className="text-xl font-black text-slate-900 tracking-tight">Tapito Commerce Logic</span>
                 </div>

                 <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight">
                   The AI Commerce <br /> <span className="text-[#09358c]">Intelligence Engine</span>
                 </h3>

                 <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                   Tapito continuously analyzes browsing behavior, cart activity, and shopping intent to identify connected conversion opportunities that traditional systems overlook.
                 </p>

                 <ul className="space-y-6">
                   {[
                     "Identifies Browsing Intent Automatically",
                     "Increases Average Order Value",
                     "Automates Cart Recovery Flows",
                     "Drives Retention-Based Loyalty",
                     "Reduces Intent-Based Revenue Leakage"
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
        {/* AI Commerce Intelligence Engine Details */}
        <div className="mt-32 pt-32 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                  {/* <Image 
                    src={analyzesBg} 
                    alt="eCommerce Analyzes" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Top Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20  transition-all duration-500">
                    <AnimatedLucideIcon icon={ActivityIcon} size={32} className="group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4">Tapito Intent Analytics</h3>
                  <div className="w-16 h-1 bg-blue-600/50 rounded-full mb-10" />

                  <div className="space-y-6">
                    {[
                      "Browsing behavior & shopping intent",
                      "Cart activity & abandonment patterns",
                      "Product interests & search patterns",
                      "Seasonal trends & purchase cycles"
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
                           <AnimatedLucideIcon icon={CheckCircle2} size={16} color="white" />
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
                  {/* <Image 
                    src={generatesBg} 
                    alt="eCommerce Generates" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Top Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-500 mb-8 border border-purple-500/20  transition-all duration-500">
                    <AnimatedLucideIcon icon={Zap} size={32} className="group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4">Automatically Recommends</h3>
                  <div className="w-24 h-1 bg-purple-600/50 rounded-full mb-10" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                      "Personalized product matches",
                      "AI-based upsell suggestions",
                      "Smart customer segments",
                      "Cart recovery campaigns",
                      "Seasonal product suggestions",
                      "Cross-category opportunities",
                      "Automated engagement flows",
                      "Incentive-based sales motivation"
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

      <div className="bg-blue-50 py-[80px] xl:py-[100px] 2xl:py-[160px] relative">
        <Container>
        {/* Intent Sales Performance Section */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             {/* Left Content */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }} 
               whileInView={{ opacity: 1, x: 0 }} 
               viewport={{ once: true }}
               className="bg-white rounded-[3.5rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl shadow-blue-500/5 border border-white"
             >
                {/* Decorative ClipPath Background */}
                <div 
                  className="absolute top-0 right-0 w-[70%] h-full bg-blue-50/50 pointer-events-none" 
                  style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}
                />

                <div className="relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                     Conversion Optimization
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                    Maximize Every <br /> <span className="text-[#09358c]">Digital Touchpoint</span>
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12 max-w-xl">
                    Tapito transforms your eCommerce store into an intelligent conversion center. No more missed opportunities for accessories or protection when a primary item is viewed.
                  </p>
                  
                  <div className="space-y-5">
                    {[
                      "Linking smartphone views with essential protection",
                      "Automating abandoned cart recovery",
                      "Real-time style pairing for fashion shoppers"
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
                </div>
             </motion.div>

             {/* Right Content - Vertical Timeline */}
             <div className="relative pl-12 lg:pl-24">
                {/* Vertical Line with Flowing Animation */}
                <div className="absolute left-[23px] lg:left-[39px] top-3 bottom-8 w-[3px] bg-slate-200 rounded-full overflow-hidden">
                   <motion.div 
                     className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                     animate={{ y: ["-160px", "600px"] }}
                     transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "linear" 
                     }}
                   />
                </div>

                <div className="space-y-16 relative z-10">
                   {[
                      { title: "AI Recommendation Engine", desc: "Identify what customers are likely to purchase next based on browsing patterns.", icon: MousePointer2 },
                      { title: "Smart Upsell Logic", desc: "Automatically trigger recommendations for complementary accessories during browsing.", icon: RefreshCcw },
                      { title: "Automated Engagement", desc: "Run WhatsApp and SMS campaigns based on cart activity and shopping intent.", icon: MessageSquare },
                      { title: "Revenue Opportunity Detection", desc: "Monitor hidden revenue opportunities and suggest actions to increase sales.", icon: BarChart }
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
                           <motion.div 
                             animate={{ 
                                scale: [1, 1.5, 1],
                                backgroundColor: ["#60a5fa", "#2563eb", "#60a5fa"]
                             }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                             className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" 
                           />
                           <div className="w-4 lg:w-6 h-[2px] bg-gradient-to-r from-blue-400 to-blue-200" />
                        </div>

                        {/* Timeline Icon with Pulse */}
                        <motion.div 
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(37, 99, 235, 0)", "0 0 20px rgba(37, 99, 235, 0.2)", "0 0 0px rgba(37, 99, 235, 0)"]
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-500 relative z-20"
                        >
                           <AnimatedLucideIcon icon={item.icon} size={24} color="#09358c" />
                        </motion.div>
                        
                        <div className="pt-1 lg:pt-3">
                           <h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                           <p className="text-slate-500 font-medium leading-relaxed max-w-sm">{item.desc}</p>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </div>
        </div>
        </Container>
      </div>

      <div className="bg-slate-900 py-[80px] xl:py-[100px] 2xl:py-[160px]">
        <Container>
        <div className="text-center">
        <motion.div style={{ opacity }}>
              <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-400 mb-6 block">The Result</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-20">
                Business Impact
              </h2>
           </motion.div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Increase Conversion Rates", desc: "Maximize eCommerce revenue through intelligent browsing and intent tracking.", icon: TrendingUp },
                { title: "Reduce Cart Abandonment", desc: "Recover lost revenue with automated cart reminders and personalized offers.", icon: RefreshCcw },
                { title: "Improve Cross-Selling", desc: "Connect main products with accessories and protection in one journey.", icon: Layers },
                { title: "Increase Repeat Purchases", desc: "Build lasting digital relationships with automated follow-ups and alerts.", icon: Repeat },
                { title: "Personalized Shopping", desc: "Tailored shopping experiences based on individual browsing patterns.", icon: UserCheck },
                { title: "Reduce Marketing Costs", desc: "Eliminate wasteful spend by targeting high-intent digital shoppers.", icon: BarChart },
                { title: "Improve Customer Retention", desc: "Maintain strong digital bonds with automated engagement and updates.", icon: Heart },
                { title: "Increase Order Value", desc: "Identify and convert upsell opportunities within your digital store.", icon: DollarSign },
                { title: "Automate Engagement", desc: "24/7 personalized digital communication via WhatsApp, SMS and Email.", icon: MessageSquare },
                { title: "Complete Visibility", desc: "Deep insights into customer shopping behavior and intent history.", icon: Search }
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
                          <AnimatedLucideIcon icon={item.icon} size={24} color="#3b82f6" className="group-hover:scale-110 transition-transform" />
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

export default Ecommerce;
