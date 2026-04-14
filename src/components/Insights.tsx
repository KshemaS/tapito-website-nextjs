"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Gift, Lightbulb, Target, ArrowRight, ShieldCheck, Zap, Activity, Sparkles } from "lucide-react";
import Container from "./Container";

const Item = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex gap-6 p-8 rounded-[32px] hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group border border-transparent hover:border-blue-100"
  >
    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
      <Icon size={32} />
    </div>
    <div>
      <h4 className="text-2xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-500 leading-relaxed text-lg">{desc}</p>
    </div>
  </motion.div>
);

export default function Insights() {
  return (
    <section className="bg-slate-50 pb-[60px] lg:pb-[80px] 2xl:pb-[100px] 4xl:pb-[120px] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 blur-[100px] rounded-full" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-48">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold mb-8"
            >
              <ShieldCheck size={14} />
              PRECISION ANALYTICS
            </motion.div>

            <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1]">
              Operational <br /> <span className="gradient-text">Excellence.</span>
            </h3>

            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl">
              Understand the DNA of your business. We provide the granular insights needed to optimize every shift, every product, and every dollar.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <Item icon={Activity} title="Health Score" desc="A composite index monitoring the operational vitality of your stores, from inventory flow to personnel efficiency." delay={0} />
              <Item icon={TrendingUp} title="Growth Simulation" desc="Predictive forecasting that models expansion scenarios, allowing you to visualize ROI before a single dollar is spent." delay={0.1} />
              <Item icon={Sparkles} title="Incentive Stimulation" desc="Neural-network driven rewards that automatically identify and motivate high-impact behaviors across your network." delay={0.2} />
            </div>
          </div>

          <div className="relative sticky top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 p-12"
            >
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h5 className="text-2xl font-black text-slate-900">Efficiency Report</h5>
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">Q4 PERFORMANCE DATA</span>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100">
                  <Zap size={24} />
                </div>
              </div>

              <div className="space-y-10">
                {[
                  { name: "Downtown Branch", val: 94, trend: "+5.2%", color: "bg-blue-600" },
                  { name: "Westside Mall", val: 82, trend: "-1.4%", color: "bg-indigo-400" },
                  { name: "Airport Retail", val: 98, trend: "+12.8%", color: "bg-purple-600" },
                ].map((staff, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-lg font-bold text-slate-800">{staff.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-slate-400">{staff.val}%</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${staff.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                          {staff.trend}
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-3 bg-slate-50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${staff.val}%` }}
                        transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                        className={`h-full ${staff.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-6 rounded-3xl bg-slate-900 text-white flex items-center justify-between group cursor-pointer hover:bg-blue-600 transition-colors duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Lightbulb size={20} className="text-blue-400" />
                  </div>
                  <span className="font-bold">Generate Insight Report</span>
                </div>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* Moving badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-6 rounded-3xl shadow-2xl z-20"
            >
              <span className="text-sm font-bold block mb-1">AI Recommendation</span>
              <span className="text-2xl font-black">Re-order Ready</span>
            </motion.div>
          </div>
        </div>

        {/* Strategy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-[48px] opacity-20 blur-2xl -z-10" />
            <div className="bg-slate-900 rounded-[48px] p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-600/40 transition-colors duration-1000" />

              <h5 className="text-blue-400 font-black uppercase text-xs tracking-widest mb-10 flex items-center gap-2">
                <Lightbulb size={18} />
                AI-DRIVEN STRATEGY RECOMMENDATIONS
              </h5>

              <div className="space-y-6">
                {[
                  "Basket size for Category-C is peaking at 2PM. Recommend flash-sales for Category-B bundles.",
                  "Active churn risk detected for 1,240 Silver Members. Deploying Loyalty-Retention automated SMS.",
                  "Regional trend observed: High-efficiency lighting demand up 40%. Restock recommended.",
                ].map((rec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 flex gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0 animate-pulse" />
                    <p className="text-slate-300 leading-relaxed font-medium">{rec}</p>
                  </motion.div>
                ))}
              </div>

              <button className="mt-12 w-full py-5 bg-blue-600 text-white rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-blue-500 transition-colors shadow-xl shadow-blue-600/20">
                Apply Automated Adjustments
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-bold mb-8"
            >
              <Target size={14} />
              STRATEGIC GROWTH
            </motion.div>

            <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1]">
              Growth on <br /> <span className="gradient-text">Autopilot.</span>
            </h3>

            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl">
              Don't manually search for growth. Our engine proactively identifies opportunities and presents them with a one-click apply logic.
            </p>

            <div className="flex gap-4">
              <button className="btn-premium">Explore Strategies</button>
              <button className="btn-secondary px-8 py-4 rounded-full font-bold">Case Studies</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
