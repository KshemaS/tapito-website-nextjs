"use client";

import Link from "next/link";

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-[#fcfcfd] pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#09358c] mb-4">
          Tapito
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
          Enterprise
        </h1>
        <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
          Built for large, multi-location retail businesses with advanced security,
          custom workflows, and enterprise-grade support.
        </p>
        <Link
          href="/"
          className="inline-flex mt-10 rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-[#09358c] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
