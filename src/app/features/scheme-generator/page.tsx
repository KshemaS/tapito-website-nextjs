"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  SlidersHorizontal,
  Tag,
  Quote,
  Sparkles,
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

export default function SchemeGeneratorPage() {
  const feature = featuresData.find(f => f.slug === "scheme-generator");
  if (!feature) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 selection:bg-purple-100 selection:text-purple-900 font-inter">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_36%),radial-gradient(circle_at_top_left,rgba(244,114,182,0.08),transparent_24%)]" />

      <section className="relative py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="text-reveal">
              <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-700 shadow-sm">
                <SlidersHorizontal size={14} className="animate-pulse" /> Offer creation engine
              </motion.div>
              <motion.h1 {...fadeUp(0.08)} className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-slate-950 lg:text-7xl">
                Create Smarter Offers Automatically.
              </motion.h1>
              <motion.p {...fadeUp(0.16)} className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-600 lg:text-xl font-inter">
                Generate margin-safe promotional schemes with simulation-led recommendations that balance stock clearance, customer appeal, and profitability.
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/enterprise" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-base font-black text-white shadow-[0_22px_60px_-18px_rgba(124,58,237,0.55)] transition-all hover:scale-[1.05] hover:shadow-[0_25px_70px_-15px_rgba(124,58,237,0.65)]">
                  <Play size={16} fill="currentColor" className="transition-transform group-hover:rotate-12" /> Book a Demo
                </Link>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">Simulation-led recommendations</span>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-600">Margin-safe logic</span>
                </div>
              </motion.div>
            </div>

            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.3 }} className="rounded-[3.5rem] border border-slate-200 bg-white p-7 shadow-[0_50px_140px_-70px_rgba(124,58,237,0.5)] relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100/30 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2" />
              
              <div className="flex items-center justify-between rounded-2xl border border-purple-100 bg-purple-50 px-6 py-4 relative z-10 transition-colors hover:bg-purple-100/50">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-600">Dynamic offer simulator</p>
                  <p className="mt-1 text-sm font-black text-slate-950">Premium Bedding Campaign</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-slate-950 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white soft-shine">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> AI ranked
                </div>
              </div>

              <div className="mt-8 space-y-7 relative z-10 px-2 lg:px-4">
                {[
                   { label: "Discount depth", value: "25%", width: "25%" },
                   { label: "Clearance target", value: "60%", width: "60%" },
                   { label: "Margin floor", value: "18%", width: "45%" }
                ].map((item, index) => (
                  <div key={item.label} className="group/slider">
                    <div className="mb-3 flex items-center justify-between text-xs font-black text-slate-500 uppercase tracking-widest group-hover/slider:text-purple-600 transition-colors">
                      <span>{item.label}</span>
                      <span className="text-purple-700 text-sm">{item.value}</span>
                    </div>
                    <div className="relative h-3.5 rounded-full bg-slate-100 shadow-inner overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: item.width }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }} className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-500 relative">
                        <motion.div animate={{ x: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 relative z-10">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="rounded-[2rem] border border-purple-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow group/list">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Alternative structure stack</p>
                  <div className="mt-5 space-y-3">
                    {[
                      "Buy 2 Get 1 (BOGO)",
                      "Tiered 15% + 20% bundle",
                      "Premium combo with credit"
                    ].map((item, index) => (
                      <motion.div key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 + index * 0.1 }} className="luminous-card luminous-surface-strong rounded-2xl bg-slate-50 px-5 py-4 text-sm font-bold text-slate-700 border border-transparent hover:border-purple-200 hover:bg-purple-50 transition-all cursor-default flex items-center gap-3">
                         <span className="flex h-1.5 w-1.5 rounded-full bg-purple-400" /> {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} className="luminous-card-dark soft-shine rounded-[2rem] bg-slate-950 p-6 text-white shadow-[0_30px_90px_-30px_rgba(15,23,42,0.9)] relative overflow-hidden group/winner">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none" />
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-400">AI RECOMMENDED WINNER</p>
                  <p className="mt-4 text-3xl font-black text-white group-hover/winner:text-purple-300 transition-colors tracking-tight">Buy 2 Get 1</p>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-slate-400 italic">"Clears stock 18% faster than flat 30% discount while protecting 5% more margin."</p>
                  <motion.p initial={{ opacity: 0.6 }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className="mt-6 text-xs font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2"><CheckCircle2 size={14} /> Ready for POS approval</motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-24">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
            {[["Business problem", "Discounts often move stock at the expense of margin because teams cannot test enough scenarios before launch.", "text-rose-500"], ["What Tapito detects", "Tapito detects highest-yield structures by simulating depth, stock urgency, and behavior together.", "text-purple-600"], ["What action it enables", "Teams can deploy the offer most likely to clear inventory without sacrificing the bottom line.", "text-emerald-600"]].map(([title, text, tone], index) => (
              <motion.div key={title} {...fadeUp(index * 0.12)} {...cardHover} className={`rounded-[2.5rem] border bg-white p-10 group transition-all ${index === 1 ? "border-purple-200 shadow-[0_45px_100px_-50px_rgba(124,58,237,0.5)]" : "border-slate-200 hover:border-purple-200"}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${tone}`}>{title}</p>
                <p className="mt-5 text-xl font-black leading-9 text-slate-950 uppercase tracking-tight">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-24 relative overflow-hidden font-inter">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.03),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">How it works</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 lg:text-5xl">Simulate before you suggest.</motion.h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-6">
              {[["01", "Set goals and floors", "Define stock pressure, target clearance, and margin floor before AI begins simulation."], ["02", "Simulate 1000s of paths", "Flat discounts, bundles, and tiered BOGO structures are tested against context."], ["03", "Deploy the safest winner", "The best-performing structure comes with confidence, rationale, and expected impact tokens."]].map(([step, title, text], index) => (
                <motion.div key={step} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[2.2rem] border border-slate-200 bg-white p-8 group hover:bg-slate-50 transition-colors h-full flex items-start gap-7">
                  <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-base font-black text-white group-hover:bg-purple-600 transition-colors shadow-lg">{step}</motion.div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-950 group-hover:text-purple-700 transition-colors">{title}</h3>
                    <p className="mt-4 text-base font-medium leading-8 text-slate-600">{text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.14 }} className="rounded-[3.5rem] border border-purple-200 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/50 p-10 lg:p-14 relative group shadow-inner">
               <div className="grid gap-6 md:grid-cols-3 relative z-10">
                {[
                  { label: "Simulations", value: "12,000+", icon: Play },
                  { label: "Margin shield", value: "+15%", icon: Sparkles },
                  { label: "Clearance cost", value: "-22%", icon: Tag },
                ].map((item, index) => (
                  <motion.div key={item.label} variants={fadeUp(0.2 + index * 0.1)} {...cardHover} className="luminous-card luminous-surface-strong rounded-[2.2rem] border border-purple-100 bg-white p-7 text-center group/card">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 group-hover/card:bg-purple-600 group-hover/card:text-white transition-all shadow-sm"><item.icon size={26} /></div>
                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-2xl font-black text-slate-950 transition-transform group-hover/card:scale-105">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 rounded-[2.5rem] border border-purple-100 bg-white p-8 relative z-10 shadow-sm group-hover:shadow-md transition-shadow cursor-default">
                 <p className="text-sm font-black text-slate-800 uppercase tracking-widest">Offer production output</p>
                 <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {[
                      { label: "Selected scheme", value: "Buy 2 Get 1 (BOGO)", theme: "bg-purple-50 text-purple-700" },
                      { label: "Margin status", value: "Within floor limits", theme: "bg-emerald-50 text-emerald-700" },
                      { label: "Stock velocity", value: "+18% projected", theme: "bg-indigo-50 text-indigo-700" },
                      { label: "Approval path", value: "POS Direct Sync", theme: "bg-slate-50 text-slate-700" }
                    ].map(out => (
                      <div key={out.label} className={`rounded-2xl p-4 border border-transparent hover:border-black/5 transition-all ${out.theme}`}>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{out.label}</p>
                        <p className="mt-1.5 text-sm font-black">{out.value}</p>
                      </div>
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
            <motion.h2 {...fadeUp(0.08)} className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 lg:text-5xl">Promotions that clear stock without destroying profit.</motion.h2>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-10 md:grid-cols-3">
            {[["+15%", "Margin preserved", "Average margin saved vs flat discounting"], ["+45%", "Stock clearance", "Increase in velocity for slow-moving categories"], ["-70%", "Planning time", "Consolidated simulation instead of manual Excel testing"]].map(([value, label, note], index) => (
              <motion.div key={label} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[3rem] border border-slate-200 bg-white p-12 text-center group hover:bg-purple-50/30 transition-all shadow-sm">
                <motion.p animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3.5, repeat: Infinity }} className="text-6xl font-black tracking-tight text-purple-700 transition-transform group-hover:scale-110">{value}</motion.p>
                <p className="mt-8 text-2xl font-black text-slate-950 uppercase tracking-tighter">{label}</p>
                <p className="mt-4 text-sm font-medium leading-8 text-slate-500 max-w-[200px] mx-auto opacity-70 italic group-hover:opacity-100 transition-opacity">"{note}"</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>



      <section className="py-24">
        <Container>
          <motion.div {...fadeUp()} className="mb-14 text-center"><h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 font-outfit uppercase tracking-tight">What Happens After You Enable This Feature?</h2></motion.div>
          <div className="grid overflow-hidden rounded-[4rem] border border-slate-200 shadow-[0_50px_140px_-60px_rgba(15,23,42,0.4)] md:grid-cols-2 relative h-full">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white p-12 lg:p-20 relative overflow-hidden group">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 relative z-10">Before Tapito Schemes</p>
              <div className="mt-12 space-y-9 text-2xl font-bold text-slate-400 relative z-10 opacity-60">
                <p>Random discount structures</p>
                <p>Unseen margin erosion</p>
                <p>Persistent dead stock</p>
                <p>Excel-based offer guessing</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-slate-950 p-12 lg:p-20 text-white relative h-full group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)] pointer-events-none" />
              <p className="text-xs font-black uppercase tracking-[0.4em] text-purple-300 relative z-10">After Tapito Schemes</p>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-12 space-y-9 text-2xl font-black relative z-10">
                {["Simulated profit-safe schemes", "Protected margin discipline", "Optimized stock clearance", "One-click POS deployment"].map((item) => (
                  <motion.div key={item} variants={{ initial: { x: 40, opacity: 0 }, whileInView: { x: 0, opacity: 1 } }} transition={{ duration: 0.6 }} className="flex items-center gap-7 group hover:translate-x-3 transition-transform cursor-default"><CheckCircle2 size={34} className="text-emerald-400 shrink-0" />{item}</motion.div>
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

      <ExploreMoreFeatures currentSlug="scheme-generator" />
    </div>
  );
}

