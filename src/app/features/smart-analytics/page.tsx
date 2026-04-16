"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  TriangleAlert,
  Quote,
  TrendingUp,
  Play,
  Sparkles,
} from "lucide-react";
import { featuresData } from "@/components/features/FeaturesGrid";
import Container from "@/components/Container";
import { InteractiveGrid } from "@/components/InteractiveGrid";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
} as any);

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
} as any;

const cardHover = {
  whileHover: { 
    y: -8, 
    scale: 1.015,
    transition: { duration: 0.3, ease: "easeOut" } 
  },
} as any;

const revealVariant = {
  initial: { opacity: 0, scale: 0.96, filter: "blur(12px)" },
  whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1.2, ease: "easeOut" },
} as any;

import { ExploreMoreFeatures } from "@/components/features/ExploreMoreFeatures";

export default function SmartAnalyticsPage() {
  const feature = featuresData.find(f => f.slug === "smart-analytics");
  if (!feature) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] lg:h-[560px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_20%_20%,rgba(9,53,140,0.14),transparent_24%)]" />

      <section className="relative py-12 md:py-20 4xl:py-30">
        <Container>
          <div className="text-center">
            <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-700">
              <BrainCircuit size={14} /> AI thinking pipeline visualization
            </motion.div>
            <motion.h1 {...fadeUp(0.08)} className="mx-auto max-w-5xl text-3xl sm:text-4xl md:text-5xl 4xl:text-7xl font-black tracking-[-0.06em] text-slate-950">
              Your Data Starts Thinking For You.
            </motion.h1>
            <motion.p {...fadeUp(0.16)} className="mx-auto mt-6 max-w-3xl text-base md:text-lg 4xl:text-xl font-medium leading-7 md:leading-8 text-slate-600">
              Turn raw business signals into scored insights and next-best actions so your team stops drowning in dashboards and starts acting on what matters first.
            </motion.p>
            <motion.div {...fadeUp(0.24)} className="mt-10 flex justify-center">
              <Link href="/enterprise" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-black text-white shadow-[0_22px_60px_-18px_rgba(59,130,246,0.55)] transition-all hover:scale-[1.05] hover:shadow-[0_25px_70px_-15px_rgba(59,130,246,0.65)]">
                <Play size={16} fill="currentColor" className="transition-transform group-hover:scale-110" /> 
                Book a Demo
              </Link>
            </motion.div>
          </div>

          <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.3 }} className="mx-auto mt-16 max-w-5xl rounded-[1.5rem] md:rounded-[2.5rem] border border-blue-200 bg-white/90 p-6 shadow-[0_45px_120px_-65px_rgba(59,130,246,0.55)] backdrop-blur lg:p-8">
            <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_0.55fr_0.9fr]">
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-4">
                {[
                  { label: "Retail events", value: "12.4M/day", icon: Database },
                  { label: "Behavior signals", value: "Always streaming", icon: TrendingUp },
                ].map((item, index) => (
                  <motion.div key={item.label} {...fadeUp(index * 0.1)} {...cardHover} className="luminous-card luminous-surface group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-4">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex h-12 w-12 items-center justify-center rounded-4xl bg-white text-blue-600 shadow-sm transition-shadow group-hover:shadow-md transition-colors group-hover:bg-blue-50"><item.icon size={22} /></motion.div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                        <p className="mt-1 text-lg font-black text-slate-950">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="relative flex min-h-[320px] items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-[0_30px_100px_-40px_rgba(59,130,246,0.85)]">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} className="absolute inset-6 rounded-full border border-dashed border-white/20" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-14 rounded-full border border-dashed border-white/10" />
                <div className="relative text-center">
                  <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <Cpu size={36} className="mx-auto" />
                  </motion.div>
                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-blue-100/70">Tapito AI Core</p>
                  <p className="mt-3 text-4xl font-black">Score. Interpret. Recommend.</p>
                </div>
              </div>

              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-4">
                {[
                  { label: "Insight", text: "Traffic downtrend is concentrated in premium home buyers", icon: CheckCircle2, tone: "text-emerald-600" },
                  { label: "Recommendation", text: "Increase bundle visibility for premium home sets this weekend", icon: Sparkles, tone: "text-blue-600" },
                  { label: "Risk alert", text: "3 branches show elevated churn sensitivity", icon: TriangleAlert, tone: "text-rose-600" },
                ].map((item, index) => (
                  <motion.div key={item.label} {...fadeUp(0.1 + index * 0.1)} {...cardHover} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 group transition-all hover:border-blue-200">
                    <div className="flex items-start gap-4">
                      <motion.div whileHover={{ scale: 1.1 }} className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-4xl bg-slate-50 transition-colors group-hover:bg-slate-100 ${item.tone}`}><item.icon size={20} /></motion.div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                        <p className="mt-2 text-sm font-bold leading-7 text-slate-800">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-16 4xl:py-24">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
            {[["Business problem", "Important patterns hide inside too much raw data for teams to catch consistently by hand.", "text-rose-500"], ["What Tapito detects", "Tapito scores anomalies, growth signals, churn risk, and margin movement across the retail engine.", "text-blue-600"], ["What action it enables", "Operators get prioritized recommendations instead of charts that still need interpretation.", "text-emerald-600"]].map(([title, text, tone], index) => (
              <motion.div key={title} {...fadeUp(index * 0.12)} {...cardHover} className={`rounded-[2.5rem] border bg-white p-10 group transition-all ${index === 1 ? "border-blue-200 shadow-[0_40px_80px_-40px_rgba(59,130,246,0.5)] hover:bg-white" : "border-slate-200 hover:border-blue-200"}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.22em] ${tone}`}>{title}</p>
                <p className="mt-4 text-xl font-black leading-8 text-slate-950">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-16 4xl:py-24 overflow-hidden">
        <Container>
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">How it works</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950">A decision pipeline that turns noise into action.</motion.h2>
          </div>
          <div className="rounded-[3rem] border border-slate-200 bg-gradient-to-br from-white to-blue-50/50 p-6 lg:p-12 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 blur-[100px] pointer-events-none rounded-full" />
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-8 lg:grid-cols-4 relative z-10">
              {[["01", "Data", "Sales, customers, inventory, pricing"], ["02", "AI scoring", "Patterns ranked by confidence and value"], ["03", "Insights", "What changed, where, and why it matters"], ["04", "Recommendations", "The next move your team should execute"]].map(([step, title, text], index) => (
                <div key={step} className="relative group">
                  {index < 3 && <div className="connector-line absolute right-[-24px] top-1/2 hidden h-px w-10 lg:block bg-blue-200/50" />}
                  <motion.div variants={fadeUp(index * 0.1)} {...cardHover} className="luminous-card luminous-surface-strong h-full rounded-[2rem] border border-blue-100 bg-white p-8 group-hover:bg-blue-50/30 transition-colors">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Step {step}</p>
                    <h3 className="mt-6 text-4xl font-black text-slate-950 transition-colors group-hover:text-blue-700">{title}</h3>
                    <p className="mt-4 text-sm font-medium leading-7 text-slate-600">{text}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 4xl:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 text-center">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">Business impact</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950">Measured lift from always-on machine intelligence.</motion.h2>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-8 md:grid-cols-3">
            {[["98.4%", "Insight confidence", "AI confidence scores across 40+ indicators"], ["-95%", "Manual analysis time", "Reports delivered instantly via pipeline"], ["+12%", "Profit readiness", "Margin improvement via anomaly detection"]].map(([value, label, note], index) => (
              <motion.div key={label} {...fadeUp(index * 0.1)} {...cardHover} className="rounded-[2.5rem] border border-slate-200 bg-white p-10 text-center group">
                <motion.p initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.4 + index * 0.1 }} className="text-6xl font-black text-blue-700 transition-transform group-hover:scale-110">{value}</motion.p>
                <p className="mt-6 text-xl font-black text-slate-950">{label}</p>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-500">{note}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>



      <section className="py-16 4xl:py-24">
        <Container>
          <motion.div {...fadeUp()} className="mb-14 text-center"><h2 className="text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950 uppercase tracking-tight">What Happens After You Enable This Feature?</h2></motion.div>
          <div className="grid overflow-hidden rounded-[3.5rem] border border-slate-200 shadow-[0_50px_130px_-60px_rgba(15,23,42,0.35)] md:grid-cols-2">
            <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="bg-white p-12 lg:p-20">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Before Tapito Intelligence</p>
              <div className="mt-12 space-y-7 text-xl font-bold text-slate-400">
                <p className="flex items-center gap-4">Reactive guesswork</p>
                <p className="flex items-center gap-4">Manual dashboard diving</p>
                <p className="flex items-center gap-4">Hidden revenue leakage</p>
                <p className="flex items-center gap-4">Slow response to market shifts</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="bg-slate-950 p-12 lg:p-20 text-white relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-300 relative z-10">After Tapito Intelligence</p>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-12 space-y-7 text-xl font-black relative z-10">
                {["Evidence-based strategy", "Proactive scaling logic", "Optimized margins & ABV", "Autonomous opportunity scoring"].map((item) => (
                  <motion.div key={item} variants={{ initial: { x: 30, opacity: 0 }, whileInView: { x: 0, opacity: 1 } }} className="flex items-center gap-5"><CheckCircle2 size={28} className="text-emerald-400" />{item}</motion.div>
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

      <ExploreMoreFeatures currentSlug="smart-analytics" />
    </div>
  );
}

