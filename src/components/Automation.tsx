"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedLucideIcon from "./AnimatedLucideIcon";
import Container from "./Container";

const workflows = [
  { icon: "Mail", title: "Lapsed Customer Win-back", trigger: "Customer hasn't purchased in 60 days", action: "Send personalized discount via Email" },
  { icon: "MessageSquare", title: "High Value Alert", trigger: "Purchase over $500", action: "Trigger WhatsApp concierge welcome" },
  { icon: "Repeat", title: "Subscription Upsell", trigger: "3rd repeat purchase", action: "Offer subscription discount" },
];

export default function Automation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-slate-50 section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none" className="opacity-10">
          <path id="path1" d="M-50 200 C 150 200, 300 100, 450 100 S 600 300, 750 300 S 900 150, 1250 150" stroke="#09358c" strokeWidth="1" fill="none" strokeDasharray="8 8" />
          <circle r="4" fill="#09358c">
            <animateMotion dur="8s" repeatCount="indefinite">
              <mpath href="#path1" />
            </animateMotion>
          </circle>

          <path id="path2" d="M-50 600 C 100 600, 250 700, 400 700 S 550 500, 700 500 S 850 650, 1250 650" stroke="#05a0ec" strokeWidth="1.5" fill="none" strokeDasharray="10 10" />
          <circle r="4" fill="#05a0ec">
            <animateMotion dur="12s" repeatCount="indefinite">
              <mpath href="#path2" />
            </animateMotion>
          </circle>

          <path id="path3" d="M200 -50 V250 C 200 350, 300 350, 300 450 V850" stroke="#06dcc3" strokeWidth="1" fill="none" strokeDasharray="5 5" />
          <circle r="3" fill="#06dcc3">
            <animateMotion dur="10s" repeatCount="indefinite">
              <mpath href="#path3" />
            </animateMotion>
          </circle>
          
          <path id="path4" d="M900 -50 V250 C 900 350, 800 350, 800 450 V850" stroke="#09358c" strokeWidth="1" fill="none" strokeDasharray="5 5" />
          <circle r="3" fill="#09358c">
            <animateMotion dur="15s" repeatCount="indefinite">
              <mpath href="#path4" />
            </animateMotion>
          </circle>
        </svg>

        {/* Subtle Grid Backdrop */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#09358c 1px, transparent 1px), linear-gradient(90deg, #09358c 1px, transparent 1px)',
               backgroundSize: '80px 80px'
             }} 
        />
      </div>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#09358c] mb-4">Automation Engine</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Zero Manual Effort. <span className="text-[#09358c]">Maximum Impact.</span></h3>
          <p className="text-lg text-slate-600">
            Set it and forget it. Tapito's automation engine works 24/7 to engage customers, retain them, and drive repeat sales.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col gap-12 items-center">
          <div className="space-y-4 max-w-[650px] w-full">
            {workflows.map((flow, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group "
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <AnimatedLucideIcon name={flow.icon} size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{flow.title}</h4>
                </div>
                <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-2 text-sm text-slate-500">
                      <AnimatedLucideIcon name="Clock" size={14} />
                      <span className="font-semibold uppercase text-[10px] tracking-wider text-slate-400">Trigger:</span>
                      {flow.trigger}
                   </div>
                   <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                      <AnimatedLucideIcon name="Zap" size={14} className="fill-blue-600" />
                      <span className="font-semibold uppercase text-[10px] tracking-wider text-blue-400">Action:</span>
                      {flow.action}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
                 <div className="aspect-square bg-white rounded-[30px] shadow-2xl overflow-hidden border border-slate-100 flex items-center justify-center p-[10px] ">
                  <video
                     ref={videoRef}
                     src={isIntersecting ? "/videos/dashboard.webm" : undefined}
                     autoPlay
                     muted
                     loop
                     playsInline
                     className="w-full h-full object-contain"
                  />
               {/* <div className="w-full h-full relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white z-10">
                     <AnimatedLucideIcon name="Zap" size={32} />
                  </div>
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-100" />
                  
                  <div className="absolute top-1/4 left-0 w-full flex justify-between px-12">
                     <div className="w-12 h-12 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center animate-bounce" style={{ animationDuration: "3s" }}>
                        <AnimatedLucideIcon name="Mail" className="text-blue-500" />
                     </div>
                     <div className="w-12 h-12 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
                        <AnimatedLucideIcon name="Bell" className="text-amber-500" />
                     </div>
                  </div>

                  <div className="absolute top-1/2 left-0 w-full flex justify-around px-8">
                     <div className="w-10 h-10 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center animate-pulse" style={{ animationDuration: "2s" }}>
                        <AnimatedLucideIcon name="Database" className="text-slate-800" size={18} />
                     </div>
                     <div className="w-12 h-12 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center animate-bounce" style={{ animationDuration: "2.8s", animationDelay: "0.7s" }}>
                        <AnimatedLucideIcon name="MessageSquare" className="text-blue-500" />
                     </div>
                     <div className="w-10 h-10 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center animate-pulse" style={{ animationDuration: "2.2s", animationDelay: "0.3s" }}>
                        <AnimatedLucideIcon name="CreditCard" className="text-emerald-500" size={18} />
                     </div>
                  </div>

                  <div className="absolute top-[70%] left-0 w-full flex justify-center px-4">
                     <div className="w-14 h-14 rounded-2xl bg-white shadow-xl border-2 border-emerald-50 flex items-center justify-center animate-bounce" style={{ animationDuration: "2.4s", animationDelay: "0.4s" }}>
                        <AnimatedLucideIcon name="MessageCircle" className="text-emerald-600" size={28} />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                     </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 p-4 rounded-2xl bg-slate-900 text-white text-center shadow-2xl">
                     <span className="text-xs font-bold block mb-1">Conversion Rate</span>
                     <span className="text-2xl font-bold text-emerald-400">+48.4%</span>
                  </div>
               </div> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

