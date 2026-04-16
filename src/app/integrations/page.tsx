"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Lock,
  Mail,
  MessageCircle,
  Play,
  Settings,
  Smartphone,
  BarChart3,
  Radio,
  Zap,
  LayoutDashboard,
  FileSpreadsheet,
  PhoneCall,
  Plus,
} from "lucide-react";
import Container from "@/components/Container";
import { InteractiveGrid } from "@/components/InteractiveGrid";

// ─── Animation ────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 30, filter: "blur(8px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, delay, ease: "easeOut" },
  } as any);

const revealVariant = {
  initial: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
  whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1, delay: 0.2, ease: "easeOut" },
} as any;

// ─── Data ─────────────────────────────────────────────────────────────────────

const INTEGRATIONS = [
  { icon: MessageCircle, label: "WhatsApp", color: "#22c55e" },
  { icon: Smartphone, label: "SMS", color: "#3b82f6" },
  { icon: Mail, label: "Email", color: "#f97316" },
  { icon: Database, label: "SAP", color: "#6366f1" },
  { icon: Cpu, label: "ERP", color: "#8b5cf6" },
  { icon: PhoneCall, label: "Call", color: "#ec4899" },
  { icon: FileSpreadsheet, label: "Excel", color: "#10b981" },
  { icon: BarChart3, label: "BI", color: "#f59e0b" },
];

const CARDS = [
  {
    icon: MessageCircle,
    name: "WhatsApp Business",
    badge: "2-way",
    desc: "Automate hyper-personalised customer engagement at scale — campaigns, alerts and responses, all in one thread.",
    bullets: ["Automated campaign triggers", "Real-time delivery alerts", "Conversation analytics"],
  },
  {
    icon: Smartphone,
    name: "SMS Gateway",
    badge: "Global",
    desc: "High-throughput, low-latency messaging for transactional and promotional communication.",
    bullets: ["99.9% delivery rate", "Alpha-sender support", "Global routing engine"],
  },
  {
    icon: Mail,
    name: "Email Marketing",
    badge: "Smart",
    desc: "Trigger intelligent email sequences mapped precisely to customer lifecycle events and purchase signals.",
    bullets: ["Segment-based workflows", "Deliverability monitoring", "Performance heatmaps"],
  },
  {
    icon: Database,
    name: "SAP Integration",
    badge: "Certified",
    desc: "Bi-directional sync with your core SAP landscape for finance, operations, and branch visibility.",
    bullets: ["Billing & inventory sync", "Branch-level snapshots", "Audit-ready data logs"],
  },
  {
    icon: Cpu,
    name: "ERP Systems",
    badge: "Native",
    desc: "Connect legacy or modern ERP systems to unify sales, inventory, and operations in one analytics engine.",
    bullets: ["Multi-source aggregation", "Custom attribute mapping", "Sub-second sync cycles"],
  },
  {
    icon: FileSpreadsheet,
    name: "Excel Connectivity",
    badge: "Data",
    desc: "Seamlessly import or sync store data from spreadsheets for rapid analysis without database overhauls.",
    bullets: ["Auto-refreshing sheets", "Bulk inventory mapping", "Secure cloud pipelines"],
  },
];

const BENEFITS = [
  { icon: Zap, label: "Real-time sync" },
  { icon: Bot, label: "Zero-touch automation" },
  { icon: BarChart3, label: "Centralised analytics" },
  { icon: Radio, label: "Omni-channel comms" },
  { icon: Lock, label: "Enterprise-grade APIs" },
  { icon: Globe, label: "Global infrastructure" },
];

const STEPS = [
  {
    step: "01",
    title: "Authenticate",
    icon: Lock,
    text: "Securely connect your tools using OAuth 2.0, API keys or enterprise SSO — in minutes, not sprints.",
  },
  {
    step: "02",
    title: "Map & Sync",
    icon: Radio,
    text: "Tapito maps data signals across systems automatically — sales, inventory, chats and campaigns all unified.",
  },
  {
    step: "03",
    title: "Activate Intelligence",
    icon: Bot,
    text: "Our AI engine synthesises cross-platform signals to surface growth opportunities and automate responses.",
  },
];

// ─── Orbital Hero ──────────────────────────────────────────────────────────────

function OrbitalHero() {
  const prefersReduced = useReducedMotion();
  const count = INTEGRATIONS.length;
  // SVG viewBox is 0 0 600 600, center = 300,300, orbit radius = 220
  const cx = 300;
  const cy = 300;
  const R = 220;

  const nodes = INTEGRATIONS.map((item, i) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    return {
      ...item,
      nx: cx + R * Math.cos(angle),
      ny: cy + R * Math.sin(angle),
    };
  });

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
      {/* SVG layer */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        aria-hidden
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.5  0 0 0 0 0.2  0 0 0 0 0.9  0 0 0 1 0" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {nodes.map((n, i) => (
            <linearGradient
              key={i}
              id={`lg-${i}`}
              gradientUnits="userSpaceOnUse"
              x1={cx}
              y1={cy}
              x2={n.nx}
              y2={n.ny}
            >
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.1" />
              <stop offset="60%" stopColor="#9333ea" stopOpacity="0.6" />
              <stop offset="100%" stopColor={n.color} stopOpacity="0.4" />
            </linearGradient>
          ))}
        </defs>

        {/* Background glow layer */}
        <circle
          cx={cx}
          cy={cy}
          r="60"
          fill="rgba(124,58,237,0.15)"
          filter="url(#coreGlow)"
        />

        {/* Orbit ring */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={R}
          fill="none"
          stroke="rgba(148,97,237,0.08)"
          strokeWidth="1"
          strokeDasharray="4 6"
          animate={prefersReduced ? {} : { rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="origin-center"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Connection lines */}
        {nodes.map((n, i) => {
          const d = `M ${cx} ${cy} L ${n.nx} ${n.ny}`;
          return (
            <React.Fragment key={i}>
              <motion.path
                d={d}
                fill="none"
                stroke={`url(#lg-${i})`}
                strokeWidth="1.5"
                strokeDasharray="5 7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1, strokeDashoffset: [0, -60] }}
                transition={{
                  pathLength: { duration: 0.8, delay: 0.6 + i * 0.08, ease: "easeOut" },
                  opacity: { duration: 0.4, delay: 0.6 + i * 0.08 },
                  strokeDashoffset: { duration: 10, repeat: Infinity, ease: "linear", delay: 1.5 },
                }}
              />
              {!prefersReduced && (
                <motion.circle
                  r="3"
                  fill={n.color}
                  filter="url(#glow)"
                  style={{
                    offsetPath: `path("${d}")`,
                  }}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1 + i * 0.3,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}

        {/* Center icon in a foreignObject to ensure perfect scaling and layout */}
        <foreignObject x={cx - 100} y={cy - 100} width="200" height="200">
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-8"
            > 
              {[1.5, 1.25].map((scale, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-4 rounded-[2.8rem] border border-white/5 bg-white/[0.02]"
                  animate={{ scale: [1, scale, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 2, ease: "easeInOut" }}
                />
              ))}
              
              <div className="w-full h-full rounded-[2.2rem] md:rounded-[2.8rem] bg-slate-950 border border-white/10 flex items-center justify-center relative z-10">
                <LayoutDashboard size={40} className="text-white relative z-10 md:hidden" />
                <LayoutDashboard size={52} className="text-white relative z-10 hidden md:block" />
              </div>
            </motion.div>
          </div>
        </foreignObject>

        {/* Peripheral nodes in foreignObjects */}
        {nodes.map((n, i) => (
          <foreignObject key={i} x={n.nx - 45} y={n.ny - 45} width="90" height="90">
            <div className="w-full h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.6 + i * 0.07 }}
                className="group"
              >
                <motion.div
                  animate={prefersReduced ? {} : { y: [0, -4, 0] }}
                  transition={{ duration: 4 + (i % 2), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-[1.2rem] md:rounded-[1.6rem] bg-white border border-slate-100 shadow-[0_10px_25px_-8px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center gap-1 transition-all duration-500 group-hover:border-purple-200 group-hover:shadow-[0_12px_35px_-10px_rgba(124,58,237,0.2)] group-hover:scale-110 overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <n.icon
                      size={18}
                      className="relative z-10 transition-colors duration-500 group-hover:text-white md:hidden"
                      style={{ color: n.color }}
                    />
                    <n.icon
                      size={24}
                      className="relative z-10 transition-colors duration-500 group-hover:text-white hidden md:block"
                      style={{ color: n.color }}
                    />
                    <span className="relative z-10 text-[6px] md:text-[7px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/80 transition-colors duration-500">
                      {n.label}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </foreignObject>
        ))}
      </svg>
    </div>
  );
}

// ─── Integration Card ──────────────────────────────────────────────────────────

function IntegrationCard({ icon: Icon, name, desc, bullets, badge, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col h-full rounded-[2rem] border border-slate-100 bg-white p-7 lg:p-9 shadow-sm hover:shadow-xl transition-shadow duration-300 will-change-transform"
    >
      {/* Decorative background accent */}
      <div className="absolute right-0 top-0 w-32 h-32 bg-slate-50/50 rounded-bl-[4rem] -z-0 transition-colors group-hover:bg-purple-50/50" />

      <div className="relative z-10 flex items-start justify-between mb-6">
        <div 
          className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-600 border border-slate-100 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110 transition-all duration-300"
        >
          <Icon size={28} />
        </div>
      </div>

      <div className="relative z-10 flex-1">
        <h3 className="text-xl font-black mb-3 tracking-tight text-slate-900 group-hover:text-purple-600 transition-colors">
          {name}
        </h3>
        <p className="text-sm font-medium leading-relaxed mb-6 text-slate-500">
          {desc}
        </p>

        <div className="space-y-3 mb-8">
          {bullets.map((b: string, i: number) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2
                size={14}
                className="text-slate-200 group-hover:text-purple-500 shrink-0 transition-colors duration-300"
              />
              <span className="text-[12px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-purple-600 transition-colors" />
          <span className="font-black text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-slate-600">
            Native connector
          </span>
        </span>
        <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300">
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function IntegrationsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900 selection:bg-purple-100 selection:text-purple-900 font-inter">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.13),transparent_40%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.10),transparent_28%)]" />

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative h-svh max-h-screen overflow-hidden flex items-center">
        <Container>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-14">

            {/* Left */}
            <div className="flex flex-col justify-center">
              <motion.div {...fadeUp()} className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                Connectivity
              </motion.div>

              <motion.h1 {...fadeUp(0.08)} className="text-4xl sm:text-6xl lg:text-[5.2rem] font-black tracking-[-0.07em] text-slate-950 leading-[0.95] mb-8">
                Master Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-600">
                  Retail Stack.
                </span>
              </motion.h1>

              <motion.p {...fadeUp(0.16)} className="max-w-xl text-lg font-medium leading-relaxed text-slate-500 mb-10">
                The intelligent hub for global commerce. Unify WhatsApp, SAP, ERP, Calls, and Excel into one high-performance ecosystem.
              </motion.p>

              <motion.div {...fadeUp(0.24)} className="flex items-center gap-4">
                <Link
                  href="/enterprise"
                  className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-xl transition-all hover:bg-purple-600 hover:scale-[1.05]"
                >
                  Book a Demo
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right: Orbital Visual */}
            <motion.div
              variants={revealVariant}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative py-12 lg:py-0"
            >
              {mounted && <OrbitalHero />}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── 2. Benefits ticker ──────────────────────────────────────────── */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-6">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.06)}
                className="flex items-center gap-3 group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <b.icon size={16} strokeWidth={2.5} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                  {b.label}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. Integration Cards ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="text-center mb-16 md:mb-20">
            <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-slate-500 shadow-sm">
              Certified Connectors
            </motion.div>
            <motion.h2 {...fadeUp(0.08)} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.05em] text-slate-950 mb-5">
              Connect in clicks,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                not months.
              </span>
            </motion.h2>
            <motion.p {...fadeUp(0.15)} className="mx-auto max-w-2xl text-base md:text-lg font-medium text-slate-500 leading-relaxed">
              Pre-engineered, vendor-certified connectors for every layer of your retail stack — zero data loss, sub-second latency.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CARDS.map((card, i) => (
              <IntegrationCard key={i} index={i} {...card} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. How It Works ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-slate-100 bg-slate-50/40">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.2fr] items-center gap-16 lg:gap-24">

            {/* Steps */}
            <div>
              <motion.div {...fadeUp()} className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-slate-500 shadow-sm">
                3-step activation
              </motion.div>
              <motion.h2 {...fadeUp(0.08)} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.05em] text-slate-950 mb-14 leading-[1.1]">
                Live in minutes,<br />
                <span className="text-purple-600">not sprints.</span>
              </motion.h2>

              <div className="space-y-10">
                {STEPS.map((s, i) => (
                  <motion.div key={i} {...fadeUp(0.1 + i * 0.12)} className="flex items-start gap-7 group">
                    <div className="flex-shrink-0 relative">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-sm text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                        <s.icon size={24} />
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className="absolute left-1/2 top-full mt-4 w-px h-6 bg-gradient-to-b from-purple-200 to-transparent" />
                      )}
                    </div>
                    <div className="pt-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-500 mb-2">{s.step}</p>
                      <h4 className="text-xl font-black tracking-tight text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">{s.title}</h4>
                      <p className="text-sm font-medium leading-relaxed text-slate-500">{s.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual dark card */}
            <motion.div
              variants={revealVariant}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="rounded-[2rem] lg:rounded-[3rem] border border-slate-800 bg-slate-950 p-8 lg:p-12 shadow-[0_50px_130px_-60px_rgba(15,23,42,0.95)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10 pointer-events-none" />

              {/* Status bar */}
              <div className="flex items-center justify-between mb-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-500/30">
                    <LayoutDashboard size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white">Tapito Hub</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">All systems live</p>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                />
              </div>

              {/* Connection items */}
              <div className="space-y-4">
                {[
                  { icon: Database, name: "SAP ", status: "Syncing", color: "text-indigo-400", ms: "12ms" },
                  { icon: MessageCircle, name: "WhatsApp API", status: "Active", color: "text-emerald-400", ms: "8ms" },
                  { icon: Cpu, name: "ERP Core", status: "Active", color: "text-emerald-400", ms: "22ms" },
                  { icon: Mail, name: "Email Gateway", status: "Active", color: "text-emerald-400", ms: "5ms" },
                ].map((conn, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    className="group/conn flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.04] px-5 py-4 hover:bg-white/[0.08] transition-all cursor-default"
                  >
                    <div className="flex items-center gap-4">
                      <conn.icon size={18} className="text-white/50 group-hover/conn:text-white transition-colors" />
                      <span className="text-sm font-bold text-white/70 group-hover/conn:text-white transition-colors">{conn.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-white/20">{conn.ms}</span>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${conn.color}`}>{conn.status}</span>
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                        className="h-1.5 w-1.5 rounded-full bg-current"
                        style={{ color: conn.status === "Syncing" ? "#818cf8" : "#34d399" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {[
                  { label: "Uptime", val: "99.99%" },
                  { label: "Latency", val: "18ms" },
                  { label: "Daily Syncs", val: "1.2B" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl font-black text-white mb-1">{stat.val}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/30">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── 5. Enterprise CTA ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <motion.div
            variants={revealVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-slate-950 px-8 py-16 md:px-20 md:py-16 text-center shadow-[0_60px_130px_-50px_rgba(15,23,42,0.9)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.18),transparent_60%),radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.14),transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div {...fadeUp()} className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-purple-300">
                Built for enterprise retail
              </motion.div>
              <motion.h2 {...fadeUp(0.08)} className="text-3xl sm:text-4xl md:text-6xl font-black tracking-[-0.06em] text-white mb-7 leading-[1.05]">
                Your business tools<br />
                work better{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">
                  together.
                </span>
              </motion.h2>
              <motion.p {...fadeUp(0.16)} className="text-base md:text-lg font-medium text-slate-400 mb-12 leading-relaxed max-w-xl mx-auto">
                Tapito is the intelligent glue for your retail stack — unifying silos, automating complexity, and driving growth across every touchpoint.
              </motion.p>
              <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="/enterprise"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-sm font-black text-slate-950 shadow-[0_20px_50px_-15px_rgba(255,255,255,0.2)] transition-all hover:bg-purple-600 hover:text-white hover:scale-[1.04] hover:shadow-[0_20px_50px_-15px_rgba(124,58,237,0.5)]"
                >
                  Book a Demo
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="inline-flex items-center gap-2 text-sm font-black text-slate-400 hover:text-white transition-colors">
                  Talk to integration experts
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
