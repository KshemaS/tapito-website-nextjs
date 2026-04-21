"use client";

import { useParams } from "next/navigation";
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
  Rocket,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import ClientStrip from "@/components/ClientStrip";
import { FeatureShowcase } from "@/components/solutions/FeatureShowcase";
import { IntegrationSection } from "@/components/solutions/IntegrationSection";
import { SolutionTestimonials } from "@/components/solutions/SolutionTestimonials";
import { cn } from "@/lib/utils";
import Capabilities from "@/components/solution-detail/core-capabilities";
import Impacts from "@/components/solution-detail/impacts";
import CTASection from "@/components/CTA-card";
import { FAQ } from "@/components/solutions/FAQ";

const solutionDetails: Record<string, any> = {
  "building-materials": {
    title: "Building Materials",
    description: "Improve dealer and contractor engagement with real-time loyalty tracking and automated order management logic.",
    howWeHelp: [
      { 
        title: "Scale Contractor Loyalty", 
        desc: "Automate rewards based on purchase frequency and bulk volume, ensuring contractors stay committed to your brand.", 
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
        icon: Users
      },
      { 
        title: "Dealer Visibility", 
        desc: "Give every dealer a real-time dashboard of their material availability and regional demand trends.", 
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        icon: Search
      },
      { 
        title: "Order Automation", 
        desc: "Replace slow manual checks with AI-verified order workflows for high-volume material transactions.", 
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
        icon: Zap
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
    faqs: [
      { question: "How does Tapito improve contractor loyalty?", answer: "Tapito uses AI to track contractor purchase cycles and volume. It automatically triggers personalized tier-based rewards and bulk-order incentives precisely when they are most likely to re-order, ensuring high engagement levels." },
      { question: "Can it integrate with our existing ERP?", answer: "Yes, Tapito is built for seamless integration with major building material ERP systems. Our real-time sync ensures that material availability is consistently updated across all dealer dashboards." },
      { question: "How long does the setup take?", answer: "Most building material providers are fully operational within 4-6 weeks, including data mapping and contractor portal deployment." },
      { question: "Can it handle bulk pricing and specialized discounting?", answer: "Yes, Tapito’s engine supports complex pricing structures, allowing for automated, dynamic discounting based on dealer volume and loyalty tiers." },
      { question: "Is there support for offline orders?", answer: "Tapito integrates with field sales tools to ensure that even offline orders taken at job sites are synced and attributed to the correct loyalty accounts once back online." }
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
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
        icon: TrendingUp
      },
      { 
        title: "Localized Stock Logic", 
        desc: "Shift inventory between locations dynamically based on local fashion adoption and weather patterns.", 
        image: "https://images.unsplash.com/photo-1441984901-496662706fb5?q=80&w=1200&auto=format&fit=crop",
        icon: LayoutDashboard
      },
      { 
        title: "Personalized Stylists", 
        desc: "Increase conversion by pairing items based on aesthetic visual compatibility logic.", 
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
        icon: Users
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
    faqs: [
      { question: "How does the trend-sync engine work?", answer: "Our AI monitors social media engagement and search volume for specific styles. When a trend is detected, it cross-references your inventory and suggests priority restocks or promotions for matching items." },
      { question: "Can we automate stock transfers between stores?", answer: "Absolutely. Tapito's localized drops logic identifies stores with high demand for specific categories and automates transfer requests from lower-velocity locations." },
      { question: "Does it help with seasonal clearance?", answer: "Yes, by identifying slow-moving items early, Tapito suggests localized flash sales and visual styling pairings to clear seasonal stock before markdowns become necessary." },
      { question: "Does it support international inventory management?", answer: "Yes, Tapito handles multi-currency and multi-regional stock logic, helping you balance inventory across international borders based on regional style velocity." },
      { question: "How does it handle size and color variations?", answer: "Our AI analyzes trend data at the SKU level, so you know exactly which sizes and colors are trending in specific locations, preventing local stockouts." }
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
        image: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1200&auto=format&fit=crop",
        icon: Target
      },
      { 
        title: "Predictive Upgrade Cycles", 
        desc: "Identify exactly when a customer's tech becomes 'dated' and target them with high-converting trade-in offers.", 
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        icon: Zap
      },
      { 
        title: "Service Automation", 
        desc: "Deploy AI chatbots to handle technical field support and warranty verification instantly.", 
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
        icon: Smartphone
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
    faqs: [
      { question: "How do you calculate upgrade triggers?", answer: "We analyze a product's release cycle alongside the customer's purchase date and usage patterns. We then trigger trade-in offers just as their device enters the 'secondary value' sweet spot." },
      { question: "Is the warranty pricing dynamic?", answer: "Yes, our engine can adjust warranty pricing in real-time based on the item type, purchase location, and customer loyalty history to maximize conversion." },
      { question: "Can it handle complex technical support?", answer: "Tapito's service AI uses trained technical documentation to guide users through troubleshooting, reducing support costs by up to 30%." },
      { question: "Can we use it for post-purchase technical support?", answer: "Absolutely. Tapito can automate technical guide delivery and troubleshooting steps via WhatsApp or Email based on the specific SKU purchased." },
      { question: "Does it help with trade-in programs?", answer: "Yes, it calculates fair market value for used devices in real-time and automates the trade-in credit process to encourage immediate upgrades." }
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
    { title: "Predictive Optimization", desc: "Anticipate market shifts and adjust your strategy in real-time.", image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop", icon: TrendingUp },
    { title: "Operational Clarity", desc: "Remove the fog of raw data with actionable, business-ready insights.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", icon: BarChart3 },
    { title: "Automated Execution", desc: "Let AI handle the execution of growth strategies without manual friction.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", icon: Rocket }
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
  faqs: [
    { question: "How secure is my business data?", answer: "Data security is our top priority. Tapito uses enterprise-grade encryption and complies with international data protection standards (GDPR, SOC2) to ensure your competitive intelligence remains private." },
    { question: "How difficult is the onboarding process?", answer: "We provide a dedicated solutions architect to manage your onboarding. Our 'low-code' approach allows you to connect your data streams and see insights within 30 days." },
    { question: "Is Tapito scalable for small businesses?", answer: "Tapito's engine is designed to scale with your volume. Whether you have 5 stores or 5,000, our pricing and processing capacity adapt to your needs." },
    { question: "Is custom development required for integration?", answer: "Tapito is designed as a modular platform. While we offer deep custom integrations, our standard connectors allow most businesses to start seeing data insights with minimal dev effort." },
    { question: "What kind of support is included?", answer: "All partners receive a dedicated success manager and 24/7 technical support to ensure your AI engine is always performing at its peak." }
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

  return (
    <main className="min-h-screen bg-white">
      <SolutionsHero 
        badge="VERTICAL SOLUTION"
        titlePrimary={data.title}
        titleSecondary="Solutions"
        description={data.description}
      />
      <ClientStrip />
      <section className="py-32 bg-white overflow-hidden">
        <Container>
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-[#09358c] mb-6 block">STRATEGIC ADVANTAGE</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Which way we help <br /> the <span className="text-[#09358c]">{data.title}</span> vertical
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch h-full">
            {data.howWeHelp.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group relative h-[600px] rounded-[18px] overflow-hidden cursor-pointer shadow-2xl shadow-slate-200/50"
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-100 transition-opacity" />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  {/* Numbering */}
                  <div className="text-white/40 font-black text-4xl mb-4 group-hover:text-white transition-colors font-medium">0{i + 1}</div>
                  
                  {/* Title and Expansion Description */}
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight font-medium">
                      {item.title}
                    </h3>
                    
                    <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                      <p className="text-lg text-slate-200 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                      
                      <button className="mt-8 flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white hover:text-[#09358c] transition-all">
                        Learn Detail <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Top Right Icon/Badge */}
                <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                  <item.icon size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      <section id="challenges" className="section-padding bg-slate-50 relative overflow-hidden">
        {/* Animated Moving Line Border */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200 opacity-50" />
        <motion.div 
          animate={{ left: ["-25%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#09358c] to-transparent z-10"
        />
        <Container>
          <div className="text-center mb-20">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#09358c] mb-4 block">THE CHALLENGE</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[51px]">Why <span className="text-[#09358c]">{data.title}</span> <br /> <span className="text-black">Struggles to Scale</span></h2>
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
      <Capabilities data={data} />
      <FeatureShowcase />
      <IntegrationSection />
      <SolutionTestimonials />
      <FAQ items={data.faqs} />
      <CTASection
        title="Ready to solve your challenges?"
        description="Join hundreds of retail giants who have transformed their data into a revenue engine with Tapito."
        badge="READY TO TRANSFORM?"
        image="/assets/images/about/ready-to-tranform.png"
        isAbout={false}
      />
    </main>
  );
}
