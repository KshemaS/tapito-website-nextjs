"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "../Container";

type CardProps = {
  data?: {
    title: string;
    desc: string;
    icon: any;
  }[];
};

const StrategicAdvantage: React.FC<CardProps> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const columns = 3;

  return (
    <Container>
      {/* Desktop view */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 border-[#09358c] py-[120px]">
        {data?.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isFirstRow = index < columns;
          const isLastRow = index >= (data?.length || 0) - columns;
          const isFirstCol = index % columns === 0;
          const isLastCol = (index + 1) % columns === 0;
          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                backgroundColor: isHovered ? "#09358c" : "#fff",
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              className={`
                relative px-[40px] pt-[60px] pb-[60px] h-[492px] overflow-hidden cursor-pointer
                border-[#09358c]
                  ${isLastRow ? "" : "border-b"}
                  ${isLastCol ? "" : "border-r"}
                  ${isFirstRow ? "border-t-0" : ""}
                  ${isFirstCol ? "border-l-0" : ""}
              `}
            >
            <motion.div
              animate={{
                borderColor: isHovered ? "#fff" : "#09358c",
                marginLeft: isHovered ? (isFirstCol ? "40px" : "0px") : "0px",
              }}
                className={`w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white absolute top-[40px] ${isFirstCol ? 'left-1' : 'left-[40px]'} shrink-0`}
            >
                <item.icon
                  size={40}
                  className="text-[#09358c]"
                />
            </motion.div>
            <motion.h3
                className={`${
                  isFirstCol ? "left-1" : "left-[40px]"
                } absolute right-[40px] md:text-[24px] lg:text-[26px] 2xl:text-[30px] 3xl:text-[36px] 4xl:text-[40px] font-medium font-outfit leading-[110%] z-10`}
                animate={{
                  y: isHovered ? 80 : 300,
                  color: isHovered ? "#fff" : "#09358c",
                  paddingLeft: isHovered ? (isFirstCol ? "40px" : "0px") : "0px",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className={`${
                  isFirstCol ? "left-1" : "left-[40px]"
                } absolute right-[40px] text-[16px] xl:text-[18px] 2xl:text-[20px] font-outfit leading-[160%] text-white z-0`}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 180 : 300,
                  paddingLeft: isHovered ? (isFirstCol ? "40px" : "0px") : "0px",
                }}
                transition={{
                  duration: 0.6,
                  delay: isHovered ? 0.4 : 0,
                  ease: "easeOut",
                }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile view */}
      <div className="block sm:hidden py-[60px] space-y-6">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="relative px-[30px] pt-[120px] pb-[40px] bg-[#09358c] text-white rounded-[2rem] overflow-hidden shadow-lg border border-[#09358c]/20"
            >
              <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white absolute top-[40px] left-[30px] shrink-0 border border-white">
                <item.icon
                  size={36}
                  className="text-[#09358c]"
                />
              </div>
              <h3 className="text-[22px] font-medium font-outfit leading-[110%] mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-[15px] font-outfit leading-[160%] text-blue-100/90">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default StrategicAdvantage;
