"use client";

import React, { useState, forwardRef, useEffect } from "react";
import {
  LayoutDashboard,
  BrainCircuit,
  Zap,
  TrendingUp,
  Bot,
  Smartphone,
  Sparkles,
  Gem,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "./Container";
import Orb from "./Orb";
import AnimatedBorderLargeSVG from "./ui/animating-border-large";

const items = [
  { icon: LayoutDashboard, text: "Business Intelligence Dashboard", side: 'top' },
  { icon: BrainCircuit,    text: "AI Smart Analytics Engine",       side: 'top' },
  { icon: Zap,             text: "Campaign Automation",             side: 'left' },
  { icon: TrendingUp,      text: "Revenue Growth Insights",         side: 'left' },
  { icon: Bot,             text: "AI Assistant with Voice Commands", side: 'right' },
  { icon: Smartphone,      text: "Mobile App for Real-Time Decisions", side: 'right' },
  { icon: Sparkles,        text: "Smart Scheme Generator",          side: 'right' },
  { icon: Gem,             text: "Predictive Profitability Engine",  side: 'bottom' },
  { icon: Rocket,          text: "Growth Simulator",                side: 'bottom' },
];


const FeatureCard = forwardRef<HTMLDivElement, { item: typeof items[0]; index: number }>(({ item, index }, ref) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isLeft = item.side === "left";
  const isRight = item.side === "right";
  const isTop  = item.side === "top";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ 
        opacity: 0, 
        y: item.side === 'bottom' ? 20 : -20 
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm",
        "transition-all duration-500",
        "cursor-pointer overflow-hidden flex items-center gap-5 w-full min-h-[100px]",
        (isLeft || isRight) && "xl:w-[300px] 4xl:w-[400px]",
        "flex-row text-left hover:bg-white/10"
      )}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(5,160,236,0.2), transparent)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div
        className={cn(
          "w-12 h-12 shrink-0 rounded-lg bg-white/5 border border-white/10",
          "flex items-center justify-center transition-colors duration-500",
          isLeft || isTop
            ? "group-hover:text-[#05a0ec]"
            : "group-hover:text-[#06dcc3]"
        )}
      >
        <item.icon
          size={22}
          className="text-slate-400 group-hover:text-inherit transition-colors"
        />
      </div>

      <div className="relative z-10 flex-1">
        <span className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-bold text-slate-300 group-hover:text-white transition-colors">
          {item.text}
        </span>
      </div>
    </motion.div>
  );
});

FeatureCard.displayName = "FeatureCard";

import ValueStripMobile from "./ValueStripMobile";
import AnimatedBorderLapSVG from "./ui/animating-border-lap";

export default function ValueStrip() {
  const topItems    = items.filter(i => i.side === "top");
  const bottomItems = items.filter(i => i.side === "bottom");
  const leftItems   = items.filter(i => i.side === "left");
  const rightItems = items.filter(i => i.side === "right");
  const [ innerWidth , setInnerWidth ] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setInnerWidth(window.innerWidth);
      };
      setInnerWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  },[])
  
  let orderedIdx = 0;

  return (
    <>
      <ValueStripMobile />
      <section
        className="hidden xl:block bg-slate-950 py-[60px] lg:py-[80px] 2xl:py-[100px] 4xl:py-[120px] border-y border-white/5 overflow-hidden relative"
      >
        {innerWidth > 1880 ? (
          <AnimatedBorderLargeSVG />
        ) : (
          <AnimatedBorderLapSVG />
        )}
        <Container className="relative">
          <div className="flex flex-col items-center">

            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 xl:mb-32 w-full max-w-6xl">
              {topItems.map((item, i) => {
                const oi = orderedIdx++;
                return (
                  <FeatureCard
                    key={i}
                    item={item}
                    index={i}
                  />
                );
              })}
            </div>

            {/* Middle Row */}
            <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-12 2xl:gap-32 w-full max-w-[1700px] mb-12">
              
              {/* Left Side */}
              <div className="flex flex-col gap-5 order-2 xl:order-1">
                {leftItems.map((item, i) => {
                  return (
                    <FeatureCard
                      key={i}
                      item={item}
                      index={i + 2}
                    />
                  );
                })}
              </div>

              {/* Center Orb */}
              <div className="order-1 xl:order-2">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] 3xl:w-[550px] 3xl:h-[550px] flex items-center justify-center">
                  <div className="absolute inset-0 z-0 scale-110">
                    <Orb
                      hue={33}
                      hoverIntensity={0}
                      backgroundColor="#020617"
                      forceHoverState={true}
                    />
                  </div>

                  <div
                    className="absolute rounded-full z-10 pointer-events-none"
                    style={{
                      width: 'calc(100% * 1)',
                      height: 'calc(100% * 1.1)',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />

                  <div className="relative z-20 text-center max-w-[180px] md:max-w-[360px] pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      className="space-y-3"
                    >
                      <span className="text-[11px] md:text-xs font-black text-slate-400 uppercase tracking-[0.4em] block mb-1">
                        INSTANT VALUE STRIP
                      </span>
                      <h2 className="text-xl lg:text-[30px] font-black text-white leading-tight">
                        Everything You Need to Grow{" "}
                        <br />
                        <span className="gradient-text">— In One Platform</span>
                      </h2>
                      <div className="h-px w-10 bg-white/10 mx-auto mt-4" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-5 order-3">
                {rightItems?.map((item, i) => {
                  return (
                    <FeatureCard
                      key={i}
                      item={item}
                      index={i + 4}
                    />
                  );
                })}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 lg:mt-24 w-full max-w-6xl">
              {bottomItems.map((item, i) => {
                return (
                  <FeatureCard
                    key={i}
                    item={item}
                    index={i + 7}
                  />
                );
              })}
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}