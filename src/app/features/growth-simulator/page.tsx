"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  PlayCircle,
  Sparkles,
  TrendingUp,
  Quote,
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

export default function GrowthSimulatorPage() {
  const feature = featuresData.find(f => f.slug === "growth-simulator");
  if (!feature) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-inter">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] lg:h-[520px] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_36%),radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%)]" />

      <section className="relative py-12 md:py-20 4xl:py-28">
        <Container>
          <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="text-reveal">
              <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-blue-700 shadow-sm">
                <PlayCircle size={14} className="animate-spin-slow" /> Interactive simulation workspace
              </motion.div>
              <motion.h1 {...fadeUp(0.08)} className="max-w-3xl text-3xl sm:text-4xl md:text-5xl 4xl:text-7xl font-black tracking-[-0.06em] text-slate-950">
                Test Growth Before You Execute It.
              </motion.h1>
              <motion.p {...fadeUp(0.16)} className="mt-8 max-w-4xl text-base md:text-lg 4xl:text-xl font-medium leading-8 md:leading-9 text-slate-600 font-inter">
                Explore what-if scenarios with a digital decision workspace that reveals how pricing, traffic, and category strategy could change future growth paths.
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-6">
                <Link href="/enterprise" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-5 text-base font-black text-white shadow-[0_25px_60px_-18px_rgba(59,130,246,0.6)] transition-all hover:scale-[1.05] hover:shadow-[0_30px_70px_-15px_rgba(59,130,246,0.7)]">
                  <Play size={18} fill="currentColor" className="transition-transform group-hover:scale-125" /> 
                  Book a Demo
                </Link>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">Live decision workspace</span>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-600">Model paths instantly</span>
                </div>
              </motion.div>
            </div>

            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.3 }} className="rounded-[2rem] md:rounded-[4rem] border border-slate-200 bg-white p-6 md:p-7 shadow-[0_60px_150px_-70px_rgba(59,130,246,0.55)] relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center justify-between rounded-4xl border border-blue-100 bg-blue-50 px-6 py-4 relative z-10 transition-colors hover:bg-blue-100/80">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">Growth scenario planner</p>
                  <p className="mt-1 text-sm font-black text-slate-950">Active Digital Twin Model</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-slate-950 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white soft-shine">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" /> Live model
                </div>
              </div>

              <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] relative z-10">
                <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-7">
                  {[
                    { label: "Price adjustment", value: "+5%", width: "56%" },
                    { label: "Traffic lift", value: "+20%", width: "74%" },
                    { label: "Category expansion", value: "High", width: "84%" }
                  ].map((item, index) => (
                    <div key={item.label} className="group/slider">
                      <div className="mb-3 flex items-center justify-between text-xs font-black text-slate-500 uppercase tracking-[0.2em] group-hover/slider:text-blue-700 transition-colors">
                        <span>{item.label}</span>
                        <span className="text-blue-600 text-sm">{item.value}</span>
                      </div>
                      <div className="relative h-3 rounded-full bg-slate-50 shadow-inner overflow-hidden border border-slate-100">
                        <motion.div 
                          initial={{ width: 0 }} 
                          whileInView={{ width: item.width }} 
                          viewport={{ once: true }} 
                          transition={{ duration: 1, delay: 0.4 + index * 0.1 }} 
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" 
                        />
                      </div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      { label: "Consv", active: false },
                      { label: "Balanced", active: true },
                      { label: "Aggr", active: false },
                    ].map((item) => (
                      <motion.div 
                        key={item.label} 
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`rounded-4xl py-4 text-center text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer transition-all shadow-sm ${item.active ? "bg-slate-950 text-white shadow-xl shadow-slate-950/20" : "bg-white text-slate-500 border border-slate-100 hover:bg-slate-50"}`}
                      >
                        {item.label}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="luminous-card-dark soft-shine rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_40px_100px_-40px_rgba(15,23,42,0.95)] relative overflow-hidden group/panel">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Projected yield</p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-5 text-6xl font-black tracking-tighter group-hover/panel:scale-[1.02] transition-transform">Rs 85.4L</motion.p>
                  <p className="mt-2 text-sm font-bold text-slate-400 group-hover/panel:text-white/80 transition-colors italic">"Expected monthly revenue yield"</p>
                  
                  <div className="mt-8 h-2.5 rounded-full bg-white/10 overflow-hidden shadow-inner">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "72%" }} transition={{ duration: 1.5, delay: 1.4, ease: "circOut" }} className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500" />
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { label: "Growth prob", value: "84%", icon: TrendingUp, tone: "text-emerald-400" },
                      { label: "Exec risk", value: "Low", icon: CheckCircle2, tone: "text-blue-400" }
                    ].map((item, index) => (
                      <motion.div key={item.label} whileHover={{ y: -5 }} className="rounded-4xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{item.label}</p>
                        <div className="mt-3 flex items-center justify-between">
                           <span className={`text-xl font-black ${item.tone}`}>{item.value}</span>
                           <item.icon size={16} className="text-white/20" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-16 4xl:py-24">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
            {[["Business problem", "Big growth bets are risky when teams cannot see likely tradeoffs before committing real budget and inventory.", "text-rose-500"], ["What Tapito detects", "Tapito detects the highest-impact growth levers by simulating pricing, traffic, category mix, and retention changes.", "text-blue-600"], ["What action it enables", "Teams can launch initiatives with evidence, not hope, and de-risk growth before rollout.", "text-emerald-600"]].map(([title, text, tone], index) => (
              <motion.div key={title} {...fadeUp(index * 0.12)} {...cardHover} className={`rounded-[1.5rem] md:rounded-[2.5rem] border bg-white p-10 group transition-all ${index === 1 ? "border-blue-200 shadow-[0_45px_100px_-50px_rgba(37,99,235,0.5)]" : "border-slate-200 hover:border-blue-200"}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${tone}`}>{title}</p>
                <p className="mt-5 text-xl font-black leading-9 text-slate-950 uppercase tracking-tight">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-16 4xl:py-24 relative overflow-hidden font-inter">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">How it works</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950 uppercase tracking-tighter">A what-if workspace for strategic scale.</motion.h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-6">
              {[["01", "Adjust the levers", "Change price, traffic, category investment, or retention behavior tokens."], ["02", "Run future scenarios", "Tapito projects exact revenue, profit, and churn impact from each move."], ["03", "Choose the strongest path", "Launch the strategy with the best upside-to-risk ratio instantly."]].map(([step, title, text], index) => (
                <motion.div key={step} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[2.2rem] border border-slate-200 bg-white p-8 group hover:bg-slate-50 transition-colors h-full flex items-start gap-7 shadow-sm">
                  <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="flex h-15 w-15 shrink-0 items-center justify-center rounded-[1.25rem] bg-slate-950 text-base font-black text-white group-hover:bg-blue-600 transition-colors shadow-lg">{step}</motion.div>
                  <div>
                    <h3 className="text-4xl font-black text-slate-950 group-hover:text-blue-700 transition-colors uppercase tracking-tight">{title}</h3>
                    <p className="mt-3 text-base font-medium leading-8 text-slate-600">{text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.14 }} className="rounded-[2rem] md:rounded-[3.5rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 p-10 lg:p-14 relative backdrop-blur-sm shadow-inner group overflow-hidden">
               <div className="grid gap-5 md:grid-cols-3 relative z-10">
                {[
                  { label: "Growth ROI", value: "3.2x", icon: TrendingUp },
                  { label: "Planning speed", value: "+40%", icon: Sparkles },
                  { label: "Market trust", value: "92%", icon: CheckCircle2 },
                ].map((item, index) => (
                  <motion.div key={item.label} variants={fadeUp(0.2 + index * 0.1)} {...cardHover} className="luminous-card luminous-surface-strong rounded-[2.2rem] border border-purple-100 bg-white p-7 text-center group/card">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-purple-50 text-purple-600 group-hover/card:bg-purple-600 group-hover/card:text-white transition-all shadow-sm"><item.icon size={26} /></div>
                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-4xl font-black text-slate-950 transition-transform group-hover/card:scale-110">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="mt-8 rounded-[2.5rem] border border-purple-100 bg-white p-8 relative z-10 shadow-sm hover:shadow-md transition-shadow cursor-default">
                 <p className="text-sm font-black text-slate-800 uppercase tracking-widest">Scenario outcomes comparison</p>
                 <div className="mt-7 space-y-4">
                   {[
                     ["Traffic +15% & Price +3%", "Highest revenue upside with low churn risk tokens", "text-emerald-600"],
                     ["Aggressive markdown plan", "Clears stock but sacrifices 12% profit margin", "text-rose-600"],
                     ["Stability & Category push", "Predictable growth, low operating stress path", "text-indigo-600"]
                   ].map(([title, note, tone], idx) => (
                     <motion.div key={title} whileHover={{ x: 8 }} transition={{ duration: 0.2 }} className="rounded-4xl bg-slate-50 px-6 py-5 border border-transparent hover:border-purple-200 hover:bg-white transition-all">
                       <p className="text-base font-black text-slate-950 leading-tight uppercase tracking-tight">{title}</p>
                       <p className={`mt-2 text-[10px] font-black uppercase tracking-widest ${tone}`}>{note}</p>
                     </motion.div>
                   ))}
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 4xl:py-24 relative overflow-hidden font-inter">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.025),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 text-center">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">Business impact</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950 uppercase tracking-tight">Growth bets become testable beforehand.</motion.h2>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-12 md:grid-cols-3">
            {[["3x confidence", "Launch precision", "Projected vs actual rollout accuracy"], ["+40% speed", "Execution velocity", "Time saved in scenario justification"], ["Risk-Zero", "Strategy de-risking", "Modeled tradeoffs before budget deployment"]].map(([value, label, note], index) => (
              <motion.div key={label} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 bg-white p-14 text-center group hover:bg-blue-50/40 transition-all shadow-sm">
                <motion.p animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="text-6xl font-black tracking-tight text-blue-700 transition-transform group-hover:scale-110">{value.split(' ')[0]}</motion.p>
                <p className="mt-8 text-4xl font-black text-slate-950 uppercase tracking-tighter">{label}</p>
                <p className="mt-4 text-sm font-medium leading-8 text-slate-500 max-w-[220px] mx-auto opacity-70 italic group-hover:opacity-100 transition-opacity">"{note}"</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-16 4xl:py-24">
        <Container>
          <motion.div {...fadeUp()} className="mb-14 text-center"><h2 className="text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950 font-outfit uppercase tracking-tight">What Happens After You Enable This Feature?</h2></motion.div>
          <div className="grid overflow-hidden rounded-[2.5rem] md:rounded-[4.5rem] border border-slate-200 shadow-[0_50px_150px_-70px_rgba(15,23,42,0.4)] md:grid-cols-2 relative h-full">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white p-14 lg:p-24 relative overflow-hidden group">
              <p className="text-xs font-black uppercase tracking-[0.45em] text-slate-400 relative z-10">Before Tapito Simulator</p>
              <div className="mt-14 space-y-10 text-3xl font-bold text-slate-400 relative z-10 opacity-60">
                <p>Growth plateaus & guessing</p>
                <p>Risky high-budget gambles</p>
                <p>Unknown strategic outcomes</p>
                <p>Theoretical boardroom hope</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-slate-950 p-14 lg:p-24 text-white relative h-full group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_70%)] pointer-events-none" />
              <p className="text-xs font-black uppercase tracking-[0.45em] text-blue-300 relative z-10 font-black">After Tapito Simulator</p>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-14 space-y-10 text-3xl font-black relative z-10">
                {["Proven growth levers", "De-risked strategic scale", "Scale with model certainty", "Evidence-led execution"].map((item) => (
                  <motion.div key={item} variants={{ initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 } }} transition={{ duration: 0.65 }} className="flex items-center gap-8 group hover:translate-x-4 transition-transform cursor-default"><CheckCircle2 size={38} className="text-emerald-400 shrink-0" />{item}</motion.div>
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
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 md:p-14 lg:p-20 relative overflow-hidden"
            >
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3" />

              <div className="relative z-10 max-w-3xl">
                <Quote size={48} className="text-white/20 mb-6" />
                <blockquote className="text-4xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-8">
                  {feature.quote.text}
                </blockquote>
                <p className="text-blue-200 font-bold text-base">
                  — {feature.quote.author}
                </p>
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      <ExploreMoreFeatures currentSlug="growth-simulator" />
    </div>
  );
}

