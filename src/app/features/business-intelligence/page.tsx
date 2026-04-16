"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LayoutDashboard,
  Play,
  Quote,
  Sparkles,
} from "lucide-react";
import { featuresData } from "@/components/features/FeaturesGrid";
import Container from "@/components/Container";
import { InteractiveGrid } from "@/components/InteractiveGrid";
import { BentoAnalyticsGrid } from "@/components/features/BentoAnalyticsGrid";

import { ExploreMoreFeatures } from "@/components/features/ExploreMoreFeatures";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(10px)" },
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

const metrics = [
  { label: "Network Revenue", value: "Rs 42.8L", note: "+14.2% this month" },
  { label: "Live Branches", value: "24", note: "All stores synced" },
  { label: "Margin Watch", value: "18.5%", note: "Top category holding" },
  { label: "Decision Lag", value: "-80%", note: "From report to action" },
];

export default function BusinessIntelligencePage() {
  const feature = featuresData.find(f => f.slug === "business-intelligence");
  if (!feature) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_42%),radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_30%)]" />

      <section className="relative py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-700">
                <LayoutDashboard size={14} /> Executive analytics workspace
              </motion.div>
              <motion.h1 {...fadeUp(0.08)} className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-slate-950 lg:text-7xl">
                Your Entire Business. One Screen.
              </motion.h1>
              <motion.p {...fadeUp(0.16)} className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-600 lg:text-xl">
                Give leadership one live command center for revenue, branch performance, and category momentum so decisions happen now, not after the month is gone.
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/enterprise" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-base font-black text-white shadow-[0_20px_60px_-18px_rgba(124,58,237,0.55)] transition-all hover:scale-[1.05] hover:shadow-[0_25px_70px_-15px_rgba(124,58,237,0.65)]">
                  <Play size={16} fill="currentColor" className="transition-transform group-hover:scale-110" />
                  Book a Demo
                </Link>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-600">
                  <span className="signal-dot h-2.5 w-2.5 rounded-full bg-emerald-400" /> Live KPI sync across branches
                </div>
              </motion.div>

              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="mt-10 grid gap-4 sm:grid-cols-2">
                {metrics.map((metric, index) => (
                  <motion.div key={metric.label} {...fadeUp(index * 0.05)} {...cardHover} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)] backdrop-blur">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <p className="relative text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">{metric.label}</p>
                    <div className="relative mt-3 flex items-end justify-between gap-4">
                      <span className="text-3xl font-black tracking-tight text-slate-950 transition-colors group-hover:text-purple-700">{metric.value}</span>
                      <span className="text-xs font-bold text-purple-600">{metric.note}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.25 }} className="rounded-[2.5rem] border border-slate-200 bg-slate-950 p-6 shadow-[0_50px_120px_-40px_rgba(15,23,42,0.9)]">
              <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-300">Tapito Command Center</p>
                  <p className="mt-1 text-sm font-bold text-white">All Branches Overview</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/12 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200 soft-shine">
                  <span className="signal-dot h-2 w-2 rounded-full bg-emerald-300" /> Live
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 md:col-span-2">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-black text-white">Revenue Trend</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">Last 30 days</p>
                  </div>
                  <div className="flex h-40 items-end gap-2">
                    {[32, 48, 42, 66, 54, 78, 64, 88, 72, 96, 80, 92].map((bar, index) => (
                      <motion.div key={index} initial={{ height: 0, opacity: 0 }} whileInView={{ height: `${bar}%`, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: "easeOut" }} className="flex-1 rounded-t-2xl bg-gradient-to-t from-purple-500/25 via-purple-500/65 to-fuchsia-300/90" />
                    ))}
                  </div>
                </div>

                <div className="luminous-card-dark alive-panel rounded-[1.5rem] border border-white/12 bg-white/10 p-4">
                  <p className="text-sm font-black text-white">Branch Comparison</p>
                  <div className="mt-4 space-y-4">
                    {[["Sector 12", "Rs 14.2L", "100%"], ["Industrial Park", "Rs 11.8L", "84%"], ["Downtown Hub", "Rs 9.4L", "68%"]].map(([name, value, width]) => (
                      <div key={name}>
                        <div className="mb-1 flex items-center justify-between text-xs font-bold text-white/80">
                          <span>{name}</span>
                          <span>{value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <motion.div initial={{ width: 0 }} whileInView={{ width }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 1, ease: "easeOut" }} className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="luminous-card-dark alive-panel rounded-[1.5rem] border border-white/12 bg-white/10 p-4">
                  <p className="text-sm font-black text-white">Category Performance</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-bold text-white">
                    {[["Fashion", "+18%"], ["Essentials", "+11%"], ["Home", "+9%"], ["Beauty", "+14%"]].map(([name, value], index) => (
                      <motion.div key={name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 + index * 0.1 }} className="luminous-card-dark rounded-2xl border border-white/10 bg-slate-900/80 p-3 hover:bg-slate-800 transition-colors">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/60">{name}</p>
                        <p className="mt-2 text-xl text-fuchsia-300">{value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-slate-50/80 border-y border-slate-200/80">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
            {[ ["Business problem", "Leaders lose speed when branch, category, and revenue signals live in disconnected reports.", "text-rose-500"], ["What Tapito detects", "Tapito spots KPI drift, branch gaps, and category momentum from one synchronized retail view.", "text-purple-600"], ["What action it enables", "Teams can escalate weak stores, rebalance focus, and move on opportunities before they become month-end misses.", "text-emerald-600"] ].map(([title, text, tone], index) => (
              <motion.div key={title} {...fadeUp(index * 0.1)} {...cardHover} className={`rounded-[2rem] border p-8 group transition-all ${index === 1 ? "border-purple-200 bg-white shadow-[0_30px_70px_-45px_rgba(124,58,237,0.5)] hover:shadow-[0_40px_80px_-40px_rgba(124,58,237,0.6)]" : "border-slate-200 bg-white hover:border-purple-200"}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.22em] ${tone}`}>{title}</p>
                <p className="mt-4 text-xl font-black leading-8 text-slate-950">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <BentoAnalyticsGrid />

      <section className="py-24">
        <Container>
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">How it works</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950">An executive workspace that turns raw retail activity into operating clarity.</motion.h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-4">
              {[ ["01", "Sync every outlet", "POS, billing, inventory, and customer movement land in one live operating layer."], ["02", "Surface what matters", "Tapito highlights branch anomalies, category momentum, and revenue shifts automatically."], ["03", "Drive leadership action", "Managers drill into the exact branch or category that needs intervention next."] ].map(([step, title, text], index) => (
                <motion.div key={step} {...fadeUp(index * 0.1)} {...cardHover} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)] group">
                  <div className="flex items-start gap-4">
                    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white transition-colors group-hover:bg-purple-600">{step}</motion.div>
                    <div>
                      <h3 className="text-xl font-black text-slate-950 transition-colors group-hover:text-purple-700">{title}</h3>
                      <p className="mt-2 text-sm font-medium leading-7 text-slate-600">{text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.16 }} className="rounded-[2.5rem] border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-6 lg:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-purple-100 bg-white p-5">
                  <p className="text-sm font-black text-slate-950">KPI grid</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {[["Bills", "12.4k"], ["ABV", "Rs 3.4k"], ["GP", "22.1%"], ["Stock", "Healthy"]].map(([label, value]) => (
                      <motion.div key={label} whileHover={{ y: -5 }} className="luminous-card luminous-surface-strong soft-shine rounded-2xl bg-purple-50 p-3">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-purple-500">{label}</p>
                        <p className="mt-2 text-lg font-black text-slate-950">{value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-purple-100 bg-white p-5">
                  <p className="text-sm font-black text-slate-950">Branch priority map</p>
                  <div className="mt-4 space-y-3">
                    {[["High attention", "3 stores", "bg-rose-500"], ["Stable growth", "12 stores", "bg-emerald-500"], ["Upside potential", "9 stores", "bg-purple-500"]].map(([label, value, tone]) => (
                      <motion.div key={label} whileHover={{ x: 5 }} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                        <span className="flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${tone}`} />{label}</span>
                        <span>{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-purple-100 bg-white p-5 md:col-span-2">
                  <p className="text-sm font-black text-slate-950">Decision board</p>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {[["Store focus", "Rework assortment in Downtown Hub"], ["Category action", "Push Fashion in Central Hub this weekend"], ["Leadership note", "Margin expansion holding above target"]].map(([label, text], index) => (
                      <motion.div key={label} whileHover={{ scale: 1.05 }} className="luminous-card-dark rounded-2xl border border-slate-200 bg-slate-950 p-4 text-white">
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-purple-300">{label}</p>
                        <p className="mt-3 text-sm font-bold leading-6">{text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>


      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(168,85,247,0.05),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-12 text-center">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">Business impact</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950">Measurable operational lift across the network.</motion.h2>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3">
            {[["+300%", "Reporting speed", "Less waiting for consolidated files"], ["-68%", "Response time", "Managers act while issues are fresh"], ["360deg", "Business visibility", "Branch, category, and revenue in one flow"]].map(([value, label, note], index) => (
              <motion.div key={label} {...fadeUp(index * 0.1)} {...cardHover} className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-b from-white to-purple-50/30 p-10 text-center group">
                <motion.p initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }} className="text-6xl font-black tracking-tight text-purple-700 transition-transform group-hover:scale-110">{value}</motion.p>
                <p className="mt-6 text-xl font-black text-slate-950">{label}</p>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{note}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>



      <section className="py-24">
        <Container>
          <motion.div {...fadeUp()} className="mb-12 text-center"><h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950">What Happens After You Enable This Feature?</h2></motion.div>
          <div className="grid overflow-hidden rounded-[3rem] border border-slate-200 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.4)] md:grid-cols-2">
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white p-12 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-400">Before Tapito</p>
              <div className="mt-10 space-y-6 text-xl font-bold text-slate-400">
                <p className="flex items-center gap-3">Manual analysis</p>
                <p className="flex items-center gap-3">Delayed decisions</p>
                <p className="flex items-center gap-3">Missed opportunities</p>
                <p className="flex items-center gap-3">Store-by-store blind spots</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-slate-950 p-12 lg:p-16 text-white relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent pointer-events-none" />
              <p className="text-sm font-black uppercase tracking-[0.22em] text-purple-300 relative z-10">After Tapito</p>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-10 space-y-6 text-xl font-black relative z-10">
                {["Instant insights", "Automated actions", "Predictable growth", "Leadership-grade visibility"].map((item) => (
                  <motion.div key={item} variants={{ initial: { x: 20, opacity: 0 }, whileInView: { x: 0, opacity: 1 } }} className="flex items-center gap-4"><CheckCircle2 className="text-emerald-400" size={26} /><span>{item}</span></motion.div>
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

      <ExploreMoreFeatures currentSlug="business-intelligence" />
    </div>
  );
}

