"use client";

import Container from "@/components/Container";
import { MapPin, Globe, ArrowUpRight, Globe2Icon } from "lucide-react";
import AnimatedLucideIcon from "@/components/AnimatedLucideIcon";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import fegno from "@/public/assets/images/about/fegno.png"
import Image from "next/image";

export default function AboutPresence() {
    return (
        <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
            {/* Decorative background effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#05a0ec]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#09358c]/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05a0ec]/10 text-[#05a0ec] text-[11px] font-black uppercase tracking-[0.2em] mb-8 border border-[#05a0ec]/20"
                        >
                            Strategic Presence
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter"
                        >
                            Powered by Innovation, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05a0ec] to-sky-300">Scaling Global Standards.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 mb-12"
                        >
                            <p className="text-lg text-slate-400 font-medium leading-relaxed">
                                <span className="text-white font-bold">Tapito</span> is an advanced AI-powered business intelligence and customer engagement platform developed by <a href="https://fegno.com" target="_blank" className="text-[#05a0ec] hover:underline decoration-2 underline-offset-4 font-black">Fegno Technologies</a>, a leading technology company headquartered in <span className="text-white font-bold">Kochi</span> with expertise in digital transformation, enterprise solutions, artificial intelligence, and scalable software platforms.
                            </p>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                Designed for modern retail and distribution businesses, Tapito enables organizations to transform operational and customer data into actionable insights, intelligent automation, and sustainable revenue growth through AI-driven analytics.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="group relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl bg-slate-900"
                            >
                                <Image
                                    src={fegno}
                                    alt="Kochi Headquarters"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                                        <MapPin size={20} className="text-[#05a0ec]" />
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-1 tracking-tight">Headquarters</h4>
                                    <p className="text-sm text-slate-400 font-bold leading-relaxed mb-4">
                                        Kochi, Kerala, India
                                    </p>
                                    <a href="https://www.fegno.com" target="_blank" className="inline-flex items-center gap-2 text-[#05a0ec] font-black text-xs uppercase tracking-widest hover:text-white transition-colors group/link">
                                        Visit fegno.com
                                        <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-2xl group hover:border-[#05a0ec]/30 transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-[#05a0ec]/10 flex items-center justify-center mb-8 border border-[#05a0ec]/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                                        <Globe size={24} className="text-[#05a0ec]" />
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-3 tracking-tight">Global Footprint</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                        Deploying strategic intelligence solutions across <span className="text-slate-300">USA, Europe, and Middle East</span> markets.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="w-full aspect-4/3 rounded-[2.5rem] overflow-hidden z-10 relative">
                            <video
                                className="w-full h-full object-cover opacity-80"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/assets/images/about/globe.webm" type="video/webm" />
                            </video>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
