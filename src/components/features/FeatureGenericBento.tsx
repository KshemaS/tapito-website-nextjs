"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import { CheckCircle2 } from "lucide-react";

export const fadeUp = (delay = 0) => ({
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

const availableImages = [
  "/assets/images/features/ai-assistant.png",
  "/assets/images/features/automation.png",
  "/assets/images/features/campaign.png",
  "/assets/images/features/dashboard.png",
  "/assets/images/features/gp-analysis.png",
  "/assets/images/features/revenue.png",
  "/assets/images/features/smart-analytics.png",
  "/assets/images/features/top-brands.png"
];

export const FeatureGenericBento = ({ feature }: { feature: any }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  let hash = 0;
  for (let i = 0; i < feature.slug.length; i++) {
    hash = feature.slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);

  const items: any[] = [];
  if (feature.useCases) feature.useCases.forEach((u: any, i: number) => items.push({ type: 'usecase', data: u, id: `u-${i}` }));
  if (feature.benefits) feature.benefits.forEach((b: any, i: number) => items.push({ type: 'benefit', data: b, id: `b-${i}` }));
  
  const shuffled = [...items].sort((a, b) => {
     const val1 = (hash + a.id.charCodeAt(0) + (a.id.charCodeAt(2) || 0)) % 10;
     const val2 = (hash + b.id.charCodeAt(0) + (b.id.charCodeAt(2) || 0)) % 10;
     return val1 - val2;
  });

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

  shuffled.forEach((item, idx) => {
    if (typeof item.data === 'object' && !item.data.image) {
      item.data.image = availableImages[(hash + idx) % availableImages.length];
    } else if (typeof item.data === 'string' && !item.isFiller) {
       item.data = { title: item.data, image: availableImages[(hash + idx) % availableImages.length] };
    }
  });

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
                         
                         {item.data.image && (
                           <div className="w-full h-24 mt-4 rounded-xl overflow-hidden border border-black/5 flex-shrink-0 relative">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                             <img src={item.data.image} alt={item.data.title} className="w-full h-full object-cover" />
                           </div>
                         )}

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
                         <h3 className={`text-xl font-black ${themeParams.title} mb-2 leading-tight flex-1`}>{item.data.title || item.data}</h3>
                         
                         {item.data.image && (
                           <div className="w-full h-24 mt-3 rounded-xl overflow-hidden border border-black/5 flex-shrink-0 relative">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                             <img src={item.data.image} alt={item.data.title || item.data} className="w-full h-full object-cover opacity-90" />
                           </div>
                         )}

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
                  <p className={`${expandedTheme.sub} font-medium text-lg leading-relaxed mb-6`}>
                    {expandedItem.data.description}
                  </p>
                  
                  {expandedItem.data.image && (
                    <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-lg mb-8">
                       <img src={expandedItem.data.image} alt={expandedItem.data.title} className="w-full h-auto object-cover" />
                    </div>
                  )}

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

                  {expandedItem.data.image && (
                    <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-lg mb-8">
                       <img src={expandedItem.data.image} alt={expandedItem.data} className="w-full h-auto object-cover" />
                    </div>
                  )}
                  
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
