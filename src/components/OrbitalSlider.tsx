"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, ChevronRight, ChevronLeft } from "lucide-react";

type SliderItem = {
  name: string;
  image: any;
};

type OrbitalSliderProps = {
  items: SliderItem[];
};

export default function OrbitalSlider({ items }: OrbitalSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getPosition = (index: number) => {
    const diff = (index - activeIndex + items.length) % items.length;
    let pos = diff > items.length / 2 ? diff - items.length : diff;

    const angleStep = 32;
    const angle = (pos * angleStep) * (Math.PI / 180);
    const radius = 900;

    // Position cards to fill more of the right-side space aggressively
    const x = (radius - (Math.cos(angle) * radius)) * 2.2;
    const y = Math.sin(angle) * radius;

    const scale = 1 - Math.abs(pos) * 0.08;
    const opacity = 1 - Math.abs(pos) * 0.3;
    const zIndex = 10 - Math.abs(pos);
    const rotate = pos * -8;

    return { x, y, scale, opacity, zIndex, rotate };
  };

  return (
    <div className="relative h-[650px] w-full flex items-center justify-start perspective-2000">

      <div className="relative w-full h-full flex items-center justify-start">
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((item, index) => {
            const pos = getPosition(index);
            const diff = (index - activeIndex + items.length) % items.length;
            const normalizedDiff = diff > items.length / 2 ? diff - items.length : diff;
            const isVisible = Math.abs(normalizedDiff) <= 2;

            if (!isVisible) return null;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8, x: -100 }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  rotate: pos.rotate,
                  zIndex: pos.zIndex,
                }}
                exit={{ opacity: 0, scale: 0.5, x: -100 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 28,
                }}
                className="absolute w-72 md:w-96 lg:w-[520px] cursor-pointer"
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
              >
                <div className={`p-1 rounded-[2.5rem] transition-all duration-700 ${index === activeIndex
                  ? 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-[0_25px_50px_-12px_rgba(37,99,235,0.25)]'
                  : 'bg-white border border-slate-100 shadow-lg opacity-60 hover:opacity-100'
                  }`}>
                  <div className="bg-white rounded-[2.3rem] overflow-hidden p-2.5 h-[340px] lg:h-[400px] flex flex-col">
                    <div className="relative flex-[1.4] rounded-[1.8rem] overflow-hidden bg-slate-50 mb-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    <div className="px-4 pb-4 text-left">
                      <h3 className={`capitalize text-lg lg:text-xl font-bold leading-tight ${index === activeIndex ? 'text-slate-900' : 'text-slate-600'
                        }`}>
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Vertical Navigation Buttons - Placed on the Right Spacing */}
        {/* <div className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); setIsAutoPlaying(false); }}
            className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-xl flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all group pointer-events-auto"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); setIsAutoPlaying(false); }}
            className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-xl flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all group pointer-events-auto"
          >
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
