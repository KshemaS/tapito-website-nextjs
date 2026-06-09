"use client";

import AnimatedLucideIcon from "./AnimatedLucideIcon";
import { motion } from "framer-motion";
import Container from "./Container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import store from '@/public/assets/images/home/store.png';
import fashion from '@/public/assets/images/home/fashion.png';
import food from '@/public/assets/images/home/food.png';
import electronics from '@/public/assets/images/home/electronics.png';
import supermarket from '@/public/assets/images/home/supermarket.png';
import beauty from '@/public/assets/images/home/beauti.png';

const industries = [
  { 
    id: "01", 
    icon: "Building2", 
    name: "Retail Chains", 
    desc: "Centralize operations across multiple stores and boost performance at every location.",
    img: store
  },
  { 
    id: "02", 
    icon: "ShoppingCart", 
    name: "Supermarkets", 
    desc: "Optimize inventory, reduce wastage, and ensure the right products are always in stock.",
    img: supermarket 
  },
  { 
    id: "03", 
    icon: "Shirt", 
    name: "Fashion & Apparel", 
    desc: "Track trends, manage collections, and improve sell-through rates with AI insights.",
    img: fashion 
  },
  { 
    id: "04", 
    icon: "Utensils", 
    name: "F&B Chains", 
    desc: "Optimize menu performance, control costs, and deliver great customer experiences consistently.",
    img: food 
  },
  { 
    id: "05", 
    icon: "Laptop", 
    name: "Electronics", 
    desc: "Track high-value inventory, analyze demand, and maximize sales opportunities.",
    img: electronics 
  },
  { 
    id: "06", 
    icon: "Sparkles", 
    name: "Beauty & Wellness", 
    desc: "Personalize customer experiences and boost loyalty with smart AI recommendations.",
    img: beauty 
  },
];

export default function Audience() {
  return (
    <section className="bg-white py-[80px] lg:py-[120px] relative overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3]" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#09358c] text-xs font-bold mb-6"
          >
            <AnimatedLucideIcon name="Target" size={14} />
            TARGET AUDIENCE
          </motion.div>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Designed for Every <br /> <span className="text-[#09358c]">Retail Model.</span>
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you run a luxury flagship or a national supermarket chain, Tapito scales with your ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden flex flex-col h-[280px]"
            >
              <div className="relative flex-1 flex">
                <div className="w-[60%] p-6 flex flex-col">
                  <div className="text-slate-500 font-bold text-lg mb-4 group-hover:text-slate-700 transition-colors">{item.id}</div>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-blue-50 transition-colors">
                      <AnimatedLucideIcon name={item.icon as any} size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{item.name}</h4>
                  </div>
                  
                  <div className="w-8 h-[2px] bg-slate-900 mb-4" />
                  
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="w-[40%] relative overflow-hidden">
                  {/* Circular mask for image */}
                  <div className="absolute top-1/2 left-0 w-[200%] h-[120%] rounded-full -translate-y-1/2 -translate-x-1/4 group-hover:scale-110 transition-transform duration-700" />
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill
                    sizes="(max-width: 768px) 30vw, 150px"
                    className="object-contain p-4 z-10 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] border border-slate-100 shadow-lg p-6 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="flex items-center gap-6 flex-1">
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-4 border-slate-300 animate-ping opacity-20" />
              <AnimatedLucideIcon name="Sparkles" size={32} className="text-[#09358c]" color="#09358c" />
            </div>
            <div>
              <h5 className="text-xl font-bold text-[#09358c]">One Dashboard. Every Industry.</h5>
              <p className="text-sm text-slate-500">Different needs. Same goal—smarter sales, better decisions, bigger growth.</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 md:gap-16 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-12">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 text-slate-900 mb-1">
                <AnimatedLucideIcon name="TrendingUp" size={16} className="text-[#09358c]" color="#09358c" />
                <span className="text-lg font-bold text-[#09358c]">+34.6%</span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Sales Growth</div>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 text-slate-900 mb-1">
                <AnimatedLucideIcon name="ShoppingBag" size={16} className="text-[#09358c]" color="#09358c" />
                <span className="text-lg font-bold text-[#09358c]">-23%</span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Inventory Cost</div>
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 text-slate-900 mb-1">
                <AnimatedLucideIcon name="Target" size={16} className="text-[#09358c]" color="#09358c" />
                <span className="text-lg font-bold text-[#09358c]">+28%</span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Conversion Rate</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

