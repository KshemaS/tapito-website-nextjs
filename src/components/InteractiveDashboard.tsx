"use client";

import { motion, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Particles from "./Particles";
import Image from "next/image";

export default function InteractiveDashboard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 120 };
  const moveX = useSpring((mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) / 50, springConfig);
  const moveY = useSpring((mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) / 50, springConfig);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative h-[600px] w-full"
    >
       {/* Particle Background */}
       <div className="absolute inset-x-0 inset-y-0 rounded-[3rem] overflow-hidden bg-slate-50/50 border border-slate-100">
          <Particles />
       </div>

       {/* Floating Interactive Dashboard Image */}
       <motion.div
         style={{ x: moveX, y: moveY }}
         className="absolute inset-0 flex items-center justify-center p-8 lg:p-12 pointer-events-none"
       >
          <div className="relative w-full h-full glass rounded-3xl shadow-2xl overflow-hidden border border-white/40 pointer-events-auto group">
             <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500" />
             
             {/* This would be the generated image */}
             <div className="w-full h-full relative">
                <Image 
                  src="/retail_ai_dashboard_premium_1775651628420.png" 
                  alt="Retail AI Dashboard" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Interactive Hotspots / Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-4 bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-white/50"
                >
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-sm font-bold text-slate-800">Live Revenue: $2,482</span>
                   </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-10 p-5 bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-white/50 w-48"
                >
                   <span className="text-[10px] font-bold text-blue-600 block mb-2 uppercase tracking-widest">AI Prediction</span>
                   <span className="text-sm font-black text-slate-900 block leading-tight">Demand surge predicted for Region B.</span>
                </motion.div>
             </div>
          </div>
       </motion.div>

       {/* Floating Orbs */}
       <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400/20 blur-3xl rounded-full" />
       <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-400/20 blur-3xl rounded-full" />
    </motion.div>
  );
}
