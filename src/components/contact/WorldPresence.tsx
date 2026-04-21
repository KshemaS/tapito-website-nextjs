"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import mapBg from "@/public/assets/images/contact/map-bg-without-dot.svg";
import BorderGlow from "@/components/BorderGlow";

const LOCATIONS = [
  { 
    city: "Kochi", 
    country: "India", 
    flag: "🇮🇳", 
    address: "3rd Floor, Noel Focus, Seaport - Airport Road, Kochi, Kerala 682037, India",
    x: 720, 
    y: 294 
  },
  { 
    city: "Kannur", 
    country: "India", 
    flag: "🇮🇳", 
    address: "STC Tower, Thana, Kannur, Kerala 670002, India",
    x: 712, 
    y: 288 
  },
  { 
    city: "Hyderabad", 
    country: "India", 
    flag: "🇮🇳", 
    address: "House No 12-26/D/A/1, NH 44, Shamshabad, Hyderabad, India",
    x: 694, 
    y: 270 
  },
  { 
    city: "Dubai", 
    country: "UAE", 
    flag: "🇦🇪", 
    address: "RA08 YA03, Jebel Ali Free Zone North, P.O. Box 263950, Dubai, UAE",
    x: 635.3, 
    y: 286.8
  },
  { 
    city: "Doha", 
    country: "Qatar", 
    flag: "🇶🇦", 
    address: "Building No: 371, Zone 56, Street 340, Salwa Road, Doha, Qatar",
    x: 645, 
    y: 248 
  },
  { 
    city: "Dar es Salaam", 
    country: "Tanzania", 
    flag: "🇹🇿", 
    address: "Plot No 21, Morocco Area, New Bagamoyo Road, Dar es Salaam, Tanzania",
    x: 583, 
    y: 341
  },
  { 
    city: "Cardiff", 
    country: "Australia", 
    flag: "🇦🇺", 
    address: "Suite 5/40 Harrison Street, PO Box 298, Cardiff NSW 2285, Australia",
    x: 910, 
    y: 415 
  },
];

const OFFICES = LOCATIONS;
// Combine Kochi and Kannur into one pin for the map
const MAP_DOTS = LOCATIONS.filter(loc => loc.city !== "Kannur");

export default function WorldPresence() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <>
      {/* Section header */}
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200/60 bg-blue-50/80 mb-6 sm:mb-8">
            <MapPin size={13} className="text-[#05a0ec]" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#09358c]">
              Global Presence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            Presence Around the World
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl mx-auto px-4">
            Get in touch with us for any queries. We are happy to help you!
          </p>
        </motion.div>
      </div>

      {/* Map */}
      <div className="relative mb-16 sm:mb-32 px-4 hidden sm:block">
        <div className="relative aspect-[2.2/1] w-full max-w-[1440px] mx-auto">
          {/* Map background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              <Image src={mapBg} alt="Presence Around the World" fill className="object-fill opacity-90" priority />
            </div>
          </div>

          {/* SVG overlay */}
          <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full z-10 overflow-visible">
            <defs>
              <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#05a0ec" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#05a0ec" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#09358c" />
                <stop offset="100%" stopColor="#05a0ec" />
              </linearGradient>
            </defs>

            {/* Subtle animated connection lines */}
            {MAP_DOTS.map((loc, i) => {
              const target = MAP_DOTS[(i + 3) % MAP_DOTS.length]; // Connect to a further dot for longer curves
              const midX = (loc.x + target.x) / 2;
              const midY = Math.min(loc.y, target.y) - 60; // More pronounced curve
              return (
                <motion.path
                  key={`line-${i}`}
                  d={`M ${loc.x} ${loc.y} Q ${midX} ${midY} ${target.x} ${target.y}`}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="0.5"
                  strokeDasharray="3 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, delay: i * 0.1 }}
                />
              );
            })}

            {/* Dots */}
            {MAP_DOTS.map((loc, i) => (
              <motion.g
                key={i}
                className="cursor-pointer group/dot"
                onHoverStart={() => setHoveredCity(loc.city)}
                onHoverEnd={() => setHoveredCity(null)}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
              >
                {/* Pulse ring */}
                <motion.circle
                  cx={loc.x} cy={loc.y} r="8"
                  fill="url(#dotGlow)"
                  animate={{ r: [5, 12, 5], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25 }}
                />

                {/* Main dot */}
                <motion.circle
                  cx={loc.x} cy={loc.y} r="3.5"
                  className="fill-[#05a0ec] stroke-white stroke-[1.5]"
                  whileHover={{ scale: 1.6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />

                <AnimatePresence>
                  {hoveredCity === loc.city && (
                    <foreignObject
                      x={loc.city === "Kochi" ? loc.x - 220 : loc.x - 110} 
                      y={loc.y - 120}
                      width={loc.city === "Kochi" ? "440" : "220"} 
                      height="150"
                      className="pointer-events-none overflow-visible"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-white p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-100 flex relative"
                      >
                        <div className={`flex ${loc.city === "Kochi" ? "flex-row gap-6" : "flex-col gap-2"}`}>
                          {/* Render Main City Info */}
                          <div className="flex flex-col gap-1.5 min-w-[180px] max-w-[200px]">
                            <div className="flex items-center gap-2.5">
                              <span className="text-xl leading-none">{loc.flag}</span>
                              <span className="text-[14px] font-bold text-slate-900 tracking-tight">
                                {loc.city}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-[1.4] font-medium">
                              {loc.address}
                            </p>
                          </div>

                          {/* Side-by-side extra card for Kochi */}
                          {loc.city === "Kochi" && (
                            <>
                              <div className="w-px bg-slate-100 self-stretch" />
                              <div className="flex flex-col gap-1.5 min-w-[180px] max-w-[200px]">
                                <div className="flex items-center gap-2.5">
                                  <span className="text-xl leading-none">{LOCATIONS.find(l => l.city === "Kannur")?.flag}</span>
                                  <span className="text-[14px] font-bold text-slate-900 tracking-tight">
                                    Kannur
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-[1.4] font-medium">
                                  {LOCATIONS.find(l => l.city === "Kannur")?.address}
                                </p>
                              </div>
                            </>
                          )}
                        </div>
                        
                      </motion.div>
                    </foreignObject>
                  )}
                </AnimatePresence>
              </motion.g>
            ))}
          </svg>
        </div>
      </div>

      {/* Office cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OFFICES.map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-[1.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(9,53,140,0.12)] transition-all duration-500 overflow-hidden"
            >
              <BorderGlow 
                colorFrom="#09358c" 
                colorTo="#05a0ec" 
                duration={5} 
                size={180} 
                borderRadius="1.5rem" 
                borderWidth={1.5}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-sky-50/0 group-hover:from-blue-50/60 group-hover:to-sky-50/40 transition-all duration-500 rounded-[1.5rem]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">{office.flag}</span>
                <h4 className="text-xl font-black text-slate-900 group-hover:text-[#05a0ec] transition-colors uppercase tracking-tight">
                  {office.city}
                </h4>
              </div>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                {office.address}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
