"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Bell, 
  Heart, 
  Share2, 
  MessageSquare, 
  Mail, 
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

const showcaseItems = [
  {
    id: "alerts",
    icon: Bell,
    title: "Deliver Critical Alerts With Real-Time Transactional Alerts",
    description: "Ensure your customers are always informed with critical alerts through a unified API and a dedicated dashboard for effortless tracking.",
    visual: "alerts"
  },
  {
    id: "loyalty",
    icon: Heart,
    title: "Create Deeper Customer Loyalty Through Personalized Experiences",
    description: "Build lasting relationships by delivering tailored content and offers based on real-time customer behavior and preferences.",
    visual: "loyalty"
  },
  {
    id: "upsell",
    icon: Share2,
    title: "Unlock Upsell Opportunities With Cross-Channel Marketing",
    description: "Maximize revenue per customer by identifying perfect moments for upgrades and complementary products across all touchpoints.",
    visual: "upsell"
  }
];

export const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Safe index for desktop view when accordion is closed on mobile
  const safeIndex = activeTab >= 0 ? activeTab : 0;

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <Container>
        {/* Desktop View: Side-by-Side with Hover */}
        <div className="hidden lg:flex flex-row items-center gap-8">
          {/* Left Column: Tabs */}
          <div className="lg:w-[50%] w-full space-y-4 lg:pr-12">
            {showcaseItems.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTab(index)}
                className={cn(
                  "w-full text-left p-6 lg:p-8 rounded-2xl flex items-center gap-6 transition-all duration-700 relative group cursor-pointer",
                  activeTab === index 
                    ? "bg-white shadow-[0_20px_40px_-10px_rgba(9,53,140,0.1)] scale-[1.02] z-10" 
                    : "opacity-60 hover:opacity-100 hover:bg-white/50"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500",
                  activeTab === index ? "bg-[#09358c] text-white shadow-lg shadow-blue-500/20" : "bg-white text-slate-400 group-hover:bg-[#09358c]/10 group-hover:text-[#09358c]"
                )}>
                  <item.icon size={22} className={activeTab === index ? "fill-current" : ""} />
                </div>
                <span className={cn(
                  "text-[19px] lg:text-[22px] 2xl:text-[24px] font-black leading-tight transition-colors duration-500 tracking-tight font-semibold",
                  activeTab === index ? "text-slate-900" : "text-slate-500"
                )}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Visual & Content */}
          <div className="lg:w-[55%] w-full h-[650px] bg-white rounded-[3rem] p-12 lg:p-16 flex flex-col justify-center shadow-[0_20px_80px_-20px_rgba(0,0,0,0.04)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full"
              >
                {/* Visual Area */}
                <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center mb-12">
                   {safeIndex === 0 ? <AlertsVisual /> : safeIndex === 1 ? <LoyaltyVisual /> : <UpsellVisual />}
                </div>

                {/* Text Content */}
                <div className="max-w-xl">
                  <h3 className="text-[22px] lg:text-[26px] xl:text-[32px] font-semibold font-black text-slate-900 mb-6 leading-tight tracking-tighter">
                    {showcaseItems[safeIndex].title}
                  </h3>
                  <p className="text-lg text-slate-800 font-medium leading-relaxed font-black opacity-60">
                    {showcaseItems[safeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View: Accordion (Click and Open) */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="text-center mb-10">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#09358c] mb-4 block">PLATFORM FEATURES</span>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">Everything you need <br/> to grow</h2>
          </div>
          
          <div className="space-y-4">
            {showcaseItems.map((item, index) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <button
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500",
                      activeTab === index ? "bg-[#09358c] text-white" : "bg-slate-50 text-slate-400"
                    )}>
                      <item.icon size={20} />
                    </div>
                    <span className={cn(
                      "text-lg font-black leading-tight tracking-tight",
                      activeTab === index ? "text-[#09358c]" : "text-slate-900"
                    )}>
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown className={cn(
                    "text-slate-400 transition-transform duration-300",
                    activeTab === index ? "rotate-180 text-[#09358c]" : ""
                  )} size={20} />
                </button>

                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 space-y-8">
                        {/* Visual Area (Responsive for mobile) */}
                        <div className="h-[350px] bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center relative">
                          <div className="scale-75 md:scale-90 transform origin-center w-full h-full">
                            {index === 0 ? <AlertsVisual /> : index === 1 ? <LoyaltyVisual /> : <UpsellVisual />}
                          </div>
                        </div>
                        
                        {/* Description */}
                        <div className="space-y-4">
                          <p className="text-base text-slate-600 font-medium leading-relaxed">
                            {item.description}
                          </p>
                          <button className="flex items-center gap-2 text-[#09358c] font-black text-xs uppercase tracking-widest py-2 hover:translate-x-1 transition-transform">
                            Learn More <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* Visual Components (Keep them local to the file for now) */

const AlertsVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center">
    <div className="absolute top-0 px-5 py-2.5 bg-[#09358c] rounded-full border border-white/10 shadow-[0_15px_30px_-5px_rgba(9,53,140,0.3)] z-20 flex items-center gap-4">
      <div className="flex gap-1.5">
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-white" />
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, delay: 0.3, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-blue-300" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">AI-Logic: Monitoring Patterns</span>
    </div>

    <div className="w-56 p-5 bg-white border border-slate-100 rounded-2xl shadow-xl flex flex-col items-center mt-16 mb-10 relative z-10">
      <div className="flex items-center gap-3 mb-2">
         <div className="w-8 h-8 rounded-lg bg-[#09358c] flex items-center justify-center text-white"><Zap size={18} fill="currentColor" /></div>
         <span className="text-sm font-black text-slate-900 tracking-tight">Tapito Inform</span>
      </div>
      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Single API</span>
    </div>

    <div className="relative">
       <div className="relative w-[160px] h-[280px] bg-slate-900 rounded-[2rem] border-[4px] border-slate-800 shadow-2xl overflow-hidden flex flex-col pt-6">
          <div className="w-12 h-1 bg-slate-800 rounded-full mx-auto mb-4" />
          <div className="w-full px-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full bg-white rounded-xl shadow-xl overflow-hidden p-3 space-y-2"
            >
               <div className="h-16 bg-[#09358c] rounded-lg relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#09358c] to-transparent opacity-50" />
               </div>
               <p className="text-[8px] font-black text-slate-900 leading-tight">Market Alert! 🚀</p>
               <div className="w-full py-1.5 bg-[#09358c] rounded text-center text-[7px] text-white font-black">VIEW NOW</div>
            </motion.div>
          </div>
       </div>
    </div>
  </div>
);

const LoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-[#06dcc3]/20 rounded-full blur-2xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#06dcc3] mb-4">
                <Heart size={30} className="fill-current" />
             </div>
             <div className="px-3 py-1 bg-slate-900 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-2">Sarah J.</div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />)}
             </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-10 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
             <span className="text-[10px] font-black text-[#09358c]">20% OFF READY</span>
          </motion.div>
       </div>
    </div>
);

const UpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
       <div className="flex items-center gap-3">
          <div className="w-24 h-14 rounded-xl bg-slate-100 border border-slate-200 p-3" />
          <ArrowRight className="text-slate-300" size={16} />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-20 rounded-xl bg-blue-50 border border-[#05a0ec] p-4 relative shadow-lg"
          >
             <div className="w-full h-8 bg-white rounded shadow-sm border border-blue-100 flex items-center justify-center">
                <span className="text-[8px] font-black text-[#09358c]">UPGRADE</span>
             </div>
             <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={10} /></div>
          </motion.div>
       </div>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Push</div>
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Email</div>
       </div>
    </div>
);

export default FeatureShowcase;
