"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Eye, Target, TrendingUp } from "lucide-react";

export default function AboutWhoWeAre() {
  const points = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To make every business data-driven, automated, and growth-focused through intelligent AI orchestration.",
      color: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50"
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "We specialize in building intelligent platforms that help businesses grow using data, automation, and AI.",
      color: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-50"
    },
    {
      icon: TrendingUp,
      title: "Our Experience",
      description: "With over 7+ years of experience, we have a deep understanding of the retail ecosystem and its challenges.",
      color: "from-sky-500 to-blue-600",
      bg: "bg-sky-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background text */}
     

      <Container className="relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Empowering the Next <br />
            Generation of Retail
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 font-medium leading-relaxed"
          >
            Fegno Technologies is the driving force behind Tapito. Our team of experts is dedicated to pushing the boundaries of what's possible in customer engagement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2rem] border border-slate-100 bg-[#fafbfc] hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${point.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <point.icon className="text-[#09358c]" size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{point.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
