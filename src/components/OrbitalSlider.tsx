"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

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

    const angleStep = 34; // Slightly wider spread
    const angle = (pos * angleStep) * (Math.PI / 180);
    const radius = 950; // Larger orbit for grander movement

    const x = (radius - (Math.cos(angle) * radius)) * 2.4;
    const y = Math.sin(angle) * radius;

    const scale = 1 - Math.abs(pos) * 0.1;
    const opacity = 1 - Math.abs(pos) * 0.4;
    const zIndex = 10 - Math.abs(pos);
    const rotate = pos * -12;

    return { x, y, scale, opacity, zIndex, rotate };
  };

  return (
    <div className="relative h-[650px] w-full flex items-center justify-start perspective-2000">
      <div className="relative w-full h-full flex items-center justify-start">
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((item, index) => {
            const pos = getPosition(index);
            const isActive = index === activeIndex;
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
                  stiffness: 140,
                  damping: 24,
                }}
                className="absolute w-72 md:w-96 lg:w-[480px] xl:w-[500px] 2xl:w-[550px] 4xl:w-[600px] cursor-pointer"
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
              >
                <div className={`group p-[2px] rounded-[3rem] transition-all duration-700 ${isActive
                  ? 'bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 shadow-[0_40px_80px_-20px_rgba(37,99,235,0.3)]'
                  : 'bg-white border border-slate-100 shadow-xl opacity-60 hover:opacity-100'
                  }`}>
                  <div className="bg-white rounded-[2.8rem] overflow-hidden p-8 h-[400px] lg:h-[460px] xl:h-[550px] 4xl:h-[600px] flex flex-col justify-start gap-[20px]">
                    {/* Top Content: Title Focus */}
                    <div className="text-left">
                      <div className="flex items-start gap-3 justify-between mb-6">
                        {/* <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-indigo-600 text-white rotate-12' : 'bg-slate-50 text-slate-400'
                          }`}>
                         
                        </div> */}
                        <div className="mt-2"><Sparkles size={25} className={isActive ? 'animate-pulse' : ''} /></div>
                        <h3 className={`text-[22px] lg:text-[26px] 2xl:text-[34px] 4xl:text-4xl font-black leading-[1.15] tracking-tight transition-all duration-700 capitalize ${isActive ? 'text-slate-900 scale-[1.02] origin-left' : 'text-slate-400'
                          }`}>
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    {/* Bottom Content: Supporting Visual */}
                    <motion.div
                      className={`relative w-full h-[350px] aspect-video rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 ${isActive ? 'scale-105 opacity-100' : 'scale-90 opacity-60'
                        }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 h-[350px] "
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${isActive ? 'from-slate-900/20 to-transparent' : 'from-transparent to-transparent'
                        }`} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
