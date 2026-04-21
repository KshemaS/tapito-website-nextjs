"use client";

import { motion } from "framer-motion";
import { Globe, Users, Megaphone, Briefcase, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/Container";

export default function ContactReasons() {
  const reasons = [
    { 
      icon: Globe,     
      title: "Platform Details & Demos",        
      text: "Experience the full power of Tapito AI with our hands-on product walkthrough and expert-led demonstrations.",
      color: "text-blue-500",    
      bg: "bg-blue-50"    
    },
    { 
      icon: Users,     
      title: "Strategic Partnerships",      
      text: "Join our ecosystem of retail innovators. We collaborate with leaders to redefine the future of commerce.",
      color: "text-sky-500",     
      bg: "bg-sky-50"     
    },
    { 
      icon: Megaphone, 
      title: "Press & Media Queries",      
      text: "Get the latest news, brand assets, and coordinate interview requests with our communications team.",
      color: "text-cyan-500",    
      bg: "bg-cyan-50"    
    },
    { 
      icon: Briefcase, 
      title: "Career Opportunities",            
      text: "Join a fast-growing team of AI researchers and retail experts building the foundation of next-gen retail.",
      color: "text-emerald-500", 
      bg: "bg-emerald-50" 
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white/50 border-y border-slate-200/60 backdrop-blur-sm">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-50/50 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <Container>
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#09358c]/15 bg-[#09358c]/5 mb-6"
          >
            <Plus size={14} className="text-[#09358c]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#09358c]">Why Connect</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Reach out to us for:
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl px-4">
            Our specialized teams are ready to support your specific needs. <br className="hidden md:block"/> Select an area below to connect with the right experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative p-10 rounded-[1.5rem] bg-white border border-slate-100/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_40px_80px_-24px_rgba(9,53,140,0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm", item.bg, item.color)}>
                <item.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#09358c] transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-[15px] text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
