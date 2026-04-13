"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Search, ChevronRight, Sparkles, Wand2, Database, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import Container from "./Container";

const queries = [
  { text: "What was my revenue this month?", icon: Database },
  { text: "Which store is underperforming?", icon: Search },
  { text: "Who are my top 1% customers?", icon: Bot },
  { text: "Predict next week's inventory.", icon: Wand2 },
];

export default function AIAssistant() {
  const [currentQuery, setCurrentQuery] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuery((prev) => (prev + 1) % queries.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-slate-900 py-32 lg:py-48 overflow-hidden relative">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8"
            >
              <Sparkles size={16} />
              ARTIFICIAL INTELLIGENCE
            </motion.div>
            
            <h3 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
              Talk to Your <br /> <span className="text-blue-500">Business.</span>
            </h3>
            
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl">
              Imagine your entire retail operation had a voice. Tapito's AI is the smartest analyst on your team, available 24/7.
            </p>

            <div className="grid grid-cols-1 gap-4">
               {queries.map((q, i) => (
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
                       <q.icon size={24} />
                    </div>
                    <span className={`text-lg font-bold ${i === currentQuery ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>{q.text}</span>
                    {i === currentQuery && (
                      <motion.div layoutId="arrow" className="ml-auto">
                        <ChevronRight className="text-blue-500" />
                      </motion.div>
                    )}
                 </motion.button>
               ))}
            </div>
          </div>

          <div className="relative group">
             {/* Main Interface */}
             <motion.div 
               animate={{ 
                 y: [0, -10, 0],
                 rotateX: [0, 2, 0],
                 rotateY: [0, -2, 0]
               }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="bg-slate-800/50 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_0_100px_-20px_rgba(37,99,235,0.3)] overflow-hidden"
             >
                <div className="bg-white/5 p-6 border-b border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                         <Bot size={22} />
                      </div>
                      <div>
                         <span className="text-white font-bold block">Tapito Engine</span>
                         <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Active Processing</span>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400/50" />
                      <div className="w-2 h-2 rounded-full bg-amber-400/50" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
                   </div>
                </div>

                <div className="h-[450px] p-8 flex flex-col justify-end gap-6">
                   <div className="space-y-6">
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={currentQuery + "req"}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex gap-4 justify-end"
                        >
                           <div className="bg-blue-600 text-white p-5 rounded-3xl rounded-tr-none text-lg font-medium shadow-xl">
                              {queries[currentQuery].text}
                           </div>
                           <div className="w-10 h-10 rounded-full bg-white/10 shrink-0" />
                        </motion.div>
                      </AnimatePresence>

                      <AnimatePresence mode="wait">
                         <motion.div 
                            key={currentQuery + "res"}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-4"
                         >
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shrink-0">
                               <Bot size={18} />
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl rounded-tl-none shadow-2xl backdrop-blur-xl w-full">
                               <div className="space-y-4">
                                  <div className="text-slate-300">Analysis complete. Here are the findings:</div>
                                  <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                                     <div className="flex justify-between items-end mb-4">
                                        <div>
                                           <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Metric</span>
                                           <span className="text-2xl font-black text-white">$142,500</span>
                                        </div>
                                        <div className="text-emerald-400 text-sm font-bold flex items-center gap-1">
                                           <Zap size={14} />
                                           +12.4%
                                        </div>
                                     </div>
                                     <div className="h-16 flex items-end gap-1.5">
                                        {[30, 50, 40, 70, 45, 60, 90, 55, 80].map((h, i) => (
                                           <motion.div 
                                              key={i}
                                              initial={{ height: 0 }}
                                              animate={{ height: `${h}%` }}
                                              className="flex-1 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm"
                                           />
                                        ))}
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </motion.div>
                      </AnimatePresence>
                   </div>
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
                      <Sparkles size={24} />
                   </div>
                   <div>
                      <span className="text-slate-400 text-xs font-bold block mb-1 uppercase tracking-widest">Growth Detected</span>
                      <span className="text-slate-900 font-black">AOV +15.5% with AI</span>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
