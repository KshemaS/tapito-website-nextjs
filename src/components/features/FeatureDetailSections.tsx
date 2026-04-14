"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, Zap, Building2, MessageSquare, Quote } from "lucide-react";
import Container from "@/components/Container";

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export const FeatureDetailHero = ({ feature, Icon }: { feature: any, Icon: any }) => {
  return (
    <section className="pb-16 pt-26 min-h-svh flex items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
  );
};

export const FeatureAnalyticsBento = () => {
  return (
    <section className="py-16 relative bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Perform Deep Analysis and Uncover Critical Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[200px]">
          {/* Behavior Analysis */}
          <div className="md:col-span-6 lg:col-span-4 lg:row-span-1 bg-[#eff2fe] rounded-3xl p-6 relative overflow-hidden group border border-[#dce3fc] flex flex-col items-start shadow-sm">
            <h3 className="text-xl lg:text-2xl font-black text-[#2e408d] mb-1">Behavior Analysis</h3>
            <p className="text-[#5164ad] font-medium text-xs lg:text-sm">Understand How Customers Engage with Your Brand</p>
            <div className="mt-auto flex flex-wrap gap-2 text-[11px] font-bold text-[#445baf]">
              <span className="bg-white/70 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">Added to Cart</span>
              <span className="bg-[#fbbf24]/20 px-3 py-1.5 rounded-full shadow-sm text-[#92400e] flex items-center gap-1">Opened Email</span>
            </div>
          </div>

          {/* User Analysis */}
          <div className="md:col-span-6 lg:col-span-5 lg:row-span-1 bg-[#daf4e5] rounded-3xl p-6 relative overflow-hidden group border border-[#b2eac7] flex flex-col shadow-sm">
            <h3 className="text-xl lg:text-2xl font-black text-[#1e5836] mb-1">User Analysis</h3>
            <p className="text-[#2e7d4d] font-medium text-xs lg:text-sm">Learn Who Your Users Really Are</p>
            <div className="mt-auto flex flex-wrap gap-2 text-[9px] lg:text-[10px] font-bold text-white uppercase tracking-wider">
               <span className="bg-[#1e5836] px-2 py-1.5 rounded">Demographics</span>
               <span className="bg-[#2e7d4d] px-2 py-1.5 rounded">Age, City, Gender, Income</span>
               <span className="bg-[#419462] px-2 py-1.5 rounded">Preferences</span>
            </div>
          </div>

          {/* Retention Analysis */}
          <div className="md:col-span-6 lg:col-span-3 lg:row-span-2 bg-[#fdf3df] rounded-3xl p-6 relative overflow-hidden group border border-[#fce6bd] flex flex-col shadow-sm hidden md:flex">
            <h3 className="text-xl lg:text-2xl font-black text-[#85611f] mb-1">Retention Analysis</h3>
            <p className="text-[#b18330] font-medium text-xs lg:text-sm mb-6">Understand the Retention Patterns of Your Customers</p>
            <div className="mt-auto bg-white/70 rounded-xl p-4 shadow-sm w-full h-32 border border-white flex items-end justify-between px-2 pb-2">
                 <div className="w-[14%] bg-[#fcd34d] h-[90%] rounded-t-sm" />
                 <div className="w-[14%] bg-[#fbbf24] h-[75%] rounded-t-sm" />
                 <div className="w-[14%] bg-[#f59e0b] h-[60%] rounded-t-sm" />
                 <div className="w-[14%] bg-[#d97706] h-[45%] rounded-t-sm" />
                 <div className="w-[14%] bg-[#b45309] h-[30%] rounded-t-sm" />
                 <div className="w-[14%] bg-[#92400e] h-[20%] rounded-t-sm" />
            </div>
          </div>

          {/* Funnel Analysis */}
          <div className="md:col-span-6 lg:col-span-3 lg:row-span-2 bg-[#fbe7e7] rounded-3xl p-6 relative overflow-hidden group border border-[#fad2d2] flex flex-col shadow-sm">
            <h3 className="text-xl lg:text-2xl font-black text-[#7a2e2e] mb-1">Funnel Analysis</h3>
            <p className="text-[#a44545] font-medium text-xs lg:text-sm mb-6">Identify Friction Points in Your Customer Journey</p>
            <div className="mt-auto bg-white/80 rounded-xl p-4 lg:p-5 shadow-sm border border-white flex flex-col gap-3">
               <div className="flex justify-between items-center text-[10px] font-bold text-[#7a2e2e]">
                 <span>Session Started</span> <span>100%</span>
               </div>
               <div className="w-full bg-slate-100 h-2 rounded-full"><div className="bg-[#fb7185] h-full rounded-full w-full" /></div>

               <div className="flex justify-between items-center text-[10px] font-bold text-[#7a2e2e]">
                 <span>Viewed Product</span> <span>80%</span>
               </div>
               <div className="w-full bg-slate-100 h-2 rounded-full"><div className="bg-[#fb7185] h-full rounded-full w-4/5" /></div>

               <div className="flex justify-between items-center text-[10px] font-bold text-[#7a2e2e]">
                 <span>Added to Cart</span> <span>40%</span>
               </div>
               <div className="w-full bg-slate-100 h-2 rounded-full"><div className="bg-[#e11d48] h-full rounded-full w-2/5" /></div>
            </div>
          </div>

          {/* User Path Analysis */}
          <div className="md:col-span-6 lg:col-span-6 lg:row-span-1 bg-white rounded-3xl p-6 relative overflow-hidden group border border-slate-200 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl lg:text-2xl font-black text-slate-800 mb-1">User Path Analysis</h3>
            <p className="text-slate-500 font-medium text-xs lg:text-sm">Visualize Every Step of Your Customer Journey</p>
            <div className="mt-auto flex flex-col lg:flex-row items-center justify-center pt-4 gap-2 lg:gap-0">
                <div className="bg-slate-100 flex-1 h-8 lg:rounded-l-full rounded-full flex items-center justify-center px-4 text-[10px] font-bold text-slate-500 shadow-inner w-full">Searched Category</div>
                <ArrowRight className="text-slate-300 mx-2 hidden lg:block" size={16} />
                <div className="bg-purple-100 flex-1 h-8 lg:rounded-none rounded-full flex items-center justify-center px-4 text-[10px] font-bold text-purple-600 shadow-inner w-full">Added to Cart</div>
                <ArrowRight className="text-slate-300 mx-2 hidden lg:block" size={16} />
                <div className="bg-green-100 flex-1 h-8 lg:rounded-r-full rounded-full flex items-center justify-center px-4 text-[10px] font-bold text-green-700 shadow-inner w-full">Made Purchase</div>
            </div>
          </div>

          {/* Acquisition Analysis */}
          <div className="md:col-span-3 lg:col-span-3 lg:row-span-1 bg-[#eee6f7] rounded-3xl p-6 relative overflow-hidden group border border-[#ddd0ef] flex flex-col shadow-sm">
            <h3 className="text-lg lg:text-xl font-black text-[#56367c] mb-1">Acquisition Analysis</h3>
            <p className="text-[#724a9e] font-medium text-[11px] lg:text-xs">Measure Effectiveness</p>
            <div className="mt-auto flex flex-col gap-2">
                <div className="bg-[#7c3aed] text-white text-[10px] font-bold py-1 px-3 rounded-full w-3/4">Campaign A</div>
                <div className="bg-[#6d28d9] text-white text-[10px] font-bold py-1 px-3 rounded-full w-full">Campaign B</div>
                <div className="bg-[#4c1d95] text-white text-[10px] font-bold py-1 px-3 rounded-full w-1/2">Campaign C</div>
            </div>
          </div>

          {/* Uninstallation Analysis */}
          <div className="md:col-span-3 lg:col-span-3 lg:row-span-1 bg-[#fdf5e6] rounded-3xl p-6 relative overflow-hidden group border border-[#fbdfb1] flex flex-col shadow-sm">
            <h3 className="text-lg lg:text-xl font-black text-[#8a6423] mb-1 leading-tight">Drop-off Analysis</h3>
            <p className="text-[#a87d32] font-medium text-[11px] lg:text-xs mt-1">Understand Attrition</p>
            <div className="mt-auto flex justify-between items-end gap-2 h-12 lg:h-16">
                 <div className="w-1/3 bg-[#d97706] h-[60%] rounded-t-md" />
                 <div className="w-1/3 bg-[#b45309] h-full rounded-t-md" />
                 <div className="w-1/3 bg-[#78350f] h-[40%] rounded-t-md" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const FeatureHowItWorks = ({ feature }: { feature: any }) => {
  return (
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
            <motion.div key={i} {...fadeUp(i * 0.1)} className="relative">
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
  );
};

export const FeatureKeyBenefits = ({ feature }: { feature: any }) => {
  return (
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
  );
};

export const FeatureUseCases = ({ feature }: { feature: any }) => {
  return (
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
  );
};

export const FeatureExampleQueries = ({ feature }: { feature: any }) => {
  return (
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
  );
};

export const FeatureQuote = ({ feature }: { feature: any }) => {
  return (
    <section className="py-16">
      <Container>
        <motion.div
          {...fadeUp(0)}
          className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2.5rem] p-10 md:p-14 lg:p-20 relative overflow-hidden"
        >
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
  );
};

export const FeatureRelatedItems = ({ relatedFeatures }: { relatedFeatures: any[] }) => {
  return (
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
  );
};
