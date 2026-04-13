"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-6",
      isScrolled ? "py-3" : "py-6"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 px-8 py-4 flex items-center justify-between",
        isScrolled ? "glass shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-white/40" : "bg-transparent"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 gradient-bg-anim rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:rotate-6 transition-transform">
            <span className="text-white font-black text-2xl">T</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">Tapito</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {["Features", "Solutions", "Resources", "Enterprise"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button className="btn-premium py-3 px-8 text-sm uppercase tracking-widest font-black">Log in</button>
          <button className="btn-premium py-3 px-8 text-sm uppercase tracking-widest font-black">
            Access Portal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center transition-transform active:scale-90"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden absolute top-28 left-6 right-6 glass rounded-[2.5rem] p-10 shadow-2xl border-white/50"
          >
            <div className="flex flex-col gap-8">
              {["Features", "Solutions", "Resources", "Enterprise"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black text-slate-900"
                >
                  {item}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                <button className="w-full py-4 font-black uppercase tracking-widest bg-slate-100 rounded-3xl">Log in</button>
                <button className="btn-premium w-full py-5 text-sm uppercase tracking-widest font-black">Access Portal</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
