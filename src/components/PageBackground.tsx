"use client";

import { motion } from "framer-motion";
import { InteractiveGrid } from "@/components/InteractiveGrid";
import Particles from "@/components/Particles";

export const PageBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <InteractiveGrid />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
        <Particles />
      </div>
      
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Blob 1 — top left, blue */}
        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, 40, -30, 0], scale: [1, 1.12, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[25%] -left-[20%] w-[65%] h-[65%] rounded-full bg-gradient-to-br from-[#09358c]/25 via-[#05a0ec]/15 to-transparent blur-[130px]"
        />
        {/* Blob 2 — bottom right, cyan */}
        <motion.div
          animate={{ x: [0, -60, 30, 0], y: [0, -50, 20, 0], scale: [1, 1.18, 0.92, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-[25%] -right-[20%] w-[65%] h-[65%] rounded-full bg-gradient-to-tl from-blue-300/35 via-cyan-200/20 to-transparent blur-[130px]"
        />
        {/* Blob 3 — center, blue accent */}
        <motion.div
          animate={{ scale: [1, 1.25, 0.88, 1], opacity: [0.12, 0.22, 0.10, 0.12] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] rounded-full bg-gradient-to-br from-[#05a0ec]/20 via-[#09358c]/15 to-transparent blur-[100px]"
        />
        {/* Sweeping light beam */}
        <motion.div
          animate={{ x: ["-120%", "220%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 5 }}
          className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-blue-100/20 to-transparent skew-x-[-20deg]"
        />
      </div>
    </div>
  );
};
