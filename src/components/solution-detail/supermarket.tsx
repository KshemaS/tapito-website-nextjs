"use client";
 
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "@/components/Container";
import {
  CheckCircle2,
  ShoppingBasket,
  Utensils,
  Baby,
  Milk,
  Apple,
  Package,
  Clock,
  Heart,
  MessageSquare,
  DollarSign,
  Layers,
  Repeat,
  UserCheck,
  BarChart,
  Users,
  Search,
  Target,
  XCircle,
  Zap,
  Coffee,
  Beef,
  Cookie
} from "lucide-react";
import AnimatedLucideIcon from "../AnimatedLucideIcon";
import { ActivityIcon } from "lucide-animated";
import Image from "next/image";
// import analyzesBg from "@/public/assets/images/solutions/analyzes-supermarket.jpg";
// import generatesBg from "@/public/assets/images/solutions/generates-supermarket.jpg";

const Supermarket = () => {
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
    { icon: Baby, label: "Baby Food" },
    { icon: Package, label: "Diapers" },
    { icon: Heart, label: "Personal Care" },
    { icon: Utensils, label: "Household Essentials" },
    { icon: Zap, label: "Health Products" },
    { icon: Cookie, label: "Snacks & Beverages" },
    { icon: ShoppingBasket, label: "Cleaning Products" },
    { icon: Clock, label: "Daily Essentials" },
  ];

  const consequences = [
    "Missed basket expansion opportunities",
    "Lower repeat visits",
    "Generic promotional campaigns",
    "Weak customer retention",
    "Unoptimized marketing spend",
    "Revenue leakage across categories"
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
                The Retail Gap
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Supermarkets <br /> <span className="text-blue-500">Lose Revenue</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Most supermarkets process thousands of transactions daily but fail to understand the deeper customer buying patterns. They miss the total household intent, leaving significant revenue on the table.
              </p>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group">
                 <div className="text-sm font-bold mb-3 text-blue-500 uppercase tracking-widest">Growth Case Study</div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  The "Single-Category" Purchase Trap
                </h4>
                <p className="text-slate-400 mb-8 font-medium">A customer purchasing baby products inherently needs:</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                  {needs.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-blue-600/20 transition-all"
                    >
                      <AnimatedLucideIcon icon={item.icon} size={18} color="white" />
                      <span className="text-sm font-bold text-slate-300">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-rose-400 text-xs font-black uppercase tracking-widest mb-4">Without Tapito, this leads to:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {consequences.map((text, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-400 text-xs font-bold">
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
              <div className="relative z-10 bg-white rounded-[3.5rem] p-10 lg:p-16 shadow-2xl shadow-emerald-950/40 overflow-hidden">
                 <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900 flex items-center justify-center text-white font-black text-xl italic">T</div>
                    <span className="text-xl font-black text-slate-900 tracking-tight">Tapito Basket Logic</span>
                 </div>

                 <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight">
                   The AI Grocery <br /> <span className="text-emerald-900">Growth Engine</span>
                 </h3>

                 <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                   Tapito continuously analyzes shopping behavior, purchase frequency, and household patterns to predict exactly what customers will need next—from daily essentials to seasonal treats.
                 </p>

                 <ul className="space-y-6">
                   {[
                     "Personalized Product Recommendations",
                     "AI-Based Upsell Suggestions",
                     "Smart Customer Segmentation",
                     "Household Replenishment Reminders",
                     "Loyalty-Based Engagement Flows"
                   ].map((item, i) => (
                     <motion.li 
                       key={i} 
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-start gap-4"
                     >
                       <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-1">
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
        {/* AI Retail Intelligence Engine Details */}
        <div className="mt-32 pt-32 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
             {/* Tapito Continuously Analyzes Card */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative p-10 lg:p-14 rounded-[2rem] border border-emerald-500/20 overflow-hidden group shadow-2xl shadow-emerald-500/5 min-h-[500px]"
             >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-slate-950" />
                  {/* <Image 
                    src={analyzesBg} 
                    alt="Supermarket Analyzes" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Top Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20  transition-all duration-500">
                    <AnimatedLucideIcon icon={ActivityIcon} size={32} className="group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4">Tapito Basket Analytics</h3>
                  <div className="w-16 h-1 bg-blue-600/50 rounded-full mb-10" />

                  <div className="space-y-6">
                    {[
                      "Customer shopping behavior",
                      "Household purchase frequency",
                      "Product affinity combinations",
                      "Staff basket-expansion momentum"
                    ].map((text, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 text-slate-300 font-bold text-lg"
                      >
                        <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(5,150,105,0.4)]">
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
               className="relative p-10 lg:p-14 rounded-[2rem] border border-green-500/20 overflow-hidden group shadow-2xl shadow-green-500/5 min-h-[500px]"
             >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-slate-950" />
                  {/* <Image 
                    src={generatesBg} 
                    alt="Grocery Generates" 
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
                      "AI-based basket cross-selling",
                      "Smart household segments",
                      "Inventory replenishment alerts",
                      "Seasonal grocery promotions",
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
        {/* Basket Performance Section */}
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
                  className="absolute top-0 right-0 w-[70%] h-full bg-emerald-50/50 pointer-events-none" 
                  style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}
                />

                <div className="relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                     Basket Optimization
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                    Maximize Every <br /> <span className="text-blue-900">Checkout Visit</span>
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12 max-w-xl">
                    Tapito transforms your retail operations into an intelligent growth system. No more missed opportunities for household essentials when a customer buys daily basics.
                  </p>
                  
                  <div className="space-y-5">
                    {[
                      "Linking daily staples with high-margin items",
                      "Automating household replenishment follow-ups",
                      "Real-time basket pairing for store staff"
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
                     className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
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
                      { title: "AI Recommendation Engine", desc: "Identify what customers are likely to purchase next based on behavioral patterns.", icon: Apple },
                      { title: "Smart Basket Intelligence", desc: "Automatically trigger recommendations for complementary essentials during shopping.", icon: ShoppingBasket },
                      { title: "Automated Engagement", desc: "Run WhatsApp and SMS campaigns based on customer activity and replenishment intent.", icon: MessageSquare },
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
                                backgroundColor: ["#34d399", "#059669", "#34d399"]
                             }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                             className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" 
                           />
                           <div className="w-4 lg:w-6 h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-200" />
                        </div>

                        {/* Timeline Icon with Pulse */}
                        <motion.div 
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(5, 150, 105, 0)", "0 0 20px rgba(5, 150, 105, 0.2)", "0 0 0px rgba(5, 150, 105, 0)"]
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-500 relative z-20"
                        >
                           <AnimatedLucideIcon icon={item.icon} size={24} color="#1e3a8a" />
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
                { title: "Increase Basket Value", desc: "Maximize revenue per visit through intelligent cross-category recommendations.", icon: DollarSign },
                { title: "Improve Cross-Category Sales", desc: "Connect groceries, dairy, and household essentials in one journey.", icon: Layers },
                { title: "Capture Missed Revenue", desc: "Reduce missed sales opportunities with automated AI-driven prompts.", icon: Target },
                { title: "Increase Repeat Visits", desc: "Keep customers returning through personalized replenishment engagement.", icon: Repeat },
                { title: "Tailored Customer Offers", desc: "Deliver personalized offers based on specific household interests.", icon: UserCheck },
                { title: "Lower Marketing Costs", desc: "Eliminate wasteful spend by targeting high-intent grocery buyers.", icon: BarChart },
                { title: "Empowered Store Staff", desc: "Motivate supermarket teams with real-time incentive visibility.", icon: Users },
                { title: "Automate Engagement", desc: "24/7 personalized communication via WhatsApp and SMS.", icon: MessageSquare },
                { title: "Shopping Behavior Insights", desc: "Gain complete visibility into customer behavior and household trends.", icon: Search }
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
                   <div className="absolute left-0 top-0 w-1 h-full bg-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                    <div className="flex w-full justify-between items-start">
                       <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center shrink-0">
                          <AnimatedLucideIcon icon={item.icon} size={24} color="#3b82f6" className="group-hover:scale-110 transition-transform" />
                       </div>
                    </div>
                   
                   <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-tight">{item.title}</h4>
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

export default Supermarket;
