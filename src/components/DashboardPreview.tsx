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
   LogOut
} from "lucide-react";

interface DashboardPreviewProps {
   keyHighlights: { name: string; subheading: string; description: string; image: string; video?: string }[];
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
         <div className="h-10">
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

         <div className="relative bg-[#f0f4f9] rounded-[1.5rem] border border-slate-200 flex overflow-hidden h-[600px] max-w-[736px] w-full ">
            <div className="w-[180px] bg-[#1e293b] flex flex-col shrink-0 rounded-l-[12px]">
                <div className="p-5 flex items-center gap-3">
                  <div className="w-12 h-10 flex items-center justify-center">
                     <img 
                        src="/logo.svg" 
                        alt="Tapito Logo" 
                        className="w-full h-full object-contain"
                     />
                  </div>
               </div>

               <div className="flex-1 py-2 flex flex-col gap-1 overflow-hidden">
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
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-0.5"
                     >
                        <h2 className="text-xl font-black text-[#1e293b] truncate max-w-[280px]">
                           {keyHighlights[activeIndex]?.subheading}
                        </h2>
                        <span className="text-[10px] font-medium text-slate-500 truncate max-w-[280px] leading-tight">
                           {keyHighlights[activeIndex]?.description}
                        </span>
                     </motion.div>
                  </AnimatePresence>

                  <div className="flex items-center gap-3">
                     <div className="bg-white px-4 py-2 rounded-full border border-slate-100 flex items-center gap-2 shadow-sm shrink-0">
                        <RefreshCw size={12} className="text-slate-400" />
                        <span className="text-[10px] font-bold text-slate-500">Auto-update</span>
                     </div>
                  </div>

                  {/* Cycle Progress Bar */}
                  <motion.div
                     key={`progress-${activeIndex}`}
                     initial={{ scaleX: 0 }}
                     animate={{ scaleX: 1 }}
                     transition={{ duration: 8, ease: "linear" }}
                     className="absolute bottom-0 left-0 h-[2px] bg-[#05a0ec] origin-left w-full shadow-[0_0_8px_rgba(5,160,236,0.3)]"
                  />
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
                        className="relative w-full h-full rounded-[12px] bg-slate-900 overflow-hidden border-2 border-white"
                     >
                        <video
                           key={`vid-${activeIndex}`}
                           autoPlay
                           muted
                           loop
                           playsInline
                           className="w-full h-full object-contain opacity-90 shadow-2xl"
                        >
                           <source src={keyHighlights[activeIndex]?.video || "/dashboard-overview.mp4"} type="video/mp4" />
                        </video>
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
      <div className={`p-3 flex items-center gap-3 transition-all duration-300 group cursor-pointer ${active ? 'bg-[#05a0ec] text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
         }`}>
         <Icon size={26} className={active ? 'text-white bg-[#06dcc333]' : 'text-slate-500 transition-colors border border-[#ffffff33] rounded-[6px] p-1'} />
         <span className="text-xs font-bold tracking-tight">{label}</span>
      </div>
   );
}
