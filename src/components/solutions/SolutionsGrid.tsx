"use client";

import { motion } from "framer-motion";
import { 
  Hammer, 
  Sofa, 
  Tv, 
  ShoppingBasket, 
  Shirt, 
  Sparkle, 
  Gem, 
  Utensils, 
  Globe, 
  Plane,
  ArrowRight 
} from "lucide-react";
import Container from "@/components/Container";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const solutionsData = [
  {
    title: "Building Materials",
    slug: "building-materials",
    desc: "Improve dealer & contractor engagement with real-time loyalty and order tracking.",
    icon: Hammer,
    color: "from-violet-600 to-indigo-600",
    benefits: ["Dealer Loyalty", "Contractor Portal", "Order Tracking"]
  },
  {
    title: "Home Furnishing",
    slug: "home-furnishing",
    desc: "Increase repeat purchases through personalized styling recommendations and AI design bots.",
    icon: Sofa,
    color: "from-violet-500 to-purple-600",
    benefits: ["AI Design Bot", "Styling Perks", "Repeat Purchase Logic"]
  },
  {
    title: "Electronics",
    slug: "electronics",
    desc: "Optimize upsell & warranties with intelligent product pairing and automated service reminders.",
    icon: Tv,
    color: "from-indigo-600 to-violet-700",
    benefits: ["Warranty Logic", "Upsell Engine", "Smart Pairing"]
  },
  {
    title: "Supermarkets",
    slug: "supermarkets",
    desc: "Boost basket size & frequency using smart shopping lists and real-time discount triggers.",
    icon: ShoppingBasket,
    color: "from-violet-600 to-fuchsia-600",
    benefits: ["Basket Boost", "Visit Frequency", "Flash Discounts"]
  },
  {
    title: "Fashion",
    slug: "fashion",
    desc: "Improve trend-based selling by syncing localized inventory with high-conversion viral trends.",
    icon: Shirt,
    color: "from-purple-600 to-indigo-600",
    benefits: ["Trend Sync", "Localized Drops", "Viral Inventory"]
  },
  {
    title: "Beauty",
    slug: "beauty",
    desc: "Personalize customer journeys with AI-driven skin profiles and hyper-targeted regime suggestions.",
    icon: Sparkle,
    color: "from-violet-500 to-fuchsia-500",
    benefits: ["Skin Profiles", "Regime AI", "Glow-up Logic"]
  },
  {
    title: "Jewelry",
    slug: "jewelry",
    desc: "Enhance high-value customer retention with white-glove digital concierge and bespoke offers.",
    icon: Gem,
    color: "from-indigo-500 to-violet-600",
    benefits: ["Digital Concierge", "Bespoke Offers", "VVIP Retention"]
  },
  {
    title: "F&B Retail",
    slug: "fb-retail",
    desc: "Increase visit frequency through dynamic time-based rewards and automated menu recommendations.",
    icon: Utensils,
    color: "from-violet-600 to-purple-700",
    benefits: ["Time-based Rewards", "Smart Menus", "Quick-Visit Logic"]
  },
  {
    title: "eCommerce",
    slug: "ecommerce",
    desc: "Reduce cart abandonment with intelligent exit-intent behavioral triggers and multi-channel recovery.",
    icon: Globe,
    color: "from-violet-600 to-indigo-700",
    benefits: ["Exit-Intent Logic", "Cart Recovery AI", "Behavioral Nudges"]
  },
  {
    title: "Travel & Hospitality",
    slug: "travel-hospitality",
    desc: "Improve repeat bookings with predictive destination scoring and personalized itinerary builders.",
    icon: Plane,
    color: "from-indigo-600 to-violet-800",
    benefits: ["Predictive Booking", "Smart Itineraries", "Loyalty Rewind"]
  }
];

function SolutionCard({ solution, index }: { solution: any, index: number }) {
  return (
    <Link href={`/solutions/${solution.slug}`} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-white rounded-[2.5rem] p-10 border-2 border-slate-100 transition-all duration-500 flex flex-col h-full overflow-hidden lg:hover:border-transparent max-lg:shadow-[0_40px_80px_-15px_rgba(124,58,237,0.12)] lg:hover:shadow-[0_40px_80px_-15px_rgba(124,58,237,0.12)] shadow-sm"
      >
        {/* Internal Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />
        
        {/* Dashed Border - Active on Mobile, Hover on Desktop */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 max-lg:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
          preserveAspectRatio="none"
        >
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="40"
            ry="40"
            className="fill-none stroke-violet-600 stroke-[2] animate-dash-flow"
            style={{ strokeDasharray: "8 4" }}
          />
        </svg>
        
        {/* Subtle Background Glow - Active on Mobile, Hover on Desktop */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/5 blur-[80px] transition-opacity duration-700 rounded-full max-lg:opacity-100 lg:opacity-0 lg:group-hover:opacity-100" />

        <div className={cn(
          "relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white mb-8 shadow-xl transition-all duration-500 max-lg:scale-110 lg:group-hover:scale-110 lg:group-hover:rotate-3 shadow-violet-500/20",
          solution.color
        )}>
          <solution.icon size={28} />
        </div>

        <h3 className="relative z-10 text-2xl font-black text-slate-900 mb-4 transition-colors max-lg:text-violet-600 lg:group-hover:text-violet-600">
          {solution.title}
        </h3>
        
        <p className="relative z-10 text-slate-500 text-lg leading-relaxed mb-10 flex-1 font-medium">
          {solution.desc}
        </p>

        <div className="relative z-10 flex items-center justify-between pt-8 border-t border-slate-100 transition-colors max-lg:border-violet-100 lg:group-hover:border-violet-100">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 transition-colors max-lg:text-violet-700 lg:group-hover:text-violet-700">
            Explore Solution
          </span>
          <div className="w-12 h-12 rounded-xl border flex items-center justify-center transition-all transform max-lg:bg-violet-600 max-lg:text-white max-lg:border-violet-600 max-lg:translate-x-1 lg:bg-slate-50 lg:border-slate-100 lg:text-slate-400 lg:group-hover:bg-violet-600 lg:group-hover:text-white lg:group-hover:border-violet-600 lg:group-hover:translate-x-1 shadow-sm">
            <ArrowRight size={20} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export const SolutionsGrid = () => {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutionsData.map((solution, i) => (
            <SolutionCard key={i} solution={solution} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};
