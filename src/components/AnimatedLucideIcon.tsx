"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import * as AnimatedIcons from "lucide-animated";
import { ActivityIcon } from "./ui/activity";
import { SendIcon } from "./ui/send";
import { ChartPieIcon } from "./ui/chart-pie";
import { ChartSplineIcon } from "./ui/chart-spline";

const LocalAnimatedIcons = {
  ActivityIcon,
  SendIcon,
  ChartPieIcon,
  ChartSplineIcon,
};

interface AnimatedLucideIconProps {
  name?: string;
  icon?: any;
  size?: number;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

const AnimatedLucideIcon = ({ 
  name, 
  icon,
  size = 24, 
  className, 
  color = "currentColor",
  strokeWidth = 2
}: AnimatedLucideIconProps) => {
  const animatedRef = useRef<any>(null);
  
  const StandardIconComponent = icon || (name ? (LucideIcons as any)[name] || (LucideIcons as any)[name.replace("Icon", "")] : null);
  const resolvedName = name || icon?.displayName || icon?.name || "";
  
  const iconName = resolvedName.endsWith("Icon") ? resolvedName : `${resolvedName}Icon`;
  const AnimatedIconComponent = (AnimatedIcons as any)[iconName] || (LocalAnimatedIcons as any)[iconName];

  useEffect(() => {
    const interval = setInterval(() => {
      if (animatedRef.current?.startAnimation) {
        animatedRef.current.startAnimation();
      }
    }, 1000 + Math.random() * 5000); 
    return () => clearInterval(interval);
  }, [resolvedName]);

  if (AnimatedIconComponent) {
    return (
      <div className={className} style={{ color }}>
        <AnimatedIconComponent 
          ref={animatedRef} 
          size={size} 
        />
      </div>
    );
  }

  if (StandardIconComponent) {
    return (
      <motion.div
        className={className}
        style={{ color, display: "inline-flex" }}
        animate={{ 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <StandardIconComponent size={size} strokeWidth={strokeWidth} />
      </motion.div>
    );
  }

  return null;
};

export default AnimatedLucideIcon;
