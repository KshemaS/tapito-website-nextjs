"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import DashboardPreview from "@/components/DashboardPreview";

type HeroProps = {
  keyHighlights: any[];
};

export default function Hero({ keyHighlights }: HeroProps) {
  return (
    <section className="relative pt-16 lg:pt-40 pb-20 overflow-hidden bg-[#fafbfc]">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center overflow-hidden">
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
              className="mb-8 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/50 flex items-center gap-2"
            >
              <Sparkles size={14} className="text-indigo-600" />
              <span className="text-xs font-bold text-indigo-900 uppercase tracking-[0.2em]">
                The Future of Retail AI
              </span>
            </motion.div>

            <h1 className="text-[40px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] 4xl:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1]">
              Turn Your Retail Data Into Revenue <br />
              <span className="gradient-text pb-2 px-1 inline-block">— Automatically </span>
            </h1>

            <p className="text-xl lg:text-[18px] xl:text-[20px] 4xl:text-2xl text-slate-500 mb-10 max-w-xl leading-relaxed">
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

          {/* Right Column: Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:max-w-[520px] xl:max-w-[580px] 2xl:max-w-[640px] 3xl:max-w-[700px] 4xl:max-w-[750px] relative lg:block hidden h-[400px] object-contain"
          >
            <DashboardPreview keyHighlights={keyHighlights} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}




