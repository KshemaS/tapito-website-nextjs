"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { 
  TrendingUp,
  Search,
  ShieldAlert,
  BarChart3,
  Zap,
  Smartphone,
  LayoutDashboard,
  PieChart,
  Users,
  Target,
  Lightbulb,
  Rocket,
  ArrowRight,
  Image as ImageIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import CTASection from "@/components/CTASection";
import ClientStrip from "@/components/ClientStrip";
import { cn } from "@/lib/utils";

const solutionDetails: Record<string, any> = {
  "building-materials": {
    title: "Building Materials",
    description: "Improve dealer and contractor engagement with real-time loyalty tracking and automated order management logic.",
    howWeHelp: [
      { 
        title: "Scale Contractor Loyalty", 
        desc: "Automate rewards based on purchase frequency and bulk volume, ensuring contractors stay committed to your brand.", 
        image: "https://images.unsplash.com/photo-1581094794329-c8112a4e5190?q=80&w=1200&auto=format&fit=crop",
      },
      { 
        title: "Dealer Visibility", 
        desc: "Give every dealer a real-time dashboard of their material availability and regional demand trends.", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      },
      { 
        title: "Order Automation", 
        desc: "Replace slow manual checks with AI-verified order workflows for high-volume material transactions.", 
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      }
    ],
    challenges: [
      { title: "Manual Order Intake", desc: "Dealers and contractors struggling with paper-based or slow digital order systems.", icon: Search },
      { title: "Engagement Gaps", desc: "Minimal visibility into contractor purchase cycles and loyalty trends.", icon: ShieldAlert },
      { title: "Supply Chain Latency", desc: "Delayed updates on material availability leading to regional warehouse bottlenecks.", icon: BarChart3 }
    ],
    features: [
      { title: "Contractor Portal", desc: "A high-end mobile interface for contractors to track accounts, orders, and rewards.", icon: Smartphone },
      { title: "Dealer Loyalty AI", desc: "Automated logic that predicts dealer churn and suggests inventory top-ups.", icon: Zap },
      { title: "Real-time Order Sync", desc: "Unify every material order across your entire regional network instantly.", icon: PieChart }
    ],
    impacts: [
      { value: "42%", label: "Increase in Contractor Repeat Rates" },
      { value: "28%", label: "Faster Order Processing Times" },
      { value: "15%", label: "Uplift in Dealer Net Revenue" }
    ]
  },
  "fashion": {
    title: "Fashion Retail",
    description: "Improve trend-based selling by syncing localized inventory with high-conversion viral social trends.",
    howWeHelp: [
      { 
        title: "Predict Trend Surges", 
        desc: "Analyze social signals and velocity to identify 'viral' items before they stock out in-store.", 
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      },
      { 
        title: "Localized Stock Logic", 
        desc: "Shift inventory between locations dynamically based on local fashion adoption and weather patterns.", 
        image: "https://images.unsplash.com/photo-1441984961801-496662706fb5?q=80&w=1200&auto=format&fit=crop",
      },
      { 
        title: "Personalized Stylists", 
        desc: "Increase conversion by pairing items based on aesthetic visual compatibility logic.", 
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
      }
    ],
    challenges: [
      { title: "Inventory Aging", desc: "Seasonal collections going stagnant due to slow feedback loops from the storefront.", icon: Search },
      { title: "Trend Disconnect", desc: "Social media trends moving faster than your supply chain can react.", icon: ShieldAlert },
      { title: "Siloed Stock", desc: "Inability to move stock between physical locations based on local demand surges.", icon: BarChart3 }
    ],
    features: [
      { title: "Trend-Sync Engine", desc: "AI that monitors social velocity and flags inventory for priority promotion.", icon: Zap },
      { title: "Localized Drops", desc: "Dynamic logistics logic that suggests stock movements based on viral geo-zones.", icon: LayoutDashboard },
      { title: "Virtual Stylist", desc: "Web-based AI that pair products based on visual trend data for high-conversion upsells.", icon: Users }
    ],
    impacts: [
      { value: "3.5x", label: "Faster Inventory Turnover" },
      { value: "22%", label: "Average Order Value Increase" },
      { value: "12%", label: "Reduction in End-of-Season Markdown" }
    ]
  },
  "electronics": {
    title: "Electronics",
    description: "Optimize upsell and warranties with intelligent product pairing and automated lifecycle management.",
    howWeHelp: [
      { 
        title: "Attachment Rate Growth", 
        desc: "Automatically suggest the most relevant warranties and accessories during the 'hot' purchase window.", 
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      },
      { 
        title: "Predictive Upgrade Cycles", 
        desc: "Identify exactly when a customer's tech becomes 'dated' and target them with high-converting trade-in offers.", 
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
      },
      { 
        title: "Service Automation", 
        desc: "Deploy AI chatbots to handle technical field support and warranty verification instantly.", 
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
      }
    ],
    challenges: [
      { title: "Low Attachment Rates", desc: "Missing out on profitable warranty and accessory sales at the point of purchase.", icon: Search },
      { title: "Lifecycle Blindspots", desc: "No visibility into when your customers are ready for their next tech upgrade.", icon: ShieldAlert },
      { title: "Complex Returns", desc: "High costs associated with warranty claims and technical support requests.", icon: BarChart3 }
    ],
    features: [
      { title: "Bespoke Warrenty Engine", desc: "Offer dynamic, AI-priced warranties based on individual customer risk profiles.", icon: Zap },
      { title: "Tech-Upgrade Triggers", desc: "Automatically notify customers when they are eligible for trade-ins or upgrades.", icon: Smartphone },
      { title: "Smart Accessory Bot", desc: "Real-time upsell logic that pairs tech products with the highest-converting accessories.", icon: LayoutDashboard }
    ],
    impacts: [
      { value: "40%", label: "Uplift in Warranty Attachment" },
      { value: "18%", label: "Increase in Tech Upgrade Frequency" },
      { value: "30%", label: "Reduction in Customer Support Tickets" }
    ]
  }
};

const defaultData = {
  title: "Vertical Growth",
  description: "Tapito transforms your industry-specific data into a strategic growth advantage with tailored AI logic.",
  howWeHelp: [
    { title: "Predictive Optimization", desc: "Anticipate market shifts and adjust your strategy in real-time.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" },
    { title: "Operational Clarity", desc: "Remove the fog of raw data with actionable, business-ready insights.", image: "https://images.unsplash.com/photo-1543286386-713bcd549118?q=80&w=1200&auto=format&fit=crop" },
    { title: "Automated Execution", desc: "Let AI handle the execution of growth strategies without manual friction.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" }
  ],
  challenges: [
    { title: "Data Overload", desc: "Too much data, not enough actionable insights to move the needle.", icon: Search },
    { title: "Manual Processes", desc: "Reliance on slow, manual workflows in a high-speed market.", icon: ShieldAlert },
    { title: "Stagnant Growth", desc: "Plateaued revenue without clear visibility into the next opportunity.", icon: BarChart3 }
  ],
  features: [
    { title: "AI-Powered Insights", desc: "Our engine discovers hidden patterns in your data automatically.", icon: Zap },
    { title: "Automated Workflows", desc: "Let AI handle the repetitive tasks so your team can focus on strategy.", icon: Smartphone },
    { title: "Predictive Forecasting", desc: "See the future of your sales and inventory with high-precision models.", icon: LayoutDashboard }
  ],
  impacts: [
    { value: "25%", label: "Average Revenue Increase" },
    { value: "40%", label: "Operational Cost Reduction" },
    { value: "3x", label: "Faster Decision Making" }
  ]
};

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = solutionDetails[slug] || defaultData;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner with Solution Name */}
      <SolutionsHero 
        badge="VERTICAL SOLUTION"
        titlePrimary={data.title}
        titleSecondary="Solutions"
        description={data.description}
      />

      {/* Client Logos Section */}
      <ClientStrip />

      {/* Interactive Process Section */}
      <section className="py-32 bg-white">
        <Container>
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-violet-600 mb-6 block">STRATEGIC ADVANTAGE</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Which way we help <br /> the <span className="text-violet-600">{data.title}</span> vertical
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Side: Just an Image Only */}
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl">
                {/* Visual Content - Using a more direct img tag approach */}
                <div className="absolute inset-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndex}
                      src={data.howWeHelp[activeIndex].image}
                      alt={data.howWeHelp[activeIndex].title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
                
                {/* Fallback Icon (Behind Image) */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-50">
                   <ImageIcon size={48} className="text-slate-200 animate-pulse" />
                </div>
                
                {/* Premium Overlay Filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none z-20" />
              </div>
            </div>

            {/* Right Side: Process Descriptions */}
            <div className="lg:w-1/2">
              <div className="space-y-4">
                {data.howWeHelp.map((item: any, i: number) => (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={cn(
                      "p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer relative group overflow-hidden",
                      activeIndex === i 
                        ? "bg-white border-violet-100 shadow-[0_30px_60px_-15px_rgba(124,58,237,0.1)] translate-x-4" 
                        : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-100"
                    )}
                  >
                    {/* Active Accent Bar */}
                    {activeIndex === i && (
                      <motion.div 
                        layoutId="activeBar"
                        className="absolute left-0 top-0 bottom-0 w-2 bg-violet-600"
                      />
                    )}

                    <div className="flex items-start gap-6">
                      <div className={cn(
                        "text-3xl font-black transition-colors duration-500",
                        activeIndex === i ? "text-violet-600" : "text-slate-300 group-hover:text-slate-400"
                      )}>
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className={cn(
                          "text-2xl font-black mb-3 transition-colors duration-500",
                          activeIndex === i ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"
                        )}>
                          {item.title}
                        </h4>
                        <p className={cn(
                          "text-lg transition-all duration-500 leading-relaxed font-medium overflow-hidden",
                          activeIndex === i ? "text-slate-600 h-auto" : "text-slate-400 h-0 group-hover:h-auto"
                        )}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <Container>
          <div className="text-center mb-20">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-violet-600 mb-4 block">THE CHALLENGE</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Why <span className="text-violet-600">{data.title}</span> <br /> <span className="gradient-text">Struggles to Scale</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.challenges.map((challenge: any, i: number) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 relative group">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <challenge.icon size={28} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{challenge.title}</h4>
                <p className="text-slate-500 leading-relaxed text-lg">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities / How it Works Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-xs font-black tracking-[0.3em] uppercase text-violet-600 mb-6 block">CORE CAPABILITIES</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">Advanced Logic for <span className="gradient-text">Absolute Growth</span></h2>

              <div className="space-y-12 mt-12">
                {data.features.map((feature: any, i: number) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-violet-600 text-white flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:rotate-6 transition-transform">
                      <feature.icon size={26} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-lg text-slate-500 leading-relaxed max-w-md">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative border-4 border-white shadow-2xl">
                <div className="absolute inset-0 bg-grid opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-violet-600/10 blur-[100px] animate-pulse" />
                </div>
                {/* Placeholder for an actual screenshot or interactive illustration */}
                <div className="absolute inset-x-8 top-8 bottom-8 bg-white/80 backdrop-blur shadow-xl rounded-2xl border border-white/50 flex flex-col p-8 overflow-hidden">
                  <div className="flex justify-between items-center mb-10">
                    <div className="w-32 h-4 bg-slate-200 rounded-full" />
                    <div className="w-10 h-10 bg-violet-600 rounded-lg" />
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="w-full h-8 bg-slate-100 rounded-lg" />
                    <div className="w-4/5 h-8 bg-slate-100 rounded-lg" />
                    <div className="grid grid-cols-2 gap-4 pt-10">
                      <div className="h-24 bg-violet-50 rounded-xl" />
                      <div className="h-24 bg-violet-50 rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative badgets */}
              <div className="absolute -right-8 top-1/4 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-violet-100">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Revenue Uplift</div>
                  <div className="text-xl font-black text-slate-900">+14.2%</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact / Stats Section */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <Container className="relative z-10">
          <div className="text-center mb-24">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-violet-400 mb-6 block">THE TAPITO IMPACT</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-white">Metrics that <span className="text-violet-500">Matter</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {data.impacts.map((impact: any, i: number) => (
              <div key={i} className="text-center group">
                <div className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 group-hover:from-violet-400 group-hover:to-violet-600 transition-all duration-700">
                  {impact.value}
                </div>
                <p className="text-xl text-slate-400 font-medium tracking-tight px-8">{impact.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title={<> Ready to solve your <br /> {data.title} challenges?</>}
        description="Speak with our solutions architects today and see how Tapito can transform your operations."
        isCentered={false}
        className="bg-white"
      />
    </main>
  );
}
