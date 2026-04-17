"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Search,
  ShieldAlert,
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

export default function RevenueInsightsPage() {
  const feature = featuresData.find(f => f.slug === "revenue-insights");
  if (!feature) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] lg:h-[520px] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_38%),radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_24%)]" />

      <section className="relative py-10 4xl:py-28">
        <Container>
          <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-700">
                <Search size={14} /> Opportunity detection dashboard
              </motion.div>
              <motion.h1 {...fadeUp(0.08)} className="max-w-3xl text-3xl sm:text-4xl md:text-5xl 4xl:text-7xl font-black tracking-[-0.06em] text-slate-950">
                See Exactly Where Revenue Is Hiding.
              </motion.h1>
              <motion.p {...fadeUp(0.16)} className="mt-6 max-w-4xl text-base md:text-lg 4xl:text-xl font-medium leading-7 md:leading-8 text-slate-600">
                Expose pricing gaps, leak points, and growth suggestions with a recommendation layer built to recover lost revenue fast.
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/enterprise" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-black text-white shadow-[0_22px_60px_-18px_rgba(37,99,235,0.55)] transition-all hover:scale-[1.05] hover:shadow-[0_25px_70px_-15px_rgba(37,99,235,0.65)]">
                  <Play size={16} fill="currentColor" className="transition-transform group-hover:scale-110" /> 
                  Book a Demo
                </Link>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">SKU-level leak alerts</span>
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-600">Always-on detection</span>
                </div>
              </motion.div>
            </div>

            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.3 }} className="rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 bg-white p-6 shadow-[0_50px_140px_-70px_rgba(37,99,235,0.5)] relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
            
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-6 space-y-4 relative z-10">
                {[
                  { title: "Under-priced winner", text: "Organic Almonds priced below market", impact: "+Rs 84k/mo", action: "Reprice by Rs 45", theme: "bg-emerald-50 border-emerald-100 text-emerald-700 hover:bg-emerald-100/50" },
                  { title: "Bundle upside", "text": "Yoga Mat buyers primed for Foam Rollers", impact: "+18% AOV", action: "Launch 'Yogi Pro' bundle", theme: "bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100/50" },
                  { title: "Leak risk", "text": "Branch 04 velocity doesn't match sell-through", impact: "Recover Rs 12k", action: "Investigate shrinkage in Fresh", theme: "bg-rose-50 border-rose-100 text-rose-700 hover:bg-rose-100/50" },
                ].map((item, index) => (
                  <motion.div key={item.title} variants={{ initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 } }} {...cardHover} className={`luminous-card rounded-[2rem] border p-6 transition-all group ${item.theme}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-black">{item.title}</p>
                        <p className="mt-2 text-sm font-bold leading-6 text-slate-700/80">{item.text}</p>
                      </div>
                      <motion.span animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="rounded-full bg-white px-4 py-1.5 text-xs font-black shadow-sm group-hover:shadow-md transition-shadow shrink-0">{item.impact}</motion.span>
                    </div>
                    <div className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500/80">Recommended action:</p>
                      <p className="text-sm font-black text-slate-950">{item.action}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-16 4xl:py-24">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
            {[["Business problem", "Revenue leaks often stay invisible because teams only see totals and not where margin is slipping underneath.", "text-rose-500"], ["What Tapito detects", "Tapito detects underpriced winners, weak bundles, leak points, and risk signals at SKU level.", "text-blue-600"], ["What action it enables", "Teams can reprice, rebundle, replenish, and escalate the exact move that unlocks revenue.", "text-emerald-600"]].map(([title, text, tone], index) => (
              <motion.div key={title} {...fadeUp(index * 0.12)} {...cardHover} className={`rounded-[2.5rem] border bg-white p-10 group transition-all ${index === 1 ? "border-blue-200 shadow-[0_40px_80px_-40px_rgba(59,130,246,0.5)]" : "border-slate-200 hover:border-blue-200"}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.22em] ${tone}`}>{title}</p>
                <p className="mt-4 text-xl font-black leading-8 text-slate-950 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-16 4xl:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">How it works</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950">A leak-detection workflow built for hidden upside.</motion.h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-6">
              {[["01", "Map leak zones", "Tapito mapping pricing, bundle behavior, stockouts, and product mix tokens."], ["02", "Detect hidden upside", "The system isolates where a small pricing or assortment move can unlock revenue."], ["03", "Recommend the move", "Leaders see the exact branch, SKU, or action worth executing next."]].map(([step, title, text], index) => (
                <motion.div key={step} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[2rem] border border-slate-200 bg-white p-8 group hover:bg-slate-50 transition-colors relative h-full">
                  <div className="flex items-start gap-6">
                    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-4xl bg-slate-950 text-base font-black text-white group-hover:bg-blue-600 transition-colors shadow-lg">{step}</motion.div>
                    <div>
                      <h3 className="text-4xl font-black text-slate-950 group-hover:text-blue-700">{title}</h3>
                      <p className="mt-3 text-base font-medium leading-8 text-slate-600">{text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.16 }} className="rounded-[3.5rem] border border-blue-200 bg-gradient-to-br from-white to-blue-50/50 p-10 lg:p-14 relative backdrop-blur-sm group">
              <div className="absolute inset-0 bg-white/40 pointer-events-none rounded-[3.5rem]" />
              <div className="grid gap-6 md:grid-cols-3 relative z-10">
                {[
                  { icon: ShieldAlert, label: "Leak risk", value: "3 branches" },
                  { icon: TrendingUp, label: "Upside found", value: "Rs 12L+" },
                  { icon: Search, label: "Action queue", value: "6 ready" },
                ].map((item, index) => (
                  <motion.div key={item.label} variants={fadeUp(0.2 + index * 0.1)} {...cardHover} className="luminous-card luminous-surface-strong rounded-[2rem] border border-blue-100 bg-white p-6 text-center group/card">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-4xl bg-blue-50 text-blue-600 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all shadow-sm"><item.icon size={26} /></div>
                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-4xl font-black text-slate-950">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 rounded-[2rem] border border-blue-100 bg-white p-8 relative z-10 shadow-sm group-hover:shadow-md transition-shadow">
                <p className="text-sm font-black text-slate-950 uppercase tracking-widest">Opportunity timeline</p>
                <div className="mt-6 space-y-4">
                  {[
                    ["09:15", "Top SKU price gap detected"],
                    ["09:40", "Bundle potential confirmed"],
                    ["10:05", "Branch leakage escalated"],
                  ].map(([time, note], idx) => (
                    <motion.div key={time} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 + idx * 0.1 }} className="flex items-center gap-5 rounded-4xl bg-slate-50 px-5 py-4 text-sm font-bold text-slate-700 transition-colors hover:bg-blue-50 group-hover:border-blue-200">
                      <span className="rounded-full bg-slate-950 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shrink-0">{time}</span>
                      <span className="leading-relaxed">{note}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 4xl:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 text-center">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">Business impact</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950">Recover more value already inside the business.</motion.h2>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-8 md:grid-cols-3">
            {[["Rs 12L+", "Recovered revenue", "Attributed to SKU-level re-pricing moves"], ["+18%", "Average order value", "Lifted via smart bundle placement"], ["Realtime", "Pricing speed", "Response to market shifts within minutes"]].map(([value, label, note], index) => (
              <motion.div key={label} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[3rem] border border-slate-200 bg-white p-12 text-center group hover:bg-blue-50/30 transition-all shadow-sm">
                <motion.p animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-6xl font-black tracking-tight text-blue-700 transition-transform group-hover:scale-110">{value}</motion.p>
                <p className="mt-8 text-4xl font-black text-slate-950">{label}</p>
                <p className="mt-4 text-sm font-medium leading-8 text-slate-500 max-w-[200px] mx-auto italic opacity-70">"{note}"</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>



      <section className="py-16 4xl:py-24">
        <Container>
          <motion.div {...fadeUp()} className="mb-14 text-center"><h2 className="text-3xl md:text-4xlfont-black tracking-[-0.05em] text-slate-950 font-outfit uppercase tracking-tight">What Happens After You Enable This Feature?</h2></motion.div>
          <div className="grid overflow-hidden rounded-[3.5rem] border border-slate-200 shadow-[0_50px_140px_-60px_rgba(15,23,42,0.4)] md:grid-cols-2 relative h-full">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white p-12 lg:p-20 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 relative z-10">Before Tapito Revenue Hunting</p>
              <div className="mt-12 space-y-8 text-4xl font-bold text-slate-400 relative z-10">
                <p className="flex items-center gap-4 opacity-70">Invisible profit leaks</p>
                <p className="flex items-center gap-4 opacity-70">Wasted inventory cycles</p>
                <p className="flex items-center gap-4 opacity-70">Stagnant order values</p>
                <p className="flex items-center gap-4 opacity-70">Reactive SKU management</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-slate-950 p-12 lg:p-20 text-white relative h-full">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-300 relative z-10">After Tapito Revenue Hunting</p>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-12 space-y-8 text-4xl font-black relative z-10">
                {["Captured growth pockets", "Optimized product mix", "Maximized profit margins", "Sku-level performance focus"].map((item) => (
                  <motion.div key={item} variants={{ initial: { x: 40, opacity: 0 }, whileInView: { x: 0, opacity: 1 } }} transition={{ duration: 0.6 }} className="flex items-center gap-6 group/item"><CheckCircle2 size={32} className="text-emerald-400 group-hover/item:scale-110 transition-transform" />{item}</motion.div>
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

      <ExploreMoreFeatures currentSlug="revenue-insights" />
    </div>
  );
}
