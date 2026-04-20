"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Zap, Target, Rocket, Shield, Globe, ZapIcon, Layers3, TrendingUp, Sparkles, Building2, ChevronDown, Mail } from "lucide-react";
import Container from "./Container";
import { cn } from "@/lib/utils";
import Particles from "./Particles";

import BorderGlow from "./BorderGlow";

const plans = [
  {
    name: "Starter",
    description: "Launch Your Data Journey",
    idealFor: "Ideal for small retailers getting started with data-driven marketing",
    icon: Layers3,
    features: [
      "BI dashboard (sales & insights)",
      "Basic customer segmentation",
      "Manual campaign management",
      "Up to 10,000 customers",
      "Campaign tracking (limited)",
      "Basic ROI tracking",
      "Email & chat support",
      "API integrations (POS, CRM)",
    ],
    cta: "Book a Demo",
    popular: false,
    color: "blue",
    hue: 210,
  },
  {
    name: "Growth",
    description: "Scale with AI Intelligence",
    idealFor: "Ideal for growing retail brands & regional chains",
    icon: TrendingUp,
    features: [
      "Advanced segmentation (RFM)",
      "AI insights (limited credits)",
      "Semi-automated campaigns",
      "Up to 50,000 customers",
      "Increased campaign limits",
      "Advanced ROI analytics",
      "Performance benchmarking",
      "Priority support",
      "Free AI tokens (limited)",
    ],
    cta: "Book a Demo",
    popular: false,
    color: "sky",
    hue: 195,
  },
  {
    name: "Elite",
    description: "Full AI Automation",
    idealFor: "Ideal for large retailers & multi-location businesses",
    icon: Sparkles,
    features: [
      "Unlimited AI insights",
      "Fully automated orchestration",
      "Unlimited customers & campaigns",
      "Real-time predictive analytics",
      "Cross-channel ROI attribution",
      "Dedicated account manager",
      "Multi-location tracking",
      "Mobile analytics + voice",
      "Advanced API integrations",
      "High-volume AI token access",
    ],
    cta: "Book a Demo",
    popular: true,
    color: "brand-sky",
    hue: 200,
  },
  {
    name: "Enterprise",
    description: "Built for Scale",
    idealFor: "Ideal for enterprise retailers with complex requirements",
    icon: Building2,
    features: [
      "Platform customization",
      "Dedicated implementation team",
      "SLA-backed enterprise support",
      "Custom contracts & billing",
      "White-label capabilities",
      "Executive business reviews",
      "Custom AI models",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "slate",
    hue: 215,
  },
];

const SpotlightCard = ({ children, className, popular, hue }: { children: React.ReactNode; className?: string; popular?: boolean; hue: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={cn("relative h-full", className)}>
      {popular && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-[#09358c] rounded-full border border-blue-400 shadow-[0_8px_20px_-4px_rgba(9,53,140,0.4)] whitespace-nowrap">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.1em] text-white">
              Most Popular
            </span>
          </div>
        </motion.div>
      )}

      <motion.div
        onMouseMove={onMouseMove}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "group relative flex flex-col h-full rounded-[1.5rem] border border-slate-200/60 bg-white/70 backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(5,160,236,0.12)]",
          popular 
            ? "shadow-[0_48px_96px_-24px_rgba(9,53,140,0.22)] border-[#05a0ec]/50 ring-1 ring-[#05a0ec]/20 bg-white/90" 
            : "hover:border-blue-300/50 hover:bg-white/90 shadow-sm"
        )}
      >
        {/* Top reflection flare */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        
        {popular && (
          <div className="absolute inset-0 rounded-[1.5rem] border border-[#05a0ec]/30 pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]" />
        )}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(5, 160, 236, 0.06), transparent 40%)`
            ),
          }}
        />
        
        <div className={cn(
          "relative z-10 flex flex-col h-full rounded-[1.1rem] transition-all duration-500",
          "p-6 pt-10 pb-10"
        )}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const displayIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={false}
      className={cn(
        "group overflow-hidden transition-all duration-500 rounded-[1rem] border backdrop-blur-xl",
        isOpen 
          ? "bg-white/80 border-[#05a0ec]/60 shadow-[0_32px_64px_-16px_rgba(9,53,140,0.08)]" 
          : "bg-white/40 border-white/40 hover:border-blue-100 hover:bg-white/60 shadow-sm"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 sm:px-8 py-6 sm:py-7 flex items-center justify-between text-left group/btn"
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <div
            className={cn(
              "w-11 h-11 rounded-2xl flex items-center justify-center text-[11px] font-black transition-all duration-500",
              isOpen 
                ? "bg-gradient-to-br from-[#09358c] to-[#05a0ec] text-white shadow-lg shadow-blue-200" 
                : "bg-white/80 text-slate-400 group-hover/btn:text-[#05a0ec] border border-slate-100 group-hover/btn:border-blue-100 group-hover/btn:shadow-md group-hover/btn:shadow-blue-50/50"
            )}
          >
            {displayIndex}
          </div>
          <span
            className={cn(
              "text-[16px] font-black transition-colors duration-500 tracking-tight",
              isOpen ? "text-slate-900" : "text-slate-600 group-hover/btn:text-[#05a0ec]"
            )}
          >
            {question}
          </span>
        </div>
        <div
          className={cn(
            "w-11 h-11 rounded-2xl border flex items-center justify-center transition-all duration-500",
            isOpen
              ? "bg-slate-900 border-slate-900 text-white rotate-180"
              : "bg-white/80 border-slate-100 text-slate-400 group-hover/btn:border-blue-100 group-hover/btn:text-[#05a0ec]"
          )}
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="px-6 sm:px-8 pb-8 ml-0 sm:ml-17 text-slate-500 text-[14px] sm:text-[15px] font-medium leading-relaxed max-w-2xl">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Pricing = () => {
  const [activePlan, setActivePlan] = useState(plans[2]);

  return (
    <section className="pt-32 pb-32 lg:pt-48 relative overflow-hidden bg-[#fafbfc]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Blob 1 — top left, blue */}
        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, 40, -30, 0], scale: [1, 1.12, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[25%] -left-[20%] w-[65%] h-[65%] rounded-full bg-gradient-to-br from-[#09358c]/25 via-[#05a0ec]/15 to-transparent blur-[130px]"
        />
        {/* Blob 2 — bottom right, cyan */}
        <motion.div
          animate={{ x: [0, -60, 30, 0], y: [0, -50, 20, 0], scale: [1, 1.18, 0.92, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-[25%] -right-[20%] w-[65%] h-[65%] rounded-full bg-gradient-to-tl from-blue-300/35 via-cyan-200/20 to-transparent blur-[130px]"
        />
        {/* Blob 3 — center, blue accent */}
        <motion.div
          animate={{ scale: [1, 1.25, 0.88, 1], opacity: [0.12, 0.22, 0.10, 0.12] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] rounded-full bg-gradient-to-br from-[#05a0ec]/20 via-[#09358c]/15 to-transparent blur-[100px]"
        />
        {/* Sweeping light beam */}
        <motion.div
          animate={{ x: ["-120%", "220%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 5 }}
          className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-blue-100/20 to-transparent skew-x-[-20deg]"
        />
        {/* Particles layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-40">
          <Particles />
        </div>
      </div>

      <Container>
        <div className="text-center mb-16 relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#09358c] bg-blue-50/80 backdrop-blur-xl rounded-full border border-blue-200/50 shadow-sm shadow-blue-100/50"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap size={12} className="text-[#05a0ec] fill-current" />
              </motion.div>
              Pricing Plans
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 sm:mb-10 tracking-tighter leading-[1] md:leading-[0.95]">
              Ready to revolutionize <br className="hidden sm:block" /> <span className="text-[#09358c]">your retail analytics?</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium px-4">
              Join 500+ leading retailers who use Tapito to make smarter, faster, more profitable decisions every day.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Plan Selector */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
              {plans.map((plan, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePlan(plan)}
                  className={cn(
                    "group relative min-w-[200px] sm:min-w-[240px] lg:min-w-0 w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-500 border shrink-0",
                    activePlan.name === plan.name 
                      ? "bg-white border-[#05a0ec]/30 shadow-[0_20px_40px_-8px_rgba(9,53,140,0.12)]" 
                      : "bg-white/40 border-transparent hover:bg-white/80 hover:border-blue-100"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                        activePlan.name === plan.name 
                          ? "bg-[#09358c] text-white" 
                          : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#05a0ec]"
                      )}>
                        <plan.icon size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className={cn(
                          "text-base sm:text-lg font-black tracking-tight transition-colors",
                          activePlan.name === plan.name ? "text-[#09358c]" : "text-slate-500 group-hover:text-slate-900"
                        )}>
                          {plan.name}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">{plan.description}</p>
                      </div>
                    </div>
                    {plan.popular && (
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-blue-100/50 text-[8px] font-black text-[#09358c] uppercase tracking-widest border border-blue-200/50">
                        Popular
                      </span>
                    )}
                  </div>
                  {activePlan.name === plan.name && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-2xl border-2 border-[#05a0ec] pointer-events-none"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Side Detail Stage */}
            <div className="lg:col-span-8 min-h-[600px]">
              <div className="h-full">
                <PricingCard plan={activePlan} />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Hub — Unique Comparison */}
        <div className="mt-10 relative z-10 w-full" id="comparison">
          <div className="text-center mb-16 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-widest text-[#05a0ec] mb-6"
            >
              <Zap size={10} className="fill-current" />
              Full Feature Hub
            </motion.div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
              The technical <span className="text-[#09358c]">breakdown.</span>
            </h3>
            <p className="text-slate-500 font-medium max-w-xl mx-auto text-base sm:text-lg">
              Everything you need to know, mapped precisely across every plan tier.
            </p>
          </div>

          <div className="w-full overflow-x-auto pb-8 scrollbar-hide">
            <div className="min-w-[800px]">
              {/* Unique Floating Header */}
              <div className="grid grid-cols-12 gap-4 mb-10 px-10 py-6 sticky top-24 z-50 bg-white/60 backdrop-blur-3xl rounded-[2rem] border border-white/40 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.05)]">
                <div className="col-span-4 flex items-center">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Capabilities</span>
                </div>
                {plans.map((p, i) => (
                  <div key={i} className="col-span-2 text-center group/p">
                    <div className="flex flex-col gap-1">
                      <span className={cn(
                        "text-[14px] font-black transition-all",
                        p.popular ? "text-[#05a0ec]" : "text-slate-500 group-hover/p:text-slate-900"
                      )}>
                        {p.name}
                      </span>
                      {p.popular && (
                        <div className="mx-auto w-1 h-1 bg-[#05a0ec] rounded-full animate-pulse" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Islands */}
              {[
                {
                  title: "Data & Intelligence",
                  icon: Target,
                  rows: [
                    { name: "Customer Records", starter: "10K", growth: "50K", elite: "Unlimited", enterprise: "Unlimited" },
                    { name: "BI Visualizer", starter: true, growth: true, elite: true, enterprise: true },
                    { name: "RFM Logic", starter: false, growth: true, elite: true, enterprise: true },
                    { name: "Predictive Models", starter: false, growth: false, elite: true, enterprise: true },
                    { name: "AI Insight Tokens", starter: "Basic", growth: "10K Credits", elite: "Unlimited", enterprise: "Universal" },
                  ]
                },
                {
                  title: "Engagement Tools",
                  icon: Rocket,
                  rows: [
                    { name: "Marketing Hub", starter: "Manual", growth: "Smart-Assist", elite: "Full-Auto", enterprise: "Custom flows" },
                    { name: "Geo-Targeting", starter: false, growth: true, elite: true, enterprise: true },
                    { name: "Channel Mix", starter: "Single", growth: "Multi", elite: "Omni", enterprise: "Global" },
                    { name: "White Labeling", starter: false, growth: false, elite: false, enterprise: true },
                  ]
                },
                {
                  title: "Scale & Reliability",
                  icon: Shield,
                  rows: [
                    { name: "Service Level", starter: "Email", growth: "12h Chat", elite: "2h Manager", enterprise: "Instant Support" },
                    { name: "Onboarding", starter: "Docs", growth: "Workshop", elite: "Strategic", enterprise: "VIP White-Glove" },
                    { name: "Uptime SLA", starter: "Standard", growth: "99.9%", elite: "99.99%", enterprise: "99.999%" },
                  ]
                }
              ].map((section, sIdx) => (
                <div key={sIdx} className="mb-12 relative px-2">
                  <div className="flex items-center gap-4 mb-10 pl-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-white text-slate-900 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-slate-100">
                      <section.icon size={22} strokeWidth={2} />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight uppercase tracking-[0.1em]">{section.title}</h4>
                    <div className="h-px flex-grow bg-gradient-to-r from-slate-200 to-transparent" />
                  </div>

                  <div className="space-y-4">
                    {section.rows.map((row, rIdx) => (
                      <motion.div
                        key={rIdx}
                        className="group grid grid-cols-12 gap-4 items-center bg-white/40 hover:bg-white/90 border border-white/40 hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-10 py-5 rounded-[1.5rem] transition-all duration-300"
                      >
                        <div className="col-span-4">
                          <span className="text-[15px] font-bold text-slate-500 group-hover:text-[#09358c] transition-colors">{row.name}</span>
                        </div>
                        <div className="col-span-2 flex justify-center">{ValueBadge(row.starter)}</div>
                        <div className="col-span-2 flex justify-center">{ValueBadge(row.growth)}</div>
                        <div className="col-span-2 flex justify-center">{ValueBadge(row.elite)}</div>
                        <div className="col-span-2 flex justify-center">{ValueBadge(row.enterprise)}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-40 relative z-10 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.1em] text-blue-600 bg-blue-50/50 rounded-full border border-blue-100/50"
                >
                  FAQ
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-6 tracking-tight leading-[1.1]">
                  Frequently asked <br /> questions
                </h3>
                <p className="text-slate-500 font-medium mb-10 leading-relaxed text-[15px] max-w-sm">
                  Everything you need to know about plans, billing, and devices. Can't find your answer? We're happy to help.
                </p>

                <div className="group relative p-10 rounded-[1.5rem] bg-slate-900 overflow-hidden shadow-2xl shadow-blue-900/10">
                  <div className="absolute top-0 right-0 p-8 opacity-20 transition-transform duration-700 pointer-events-none">
                    <Sparkles size={140} className="text-[#05a0ec]" />
                  </div>
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#05a0ec]/20 blur-[100px] rounded-full" />
                  
                  <div className="relative z-10 flex flex-col items-start gap-8">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-[#05a0ec] flex items-center justify-center text-white shadow-xl shadow-blue-600/40 relative">
                       <Mail size={30} strokeWidth={1.5} />
                       <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h5 className="font-black text-white text-2xl tracking-tight mb-3">Still have questions?</h5>
                      <p className="text-slate-400 text-[15px] font-medium leading-relaxed">Our strategic team responds within 24 hours.</p>
                    </div>
                    <button className="w-full mt-4 bg-white text-slate-900 py-5 rounded-2xl font-black text-[13px] uppercase tracking-[0.2em] transition-all hover:bg-[#05a0ec] hover:text-white shadow-xl shadow-black/20 hover:shadow-blue-600/30 hover:-translate-y-1">
                      Contact support
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 xl:col-span-8">
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly can I set up Tapito?",
                    answer: "Most retailers are up and running within 24-48 hours. Our strategic team assists with the initial data integration from your POS or CRM platform."
                  },
                  {
                    question: "Which platforms and OS does Tapito support?",
                    answer: "Tapito is platform-agnostic. We integrate with major POS systems (Shopify, Square, Lightspeed) and CRMs (Salesforce, HubSpot, Klaviyo)."
                  },
                  {
                    question: "How are devices counted for billing?",
                    answer: "Billing is based on the number of active locations or terminals connected to the platform. We offer volume-based discounts for large enterprises."
                  },
                  {
                    question: "Is there a free trial?",
                    answer: "Yes, we offer a 14-day free trial for the Starter and Growth plans so you can experience the power of AI-driven insights firsthand."
                  },
                  {
                    question: "Can I switch or upgrade my plan mid-cycle?",
                    answer: "Absolutely. You can upgrade or adjust your plan at any time. Changes take effect immediately for upgrades, while downgrades apply to the next cycle."
                  },
                  {
                    question: "Does Tapito integrate with our existing SSO and directory?",
                    answer: "Yes, Enterprise customers can utilize SSO integration (Okta, Azure AD) for secure and centralized access management."
                  },
                  {
                    question: "What compliance certifications does Tapito hold?",
                    answer: "Tapito is SOC2 Type II compliant and adheres to GDPR and CCPA regulations to ensure your data is always secure and handled ethically."
                  },
                  {
                    question: "What support options are available?",
                    answer: "Support varies by plan, ranging from email and chat for Starter to dedicated account managers and 24/7 priority support for Elite and Enterprise."
                  }
                ].map((faq, fIndex) => (
                  <FAQItem key={fIndex} index={fIndex} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const ValueBadge = (value: string | boolean) => {
  if (typeof value === "boolean") {
    return value ? (
      <div className="group/badge relative flex items-center justify-center">
        {/* Premium Checkmark */}
        <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#05a0ec] flex items-center justify-center border border-blue-100/50 shadow-[0_4px_12px_rgba(5,160,236,0.12)] relative z-10 transition-transform group-hover:scale-110">
          <Check size={16} strokeWidth={3.5} />
        </div>
        <div className="absolute inset-0 w-8 h-8 bg-[#05a0ec]/20 blur-xl rounded-full scale-0 group-hover/badge:scale-110 transition-transform duration-500" />
      </div>
    ) : (
      <div className="group/badge relative flex items-center justify-center">
        {/* Negative Mark */}
        <div className="w-8 h-8 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-200/60 transition-transform group-hover:scale-110 shadow-sm">
          <X size={16} strokeWidth={3} />
        </div>
      </div>
    );
  }
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-xl bg-[#09358c]/[0.03] border border-[#09358c]/[0.06] group-hover:bg-[#05a0ec]/10 group-hover:border-[#05a0ec]/20 transition-all duration-300">
      <span className="text-[12px] font-extrabold text-slate-700 group-hover:text-[#05a0ec] tracking-tighter whitespace-nowrap uppercase">{value}</span>
    </div>
  );
};

const PricingCard = ({ plan }: { plan: typeof plans[0] }) => {
  const Icon = plan.icon;

  return (
    <SpotlightCard popular={plan.popular} hue={plan.hue}>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-10 items-center lg:items-stretch">
        {/* Left Side: Logo & Description */}
        <div className="w-full lg:w-[40%] flex flex-col h-full pb-6 pt-4 lg:pt-10 text-center lg:text-left items-center lg:items-start">
          <div className="mb-8 w-full">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 leading-none tracking-tighter">
              {plan.name}
            </h3>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#09358c] via-[#05a0ec] to-[#06dcc3] rounded-full mb-6 shadow-md shadow-blue-500/10" />
            
            <div className="space-y-3">
              <p className={cn(
                "text-[11px] font-bold uppercase tracking-[0.25em]",
                plan.popular ? "text-[#05a0ec]" : "text-[#09358c]"
              )}>
                {plan.description}
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium text-slate-600 leading-snug max-w-sm mx-auto lg:mx-0">
                {plan.idealFor}
              </p>
            </div>
          </div>

          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full lg:w-fit px-12 py-5 font-bold transition-all duration-500 flex items-center justify-center gap-4 btn-premium group/btn"
            >
              <span className="relative z-10 uppercase text-[13px] tracking-[0.2em]">{plan.cta}</span>
              <ArrowRight size={22} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-2" />
            </motion.button>
          </div>
        </div>

        {/* Right Side: Core Capabilities */}
        <div className="w-full lg:w-[60%] flex flex-col">
          <div className="h-full bg-slate-50/50 rounded-[2rem] p-6 sm:p-8 lg:p-12 border border-slate-200/40 relative overflow-hidden flex flex-col justify-center">
            {/* Subtle background decoration */}
            <div className="absolute top-4 right-4 opacity-[0.03] pointer-events-none hidden sm:block">
              <Icon size={160} />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] whitespace-nowrap">Core Capabilities</span>
              <div className="h-px flex-grow bg-slate-200" />
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {plan.features.map((feature, fIndex) => (
                <motion.li 
                  key={fIndex} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: fIndex * 0.05, duration: 0.3 }}
                  className="flex items-start gap-5 group/item"
                >
                  <div className={cn(
                    "mt-1 flex-shrink-0 w-4.5 h-4.5 rounded-lg text-white flex items-center justify-center shadow-lg transition-transform group-hover/item:scale-110",
                    "bg-[#09358c] shadow-blue-900/10"
                  )}>
                    <Check size={9} strokeWidth={4} />
                  </div>
                  <span className="text-[13px] font-bold text-slate-600 leading-tight group-hover/item:text-slate-900 transition-colors">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};



export default Pricing;
