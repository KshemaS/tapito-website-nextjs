"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Play,
  Repeat,
  Send,
  Sparkles,
  Target,
  Users,
  Zap,
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

export default function CampaignAutomationPage() {
  const feature = featuresData.find(f => f.slug === "campaign-automation");
  if (!feature) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] lg:h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_38%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_24%)]" />

      <section className="relative py-10 4xl:py-28">
        <Container>
          <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-700">
                <Repeat size={14} /> Automation workflow builder UI
              </motion.div>
              <motion.h1 {...fadeUp(0.08)} className="max-w-3xl text-3xl sm:text-4xl md:text-5xl 4xl:text-7xl font-black tracking-[-0.06em] text-slate-950">
                Set Campaigns Once. Let AI Run Them Forever.
              </motion.h1>
              <motion.p {...fadeUp(0.16)} className="mt-6 max-w-4xl text-base md:text-lg 4xl:text-xl font-medium leading-7 md:leading-8 text-slate-600">
                Build always-on customer journeys that segment, trigger, message, and optimize themselves around live customer intent and revenue context.
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/enterprise" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-black text-white shadow-[0_22px_60px_-18px_rgba(37,99,235,0.55)] transition-all hover:scale-[1.05] hover:shadow-[0_25px_70px_-15px_rgba(37,99,235,0.65)]">
                  <Play size={16} fill="currentColor" className="transition-transform group-hover:scale-110" /> 
                  Book a Demo
                </Link>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">Always-on journeys across</span>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-600">WhatsApp • SMS • Email</span>
                </div>
              </motion.div>
            </div>

            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.3 }} className="rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 bg-slate-950 p-6 md:p-8 shadow-[0_50px_130px_-60px_rgba(15,23,42,0.9)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center justify-between rounded-4xl border border-white/10 bg-white/5 px-5 py-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">Journey builder</p>
                  <p className="mt-1 text-sm font-bold text-white">Win-back flow active</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300 soft-shine">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Active
                </div>
              </div>

              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
                {[
                  { icon: Users, title: "Segmentation", text: "Lapsed VIPs" },
                  { icon: Target, title: "Trigger", text: "30d Inactive" },
                  { icon: MessageSquare, title: "Message", text: "Win-back 15%" },
                  { icon: Send, title: "Execution", text: "Multi-Channel" },
                ].map((item, index) => (
                  <motion.div key={item.title} variants={{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } }} className="luminous-card-dark rounded-[1.75rem] border border-white/10 bg-white/5 p-5 group hover:bg-white/10 transition-colors">
                    <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="flex h-12 w-12 items-center justify-center rounded-4xl bg-blue-500/20 text-blue-300 transition-colors group-hover:bg-blue-500 group-hover:text-white"><item.icon size={22} /></motion.div>
                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{item.title}</p>
                    <p className="mt-2 text-sm font-black leading-6 text-white">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-[0_30px_90px_-30px_rgba(37,99,235,0.7)] group">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-100">Performance outcome</p>
                <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className="text-5xl font-black transition-transform group-hover:scale-105">12.5%</motion.p>
                    <p className="mt-2 text-sm font-bold text-blue-100">Win-back conversion rate</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-black">Rs 2.4L recovered</p>
                    <p className="mt-1 text-sm font-medium text-blue-100 italic">"from one automated intent flow"</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-16 4xl:py-24">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
            {[["Business problem", "Growth teams burn time on repetitive campaign setup and still miss the right moment to engage.", "text-rose-500"], ["What Tapito detects", "Tapito detects buying behavior, inactivity, offer sensitivity, and stock-aware targeting windows automatically.", "text-blue-600"], ["What action it enables", "Retention, reactivation, and conversion flows launch without adding manual campaign workload.", "text-emerald-600"]].map(([title, text, tone], index) => (
              <motion.div key={title} {...fadeUp(index * 0.12)} {...cardHover} className={`rounded-[1.5rem] md:rounded-[2.5rem] border bg-white p-10 group transition-all ${index === 1 ? "border-blue-200 shadow-[0_40px_80px_-40px_rgba(59,130,246,0.5)]" : "border-slate-200 hover:border-blue-200"}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.22em] ${tone}`}>{title}</p>
                <p className="mt-4 text-xl font-black leading-8 text-slate-950 group-hover:text-slate-900 transition-colors">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-16 4xl:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">How it works</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950 transition-all">An AI workflow builder that keeps campaigns moving without babysitting.</motion.h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-6">
              {[["01", "Segment continuously", "Customer groups update themselves as spend, recency, and loyalty behavior change."], ["02", "Trigger with timing", "Automation launches the right message when inactivity or intent signals show up."], ["03", "Optimize channel & offer", "Tapito keeps improving timing and incentive based on response data tokens."]].map(([step, title, text], index) => (
                <motion.div key={step} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[2rem] border border-slate-200 bg-white p-8 group hover:bg-slate-50 transition-colors relative h-full">
                  <div className="flex items-start gap-6">
                    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-4xl bg-slate-950 text-base font-black text-white group-hover:bg-blue-600 transition-colors shadow-lg">{step}</motion.div>
                    <div>
                      <h3 className="text-4xl font-black text-slate-950 group-hover:text-blue-700 transition-colors">{title}</h3>
                      <p className="mt-3 text-base font-medium leading-8 text-slate-600">{text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.14 }} className="rounded-[2rem] md:rounded-[3.5rem] border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-10 lg:p-14 relative backdrop-blur-sm shadow-inner group">
              <div className="absolute inset-0 bg-white/40 pointer-events-none rounded-[3.5rem]" />
              <div className="grid gap-6 md:grid-cols-2 relative z-10">
                {[
                  { label: "Audience", value: "VIP lapse risk", icon: Users },
                  { label: "Trigger", value: "30-day inactivity", icon: Zap },
                  { label: "Message", value: "Offer + reminder copy", icon: MessageSquare },
                  { label: "Execution", value: "Send across channels", icon: Send },
                ].map((item, index) => (
                  <motion.div key={item.label} variants={fadeUp(0.2 + index * 0.1)} {...cardHover} className="luminous-card luminous-surface-strong rounded-[2rem] border border-purple-100 bg-white p-8 shadow-sm group/card">
                    <div className="flex h-14 w-14 items-center justify-center rounded-4xl bg-purple-50 text-purple-600 group-hover/card:bg-purple-600 group-hover/card:text-white transition-all shadow-sm"><item.icon size={26} /></div>
                    <p className="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                    <p className="mt-3 text-xl font-black text-slate-950">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 4xl:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.02),transparent_60%)] pointer-events-none" />
        <Container>
          <div className="mb-14 text-center">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">Business impact</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950">Automation that lifts retention forever.</motion.h2>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-8 md:grid-cols-3">
            {[["+40% sentiments", "Retention lift", "Measured across VIP customer segments"], ["-90% effort", "Manual workload", "Zero spreadsheets or manual CSV uploads"], ["2.5x ROI", "Conversion gain", "Attributed revenue from automated triggers"]].map(([value, label, note], index) => (
              <motion.div key={label} {...fadeUp(index * 0.12)} {...cardHover} className="rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 bg-white p-12 text-center group shadow-sm hover:shadow-xl transition-all">
                <motion.p initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 + index * 0.1 }} className="text-6xl font-black text-blue-700 transition-transform group-hover:scale-110">{value.split(' ')[0]}</motion.p>
                <p className="mt-6 text-4xl font-black text-slate-950">{label}</p>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-500 italic">"{note}"</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>



      <section className="py-16 4xl:py-24">
        <Container>
          <motion.div {...fadeUp()} className="mb-14 text-center"><h2 className="text-3xl md:text-4xl 4xl:text-5xl font-black tracking-[-0.05em] text-slate-950 font-outfit uppercase tracking-tight">What Happens After You Enable This Feature?</h2></motion.div>
          <div className="grid overflow-hidden rounded-[2rem] md:rounded-[3.5rem] border border-slate-200 shadow-[0_50px_140px_-60px_rgba(15,23,42,0.4)] md:grid-cols-2 relative h-full">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white p-12 lg:p-20 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 relative z-10">Before Tapito Automation</p>
              <div className="mt-12 space-y-8 text-4xl font-bold text-slate-400 relative z-10">
                <p className="flex items-center gap-4 opacity-60">Manual customer blasts</p>
                <p className="flex items-center gap-4 opacity-60">Generic, thin offers</p>
                <p className="flex items-center gap-4 opacity-60">Low engagement rates</p>
                <p className="flex items-center gap-4 opacity-60">Revenue leakage via inactivity</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-slate-950 p-12 lg:p-20 text-white relative h-full">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-300 relative z-10">After Tapito Automation</p>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-12 space-y-8 text-4xl font-black relative z-10">
                {["Automated intent flows", "Personalized value logic", "Maximized customer LTV", "Real-time behavior triggers"].map((item) => (
                  <motion.div key={item} variants={{ initial: { x: 40, opacity: 0 }, whileInView: { x: 0, opacity: 1 } }} transition={{ duration: 0.6 }} className="flex items-center gap-6"><CheckCircle2 size={32} className="text-emerald-400" />{item}</motion.div>
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

      <ExploreMoreFeatures currentSlug="campaign-automation" />
    </div>
  );
}
