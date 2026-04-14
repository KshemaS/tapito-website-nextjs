"use client";

import { useParams, useRouter } from "next/navigation";
import { features } from "@/components/features/FeaturesGrid";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { InteractiveGrid } from "@/components/InteractiveGrid";

export default function FeatureDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  
  const feature = features.find((f) => f.slug === slug);

  if (!feature) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-slate-900">
        <h1 className="text-4xl font-black mb-4">Feature Not Found</h1>
        <Link href="/features" className="text-purple-600 font-bold hover:underline">
          Back to all features
        </Link>
      </div>
    );
  }

  const Icon = feature.icon;

  return (
    <div className="relative min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
      <InteractiveGrid />

      <header className="relative z-10 pt-12 pb-6">
        <Container>
          <button 
            onClick={() => router.back()}
            className="group flex items-center text-slate-500 hover:text-slate-900 transition-colors font-bold text-sm mb-12"
          >
            <ChevronLeft size={18} className="mr-1 transition-transform group-hover:-translate-x-1" />
            Back to Capabilities
          </button>
        </Container>
      </header>

      <main className="relative z-10 pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Visual & Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-linear-to-br from-purple-600 to-indigo-700 rounded-3xl flex items-center justify-center text-white mb-10 shadow-xl shadow-purple-500/20">
                <Icon size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
                {feature.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-xl">
                {feature.description}
              </p>
              
              <div className="flex items-center gap-6">
                <button className="bg-[#4112e0] hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-500/10 transition-all hover:scale-105 active:scale-95">
                  Start Free Trial
                </button>
                <Link href="/enterprise" className="font-black text-slate-900 hover:text-purple-600 transition-colors">
                  Contact Sales &rarr;
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Deep Dive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-50/50 border border-slate-100 rounded-[3rem] p-10 md:p-12 lg:p-16 backdrop-blur-sm shadow-sm"
            >
              <h2 className="text-sm font-black text-purple-600 uppercase tracking-widest mb-6">
                Deep Dive & Capabilities
              </h2>
              <div className="space-y-8">
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  {feature.longDescription}
                </p>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-slate-900">Key Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.benefits.map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                        <span className="text-slate-600 font-bold text-sm tracking-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA for next feature */}
          <div className="mt-32 pt-16 border-t border-slate-100">
             <h3 className="text-2xl font-black mb-12">Looking for something else?</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.filter(f => f.slug !== feature.slug).slice(0, 2).map((other) => (
                   <Link 
                    key={other.slug}
                    href={`/features/${other.slug}`}
                    className="group flex items-center justify-between p-8 bg-white border border-slate-100 rounded-3xl hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500"
                   >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                        <other.icon size={24} />
                      </div>
                      <span className="text-xl font-black text-slate-900">{other.title}</span>
                    </div>
                    <ArrowRight size={24} className="text-slate-300 group-hover:text-purple-600 group-hover:translate-x-2 transition-all" />
                   </Link>
                ))}
             </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
