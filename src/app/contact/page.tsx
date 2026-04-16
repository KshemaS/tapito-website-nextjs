"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Briefcase,
  Users,
  Megaphone,
  Globe,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Monitor,
  MapPin,
  Send,
  Sparkles,
  ChevronDown,
  Phone,
  Clock,
  Zap,
} from "lucide-react";
import Container from "@/components/Container";
import Orb from "@/components/Orb";
import Particles from "@/components/Particles";
import { cn } from "@/lib/utils";
import mapBg from "@/public/assets/images/contact/map-bg-without-dot.svg";

/* ─── Data ────────────────────────────────────────────────── */
const OFFICES = [
  { city: "San Francisco",    flag: "🇺🇸", address: "680 California St, Suite 1200, San Francisco, CA 94104, USA" },
  { city: "New York",         flag: "🇺🇸", address: "43 Manhasset Ave, Brooklyn, New York - 11211" },
  { city: "Boston",           flag: "🇺🇸", address: "Office #251, 829 Main Street, Ste. 200, Charlestown, Boston, MA 02129, USA" },
  { city: "Bengaluru",        flag: "🇮🇳", address: "1st Floor, #32, Salarpuria Tower II, Koramangala, Bangalore - 560034, India" },
  { city: "New Delhi",        flag: "🇮🇳", address: "Platina Tower, Mehrauli-Gurgaon Rd, Sector 28, Gurugram, Haryana 122002" },
  { city: "Toronto",          flag: "🇨🇦", address: "Suite 2605, 1228 Lakeshore Boulevard West, Toronto, ON M4E 1B1, Canada" },
  { city: "London",           flag: "🇬🇧", address: "2 Waterhouse Square, 138-142 Holborn, London, EC1N 2SW, United Kingdom" },
  { city: "Berlin",           flag: "🇩🇪", address: "Kurfürstendamm 11, 10719, Berlin, Germany" },
  { city: "São Paulo",        flag: "🇧🇷", address: "R. Purpurina, 400 - Vila Madalena, São Paulo - SP, 05433-000, Brazil" },
  { city: "Singapore",        flag: "🇸🇬", address: "Floor 21, WeWork 9 Battery Rd, Singapore 049910" },
  { city: "Kuala Lumpur",     flag: "🇲🇾", address: "WeWork HQ Plaza Lot 10.17, Seksyen 57, Jln Sultan Ismail, 50250 Kuala Lumpur" },
  { city: "Bangkok",          flag: "🇹🇭", address: "WeWork, T-One Building, 8 Sukhumvit 40 Alley, Phra Khanong, Bangkok 10110" },
  { city: "Jakarta",          flag: "🇮🇩", address: "25th Floor, Revenue Tower, SCBD, Jl. Jend. Sudirman No.52-53, Jakarta 12190" },
  { city: "Ho Chi Minh City", flag: "🇻🇳", address: "WeWork 18, Town Central, 1 Đoàn Văn Bơ, Phường 12, Quận 4, Hồ Chí Minh" },
  { city: "Dubai",            flag: "🇦🇪", address: "Media One Hotel, Floor 7, Media II Tower, Al Falak Street, Dubai" },
  { city: "Sydney",           flag: "🇦🇺", address: "100 Harris Street, Pyrmont, Sydney NSW 2009, Australia" },
];

const MAP_DOTS = [
  { city: "San Francisco",    x: 140, y: 195 },
  { city: "New York",         x: 235, y: 190 },
  { city: "Boston",           x: 250, y: 175 },
  { city: "Toronto",          x: 220, y: 165 },
  { city: "London",           x: 475, y: 155 },
  { city: "Berlin",           x: 515, y: 165 },
  { city: "São Paulo",        x: 340, y: 395 },
  { city: "Dubai",            x: 645, y: 255 },
  { city: "Bengaluru",        x: 742, y: 300 },
  { city: "New Delhi",        x: 735, y: 245 },
  { city: "Singapore",        x: 815, y: 335 },
  { city: "Kuala Lumpur",     x: 810, y: 345 },
  { city: "Bangkok",          x: 800, y: 315 },
  { city: "Jakarta",          x: 825, y: 375 },
  { city: "Ho Chi Minh City", x: 810, y: 325 },
  { city: "Sydney",           x: 915, y: 445 },
];

/* ─── Shared input class (light theme) ───────────────────── */
const inputCls =
  "w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 font-semibold text-slate-900 placeholder:font-normal placeholder:text-slate-400";

/* ─── Field wrapper ───────────────────────────────────────── */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-black uppercase tracking-[0.1em] text-slate-400">{label}</label>
      {children}
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafbfc]">

      {/* ── Background patterns (original) ─────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] -left-[10%] w-[70%] h-[70%] opacity-20">
          <Orb hue={220} hoverIntensity={0.5} />
        </div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] opacity-20">
          <Orb hue={260} hoverIntensity={0.5} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-40">
          <Particles />
        </div>
      </div>

      {/* ── HERO / CONTACT GRID ────────────────────────────── */}
      <Container className="relative z-10 pt-32 pb-24 lg:pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left column */}
          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-900 bg-gradient-to-r from-indigo-50/90 to-violet-50/90 backdrop-blur-xl rounded-full border border-indigo-200/50 shadow-sm shadow-indigo-100/50">
                <Sparkles size={13} className="text-indigo-500 animate-pulse" />
                Contact Us
              </div>

              {/* Headline with animated underline */}
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Get in touch with <br />
                <span className="relative inline-block">
                  <span className="gradient-text">our team</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              </h1>

              <p className="text-xl text-slate-500 font-medium mb-10 leading-relaxed max-w-lg">
                Connect with us to explore how Tapito can help you elevate customer engagement,
                build stronger relationships, and drive business success.
              </p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  { icon: Clock,  label: "Response in < 2 hrs",  color: "text-indigo-500" },
                  { icon: Globe,  label: "16 cities worldwide",   color: "text-violet-500" },
                  { icon: Users,  label: "5,000+ retail brands",  color: "text-purple-500" },
                  { icon: Zap,    label: "24 / 7 support",        color: "text-rose-500"   },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 220 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-[13px] font-semibold text-slate-600"
                  >
                    <s.icon size={13} className={s.color} />
                    {s.label}
                  </motion.div>
                ))}
              </div>

              {/* Reach out list */}
              <div className="space-y-8 mb-16">
                <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest">Reach out to us for:</h3>
                <div className="space-y-6">
                  {[
                    { icon: Globe,     text: "Platform details and personal demos", color: "text-rose-500",    bg: "bg-rose-50"    },
                    { icon: Users,     text: "Partnerships",                        color: "text-purple-500",  bg: "bg-purple-50"  },
                    { icon: Megaphone, text: "Press queries",                       color: "text-indigo-500",  bg: "bg-indigo-50"  },
                    { icon: Briefcase, text: "Career opportunities",               color: "text-emerald-500", bg: "bg-emerald-50" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-5 group"
                    >
                      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm", item.bg, item.color)}>
                        <item.icon size={22} strokeWidth={2} />
                      </div>
                      <span className="text-lg font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Email contacts */}
              <div className="pt-12 border-t border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { title: "Media & Press",  email: "press@tapito.ai",  icon: Mail },
                    { title: "Other Queries",  email: "hello@tapito.ai",  icon: MessageSquare },
                  ].map((c, i) => (
                    <div key={i}>
                      <h4 className="text-xl font-black text-slate-900 mb-4">{c.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed text-[15px]">
                        Write to us at{" "}
                        <a href={`mailto:${c.email}`} className="text-indigo-600 font-bold hover:underline">
                          {c.email}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column: Form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow halo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-3xl opacity-50 rounded-[3rem]" />

              <div className="relative bg-white/80 backdrop-blur-2xl rounded-[1.25rem] border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* Gradient top bar */}
                <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />

                <div className="p-8 md:p-12">
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-7 relative z-10"
                        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Field label="First Name *">
                            <input type="text" className={inputCls} placeholder="John" />
                          </Field>
                          <Field label="Last Name *">
                            <input type="text" className={inputCls} placeholder="Doe" />
                          </Field>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Field label="Work Email *">
                            <input type="email" className={inputCls} placeholder="john@company.com" />
                          </Field>
                          <Field label="Company *">
                            <input type="text" className={inputCls} placeholder="Acme Corp" />
                          </Field>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Field label="Country *">
                            <div className="relative">
                              <select className={cn(inputCls, "appearance-none cursor-pointer")}>
                                <option value="">Please Select</option>
                                <option value="US">United States</option>
                                <option value="UK">United Kingdom</option>
                                <option value="IN">India</option>
                                <option value="CA">Canada</option>
                                <option value="AU">Australia</option>
                                <option value="SG">Singapore</option>
                                <option value="AE">UAE</option>
                              </select>
                              <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                            </div>
                          </Field>
                          <Field label="Contact Reason *">
                            <div className="relative">
                              <select className={cn(inputCls, "appearance-none cursor-pointer")}>
                                <option value="">Please Select</option>
                                <option value="demo">Request a Demo</option>
                                <option value="partner">Partnership Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="press">Press &amp; Media</option>
                                <option value="careers">Careers</option>
                              </select>
                              <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                            </div>
                          </Field>
                        </div>

                        <Field label="How can we help you?">
                          <textarea
                            className={cn(inputCls, "min-h-[150px] resize-none")}
                            placeholder="Tell us about your requirements..."
                          />
                        </Field>

                        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-8">
                          <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-sm">
                            By submitting this form, I agree to Tapito&apos;s{" "}
                            <a href="#" className="text-indigo-600 font-bold hover:underline">privacy policy</a>{" "}
                            and{" "}
                            <a href="#" className="text-indigo-600 font-bold hover:underline">terms of service</a>.
                          </p>
                          <button
                            type="submit"
                            className="btn-premium whitespace-nowrap min-w-[200px] shadow-indigo-600/30 inline-flex items-center gap-2.5"
                          >
                            <Send size={16} />
                            Send Message
                          </button>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                        className="flex flex-col items-center justify-center py-20 text-center gap-6"
                      >
                        <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                          <CheckCircle2 size={40} className="text-emerald-500" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900">Message Sent!</h3>
                        <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
                          Thanks for reaching out. Our team will get back to you within 2 business hours.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-bold transition-colors"
                        >
                          ← Send another message
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>

      {/* ── WORLD PRESENCE ─────────────────────────────────── */}
      <Container className="pt-24 pb-32">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-200/60 bg-indigo-50/80 mb-6">
              <MapPin size={13} className="text-indigo-500" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-indigo-700">
                Global Presence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Presence Around the World
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
              Get in touch with us for any queries. We are happy to help you!
            </p>
          </motion.div>
        </div>

        {/* Map */}
        <div className="relative mb-32 px-4">
          <div className="relative aspect-[2/1] w-full max-w-5xl mx-auto">
            {/* Map background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                <Image src={mapBg} alt="Presence Around the World" fill className="object-contain" priority />
              </div>
            </div>

            {/* SVG overlay */}
            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full z-10 overflow-visible">
              <defs>
                <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>

              {/* Subtle animated connection lines */}
              {MAP_DOTS.slice(0, 6).map((loc, i) => (
                <motion.line
                  key={`line-${i}`}
                  x1={loc.x} y1={loc.y}
                  x2={MAP_DOTS[(i + 5) % MAP_DOTS.length].x}
                  y2={MAP_DOTS[(i + 5) % MAP_DOTS.length].y}
                  stroke="url(#lineGrad)"
                  strokeWidth="0.6"
                  strokeDasharray="5 7"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.25 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                />
              ))}

              {/* Dots */}
              {MAP_DOTS.map((loc, i) => (
                <motion.g
                  key={i}
                  className="cursor-pointer group/dot"
                  onHoverStart={() => setHoveredCity(loc.city)}
                  onHoverEnd={() => setHoveredCity(null)}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
                >
                  {/* Pulse ring */}
                  <motion.circle
                    cx={loc.x} cy={loc.y} r="12"
                    fill="url(#dotGlow)"
                    animate={{ r: [8, 18, 8], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25 }}
                  />

                  {/* Main dot */}
                  <motion.circle
                    cx={loc.x} cy={loc.y} r="5"
                    className="fill-indigo-600 stroke-white stroke-[2]"
                    whileHover={{ scale: 1.8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredCity === loc.city && (
                      <foreignObject
                        x={loc.x - 60} y={loc.y - 46}
                        width="120" height="40"
                        className="pointer-events-none overflow-visible"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.85 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.85 }}
                          transition={{ duration: 0.18 }}
                          className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-lg text-center shadow-xl border border-slate-700 whitespace-nowrap"
                        >
                          {loc.city}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-slate-900" />
                        </motion.div>
                      </foreignObject>
                    )}
                  </AnimatePresence>
                </motion.g>
              ))}
            </svg>
          </div>
        </div>

        {/* Office cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICES.map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-[1.25rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/8 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-violet-50/0 group-hover:from-indigo-50/60 group-hover:to-violet-50/40 transition-all duration-500 rounded-[1.25rem]" />
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-[1.25rem]" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">{office.flag}</span>
                  <h4 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">
                    {office.city}
                  </h4>
                </div>
                <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                  {office.address}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* ── RESOURCES SECTION ──────────────────────────────── */}
      <section className="py-32 bg-slate-900 overflow-hidden relative">
        {/* Background layers */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"><Particles /></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(99,102,241,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <Container className="relative z-10">

          {/* ── Section header ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 mb-5">
                <Sparkles size={12} className="text-indigo-400" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-indigo-300">Resources</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05]">
                Everything you need<br />
                <span className="gradient-text">to grow with Tapito</span>
              </h2>
            </div>
            <p className="text-[15px] text-slate-400 font-medium max-w-xs leading-relaxed md:text-right">
              Discover the tools, demos, and community behind the world&apos;s fastest-growing retail AI platform.
            </p>
          </motion.div>

          {/* ── Asymmetric card grid ────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* Featured card — Help Center */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.015 }}
              className="group lg:col-span-5 relative flex flex-col justify-between p-10 rounded-[1.25rem] bg-gradient-to-br from-indigo-600 to-violet-700 overflow-hidden min-h-[340px]"
            >
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-10 w-64 h-64 bg-black/20 rounded-full blur-3xl pointer-events-none" />
              {/* Grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 mb-8">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80">01 — Featured</span>
                </div>
                <div className="w-14 h-14 rounded-[1rem] bg-white/15 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/25 transition-colors duration-300">
                  <HelpCircle size={26} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Help Center</h3>
                <p className="text-sm text-white/70 font-medium leading-relaxed max-w-xs">
                  Get detailed documentation, guides, and real-time support for every Tapito feature.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-10">
                <span className="text-[11px] font-extrabold text-white/60 uppercase tracking-[0.2em]">Explore Now</span>
                <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all duration-300">
                  <ArrowRight size={16} className="text-white group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>
            </motion.a>

            {/* Right 3 cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  num: "02",
                  title: "Interactive Demo",
                  desc: "Experience the full power of Tapito AI with our hands-on product walkthrough.",
                  icon: Monitor,
                  accent: "group-hover:bg-violet-600",
                  glow: "group-hover:bg-violet-500/10",
                  tag: "group-hover:border-violet-500/40 group-hover:text-violet-300",
                },
                {
                  num: "03",
                  title: "Careers",
                  desc: "Join our mission to revolutionize retail with artificial intelligence.",
                  icon: Briefcase,
                  accent: "group-hover:bg-blue-600",
                  glow: "group-hover:bg-blue-500/10",
                  tag: "group-hover:border-blue-500/40 group-hover:text-blue-300",
                },
                {
                  num: "04",
                  title: "Growth Community",
                  desc: "Connect with 5,000+ retail leaders and share proven growth strategies.",
                  icon: Users,
                  accent: "group-hover:bg-emerald-600",
                  glow: "group-hover:bg-emerald-500/10",
                  tag: "group-hover:border-emerald-500/40 group-hover:text-emerald-300",
                },
              ].map((r, i) => (
                <motion.a
                  key={i}
                  href="#"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.55 }}
                  whileHover={{ y: -5 }}
                  className={cn(
                    "group relative flex flex-col justify-between p-7 rounded-[1.25rem] border border-slate-700/80 bg-slate-800/40 overflow-hidden transition-all duration-400",
                    "hover:border-slate-600 hover:bg-slate-800/70"
                  )}
                >
                  {/* Corner ambient glow */}
                  <div className={cn("absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500", r.glow)} />

                  <div className="relative z-10">
                    {/* Number badge */}
                    <span className={cn(
                      "inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500 border border-slate-700 px-2.5 py-1 rounded-full mb-6 transition-all duration-300",
                      r.tag
                    )}>
                      {r.num}
                    </span>

                    <div className={cn(
                      "w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400",
                      "group-hover:text-white group-hover:border-transparent transition-all duration-400 mb-5",
                      r.accent
                    )}>
                      <r.icon size={22} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-[17px] font-black text-white mb-2.5 tracking-tight leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-[13px] text-slate-400 font-medium leading-relaxed">
                      {r.desc}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center gap-2 text-[11px] font-extrabold text-slate-500 uppercase tracking-[0.18em] group-hover:text-white transition-colors duration-300">
                    Explore
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Bottom CTA strip ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-[1.25rem] border border-slate-700/60 bg-slate-800/30"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <Zap size={18} className="text-white" />
              </div>
              <p className="text-[15px] font-semibold text-slate-300">
                Not sure where to start?{" "}
                <span className="text-white font-bold">Our team is happy to guide you.</span>
              </p>
            </div>
            <a
              href="#"
              className="btn-premium inline-flex items-center gap-2 whitespace-nowrap px-7 py-3 text-[14px]"
            >
              <Send size={15} />
              Talk to an Expert
            </a>
          </motion.div>

        </Container>
      </section>

    </main>
  );
};

export default ContactPage;
