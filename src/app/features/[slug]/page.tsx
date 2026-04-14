"use client";

import { useParams, useRouter } from "next/navigation";
import { features } from "@/components/features/FeaturesGrid";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ArrowRight,
  Quote,
  Play,
  Zap,
  Building2,
  MessageSquare
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { InteractiveGrid } from "@/components/InteractiveGrid";

/* ── small animation helper ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function FeatureDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const feature = features.find((f: any) => f.slug === slug) as any;

  if (!feature) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-slate-900">
        <h1 className="text-4xl font-black mb-4">Feature Not Found</h1>
        <Link href="/features" className="text-purple-600 font-bold hover:underline">
          ← Back to all features
        </Link>
      </div>
    );
  }

  const Icon = feature.icon;
  const relatedFeatures = features
    .filter((f: any) => f.slug !== feature.slug)
    .slice(0, 3) as any[];

  return (
    <div className="relative min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
      <InteractiveGrid />

      {/* ── BACK NAV ── */}
      <nav className="relative z-10 pt-10 pb-4">
        <Container>
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center text-slate-500 hover:text-slate-900 transition-colors font-bold text-sm"
          >
            <ChevronLeft size={18} className="mr-1 transition-transform group-hover:-translate-x-1" />
            Back to Capabilities
          </button>
        </Container>
      </nav>

      <main className="relative z-10">
        {/* ══ SECTION 1: HERO ══ */}
        <section className="pb-16 pt-6">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">
                    Core Capability
                  </span>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/20">
                  <Icon size={32} />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
                  {feature.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
                  {feature.longDescription}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/enterprise"
                    className="inline-flex items-center gap-2 bg-[#4112e0] hover:bg-indigo-700 text-white px-7 py-4 rounded-2xl font-black text-base shadow-xl shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95"
                  >
                    <Play size={16} />
                    Book a Demo
                  </Link>
                  <Link
                    href="/enterprise"
                    className="group inline-flex items-center gap-2 font-black text-slate-900 hover:text-purple-600 transition-colors text-base"
                  >
                    Talk to Sales
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Right — Stats grid */}
              {feature.stats && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {feature.stats.map((stat: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                      className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group"
                    >
                      <p className="text-3xl font-black text-slate-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                        {stat.value}
                      </p>
                      <p className="text-sm font-bold text-slate-500">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </Container>
        </section>

        {/* ══ SECTION 2: FEATURE IMAGE ══ */}
        {feature.image && (
          <section className="py-8">
            <Container>
              <motion.div
                {...fadeUp(0)}
                className="relative w-full rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/70 aspect-video"
              >
                <Image
                  src={feature.image}
                  alt={`${feature.title} screenshot`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </motion.div>
            </Container>
          </section>
        )}

        {/* ══ SECTION 3: HOW IT WORKS ══ */}
        {feature.howItWorks && (
          <section className="py-20 bg-slate-50/60">
            <Container>
              <motion.div {...fadeUp(0)} className="mb-14">
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-5">
                  <Zap size={13} className="text-purple-500" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">How It Works</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight max-w-xl">
                  From Setup to Impact — In Three Steps
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {feature.howItWorks.map((step: any, i: number) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.1)}
                    className="relative"
                  >
                    {/* Connector line */}
                    {i < feature.howItWorks.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[calc(100%+1rem)] w-8 h-px bg-gradient-to-r from-purple-200 to-transparent" />
                    )}
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                        <span className="text-white font-black text-sm">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* ══ SECTION 4: KEY BENEFITS ══ */}
        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeUp(0)}>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5 mb-5">
                  <CheckCircle2 size={13} className="text-green-500" />
                  <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Key Benefits</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">
                  What You Gain with {feature.title}
                </h2>
                <p className="text-slate-600 text-base font-medium leading-relaxed max-w-md">
                  Built to deliver measurable impact from day one — for retail businesses of any size.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-3">
                {feature.benefits.map((benefit: string, i: number) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.07)}
                    className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl px-6 py-4 hover:border-purple-200 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="w-7 h-7 bg-green-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                      <CheckCircle2 size={15} className="text-green-500" />
                    </div>
                    <span className="text-slate-700 font-bold text-base">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ══ SECTION 5: USE CASES ══ */}
        {feature.useCases && (
          <section className="py-20 bg-slate-50/60">
            <Container>
              <motion.div {...fadeUp(0)} className="mb-14">
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-5">
                  <Building2 size={13} className="text-slate-500" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Use Cases</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight max-w-xl">
                  Real Impact Across Real Retail Scenarios
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {feature.useCases.map((uc: any, i: number) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.1)}
                    className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-purple-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-purple-600 transition-colors duration-300">
                      <span className="text-xs font-black text-purple-600 group-hover:text-white transition-colors duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-3">{uc.title}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{uc.description}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* ══ SECTION 6: EXAMPLE QUERIES (AI Assistant only) ══ */}
        {feature.exampleQueries && (
          <section className="py-20">
            <Container>
              <motion.div {...fadeUp(0)} className="mb-10">
                <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-5">
                  <MessageSquare size={13} className="text-indigo-500" />
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Example Queries</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight max-w-xl">
                  Ask Your Business — In Plain Language
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {feature.exampleQueries.map((query: string, i: number) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.08)}
                    className="flex items-start gap-4 bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-6 text-white group hover:scale-[1.02] transition-transform duration-200"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <MessageSquare size={14} className="text-indigo-300" />
                    </div>
                    <p className="text-sm font-bold leading-relaxed text-white/90">"{query}"</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* ══ SECTION 7: CUSTOMER QUOTE ══ */}
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

        {/* ══ SECTION 9: RELATED FEATURES ══ */}
        <section className="py-20">
          <Container>
            <motion.div {...fadeUp(0)} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Explore More Capabilities</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedFeatures.map((other: any, i: number) => (
                <motion.div key={other.slug} {...fadeUp(i * 0.1)}>
                  <Link
                    href={`/features/${other.slug}`}
                    className="group flex flex-col gap-5 p-8 bg-white border border-slate-100 rounded-3xl hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500 h-full"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-400">
                        <other.icon size={22} />
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-slate-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 mb-2">{other.title}</h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2">
                        {other.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
