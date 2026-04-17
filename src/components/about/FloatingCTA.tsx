"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          className="fixed bottom-8 right-8 z-[90]"
        >
          <Link
            href="/contact"
            className="group relative flex items-center gap-3 bg-slate-950 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#05a0ec] to-[#06dcc3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
            <div className="relative flex items-center gap-3">
              <span className="text-sm font-black uppercase tracking-widest">Book Demo</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Calendar size={16} />
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
