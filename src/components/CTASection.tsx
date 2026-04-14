"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: React.ReactNode;
  description?: string;
  isCentered?: boolean;
  className?: string;
}

export default function CTASection({ 
  title = <>Stop Guessing. <br /> <span className="text-violet-400">Start Growing.</span></>,
  description = "Join hundreds of retail giants who have transformed their data into a revenue engine with Tapito.",
  isCentered = false,
  className
}: CTASectionProps) {
  return (
    <section className={cn("bg-white py-24", className)}>
      <Container>
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(124,58,237,0.15),transparent)] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-600/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fuchsia-600/10 blur-[100px] rounded-full" />

          <div className={cn(
            "relative z-10 grid gap-12 items-center",
            isCentered ? "text-center max-w-4xl mx-auto grid-cols-1" : "grid-cols-1 lg:grid-cols-2 text-left"
          )}>
            <div>
              <h2 className={cn(
                "text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1]",
                isCentered && "mx-auto"
              )}>
                {title}
              </h2>
              <p className={cn(
                "text-xl text-slate-400 max-w-xl",
                isCentered && "mx-auto"
              )}>
                {description}
              </p>
            </div>
            
            <div className={cn(
              "flex flex-col sm:flex-row items-center gap-5",
              isCentered ? "justify-center" : "lg:justify-end"
            )}>
              <button className="btn-premium px-10 py-5 text-lg whitespace-nowrap">
                Book a Demo
              </button>
              <button className="btn-secondary bg-transparent border-slate-700 text-white hover:bg-white/5 px-10 py-5 text-lg rounded-full whitespace-nowrap">
                Talk to Experts
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
