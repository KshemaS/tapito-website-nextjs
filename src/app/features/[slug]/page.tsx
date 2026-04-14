"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { features } from "@/components/features/FeaturesGrid";
import Container from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";
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

const colorThemes = [
  { bg: "bg-[#eff2fe]", border: "border-[#dce3fc]", title: "text-[#2e408d]", sub: "text-[#5164ad]", badgeBg: "bg-white/70" },
  { bg: "bg-[#daf4e5]", border: "border-[#b2eac7]", title: "text-[#1e5836]", sub: "text-[#2e7d4d]", badgeBg: "bg-white/50" },
  { bg: "bg-[#fdf3df]", border: "border-[#fce6bd]", title: "text-[#85611f]", sub: "text-[#b18330]", badgeBg: "bg-white/60" },
  { bg: "bg-[#fbe7e7]", border: "border-[#fad2d2]", title: "text-[#7a2e2e]", sub: "text-[#a44545]", badgeBg: "bg-white/70" },
  { bg: "bg-[#eee6f7]", border: "border-[#ddd0ef]", title: "text-[#56367c]", sub: "text-[#724a9e]", badgeBg: "bg-white/60" },
  { bg: "bg-[#fdf5e6]", border: "border-[#fbdfb1]", title: "text-[#8a6423]", sub: "text-[#a87d32]", badgeBg: "bg-white/50" },
  { bg: "bg-slate-50", border: "border-slate-200", title: "text-slate-800", sub: "text-slate-500", badgeBg: "bg-white/80" },
];

const FeatureGenericBento = ({ feature, fadeUp }: { feature: any; fadeUp: any }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Deterministic seed based on slug to keep layouts identical on refresh but different per feature
  let hash = 0;
  for (let i = 0; i < feature.slug.length; i++) {
    hash = feature.slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);

  const items: any[] = [];
  if (feature.useCases) feature.useCases.forEach((u: any, i: number) => items.push({ type: 'usecase', data: u, id: `u-${i}` }));
  if (feature.benefits) feature.benefits.forEach((b: any, i: number) => items.push({ type: 'benefit', data: b, id: `b-${i}` }));
  
  // Deterministic shuffle
  const shuffled = [...items].sort((a, b) => {
     const val1 = (hash + a.id.charCodeAt(0) + (a.id.charCodeAt(2) || 0)) % 10;
     const val2 = (hash + b.id.charCodeAt(0) + (b.id.charCodeAt(2) || 0)) % 10;
     return val1 - val2;
  });

  // Calculate missing spaces to form a complete box
  let totalLgSpans = 0;
  shuffled.forEach((item, idx) => {
    totalLgSpans += item.type === 'usecase' || (idx % 4 === 0) ? 2 : 1;
  });
  
  const remainder = totalLgSpans % 4;
  if (remainder > 0) {
    const fillerCount = 4 - remainder;
    for (let i = 0; i < fillerCount; i++) {
       shuffled.push({
         id: `filler-${i}`,
         type: 'benefit',
         data: ['Enterprise Scale', 'Always Synced', 'Global Network'][i] || 'Platform Native',
         isFiller: true
       });
    }
  }

  const expandedItem = shuffled.find(f => f.id === expandedId);
  const expandedTheme = expandedItem ? colorThemes[(hash + shuffled.indexOf(expandedItem)) % colorThemes.length] : null;

  return (
    <section className="py-16 relative bg-slate-50 border-t border-slate-100">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 {...fadeUp(0)} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Core Capabilities & Value
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-slate-500 font-medium text-lg lg:text-xl">
            Click any card to explore the deep functionality of {feature.title}.
          </motion.p>
        </div>

        {/* Dense Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[250px] grid-flow-dense">
           {shuffled.map((item, idx) => {
              const themeParams = colorThemes[(hash + idx) % colorThemes.length];
              const isLarge = item.type === 'usecase' || (!item.isFiller && idx % 4 === 0);
              const lgSpan = isLarge ? 2 : 1;
              const mdSpan = lgSpan > 1 ? 2 : 1;

              let exactColSpan = "col-span-1 md:col-span-1 lg:col-span-1";
              if (lgSpan === 2 && mdSpan === 2) exactColSpan = "col-span-1 md:col-span-2 lg:col-span-2";

              return (
                 <motion.div 
                    key={item.id}
                    onClick={() => setExpandedId(item.id)}
                    {...fadeUp(idx * 0.05)}
                    className={`cursor-pointer ${exactColSpan} ${themeParams.bg} rounded-[2rem] p-8 relative overflow-hidden group border ${themeParams.border} flex flex-col shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl hover:z-10`}
                 >
                    {item.type === 'usecase' ? (
                       <>
                         <h3 className={`text-2xl font-black ${themeParams.title} mb-2`}>{item.data.title}</h3>
                         <p className={`${themeParams.sub} font-medium line-clamp-3`}>{item.data.description}</p>
                         
                         <div className="mt-auto pt-6 flex items-end justify-between">
                            <span className={`inline-flex items-center justify-center ${themeParams.badgeBg} px-4 py-2 rounded-xl ${themeParams.title} font-bold text-sm shadow-sm`}>
                              {item.data.metric || 'Optimization'}
                            </span>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-black/5 ${themeParams.title} opacity-60 group-hover:opacity-100 transition-opacity`}>
                               <span className="text-xl font-bold">+</span>
                            </div>
                         </div>
                       </>
                    ) : (
                       <>
                         <h3 className={`text-xl font-black ${themeParams.title} mb-2 leading-tight`}>{item.data}</h3>
                         <div className="mt-auto pt-6 flex justify-between items-end">
                            <div className={`${themeParams.badgeBg} px-3 py-1.5 rounded-full font-bold text-xs ${themeParams.title} shadow-sm uppercase tracking-wider`}>Included</div>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-current ${themeParams.title} opacity-40 group-hover:opacity-100 group-hover:bg-black/5 transition-all`}>
                               <span className="text-xl font-bold">+</span>
                            </div>
                         </div>
                       </>
                    )}
                 </motion.div>
              );
           })}
        </div>
      </Container>

      {/* Standard Popup Overlay (no layout layoutId snapping) */}
      <AnimatePresence>
        {expandedId && expandedItem && expandedTheme && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 pointer-events-none">
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm pointer-events-auto" 
              onClick={() => setExpandedId(null)} 
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className={`relative pointer-events-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto ${expandedTheme.bg} rounded-[2rem] p-8 md:p-12 shadow-2xl border ${expandedTheme.border} flex flex-col`}
            >
              <button 
                onClick={() => setExpandedId(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors"
                aria-label="Close details"
              >
                <span className={`text-2xl font-bold ${expandedTheme.title}`}>×</span>
              </button>

              {expandedItem.type === 'usecase' ? (
                <>
                  <div className={`inline-flex self-start ${expandedTheme.badgeBg} px-4 py-2 rounded-xl mb-6 shadow-sm border ${expandedTheme.border}`}>
                     <span className={`${expandedTheme.title} font-bold text-sm uppercase tracking-wider`}>{expandedItem.data.metric || 'Optimization'}</span>
                  </div>
                  <h3 className={`text-3xl md:text-4xl font-black ${expandedTheme.title} mb-4`}>
                    {expandedItem.data.title}
                  </h3>
                  <p className={`${expandedTheme.sub} font-medium text-lg leading-relaxed mb-8`}>
                    {expandedItem.data.description}
                  </p>
                  
                  <div className="pt-8 border-t border-black/10">
                    <h4 className={`text-xl font-bold ${expandedTheme.title} mb-3`}>Deep Dive Analysis</h4>
                    <p className={`${expandedTheme.sub} font-medium leading-relaxed`}>
                      By leveraging the "{expandedItem.data.title}" capability within the {feature.title} ecosystem, businesses can transition from raw manual oversight to an intelligent programmatic methodology. This unlocks granular visibility and reduces friction natively.
                    </p>
                    <ul className={`mt-6 space-y-3 ${expandedTheme.title} font-medium`}>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 shrink-0 opacity-80" />
                        Seamless integration across your existing workflows.
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 shrink-0 opacity-80" />
                        Significantly reduces time-to-insight and operational lag.
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className={`inline-flex self-start ${expandedTheme.badgeBg} px-4 py-2 rounded-xl mb-6 shadow-sm border ${expandedTheme.border}`}>
                     <span className={`${expandedTheme.title} font-bold text-sm uppercase tracking-wider`}>Included Capability</span>
                  </div>
                  <h3 className={`text-3xl md:text-4xl font-black ${expandedTheme.title} mb-6`}>
                    {expandedItem.data}
                  </h3>
                  
                  <div className="pt-8 border-t border-black/10 mt-auto">
                    <h4 className={`text-xl font-bold ${expandedTheme.title} mb-3`}>How it extends the platform</h4>
                    <p className={`${expandedTheme.sub} font-medium leading-relaxed`}>
                      This capability integrates tightly with our core platform infrastructure. We've ensured that "{expandedItem.data}" offers immediate value extraction without requiring extensive, tedious configuration.
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

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
    <div className="relative min-h-svh bg-white selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
      <InteractiveGrid />
      <main className="relative z-10">
        {/* ══ SECTION 1: HERO ══ */}
        <section className="pb-16 pt-26 min-h-svh flex items-center">
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

        {/* ══ SECTION 2: FEATURE DYNAMIC CONTENT ══ */}
        {feature.slug === "ai-smart-analytics-engine" ? (
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
        ) : (
          <FeatureGenericBento feature={feature} fadeUp={fadeUp} />
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
