"use client";

import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  GitBranch, 
  Settings, 
  BarChart3, 
  Database, 
  RefreshCcw, 
  Table as TableIcon,
  Search,
  ChevronDown,
  Activity,
  Zap,
  Layers,
  Sparkles
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[900px] aspect-[4/3] bg-white rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden flex transform lg:scale-105 xl:scale-110 origin-left">
      {/* Sidebar */}
      <div className="w-1/4 h-full bg-slate-50 border-r border-slate-100 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
            T
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">tapito</span>
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">PROJECT ENGINE</span>
            <div className="flex flex-col gap-1">
              <NavItem icon={LayoutDashboard} label="Dashboard" active />
              <NavItem icon={GitBranch} label="Channels" />
              <NavItem icon={Settings} label="Settings" />
            </div>
          </div>

          <div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">ANALYTICS</span>
            <div className="flex flex-col gap-1">
              <NavItem icon={Layers} label="Overview" />
              <NavItem icon={BarChart3} label="Monitoring" />
              <NavItem icon={Search} label="AI Insights" />
              <NavItem icon={TableIcon} label="Datasets" />
              <NavItem icon={RefreshCcw} label="Automation" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full bg-white flex flex-col">
        {/* Header */}
        <header className="h-20 border-b border-slate-50 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">Project Dashboard</span>
            <div className="flex items-center gap-2 ml-4">
              <div className="w-10 h-6 rounded bg-slate-100/80" />
              <div className="w-10 h-6 rounded bg-slate-100/80" />
              <div className="w-10 h-6 rounded-md bg-blue-600 shadow-lg shadow-blue-500/20" />
            </div>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100" />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 space-y-8 overflow-hidden">
          {/* Main Monitoring Card */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xl font-bold text-slate-900">Real-time Performance</h4>
              <div className="flex items-center gap-2">
                 <div className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 flex items-center gap-2 bg-slate-50">
                    Production <ChevronDown size={14} />
                 </div>
                 <div className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 flex items-center gap-2 bg-slate-50">
                    Primary <div className="w-2 h-2 rounded-full bg-emerald-500" />
                 </div>
              </div>
            </div>

            {/* Chart Simulation */}
            <div className="relative h-48 w-full flex items-end gap-1 overflow-hidden">
               {/* Grid lines */}
               <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                  {[1,2,3].map(i => <div key={i} className="w-full h-px bg-slate-50" />)}
               </div>

               {/* Wave paths (simplified visualization) */}
               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <path 
                    d="M 0 80 Q 50 70 100 85 T 200 60 T 300 90 T 400 70" 
                    fill="none" 
                    stroke="rgba(37, 99, 235, 0.2)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 0 90 Q 50 85 100 95 T 200 80 T 300 95 T 400 85" 
                    fill="none" 
                    stroke="#2563eb" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                  
                  {/* Tooltip Simulation */}
                  <motion.circle 
                    cx="200" cy="60" r="4" fill="white" stroke="#2563eb" strokeWidth="2" 
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
               </svg>

               {/* Hover Tooltip Mock */}
               <div className="absolute top-10 left-[45%] bg-white border border-slate-100 shadow-2xl rounded-xl p-4 z-10 scale-90">
                  <span className="text-[10px] font-bold text-slate-400 block mb-2">JAN 13, 2026 8:16:34 AM</span>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-8">
                       <div className="flex items-center gap-1.5">
                          <div className="w-2 h-0.5 bg-blue-600 rounded" />
                          <span className="text-[10px] font-bold text-slate-600">CU Usage</span>
                       </div>
                       <span className="text-[10px] font-black text-slate-900">0.05</span>
                    </div>
                    <div className="flex items-center justify-between gap-8">
                       <div className="flex items-center gap-1.5">
                          <div className="w-2 h-0.5 bg-emerald-500 rounded" />
                          <span className="text-[10px] font-bold text-slate-600">RAM usage</span>
                       </div>
                       <span className="text-[10px] font-black text-slate-900">2.97 GB</span>
                    </div>
                  </div>
               </div>
            </div>

            <div className="flex gap-4">
               <div className="flex-1 p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Growth Index</span>
                  <div className="flex items-center gap-2">
                     <span className="text-2xl font-black text-slate-900">+24.8%</span>
                     <Activity size={16} className="text-emerald-500" />
                  </div>
               </div>
               <div className="flex-1 p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Active Nodes</span>
                  <div className="flex items-center gap-2">
                     <span className="text-2xl font-black text-slate-900">128</span>
                     <Zap size={16} className="text-blue-500 fill-blue-500" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sparkle/Highlight bits */}
      <div className="absolute top-1/4 -right-8 w-16 h-16 bg-blue-600 rounded-2xl shadow-2xl -rotate-12 flex items-center justify-center text-white scale-75">
        <Sparkles size={24} />
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
      active 
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
      : 'text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm'
    }`}>
      <Icon size={18} />
      <span className="text-sm font-bold tracking-tight">{label}</span>
    </div>
  );
}
