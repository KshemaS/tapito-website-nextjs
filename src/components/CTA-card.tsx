"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Calculator, Sparkles } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
    title: string;
    description: string;
    badge: string;
    image: string;
    subtitle?: string;
    isAbout?: boolean;
    onClick?: () => void;
}

export default function CTASection({ title, description, badge, image, subtitle, isAbout, onClick }: CTASectionProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="relative rounded-[1.5rem] bg-black p-12 md:p-20 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
            <div className="absolute top-0 right-0 w-full h-full lg:w-2/5 opacity-50 pointer-events-none select-none z-0">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl text-left">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-sky-400 text-[13px] font-bold uppercase tracking-[0.25em] mb-8"
                >
                    <div className="w-5 h-5 rounded-md border border-sky-400/50 flex items-center justify-center p-1">
                        <Sparkles size={12} />
                    </div>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05a0ec] to-sky-300">
                       {badge}
                    </span>
                </motion.div>

                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 tracking-tight leading-[1.05]"
                >
                    {title} <br />
                    <span className="text-white">{subtitle}</span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-400 font-medium mb-10 leading-relaxed max-w-xl"
                >
                    {description}
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap items-center gap-6"
                >
                    <Link 
                        href="/contact" 
                        className="group relative px-8 py-4 border border-sky-400 text-sky-400 text-[13px] font-bold uppercase tracking-widest hover:bg-sky-400 hover:text-black transition-all duration-300 rounded-lg whitespace-nowrap"
                    >
                        {isAbout ? "Book a Meeting" : "Get Started"}
                    </Link>
                    
                    <button
                        className="group relative px-8 py-4 border border-sky-400/30 text-white/70 text-[13px] font-bold uppercase tracking-widest hover:border-sky-400 hover:text-sky-400 transition-all duration-300 rounded-lg whitespace-nowrap"
                        onClick={onClick}
                    >
                        {isAbout ? "Launch Product Tour" : "Talk To Experts"}
                    </button>
                    {isAbout && (
                        <button className="group relative px-8 py-4 border border-sky-400/30 text-white/70 text-[13px] font-bold uppercase tracking-widest hover:border-sky-400 hover:text-sky-400 transition-all duration-300 rounded-lg flex items-center gap-2 whitespace-nowrap">
                            <Calculator size={16} className="text-sky-400" />
                            <span>ROI Calculator</span>
                        </button>
                    )}
                </motion.div>
            </div>
        </div>
      </Container>
    </section>
  );
}
