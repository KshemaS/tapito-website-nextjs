"use client";

import { useState } from "react";
import AnimatedLucideIcon from "./AnimatedLucideIcon";
import { motion } from "framer-motion";
import Container from "./Container";
import Image from "next/image";
import coverImg from "@/public/assets/images/tapito_monitor.avif";

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-slate-950 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#09358c]/5 opacity-50" />
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-[#05a0ec] text-xs font-bold mb-6"
          >
            <AnimatedLucideIcon name="Sparkles" size={14} color="#09358c" />
            SEE IT IN ACTION
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Experience the <span className="text-[#09358c]">Tapito Workflow.</span>
          </h2>
          <p className="text-xl text-slate-400">
            A 2-minute walkthrough of how we transform complex retail data into simple, actionable growth strategies.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-[30px] overflow-hidden border border-white/10 shadow-2xl group"
        >
          {isPlaying ? (
            <video
              src="/assets/videos/dashboard-overview.mp4"
              controls
              autoPlay
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div 
              className="absolute inset-0 w-full h-full cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* Cover Image */}
              <Image 
                src={coverImg}
                alt="Product Walkthrough Cover"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500 flex items-center justify-center">
                 <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(true);
                    }}
                    className="w-24 h-24 rounded-full bg-[#09358c] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer border-none outline-none"
                    aria-label="Play Walkthrough Video"
                 >
                    <AnimatedLucideIcon name="Play" size={40} className="fill-current ml-2" />
                 </button>
              </div>
              
              <div className="absolute bottom-10 left-10 p-6 glass border-white/20 text-white rounded-2xl max-w-sm">
                 <span className="text-xs font-bold uppercase tracking-widest text-[#05a0ec] block mb-2">Automated Inventory Management</span>
                 <p className="text-sm font-medium">Watch how Tapito predicted a stock-out and auto-managed the replenishment for 50+ stores.</p>
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}


