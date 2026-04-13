"use client";

import { useState } from "react";
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
  { icon: BrainCircuit, text: "AI Smart Analytics Engine", side: 'top' },
  { icon: Zap, text: "Campaign Automation", side: 'left' },
  { icon: TrendingUp, text: "Revenue Growth Insights", side: 'left' },
  { icon: Bot, text: "AI Assistant with Voice Commands", side: 'right' },
  { icon: Smartphone, text: "Mobile App for Real-Time Decisions", side: 'right' },
  { icon: Sparkles, text: "Smart Scheme Generator", side: 'right' },
  { icon: Gem, text: "Predictive Profitability Engine", side: 'bottom' },
  { icon: Rocket, text: "Growth Simulator", side: 'bottom' },
];

function FeatureCard({ item, index }: { item: typeof items[0], index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isLeft = item.side === 'left';
  const isRight = item.side === 'right';
  const isTop = item.side === 'top';
  const isBottom = item.side === 'bottom';

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
        "group relative p-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden flex items-center gap-6 w-full min-h-[120px]",
        "flex-row text-left hover:bg-white/10"
      )}
    >
      {/* Spotlight Gradient - Enhanced visibility */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.2), transparent)`,
          opacity: isHovered ? 1 : 0
        }}
      />

      <div className={cn(
        "w-14 h-14 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-500",
        (isLeft || isTop) ? "group-hover:text-blue-400" : "group-hover:text-purple-400"
      )}>
        <item.icon size={26} className="text-slate-400 group-hover:text-inherit transition-colors" />
      </div>
      
      <div className="relative z-10 flex-1">
        <span className="text-base font-bold text-slate-300 group-hover:text-white transition-colors">
          {item.text}
        </span>
      </div>

      {/* Decorative pulse point for line connection */}
      <div className={cn(
        "absolute hidden lg:block w-1.5 h-1.5 rounded-full bg-blue-500/30",
        isLeft && "-right-0.75 top-1/2 -translate-y-1/2",
        isRight && "-left-0.75 top-1/2 -translate-y-1/2",
        isTop && "bottom-0 left-1/2 -translate-x-1/2",
        isBottom && "top-0 left-1/2 -translate-x-1/2",
      )} />
    </motion.div>
  );
}

function NeuralConnectors() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden -z-10 opacity-30">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(37, 99, 235, 0)" />
            <stop offset="50%" stopColor="rgba(37, 99, 235, 0.4)" />
            <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
          </linearGradient>
        </defs>
        
        {/* Horizontal Connectors (Center to Left/Right) */}
        {/* Left */}
        <motion.path d="M 50 50 C 40 50, 30 42, 12 42" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
        <motion.path d="M 50 50 C 40 50, 30 58, 12 58" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.7 }} />
        
        {/* Right */}
        <motion.path d="M 50 50 C 60 50, 70 38, 88 38" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.9 }} />
        <motion.path d="M 50 50 C 60 50, 70 50, 88 50" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.1 }} />
        <motion.path d="M 50 50 C 60 50, 70 62, 88 62" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.3 }} />

        {/* Vertical Connectors (Center to Top/Bottom) */}
        {/* Top */}
        <motion.path d="M 50 50 C 50 40, 42 30, 42 15" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.2 }} />
        <motion.path d="M 50 50 C 50 40, 58 30, 58 15" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.4 }} />

        {/* Bottom */}
        <motion.path d="M 50 50 C 50 60, 42 70, 42 85" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.5 }} />
        <motion.path d="M 50 50 C 50 60, 58 70, 58 85" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.7 }} />
      </svg>
    </div>
  );
}

export default function ValueStrip() {
  const topItems = items.filter(item => item.side === 'top');
  const bottomItems = items.filter(item => item.side === 'bottom');
  const leftItems = items.filter(item => item.side === 'left');
  const rightItems = items.filter(item => item.side === 'right');

  return (
    <section className="bg-slate-950 py-24 lg:py-40 border-y border-white/5 overflow-hidden relative">
      <NeuralConnectors />
      <Container>
        <div className="flex flex-col items-center">
          
          {/* Top Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 lg:mb-20 w-full max-w-4xl">
            {topItems.map((item, i) => (
              <FeatureCard key={i} item={item} index={i} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 w-full">
            
            {/* Left Side Features */}
            <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
              {leftItems.map((item, i) => (
                <FeatureCard key={i} item={item} index={i + 2} />
              ))}
            </div>

            {/* Center Orb Column */}
            <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 z-0 scale-110">
                  <Orb 
                    hue={360} 
                    hoverIntensity={0} 
                    backgroundColor="#020617" 
                    forceHoverState={true}
                  />
                </div>
                <div className="relative z-10 text-center max-w-[200px] md:max-w-[400px] pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <span className="text-[14px] md:text-xs font-black text-slate-400 uppercase tracking-[0.4em] block mb-2">INSTANT VALUE STRIP</span>
                    <h2 className="text-[2xl] md:text-[40px] font-black text-white leading-tight">
                      Everything You Need to Grow <br /> 
                      <span className="gradient-text">— In One Platform</span>
                    </h2>
                    <div className="h-px w-12 bg-white/10 mx-auto mt-6" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Side Features */}
            <div className="lg:col-span-3 flex flex-col gap-6 order-3">
              {rightItems.map((item, i) => (
                <FeatureCard key={i} item={item} index={i + 4} />
              ))}
            </div>

          </div>

          {/* Bottom Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mb-20 w-full max-w-4xl">
            {bottomItems.map((item, i) => (
              <FeatureCard key={i} item={item} index={i + 7} />
            ))}
          </div>

        </div>
      </Container>
      
      {/* Small background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10" />
    </section>
  );
}
