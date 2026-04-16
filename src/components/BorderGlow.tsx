"use client";

import React from "react";
import "./BorderGlow.css";
import { cn } from "@/lib/utils";

interface BorderGlowProps {
  className?: string;
  duration?: number;
  size?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  borderRadius?: string;
  borderWidth?: number;
}

const BorderGlow = ({
  className,
  duration = 6,
  size = 200,
  colorFrom = "#6366f1", // indigo-500
  colorTo = "#a855f7",   // purple-500
  delay = 0,
  borderRadius = "1.25rem",
  borderWidth = 2,
}: BorderGlowProps) => {
  return (
    <div
      style={
        {
          "--duration": `${duration}s`,
          "--size": `${size}px`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
          "--border-radius": borderRadius,
          "--border-width": `${borderWidth}px`,
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-0 pointer-events-none z-10",
        className
      )}
    >
      <div className="border-glow-container">
        <div className="border-glow-path" />
        <div className="border-glow-blur" />
      </div>
    </div>
  );
};

export default BorderGlow;
