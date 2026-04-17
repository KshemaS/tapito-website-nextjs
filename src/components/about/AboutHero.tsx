"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Sparkles, ArrowRight } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";

export default function AboutHero() {
  return (
    <section className="relative h-screen min-h-[850px] flex items-center bg-transparent overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <Container className="relative z-10 w-full h-full flex flex-col justify-center gap-12 lg:gap-16 py-12 lg:py-0">
        
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 mt-8">
          
          {/* Left Side: Content Stack */}
          <div className="flex-1 space-y-10 lg:pr-12">
            
            {/* Tag First */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#09358c] bg-white/80 backdrop-blur-xl rounded-full border border-blue-100 shadow-sm">
                <Sparkles size={12} className="text-[#05a0ec] animate-pulse" />
                About Tapito
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-[40px] lg:text-[48px] xl:text-[60px] 2xl:text-[72px] 4xl:text-8xl font-bold text-slate-900 leading-[0.95] tracking-tighter">
                Grow your data, <br />
                <span className="text-slate-800">harvest the</span> <br />
                <span className="text-[#09358c]">results.</span>
              </h1>
            </motion.div>

            {/* Supporting Context Third */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <p className="text-xl lg:text-[18px] xl:text-[20px] 4xl:text-2xl text-slate-500 font-medium leading-[1.6] max-w-3xl">
                A data-centric technology company built to accelerate your analytical growth 
                and anchor a true intelligence culture at the heart of your strategy.
              </p>

              <div className="flex lg:justify-start mt-8">
                <button className="btn-premium flex items-center gap-2 text-lg px-10 py-5 w-full sm:w-auto justify-center font-normal">
                  Know more
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: CardSwap */}
          <div className="relative w-full lg:w-[500px] h-[400px] flex justify-end lg:block lg:translate-y-20">
            <CardSwap
              width={500}
              height={400}
              cardDistance={60}
              verticalDistance={70}
              delay={3500}
              skewAmount={6}
              pauseOnHover={true}
            >
              {[
                { img: "/retail_ai_dashboard_premium_1775651628420.png" },
                { img: "/about-hero.png" },
                { img: "/retail_customer_analytics_digital_overlay_1775651982487.png" }
              ].map((item, idx) => (
                <Card key={idx}>
                  <div className="relative w-full h-full bg-white flex flex-col items-center justify-center">
                    <div className="w-full h-full rounded-xl overflow-hidden shadow-inner border border-slate-100">
                      <div className={`w-full h-full bg-cover bg-center`} style={{ backgroundImage: `url('${item.img}')` }} />
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </Container>
    </section>
  );
}




