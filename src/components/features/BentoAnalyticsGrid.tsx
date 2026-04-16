"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  CheckCircle2,
  Activity,
  Zap,
  ShoppingBag,
  Users,
  Search,
  MousePointer2,
  Target,
  Clock,
  UserMinus,
} from "lucide-react";
import Container from "@/components/Container";
import Link from "next/link";

interface BentoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  textColor: string;
  borderColor: string;
  badgeColor: string;
  span: string;
  visual: React.ReactNode;
}

const bentoItems: BentoItem[] = [
  {
    id: "behavior",
    title: "Behavior Analysis",
    subtitle: "Track Every Digital Clickstream",
    description: "Deep dive into how users navigate your app. Identify friction points, drop-offs, and high-converting paths using granular event tracking.",
    icon: MousePointer2,
    color: "bg-[#fdf2f2]",
    textColor: "text-[#991b1b]",
    borderColor: "border-[#fecaca]",
    badgeColor: "bg-[#fee2e2]",
    span: "col-span-1",
    visual: (
      <div className="mt-6 flex flex-wrap gap-2">
         {[1,2,3,4,5].map(i => (
           <div key={i} className={`h-2 rounded-full bg-red-400/${i*20}`} style={{ width: `${16 + i*8}px` }} />
         ))}
      </div>
    )
  },
  {
    id: "user",
    title: "User Analysis",
    subtitle: "Insights",
    description: "Segment users by behavior, demographics, and value. Create high-fidelity personas that drive personalized marketing strategies.",
    icon: Users,
    color: "bg-[#f0f9ff]",
    textColor: "text-[#075985]",
    borderColor: "border-[#bae6fd]",
    badgeColor: "bg-[#e0f2fe]",
    span: "col-span-1",
    visual: (
      <div className="mt-6 flex -space-x-3">
         {[1,2,3].map(i => (
           <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-sky-200" />
         ))}
      </div>
    )
  },
  {
    id: "retention",
    title: "Retention Analysis",
    subtitle: "Monitor Customer Longevity",
    description: "Calculate Churn, LTV, and Cohort health. Understand which features keep users coming back and where they eventually slip away.",
    icon: Activity,
    color: "bg-[#f0fdf4]",
    textColor: "text-[#166534]",
    borderColor: "border-[#bbf7d0]",
    badgeColor: "bg-[#dcfce7]",
    span: "col-span-1",
    visual: (
      <div className="mt-6 flex items-end gap-1 h-12">
         {[40, 70, 55, 90, 65, 80].map((h, i) => (
           <div key={i} className="flex-1 bg-emerald-400/40 rounded-t-sm" style={{ height: `${h}%` }} />
         ))}
      </div>
    )
  },
  {
    id: "funnel",
    title: "Funnel Analysis",
    subtitle: "Optimization Every Conversion Step",
    description: "Visualize the checkout flow, signup process, or any multi-step journey. Find the exact step where you're losing potential revenue.",
    icon: Target,
    color: "bg-[#fffbeb]",
    textColor: "text-[#92400e]",
    borderColor: "border-[#fef3c7]",
    badgeColor: "bg-[#fef3c7]",
    span: "row-span-2 col-span-1",
    visual: (
      <div className="mt-8 space-y-4">
         {[100, 75, 40, 12].map((w, i) => (
           <div key={i} className="space-y-1">
             <div className="h-1.5 bg-amber-200/30 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: `${w}%` }} />
             </div>
           </div>
         ))}
      </div>
    )
  },
  {
    id: "user-path",
    title: "User Path Analysis",
    subtitle: "Non-Linear Journey Mapping",
    description: "Users don't always follow the straight line. Map the complex, multi-touch relationships between discovery, research, and purchase.",
    icon: Search,
    color: "bg-[#f5f3ff]",
    textColor: "text-[#5b21b6]",
    borderColor: "border-[#ddd6fe]",
    badgeColor: "bg-[#ede9fe]",
    span: "col-span-2",
    visual: (
      <div className="mt-6 relative h-20 w-full overflow-hidden">
         <svg className="w-full h-full" viewBox="0 0 400 100">
           <path d="M0,50 Q100,10 200,50 T400,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400 opacity-40" />
           <circle cx="50" cy="30" r="4" className="fill-blue-600" />
           <circle cx="200" cy="50" r="4" className="fill-blue-600" />
           <circle cx="350" cy="50" r="4" className="fill-blue-600" />
         </svg>
      </div>
    )
  },
  {
    id: "session",
    title: "Session Analysis",
    subtitle: "Micro-Interaction Monitoring",
    description: "Analyze individual sessions to see how time is spent. Catch technical errors, slow loads, or UI confusion in real-time.",
    icon: Clock,
    color: "bg-[#fff7ed]",
    textColor: "text-[#9a3412]",
    borderColor: "border-[#ffedd5]",
    badgeColor: "bg-[#ffedd5]",
    span: "row-span-2 col-span-1",
    visual: (
      <div className="mt-6 space-y-3">
         {[1,2,3,4,5,6].map(i => (
           <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <div className="h-1 bg-orange-100 rounded-full flex-1" />
           </div>
         ))}
      </div>
    )
  },
  {
    id: "acquisition",
    title: "Acquisition Analysis",
    subtitle: "Source & Attribution Logic",
    description: "Know exactly which channel brought in which customer. Master multi-touch attribution to spend your marketing budget where it works.",
    icon: Zap,
    color: "bg-[#fdf2f8]",
    textColor: "text-[#9d174d]",
    borderColor: "border-[#fbcfe8]",
    badgeColor: "bg-[#fce7f3]",
    span: "col-span-1",
    visual: (
      <div className="mt-6 grid grid-cols-2 gap-2">
         <div className="h-8 bg-pink-200/40 rounded-lg" />
         <div className="h-8 bg-pink-100/40 rounded-lg" />
      </div>
    )
  },
  {
    id: "uninstallation",
    title: "Uninstallation Analysis",
    subtitle: "Understand Why Customers Uninstall",
    description: "Monitor churn at the app level. Correlate uninstalls with specific feature releases, pricing changes, or service quality drops.",
    icon: UserMinus,
    color: "bg-[#fefaf2]",
    textColor: "text-[#8a6423]",
    borderColor: "border-[#fbebc4]",
    badgeColor: "bg-[#fdf3d6]",
    span: "col-span-1",
    visual: (
      <div className="mt-6 flex items-center gap-4">
         <div className="w-10 h-10 rounded-xl bg-white border border-dashed border-amber-300 flex items-center justify-center">
            <UserMinus size={18} className="text-amber-500 opacity-60" />
         </div>
         <div className="space-y-0.5">
            <p className="text-[9px] font-black text-amber-900/60 uppercase">Churn</p>
            <p className="text-lg font-black text-amber-700">1.2%</p>
         </div>
      </div>
    )
  },
  {
    id: "affinity",
    title: "Product Affinity",
    subtitle: "Map Relationships Between Categories",
    description: "Discover which products are frequently bought together. Use association rules to power cross-sell engines and physical store layouts.",
    icon: ShoppingBag,
    color: "bg-[#f1f7fe]",
    textColor: "text-[#2e5d8a]",
    borderColor: "border-[#d8eafb]",
    badgeColor: "bg-[#e1f1ff]",
    span: "col-span-1",
    visual: (
      <div className="mt-6 flex gap-2 overflow-hidden">
         {[1,2,3].map(i => (
           <div key={i} className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
             <ShoppingBag size={16} className="text-blue-500/40" />
           </div>
         ))}
      </div>
    )
  }
];

export const BentoAnalyticsGrid = ({ 
  items, 
  title = "Intelligence for Every Vertical", 
  subtitle = "Multi-Dimensional Analysis" 
}: { 
  items?: BentoItem[], 
  title?: string, 
  subtitle?: string 
}) => {
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null);

  const defaultOrderedItems = [
    bentoItems[0], // Behavior
    bentoItems[1], // User
    bentoItems[4], // User Path (2x1)
    bentoItems[3], // Funnel (1x2)
    bentoItems[6], // Acquisition
    bentoItems[7], // Uninstallation
    bentoItems[5], // Session (1x2)
    bentoItems[2], // Retention
    bentoItems[8], // Affinity
  ];

  const displayItems = items || defaultOrderedItems;

  return (
    <section className="py-24 relative bg-[#fcfcfd]">
      <Container>
        <div className="mb-16 text-center lg:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4"
          >
            {subtitle}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-950 tracking-tight"
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {displayItems.map((item, idx) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ scale: 1.015, y: -5 }}
              className={`
                ${item.span} ${item.color} rounded-[2.5rem] p-8 md:p-10 border ${item.borderColor}
                relative overflow-hidden cursor-pointer group transition-all duration-300
                hover:shadow-[0_45px_110px_-40px_rgba(37,99,235,0.25)] flex flex-col
              `}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div>
                   <div className={`w-14 h-14 rounded-2xl ${item.badgeColor} flex items-center justify-center ${item.textColor} mb-7 transition-all group-hover:scale-110 group-hover:bg-white group-hover:shadow-md duration-500`}>
                     <item.icon size={28} />
                   </div>
                   <h3 className={`text-2xl font-black ${item.textColor} mb-2 uppercase tracking-tight`}>{item.title}</h3>
                   <p className={`${item.textColor} opacity-70 text-sm font-bold leading-relaxed mb-6`}>{item.subtitle}</p>
                </div>
                
                <div className="mt-auto">
                   {item.visual}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-xl pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300, duration: 0.4 }}
              className={`
                relative w-full max-w-3xl bg-white rounded-[4rem] overflow-hidden shadow-2xl
                flex flex-col max-h-[92vh] z-[1000] pointer-events-auto
              `}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-10 right-10 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-950 hover:text-white transition-all z-[1001] shadow-sm hover:rotate-90"
              >
                <X size={24} />
              </button>

              <div className="p-12 md:p-16 overflow-y-auto custom-scrollbar flex-1 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 blur-[100px] pointer-events-none rounded-full" />
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-3xl ${selectedItem.badgeColor} ${selectedItem.textColor} flex items-center justify-center mb-10`}>
                    <selectedItem.icon size={42} />
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 tracking-tighter uppercase">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xl font-bold text-blue-600 mb-10">
                    {selectedItem.subtitle}
                  </p>
                  
                  <div className="space-y-10">
                     <p className="text-xl font-medium leading-relaxed text-slate-600">
                       {selectedItem.description}
                     </p>
                     
                     <div className="grid gap-5 md:grid-cols-2">
                        {[
                          "Granular data collection at the SKU level.",
                          "AI-driven anomaly detection native built-in.",
                          "Custom segment exports in one click.",
                          "Direct integration with executive reporting."
                        ].map((benefit, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * i }}
                            className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 items-start hover:bg-white hover:border-blue-200 transition-all group/benefit hover:shadow-lg"
                          >
                             <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 group-hover/benefit:bg-emerald-500 group-hover/benefit:text-white transition-colors"><CheckCircle2 size={16} /></div>
                             <p className="text-[15px] font-bold text-slate-700 leading-relaxed">{benefit}</p>
                          </motion.div>
                        ))}
                     </div>

                   
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
