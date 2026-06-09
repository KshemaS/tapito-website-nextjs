"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import Image from "next/image";

import client1 from "../../../public/assets/images/clients/client-1.png";
import client2 from "../../../public/assets/images/clients/client-2.png";
import client3 from "../../../public/assets/images/clients/client-3.png";
import client4 from "../../../public/assets/images/clients/client-4.png";
import client5 from "../../../public/assets/images/clients/client-5.png";
import client6 from "../../../public/assets/images/clients/client-6.png";
import client7 from "../../../public/assets/images/clients/client-7.png";
import client8 from "../../../public/assets/images/clients/client-8.png";
import client9 from "../../../public/assets/images/clients/client-9.png";
import client10 from "../../../public/assets/images/clients/client-10.png";
import client11 from "../../../public/assets/images/clients/client-11.png";
import client12 from "../../../public/assets/images/clients/client-12.png";

const CLIENTS = [
  { name: "Client 1", src: client1 },
  { name: "Client 2", src: client2 },
  { name: "Client 3", src: client3 },
  { name: "Client 4", src: client4 },
  { name: "Client 5", src: client5 },
  { name: "Client 6", src: client6 },
  { name: "Client 7", src: client7 },
  { name: "Client 8", src: client8 },
  { name: "Client 9", src: client9 },
  { name: "Client 10", src: client10 },
  { name: "Client 11", src: client11 },
  { name: "Client 12", src: client12 },
];

export default function AboutClients() {
  return (
    <section className="py-12 lg:py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center">
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-slate-400 text-[13px] font-medium tracking-wide mb-16 text-center"
            >
                Trusted by professionals from flourishing idea to breakthrough
            </motion.p>

            <div className="relative w-full max-w-6xl mx-auto px-10">
                {/* Horizontal Marquee */}
                <div className="flex overflow-hidden group">
                    <motion.div 
                        animate={{ x: [0, -1200] }}
                        transition={{ 
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ willChange: "transform" }}
                        className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
                    >
                        {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
                            <div 
                                key={idx}
                                className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                            >
                                <div className="h-12 md:h-16 w-28 md:w-36 relative">
                                    <Image 
                                        src={client.src} 
                                        alt={client.name}
                                        fill
                                        sizes="(max-width: 768px) 112px, 144px"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
}

