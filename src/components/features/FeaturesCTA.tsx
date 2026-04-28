"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

export const FeaturesCTA = () => {
  return (
    <section className="mb-32">
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative px-8 py-14 md:px-12 md:py-20 lg:px-16 lg:py-24 rounded-[2.5rem] bg-[#0c0c1e] text-white overflow-hidden shadow-xl"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            <div className="max-w-2xl ">
              <h2 className="text-2xl md:text-4xl lg:text-5xl 4xl:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white text-center lg:text-left">
                Ready to revolutionize <br className="hidden xl:block" /> your retail analytics?
              </h2>
              <p className="text-slate-400 text-sm lg:text-lg 4xl:text-2xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join 500+ leading retailers who use Tapito to make smarter, faster, more profitable decisions every day.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full lg:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto min-w-[180px] bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-base lg:text-lg transition-all"
              >
                Start Free Trial
              </motion.button>
              <button className="w-full sm:w-auto min-w-[180px] bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-black text-base lg:text-lg border border-white/10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
