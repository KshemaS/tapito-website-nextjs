import React from "react";
import Container from "../Container";
import { motion } from "framer-motion";
import { Layers, TrendingUp, Zap } from "lucide-react";

type Props = {
    data: {
        features: {
            title: string;
            desc: string;
            icon: any;
        }[];
    };
}
const Capabilities = ({ data }: Props) => {
    return (
        <section className="section-padding bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-xs font-black tracking-[0.3em] uppercase text-[#09358c] mb-6 block">CORE CAPABILITIES</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">Advanced Logic for <br /> <span className="text-[#09358c]">Absolute Growth</span></h2>

              <div className="space-y-16 mt-16 relative">
                {data.features.map((feature: any, i: number) => (
                  <div key={i} className="flex gap-8 group relative z-10">

                    <div className="relative">
                      <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#09358c] text-white flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform relative z-10">
                        <feature.icon size={26} />
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-slate-200 text-[10px] font-black flex items-center justify-center text-[#09358c] shadow-sm z-20">
                        {i + 1}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-[#09358c] transition-colors">{feature.title}</h4>
                      <p className="text-lg text-slate-500 leading-relaxed max-w-md">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative min-h-[600px] flex items-center justify-center">
              {/* Flowchart Container */}
              <div className="grid grid-cols-1 gap-12 w-full max-w-sm relative py-12">
                
                {/* Connector Lines */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 z-0 hidden md:block" />

                {/* Step 1: Data Source */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 z-10 group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Layers size={28} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Step 01: Ingestion</div>
                      <h4 className="text-xl font-black text-slate-900">Multi-channel Data</h4>
                    </div>
                  </div>
                  {/* Pulse Effect */}
                  <motion.div 
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-blue-600 to-transparent z-0"
                    animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Step 2: The Logic Engine */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative bg-[#09358c] p-10 rounded-[3rem] border border-white/10 shadow-2xl shadow-blue-900/40 z-10 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mb-6"
                    >
                      <Zap size={40} />
                    </motion.div>
                    <div className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-2">The Engine</div>
                    <h4 className="text-2xl font-black text-white mb-4">Tapito AI Logic</h4>
                    <p className="text-blue-100/70 text-sm font-medium leading-relaxed">Synthesis of RFM, LTV, and behavioral patterns in real-time.</p>
                  </div>
                  {/* Pulse Effect */}
                  <motion.div 
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-blue-600 to-transparent z-0"
                    animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </motion.div>

                {/* Step 3: Result */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 z-10 group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <TrendingUp size={28} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Step 03: Output</div>
                      <h4 className="text-xl font-black text-slate-900">Absolute Growth</h4>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Background Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 blur-[100px] -z-10" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
};
export default Capabilities;