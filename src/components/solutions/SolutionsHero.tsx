"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "@/components/Container";
import Link from "next/link";
import { ChevronDown, Network, Target, BarChart3, Zap } from "lucide-react";
import MagicRings from "@/components/MagicRings";
import { useRouter } from "next/navigation";

const OrbitalIcon = ({ icon: Icon, text, className, x, y, delay = 0 }: any) => {
  return (
    <div 
      className="absolute z-10 pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 5 + delay, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay 
        }}
        className="flex flex-col items-center gap-3 pointer-events-auto"
      >
        <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-[#0ea5e9] shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:scale-110 transition-transform cursor-pointer">
          <Icon size={24} />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 whitespace-nowrap bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/5">
          {text}
        </span>
      </motion.div>
    </div>
  );
};

export interface SolutionsHeroProps {
  badge?: string;
  titlePrimary?: string;
  description?: string;
  floatingBadges?: Array<{ icon: any, text: string, x: number, y: number, delay: number }>;
}

export const SolutionsHero = ({
  badge = "ENTERPRISE SOLUTIONS",
  titlePrimary = "Retail Intelligence",
  description = "Tapito provides a comprehensive suite of AI-driven solutions designed to empower modern retail operations from the warehouse to the storefront.",
  floatingBadges = [
    { icon: Network, text: "Omnichannel", x: 12, y: 25, delay: 0 },
    { icon: Target, text: "Dynamic Pricing", x: 88, y: 25, delay: 1 },
    { icon: BarChart3, text: "Revenue Logic", x: 15, y: 75, delay: 2 },
    { icon: Zap, text: "Automation", x: 85, y: 75, delay: 3 },
  ]
}: SolutionsHeroProps) => {
  const router = useRouter();

  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[#020617]">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,53,140,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(5,160,236,0.05)_0deg,transparent_60deg,transparent_300deg,rgba(5,160,236,0.05)_360deg)]" />
        
        {/* Magic Rings in background */}
        <div className="absolute inset-0 opacity-30">
          <MagicRings
            color="#4f46e5"
            colorTwo="#0ea5e9"
            ringCount={8}
            speed={0.8}
            attenuation={5}
            lineThickness={1.5}
            baseRadius={0.2}
            radiusStep={0.08}
            opacity={0.6}
            blur={5}
            noiseAmount={0.15}
            rotation={0}
            ringGap={1.4}
          />
        </div>

        {/* Multi-layered Circular Orbits */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Main Sharp Circular Orbit */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[70vh] md:h-[85vh] aspect-square border-[1.5px] border-white/50 rounded-full shadow-[0_0_50px_rgba(5,160,236,0.15)]" 
          />
          
          {/* Outer Faded Circular Orbit */}
          <motion.div 
            animate={{ scale: [1.05, 1, 1.05], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[90vh] md:h-[110vh] aspect-square border border-white/80 rounded-full" 
          />
          
          {/* Inner Glowing Circular Orbit */}
          <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
             className="absolute h-[50vh] md:h-[65vh] aspect-square border border-[#fff]/20 rounded-full blur-[1px]" 
          />
        </motion.div>

        {/* Central Glow Point */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-1/2 h-1/2 bg-[#0ea5e9]/10 blur-[120px] rounded-full" />
        </div>
      </div>

      {/* Orbital Icons */}
      <div className="md:block hidden">
        {floatingBadges.map((badge, index) => (
          <OrbitalIcon
            key={index}
            icon={badge.icon}
            text={badge.text}
            x={badge.x}
            y={badge.y}
            delay={badge.delay}
          />
        ))}
      </div>
      
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 shadow-2xl"
          >
            <Zap size={16} className="text-[#05a0ec] animate-pulse" />
            <span className="text-xs font-black tracking-[0.3em] uppercase text-white/70">
              {badge}
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl 4xl:text-[100px] font-bold text-white leading-none mb-10 tracking-tight capitalize">
            {titlePrimary}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <button className="bg-[#09358c] hover:bg-[#05a0ec] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 text-center shadow-[0_0_30px_rgba(9,53,140,0.3)]" 
              onClick={() => router.push("/contact")}
            >
              Book Demo
            </button>
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <Link
          href="#strategic-advantage"
          aria-label="Scroll down"
          className="group flex flex-col items-center text-white/30 hover:text-[#05a0ec] transition-colors"
        >
          <div className="flex flex-col items-center leading-none">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  delay: index * 0.15,
                  ease: "easeInOut",
                }}
                className="-my-1"
              >
                <ChevronDown size={22} />
              </motion.div>
            ))}
          </div>
        </Link>
      </motion.div>
    </section>
  );
};
