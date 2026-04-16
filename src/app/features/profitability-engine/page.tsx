"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Play,
  Sparkles,
  TrendingUp,
  Quote,
  TrendingDown,
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
  whileInView: { transition: { staggerChildren: 0.1 } },
} as any;

const cardHover = {
  whileHover: { 
    y: -10, 
    scale: 1.02,
    transition: { duration: 0.4, ease: "easeOut" } 
  },
} as any;

const revealVariant = {
  initial: { opacity: 0, scale: 0.94, filter: "blur(10px)" },
  whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1, delay: 0.2, ease: "easeOut" },
} as any;

export default function ProfitabilityEnginePage() {
  const feature = featuresData.find(f => f.slug === "profitability-engine");
  if (!feature) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 selection:bg-purple-100 selection:text-purple-900 font-inter">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_38%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_24%)]" />

      <section className="relative py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-700">
                <BarChart3 size={14} /> Forecast intelligence panel
              </motion.div>
              <motion.h1 {...fadeUp(0.08)} className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-slate-950 lg:text-7xl">
                Predict Profit Before You Invest.
              </motion.h1>
              <motion.p {...fadeUp(0.16)} className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-600 lg:text-xl">
                Use forward-looking margin forecasts and scenario comparisons to plan inventory, pricing, and spend before profit risk shows up in the books.
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/enterprise" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-base font-black text-white shadow-[0_22px_60px_-18px_rgba(124,58,237,0.55)] transition-all hover:scale-[1.05] hover:shadow-[0_25px_70px_-15px_rgba(124,58,237,0.65)]">
                  <Play size={16} fill="currentColor" className="transition-transform group-hover:scale-110" /> 
                  Book a Demo
                </Link>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">Forward profit modeling</span>
                  <span className="text-xs font-black uppercase tracking-widest text-purple-600">Simulate before spending</span>
                </div>
              </motion.div>
            </div>

            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.3 }} className="rounded-[3rem] border border-slate-800 bg-slate-950 p-6 shadow-[0_50px_130px_-60px_rgba(15,23,42,0.95)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[90px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white relative z-10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-300">Profitability forecast engine</p>
                  <p className="mt-1 text-sm font-bold">Q3 outlook finalized</p>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] soft-shine">
                  96% confidence
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 relative z-10 transition-colors group-hover:bg-white/8 group-hover:border-white/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between text-white relative z-10">
                  <p className="text-sm font-black">Future margin corridor</p>
                  <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Next 12 weeks</p>
                  </motion.div>
                </div>
                <div className="mt-8 h-56 relative z-10">
                  <svg viewBox="0 0 420 220" className="h-full w-full drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <defs>
                      <linearGradient id="profitArea" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="rgba(168,85,247,0.5)" />
                        <stop offset="100%" stopColor="rgba(168,85,247,0)" />
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d="M10 180 C70 170, 90 145, 150 138 S250 115, 320 92 S380 55, 410 45" 
                      fill="none" 
                      stroke="rgba(216,180,254,1)" 
                      strokeWidth="5" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }} 
                      whileInView={{ pathLength: 1 }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 1.8, ease: "circOut" }} 
                    />
                    <motion.path 
                      d="M10 180 C70 170, 90 145, 150 138 S250 115, 320 92 S380 55, 410 45 L410 220 L10 220 Z" 
                      fill="url(#profitArea)" 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 1 }}
                    />
                    <motion.circle 
                      cx="410" cy="45" r="8" fill="#d8b4fe" 
                      initial={{ scale: 0 }} 
                      whileInView={{ scale: [0, 1.5, 1] }} 
                      transition={{ delay: 1.8, duration: 0.5 }}
                      className="shadow-xl"
                    />
                  </svg>
                </div>
              </div>

              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-6 grid gap-4 md:grid-cols-3 relative z-10">
                {[
                  { label: "Best case", value: "Rs 1.45Cr", tone: "text-emerald-400" },
                  { label: "Base case", value: "Rs 1.31Cr", tone: "text-purple-300" },
                  { label: "Risk case", value: "Rs 1.12Cr", tone: "text-rose-400" }
                ].map((item, index) => (
                  <motion.div key={item.label} variants={{ initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 } }} {...cardHover} className="luminous-card-dark rounded-[1.75rem] border border-white/10 bg-white/8 p-5 text-white group hover:bg-white/12 transition-colors">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{item.label}</p>
                    <p className={`mt-3 text-2xl font-black ${item.tone} transition-transform group-hover:scale-105 origin-left`}>{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-24">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
            {[["Business problem", "Retail teams often discover profit pressure only after the month closes, when it is too late to change the outcome.", "text-rose-500"], ["What Tapito detects", "Tapito detects future margin risk by combining seasonality, cost movement, velocity, and modeling.", "text-purple-600"], ["What action it enables", "Leaders can protect profitability earlier and invest with far more confidence.", "text-emerald-600"]].map(([title, text, tone], index) => (
              <motion.div key={title} {...fadeUp(index * 0.1)} {...cardHover} className={`rounded-[2.5rem] border bg-white p-10 group transition-all ${index === 1 ? "border-purple-200 shadow-[0_40px_90px_-50px_rgba(124,58,237,0.5)]" : "border-slate-200 hover:border-purple-200"}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${tone}`}>{title}</p>
                <p className="mt-5 text-xl font-black leading-9 text-slate-950 uppercase tracking-tight">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.03),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">How it works</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 lg:text-5xl">Model futures before you commit budget.</motion.h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-6">
              {[["01", "Learn historical profile", "Studying sales patterns, promos, seasonality, and margin behavior tokens."], ["02", "Model future states", "Different pricing, buying, and cost paths are tested against your reality."], ["03", "Flag profit risk early", "Leaders see target impact before they commit spend or inventory decisions."]].map(([step, title, text], index) => (
                <motion.div key={step} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[2rem] border border-slate-200 bg-white p-8 group hover:bg-slate-50 transition-colors h-full">
                  <div className="flex items-start gap-6">
                    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-base font-black text-white group-hover:bg-purple-600 transition-colors shadow-lg">{step}</motion.div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-950 group-hover:text-purple-700 transition-colors">{title}</h3>
                      <p className="mt-3 text-base font-medium leading-8 text-slate-600">{text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.14 }} className="rounded-[3.5rem] border border-purple-200 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/50 p-10 lg:p-14 relative backdrop-blur-sm group shadow-inner">
               <div className="grid gap-5 md:grid-cols-3 relative z-10">
                {[
                  { label: "Forecast trust", value: "96%", icon: CheckCircle2 },
                  { label: "Holding cost", value: "-20%", icon: TrendingDown },
                  { label: "Planning speed", value: "+50%", icon: TrendingUp },
                ].map((item, index) => (
                  <motion.div key={item.label} variants={fadeUp(0.2 + index * 0.1)} {...cardHover} className="luminous-card luminous-surface-strong rounded-[2rem] border border-purple-100 bg-white p-6 text-center group/card">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 group-hover/card:bg-purple-600 group-hover/card:text-white transition-all shadow-sm"><item.icon size={26} /></div>
                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-2xl font-black text-slate-950">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 rounded-[2.5rem] border border-purple-100 bg-white p-8 relative z-10 shadow-sm group-hover:shadow-md transition-shadow">
                <p className="text-sm font-black text-slate-950">Scenario comparison result</p>
                <div className="mt-6 space-y-4">
                  {[
                    ["Price increase +3%", "Expected margin lift of Rs 42k/mo", "text-emerald-600"],
                    ["Supplier cost +6%", "Pressure on Fresh category by Wk 5", "text-rose-600"],
                    ["Inventory cut -10%", "Safer cash position, 0.4x stock-out risk", "text-purple-600"],
                  ].map(([title, note, tone], idx) => (
                    <motion.div key={title} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 + idx * 0.1 }} className="rounded-2xl bg-slate-50 px-6 py-5 border border-transparent hover:border-purple-200 hover:bg-white transition-all cursor-pointer">
                      <p className="text-base font-black text-slate-900 leading-tight">{title}</p>
                      <p className={`mt-2 text-[11px] font-black uppercase tracking-widest ${tone}`}>{note}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(168,85,247,0.02),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 text-center">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">Business impact</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 lg:text-5xl">Decisions get sharper before money is at risk.</motion.h2>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-8 md:grid-cols-3">
            {[["96%", "Forecast accuracy", "Measured across 12-week rolling profit corridors"], ["-20%", "Holding cost", "Optimization of capital before stock commitment"], ["+50%", "Planning quality", "Time saved in creating executive scenario models"]].map(([value, label, note], index) => (
              <motion.div key={label} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[3rem] border border-slate-200 bg-white p-12 text-center group hover:bg-purple-50/30 transition-all shadow-sm">
                <motion.p animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-6xl font-black tracking-tight text-purple-700 transition-transform group-hover:scale-110">{value}</motion.p>
                <p className="mt-8 text-2xl font-black text-slate-950">{label}</p>
                <p className="mt-4 text-sm font-medium leading-8 text-slate-500 max-w-[200px] mx-auto opacity-70 italic group-hover:opacity-100 transition-opacity">"{note}"</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>



      <section className="py-24">
        <Container>
          <motion.div {...fadeUp()} className="mb-14 text-center"><h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 font-outfit">What Happens After You Enable This Feature?</h2></motion.div>
          <div className="grid overflow-hidden rounded-[3.5rem] border border-slate-200 shadow-[0_50px_140px_-60px_rgba(15,23,42,0.4)] md:grid-cols-2 relative h-full">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white p-12 lg:p-20 relative overflow-hidden group">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 relative z-10 font-black">Before Tapito Profitability</p>
              <div className="mt-12 space-y-8 text-2xl font-bold text-slate-400 relative z-10 opacity-60">
                <p>Retroactive P and L cycles</p>
                <p>Quarter-end budget surprises</p>
                <p>Blind inventory investing</p>
                <p>Manual scenario spreadsheets</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-slate-950 p-12 lg:p-20 text-white relative h-full group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)] pointer-events-none" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-purple-300 relative z-10 font-black">After Tapito Profitability</p>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-12 space-y-8 text-2xl font-black relative z-10">
                {["12-week future visibility", "Margin predictability logic", "Planned success modeling", "Continuous risk-first alerts"].map((item) => (
                  <motion.div key={item} variants={{ initial: { x: 40, opacity: 0 }, whileInView: { x: 0, opacity: 1 } }} transition={{ duration: 0.6 }} className="flex items-center gap-6 group hover:translate-x-3 transition-transform cursor-default"><CheckCircle2 size={32} className="text-emerald-400 shrink-0" />{item}</motion.div>
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

      <ExploreMoreFeatures currentSlug="profitability-engine" />
    </div>
  );
}

