"use client";

import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfd] pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 mb-4">
          Tapito
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
          Solutions
        </h1>
        <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
          Explore purpose-built solutions for retail analytics, campaign automation,
          and revenue optimization. We are expanding this page with full solution
          journeys.
        </p>
        <Link
          href="/"
          className="inline-flex mt-10 rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-slate-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
