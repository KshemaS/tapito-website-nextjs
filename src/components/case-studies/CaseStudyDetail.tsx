"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Globe,
  TrendingUp,

  Users,
  ShoppingBag,
  Star,
  Zap,
  BarChart3,
  Building2,
  type LucideProps,
} from "lucide-react";

import { InteractiveGrid } from "@/components/InteractiveGrid";
import Particles from "@/components/Particles";

/* ─── Icon lookup map ─────────────────────────────────────── */
const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  TrendingUp,
  Users,
  ShoppingBag,
  Star,
  Zap,
  BarChart3,
  Globe,
  Building2,
};
import Container from "@/components/Container";
import { CASE_STUDIES, type CaseStudy } from "./data";

/* ─── helpers ─────────────────────────────────────────────── */
function MetricCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  const Icon = ICON_MAP[icon] ?? TrendingUp;
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
      <Icon size={18} className="text-[#05a0ec]" />
      <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
        {value}
      </span>
      <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

function SectionBlock({
  section,
  idx,
}: {
  section: CaseStudy["sections"][number];
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <h2 className="text-[22px] font-bold text-slate-900 mb-4 leading-snug">
        {section.heading}
      </h2>

      <div className="space-y-4">
        {section.paragraphs.map((p, pi) => (
          <p key={pi} className="text-[15px] text-slate-600 leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {section.subsections && (
        <div className="mt-6 space-y-4">
          {section.subsections.map((sub, si) => (
            <div key={si}>
              <h3 className="text-[15px] font-bold text-slate-800 mb-1">
                {sub.title}
              </h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                {sub.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {section.images && section.images.length > 0 && (
        <div
          className={`mt-8 grid gap-4 ${
            section.images.length === 1
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {section.images.map((img, ii) => (
            <div
              key={ii}
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`${section.heading} image ${ii + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Main component ──────────────────────────────────────── */
export default function CaseStudyDetail({ cs }: { cs: CaseStudy }) {
  const related = CASE_STUDIES.filter((c) => c.id !== cs.id).slice(0, 3);

  return (
    <main className="relative bg-[#fafbfc] min-h-screen overflow-hidden">
      {/* ── Background layers ────────────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_48px] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <InteractiveGrid />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-400/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* ── Body ────────────────────────────────────────────── */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto pt-28 pb-14">

          {/* Category + Back */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-[12px] font-bold text-slate-400 hover:text-[#05a0ec] transition-colors"
            >
              <ArrowLeft size={13} />
              Back
            </Link>
            <span className="w-px h-4 bg-slate-300" />
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#05a0ec] border border-blue-100">
              {cs.industry}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
          >
            {cs.headline}
          </motion.h1>

          {/* Author / meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-4 mb-8 text-[13px] font-medium text-slate-400"
          >
            {/* Author avatar */}
            <div className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-full bg-gradient-to-br ${cs.logoColor} flex items-center justify-center text-[11px] font-extrabold text-white`}
              >
                {cs.logo}
              </div>
              <span className="font-semibold text-slate-700">{cs.author}</span>
            </div>

            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-slate-400" />
              {cs.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-slate-400" />
              {cs.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe size={13} className="text-slate-400" />
              {cs.region}
            </span>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-md"
          >
            <Image
              src={cs.image}
              alt={cs.headline}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </motion.div>

          {/* ── Metrics strip ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 mb-12"
          >
            {cs.metrics.map((m, i) => (
              <MetricCard
                key={i}
                label={m.label}
                value={m.value}
                icon={m.icon}
              />
            ))}
          </motion.div>

          {/* ── Overview ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <h2 className="text-[22px] font-bold text-slate-900 mb-4">
              Over View
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              {cs.overview}
            </p>
          </motion.div>

          {/* ── Article sections ──────────────────────────── */}
          {cs.sections.map((section, idx) => (
            <SectionBlock key={idx} section={section} idx={idx} />
          ))}

          {/* ── Tags ──────────────────────────────────────── */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-2">
            {[cs.tag, cs.industry, "Tapito AI", "Retail Growth"].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full bg-slate-100 text-[12px] font-semibold text-slate-500"
              >
                #{t.replace(/\s/g, "")}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* ── More Case Studies ────────────────────────────────── */}
      <section className="relative z-20 bg-white border-t border-slate-200 py-16">
        <Container>
          <div className="flex items-center justify-end mb-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-[12px] font-bold text-slate-400 hover:text-[#05a0ec] transition-colors border border-slate-200 rounded-full px-3 py-1 hover:border-blue-200"
            >
              VIEW ALL
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((rel, idx) => (
              <motion.a
                key={rel.id}
                href={`/case-studies/${rel.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group flex flex-col"
              >
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={rel.image}
                    alt={rel.headline}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-extrabold uppercase tracking-wide text-slate-700 shadow-sm">
                      {rel.industry}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-2">
                  <span>{rel.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{rel.readTime}</span>
                </div>

                <h3 className="text-[15px] font-bold text-slate-800 leading-snug mb-2">
                  {rel.headline}
                </h3>

                <span className="mt-auto inline-flex items-center gap-1 text-[12px] font-bold text-[#05a0ec] group-hover:text-[#09358c] transition-colors">
                  Read more
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </motion.a>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
