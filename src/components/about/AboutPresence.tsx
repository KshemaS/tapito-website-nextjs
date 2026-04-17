"use client";

import Container from "@/components/Container";
import { MapPin, Globe, ArrowUpRight } from "lucide-react";

export default function AboutPresence() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#05a0ec]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#05a0ec]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05a0ec]/20 text-[#05a0ec] text-[11px] font-bold uppercase tracking-widest mb-6 border border-[#05a0ec]/30">
                    Global Network
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tighter leading-[1.1]">
                    Rooted in Kochi, <br /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05a0ec] to-sky-300">Scaling Globally.</span>
                </h2>
                <p className="text-xl text-slate-400 font-medium mb-10 leading-relaxed">
                    While our heart and headquarters are located in the vibrant city of Kochi, Kerala, our impact is felt across the globe. We bridge world-class AI technology with local retail expertise.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                        <img 
                            src="/assets/images/about/kochi-office.jpeg" 
                            alt="Kochi Headquarters" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                                <MapPin size={20} className="text-[#05a0ec]" />
                            </div>
                            <h4 className="text-xl font-bold mb-1 tracking-tight">Headquarters</h4>
                            <p className="text-sm text-white/70 font-medium leading-relaxed">
                                Kochi, Kerala, India
                            </p>
                            <a href="https://www.fegno.com" target="_blank" className="inline-flex items-center gap-2 mt-4 text-[#05a0ec] font-bold text-sm hover:text-white transition-colors">
                                fegno.com <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                    
                    <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl group hover:border-[#05a0ec]/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-[#05a0ec]/10 flex items-center justify-center mb-6 border border-[#05a0ec]/20">
                            <Globe className="text-[#05a0ec]" size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Global Presence</h4>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed">
                            Strategic locations across USA, Europe, and Middle East.
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-[#05a0ec]/20 blur-3xl rounded-full opacity-50" />
                <div className="w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl z-10">
                    <video 
                        className="w-full h-full object-cover opacity-90"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source src="/assets/images/about/globe.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
