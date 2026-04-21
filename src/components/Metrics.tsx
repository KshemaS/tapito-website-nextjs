"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingCart, ArrowUpRight } from "lucide-react";
import Container from "./Container";
import Image from "next/image";

const stats = [
  { label: "Average Revenue Increase", value: "+24%", icon: TrendingUp, color: "text-[#05a0ec]", bg: "bg-blue-50" },
  { label: "Customer Retention", value: "+40%", icon: Users, color: "text-[#09358c]", bg: "bg-indigo-50" },
  { label: "Avg Ticket Size (AOV)", value: "+18%", icon: ShoppingCart, color: "text-[#06dcc3]", bg: "bg-teal-50" },
];

export default function Metrics() {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#09358c] mb-4">Business Impact</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Real Results. <span className="text-[#09358c]">Proven Scale.</span></h3>
              <p className="text-lg text-slate-600 mb-10">
                Companies using Tapito see an immediate impact on their bottom line through automated intelligence and better decision making.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 bg-slate-50/50"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                      <stat.icon size={28} />
                    </div>
                    <div>
                       <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                       <span className="text-slate-500 block text-sm font-medium">{stat.label}</span>
                    </div>
                    <ArrowUpRight className="ml-auto text-slate-300" />
                  </motion.div>
                ))}
              </div>
           </div>

           <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-[3.5rem] -z-10 rotate-2" />
              <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 mb-12">
                 <Image 
                  src="/retail_customer_analytics_digital_overlay_1775651982487.png"
                  alt="Customer Analytics"
                  fill
                  className="object-cover"
                 />
                 <div className="absolute inset-0 bg-[#09358c]/10" />
              </div>

              <div className="bg-gradient-to-br from-[#09358c] to-[#05a0ec] rounded-[3rem] p-12 text-white shadow-2xl overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                 <h4 className="text-3xl font-bold mb-6">Future Ready Analytics</h4>
                 <p className="text-blue-100 mb-8 leading-relaxed">
                   We are constantly evolving. Our predictive models integrated with Generative AI ensure you stay ahead of market shifts and consumer behavior patterns.
                 </p>
                 
                 <ul className="space-y-4">
                    {["Predictive Inventory Leveling", "Cross-Channel Persona Mapping", "AI-Driven Dynamic Pricing"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-400/30 flex items-center justify-center">
                             <div className="w-1.5 h-1.5 rounded-full bg-white transition-all scale-100" />
                          </div>
                          <span className="font-medium text-sm">{item}</span>
                       </li>
                    ))}
                 </ul>
                 
                 <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="flex -space-x-3">
                       {[1,2,3,4].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-[#09358c] bg-slate-200" />
                       ))}
                    </div>
                    <span className="text-sm font-medium text-blue-100">
                      Joined by 100+ global brands
                    </span>
                 </div>
              </div>
           </div>
        </div>
      </Container>
    </section>
  );
}