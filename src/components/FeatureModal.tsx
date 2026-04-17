"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, LucideIcon, Sparkles, CheckCircle2, TrendingUp, BarChart, Users, Zap, Shield, Globe, MessageSquare, Smartphone, Volume2, PieChart, Activity, Cpu, MousePointer2, BarChart3, LineChart, Target, Layers, Mic2, Waves } from "lucide-react";

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    title: string;
    description: string;
    icon: LucideIcon;
    slug: string;
    longDescription?: string;
    benefits?: string[];
  } | null;
}

const FeatureGraphic = ({ slug, icon: Icon }: { slug: string; icon: LucideIcon }) => {
  const themes: Record<string, string> = {
    "business-intelligence-dashboard": "from-blue-600/10 to-indigo-600/10",
    "ai-smart-analytics-engine": "from-purple-600/10 to-pink-600/10",
    "campaign-automation": "from-orange-600/10 to-red-600/10",
    "revenue-growth-insights": "from-green-600/10 to-emerald-600/10",
    "growth-simulator": "from-rose-600/10 to-purple-600/10",
    "ai-assistant": "from-cyan-600/10 to-blue-600/10",
    "mobile-app": "from-slate-600/10 to-indigo-600/10",
    "smart-scheme-generator": "from-amber-600/10 to-orange-600/10",
    "predictive-profitability-engine": "from-emerald-600/10 to-teal-600/10",
  };

  const theme = themes[slug] || "from-slate-600/10 to-slate-700/10";

  const renderVisual = () => {
    switch (slug) {
      case "business-intelligence-dashboard":
        return (
          <div className="space-y-6 w-full">
            <div className="grid grid-cols-2 gap-3">
              {[{ l: "Sales", v: "$124k" }, { l: "Traffic", v: "8.2k" }].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center">
                  <div className="text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-1">{item.l}</div>
                  <div className="text-sm font-black text-indigo-600">{item.v}</div>
                </div>
              ))}
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group">
              <div className="flex items-end gap-1.5 h-24 mb-4">
                {[30, 60, 45, 90, 70, 85, 40].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.05 }} className="flex-1 bg-indigo-500/20 rounded-t-sm relative">
                    <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }} className="absolute bottom-0 left-0 w-full bg-indigo-500 rounded-t-sm" />
                  </motion.div>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-50 flex justify-between text-[6px] font-black text-slate-300">
                <span>01 JAN</span><span>07 JAN</span><span>14 JAN</span>
              </div>
            </div>
          </div>
        );
      case "ai-smart-analytics-engine":
        return (
          <div className="w-full flex flex-col items-center justify-center gap-8">
            <div className="relative w-full aspect-square max-w-[200px] flex items-center justify-center">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-6 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-full h-full border border-purple-400 rounded-lg flex items-center justify-center">
                    <div className="w-1 h-1 bg-purple-500 rounded-full" />
                  </div>
                ))}
              </div>
              <div className="relative bg-white p-8 rounded-[2rem] shadow-2xl z-10 border border-purple-50 group">
                <Icon size={48} className="text-purple-600" />
                <motion.div animate={{ y: [-40, 40, -40] }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              </div>
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="absolute w-44 h-44 border-t-2 border-purple-500/30 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute w-52 h-52 border-b-2 border-indigo-500/30 rounded-full" />
            </div>
            <div className="w-full max-w-[180px] bg-white rounded-2xl p-4 shadow-lg border border-purple-50">
              <div className="text-[7px] font-black text-purple-400 uppercase tracking-widest mb-2">Pattern_Processing</div>
              <div className="flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3], height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }} className="flex-1 bg-purple-500 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        );
      case "campaign-automation":
        return (
          <div className="space-y-4 w-full px-4">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 overflow-hidden relative">
              <div className="text-[8px] font-black text-slate-400 mb-2 uppercase">CAMPAIGN REACH</div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "88%" }} transition={{ duration: 2 }} className="h-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                </div>
                <span className="text-[10px] font-black text-slate-700">88%</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-1 bg-slate-50 rounded-full" />)}
              </div>
            </div>
            <div className="space-y-2">
              {[{ t: "SMS Sent", c: "bg-blue-400" }, { t: "Email Opened", c: "bg-emerald-400" }].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.2 }} className="flex items-center gap-2 bg-white/60 p-2 rounded-xl backdrop-blur-sm border border-white/50">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.c}`} />
                  <span className="text-[9px] font-bold text-slate-600">{item.t}</span>
                  <div className="ml-auto text-[8px] font-black text-slate-400">2m ago</div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case "growth-simulator":
        return (
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <div className="relative w-44 h-44">
              <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                <circle cx="18" cy="18" r="16" className="text-slate-100" strokeWidth="2.5" stroke="currentColor" fill="none" />
                <motion.circle cx="18" cy="18" r="16" initial={{ strokeDasharray: "0, 100" }} animate={{ strokeDasharray: "74, 100" }} transition={{ duration: 2, ease: "easeOut" }} className="text-rose-500" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round" fill="none" />
                <motion.circle cx="18" cy="18" r="16" initial={{ strokeDasharray: "0, 100" }} animate={{ strokeDasharray: "45, 100" }} transition={{ duration: 2, delay: 0.5, ease: "easeOut" }} className="text-indigo-400/30" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round" fill="none" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-slate-800">74<span className="text-sm opacity-50">%</span></div>
                <div className="text-[7px] font-black text-rose-500 tracking-[0.2em] uppercase">Growth Prob.</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full max-w-[200px]">
              {[{ l: "Optimized", c: "text-rose-500" }, { l: "Current", c: "text-slate-400" }].map((item, i) => (
                <div key={i} className="bg-white/50 p-2 rounded-lg border border-white/80 flex items-center justify-center gap-1.5">
                  <div className={`w-1 h-1 rounded-full ${i === 0 ? "bg-rose-500" : "bg-slate-300"}`} />
                  <span className={`text-[8px] font-black ${item.c} uppercase`}>{item.l}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "ai-assistant":
        return (
          <div className="w-full space-y-8 flex flex-col items-center">
            {/* Visual Wave Form */}
            <div className="relative w-full h-32 flex items-center justify-center">
              <div className="absolute w-full h-[1px] bg-cyan-400/20" />
              <div className="flex gap-2 items-center h-full">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [20, 80, 20], opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                    className="w-1.5 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  />
                ))}
              </div>
              <div className="absolute -top-4 text-[9px] font-black text-cyan-500 tracking-[0.3em] uppercase">Processing Voice</div>
            </div>

            {/* Simulated Command Card */}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-5 rounded-[2rem] shadow-2xl border border-cyan-100 w-full max-w-[240px] relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center">
                  <Mic2 size={14} className="text-cyan-600" />
                </div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Listening...</div>
              </div>
              <div className="text-sm font-black text-slate-800 leading-tight mb-3">
                {"What's our inventory status for SKU-402 ?"}
              </div>
              <div className="h-1 lg:h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-cyan-400" />
              </div>
              {/* Background glowing circle */}
              <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-cyan-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
            </motion.div>
          </div>
        );
      case "mobile-app":
        return (
          <div className="relative w-full h-[320px] flex items-center justify-center scale-90 sm:scale-100">
            {[...Array(6)].map((_, i) => (
              <motion.div key={i} animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }} transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }} className="absolute w-2 h-2 bg-indigo-500 rounded-full" style={{ transform: `rotate(${i * 60}deg) translate(110px)` }} />
            ))}
            <div className="relative w-44 h-72 bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden scale-110">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-800 rounded-b-2xl z-20" />
              <div className="p-4 pt-10 space-y-4">
                <div className="w-full h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <div className="w-6 h-1 bg-white/20 rounded-full" />
                  </div>
                  <div className="flex items-end gap-0.5 h-10 mt-2">
                    {[20, 45, 30, 65, 40].map((h, i) => <motion.div key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: i * 0.1 }} className="flex-1 bg-white/40 rounded-t-sm origin-bottom" style={{ height: `${h}%` }} />)}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-white/10" />
                    <div className="flex-1 h-3 bg-white/10 rounded-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-white/10" />
                    <div className="flex-1 h-3 bg-white/10 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "smart-scheme-generator":
        return (
          <div className="w-full space-y-6 px-4">
            <div className="grid grid-cols-2 gap-4">
              {[{ l: "Scheme A", v: "12%", c: "bg-amber-500" }, { l: "Scheme B", v: "28%", c: "bg-indigo-500" }].map((s, i) => (
                <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.2 }} className="bg-white p-3 rounded-2xl shadow-lg border border-slate-100 relative group">
                  <div className="text-[7px] font-black text-slate-400 mb-1 uppercase tracking-widest">{s.l}</div>
                  <div className={`text-xl font-black ${i === 1 ? "text-indigo-600" : "text-amber-500"}`}>{s.v}</div>
                  {i === 1 && <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[6px] font-black px-1.5 py-0.5 rounded-full shadow-lg">OPTIMIZED</div>}
                </motion.div>
              ))}
            </div>
            <div className="bg-slate-900 p-5 rounded-[2.5rem] relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <div className="text-[8px] font-black text-slate-500 tracking-wider">PROFITABILITY_SCORE</div>
                <Target size={12} className="text-amber-400" />
              </div>
              <div className="h-4 w-full bg-slate-800 rounded-full p-1 relative">
                <motion.div initial={{ width: 0 }} animate={{ width: "92%" }} transition={{ duration: 2 }} className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]" />
                <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute -right-2 top-0 text-[8px] font-black text-amber-400">92%</motion.div>
              </div>
            </div>
          </div>
        );
      case "predictive-profitability-engine":
        return (
          <div className="w-full space-y-6 px-4">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[9px] font-black text-slate-400 mb-1 uppercase tracking-widest">Projection_H1</div>
                  <div className="text-3xl font-black text-teal-600">$1.4M</div>
                </div>
                <div className="bg-teal-50 px-2 py-1 rounded-lg text-[9px] font-black text-teal-600 border border-teal-100">+14% YoY</div>
              </div>
              <div className="relative h-28 w-full">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  <motion.path d="M0,35 Q20,30 40,25 T80,15 T100,5 L100,25 Q80,35 60,38 T20,40 T0,35 Z" className="text-teal-400/10" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
                  <motion.path d="M0,38 Q20,33 40,28 T80,18 T100,8" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-teal-500" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
                  <motion.circle cx="100" cy="8" r="2.5" className="text-teal-600" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }} />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[6px] font-black text-slate-300 uppercase tracking-tighter">
                  <span>30 Days</span><span>60 Days</span><span>90 Days Outlook</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "revenue-growth-insights":
        return (
          <div className="w-full space-y-5 px-4">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 relative overflow-hidden group">
              <div className="text-[9px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Growth Velocity</div>
              <div className="flex items-baseline gap-2 mb-4">
                <div className="text-5xl font-black text-emerald-500 tracking-tighter">+25.4%</div>
                <TrendingUp size={24} className="text-emerald-500 animate-bounce" />
              </div>
              <div className="h-20 flex items-end gap-1.5 opacity-20">
                {[20, 40, 30, 60, 50, 80, 70, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-emerald-500 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
              <motion.div initial={{ x: -300 }} animate={{ x: 300 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[{ l: "AOV INCREASE", v: "+12%" }, { l: "LTV UPLIFT", v: "+18%" }].map((item, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm p-3 rounded-2xl border border-white/50">
                  <div className="text-[7px] font-black text-slate-400 uppercase mb-1">{item.l}</div>
                  <div className="text-xs font-black text-slate-800">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6 w-full flex flex-col items-center">
            <div className="bg-white p-8 rounded-full shadow-2xl relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping opacity-20" />
              <Icon size={56} className="text-indigo-600 relative z-10" />
            </div>
            <div className="w-full max-w-[200px] space-y-2">
              <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5 }} className="h-full bg-indigo-500" />
              </div>
              <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} transition={{ duration: 1.5, delay: 0.3 }} className="h-full bg-purple-500" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 lg:p-12 overflow-hidden bg-slate-50/50">
      <div className={`absolute inset-0 bg-gradient-to-br ${theme} opacity-40`} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="relative w-full max-w-[300px] z-10">
        {renderVisual()}
      </div>
    </div>
  );
};

export const FeatureModal = ({ isOpen, onClose, feature }: FeatureModalProps) => {
  if (!feature) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-2xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-5xl lg:max-w-6xl 4xl:max-w-7xl bg-white rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row max-h-[90vh] lg:max-h-[85vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-slate-50/80 backdrop-blur-md shadow-sm border border-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all hover:scale-110 active:scale-90"
            >
              <X size={24} />
            </button>

            {/* Content Side */}
            <div className="p-8 sm:p-12 lg:p-16 flex-1 overflow-y-auto custom-scrollbar">
              <div className="flex items-center space-x-3 mb-12">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-[1.25rem] flex items-center justify-center shadow-2xl shadow-purple-500/30">
                  <feature.icon size={28} />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-[1.05]">
                {feature.title}
              </h2>

              <p className="text-slate-500 text-lg sm:text-xl leading-relaxed mb-12 font-medium">
                {feature.longDescription || feature.description}
              </p>

              {feature.benefits && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-md group">
                      <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                        <CheckCircle2 className="text-purple-600 group-hover:text-white transition-colors" size={14} />
                      </div>
                      <span className="text-slate-700 font-bold text-sm tracking-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-4">
                <button className="w-full bg-[#4112e0] hover:bg-indigo-700 text-white px-10 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group">
                  <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
                  <span>Explore Feature</span>
                </button>
              </div>
            </div>

            {/* Graphic Side */}
            <div className="hidden md:block w-5/12 bg-slate-50 relative overflow-hidden border-l border-slate-100 bg-white">
              <FeatureGraphic slug={feature.slug} icon={feature.icon} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
