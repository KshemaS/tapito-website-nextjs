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
    <section className="py-24 bg-white overflow-hidden relative">
      <Container>
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black tracking-[0.4em] uppercase text-[#09358c] mb-6 block">
            STRATEGIC ADVANTAGE
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Which way we help <br /> the{" "}
            <span className="text-[#09358c]">{data.title}</span> vertical
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.howWeHelp.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative h-[500px] lg:h-[550px] rounded-[1.5rem] overflow-hidden cursor-pointer shadow-2xl shadow-slate-200/50 flex flex-col justify-end"
            >
              {/* Full-Bleed Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-40" />
              </div>

              {/* Initially Visible Heading */}
              <div className="absolute bottom-10 left-10 right-10 z-10 transition-all duration-500 group-hover:translate-y-20 group-hover:opacity-0">
                 <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                    {item.title}
                 </h3>
                 <div className="mt-4 w-12 h-1 bg-[#09358c] rounded-full" />
              </div>

              {/* Hover Revealed Glassmorphism Content Card */}
              <div className="relative z-20 p-8 lg:p-10 m-4 rounded-[1rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-700 translate-y-[110%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                 {/* Floating Icon Badge */}
                <div className="mt-6 space-y-4">
                   <div className="w-12 h-12 rounded-2xl bg-[#09358c] shadow-xl shadow-blue-500/20 flex items-center justify-center text-white transform transition-transform duration-500 group-hover:scale-110 bg-white/10">
                    <item.icon size={28} />
                 </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm lg:text-base font-medium leading-relaxed">
                      {item.desc}
                    </p>
                 </div>

                 {/* <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] opacity-60">Strategic Advantage 0{i+1}</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#09358c] shadow-lg transition-all duration-500 group-hover:translate-x-2">
                       <ArrowRight size={18} />
                    </div>
                 </div> */}
              </div>

              {/* Top Right Decorative Badge */}
              <div className="absolute top-8 right-8 px-4 py-4 bg-white backdrop-blur-md rounded-full border border-white text-white text-[9px] fon t-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 ">
                  {/* <div className="absolute -top-8 left-8 w-16 h-16 rounded-2xl bg-[#09358c] shadow-xl shadow-blue-500/20 flex items-center justify-center text-white transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12"> */}
                     <ArrowRight size={18} color="black" />
                 {/* </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StrategicAdvantage;
