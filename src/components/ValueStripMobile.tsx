"use client";

import React, { useState } from "react";
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
  { icon: LayoutDashboard, text: "Business Intelligence Dashboard" },
  { icon: BrainCircuit,    text: "AI Smart Analytics Engine" },
  { icon: Zap,             text: "Campaign Automation" },
  { icon: TrendingUp,      text: "Revenue Growth Insights" },
  { icon: Bot,             text: "AI Assistant with Voice Commands" },
  { icon: Smartphone,      text: "Mobile App for Real-Time Decisions" },
  { icon: Sparkles,        text: "Smart Scheme Generator" },
  { icon: Gem,             text: "Predictive Profitability Engine" },
  { icon: Rocket,          text: "Growth Simulator" },
];

const FeatureCard = ({ item, index }: { item: typeof items[0]; index: number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10",
        "cursor-pointer overflow-hidden flex items-center gap-4 w-full min-h-[80px]",
        "flex-row text-left hover:bg-white/10"
      )}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, rgba(5,160,236,0.15), transparent)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div
        className={cn(
          "w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-white/10",
          "flex items-center justify-center transition-colors duration-500",
          "group-hover:text-[#05a0ec] lg:group-hover:text-[#06dcc3]"
        )}
      >
        <item.icon
          size={20}
          className="text-slate-400 group-hover:text-inherit transition-colors"
        />
      </div>

      <div className="relative z-10 flex-1">
        <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors leading-tight">
          {item.text}
        </span>
      </div>
    </motion.div>
  );
};

export default function ValueStripMobile() {
  const firstSet = items.slice(0, 5);
  const secondSet = items.slice(5);

  return (
    <div className="xl:hidden block bg-slate-950 py-16 border-y border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#05a0ec]/10 blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#06dcc3]/10 blur-[100px] -z-10" />

      <Container className="relative">
        <div className="flex flex-col items-center gap-10">
          
          {/* First 5 cards */}
          <div className="flex flex-col gap-4 w-full">
            {firstSet.map((item, i) => (
              <FeatureCard key={i} item={item} index={i} />
            ))}
          </div>

          {/* Central Bubble / Orb */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center my-4 overflow-visible">
            <div className="absolute inset-0 z-0 scale-125">
              <Orb
                hue={33}
                hoverIntensity={0}
                backgroundColor="#020617"
                forceHoverState={true}
              />
            </div>

            <div className="relative z-20 text-center max-w-[220px] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="space-y-3"
              >
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-1">
                  INSTANT VALUE STRIP
                </span>
                <h2 className="text-xl font-black text-white leading-tight">
                  Everything You Need <br />
                  <span className="text-[#05a0ec]">to Grow</span>
                </h2>
                <div className="h-px w-8 bg-blue-500/30 mx-auto mt-2" />
              </motion.div>
            </div>
          </div>

          {/* Remaining cards */}
          <div className="flex flex-col gap-4 w-full">
            {secondSet.map((item, i) => (
              <FeatureCard key={i + 5} item={item} index={i + 5} />
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
}
