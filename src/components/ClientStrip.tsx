"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const clientLogos = [
  { name: "Global Retail", url: "#" },
  { name: "TechStore", url: "#" },
  { name: "EcoWear", url: "#" },
  { name: "UrbanMart", url: "#" },
  { name: "SwiftLogistics", url: "#" },
  { name: "PrimeMarkets", url: "#" },
];

export default function ClientStrip() {
  return (
    <div className="py-12 bg-white border-b border-slate-50 relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="shrink-0">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Trusted By Global Leaders</span>
          </div>

          <div className="flex-1 overflow-hidden relative">
            {/* Gradient masks for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear"
              }}
              className="flex items-center gap-16 whitespace-nowrap"
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, i) => (
                <div key={i} className="flex items-center gap-2 group cursor-default">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all bg-violet-50">
                    <div className="w-4 h-4 rounded-sm bg-violet-400 group-hover:bg-violet-500 transition-colors" />
                  </div>
                  <span className="text-xl font-black text-slate-500 group-hover:text-slate-900 transition-colors tracking-tighter">
                    {client.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
