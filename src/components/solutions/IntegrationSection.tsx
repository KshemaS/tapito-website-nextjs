"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight,
  Database,
  Globe,
  MessageSquare,
  Share2,
  Zap,
  Cpu,
  Target,
  Smartphone
} from "lucide-react";
import Container from "../Container";
import { cn } from "@/lib/utils";
import { InteractiveGrid } from "../InteractiveGrid";

const integrationLogos = [
  { icon: Globe, label: "Shopify", color: "text-emerald-500" },
  { icon: Share2, label: "Salesforce", color: "text-blue-400" },
  { icon: Database, label: "Snowflake", color: "text-blue-500" },
  { icon: Zap, label: "Segment", color: "text-emerald-600" },
  { icon: MessageSquare, label: "Twilio", color: "text-rose-500" },
  { icon: Cpu, label: "AWS", color: "text-orange-500" },
  { icon: Target, label: "HubSpot", color: "text-orange-600" },
  { icon: Zap, label: "Braze", color: "text-indigo-500" },
  { icon: Smartphone, label: "Firebase", color: "text-amber-500" },
  { icon: CheckCircle2, label: "Slack", color: "text-green-500" },
];

export const IntegrationSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <InteractiveGrid />
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black tracking-[0.4em] uppercase text-[#09358c] mb-6 block">CONNECTIVITY HUB</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
            Seamlessly Integrate <br /> <span className="text-[#09358c]">With Your Tech Stack</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto leading-relaxed">
            Tapito isn't a walled garden. Our enterprise-grade API and native connectors ensure your growth engine is powered by your existing data universe.
          </p>
        </div>

        {/* Horizontal Marquee Container */}
        <div className="relative mt-24">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex overflow-hidden">
             {/* Marquee Row 1 */}
             <motion.div 
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="flex gap-12 items-center flex-nowrap"
             >
               {[...integrationLogos, ...integrationLogos].map((item, i) => (
                 <LogoItem key={i} icon={item.icon} label={item.label} color={item.color} />
               ))}
             </motion.div>
          </div>
          
          <div className="flex overflow-hidden mt-12">
             {/* Marquee Row 2 (Reverse) */}
             <motion.div 
               animate={{ x: ["-50%", "0%"] }}
               transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
               className="flex gap-12 items-center flex-nowrap"
             >
               {[...integrationLogos, ...integrationLogos].map((item, i) => (
                 <LogoItem key={i} icon={item.icon} label={item.label} color={item.color} />
               ))}
             </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const LogoItem = ({ icon: Icon, label, color }: any) => (
  <div className="flex items-center gap-4 bg-slate-50 px-10 py-6 rounded-[2rem] border border-slate-100 group hover:border-blue-200 transition-all cursor-default min-w-[240px]">
    <div className={cn("w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110", color)}>
      <Icon size={28} />
    </div>
    <span className="text-sm font-black text-slate-400 group-hover:text-slate-900 uppercase tracking-widest transition-colors font-medium">{label}</span>
  </div>
);
