"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/Container";
import { Plus, ArrowRight, ArrowLeft } from "lucide-react";

const TEAM = [
  {
    name: "Arjun P",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-600/40"
  },
  {
    name: "Sarah Chen",
    role: "Head of AI",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    color: "from-emerald-600/40"
  },
  {
    name: "Marcus Miller",
    role: "Data Strategy Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    color: "from-indigo-600/40"
  },
  {
    name: "Elena Rodriguez",
    role: "UX Research Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    color: "from-rose-600/40"
  },
  {
    name: "David Kim",
    role: "Engineering Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    color: "from-amber-600/40"
  }
];

export default function AboutTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-12 pb-24 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-none mb-6">
              Meet the minds <br />
              <span className="text-[#09358c]">behind Tapito.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              A diverse team of data scientists, designers, and engineers dedicated to 
              reimaging the future of retail engagement.
            </p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft size={24} className="text-slate-900" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors group"
            >
              <ArrowRight size={24} className="text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Team Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[85%] sm:w-[450px] snap-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/5] sm:aspect-[3.2/4] bg-slate-100 shadow-xl shadow-slate-200/50">
                {/* Image */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent mix-blend-multiply opacity-80" />
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} to-transparent mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity`} />
                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-color pointer-events-none" />


                {/* Bottom Content */}
                <div className="absolute bottom-10 left-10 right-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                   {/* Name & Role */}
                   <div className="space-y-1">
                      <h3 className="text-3xl font-bold text-white leading-tight tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-white/70 text-base font-bold uppercase tracking-widest">
                        {member.role}
                      </p>
                   </div>
                </div>

                {/* Glassy border overlay on hover */}
                <div className="absolute inset-0 border-[1px] border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-[2.5rem] pointer-events-none" />
              </div>
            </motion.div>
          ))}
          {/* Spacer for end of scroll */}
          <div className="flex-shrink-0 w-8 md:w-20" />
        </div>
      </Container>
    </section>
  );
}
