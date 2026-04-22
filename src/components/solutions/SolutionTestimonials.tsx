"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ArrowRight, Zap } from "lucide-react";
import Container from "../Container";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Tapito transformed our building material sales by bridging the gap between dealer data and real-time contractor loyalty. We saw a 32% increase in repeat orders within the first quarter.",
    author: "James Hardie",
    role: "Director of Operations",
    company: "BuildCorp Dynamics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The integration with our tech stack was seamless. Within days, Tapito was processing millions of events, giving our marketing team the specific intent signals they needed to optimize ROI.",
    author: "Sarah Chen",
    role: "Chief Marketing Officer",
    company: "LuxeRetail Group",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Finally, a platform that understands the complexity of B2B electronics. The automated logic for trade-in cycles has significantly increased our customer LTV.",
    author: "Markus Vögel",
    role: "VP of Digital Strategy",
    company: "ElectroHub Global",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export const SolutionTestimonials = () => {
  const [active, setActive] = useState(0); 
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (active < testimonials.length - 1) setActive(prev => prev + 1);
  };

  const prev = () => {
    if (active > 0) setActive(prev => prev - 1);
  };

  // Card configuration
  const isMobile = mounted && windowWidth < 768;
  const cardWidth = isMobile ? Math.min(windowWidth - 32, 500) : 800;
  const gap = isMobile ? 16 : 32;

  if (!mounted) return null;

  return (
    <section className="py-20 md:py-40 bg-black text-white overflow-hidden w-full">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4">
        <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-blue-500 mb-4 md:mb-6 block">SUCCESS STORIES</span>
        <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tight">
          Loved by leading <br /> <span className="text-blue-500">Industry teams.</span>
        </h2>
      </div>

      <div className="relative w-full">
        {/* Sliding Track Viewport */}
        <div className={cn(
          "relative w-full cursor-grab active:cursor-grabbing overflow-visible transition-all duration-500",
          isMobile ? "h-[500px]" : "h-[420px]"
        )}>
          <motion.div 
            animate={{ 
              x: `calc(50vw - ${active * (cardWidth + gap)}px - ${cardWidth / 2}px)` 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex absolute top-0 left-0"
            style={{ gap: `${gap}px` }}
          >
            {testimonials.map((item, index) => {
              const isCenter = active === index;
              
              return (
                <motion.div
                  key={index}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1 : 0.9,
                    filter: isCenter ? "blur(0px)" : "blur(2px) grayscale(100%)",
                  }}
                  transition={{ duration: 0.4 }}
                  className={cn(
                    "flex-shrink-0 bg-[#141414] rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col md:flex-row shadow-2xl transition-all duration-500",
                    isCenter ? "shadow-blue-500/10" : ""
                  )}
                  style={{ width: `${cardWidth}px` }}
                >
                  {/* Left Side: Brand & Author */}
                  <div className="w-full md:w-[45%] p-6 md:p-10 relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 bg-[#1a1a1a]">
                    <div className="absolute -bottom-20 -left-20 w-40 md:w-80 h-40 md:h-80 border-2 border-white/5 rounded-full pointer-events-none" />
                    
                    <div className="relative z-10 flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Zap size={16} className="md:size-[20px] text-blue-500" fill="currentColor" />
                      </div>
                      <span className="text-lg md:text-xl font-black tracking-tighter uppercase text-white/90">{item.company}</span>
                    </div>

                    <div className="relative z-10 flex items-center gap-3 md:gap-4 pt-8 md:pt-12">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
                        <img src={item.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <div className="text-sm md:text-base font-black text-white leading-tight">{item.author}</div>
                        <div className="text-[9px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Founder, {item.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Quote Area */}
                  <div className="w-full md:w-[55%] p-6 md:p-12 flex flex-col justify-center bg-[#141414]">
                    <div className="relative">
                      <Quote size={24} className="text-white/5 absolute -top-4 -left-4 md:-top-6 md:-left-6" />
                      <p className={cn(
                        "font-bold leading-relaxed text-white/90",
                        isCenter 
                          ? "text-base md:text-2xl" 
                          : "text-sm md:text-xl"
                      )}>
                        "{item.quote}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation Arrows: Bottom Center */}
        <div className="flex justify-center gap-4 mt-8">
           <button 
              onClick={prev}
              disabled={active === 0}
              className={cn(
                "w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all active:scale-90",
                active === 0 ? "opacity-20 cursor-not-allowed" : "hover:bg-white/10 hover:border-white/20"
              )}
           >
              <ArrowRight size={20} className="rotate-180 text-white/60" />
           </button>
           <button 
              onClick={next}
              disabled={active === testimonials.length - 1}
              className={cn(
                "w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all active:scale-90",
                active === testimonials.length - 1 ? "opacity-20 cursor-not-allowed" : "hover:bg-white/10 hover:border-white/20"
              )}
           >
              <ArrowRight size={20} className="text-white/60" />
           </button>
        </div>
      </div>
    </section>
  );
};
