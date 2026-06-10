"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "@/components/Container";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bg from "@/public/assets/images/home-bg.avif";
import { ArrowRightIcon } from "lucide-animated";

const slides = [
  { src: "/videos/mob-ai.webm", title: "Voice-Powered AI Command Center" },
  {src: "/videos/smart-business.webm",title: "Real-Time Business Intelligence"},
  { src: "/videos/simulator.webm", title: "Advanced Growth Simulator" },
  { src: "/videos/ai.webm", title: "Smart Scheme Generator" },

];

export default function Hero() {
  const router = useRouter();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(window?.innerWidth === undefined) return;
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentVideoIndex];
  const isMobileVideo = currentSlide?.src.includes("ai") || currentSlide?.src.includes("mob-ai");

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <Container className="relative z-10">
        <div className="flex justify-between items-center overflow-hidden gap-12 min-h-screen">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left max-w-[609px] w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 px-[14px] py-[6px] 2xl:py-[8px] rounded-full border border-[#BFBFBF] flex items-center gap-2"
            >
              <span className="text-[12px] lg:text-[13px] 2xl:text-[16px] font-normal text-[#AFAFAF] uppercase tracking-wide leading-normal">
                THE FUTURE OF RETAIL AI
              </span>
            </motion.div>

            <h1 className={`${isMobile ? "text-[34px]" : "text-[40px]"} lg:text-[44px] 3xl:text-[58px] 2xl:text-[58px] font-bold xl:leading-[50px] 2xl:leading-[60px] 4xl:leading-[75px] text-white font-satoshi`}>
              Turn Your Retail Data Into Revenue
              <br />
              <span className="pb-2 px-1 inline-block bg-clip-text text-transparent bg-[linear-gradient(90deg,#09358C_0%,#FFFFFF_100%)]">
                {" "}
                Automatically{" "}
              </span>
            </h1>

            <p className="text-[16px] lg:text-[18px] xl:text-[20px] 4xl:text-[22px] mb-[30px] lg:mb-[40px] 2xl:mb-[60px] leading-relaxed font-normal text-[#BEBEBE]">
              AI-powered analytics, real-time insights, and fully automated
              customer engagement —built to grow your revenue without manual
              effort.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-1.5 sm:px-2 md:px-[2px]">
              <button
                className="btn-premium text-[16px] lg:text-[18px] 3xl:text-[22px] flex items-center gap-2 text-lg px-10 py-5 w-full sm:w-auto justify-center font-normal"
                onClick={() => router.push("/contact")}
              >
                Book Demo
                <ArrowRightIcon color="#017DC0C4" size={20} />
              </button>
              <button 
                className="px-8 py-3.5 rounded-full flex items-center gap-3 group text-lg w-full sm:w-auto justify-center transition-all bg-none border-1 border-[#017DC0C4] font-normal text-white text-[16px] lg:text-[18px] 3xl:text-[22px]"
                onClick={() => {
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="w-10 h-10 rounded-full gradient-bg-anim flex items-center justify-center text-white transition-all shadow-lg shadow-blue-500/10">
                  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current ml-1" aria-hidden="true">
                    <path d="M0 10.5807V1.30649C0 0.301562 1.08846 -0.325997 1.95815 0.177507L10.3491 5.03541C11.2373 5.54965 11.2113 6.84078 10.303 7.3188L1.91212 11.7351C1.04341 12.1923 0 11.5623 0 10.5807Z" fill="currentColor"/>
                  </svg> 
                </div>
                See How It Works
              </button>
            </div>
          </motion.div>

          {/* Right Column: Video Slider */}
          <div className="relative lg:block hidden w-full self-center h-screen">
            <div className="relative w-full h-full mx-auto flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideoIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 flex flex-col justify-end items-center`}
                >
                  <div
                    className={`relative w-full 2xl:h-[68%] 3xl:h-[70%] 4xl:h-[79%] overflow-hidden flex items-center justify-center`}
                  >
                    {/* Floating Title */}
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className={`absolute z-20 ${isMobileVideo ? "top-0 3xl:top-10 4xl:top-30 left-1/2 -translate-x-1/2" : "top-0 3xl:top-2 4xl:top-15 left-20"}`}
                    >
                      <h2 className="text-white text-sm font-semibold tracking-widest uppercase bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-2xl whitespace-nowrap">
                        {currentSlide.title}
                      </h2>
                    </motion.div>

                    <video
                      key={currentSlide.src}
                      src={currentSlide.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={`max-w-full max-h-full object-contain drop-shadow-2xl 4xl:pt-20 origin-bottom`}
                    />
                    <div className="absolute inset-0 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
