"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, Database, Zap, ShieldCheck } from "lucide-react";
import Container from "@/components/Container";
import CardSwap, { Card } from "./CardSwap";
import Image from "next/image";

type HeroProps = {
  keyHighlights: any[];
};

export default function Hero({ keyHighlights }: HeroProps) {
  return (
    <section className="relative pt-16 lg:pt-24 pb-20 overflow-hidden mesh-bg">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 flex items-center gap-2"
            >
              <Sparkles size={14} className="text-[#0f172b]" />
              <span className="text-xs font-bold text-[#0f172b] uppercase tracking-[0.2em]">
                The Future of Retail AI</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1] md:leading-[1.1]">
              Turn Your Retail Data Into Revenue <br />
              <span className="gradient-text pb-2 px-1 inline-block">— Automatically </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-xl leading-relaxed">
              AI-powered analytics, real-time insights, and fully automated customer engagement —built to grow your revenue without manual effort.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="btn-premium flex items-center gap-2 text-lg px-10 py-5 w-full sm:w-auto justify-center">
                Book a Demo
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary px-8 py-3.5 rounded-full flex items-center gap-3 group text-lg w-full sm:w-auto justify-center transition-all bg-white">
                <div className="w-10 h-10 rounded-full gradient-bg-anim flex items-center justify-center text-white transition-all shadow-lg shadow-blue-500/10">
                  <Play size={16} className="fill-current ml-1" />
                </div>
                See How It Works
              </button>
            </div>
          </motion.div>

          {/* Right Column: CardSwap Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[520px] max-w-[692px] w-full flex items-center justify-center"
          >
            <div className="w-full h-full relative">
              <CardSwap width="100%" height={450} delay={4000} skewAmount={10}>
                {keyHighlights?.map((item:any, index:number)=>(
                  <Card key={index} customClass="bg-slate-900 overflow-hidden shadow-2xl border-white/60">
                    <div className="relative w-full h-full group/card">
                      {/* Blurred Backdrop Layer */}
                      <div className="absolute inset-0 scale-110 blur-2xl opacity-40 transition-transform duration-700 group-hover/card:scale-125">
                        <Image 
                          src={item?.image}
                          alt=""
                          fill 
                          className="object-cover"
                        />
                      </div>
                      
                      <Image 
                        src={item?.image}
                        alt={item?.name}
                        fill 
                        className="relative z-10 object-cover opacity-90 transition-transform duration-700 group-hover/card:scale-105"
                      />                      
                      <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-30">
                        <h4 className="text-[32px] font-black text-white leading-tight drop-shadow-2xl">{item?.name}</h4>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>

            {/* Background Orbs to maintain the aesthetic */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400/10 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-400/10 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

