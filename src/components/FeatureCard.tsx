"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  onClick: () => void;
}

export const FeatureCard = ({ title, description, icon: Icon, index, onClick }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer relative"
      onClick={onClick}
    >
      <div className="relative h-full p-10 rounded-[2.5rem] transition-all duration-700 flex flex-col justify-between min-h-[380px] overflow-hidden bg-white border border-slate-100 text-slate-900 shadow-[0_40px_60px_-15px_rgba(72,0,178,0.03)] group-hover:bg-linear-to-br group-hover:from-purple-600 group-hover:to-indigo-700 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-purple-500/40">
        {/* Animated Background Blur for Hovered State */}
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/20 rounded-full blur-[60px] opacity-0 scale-95 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110" />
        
        <div className="relative z-10">
          <div className="w-16 h-16 mb-10 flex items-center justify-center rounded-[1.25rem] transition-all duration-500 bg-purple-50 text-purple-600 group-hover:bg-white/20 group-hover:backdrop-blur-md group-hover:text-white group-hover:scale-110">
            <Icon size={32} />
          </div>
          
          <h3 className="text-2xl font-black mb-5 tracking-tight transition-colors duration-500 text-slate-900 group-hover:text-white">
            {title}
          </h3>
          
          <p className="text-sm font-medium leading-[1.7] mb-8 transition-colors duration-500 text-slate-500 group-hover:text-purple-100">
            {description}
          </p>
        </div>
        
        <div className="relative z-10 flex items-center font-black text-sm tracking-[0.05em] transition-all duration-500 pb-2 text-purple-600 group-hover:text-white">
          <span className="mr-2 text-[12px] font-bold">View Details</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        {/* Bottom indicator line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/40 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </motion.div>
  );
};
