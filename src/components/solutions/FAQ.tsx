"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      
      <Container>
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side: Header */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-black tracking-[0.4em] uppercase text-[#09358c] mb-6 block">Common Questions</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                Solutions <br /> 
                <span className="text-[#09358c]">Simplified.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Everything you need to know about how Tapito transforms your retail operations through automated intelligence.
              </p>
              
              <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <h4 className="text-xl font-bold mb-4 relative z-10">Have more questions?</h4>
                <p className="text-slate-400 text-sm mb-6 relative z-10 leading-relaxed font-medium">
                  Our solutions architects are ready to help you with a custom strategy.
                </p>
                <button className="relative z-10 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20">
                  Talk to an Expert
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "rounded-[2rem] transition-all duration-500 border",
                    openIndex === i 
                      ? "bg-slate-50 border-blue-100 shadow-xl shadow-slate-200/50" 
                      : "bg-white border-slate-100 hover:border-blue-100"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full px-8 py-7 flex items-center justify-between text-left"
                  >
                    <span className={cn(
                      "text-xl font-bold transition-colors",
                      openIndex === i ? "text-[#09358c]" : "text-slate-900"
                    )}>
                      {item.question}
                    </span>
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                      openIndex === i ? "bg-[#09358c] text-white rotate-180" : "bg-slate-100 text-slate-400 rotate-0"
                    )}>
                      {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-0">
                          <p className="text-lg text-slate-500 leading-relaxed font-medium">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
