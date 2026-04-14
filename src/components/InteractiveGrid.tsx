"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const InteractiveGrid = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by window scroll if needed, but for absolute/fixed hero it's usually clientX
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Line Grid */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} 
      >
        {/* Moving Gradient Overlay (The 'Line' animation) */}
        <motion.div 
          animate={{ 
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0"
          style={{
             backgroundImage: `
              linear-gradient(45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%, transparent 50%, rgba(99, 102, 241, 0.1) 50%, rgba(99, 102, 241, 0.1) 75%, transparent 75%, transparent)
            `,
            backgroundSize: '160px 160px',
          }}
        />
      </div>

      {/* Hero Scanlight (Horizontal moving line) */}
      <motion.div 
        animate={{ translateY: ['-10%', '110%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-sm z-0"
      />

      {/* Interactive Radial Hover Light */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-gradient-to-r from-purple-500/[0.08] to-indigo-500/[0.08] rounded-full blur-[120px]"
        style={{
          left: sx,
          top: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Depth Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
    </div>
  );
};
