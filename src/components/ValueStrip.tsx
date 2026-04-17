"use client";

import React, { useState, forwardRef, useRef, useEffect, useCallback } from "react";
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

interface ConnectorLine {
  d: string;
  sx: number;
  sy: number;
  ex: number;
  ey: number;
  id: number;
}

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
        "transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10",
        "cursor-pointer overflow-hidden flex items-center gap-5 w-full min-h-[100px]",
        (isLeft || isRight) && "lg:w-[400px]",
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
        <span className="text-[22px] font-bold text-slate-300 group-hover:text-white transition-colors">
          {item.text}
        </span>
      </div>
    </motion.div>
  );
});

FeatureCard.displayName = "FeatureCard";

export default function ValueStrip() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const orbRef      = useRef<HTMLDivElement>(null);
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<ConnectorLine[]>([]);

  const topItems    = items.filter(i => i.side === "top");
  const bottomItems = items.filter(i => i.side === "bottom");
  const leftItems   = items.filter(i => i.side === "left");
  const rightItems  = items.filter(i => i.side === "right");

  const indexMap = [...topItems, ...leftItems, ...rightItems, ...bottomItems].map(
    item => items.indexOf(item)
  );

  const drawLines = useCallback(() => {
    if (!sectionRef.current || !orbRef.current) return;

    const secRect = sectionRef.current.getBoundingClientRect();
    const orbRect = orbRef.current.getBoundingClientRect();

    const cx   = orbRect.left - secRect.left + orbRect.width  / 2;
    const cy   = orbRect.top  - secRect.top  + orbRect.height / 2;
    const orbR = orbRect.width / 2.2;

    const newLines: ConnectorLine[] = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cr = card.getBoundingClientRect();

      const cardCx = cr.left - secRect.left + cr.width  / 2;
      const cardCy = cr.top  - secRect.top  + cr.height / 2;

      const dx  = cx - cardCx + 10;
      const dy  = cy - cardCy;
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len === 0) return;

      const nx = dx / len;
      const ny = dy / len;

      const hw = cr.width  / 2;
      const hh = cr.height / 1.4;
      const tx = Math.abs(nx) > 1e-6 ? hw / Math.abs(nx) : Infinity;
      const ty = Math.abs(ny) > 1e-6 ? hh / Math.abs(ny) : Infinity;
      const t  = Math.min(tx, ty);

      const sx = cardCx + nx * t;
      const sy = cardCy + ny * t;

      // ✅ Fixed: end point on the TRUE outer orb surface, not interior
      const ex = cx - nx * orbR;
      const ey = cy - ny * orbR;

      const curve = 0;
      const mx = (sx + ex) / 2 - ny * curve;
      const my = (sy + ey) / 2 + nx * curve;

      newLines.push({
        d: `M${sx.toFixed(1)},${sy.toFixed(1)} Q${mx.toFixed(1)},${my.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}`,
        sx, sy, ex, ey,
        id: indexMap[i] ?? i,
      });
    });

    setLines(newLines);
  }, []);

  useEffect(() => {
    const t = setTimeout(drawLines, 300);
    window.addEventListener("resize", drawLines);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", drawLines);
    };
  }, [drawLines]);

  const setCardRef = (orderedIndex: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[orderedIndex] = el;
    if (el) setTimeout(drawLines, 350);
  };

  let orderedIdx = 0;

  return (
    <section
      ref={sectionRef}
      className="bg-slate-950 py-[60px] lg:py-[80px] 2xl:py-[100px] 4xl:py-[120px] border-y border-white/5 overflow-hidden relative"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="connGrad1" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#05a0ec" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06dcc3" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="connGrad2" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#06dcc3" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#05a0ec" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {lines.map((line, i) => {
          const grad = i % 2 === 0 ? "url(#connGrad1)" : "url(#connGrad2)";
          return (
            <g key={line.id}>
              <path
                className="conn-path"
                d={line.d}
                fill="none"
                stroke={grad}
                strokeWidth="1.3"
                opacity="0.75"
                style={{ animationDelay: `${(i * 0.2) % 1.8}s` }}
              />
              <circle
                className="conn-dot"
                cx={line.sx}
                cy={line.sy}
                r="3"
                fill="#05a0ec"
                opacity="0.85"
                style={{ animationDelay: `${(i * 0.2) % 2}s` }}
              />
              <circle
                className="conn-dot-orb"
                cx={line.ex}
                cy={line.ey}
                r="2.5"
                fill="#06dcc3"
                opacity="0.7"
                style={{ animationDelay: `${(i * 0.2 + 0.9) % 2}s` }}
              />
            </g>
          );
        })}
      </svg>

      <div className="absolute top-0 left-0 w-64 h-64 bg-[#05a0ec]/10 blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#06dcc3]/10 blur-[100px] -z-10" />

      <Container className="relative">
        <div className="flex flex-col items-center">

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 lg:mb-40 w-full max-w-6xl">
            {topItems.map((item, i) => {
              const oi = orderedIdx++;
              return (
                <FeatureCard
                  key={i}
                  item={item}
                  index={i}
                  ref={setCardRef(oi)}
                />
              );
            })}
          </div>

          {/* Middle Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24 w-full max-w-[1600px] mb-12">
            
            {/* Left Side */}
            <div className="flex flex-col gap-5 order-2 lg:order-1">
              {leftItems.map((item, i) => {
                const oi = orderedIdx++;
                return (
                  <FeatureCard
                    key={i}
                    item={item}
                    index={i + 2}
                    ref={setCardRef(oi)}
                  />
                );
              })}
            </div>

            {/* Center Orb */}
            <div className="order-1 lg:order-2">
              <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] flex items-center justify-center">
                <div className="absolute inset-0 z-0 scale-110">
                  <Orb
                    hue={33}
                    hoverIntensity={0}
                    backgroundColor="#020617"
                    forceHoverState={true}
                  />
                </div>

                {/*
                  ✅ THE FIX: orbRef now covers the full container size,
                  matching the actual visual boundary of the Orb component.
                  Previously it was w-[55%] h-[55%] which made orbR too small,
                  causing lines to terminate deep inside the bubble.
                */}
                <div
                  ref={orbRef}
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
              {rightItems.map((item, i) => {
                const oi = orderedIdx++;
                return (
                  <FeatureCard
                    key={i}
                    item={item}
                    index={i + 4}
                    ref={setCardRef(oi)}
                  />
                );
              })}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 lg:mt-24 w-full max-w-6xl">
            {bottomItems.map((item, i) => {
              const oi = orderedIdx++;
              return (
                <FeatureCard
                  key={i}
                  item={item}
                  index={i + 7}
                  ref={setCardRef(oi)}
                />
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}