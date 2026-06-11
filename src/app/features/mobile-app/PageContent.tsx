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
  Mic,
  Bot,
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

const bubbleVariant = (side: "left" | "right") => ({
  initial: { opacity: 0, x: side === "left" ? -30 : 30, scale: 0.9 },
  whileInView: { opacity: 1, x: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
} as any);

export default function MobileAppPage() {
  const feature = featuresData.find(f => f.slug === "mobile-app");
  if (!feature) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 selection:bg-[#09358c]/10 selection:text-[#09358c] font-inter">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] lg:h-[520px] bg-[radial-gradient(circle_at_top_right,rgba(9,53,140,0.1),transparent_36%),radial-gradient(circle_at_top_left,rgba(5,160,236,0.08),transparent_24%)]" />

      <section className="relative py-12 md:py-20 4xl:py-28">
        <Container>
          <div className="grid gap-10 lg:gap-20 lg:grid-cols-[0.92fr_1.08fr] items-center">
            <div className="text-reveal">
              <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#09358c]/10 bg-[#09358c]/5 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#09358c] shadow-sm">
                <Mic size={14} className="animate-pulse" /> Voice-Powered Intelligence
              </motion.div>
              <motion.h1 {...fadeUp(0.08)} className="max-w-3xl text-3xl sm:text-4xl md:text-5xl 4xl:text-7xl font-black tracking-[-0.06em] text-slate-950 leading-tight">
                Ask Your Business <br /> <span className="text-[#09358c]">Anything. Anywhere.</span>
              </motion.h1>
              <motion.p {...fadeUp(0.16)} className="mt-8 max-w-4xl text-base md:text-lg 4xl:text-xl font-medium leading-8 md:leading-9 text-slate-600 font-inter">
                Turn everyday business questions into instant answers through voice and chat. Put Tapito in every leader's pocket with hands-free operational control and real-time decision cards.
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-6">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#09358c] to-[#05a0ec] px-10 py-5 text-base font-black text-white shadow-[0_25px_60px_-18px_rgba(9,53,140,0.4)] transition-all hover:scale-[1.05] hover:shadow-[0_30px_70px_-15px_rgba(5,160,236,0.4)]">
                  <Play size={18} fill="currentColor" className="transition-transform group-hover:scale-125" /> 
                  Book a Demo
                </Link>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">Retail intelligence via</span>
                  <span className="text-xs font-black uppercase tracking-widest text-[#09358c]">Voice • Chat • Analysis</span>
                </div>
              </motion.div>
            </div>

            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.3 }} className="relative flex justify-center group">
              <div className="absolute h-[420px] w-[420px] rounded-full bg-[#09358c]/10 blur-[130px] -z-10 animate-pulse" />
              <motion.div whileHover={{ rotateY: -10, rotateX: 5 }} transition={{ duration: 0.6 }} className="relative max-w-[540px] rounded-[2rem] md:rounded-[3.5rem] border-[12px] border-slate-900 bg-slate-950 p-4 perspective-1000 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-[#09358c]/10 to-transparent pointer-events-none" />
                
                <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 h-full flex flex-col">
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-[#09358c] flex items-center justify-center text-white"><Bot size={18} /></div>
                      <div>
                        <p className="text-xs font-black text-white">Tapito AI</p>
                        <p className="text-[8px] font-black uppercase tracking-widest text-emerald-400">Context active</p>
                      </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white cursor-pointer"><Mic size={18} /></motion.div>
                  </div>

                  <div className="flex-1 p-6 space-y-5">
                    <motion.div variants={bubbleVariant("left")} className="max-w-[85%] rounded-[1.5rem] rounded-tl-none bg-white/8 p-4 text-[11px] font-medium text-slate-200 border border-white/5">
                      Yesterday revenue closed at <span className="font-black text-white">$17,500</span>. Want the branch performance summary?
                    </motion.div>
                    <motion.div variants={bubbleVariant("right")} className="ml-auto max-w-[80%] rounded-[1.5rem] rounded-tr-none bg-gradient-to-r from-[#09358c] to-[#05a0ec] p-4 text-[11px] font-black text-white shadow-lg">
                      Yes. Which branch had the highest GP margin?
                    </motion.div>
                    
                    <motion.div variants={bubbleVariant("left")} className="rounded-2xl border border-[#09358c]/20 bg-[#09358c]/5 p-4 group/card">
                       <div className="flex items-center justify-between">
                         <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#05a0ec]">Voice Insight Preview</p>
                         <Waves size={16} className="text-[#05a0ec]" />
                       </div>
                       <p className="mt-3 text-sm font-black text-white">Branch 04: 32% GP Margin</p>
                       <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1 }} className="h-full bg-[#05a0ec]" />
                       </div>
                    </motion.div>

                    <div className="space-y-3">
                      {[
                        { title: "Approve Bonus", note: "Branch 04 Staff Sprint", color: "text-emerald-400" },
                        { title: "Investigate Bias", note: "Branch 08 Margin Erosion", color: "text-rose-400" }
                      ].map((item, idx) => (
                        <motion.div key={item.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 + idx * 0.1 }} className="rounded-2xl bg-white/5 border border-white/5 p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors">
                          <div>
                            <p className="text-xs font-black text-white">{item.title}</p>
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{item.note}</p>
                          </div>
                          <ArrowRight size={12} className="text-slate-500" />
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

      <section className="border-y border-slate-200 bg-slate-50/80 py-16 4xl:py-24 px-4 font-inter">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
            {[["The Problem", "Insights stay trapped in desk-locked dashboards while decisions happen on the shop floor.", "text-rose-500"], ["Tapito Detects", "The app detects intent in voice queries and pushes action-ready alerts instantly to your pocket.", "text-[#09358c]"], ["The Outcome", "Leaders remain decisive and present, closing the gap between insight and response.", "text-emerald-600"]].map(([title, text, tone], index) => (
              <motion.div key={title} {...fadeUp(index * 0.1)} {...cardHover} className={`rounded-[1.5rem] md:rounded-[2.5rem] border bg-white p-10 group transition-all h-full ${index === 1 ? "border-[#09358c]/20 shadow-[0_45px_100px_-50px_rgba(9,53,140,0.3)]" : "border-slate-200 hover:border-[#09358c]/20"}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${tone}`}>{title}</p>
                <p className="mt-5 text-xl font-black leading-9 text-slate-950 uppercase tracking-tight">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Voice Command Highlight Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-slate-950 text-white font-inter">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(9,53,140,0.2),transparent_50%)]" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#05a0ec] mb-8">
                <Mic size={14} className="animate-pulse" /> Hands-Free Control
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.05em] leading-tight mb-8 uppercase tracking-tighter">
                Command Your Floor <br /> <span className="text-[#05a0ec]">With Just Your Voice.</span>
              </h2>
              <p className="text-lg md:text-xl font-medium text-slate-400 leading-relaxed mb-12 max-w-lg">
                Stop digging through menus. Tapito's advanced NLP engine interprets complex retail queries instantly, allowing you to manage inventory, staff bonuses, and margin alerts while moving.
              </p>
              
              <div className="space-y-6">
                {[
                  "Which branch has the highest GP leak right now?",
                  "Show me the salesman bias for category 'Premium Tiles'",
                  "Approve the secondary cross-sell bonus for Branch 08",
                  "What is the current primary-to-secondary conversion rate?"
                ].map((query, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#05a0ec]/10 flex items-center justify-center text-[#05a0ec] group-hover:bg-[#05a0ec] group-hover:text-white transition-all">
                      <Mic size={14} />
                    </div>
                    <span className="text-sm md:text-base font-bold text-slate-300 group-hover:text-white transition-colors">"{query}"</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl flex items-center justify-center p-12 overflow-hidden group">
                {/* Voice Waves */}
                <div className="absolute inset-0 flex items-center justify-center gap-1.5   opacity-80 transition-opacity">
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        height: [20, Math.random() * 150 + 50, 20],
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.05,
                        ease: "easeInOut"
                      }}
                      className="w-1.5 bg-gradient-to-t from-[#09358c] via-[#05a0ec] to-[#09358c] rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden font-inter">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(9,53,140,0.02),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-[#09358c]">How it works</motion.p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-[-0.05em] text-slate-950 uppercase tracking-tighter">A strategist in your pocket.</h2>
          </div>
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-4 md:space-y-6">
              {[["01", "Ask naturally", "Speak or type the same way you would ask an analyst or manager."], ["02", "Interpret context", "Tapito understands retail language, time windows, and follow-up chains."], ["03", "Act on decision cards", "Responses include the metric, the shift, and the suggested next move in a mobile card."]].map(([step, title, text], index) => (
                <motion.div key={step} {...fadeUp(index * 0.15)} {...cardHover} className="rounded-[1.75rem] md:rounded-[2.2rem] border border-slate-200 bg-white p-6 md:p-8 group hover:bg-slate-50 transition-colors h-full flex items-start gap-4 md:gap-8 shadow-sm">
                  <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="flex h-12 w-12 md:h-15 md:w-15 shrink-0 items-center justify-center rounded-[1rem] md:rounded-[1.25rem] bg-slate-950 text-sm md:text-base font-black text-white group-hover:bg-[#09358c] transition-colors shadow-lg">{step}</motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-4xl font-black text-slate-950 group-hover:text-[#09358c] transition-colors uppercase tracking-tight">{title}</h3>
                    <p className="mt-2 md:mt-3 text-sm md:text-base font-medium leading-relaxed md:leading-8 text-slate-600">{text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.14 }} className="rounded-[2rem] md:rounded-[3.5rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/40 p-6 md:p-10 lg:p-14 relative backdrop-blur-sm group shadow-inner overflow-hidden">
               <div className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-3 relative z-10">
                {[
                  { label: "Voice Enabled", value: "Hands-free", icon: Mic },
                  { label: "Alert speed", value: "Realtime", icon: Bell },
                  { label: "Decision lag", value: "-90%", icon: Sparkles },
                ].map((item, index) => (
                  <motion.div key={item.label} variants={fadeUp(0.2 + index * 0.1)} {...cardHover} className="luminous-card luminous-surface-strong rounded-[1.75rem] md:rounded-[2.2rem] border border-slate-100 bg-white p-5 md:p-7 text-center group/card">
                    <div className="mx-auto flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-[0.8rem] md:rounded-[1.2rem] bg-[#09358c]/5 text-[#09358c] group-hover/card:bg-[#09358c] group-hover/card:text-white transition-all shadow-sm"><item.icon size={20} className="md:w-6 md:h-6" /></div>
                    <p className="mt-4 md:mt-5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-slate-400">{item.label}</p>
                    <p className="mt-1 md:mt-2 text-2xl md:text-4xl font-black text-slate-950 group-hover/card:scale-110 transition-transform">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 md:mt-10 rounded-[1.75rem] md:rounded-[2.5rem] border border-blue-100 bg-white p-6 md:p-8 relative z-10 shadow-sm cursor-default">
                 <p className="text-[10px] md:text-xs font-black text-slate-800 uppercase tracking-widest">Active decision queue</p>
                 <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
                    {[
                      { t: "Stock Push Approval", n: "Branch 02 requires 140 units", p: "High" },
                      { t: "Staff Bonus Correction", n: "High cross-sell bias in Branch 08", p: "Alert" }
                    ].map(d => (
                      <motion.div key={d.t} whileHover={{ scale: 1.02, x: 5 }} className="rounded-[1.5rem] md:rounded-4xl bg-slate-50 px-4 md:px-6 py-4 md:py-5 border border-transparent hover:border-[#09358c]/20 hover:bg-white transition-all flex items-center justify-between group/q">
                        <div className="min-w-0 pr-4">
                          <p className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-tight truncate">{d.t}</p>
                          <p className="mt-0.5 md:mt-1 text-[10px] md:text-xs font-medium text-slate-500 truncate">{d.n}</p>
                        </div>
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#09358c] animate-pulse" />
                      </motion.div>
                    ))}
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden font-inter">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(9,53,140,0.02),transparent_70%)] pointer-events-none" />
        <Container>
          <div className="mb-14 text-center">
            <motion.p {...fadeUp()} className="text-xs font-black uppercase tracking-[0.22em] text-[#09358c]">Business impact</motion.p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-[-0.05em] text-slate-950 uppercase tracking-tighter">Visibility that stays with the team.</h2>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[["Hands-free", "Voice Command", "Operational window across all branches via voice"], ["Realtime Alerts", "Zero-lag notification", "Instant push between signal and leader pocket"], ["<2s", "Decision Speed", "Average response for complex retail queries"]] .map(([value, label, note], index) => (
              <motion.div key={label} {...fadeUp(index * 0.15)} {...cardHover} className={`rounded-[2rem] md:rounded-[3.5rem] border border-slate-200 bg-white p-8 lg:p-14 text-center group hover:bg-[#09358c]/5 transition-all shadow-sm ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <motion.p animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight text-[#09358c] transition-transform group-hover:scale-110">{value}</motion.p>
                <p className="mt-6 text-xl lg:text-2xl font-black text-slate-950 uppercase tracking-tighter break-words">{label}</p>
                <p className="mt-4 text-sm font-medium leading-7 md:leading-8 text-slate-500 max-w-[220px] mx-auto opacity-70 italic group-hover:opacity-100 transition-opacity">"{note}"</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <motion.div {...fadeUp()} className="mb-14 text-center"><h2 className="text-3xl md:text-4xl font-black tracking-[-0.05em] text-slate-950 font-outfit uppercase tracking-tight">What Happens After You Enable This Feature?</h2></motion.div>
          <div className="grid overflow-hidden rounded-[2rem] md:rounded-[4.5rem] border border-slate-200 shadow-[0_50px_150px_-70px_rgba(15,23,42,0.4)] lg:grid-cols-2 relative h-full">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white p-8 lg:p-14 relative overflow-hidden group">
              <p className="text-xs font-black uppercase tracking-[0.45em] text-slate-400 relative z-10">Before Tapito Mobile</p>
              <div className="mt-6 lg:mt-14 space-y-4 lg:space-y-10 text-base lg:text-2xl font-bold text-slate-400 relative z-10 opacity-60">
                <p>Out-of-office blindness</p>
                <p>Reactive phoned-in updates</p>
                <p>Strategic response lag</p>
                <p>Passive desk-locked data</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-slate-950 p-8 lg:p-14 text-white relative h-full group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,53,140,0.15),transparent_70%)] pointer-events-none" />
              <p className="text-xs font-black uppercase tracking-[0.45em] text-[#05a0ec] relative z-10 font-black">After Tapito Mobile</p>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-8 lg:mt-14 space-y-4 lg:space-y-10 text-base lg:text-2xl font-bold text-white relative z-10">
                {["Voice query everything", "Realtime active alerts", "Scalable agile leadership", "One-tap decision cards"].map((item) => (
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
              className="bg-gradient-to-br from-[#09358c] to-[#05a0ec] rounded-[2.5rem] p-10 md:p-14 lg:p-20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3" />

              <div className="relative z-10 max-w-3xl">
                <Quote size={48} className="text-white/20 mb-6" />
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-8">
                  {feature.quote.text}
                </blockquote>
                <p className="text-white/70 font-bold text-base">
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
