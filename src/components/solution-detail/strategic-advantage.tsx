"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

interface StrategicAdvantageProps {
  data: {
    title: string;
    howWeHelp: {
      title: string;
      desc: string;
      image: string;
      icon: any;
    }[];
  };
}

const StrategicAdvantage = ({ data }: StrategicAdvantageProps) => {
  return (
    <section className="py-20 xl:py-20 3xl:py-32 bg-white overflow-hidden">
      <Container>
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black tracking-[0.4em] uppercase text-[#09358c] mb-6 block">
            STRATEGIC ADVANTAGE
          </span>
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Which way we help <br /> the{" "}
            <span className="text-[#09358c]">{data.title}</span> vertical
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch h-full">
          {data?.howWeHelp.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative h-[450px] lg:h-[500px] 3xl:h-[600px] rounded-[18px] overflow-hidden cursor-pointer shadow-2xl shadow-slate-200/50"
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
              <div className="absolute inset-0 p-6 2xl:p-10 flex flex-col justify-end">
                {/* Numbering */}
                <div className="text-[26px] xl:text-[34px] 3xl:text-4xl text-white lg:text-white/40 font-black mb-4 group-hover:text-white transition-colors font-medium">
                  0{i + 1}
                </div>

                {/* Title and Expansion Description */}
                <div className="space-y-4">
                  <h3 className="text-[26px] lg:text-[30px] xl:text-[34px] 3xl:text-4xl font-black text-white leading-tight font-medium">
                    {item.title}
                  </h3>

                  <div className="max-h-[300px] opacity-100 lg:max-h-0 lg:opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                    <p className="text-base md:text-lg text-slate-200 font-medium leading-relaxed">
                      {item.desc}
                    </p>

                    <button className="mt-8 flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white hover:text-[#09358c] transition-all">
                      Learn Detail <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Top Right Icon/Badge */}
              <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white scale-100 lg:scale-0 group-hover:scale-100 transition-transform duration-500">
                <item.icon size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StrategicAdvantage;
