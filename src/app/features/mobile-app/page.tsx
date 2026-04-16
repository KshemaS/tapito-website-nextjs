"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Play,
  Smartphone,
  Sparkles,
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
  whileInView: { transition: { staggerChildren: 0.12 } },
} as any;

const cardHover = {
  whileHover: { 
    y: -8, 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" } 
  },
} as any;

const revealVariant = {
  initial: { opacity: 0, scale: 0.95, filter: "blur(12px)" },
  whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1.2, delay: 0.2, ease: "circOut" },
} as any;

export default function MobileAppPage() {
  const feature = featuresData.find(f => f.slug === "mobile-app");
  if (!feature) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 selection:bg-purple-100 selection:text-purple-900 font-inter">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_36%),radial-gradient(circle_at_top_left,rgba(99,102,241,0.11),transparent_24%)]" />

      <section className="relative py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-20 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="text-reveal">
              <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-purple-700 shadow-sm">
                <Smartphone size={14} className="animate-pulse" /> Phone-first experience
              </motion.div>
              <motion.h1 {...fadeUp(0.08)} className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-slate-950 lg:text-7xl">
                Your Business Insights. Anywhere.
              </motion.h1>
              <motion.p {...fadeUp(0.16)} className="mt-8 max-w-2xl text-lg font-medium leading-9 text-slate-600 lg:text-xl font-inter">
                Put Tapito in every leader's pocket with mobile dashboards, push alerts, and one-tap decision cards built for fast-moving retail operations.
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-6">
                <Link href="/enterprise" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-10 py-5 text-base font-black text-white shadow-[0_25px_60px_-18px_rgba(124,58,237,0.6)] transition-all hover:scale-[1.05] hover:shadow-[0_30px_70px_-15px_rgba(124,58,237,0.7)]">
                  <Play size={18} fill="currentColor" className="transition-transform group-hover:scale-125" /> 
                  Book a Demo
                </Link>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">Realtime command surface</span>
                  <span className="text-xs font-black uppercase tracking-widest text-purple-600">iOS & Android Natives</span>
                </div>
              </motion.div>
            </div>

            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.3 }} className="relative flex justify-center group">
              <div className="absolute h-[420px] w-[420px] rounded-full bg-purple-200/30 blur-[130px] -z-10 animate-pulse" />
              <motion.div whileHover={{ rotateY: -10, rotateX: 5 }} transition={{ duration: 0.6 }} className="relative max-w-[540px] rounded-[3.5rem] border-[12px] border-slate-900 bg-slate-950 p-4 shadow-[0_60px_160px_-40px_rgba(15,23,42,0.9)] perspective-1000">
                <div className="overflow-hidden rounded-[2.5rem] bg-white h-full">
                  <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-6">
                    <p className="text-sm font-black text-slate-950 uppercase tracking-widest">Store Monitor</p>
                    <motion.div whileHover={{ scale: 1.1 }} className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-black text-xs shadow-lg shadow-purple-500/30">JD</motion.div>
                  </div>
                  <div className="space-y-6 p-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Total revenue today</p>
                      <motion.p animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 4, repeat: Infinity }} className="mt-2 text-5xl font-black text-slate-950 tracking-tighter">Rs 4.24L</motion.p>
                      <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-[10px] font-black text-emerald-600 uppercase tracking-widest">+12.4% vs L.W.</p>
                    </motion.div>
                    
                    <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Bills", value: "124", color: "text-indigo-600" },
                        { label: "ABV", value: "Rs 3.4k", color: "text-purple-600" }
                      ].map((item, idx) => (
                        <motion.div key={item.label} variants={{ initial: { y: 20, opacity: 0 }, whileInView: { y: 0, opacity: 1 } }} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 hover:border-purple-200 transition-colors">
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                          <p className={`mt-2 text-2xl font-black ${item.color}`}>{item.value}</p>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.8, ease: "backOut" }} className="luminous-card-dark rounded-[1.75rem] bg-gradient-to-r from-purple-700 to-indigo-700 p-6 text-white shadow-xl shadow-purple-500/20 relative group/alert">
                      <div className="flex items-center gap-3">
                        <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}><Bell size={18} className="text-purple-300" /></motion.div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-purple-200">Push alert</p>
                      </div>
                      <p className="mt-3 text-base font-black leading-tight">Branch 04 Hit target early.</p>
                      <p className="mt-2 text-xs font-medium text-purple-100/80">Approve the next stock push now.</p>
                    </motion.div>

                    <div className="grid gap-3">
                      {[
                        { title: "Investigate dip", note: "Whitefield Branch", theme: "bg-rose-50 border-rose-100" },
                        { title: "Approve offer", note: "Festival Bundle", theme: "bg-emerald-50 border-emerald-100" }
                      ].map((card, idx) => (
                        <motion.div key={card.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 + idx * 0.1 }} className={`rounded-2xl border ${card.theme} p-4 flex items-center justify-between group/card cursor-pointer hover:scale-[1.03] transition-transform`}>
                           <div>
                             <p className="text-sm font-black text-slate-900">{card.title}</p>
                             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{card.note}</p>
                           </div>
                           <ArrowRight size={14} className="text-slate-300 group-hover/card:text-slate-950 transition-colors" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-24 px-4 font-inter">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
            {[["Business problem", "When leaders leave the desk, they often lose real-time visibility into what is happening across stores.", "text-rose-500"], ["What Tapito detects", "Tapito detects critical store events, performance swings, and action-worthy alerts and pushes them instantly.", "text-purple-600"], ["What action it enables", "Managers stay decisive on the move with less lag between signal and response.", "text-emerald-600"]].map(([title, text, tone], index) => (
              <motion.div key={title} {...fadeUp(index * 0.1)} {...cardHover} className={`rounded-[2.5rem] border bg-white p-10 group transition-all h-full ${index === 1 ? "border-purple-200 shadow-[0_45px_100px_-50px_rgba(124,58,237,0.5)]" : "border-slate-200 hover:border-purple-200"}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${tone}`}>{title}</p>
                <p className="mt-5 text-xl font-black leading-9 text-slate-950 uppercase tracking-tight">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-24 relative overflow-hidden font-inter">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.035),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">How it works</motion.p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 lg:text-5xl uppercase tracking-tighter">A command surface for the palm.</h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-6">
              {[["01", "Filter the noise", "Tapito filters signal from noise so leaders only get alerts worth acting on."], ["02", "Contextualize the alert", "Each push opens a quick mobile dashboard with trends, comparison tokens, and history."], ["03", "Take the action", "Escalate, approve, or investigate directly from the phone without a desktop login."]].map(([step, title, text], index) => (
                <motion.div key={step} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[2.2rem] border border-slate-200 bg-white p-8 group hover:bg-slate-50 transition-colors h-full flex items-start gap-8 shadow-sm">
                  <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="flex h-15 w-15 shrink-0 items-center justify-center rounded-[1.25rem] bg-slate-950 text-base font-black text-white group-hover:bg-purple-600 transition-colors shadow-lg">{step}</motion.div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-950 group-hover:text-purple-700 transition-colors uppercase tracking-tight">{title}</h3>
                    <p className="mt-3 text-base font-medium leading-8 text-slate-600">{text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.14 }} className="rounded-[3.5rem] border border-purple-200 bg-gradient-to-br from-white via-purple-50/40 to-indigo-50/40 p-10 lg:p-14 relative backdrop-blur-sm group shadow-inner overflow-hidden">
               <div className="grid gap-5 md:grid-cols-3 relative z-10">
                {[
                  { label: "Alert speed", value: "Realtime", icon: Bell },
                  { label: "Stores", value: "30+", icon: Smartphone },
                  { label: "Decision lag", value: "-60%", icon: Sparkles },
                ].map((item, index) => (
                  <motion.div key={item.label} variants={fadeUp(0.2 + index * 0.1)} {...cardHover} className="luminous-card luminous-surface-strong rounded-[2.2rem] border border-purple-100 bg-white p-7 text-center group/card">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-purple-50 text-purple-600 group-hover/card:bg-purple-600 group-hover/card:text-white transition-all shadow-sm"><item.icon size={26} /></div>
                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-2xl font-black text-slate-950 group-hover/card:scale-110 transition-transform">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10 rounded-[2.5rem] border border-purple-100 bg-white p-8 relative z-10 shadow-sm cursor-default">
                 <p className="text-xs font-black text-slate-800 uppercase tracking-widest">Active decision queue</p>
                 <div className="mt-8 space-y-4">
                    {[
                      { t: "Stock Push Approval", n: "Branch 02 requires 140 SKUs by EOD", p: "High" },
                      { t: "Price Correction", n: "Whitefield Saree bundle vs Target", p: "Medium" },
                      { t: "Staff Efficiency", n: "Indiranagar peak hour coverage low", p: "Alert" }
                    ].map(d => (
                      <motion.div key={d.t} whileHover={{ scale: 1.02, x: 5 }} className="rounded-2xl bg-slate-50 px-6 py-5 border border-transparent hover:border-purple-200 hover:bg-white transition-all flex items-center justify-between group/q">
                        <div>
                          <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{d.t}</p>
                          <p className="mt-1 text-xs font-medium text-slate-500">{d.n}</p>
                        </div>
                        <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                      </motion.div>
                    ))}
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-24 relative overflow-hidden font-inter">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(168,85,247,0.02),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 text-center">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">Business impact</motion.p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 lg:text-5xl uppercase tracking-tighter">Visibility that stays with the team.</h2>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-12 md:grid-cols-3">
            {[["24/7 Access", "Constant visibility", "Operational window across all timezone branches"], ["Realtime Alerts", "Zero-lag notification", "Instant push between signal and leader pocket"], ["+30% Speed", "Operational velocity", "Observed increase in decision execution time"]] .map(([value, label, note], index) => (
              <motion.div key={label} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[3.5rem] border border-slate-200 bg-white p-14 text-center group hover:bg-purple-50/40 transition-all shadow-sm">
                <motion.p animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="text-5xl font-black tracking-tight text-purple-700 transition-transform group-hover:scale-110">{value}</motion.p>
                <p className="mt-8 text-2xl font-black text-slate-950 uppercase tracking-tighter">{label}</p>
                <p className="mt-4 text-sm font-medium leading-8 text-slate-500 max-w-[220px] mx-auto opacity-70 italic group-hover:opacity-100 transition-opacity">"{note}"</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>



      <section className="py-24">
        <Container>
          <motion.div {...fadeUp()} className="mb-14 text-center"><h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 font-outfit uppercase tracking-tight">What Happens After You Enable This Feature?</h2></motion.div>
          <div className="grid overflow-hidden rounded-[4.5rem] border border-slate-200 shadow-[0_50px_150px_-70px_rgba(15,23,42,0.4)] md:grid-cols-2 relative h-full">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white p-14 lg:p-24 relative overflow-hidden group">
              <p className="text-xs font-black uppercase tracking-[0.45em] text-slate-400 relative z-10">Before Tapito Mobile</p>
              <div className="mt-14 space-y-10 text-3xl font-bold text-slate-400 relative z-10 opacity-60">
                <p>Out-of-office blindness</p>
                <p>Reactive phoned-in updates</p>
                <p>Strategic response lag</p>
                <p>Passive desk-locked data</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-slate-950 p-14 lg:p-24 text-white relative h-full group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_70%)] pointer-events-none" />
              <p className="text-xs font-black uppercase tracking-[0.45em] text-purple-300 relative z-10 font-black">After Tapito Mobile</p>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-14 space-y-10 text-3xl font-black relative z-10">
                {["Pocket command center", "Realtime active alerts", "Scalable agile leadership", "One-tap decision cards"].map((item) => (
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

      <ExploreMoreFeatures currentSlug="mobile-app" />
    </div>
  );
}

