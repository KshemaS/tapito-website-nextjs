"use client";

import { motion } from "framer-motion";
import { 
  Hammer, 
  Sofa, 
  Tv, 
  ShoppingBasket, 
  Shirt, 
  Sparkle, 
  Gem, 
  Utensils, 
  Globe, 
  Plane,
  ArrowRight
} from "lucide-react";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Building Materials", impact: "Improve dealer & contractor engagement", icon: Hammer, color: "bg-orange-50 text-orange-600" },
  { name: "Home Furnishing", impact: "Increase repeat purchases", icon: Sofa, color: "bg-blue-50 text-blue-600" },
  { name: "Electronics", impact: "Optimize upsell & warranties", icon: Tv, color: "bg-slate-50 text-slate-600" },
  { name: "Supermarkets", impact: "Boost basket size & frequency", icon: ShoppingBasket, color: "bg-emerald-50 text-emerald-600" },
  { name: "Fashion", impact: "Improve trend-based selling", icon: Shirt, color: "bg-rose-50 text-rose-600" },
  { name: "Beauty", impact: "Personalize customer journeys", icon: Sparkle, color: "bg-pink-50 text-pink-600" },
  { name: "Jewelry", impact: "Enhance high-value customer retention", icon: Gem, color: "bg-cyan-50 text-cyan-600" },
  { name: "F&B Retail", impact: "Increase visit frequency", icon: Utensils, color: "bg-amber-50 text-amber-600" },
  { name: "eCommerce", impact: "Reduce cart abandonment", icon: Globe, color: "bg-indigo-50 text-indigo-600" },
  { name: "Travel & Hospitality", impact: "Improve repeat bookings", icon: Plane, color: "bg-violet-50 text-violet-600" },
];

export const IndustryImpact = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-[#09358c] mb-6 block">VERTICAL DEPTH</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Industry-Specific <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09358c] to-[#05a0ec]">Impact</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-md leading-relaxed">
            Tailored AI logic designed for the unique unit economics and customer behaviors of your specific retail vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-[#05a0ec]/30 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(5,160,236,0.1)] hover:-translate-y-1"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                i % 3 === 0 ? "bg-[#09358c]/10 text-[#09358c]" : 
                i % 3 === 1 ? "bg-[#05a0ec]/10 text-[#05a0ec]" : 
                "bg-[#06dcc3]/10 text-[#06dcc3]"
              )}>
                <item.icon size={22} />
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2 leading-tight">
                {item.name}
              </h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
                {item.impact}
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#05a0ec] transition-colors">
                Learn More <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
