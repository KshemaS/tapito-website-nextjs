"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Bell, 
  Heart, 
  Share2, 
  MessageSquare, 
  Mail, 
  Smartphone,
  CheckCircle2,
  Zap,
  Users,
  ArrowRight
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

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
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
                   {activeTab === 0 ? <AlertsVisual /> : activeTab === 1 ? <LoyaltyVisual /> : <UpsellVisual />}
                </div>

                {/* Text Content */}
                <div className="max-w-xl">
                  <h3 className="text-[22px] lg:text-[26px] xl:text-[32px] font-semibold font-black text-slate-900 mb-6 leading-tight tracking-tighter">
                    {showcaseItems[activeTab].title}
                  </h3>
                  <p className="text-lg text-slate-800 font-medium leading-relaxed font-black opacity-60">
                    {showcaseItems[activeTab].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
};

/* Visual Components (Simulating the Flow Graphics) */

const AlertsVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center scale-[0.85] md:scale-100">
    {/* Unified Intelligence Status Bar */}
    <div className="absolute top-0 px-5 py-2.5 bg-[#09358c] rounded-full border border-white/10 shadow-[0_15px_30px_-5px_rgba(9,53,140,0.3)] z-20 flex items-center gap-4 group">
      <div className="flex gap-1.5">
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-white" />
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, delay: 0.3, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-blue-300" />
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, delay: 0.6, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">AI-Logic: Monitoring Patterns</span>
    </div>

    {/* Central Hub */}
    <div className="w-56 p-5 bg-white border border-slate-100 rounded-2xl shadow-[0_15px_35px_-5px_rgba(9,53,140,0.1)] flex flex-col items-center mt-16 mb-20 relative z-10">
      <div className="flex items-center gap-3 mb-2">
         <div className="w-8 h-8 rounded-lg bg-[#09358c] flex items-center justify-center text-white"><Zap size={18} fill="currentColor" /></div>
         <span className="text-sm font-black text-slate-900 tracking-tight">Tapito Inform</span>
      </div>
      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Single API</span>

      {/* Connection Lines Placeholder (Using absolute elements) */}
      <div className="absolute -top-10 left-1/2 w-px h-10 bg-slate-200" />
    </div>

    {/* Phone mockup */}
    <div className="relative group/phone">
       {/* Fallback Badges above child cards */}
       <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-20 w-[400px] justify-center text-[9px] font-black uppercase text-slate-400">
          <span>Default</span>
          <span className="text-rose-500">Second Fallback</span>
          <span>First Fallback</span>
       </div>

       <div className="relative w-[190px] h-[340px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden flex flex-col pt-8">
          <div className="w-16 h-1.5 bg-slate-800 rounded-full mx-auto mb-6" />
          <div className="w-full px-4 overflow-hidden">
            <div className="flex items-center gap-3 mb-6 bg-white/5 p-2 rounded-xl">
               <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white/40"><Users size={16} /></div>
               <div className="flex-1 space-y-1">
                  <div className="w-12 h-1.5 bg-white/20 rounded" />
                  <div className="w-8 h-1 bg-white/10 rounded" />
               </div>
            </div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="h-28 bg-[#09358c] relative overflow-hidden flex items-center justify-center">
                 <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#09358c] via-transparent to-transparent" />
                 <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg"><Zap size={10} fill="currentColor" /></div>
              </div>
              <div className="p-4 space-y-2">
                 <p className="text-[10px] font-black text-slate-900 leading-tight">Investment Alert: Market Surge! 🚀</p>
                 <p className="text-[8px] font-bold text-slate-400 leading-relaxed italic">"Your portfolio is up 4.2%. Click to see the high-velocity shifts."</p>
                 <div className="w-full py-2 bg-[#09358c] rounded-lg text-center text-[8px] text-white font-black tracking-widest mt-2">VIEW TRANSACTION</div>
              </div>
            </motion.div>
          </div>
       </div>

       {/* Secondary Previews (SMS/Email) */}
       <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: -210, y: -40, opacity: 0.5 }} className="absolute w-40 p-4 bg-white rounded-2xl border border-slate-100 shadow-xl">
          <div className="flex justify-between items-center mb-4">
             <div className="w-8 h-1 bg-slate-200 rounded" />
             <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white"><MessageSquare size={8} /></div>
          </div>
          <div className="space-y-2">
             <div className="w-full h-1 bg-slate-100 rounded" />
             <div className="w-3/4 h-1 bg-slate-50 rounded" />
          </div>
       </motion.div>

       <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 210, y: -40, opacity: 0.5 }} className="absolute w-40 p-4 bg-white rounded-2xl border border-slate-100 shadow-xl">
          <div className="flex justify-between items-center mb-4">
             <div className="w-8 h-1 bg-slate-200 rounded" />
             <div className="w-4 h-4 rounded-full bg-rose-500 flex items-center justify-center text-white"><Mail size={8} /></div>
          </div>
          <div className="space-y-2">
             <div className="w-full h-1 bg-slate-100 rounded" />
             <div className="w-5/6 h-1 bg-slate-50 rounded" />
          </div>
       </motion.div>
    </div>
  </div>
);

const LoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-64 h-64 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-[#06dcc3]/20 rounded-full blur-3xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-24 h-24 rounded-[2rem] bg-white shadow-2xl flex items-center justify-center text-[#06dcc3] mb-6">
                <Heart size={40} className="fill-current" />
             </div>
             <div className="px-4 py-2 bg-slate-900 rounded-full text-white text-xs font-black uppercase tracking-widest mb-4">Sarah Johnson</div>
             <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-emerald-400" />)}
             </div>
             <p className="mt-4 text-sm font-bold text-slate-400">Platinum Member • 2.4k Points</p>
          </div>
          
          {/* Floating cards */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-10 -right-20 p-4 bg-white rounded-2xl shadow-xl border border-slate-100">
             <span className="text-[10px] font-black text-slate-400 block mb-1">BIRTHDAY OFFER</span>
             <span className="text-sm font-black text-[#09358c]">20% DISCOUNT READY</span>
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity }} className="absolute -bottom-10 -left-20 p-4 bg-white rounded-2xl shadow-xl border border-slate-100">
             <span className="text-[10px] font-black text-slate-400 block mb-1">NEXT MILESTONE</span>
             <span className="text-sm font-black text-slate-900">500 pts to Gold Tier</span>
          </motion.div>
       </div>
    </div>
);

const UpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
       <div className="flex items-center gap-4">
          <div className="w-32 h-20 rounded-2xl bg-slate-100 border border-slate-200 p-4 relative overflow-hidden">
             <div className="w-12 h-1 bg-slate-200 rounded mb-2" />
             <div className="w-full h-8 bg-white rounded shadow-sm" />
          </div>
          <ArrowRight className="text-slate-300" />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-28 rounded-2xl bg-blue-50 border-2 border-[#05a0ec] p-5 relative shadow-xl shadow-blue-500/10"
          >
             <div className="flex items-center justify-between mb-4">
               <div className="w-16 h-2 bg-[#05a0ec]/20 rounded" />
               <Zap size={14} className="text-[#05a0ec]" />
             </div>
             <div className="w-full h-10 bg-white rounded-lg shadow-sm border border-blue-100 flex items-center justify-center">
                <span className="text-[10px] font-black text-[#09358c]">PREMIUM UPGRADE</span>
             </div>
             <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={12} /></div>
          </motion.div>
       </div>
       <div className="flex gap-4">
          <div className="px-6 py-2 bg-white rounded-full border border-slate-100 shadow-sm text-[10px] font-black text-slate-400">In-Store App</div>
          <div className="px-6 py-2 bg-white rounded-full border border-slate-100 shadow-sm text-[10px] font-black text-slate-400">Push Notification</div>
          <div className="px-6 py-2 bg-white rounded-full border border-slate-100 shadow-sm text-[10px] font-black text-slate-400">Email Flow</div>
       </div>
    </div>
);
