"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Mic,
  Play,
  Quote,
  Sparkles,
  Waves,
} from "lucide-react";
import { featuresData } from "@/components/features/FeaturesGrid";
import Container from "@/components/Container";
import { InteractiveGrid } from "@/components/InteractiveGrid";

import { ExploreMoreFeatures } from "@/components/features/ExploreMoreFeatures";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
} as any);

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
} as any;

const cardHover = {
  whileHover: { 
    y: -8, 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" } 
  },
} as any;

const revealVariant = {
  initial: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
  whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1, delay: 0.2, ease: "easeOut" },
} as any;

const bubbleVariant = (side: "left" | "right") => ({
  initial: { opacity: 0, x: side === "left" ? -30 : 30, scale: 0.9 },
  whileInView: { opacity: 1, x: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
} as any);

export default function AIAssistantPage() {
  const feature = featuresData.find(f => f.slug === "ai-assistant");
  if (!feature) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 selection:bg-purple-100 selection:text-purple-900 font-inter">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_38%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.13),transparent_25%)]" />

      <section className="relative py-20 lg:py-30">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-700 shadow-sm">
                <Mic size={14} className="animate-pulse" /> Conversational interface preview
              </motion.div>
              <motion.h1 {...fadeUp(0.08)} className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-slate-950 lg:text-7xl">
                Ask Your Business Anything.
              </motion.h1>
              <motion.p {...fadeUp(0.16)} className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-600 lg:text-xl">
                Turn everyday business questions into instant answers through voice and chat so insight reaches every manager, not just the analytics team.
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/enterprise" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-base font-black text-white shadow-[0_22px_60px_-18px_rgba(124,58,237,0.55)] transition-all hover:scale-[1.05] hover:shadow-[0_25px_70px_-15px_rgba(124,58,237,0.65)]">
                  <Play size={16} fill="currentColor" className="transition-transform group-hover:rotate-12" /> Book a Demo
                </Link>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">Retail intelligence via</span>
                  <span className="text-xs font-black uppercase tracking-widest text-purple-600">Voice • Chat • Analysis</span>
                </div>
              </motion.div>
            </div>

            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.3 }} className="rounded-[3rem] border border-slate-800 bg-slate-950 p-6 shadow-[0_50px_130px_-60px_rgba(15,23,42,0.95)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
              
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 relative z-10 transition-colors group-hover:bg-white/10">
                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-500/30"><Bot size={22} /></motion.div>
                  <div>
                    <p className="text-sm font-black text-white">Tapito Assistant</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Context active</p>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.1 }} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white cursor-pointer hover:bg-white/20 transition-all"><Mic size={20} /></motion.div>
              </div>

              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-8 space-y-5 relative z-10">
                <motion.div variants={bubbleVariant("left")} className="max-w-[85%] rounded-[2rem] rounded-tl-md bg-white/8 p-5 text-base font-medium leading-relaxed text-slate-200 border border-white/5">
                  Good morning. Yesterday revenue closed at <span className="font-black text-white">Rs 14.5L</span>, up 8%. Want the strongest category and branch summary?
                </motion.div>
                <motion.div variants={bubbleVariant("right")} className="ml-auto max-w-[80%] rounded-[2rem] rounded-tr-md bg-gradient-to-r from-purple-600 to-indigo-600 p-5 text-base font-black leading-relaxed text-white shadow-xl shadow-purple-500/20">
                  Yes. Also tell me which branch had the highest GP margin.
                </motion.div>
                <motion.div variants={bubbleVariant("left")} className="max-w-[90%] rounded-[2rem] rounded-tl-md bg-white/8 p-6 border border-white/5 shadow-inner">
                  <p className="text-base font-medium leading-relaxed text-slate-200">Top product: <span className="font-black text-white">Silk Cotton Saree</span>.</p>
                  <p className="mt-1 text-base font-medium text-slate-200 font-inter">Best margin: <span className="font-black text-emerald-400">Sector 7 at 22.4%</span>.</p>
                  <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-5 group/card hover:bg-slate-800 transition-colors">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400/80">Contextual Insight Card</p>
                    <div className="mt-4 flex items-center justify-between text-sm font-black text-white">
                      <span>Network average GP</span>
                      <span className="text-emerald-400">+4.2% shift</span>
                    </div>
                    <div className="mt-3 h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "72%" }} transition={{ duration: 1.5, delay: 1.2, ease: "circOut" }} className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-purple-500 to-indigo-500" />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 relative z-10 transition-colors hover:bg-white/10 cursor-pointer group/mic">
                <div className="flex items-center justify-between gap-6 px-2">
                  <span className="text-sm font-bold text-slate-400 group-hover/mic:text-slate-200 transition-colors">"Tell me more about Central Hub store..."</span>
                  <div className="flex items-end gap-1.5 h-6">
                    {[12, 22, 34, 18, 12, 26, 14].map((height, index) => (
                      <motion.span key={index} animate={{ height: [height, height * 1.5, height] }} transition={{ duration: 0.8 + index * 0.1, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 rounded-full bg-purple-500 opacity-60 group-hover/mic:opacity-100 transition-opacity" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-24">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
            {[["Business problem", "Critical answers stay trapped behind dashboards, filters, and people who know how to navigate them.", "text-rose-500"], ["What Tapito detects", "Tapito detects intent, business context, and follow-up meaning inside voice or chat questions.", "text-purple-600"], ["What action it enables", "Anyone can get live business intelligence instantly, even while moving through the store floor.", "text-emerald-600"]].map(([title, text, tone], index) => (
              <motion.div key={title} {...fadeUp(index * 0.1)} {...cardHover} className={`rounded-[2.5rem] border bg-white p-10 group transition-all ${index === 1 ? "border-purple-200 shadow-[0_40px_90px_-50px_rgba(124,58,237,0.5)]" : "border-slate-200 hover:border-purple-200"}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${tone}`}>{title}</p>
                <p className="mt-5 text-xl font-black leading-9 text-slate-950">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-24 relative overflow-hidden font-inter">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.03),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">How it works</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 lg:text-5xl">A strategist in your pocket.</motion.h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-center">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-6">
              {[["01", "Ask naturally", "Speak or type the same way you would ask an analyst or lead."], ["02", "Interpret context", "Tapito understands retail language, time windows, and follow-up chains."], ["03", "Respond with move", "Answers include the metric, the shift, and the suggested next move."]].map(([step, title, text], index) => (
                <motion.div key={step} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[2rem] border border-slate-200 bg-white p-8 group hover:bg-slate-50 transition-colors h-full">
                  <div className="flex items-start gap-6">
                    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-base font-black text-white group-hover:bg-purple-600 transition-colors shadow-lg">{step}</motion.div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-950 group-hover:text-purple-700 transition-colors">{title}</h3>
                      <p className="mt-3 text-base font-medium leading-8 text-slate-600 font-inter">{text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.16 }} className="rounded-[3.5rem] border border-purple-200 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/50 p-10 lg:p-14 relative group">
              <div className="absolute inset-0 bg-white/40 pointer-events-none rounded-[3.5rem]" />
              <div className="grid gap-6 md:grid-cols-2 relative z-10">
                <motion.div {...fadeUp(0.6)} {...cardHover} className="luminous-card-dark rounded-[2rem] border border-slate-800 bg-slate-950 p-8 shadow-xl group/card">
                   <div className="flex items-center justify-between">
                     <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-400">Voice layer</p>
                     <Waves size={22} className="text-purple-400 group-hover/card:scale-110 transition-transform" />
                   </div>
                   <div className="mt-8 px-4 py-5 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden text-white/90 font-black group-hover/card:border-purple-500/30 transition-colors">
                     "What changed in Central Hub?"
                     <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                   </div>
                </motion.div>
                <motion.div {...fadeUp(0.7)} {...cardHover} className="luminous-card luminous-surface-strong rounded-[2rem] border border-purple-100 bg-white p-8 shadow-sm group/card">
                   <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Memory depth</p>
                   <div className="mt-8 space-y-3 opacity-80 group-hover/card:opacity-100 transition-opacity">
                     {["GP margin trend...", "Comparison vs Last Yr...", "Specific SKU impact..."].map(q => (
                       <div key={q} className="px-4 py-3 rounded-xl bg-purple-50 border border-purple-100/50 text-xs font-bold text-slate-600 hover:bg-white transition-colors cursor-pointer">{q}</div>
                     ))}
                   </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

   
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(168,85,247,0.02),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 text-center">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">Business impact</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 lg:text-5xl">Insight that moves as fast as you do.</motion.h2>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-8 md:grid-cols-3">
            {[["<2s", "Decision speed", "Average response for complex retail queries"], ["+100%", "Data adoption", "Teams using data to make floor-level decisions"], ["-90%", "Reporting burden", "Zero time spent building manual spreadsheets"]].map(([value, label, note], index) => (
              <motion.div key={label} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[3rem] border border-slate-200 bg-white p-12 text-center group hover:bg-purple-50/30 transition-all shadow-sm">
                <motion.p animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-6xl font-black tracking-tight text-purple-700 transition-transform group-hover:scale-110">{value}</motion.p>
                <p className="mt-8 text-2xl font-black text-slate-950">{label}</p>
                <p className="mt-4 text-sm font-medium leading-8 text-slate-500 max-w-[200px] mx-auto opacity-70 italic">"{note}"</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>



      <section className="py-24">
        <Container>
          <motion.div {...fadeUp()} className="mb-14 text-center"><h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 font-outfit uppercase tracking-tight">What Happens After You Enable This Feature?</h2></motion.div>
          <div className="grid overflow-hidden rounded-[3.5rem] border border-slate-200 shadow-[0_50px_140px_-60px_rgba(15,23,42,0.4)] md:grid-cols-2 relative h-full">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white p-12 lg:p-20 relative overflow-hidden group">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 relative z-10">Before Tapito Assistant</p>
              <div className="mt-12 space-y-8 text-2xl font-bold text-slate-400 relative z-10">
                <p className="flex items-center gap-4 opacity-70">Hunting for charts</p>
                <p className="flex items-center gap-4 opacity-60">Exporting manual Excels</p>
                <p className="flex items-center gap-4 opacity-70">Waiting for data analysts</p>
                <p className="flex items-center gap-4 opacity-60">Insight lag between stores</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-slate-950 p-12 lg:p-20 text-white relative h-full group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)] pointer-events-none" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-purple-300 relative z-10">After Tapito Assistant</p>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-12 space-y-8 text-2xl font-black relative z-10">
                {["Voice query everything", "Instant business answers", "Total floor mobility", "Decision-ready brief"].map((item) => (
                  <motion.div key={item} variants={{ initial: { x: 40, opacity: 0 }, whileInView: { x: 0, opacity: 1 } }} transition={{ duration: 0.6 }} className="flex items-center gap-6 hover:translate-x-3 transition-transform cursor-default"><CheckCircle2 size={32} className="text-emerald-400" />{item}</motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {feature.quote && (
        <section className="py-16">
          <Container>
            <motion.div
              {...fadeUp(0)}
              className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2.5rem] p-10 md:p-14 lg:p-20 relative overflow-hidden"
            >
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3" />

              <div className="relative z-10 max-w-3xl">
                <Quote size={48} className="text-white/20 mb-6" />
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-8">
                  {feature.quote.text}
                </blockquote>
                <p className="text-purple-200 font-bold text-base">
                  — {feature.quote.author}
                </p>
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      <ExploreMoreFeatures currentSlug="ai-assistant" />
    </div>
  );
}

