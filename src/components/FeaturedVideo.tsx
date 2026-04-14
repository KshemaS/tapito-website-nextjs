"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import Container from "./Container";
import Image from "next/image";

export default function FeaturedVideo() {
  return (
    <section className="bg-slate-950 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 opacity-50" />
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6"
          >
            <Sparkles size={14} />
            SEE IT IN ACTION
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Experience the <span className="text-blue-500">Tapito Workflow</span>
          </h2>
          <p className="text-xl text-slate-400">
            A 2-minute walkthrough of how we transform complex retail data into simple, actionable growth strategies.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
        >
          {/* Using the retail dashboard as a "video" thumbnail */}
          <Image 
            src="/retail_ai_dashboard_premium_1775651628420.png"
            alt="Product Walkthrough"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500 flex items-center justify-center">
             <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={40} className="fill-current ml-2" />
             </div>
          </div>
          
          <div className="absolute bottom-10 left-10 p-6 glass border-white/20 text-white rounded-2xl max-w-sm">
             <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">Automated Inventory Management</span>
             <p className="text-sm font-medium">Watch how Tapito predicted a stock-out and auto-managed the replenishment for 50+ stores.</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
