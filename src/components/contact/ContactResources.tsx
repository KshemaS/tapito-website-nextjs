"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import {
  HelpCircle,
  Monitor,
  Briefcase,
  Users,
  ArrowRight,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import BorderGlow from "@/components/BorderGlow";
import { cn } from "@/lib/utils";
import Container from "@/components/Container";
import Particles from "@/components/Particles";

const CARDS = [
  {
    title: "Help Center",
    desc: "Get detailed documentation, guides, and real-time support for every Tapito feature.",
    icon: HelpCircle,
    num: "01",
    href: "#",
  },
  {
    title: "Interactive Demo",
    desc: "Experience the full power of Tapito AI with our hands-on product walkthrough.",
    icon: Monitor,
    num: "02",
    href: "#",
  },
  {
    title: "Careers",
    desc: "Join our mission to revolutionize retail with artificial intelligence.",
    icon: Briefcase,
    num: "03",
    href: "#",
  },
  {
    title: "Growth Community",
    desc: "Connect with 5,000+ retail leaders and share proven growth strategies.",
    icon: Users,
    num: "04",
    href: "#",
  },
];

function ResourceCard({ 
  card, 
  index, 
  isActive, 
  onHover 
}: { 
  card: typeof CARDS[0], 
  index: number, 
  isActive: boolean,
  onHover: (index: number | null) => void
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  const spotlight = useTransform(
    [x, y],
    ([xVal, yVal]) => `radial-gradient(400px circle at ${xVal}px ${yVal}px, rgba(255, 255, 255, 0.2), transparent 80%)`
  );

  return (
    <motion.a
      href={card.href}
      layout
      animate={{
        flex: isActive ? 2.5 : 1,
      }}
      transition={{ 
        duration: 0.9, 
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col justify-between p-7 sm:p-9 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[320px] sm:min-h-[440px] cursor-pointer transition-colors duration-500",
        isActive ? "bg-[#09358c] shadow-2xl shadow-blue-900/20" : "bg-white border border-slate-100 shadow-lg shadow-slate-200/40"
      )}
    >
      {/* Background Gradient Layer (Fades in over the base color) */}
      <motion.div 
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-br from-[#09358c] to-[#05a0ec] z-0 pointer-events-none"
      />

      {/* Spotlight Glow */}
      <motion.div 
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-500 z-10",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-20"
        )}
        style={{ background: spotlight }}
      />
      
      {/* Border glow */}
      <BorderGlow 
        colorFrom="rgba(255,255,255,0.5)" 
        colorTo="rgba(255,255,255,0.1)" 
        borderRadius="2.5rem" 
        size={isActive ? 300 : 200} 
        duration={5} 
        className={cn("transition-opacity duration-700 z-10", isActive ? "opacity-100" : "opacity-0")}
      />

      {/* Grid texture */}
      <div className={cn(
        "absolute inset-0 pointer-events-none transition-opacity duration-700 z-10",
        "bg-[size:32px_32px]",
        isActive 
          ? "bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] opacity-100" 
          : "bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] opacity-50"
      )} />

      {/* Content wrapper with higher Z-index */}
      <div className="relative z-30 w-full flex flex-col justify-between h-full">
        <div>
          <div className="flex items-start justify-between mb-10">
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700",
              isActive 
                ? "bg-white/10 border border-white/20 backdrop-blur-md text-white" 
                : "bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-[#09358c] group-hover:bg-slate-100/50"
            )}>
              <card.icon size={26} strokeWidth={1.5} />
            </div>
            <div className={cn(
              "text-[10px] font-extrabold uppercase tracking-[0.25em] px-3 py-1 rounded-full border transition-all duration-700",
              isActive 
                ? "text-white/50 bg-white/5 border-white/10" 
                : "text-slate-400 bg-slate-50 border-slate-100 group-hover:border-slate-200"
            )}>
              {card.num}
            </div>
          </div>

          <motion.h3 
            layout="position"
            className={cn(
              "font-black tracking-tight transition-all duration-700 leading-tight",
              isActive ? "text-white text-3xl mb-0" : "text-slate-800 text-xl mb-0 group-hover:text-[#09358c]"
            )}
          >
            {card.title}
          </motion.h3>

          <p className={cn(
            "text-[14px] leading-relaxed transition-all duration-700",
            isActive 
              ? "text-white/70 mt-4 max-w-sm opacity-100" 
              : "text-slate-500 mt-3 line-clamp-2 opacity-80 group-hover:opacity-100"
          )}>
            {card.desc}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <motion.span 
            layout="position"
            className={cn(
              "text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all duration-700",
              isActive ? "text-white/60 opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-100"
            )}
          >
            Explore Now
          </motion.span>
          <div className={cn(
            "w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-700",
            isActive 
              ? "bg-white text-[#09358c] border-white scale-110 shadow-lg" 
              : "bg-slate-50 text-slate-400 border-slate-100 group-hover:bg-slate-100 group-hover:text-[#09358c]"
          )}>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function ContactResources() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section className="py-32 bg-[#fafbfc] overflow-hidden relative">
      {/* Background layers */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"><Particles /></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(9,53,140,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(9,53,140,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(9,53,140,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#09358c]/15 bg-[#09358c]/5 mb-5">
              <Sparkles size={12} className="text-[#09358c]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#09358c]/80">Resources</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-[1.05]">
              Growing with Tapito<br />
              <span className="text-[#09358c]">is now effortless</span>
            </h2>
          </div>
          <p className="text-[15px] text-slate-500 font-medium max-w-xs leading-relaxed md:text-right">
            Discover the tools, demos, and community behind the world&apos;s fastest-growing retail AI platform.
          </p>
        </motion.div>

        {/* Looping Accordion Grid */}
        <div className="flex flex-col lg:flex-row gap-5">
          {CARDS.map((card, index) => (
            <ResourceCard 
              key={index}
              card={card}
              index={index}
              isActive={activeIndex === index}
              onHover={(idx) => {
                if (idx !== null) {
                  setActiveIndex(idx);
                  setIsPaused(true);
                } else {
                  setIsPaused(false);
                }
              }}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-20 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-6 px-6 sm:px-10 py-8 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/20"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#09358c]/5 flex items-center justify-center flex-shrink-0">
              <Zap size={20} className="text-[#09358c]" />
            </div>
            <div>
              <p className="text-[16px] font-bold text-slate-800">Not sure where to start?</p>
              <p className="text-[14px] text-slate-500 font-medium mt-1">Our team is happy to guide you through our growing ecosystem.</p>
            </div>
          </div>
          <a
            href="#"
            className="btn-premium inline-flex items-center gap-2 whitespace-nowrap px-8 py-4 text-[14px] rounded-xl"
          >
            <Send size={15} />
            Talk to an Expert
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
