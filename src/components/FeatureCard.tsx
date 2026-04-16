"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { ArrowRight, LucideIcon, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  benefits?: string[];
  icon: LucideIcon;
  index: number;
  slug: string;
}

// ─── Floating Particle ────────────────────────────────────────────────────────

const Particle = ({ delay, x, index }: { delay: number; x: number; index: number }) => (
  <motion.div
    className="absolute bottom-0 rounded-full pointer-events-none"
    style={{
      left: `${x}%`,
      width: index % 3 === 0 ? 3 : index % 3 === 1 ? 2 : 4,
      height: index % 3 === 0 ? 3 : index % 3 === 1 ? 2 : 4,
    }}
    animate={{
      y: [0, -120, -180],
      x: [0, (index % 2 === 0 ? 1 : -1) * 12, (index % 2 === 0 ? -1 : 1) * 8],
      opacity: [0, 0.5, 0],
      scale: [0, 1, 0.5],
    }}
    transition={{
      duration: 3.5 + (index % 3) * 0.8,
      delay,
      repeat: Infinity,
      ease: "easeOut",
      repeatDelay: 1.2 + (index % 4) * 0.5,
    }}
  >
    <div className="w-full h-full rounded-full bg-purple-400/40 group-hover:bg-purple-500/60 transition-colors duration-500" />
  </motion.div>
);

// ─── Shimmer Sweep ────────────────────────────────────────────────────────────

const ShimmerSweep = ({ index }: { index: number }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]"
    aria-hidden
  >
    <motion.div
      className="absolute top-0 -left-full w-1/2 h-full"
      style={{
        background:
          "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.45) 50%, transparent 80%)",
      }}
      animate={{ left: ["-60%", "160%"] }}
      transition={{
        duration: 2.4,
        delay: index * 0.6 + 1.5,
        repeat: Infinity,
        repeatDelay: 5,
        ease: "easeInOut",
      }}
    />
  </motion.div>
);

// ─── Rotating Border Gradient ─────────────────────────────────────────────────

const RotatingBorder = ({ index }: { index: number }) => {
  const [angle, setAngle] = useState(0);
  const startRef = useRef<number | null>(null);

  useAnimationFrame((t) => {
    if (startRef.current === null) startRef.current = t;
    const elapsed = t - startRef.current + index * 800;
    setAngle((elapsed / 6000) * 360);
  });

  return (
    <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none overflow-hidden">
      <div
        className="absolute inset-[-1px] rounded-[2.5rem]"
        style={{
          background: `conic-gradient(from ${angle}deg, transparent 0deg, rgba(124,58,237,0.25) 60deg, rgba(99,102,241,0.35) 120deg, rgba(124,58,237,0.15) 180deg, transparent 240deg)`,
          maskImage: `radial-gradient(transparent calc(100% - 1.5px), black calc(100% - 1.5px))`,
          WebkitMaskImage: `radial-gradient(transparent calc(100% - 1.5px), black calc(100% - 1.5px))`,
        }}
      />
    </div>
  );
};

// ─── Orbiting Dot ─────────────────────────────────────────────────────────────

const OrbitingDot = ({ index }: { index: number }) => (
  <motion.div
    className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/50 pointer-events-none"
    style={{ top: "50%", left: "50%", transformOrigin: "0 0" }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 8 + index * 1.5,
      repeat: Infinity,
      ease: "linear",
      delay: index * 0.4,
    }}
  >
    <div
      className="absolute rounded-full bg-purple-500/70"
      style={{
        width: 6,
        height: 6,
        top: index % 2 === 0 ? -80 : -120,
        left: -3,
        boxShadow: "0 0 6px 2px rgba(124,58,237,0.4)",
      }}
    />
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const FeatureCard = ({
  title,
  description,
  benefits,
  icon: Icon,
  index,
  slug,
}: FeatureCardProps) => {
  return (
    <Link href={`/features/${slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
        whileHover={{ y: -8 }}
        className="relative h-full"
      >
        <div className="relative h-full p-8 lg:p-10 rounded-[2.5rem] transition-all duration-700 flex flex-col justify-between min-h-[460px] overflow-hidden bg-white border border-slate-100 text-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] group-hover:shadow-[0_45px_90px_-20px_rgba(72,0,178,0.12)]">

          {/* ── Rotating Border Gradient (auto) ── */}
          <RotatingBorder index={index} />

          {/* ── Shimmer Sweep (auto, loops) ── */}
          <ShimmerSweep index={index} />

          {/* ── Floating Particles (auto) ── */}
          {[14, 28, 44, 62, 78].map((x, i) => (
            <Particle key={i} delay={index * 0.3 + i * 0.7} x={x} index={i} />
          ))}

          {/* ── Subtle Hover Gradient ── */}
          <div className="absolute inset-0 bg-linear-to-br from-purple-600/[0.03] to-indigo-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* ── Decorative Background Blob ── */}
          <motion.div
            className="absolute -right-16 -top-16 w-64 h-64 bg-slate-50 rounded-full transition-colors duration-700 group-hover:bg-purple-600/5"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ── Orbiting Dots (auto, subtle) ── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <OrbitingDot index={index} />
            <OrbitingDot index={index + 2} />
          </div>

          <div className="relative z-10">
            {/* ── Icon ── */}
            <div className="flex items-center justify-between mb-8">
              <div className="relative">
                {/* Icon glow ring — auto-breathes */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-md"
                  animate={{ scale: [0.8, 1.3, 0.8], opacity: [0, 0.6, 0] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  }}
                />
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 5, -5, 0],
                    boxShadow: [
                      "0px 0px 0px 0px rgba(124, 58, 237, 0)",
                      "0px 10px 20px -5px rgba(124, 58, 237, 0.2)",
                      "0px 0px 0px 0px rgba(124, 58, 237, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                  className="relative w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-500 bg-slate-50 text-slate-900 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110 shadow-sm border border-slate-100 origin-center"
                >
                  <Icon size={32} className="transition-transform duration-500 group-hover:scale-110" />
                </motion.div>
              </div>

              {/* ── Corner badge — subtle tick pulse ── */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3 + 0.5,
                }}
                className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-purple-400 transition-colors"
              >
                {`0${index + 1}`}
              </motion.div>
            </div>

            <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900 group-hover:text-purple-600 transition-colors">
              {title}
            </h3>

            {/* ── Description with character-reveal underline ── */}
            <div className="relative mb-8">
              <p className="text-[15px] font-medium leading-relaxed text-slate-500 line-clamp-2">
                {description}
              </p>
              <motion.div
                className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                animate={{ width: ["0%", "40%", "0%"] }}
                transition={{
                  duration: 4,
                  delay: index * 0.4 + 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 3,
                }}
              />
            </div>

            {/* ── Benefits list with staggered wave ── */}
            {benefits && (
              <div className="space-y-3.5 mb-10">
                {benefits.slice(0, 3).map((benefit, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2 + i * 0.5,
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.25, 1], rotate: [0, 15, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        delay: index * 0.1 + i * 0.4,
                        ease: "easeInOut",
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        className="text-slate-200 group-hover:text-purple-500 shrink-0 transition-colors duration-500"
                      />
                    </motion.div>
                    <span className="text-[13px] font-extrabold text-slate-400 group-hover:text-slate-600 transition-colors duration-500">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* ── Footer ── */}
          <div className="relative z-10 mt-auto pt-6 flex items-center justify-between border-t border-slate-50 group-hover:border-purple-100 transition-colors">
            <div className="flex items-center gap-2">
              {/* Three dots pulsing in sequence */}
              {[0, 0.3, 0.6].map((d, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-purple-400 transition-colors duration-500"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: d + index * 0.1,
                  }}
                />
              ))}
              <span className="font-black text-[11px] uppercase tracking-widest text-slate-400 group-hover:text-purple-600 transition-colors ml-1">
                explore more
              </span>
            </div>

            {/* Arrow button with auto-nudge */}
            <motion.div
              animate={{ x: [0, 5, 0], scale: [1, 1.05, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              className="w-10 h-10 rounded-full border border-slate-100 bg-white flex items-center justify-center text-slate-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300 shadow-sm"
            >
              <ArrowRight size={18} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};