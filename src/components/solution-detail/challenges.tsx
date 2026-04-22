"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";

interface ChallengesProps {
  data: {
    title: string;
    challenges: {
      title: string;
      desc: string;
      icon: any;
    }[];
  };
}

const Challenges = ({ data }: ChallengesProps) => {
  return (
    <section
      id="challenges"
      className="section-padding bg-slate-50 relative overflow-hidden"
    >
      {/* Animated Moving Line Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200 opacity-50" />
      <motion.div
        animate={{ left: ["-25%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#09358c] to-transparent z-10"
      />
      <Container>
        <div className="text-center mb-20">
          <span className="text-xs font-black tracking-[0.3em] uppercase text-[#09358c] mb-4 block">
            THE CHALLENGE
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight md:leading-[51px]">
            Why <span className="text-[#09358c]">{data.title}</span> <br />{" "}
            <span className="text-black">Struggles to Scale</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {data.challenges.map((challenge: any, i: number) => (
            <div
              key={i}
              className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 relative group"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <challenge.icon size={28} />
              </div>
              <h4 className="text-[22px] lg:text-[26px] 2xl:text-2xl font-black text-slate-900 mb-4">
                {challenge.title}
              </h4>
              <p className="text-slate-500 leading-relaxed text-base lg:text-lg">
                {challenge.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Challenges;
