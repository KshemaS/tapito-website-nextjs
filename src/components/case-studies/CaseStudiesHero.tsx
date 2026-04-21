"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Container from "@/components/Container";

const STATS = [
  { value: "500+", label: "Retail brands" },
  { value: "4.8×", label: "Average ROI" },
  { value: "16",   label: "Countries" },
  { value: "$2B+", label: "Revenue influenced" },
];

export const CaseStudiesHero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 relative z-10">
      <Container>
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#09358c] bg-blue-50/80 backdrop-blur-xl rounded-full border border-blue-200/50 shadow-sm shadow-blue-100/50"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={12} className="text-[#05a0ec] fill-current" />
              </motion.div>
              Customer Stories
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 sm:mb-10 tracking-tighter leading-[1] sm:leading-[0.95] text-balance">
              Real results from <br className="hidden sm:block" />
              <span className="text-[#09358c]">real retailers</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-10 sm:mb-12 px-4 sm:px-0">
              Discover how 500+ leading retail brands use Tapito to grow faster,
              retain more customers, and make smarter decisions every day.
            </p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-full shadow-sm"
                >
                  <span className="text-xl font-bold text-slate-900 tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-[13px] font-medium text-slate-400">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
