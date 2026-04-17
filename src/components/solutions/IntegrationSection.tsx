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
  Cpu
} from "lucide-react";
import Container from "../Container";

const integrationCategories = [
  {
    title: "E-commerce Platforms",
    desc: "Direct connectors for the world's leading commerce engines.",
    icons: ["Shopify", "Magento", "BigCommerce", "Salesforce"]
  },
  {
    title: "Data & Analytics",
    desc: "Unify your customer profiles across every data warehouse.",
    icons: ["Snowflake", "Segment", "Google", "AWS"]
  },
  {
    title: "Marketing & CRM",
    desc: "Sync segments and triggers with your existing tools.",
    icons: ["HubSpot", "Twilio", "Intercom", "Braze"]
  }
];

export const IntegrationSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Column: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-black tracking-[0.4em] uppercase text-[#09358c] mb-6 block">CONNECTIVITY HUB</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                Seamlessly Integrate <br /> <span className="text-[#09358c]">With Your Tech Stack</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
                Tapito isn't a walled garden. Our enterprise-grade API and native connectors ensure your growth engine is powered by your existing data universe.
              </p>

              <div className="space-y-6">
                {[
                  "One-click native connectors",
                  "Unified SDK for Web and Mobile",
                  "High-throughput REST & GraphQL APIs",
                  "Bi-directional data synchronization"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-900 group">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#09358c] group-hover:bg-[#09358c] group-hover:text-white transition-colors">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-lg font-black tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-12 bg-[#09358c] text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#05a0ec] transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center gap-4">
                View All Integrations <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual Connectivity Hub */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square flex items-center justify-center">
              
              {/* Central Tapito Node */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-[#09358c] rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl relative z-20 overflow-hidden">
                   <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                   >
                    <Zap size={60} fill="white" />
                   </motion.div>
                   <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>

              {/* Orbiting Ring 1 */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-slate-100 rounded-full"
              />

              {/* Orbiting Ring 2 */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border border-slate-50 rounded-full"
              />

              {/* Integration Nodes */}
              {[
                { icon: Database, label: "Snowflake", delay: 0, pos: "top-0 left-1/2 -translate-x-1/2" },
                { icon: Globe, label: "Shopify", delay: 1, pos: "right-0 top-1/2 -translate-y-1/2" },
                { icon: MessageSquare, label: "Twilio", delay: 2, pos: "bottom-0 left-1/2 -translate-x-1/2" },
                { icon: Share2, label: "Salesforce", delay: 3, pos: "left-0 top-1/2 -translate-y-1/2" },
                { icon: Cpu, label: "AWS", delay: 1.5, pos: "top-1/4 right-1/4" },
                { icon: Zap, label: "Segment", delay: 2.5, pos: "bottom-1/4 left-1/4" }
              ].map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`absolute ${node.pos} w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl shadow-xl border border-slate-50 flex flex-col items-center justify-center gap-2 group hover:border-[#09358c] transition-colors z-30`}
                >
                    <div className="text-slate-400 group-hover:text-[#09358c] transition-colors">
                        <node.icon size={28} />
                    </div>
                    <span className="text-[9px] font-black uppercase text-slate-400 group-hover:text-slate-900 tracking-tighter">{node.label}</span>
                </motion.div>
              ))}

              {/* Connection Particles (Abstract) */}
              <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        x: [0, (Math.random() - 0.5) * 400],
                        y: [0, (Math.random() - 0.5) * 400],
                      }}
                      transition={{ 
                        duration: 3 + Math.random() * 2, 
                        repeat: Infinity, 
                        delay: Math.random() * 5 
                      }}
                      className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
