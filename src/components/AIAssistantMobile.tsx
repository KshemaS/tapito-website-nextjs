"use client";

import { motion } from "framer-motion";
import { Bot, Search, Sparkles, Database, Zap, TrendingUp, Users, Package } from "lucide-react";
import Container from "./Container";
import { cn } from "@/lib/utils";

const queries = [
  { 
    text: "What was my revenue this month?", 
    icon: Database,
    result: {
      label: "Total Revenue",
      value: "$142,500",
      trend: "+12.4%",
      isPositive: true,
    }
  },
  { 
    text: "Which store is underperforming?", 
    icon: Search,
    result: {
      label: "Lowest Efficiency",
      value: "Downtown Wing",
      trend: "-4.2%",
      isPositive: false,
    }
  },
  { 
    text: "Who are my top 1% customers?", 
    icon: Users,
    result: {
      label: "Loyalty Segment",
      value: "842 Patrons",
      trend: "+8.1%",
      isPositive: true,
    }
  },
  { 
    text: "Predict next week's inventory.", 
    icon: Package,
    result: {
      label: "Stock Forecast",
      value: "+15% Needed",
      trend: "+25.0%",
      isPositive: true,
    }
  },
];

const AICard = ({ q, index }: { q: typeof queries[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 rounded-[24px] bg-slate-800/40 border border-white/10 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
          <q.icon size={24} />
        </div>
        <div className="space-y-1">
          <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest block">QUERY ENGINE</span>
          <h4 className="text-white font-bold leading-tight line-clamp-2 text-[20px]">{q.text}</h4>
        </div>
      </div>

      <div className="bg-white/5 rounded-2xl p-5 border border-white/5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <Bot size={14} />
          </div>
          <span className="text-xs text-slate-400 font-medium">Assistant Answer</span>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider block mb-1">{q.result.label}</span>
            <span className="text-xl font-black text-white">{q.result.value}</span>
          </div>
          <div className={cn("text-xs font-bold flex items-center gap-1 px-2 py-1 rounded-full", q.result.isPositive ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10")}>
            {q.result.isPositive ? <Zap size={12} /> : <TrendingUp className="rotate-180" size={12} />}
            {q.result.trend}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AIAssistantMobile() {
  return (
    <div className="lg:hidden block bg-slate-900 py-16 relative overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(37,99,235,0.08),transparent)]" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full" />

      <Container>
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-widest uppercase mb-4"
          >
            <Sparkles size={14} />
            ARTIFICIAL INTELLIGENCE
          </motion.div>
          <h3 className="text-4xl font-black text-white leading-tight">
            Talk to Your <br /> <span className="text-blue-500">Business.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {queries.map((q, i) => (
            <AICard key={i} q={q} index={i} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 p-5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[24px] text-white overflow-hidden relative shadow-xl shadow-blue-900/20"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Zap size={24} />
            </div>
            <div>
              <span className="text-white/70 text-[10px] font-bold block mb-1 uppercase tracking-widest">Growth Engine</span>
              <span className="text-white font-black">AOV +15.5% with Tapito AI</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
