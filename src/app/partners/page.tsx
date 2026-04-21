"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Cpu,
  Users,
  BarChart3,
  TrendingUp,
  DollarSign,
  MessageSquare,
  Quote,
  Network,
  ChevronLeft,
  ChevronRight,
  Settings,
  ShieldCheck,
  Globe,
  CheckCircle2
} from "lucide-react";
import Container from "@/components/Container";
import { InteractiveGrid } from "@/components/InteractiveGrid";

// --- Anim ---

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
} as any);

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30, filter: "blur(8px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
} as any);

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 30, filter: "blur(8px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
} as any);

const revealVariant = {
  initial: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
  whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1, delay: 0.2, ease: "easeOut" },
} as any;

// --- Data ---
const ORBIT_NODES = [
  { icon: Cpu, label: "SAP", color: "#008fd3" },
  { icon: Database, label: "Oracle", color: "#f80000" },
  { icon: Users, label: "Salesforce", color: "#00a1e0" },
  { icon: BarChart3, label: "Shopify", color: "#95bf47" },
  { icon: Network, label: "Square", color: "#3e3e3e" },
  { icon: Settings, label: "NetSuite", color: "#3b82f6" },
];

const LOGOS = [
  "SAP", "Oracle", "Microsoft", "Salesforce", "NetSuite", "Shopify", "Square", "Adyen", "Stripe", "Workday"
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "VP of Strategic Partnerships",
    company: "DataFlow",
    quote: "Being AI-first means being able to safely and quickly connect agents and MCPs to our retail data. Deploying with Tapito provided the architectural foundation we needed for enterprise velocity.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    logo: "DataFlow"
  },
  {
    name: "Michael Chen",
    role: "Chief Growth Officer",
    company: "OmniCloud",
    quote: "Partnering with Tapito fundamentally changed our market position. We've transitioned from legacy dashboards to delivering automation-first intelligence that unlocks immediate client value.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    logo: "OmniCloud"
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Retail Intelligence",
    company: "TechSync",
    quote: "The co-marketing and sales enablement resources provided by Tapito are unmatched. They truly invest in their partners' success, providing high-fidelity assets that accelerate our pipeline.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    logo: "TechSync"
  }
];

const BENEFITS = [
  {
    title: "Recurring Revenue Infrastructure",
    desc: "Earn high-margin subscription commissions that scale as your retail client portfolio grows over time.",
    icon: DollarSign,
    glowColor: "rgba(9, 53, 140, 0.15)"
  },
  {
    title: "Value-Added Service Streams",
    desc: "Deliver premium onboarding and custom AI deployments to retail giants through our standardized framework.",
    icon: Settings,
    glowColor: "rgba(5, 160, 236, 0.15)"
  },
  {
    title: "Emerging AI Retail Advantage",
    desc: "Secure high-value contracts in the booming AI-driven retail automation market before your peers.",
    icon: TrendingUp,
    glowColor: "rgba(9, 53, 140, 0.15)"
  },
  {
    title: "Zero-Touch Analytics Delivery",
    desc: "Deploy automation-first intelligence that eliminates manual digging, providing immediate client value.",
    icon: ShieldCheck,
    glowColor: "rgba(16, 185, 129, 0.15)"
  },
  {
    title: "Precision Co-Marketing Engine",
    desc: "Access hyper-targeted joint campaigns and high-fidelity branding assets to accelerate your pipeline.",
    icon: MessageSquare,
    glowColor: "rgba(244, 63, 94, 0.15)"
  },
  {
    title: "Agile Regional Expansion",
    desc: "Leverage Tapito's global cloud infrastructure to scale your partnership across multiple emerging territories.",
    icon: Globe,
    glowColor: "rgba(5, 160, 236, 0.15)"
  }
];

// --- Orbital Hero ---
function OrbitalPartnersHero() {
  const prefersReduced = useReducedMotion();
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate particles on client side only to avoid hydration mismatch
    const p = Array.from({ length: 12 }).map((_, i) => ({
      x: Math.random() * 600,
      y: Math.random() * 600,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
    }));

    // Wrap in setTimeout to avoid synchronous cascading renders
    const t = setTimeout(() => {
      setParticles(p);
    }, 0);

    return () => clearTimeout(t);
  }, []);

  const cx = 300;
  const cy = 300;
  const count = ORBIT_NODES.length;

  const nodes = ORBIT_NODES.map((item, i) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    const R = 220 + (i % 2 === 0 ? 15 : -15);
    return {
      ...item,
      nx: cx + R * Math.cos(angle),
      ny: cy + R * Math.sin(angle),
    };
  });

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" aria-hidden>
        <defs>
          <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="30" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Atmospheric Particles - Fades in once generated */}
        {particles.map((p, i) => (
          <motion.circle
            key={`p-${i}`}
            cx={p.x} cy={p.y} r={p.size}
            fill="rgba(9, 53, 140, 0.15)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Core Atmospheric Glow Layers */}
        <circle cx={cx} cy={cy} r="140" fill="rgba(37,99,235,0.06)" filter="url(#coreGlow)" />
        <circle cx={cx} cy={cy} r="280" fill="rgba(37,99,235,0.02)" filter="url(#coreGlow)" />

        {/* Central Component */}
        <foreignObject x={cx - 90} y={cy - 90} width="180" height="180" className="overflow-visible">
          <div className="w-full h-full flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.03, 1], opacity: 1 }}
              transition={{ scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.8, ease: "easeOut" } }}
              className="w-full h-full rounded-[2.8rem] bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_30px_60px_-15px_rgba(9,53,140,0.18)] flex items-center justify-center p-6 relative z-10 group"
            >
              {/* Static Dotted Border - No Rotation */}
              <div className="absolute inset-1 rounded-[2.8rem] border-2 border-dashed border-[#09358c]/10 pointer-events-none" />

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2"
              >
                <img src="/logo.svg" alt="Tapito" className="w-[105px] object-contain drop-shadow-md brightness-[1.05]" />
              </motion.div>
            </motion.div>
          </div>
        </foreignObject>

        {/* Circular Revolving Trajectory - High Precision for perfect "Straightness" and "Flow" */}
        <g style={{ transformOrigin: `${cx}px ${cy}px` }}>
          {nodes.map((n, i) => {
            // Uniform Radius and Angle for "Same Gap" and "Same Flow"
            const angleStart = (i / count) * 2 * Math.PI;
            const R = 230; // Constant radius for a pure trajectory

            // 33 Steps (every ~11 degrees) for ultimate smoothness
            const steps = 33;
            const circleX = Array.from({ length: steps + 1 }).map((_, step) => {
              const currentAngle = angleStart + (step * 2 * Math.PI) / steps;
              return cx + R * Math.cos(currentAngle) - n.nx;
            });
            const circleY = Array.from({ length: steps + 1 }).map((_, step) => {
              const currentAngle = angleStart + (step * 2 * Math.PI) / steps;
              return cy + R * Math.sin(currentAngle) - n.ny;
            });

            // Extremely subtle bobbing to keep it organic without breaking the circular path
            const floatX = [0, (i % 2 === 0 ? 5 : -5), 0];
            const floatY = [0, (i % 3 === 0 ? -6 : 6), 0];

            return (
              <foreignObject key={i} x={n.nx - 65} y={n.ny - 65} width="130" height="130" className="overflow-visible">
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                    className="group relative flex justify-center"
                  >
                    {/* Atmospheric Glow */}
                    <motion.div
                      className="absolute inset-0 bg-[#05a0ec]/5 rounded-2xl blur-xl"
                      animate={{ scale: [1, 1.15, 1], opacity: [0, 0.15, 0] }}
                      transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
                    />

                    {/* Constant Velocity Revolution Path: No Axial Rotation */}
                    <motion.div
                      animate={prefersReduced ? {} : {
                        x: circleX,
                        y: circleY
                      }}
                      transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="relative"
                    >
                      <motion.div
                        animate={prefersReduced ? {} : { x: floatX, y: floatY }}
                        transition={{ duration: 12 + i, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[4.8rem] h-[4.8rem] sm:w-[5.8rem] sm:h-[5.8rem] rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-[0_12px_25px_-5px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-1.5 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:border-[#05a0ec]/30"
                      >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-50 flex items-center justify-center mb-0.5 transition-colors group-hover:bg-[#09358c]/5">
                          <n.icon size={26} style={{ color: n.color }} className="relative z-10 transition-transform duration-500 group-hover:scale-110 opacity-90" />
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </foreignObject>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default function PartnersPage() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(TESTIMONIALS.length);
  const [isAnimating, setIsAnimating] = useState(true);

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
    setIsAnimating(true);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
    setIsAnimating(true);
  };

  useEffect(() => {
    // Seamless Jump logic
    if (activeIndex >= TESTIMONIALS.length * 2) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setActiveIndex(TESTIMONIALS.length);
      }, 700); // match transition speed
      return () => clearTimeout(timer);
    }
    if (activeIndex < TESTIMONIALS.length) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setActiveIndex(TESTIMONIALS.length * 2 - 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900 selection:bg-[#09358c]/10 selection:text-[#09358c] font-inter">
      <InteractiveGrid />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(9,53,140,0.08),transparent_50%),radial-gradient(circle_at_top_left,rgba(5,160,236,0.05),transparent_40%)]" />

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        <Container>
          <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <motion.div {...fadeUp()} className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#09358c]/10 bg-[#09358c]/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#09358c] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#05a0ec]" />
                Partner Ecosystem
              </motion.div>

              <motion.h1 {...fadeUp(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 mb-7 tracking-tight leading-[1.1]">
                Grow Faster With the <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09358c] via-[#09358c] to-[#05a0ec]">
                  Tapito Partner Ecosystem
                </span>
              </motion.h1>

              <motion.p {...fadeUp(0.2)} className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
                Join our technology, implementation, and reseller network to unlock new revenue streams with AI-powered retail intelligence.
              </motion.p>

              <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="#partner-form"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-[#09358c] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#09358c]/30 transition-all hover:bg-[#05a0ec] hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10">Become a Partner</span>
                  <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-slate-600 transition-colors hover:text-[#09358c]"
                >
                  Talk to Partnership Team
                </Link>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div variants={revealVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="relative">
              {mounted && <OrbitalPartnersHero />}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── 2. Trusted Partners Logo Marquee ───────────────────────────────────────── */}
      <section className="py-12 bg-[#09358c]/5 border-y border-[#09358c]/10 relative overflow-hidden">
        <Container>
          <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
            Trusted by Technology and Retail Ecosystem Partners
          </p>
        </Container>
        <div className="relative flex w-full overflow-hidden">
          {/* Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block" />

          <motion.div
            className="flex gap-16 md:gap-24 items-center whitespace-nowrap pl-16 md:pl-24"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={i}
                className="text-2xl font-black tracking-tighter text-[#09358c] transition-colors duration-600 hover:text-[#05a0ec] grayscale hover:grayscale-0 cursor-default opacity-60 hover:opacity-100"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Testimonials (Premium Slider with Atmospheric Depth) ─────────── */}
      <section className="py-12 lg:py-24 bg-[#f4f7fe] relative overflow-hidden">
        {/* Advanced Atmospheric Layers for Depth */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] bg-[#05a0ec]/5 blur-[120px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[45%] h-[55%] bg-[#09358c]/5 blur-[100px] rounded-full pointer-events-none"
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <Container>
          {/* Section Header */}
          <div className="mb-6 lg:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-2xl">
              <motion.h2 {...fadeUp(0.1)} className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight ">
                What Our <br className="hidden lg:block" />
                <span className="text-[#09358c]">Partners Say</span>
              </motion.h2>
            </div>
            {/* Navigation Tier (Right Aligned Below Title) */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 border-slate-200 bg-white text-slate-900 shadow-sm hover:shadow-md hover:border-[#05a0ec] hover:text-[#09358c]"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 border-slate-200 bg-white text-slate-900 shadow-sm hover:shadow-md hover:border-[#05a0ec] hover:text-[#09358c]"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="flex justify-center items-center relative py-10 px-4">
              {/* Previous Card Peek (Implicit) */}
              <div className="relative w-full overflow-visible flex justify-center">
                <div
                  className={`flex w-full ${isAnimating ? "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" : ""}`}
                  style={{
                    transform: `translateX(calc(-${activeIndex * 100}%))`,
                  }}
                >
                  {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                    <motion.div
                      key={i}
                      className="w-full shrink-0 flex justify-center px-4 md:px-12"
                    >
                      <div className={`w-full max-w-6xl bg-white p-10 lg:p-14 rounded-[2.5rem] shadow-[0_50px_120px_-30px_rgba(9,53,140,0.12)] border border-slate-200/40 relative transition-all duration-1000 ${i % TESTIMONIALS.length === activeIndex % TESTIMONIALS.length ? "scale-100 opacity-100" : "scale-[0.92] opacity-50 blur-[6px]"}`}>
                        {/* Company Logo/Name (Modern Style) */}
                        <div className="flex items-center gap-2 mb-8 text-xl font-black text-slate-900 tracking-tighter opacity-15 uppercase">
                          {t.company}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-700 leading-relaxed mb-12 lg:mb-14 tracking-tight max-w-4xl">
                          "{t.quote}"
                        </blockquote>

                        {/* Profile (Horizontal Style) */}
                        <div className="flex items-center gap-5 mt-auto">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-14 h-14 rounded-xl object-cover shadow-sm bg-slate-100"
                          />
                          <div className="flex flex-col">
                            <h4 className="text-lg font-black text-[#05a0ec] leading-none mb-2">{t.name}</h4>
                            <p className="text-sm font-bold text-slate-800 ">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Strategic Advantages (Live Interactive Grid) ────────────────── */}
      <section className="py-24 lg:py-40 relative bg-white overflow-hidden">
        {/* Tactical Dots Background */}
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 px-6 sm:px-12 lg:px-24 w-full">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
            <motion.h2 {...fadeUp(0.1)} className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Benefits of Choosing a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09358c] via-[#09358c] to-[#05a0ec]">Tapito Partnership</span>
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="text-base lg:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Experience the power of a sovereign, live-synced infrastructure. Our platform provides a reactive architectural foundation that evolves with your business.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-24 max-w-[1400px] mx-auto relative text-left">
            {BENEFITS.map((b, i) => {
              // Line under icon (i-2) reaches this icon at: (100+100)/(300+100)*4 = 2.0s
              // Pulse fires at that moment, then repeats every 4s (= line cycle)
              const PULSE_DURATION = 0.65;
              const LINE_CYCLE     = 4;
              const hasPulse       = i >= 2;
              const pulseDelay     = (i - 2) * 0.7 + 2.0;   // only used when hasPulse
              const repeatDelay    = LINE_CYCLE - PULSE_DURATION;
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ rotateX: i % 2 === 0 ? 2 : -2, rotateY: i % 2 === 0 ? 5 : -5 }}
                transition={{ duration: 0.6 }}
                className="group relative flex items-start gap-10"
              >
                {/* Vertical Timeline Line — hidden for last-row items to avoid dangling line */}
                {i < BENEFITS.length - 2 && (
                  <div
                    className="absolute left-[27px] top-14 bottom-[-6rem] w-[2px] bg-slate-50 pointer-events-none hidden md:block overflow-hidden"
                    aria-hidden="true"
                  >
                    {/* Traveling Data Pulse */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-[#09358c]/40 to-transparent"
                      animate={{ top: ["-100%", "300%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.7 }}
                    />
                  </div>
                )}

                {/* Circular Icon Node */}
                <div className="relative z-10 shrink-0">
                  {/* Pulse rings — only fire when the line from the row above arrives */}
                  {hasPulse && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-[#09358c]/25 rounded-full"
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: [1, 2.3], opacity: [0.5, 0] }}
                        transition={{
                          duration: PULSE_DURATION,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: pulseDelay,
                          repeatDelay,
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-[#09358c]/15 rounded-full"
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: [1, 1.7], opacity: [0.35, 0] }}
                        transition={{
                          duration: PULSE_DURATION,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: pulseDelay + 0.12,
                          repeatDelay,
                        }}
                      />
                    </>
                  )}
                  <div className="relative w-14 h-14 rounded-full bg-[#09358c]/5 text-[#09358c] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white">
                    <b.icon size={22} strokeWidth={2} />
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-base text-slate-500 font-medium leading-relaxed max-w-lg opacity-80 group-hover:opacity-100 transition-opacity">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Why Partner & Form ─────────────────────────────────────────────── */}
      <section id="partner-form" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left Box */}
            <div className="lg:sticky lg:top-32 z-10">
              <motion.div {...fadeLeft()} className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#09358c]/10 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#09358c] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#05a0ec]" />
                Join The Network
              </motion.div>

              <motion.h2 {...fadeLeft(0.1)} className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-8">
                Why Partner With Tapito?
              </motion.h2>

              <motion.div {...fadeLeft(0.2)} className="space-y-6">
                {[
                  "AI-powered retail intelligence platform",
                  "Recurring revenue partnership model",
                  "Technical integration support",
                  "Dedicated onboarding assistance",
                  "Sales enablement resources",
                  "Global expansion opportunities"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#09358c]/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-[#09358c]" />
                    </div>
                    <p className="text-base sm:text-lg font-bold text-slate-700">{item}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Form Card */}
            <motion.div
              {...fadeRight(0.2)}
              className="bg-white rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-12 border border-slate-100 shadow-[0_45px_100px_-20px_rgba(9,53,140,0.08)] relative z-20"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#09358c]/5 blur-[100px] pointer-events-none rounded-full shrink-0" />

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-950 mb-8 tracking-tight">Apply for Partnership</h3>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#09358c] focus:border-transparent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Company Name</label>
                      <input type="text" placeholder="Acme Inc" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#09358c] focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Email</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#09358c] focus:border-transparent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Phone Number</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#09358c] focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Country / Region</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#09358c] focus:border-transparent transition-all appearance-none cursor-pointer">
                        <option value="">Select your country...</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Aland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia</option>
                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">British Indian Ocean Territory</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo, Democratic Republic of the Congo</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Cote D'Ivoire</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curacao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">Heard Island and Mcdonald Islands</option>
                        <option value="VA">Holy See (Vatican City State)</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran, Islamic Republic of</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP">Korea, Democratic People's Republic of</option>
                        <option value="KR">Korea, Republic of</option>
                        <option value="XK">Kosovo</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Lao People's Democratic Republic</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libyan Arab Jamahiriya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia, Federated States of</option>
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">Palestinian Territory, Occupied</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">Reunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barthelemy</option>
                        <option value="SH">Saint Helena</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">Saint Vincent and the Grenadines</option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SX">Sint Maarten</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UM">United States Minor Outlying Islands</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.s.</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Message (Optional)</label>
                    <textarea rows={4} placeholder="Tell us more about your partnership goals..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#09358c] focus:border-transparent transition-all resize-none" />
                  </div>

                  <button className="w-full relative group bg-[#09358c] text-white rounded-xl py-4 text-sm font-bold shadow-xl shadow-[#09358c]/20 hover:bg-[#05a0ec] transition-all duration-300 overflow-hidden">
                    <span className="relative z-10">Submit Application</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── 6. Final CTA ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#05a0ec]/5 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 {...fadeUp()} className="text-4xl sm:text-6xl font-black text-slate-950 mb-8 tracking-tight leading-tight">
              Ready to redefine <br />
              <span className="text-[#09358c]">Retail Intelligence?</span>
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
              Join the ecosystem that's powering the next generation of retail automation. Let's build something exceptional together.
            </motion.p>
            <motion.div {...fadeUp(0.2)}>
              <Link
                href="#partner-form"
                className="inline-flex items-center gap-3 rounded-full bg-[#09358c] px-10 py-5 text-base font-black text-white shadow-2xl shadow-[#09358c]/40 transition-all hover:bg-[#05a0ec] hover:scale-[1.05]"
              >
                Get Started Now
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
