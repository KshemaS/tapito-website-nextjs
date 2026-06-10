"use client";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedLucideIcon from "./AnimatedLucideIcon";
import { useState, useEffect } from "react";
import Container from "./Container";
import { cn } from "@/lib/utils";

const queries = [
  { 
    text: "What was my revenue this month?", 
    icon: "Database",
    result: {
      label: "Total Revenue",
      value: "$142,500",
      trend: "+12.4%",
      isPositive: true,
      chartType: 'line',
      chartData: [25, 45, 35, 70, 55, 85, 65, 95, 80]
    }
  },
  { 
    text: "Which store is underperforming?", 
    icon: "Search",
    result: {
      label: "Lowest Efficiency",
      value: "Downtown Wing",
      trend: "-4.2%",
      isPositive: false,
      chartType: 'bar',
      chartData: [80, 70, 85, 40, 35, 30, 45, 20, 15]
    }
  },
  { 
    text: "Who are my top 1% customers?", 
    icon: "Users",
    result: {
      label: "Loyalty Segment",
      value: "842 Patrons",
      trend: "+8.1%",
      isPositive: true,
      chartType: 'circle',
      chartData: [20, 30, 45, 40, 55, 70, 65, 85, 95]
    }
  },
  { 
    text: "Predict next week's inventory.", 
    icon: "Package",
    result: {
      label: "Stock Forecast",
      value: "+15% Needed",
      trend: "+25.0%",
      isPositive: true,
      chartType: 'pie',
      chartData: [40, 30, 20, 10]
    }
  },
];

import AIAssistantMobile from "./AIAssistantMobile";

export default function AIAssistant() {
  const [currentQuery, setCurrentQuery] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuery((prev) => (prev + 1) % queries.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const activeResult = queries[currentQuery].result;

  return (
    <>
      <AIAssistantMobile />
      <section className="hidden lg:block bg-slate-900 section-padding overflow-hidden relative">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(37,99,235,0.1),transparent)]" />
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200/50 text-[#09358c] text-sm font-bold mb-8"
              >
                <AnimatedLucideIcon name="Sparkles" size={16} />
                ARTIFICIAL INTELLIGENCE
              </motion.div>
              
              <h3 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
                Talk to Your <br /> <span className="text-blue-500">Business.</span>
              </h3>
              
              <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl">
                Imagine your entire retail operation had a voice. Tapito's AI is the smartest analyst on your team, available 24/7.
              </p>

              <div className="grid grid-cols-1 gap-4">
                 {queries?.map((q, i) => (
                   <motion.button 
                    key={i}
                    initial={false}
                    animate={{ 
                      x: i === currentQuery ? 20 : 0,
                      opacity: i === currentQuery ? 1 : 0.4 
                    }}
                    className={`relative group flex items-center gap-4 p-5 rounded-2xl transition-all ${i === currentQuery ? 'bg-white/10 border border-white/20' : 'hover:bg-white/5'}`}
                    onClick={() => setCurrentQuery(i)}
                   >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${i === currentQuery ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-500 group-hover:text-white'}`}>
                         <AnimatedLucideIcon name={q.icon} size={24} />
                      </div>
                      <span className={`text-lg font-bold ${i === currentQuery ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>{q.text}</span>
                      {i === currentQuery && (
                        <motion.div layoutId="arrow" className="ml-auto">
                          <AnimatedLucideIcon name="ChevronRight" color="white" className="text-white" />
                        </motion.div>
                      )}
                   </motion.button>
                 ))}
              </div>
            </div>

            <div className="relative group flex justify-center">
               {/* Mobile Frame Container */}
               <motion.div 
                 animate={{ 
                   y: [0, -10, 0],
                   rotateX: [2, 0, 2],
                   rotateY: [-2, 0, -2]
                 }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="relative w-[400px] h-[640px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-800 shadow-[0_0_100px_-20px_rgba(37,99,235,0.4)] overflow-hidden ring-1 ring-white/10"
               >
                  {/* Smartphone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    <div className="w-8 h-1 rounded-full bg-slate-700" />
                  </div>

                  {/* Screen Content */}
                  <div className="h-full bg-slate-800/50 backdrop-blur-3xl flex flex-col relative">
                    {/* App Header */}
                    <div className="bg-white/5 p-6 border-b border-white/5 pt-10 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                             <AnimatedLucideIcon name="Bot" size={20} />
                          </div>
                          <div>
                             <span className="text-white text-sm font-bold block">Tapito AI</span>
                             <span className="text-[9px] text-emerald-400 font-black uppercase tracking-widest">Processing</span>
                          </div>
                       </div>
                       <div className="flex gap-1">
                          <div className="w-1 h-1 rounded-full bg-blue-400" />
                          <div className="w-1 h-1 rounded-full bg-blue-400" />
                          <div className="w-1 h-1 rounded-full bg-blue-400" />
                       </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-5 flex flex-col justify-end gap-5 overflow-hidden">
                       <AnimatePresence mode="wait">
                          <motion.div 
                            key={currentQuery + "req"}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex gap-3 justify-end"
                          >
                             <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-none text-sm font-medium shadow-lg max-w-[85%]">
                                {queries[currentQuery].text}
                             </div>
                          </motion.div>
                       </AnimatePresence>

                       <AnimatePresence mode="wait">
                          <motion.div 
                             key={currentQuery + "res"}
                             initial={{ opacity: 0, scale: 0.95, y: 20 }}
                             animate={{ opacity: 1, scale: 1, y: 0 }}
                             transition={{ delay: 0.3 }}
                             className="flex gap-3 flex-col"
                          >
                             <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shrink-0">
                                   <AnimatedLucideIcon name="Bot" size={14} />
                                </div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none shadow-xl backdrop-blur-xl w-full">
                                   <div className="text-slate-300 text-xs mb-4">Here are the findings:</div>
                                   
                                   <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                      <div className="flex justify-between items-start mb-3">
                                         <div>
                                            <span className="text-slate-300 text-[9px] font-bold uppercase tracking-wider block mb-0.5">{activeResult.label}</span>
                                            <span className="text-xl font-black text-white">{activeResult.value}</span>
                                         </div>
                                         <div className={cn("text-[10px] font-bold flex items-center gap-0.5", activeResult.isPositive ? "text-emerald-400" : "text-rose-400")}>
                                            {activeResult.isPositive ? <AnimatedLucideIcon name="Zap" size={10} /> : <AnimatedLucideIcon name="TrendingUp" className="rotate-180" size={10} />}
                                            {activeResult.trend}
                                         </div>
                                      </div>

                                      <div className="h-20 flex flex-col justify-end">
                                         {queries[currentQuery].result.chartType === 'line' ? (
                                           <div className="h-full w-full pt-2">
                                             <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                               <motion.path
                                                 d={`M 0 40 ${activeResult.chartData.map((h, i) => `L ${(i / (activeResult.chartData.length - 1)) * 100} ${40 - (h / 2.5)}`).join(' ')}`}
                                                 fill="none"
                                                 stroke={activeResult.isPositive ? "#05a0ec" : "#f43f5e"}
                                                 strokeWidth="2"
                                                 initial={{ pathLength: 0 }}
                                                 animate={{ pathLength: 1 }}
                                                 transition={{ duration: 1.5, delay: 0.5 }}
                                               />
                                               <motion.path
                                                 d={`M 0 40 ${activeResult.chartData.map((h, i) => `L ${(i / (activeResult.chartData.length - 1)) * 100} ${40 - (h / 2.5)}`).join(' ')} L 100 40 Z`}
                                                 fill={`url(#gradient-${currentQuery})`}
                                                 initial={{ opacity: 0 }}
                                                 animate={{ opacity: 1 }}
                                                 transition={{ duration: 1 }}
                                               />
                                               <defs>
                                                 <linearGradient id={`gradient-${currentQuery}`} x1="0" y1="0" x2="0" y2="1">
                                                   <stop offset="0%" stopColor={activeResult.isPositive ? "#05a0ec22" : "#f43f5e22"} />
                                                   <stop offset="100%" stopColor="transparent" />
                                                 </linearGradient>
                                               </defs>
                                             </svg>
                                           </div>
                                         ) : activeResult.chartType === 'circle' ? (
                                           <div className="flex items-center gap-3 h-full">
                                              <div className="relative w-12 h-12 shrink-0">
                                                 <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="12" fill="none" />
                                                    <motion.circle 
                                                       cx="50" cy="50" r="40" 
                                                       stroke="#06dcc3" 
                                                       strokeWidth="12" 
                                                       fill="none" 
                                                       strokeDasharray="251.2"
                                                       initial={{ strokeDashoffset: 251.2 }}
                                                       animate={{ strokeDashoffset: 251.2 * (1 - 0.842) }}
                                                       transition={{ duration: 1.5, delay: 0.5 }}
                                                    />
                                                 </svg>
                                                 <div className="absolute inset-0 flex items-center justify-center text-[9px] font-black text-white">84%</div>
                                              </div>
                                              <div className="flex-1 space-y-1.5">
                                                 <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} className="h-full bg-[#06dcc3]" transition={{ delay: 0.8 }} />
                                                 </div>
                                                 <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} className="h-full bg-[#05a0ec]" transition={{ delay: 1.0 }} />
                                                 </div>
                                              </div>
                                           </div>
                                         ) : activeResult.chartType === 'pie' ? (
                                           <div className="flex items-center gap-4 h-full">
                                              <div className="relative w-12 h-12 shrink-0">
                                                 <svg className="w-full h-full" viewBox="0 0 100 100">
                                                    <motion.circle 
                                                       cx="50" cy="50" r="25" 
                                                       fill="none" stroke="#05a0ec" strokeWidth="50"
                                                       strokeDasharray="157 157"
                                                       initial={{ strokeDashoffset: 157 }}
                                                       animate={{ strokeDashoffset: 0 }}
                                                       transition={{ duration: 1, delay: 0.5 }}
                                                    />
                                                    <motion.circle 
                                                       cx="50" cy="50" r="25" 
                                                       fill="none" stroke="#06dcc3" strokeWidth="50"
                                                       strokeDasharray="157 157"
                                                       initial={{ strokeDashoffset: 157 }}
                                                       animate={{ strokeDashoffset: 157 - (157 * 0.7) }}
                                                       transition={{ duration: 1, delay: 0.6 }}
                                                    />
                                                 </svg>
                                              </div>
                                              <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-1">
                                                 {[
                                                    { name: 'Apparel', color: 'bg-[#05a0ec]' },
                                                    { name: 'Grocery', color: 'bg-[#06dcc3]' }
                                                 ].map((cat, i) => (
                                                    <div key={i} className="flex items-center gap-1.5">
                                                       <div className={cn("w-1.5 h-1.5 rounded-full", cat.color)} />
                                                       <span className="text-[8px] text-slate-300 font-bold whitespace-nowrap">{cat.name}</span>
                                                    </div>
                                                 ))}
                                              </div>
                                           </div>
                                         ) : (
                                           <div className="h-12 flex items-end gap-1">
                                             {activeResult.chartData.map((h, i) => (
                                               <motion.div 
                                                   key={i}
                                                   initial={{ height: 0 }}
                                                   animate={{ height: `${h}%` }}
                                                   transition={{ duration: 0.8, delay: 0.4 + i * 0.05 }}
                                                   className={cn("flex-1 rounded-t-sm bg-gradient-to-t", activeResult.isPositive ? "from-blue-600 to-indigo-400" : "from-rose-600 to-rose-400")}
                                               />
                                             ))}
                                           </div>
                                         )}
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </motion.div>
                       </AnimatePresence>
                    </div>

                    {/* Bottom Nav Bar Indicator */}
                    <div className="h-1.5 w-24 bg-slate-700/50 rounded-full mx-auto mb-2" />
                  </div>
               </motion.div>

               {/* Floating UI Bits */}
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute -bottom-8 -left-8 p-6 bg-white rounded-3xl shadow-2xl z-20"
               >
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <AnimatedLucideIcon name="Zap" size={24} />
                     </div>
                     <div>
                        <span className="text-slate-600 text-xs font-bold block mb-1 uppercase tracking-widest">Growth Detected</span>
                        <span className="text-slate-900 font-black">AOV +15.5% with AI</span>
                     </div>
                  </div>
               </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

