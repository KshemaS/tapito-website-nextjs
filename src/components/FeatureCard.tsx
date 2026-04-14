"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  benefits?: string[];
  icon: LucideIcon;
  index: number;
  slug: string;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export const FeatureCard = ({ title, description, benefits, icon: Icon, index, slug }: FeatureCardProps) => {
  return (
    <Link href={`/features/${slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
        whileHover={{ y: -8 }}
        className="relative h-full"
      >
        <div className="relative h-full p-8 lg:p-10 rounded-[2.5rem] transition-all duration-700 flex flex-col justify-between min-h-[460px] overflow-hidden bg-white border border-slate-100 text-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] group-hover:shadow-[0_45px_90px_-20px_rgba(72,0,178,0.12)]">

          {/* Subtle Hover Gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-purple-600/[0.03] to-indigo-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Decorative Background Element */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-slate-50 rounded-full transition-all duration-700 group-hover:bg-purple-600/5 group-hover:scale-150" />

          <div className="relative z-10">
            {/* Top Bar: Icon + Micro-Animation */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-500 bg-slate-50 text-slate-900 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110 shadow-sm border border-slate-100">
                <Icon size={32} />
              </div>
            </div>

            <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900 group-hover:text-purple-600 transition-colors">
              {title}
            </h3>

            <p className="text-[15px] font-medium leading-relaxed mb-8 text-slate-500 line-clamp-2">
              {description}
            </p>

            {/* Elaborated Content: Benefits List */}
            {benefits && (
              <div className="space-y-3.5 mb-10">
                {benefits.slice(0, 3).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-slate-100 group-hover:text-purple-600 shrink-0 transition-colors duration-500" />
                    <span className="text-[13px] font-extrabold text-slate-400 group-hover:text-slate-600 transition-colors duration-500">{benefit}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="relative z-10 mt-auto pt-6 flex items-center justify-between border-t border-slate-50 group-hover:border-purple-100 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-purple-600 transition-colors duration-500" />
              <span className="font-black text-[11px] uppercase tracking-widest text-slate-400 group-hover:text-purple-600 transition-colors">
                explore more
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-slate-100 bg-white flex items-center justify-center text-slate-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300 shadow-sm">
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
