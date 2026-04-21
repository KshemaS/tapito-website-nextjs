"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import Container from "@/components/Container";
import { 
  ArrowRight, Activity, Cpu, Sparkles, Target, BarChart, 
  Zap, Users, TrendingUp, Search, MessageSquare, Layers, 
  MousePointer2 
} from "lucide-react";

const SECTIONS = [
  {
    title: "Understand customers deeply",
    desc: "Transform raw data into deep behavioral insights. We help you know not just what your customers buy, but why they buy it.",
    steps: [
      { title: "Behavioral Mapping", icon: Search },
      { title: "Persona Profiling", icon: Users },
      { title: "Trend Analytics", icon: BarChart },
    ],
    color: "#00f2ad",
    iconColor: "#057a58"
  },
  {
    title: "Automate engagement",
    desc: "Connect with your audience effortlessly. Our AI-driven automation ensures every interaction is timely, relevant, and personal.",
    steps: [
      { title: "Triggered Workflows", icon: Zap },
      { title: "Smart Conversations", icon: MessageSquare },
      { title: "Omnichannel Reach", icon: Layers },
    ],
    color: "#05a0ec",
    iconColor: "#09358c"
  },
  {
    title: "Drive consistent revenue growth",
    desc: "Turn engagement into sustainable profit. Our strategies are designed to maximize customer lifetime value and optimize ROI.",
    steps: [
      { title: "Growth Orchestration", icon: TrendingUp },
      { title: "Conversion Optimization", icon: MousePointer2 },
      { title: "Performance Insights", icon: Activity },
    ],
    color: "#09358c",
    iconColor: "#05a0ec"
  },
  {
    title: "Orchestrate Superior Experiences",
    desc: "Deliver hyper-personalized moments that matter. We help you build trust and loyalty through intelligent, real-time AI orchestration.",
    steps: [
      { title: "Experience Analytics", icon: Target },
      { title: "Loyalty Automation", icon: Sparkles },
      { title: "Hyper-Personalization", icon: Cpu },
    ],
    color: "#7c3aed",
    iconColor: "#7c3aed"
  }
];

export default function AboutWhatWeDo() {
  return (
    <section className="py-24 bg-[#fafbfc] relative min-h-screen">
      <Container>
        <div className="mb-12 sm:mb-20 text-center lg:text-left">
           <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              What We Do
          </h2>
          <p className="text-slate-500 font-medium text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
            We empower retail businesses to:
          </p>
        </div>

        <ScrollStack 
          itemStackDistance={20}
          itemScale={0.05}
        >
          {SECTIONS.map((section, sIdx) => (
            <ScrollStackItem key={sIdx}>
              <div className="relative w-full h-full p-6 sm:p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
                {/* Visual Accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-20 pointer-events-none"
                  style={{ backgroundColor: section.color }}
                />

                {/* Left Content */}
                <div className="flex-1 space-y-10 relative z-10">
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-none">
                      {section.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm md:text-base max-w-sm leading-relaxed">
                      {section.desc}
                    </p>
                    
                    <button className="btn-premium !text-sm !py-3 !px-8 flex items-center gap-2 group shadow-xl">
                      Know more
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Vertical Step List */}
                  <div className="flex flex-col gap-3">
                    {section.steps.map((step, i) => (
                      <div
                        key={i}
                        className="w-full max-w-sm bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 group"
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-50"
                          style={{ color: section.iconColor }}
                        >
                          <step.icon size={20} strokeWidth={1.5} />
                        </div>
                        <span className="text-slate-900 font-bold text-sm tracking-tight capitalize">
                          {step.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Graphic Area */}
                <div className="flex-1 relative hidden lg:flex justify-end pr-8">
                  <div className="relative w-72 h-72">
                    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl overflow-visible">
                      <defs>
                        <linearGradient id={`grad-stack-${sIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: section.color, stopOpacity: 0.2 }} />
                          <stop offset="100%" style={{ stopColor: section.color, stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 60 40 L 140 100 L 60 160"
                        stroke={`url(#grad-stack-${sIdx})`}
                        strokeWidth="25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <circle cx="60" cy="40" r="12" fill="none" stroke={section.color} strokeWidth="2" />
                      <circle cx="60" cy="160" r="12" fill="none" stroke={section.color} strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </Container>
    </section>
  );
}
