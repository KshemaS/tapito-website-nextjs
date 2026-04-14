"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
   LayoutDashboard,
   FileText,
   BrainCircuit,
   TrendingUp,
   Zap,
   Bot,
   RefreshCw,
   Sparkles,
   LogOut
} from "lucide-react";

interface DashboardPreviewProps {
   keyHighlights: { name: string; image: string; video?: string }[];
}

export default function DashboardPreview({ keyHighlights }: DashboardPreviewProps) {
   const [activeIndex, setActiveIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveIndex((prev) => (prev + 1) % keyHighlights.length);
      }, 8000);
      return () => clearInterval(interval);
   }, [keyHighlights.length]);

   return (
      <div className="w-full flex flex-col gap-6 transform lg:scale-105 xl:scale-110 origin-left">
         {/* Highlight Title - Now Above the Dashboard */}
         <div className="h-10"> {/* Fixed height to prevent layout jump during transition */}
            <AnimatePresence mode="wait">
               <motion.h3
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl lg:text-3xl font-black text-slate-900 leading-tight capitalize"
               >
                  {keyHighlights[activeIndex]?.name}
               </motion.h3>
            </AnimatePresence>
         </div>

         {/* Dashboard Container Box */}
         <div className="relative w-full bg-[#f0f4f9] rounded-[1.5rem] shadow-[0_40px_80px_-15px_rgba(15,23,42,0.12)] border border-slate-200 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-[180px] h-full bg-[#1e293b] flex flex-col shrink-0 rounded-l-[12px]">
               <div className="p-5 flex items-center gap-3">
                  <div className="w-7 h-7 flex items-center justify-center">
                     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                        <path d="M16 4L26 22H6L16 4Z" fill="#ff4dff" className="opacity-80" />
                        <path d="M16 10L22 21H10L16 10Z" fill="white" />
                     </svg>
                  </div>
                  <span className="text-xl font-black text-white tracking-tight">Tapito</span>
               </div>

               <div className="flex-1 px-3 py-2 flex flex-col gap-1 overflow-hidden">
                  <SidebarItem icon={LayoutDashboard} label="Dashboard" />
                  <SidebarItem icon={FileText} label="Reports" />
                  <SidebarItem icon={BrainCircuit} label="Analytics" />
                  <SidebarItem icon={TrendingUp} label="GP Analysis" />
                  <SidebarItem icon={Zap} label="Automation" />
                  <SidebarItem icon={Bot} label="AI Assistant" />

                  <div className="mt-auto pt-4 flex flex-col gap-1 border-t border-slate-700/50">
                     <SidebarItem icon={LogOut} label="Logout" />
                  </div>
               </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-white/50">
               {/* Header */}
               <header className="px-6 py-5 flex items-center justify-between border-b border-slate-100 bg-white/40">
                  <div className="flex flex-col gap-0.5">
                     <h2 className="text-2xl font-black text-[#1e293b]">Dashboard</h2>
                     <span className="text-[9px] uppercase font-black tracking-widest text-slate-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Analysis
                     </span>
                  </div>

                  <div className="flex items-center gap-3">
                     <div className="bg-white px-4 py-2 rounded-full border border-slate-100 flex items-center gap-2 shadow-sm">
                        <RefreshCw size={12} className="text-slate-400" />
                        <span className="text-[10px] font-bold text-slate-500">Auto-update</span>
                     </div>
                     <button className="bg-[#1e1b4b] text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-blue-900/10">
                        <Sparkles size={12} />
                        AI Strategic
                     </button>
                  </div>
               </header>

               {/* Video Content Display */}
               <div className="flex-1 p-6 relative flex items-center justify-center">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-full max-h-[280px] rounded-[12px] bg-slate-900 overflow-hidden shadow-2xl border-2 border-white"
                     >
                        <video
                           key={`vid-${activeIndex}`}
                           autoPlay
                           muted
                           loop
                           playsInline
                           className="w-full h-full object-cover opacity-90"
                        >
                           <source src={keyHighlights[activeIndex]?.video || "/dashboard-overview.mp4"} type="video/mp4" />
                        </video>
                        <div className="absolute top-4 right-4 animate-pulse">
                           <div className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[8px] font-bold text-white border border-white/20">
                              OPTIMIZING LIVE
                           </div>
                        </div>
                     </motion.div>
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </div>
   );
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
   return (
      <div className={`p-2.5 rounded-xl flex items-center gap-3 transition-all duration-300 group cursor-pointer ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
         }`}>
         <Icon size={16} className={active ? 'text-white' : 'text-slate-500 group-hover:text-blue-400 transition-colors'} />
         <span className="text-xs font-bold tracking-tight">{label}</span>
      </div>
   );
}
