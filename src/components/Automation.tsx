"use client";

import { motion } from "framer-motion";
import { Zap, Mail, MessageSquare, Phone, Repeat, Clock } from "lucide-react";
import Container from "./Container";

const workflows = [
  { icon: Mail, title: "Lapsed Customer Win-back", trigger: "Customer hasn't purchased in 60 days", action: "Send personalized discount via Email" },
  { icon: MessageSquare, title: "High Value Alert", trigger: "Purchase over $500", action: "Trigger WhatsApp concierge welcome" },
  { icon: Repeat, title: "Subscription Upsell", trigger: "3rd repeat purchase", action: "Offer subscription discount" },
];

export default function Automation() {
  return (
    <section className="bg-slate-50 section-padding">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">Automation Engine</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Zero Manual Effort. <span className="gradient-text">Maximum Impact.</span></h3>
          <p className="text-lg text-slate-600">
            Set it and forget it. Tapito's automation engine works 24/7 to engage customers, recover carts, and drive repeat sales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {workflows.map((flow, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <flow.icon size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{flow.title}</h4>
                </div>
                <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock size={14} />
                      <span className="font-semibold uppercase text-[10px] tracking-wider text-slate-400">Trigger:</span>
                      {flow.trigger}
                   </div>
                   <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                      <Zap size={14} className="fill-blue-600" />
                      <span className="font-semibold uppercase text-[10px] tracking-wider text-blue-400">Action:</span>
                      {flow.action}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-square bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 flex items-center justify-center p-12">
               <div className="w-full h-full relative">
                  {/* Visual representation of a flow builder */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white z-10">
                     <Zap size={32} />
                  </div>
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-100" />
                  
                  <div className="absolute top-1/2 left-0 w-full flex justify-between px-4">
                     <div className="w-12 h-12 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center animate-bounce" style={{ animationDuration: "3s" }}>
                        <Mail className="text-blue-500" />
                     </div>
                     <div className="w-12 h-12 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
                        <MessageSquare className="text-green-500" />
                     </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 p-4 rounded-2xl bg-slate-900 text-white text-center shadow-2xl">
                     <span className="text-xs font-bold block mb-1">Conversion Rate</span>
                     <span className="text-2xl font-bold text-emerald-400">+28.4%</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
