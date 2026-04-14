"use client";

import { Building2, ShoppingCart, Shirt, Utensils, Laptop, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

const industries = [
  { icon: Building2, name: "Retail Chains", desc: "Consolidate data across 100+ locations." },
  { icon: ShoppingCart, name: "Supermarkets", desc: "Optimize inventory and basket value." },
  { icon: Shirt, name: "Fashion & Apparel", desc: "Trend forecasting and loyalty tracking." },
  { icon: Utensils, name: "F&B Chains", desc: "Time-of-day analytics and menu optimization." },
  { icon: Laptop, name: "Electronics", desc: "Track high-value item lifecycles." },
  { icon: Sparkles, name: "Beauty & Wellness", desc: "Personalized replenishment reminders." },
];

export default function Audience() {
  return (
    <section className="bg-slate-50 section-padding">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">Target Audience</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Designed for Every <span className="gradient-text">Retail Model</span></h3>
          <p className="text-lg text-slate-600">
            Whether you run a single flagship store or a national retail chain, Tapito scales with your ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-lg group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center mb-6">
                <item.icon size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.name}</h4>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.a
            href="/solutions"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium px-12 py-5 text-lg group flex items-center gap-3"
          >
            View More Solutions
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
