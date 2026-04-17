"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Sparkles,
  Search,
} from "lucide-react";
import Container from "@/components/Container";
import Particles from "@/components/Particles";
import { cn } from "@/lib/utils";
import { INDUSTRIES, CASE_STUDIES } from "./data";

/* ─── Component ───────────────────────────────────────────── */
export const CaseStudiesListing = () => {
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = CASE_STUDIES.filter((cs) => {
    const matchIndustry =
      activeIndustry === "All" || cs.industry === activeIndustry;
    const matchSearch =
      search === "" ||
      cs.company.toLowerCase().includes(search.toLowerCase()) ||
      cs.headline.toLowerCase().includes(search.toLowerCase()) ||
      cs.industry.toLowerCase().includes(search.toLowerCase());
    return matchIndustry && matchSearch;
  });

  return (
    <section className="pb-32 relative z-10">
      <Container>

        {/* ── Filter bar ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-12"
        >
          {/* Industry tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={cn(
                  "px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200",
                  activeIndustry === ind
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white border border-slate-200 text-slate-500 hover:border-blue-200 hover:text-[#05a0ec]"
                )}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search
              size={15}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search case studies…"
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-200 text-[13px] font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#05a0ec] focus:ring-2 focus:ring-[#05a0ec]/15 transition-all duration-200"
            />
          </div>
        </motion.div>

        {/* ── Grid ────────────────────────────────────────── */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 gap-4 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
              <Search size={24} className="text-slate-400" />
            </div>
            <p className="text-xl font-bold text-slate-900">No results found</p>
            <p className="text-slate-400 font-medium">
              Try a different industry or search term.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {filtered.map((cs, idx) => (
              <motion.a
                key={cs.id}
                href={`/case-studies/${cs.id}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: idx * 0.07,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col"
              >
                {/* ── Image block ───────────────────────── */}
                <div className="relative w-full aspect-[16/10] rounded-[1.25rem] overflow-hidden mb-8">
                  <Image
                    src={cs.image}
                    alt={cs.headline}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category tag — top-left overlay */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-700 shadow-sm">
                      {cs.industry}
                    </span>
                  </div>
                </div>

                {/* ── Meta row ──────────────────────────── */}
                <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-400 mb-3">
                  <span>{cs.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{cs.readTime}</span>
                </div>

                {/* ── Headline ──────────────────────────── */}
                <h2 className="text-[18px] font-bold text-slate-900 mb-3 leading-snug tracking-tight">
                  {cs.headline}
                </h2>

                {/* ── Summary ───────────────────────────── */}
                <p className="text-[14px] font-medium text-slate-500 leading-relaxed mb-8 flex-1">
                  {cs.summary}
                </p>

                {/* ── CTA ───────────────────────────────── */}
                <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#05a0ec] group-hover:text-[#09358c] transition-colors">
                  Read Case Study
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* ── Bottom CTA strip ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-48 relative overflow-hidden rounded-[1.25rem] bg-slate-900 p-12 text-center"
        >
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#09358c]/30 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#05a0ec]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Particles />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
              <Zap size={12} className="text-[#05a0ec]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-blue-300">
                Your Brand, Next
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to write your own <br />
              <span className="gradient-text">success story?</span>
            </h3>
            <p className="text-[15px] text-slate-400 font-medium max-w-xl mx-auto mb-8 leading-relaxed">
              Join 500+ retailers who chose Tapito to transform their customer
              engagement and drive measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-premium inline-flex items-center gap-2.5 px-8 py-4 text-[14px]">
                <Sparkles size={16} />
                Book a Demo
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 text-[14px] font-bold text-white border border-slate-700 rounded-full hover:border-slate-500 hover:bg-white/5 transition-all duration-300">
                View Pricing
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};
