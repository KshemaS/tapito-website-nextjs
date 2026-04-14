"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, CheckCircle2, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "@/components/features/FeaturesGrid";
import { solutionsData } from "@/components/solutions/SolutionsGrid";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Enterprise", href: "/enterprise" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileFeaturesOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6",
      isScrolled ? "mt-4" : "mt-0"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto rounded-[2.5rem] transition-all duration-500 px-8 py-5 flex items-center justify-between relative",
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50" : "bg-transparent py-7"
      )}>
        <Link onClick={closeMenu} href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-purple-600 rotate-45 rounded-xl opacity-10 group-hover:rotate-90 transition-transform duration-500" />
            <div className="relative w-7 h-7 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="rotate-[15deg] group-hover:rotate-0 transition-transform duration-500">
                <path d="M16 4L26 22H6L16 4Z" fill="#9333ea" className="drop-shadow-[0_0_8px_rgba(147,51,234,0.4)]" />
                <path d="M16 10L22 21H10L16 10Z" fill="white" />
              </svg>
            </div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-purple-600 transition-colors">Tapito</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <div
                key={item.label}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                className="py-1"
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "text-sm font-bold transition-colors uppercase tracking-widest",
                    isActive || activeMenu === item.label ? "text-purple-600" : "text-slate-600 hover:text-purple-600"
                  )}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button className="btn-premium py-3 px-8 text-sm uppercase tracking-widest font-black">Log in</button>
          <button className="btn-premium py-3 px-8 text-sm uppercase tracking-widest font-black">
            Access Portal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Mega Menus */}
        <AnimatePresence>
          {/* Features Mega Menu */}
          {activeMenu === "Features" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              onMouseEnter={() => handleMouseEnter("Features")}
              onMouseLeave={handleMouseLeave}
              className="absolute top-[calc(100%+0.75rem)] left-0 w-full pointer-events-auto"
            >
              <div className="bg-white rounded-[1rem] p-5 2xl:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 4xl:gap-x-12 4xl:gap-y-12">
                  {features.map((feature) => (
                    <Link 
                      key={feature.slug}
                      href={`/features/${feature.slug}`}
                      onClick={closeMenu}
                      className="group flex gap-5"
                    >
                      <div className="shrink-0 w-14 h-14 bg-transparent rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-500">
                        <feature.icon size={26} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[17px] font-black text-slate-900 group-hover:text-purple-600 transition-colors mb-2.5">
                          {feature.title}
                        </h4>
                        
                        <div className="relative min-h-[50px]">
                          <p className="text-[13px] text-slate-500 font-medium leading-relaxed group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-500 absolute inset-0 text-ellipsis overflow-hidden">
                            {feature.description}
                          </p>
                          
                          <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex flex-col gap-2">
                            {feature.benefits.slice(0, 2).map((point) => (
                              <div key={point} className="flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 shadow-[0_0_8px_rgba(147,51,234,0.5)]" />
                                <span className="text-[14px] font-black text-slate-800 tracking-tight italic uppercase">
                                  {point}
                                </span>
                              </div>
                            ))}
                            <div className="flex items-center gap-2 text-[11px] font-black text-purple-600 uppercase tracking-widest mt-1">
                              View More <ArrowRight size={14} className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="flex items-center justify-end pt-2 2xl:pt-8 border-t border-slate-50">
                  <Link 
                    href="/features" 
                    onClick={closeMenu}
                    className="text-slate-900 font-black text-sm hover:text-purple-600 transition-colors flex items-center gap-2 group/all"
                  >
                    View All Features <ChevronRight size={18} className="group-hover/all:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Solutions Mega Menu */}
          {activeMenu === "Solutions" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              onMouseEnter={() => handleMouseEnter("Solutions")}
              onMouseLeave={handleMouseLeave}
              className="absolute top-[calc(100%+0.75rem)] left-0 w-full pointer-events-auto"
            >
              <div className="bg-white rounded-[1rem] p-5 2xl:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 4xl:gap-x-12 4xl:gap-y-12">
                  {solutionsData.map((solution) => (
                    <Link 
                      key={solution.slug}
                      href={`/solutions/${solution.slug}`}
                      onClick={closeMenu}
                      className="group flex gap-5"
                    >
                      <div className={cn(
                        "shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-slate-600 bg-transparent transition-all duration-500 group-hover:text-white",
                        `group-hover:bg-gradient-to-br ${solution.color}`
                      )}>
                        <solution.icon size={26} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[17px] font-black text-slate-900 group-hover:text-purple-600 transition-colors mb-2.5">
                          {solution.title}
                        </h4>
                        
                        <div className="relative min-h-[50px]">
                          <p className="text-[13px] text-slate-500 font-medium leading-relaxed group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-500 absolute inset-0">
                            {solution.desc}
                          </p>
                          
                          <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex flex-col gap-2">
                            {solution.benefits.slice(0, 2).map((point) => (
                              <div key={point} className="flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 shadow-[0_0_8px_rgba(147,51,234,0.5)]" />
                                <span className="text-[14px] font-black text-slate-800 tracking-tight italic uppercase">
                                  {point}
                                </span>
                              </div>
                            ))}
                            <div className="flex items-center gap-2 text-[11px] font-black text-purple-600 uppercase tracking-widest mt-1">
                              View Solution <ArrowRight size={14} className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="flex items-center justify-end pt-2 2xl:pt-8 border-t border-slate-50">
                  <Link 
                    href="/solutions" 
                    onClick={closeMenu}
                    className="text-slate-900 font-black text-sm hover:text-purple-600 transition-colors flex items-center gap-2 group/all"
                  >
                    View All Solutions <ChevronRight size={18} className="group-hover/all:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            className="lg:hidden absolute top-[calc(100%+1rem)] left-6 right-6 bg-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 overflow-y-auto max-h-[85vh] z-[100]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <div key={item.label} className="border-b border-slate-50 last:border-0 pb-2">
                  {item.label === "Features" ? (
                    <>
                      <button 
                        onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                        className={cn(
                            "w-full flex items-center justify-between py-4 text-2xl font-black transition-colors",
                            pathname.startsWith(item.href) || mobileFeaturesOpen ? "text-purple-600" : "text-slate-900"
                        )}
                      >
                        {item.label}
                        <motion.div animate={{ rotate: mobileFeaturesOpen ? 180 : 0 }}>
                            <ChevronDown size={24} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {mobileFeaturesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50/50 rounded-3xl mx-[-1rem] px-4"
                          >
                            <div className="py-4 grid grid-cols-1 gap-3">
                              {features.map((feature) => (
                                <Link
                                  key={feature.slug}
                                  href={`/features/${feature.slug}`}
                                  onClick={closeMenu}
                                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 active:scale-95 transition-all"
                                >
                                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900">
                                    <feature.icon size={20} />
                                  </div>
                                  <span className="text-sm font-black text-slate-900">{feature.title}</span>
                                </Link>
                              ))}
                              <Link 
                                href="/features"
                                onClick={closeMenu}
                                className="flex items-center justify-center gap-2 p-4 text-purple-600 font-black text-sm uppercase tracking-widest"
                              >
                                View All Features <ArrowRight size={16} />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.label === "Solutions" ? (
                    <>
                      <button 
                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className={cn(
                            "w-full flex items-center justify-between py-4 text-2xl font-black transition-colors",
                            pathname.startsWith(item.href) || mobileSolutionsOpen ? "text-purple-600" : "text-slate-900"
                        )}
                      >
                        {item.label}
                        <motion.div animate={{ rotate: mobileSolutionsOpen ? 180 : 0 }}>
                            <ChevronDown size={24} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {mobileSolutionsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50/50 rounded-3xl mx-[-1rem] px-4"
                          >
                            <div className="py-4 grid grid-cols-1 gap-3">
                              {solutionsData.map((solution) => (
                                <Link
                                  key={solution.slug}
                                  href={`/solutions/${solution.slug}`}
                                  onClick={closeMenu}
                                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 active:scale-95 transition-all"
                                >
                                  <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center text-white",
                                    solution.color
                                  )}>
                                    <solution.icon size={18} />
                                  </div>
                                  <span className="text-sm font-black text-slate-900">{solution.title}</span>
                                </Link>
                              ))}
                              <Link 
                                href="/solutions"
                                onClick={closeMenu}
                                className="flex items-center justify-center gap-2 p-4 text-purple-600 font-black text-sm uppercase tracking-widest"
                              >
                                View All Solutions <ArrowRight size={16} />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "block py-4 text-2xl font-black transition-colors",
                        pathname.startsWith(item.href) ? "text-purple-600" : "text-slate-900"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-6 flex flex-col gap-4">
                <button className="btn-premium py-5 rounded-2xl font-black uppercase tracking-widest text-[13px]">
                    Access Portal
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
