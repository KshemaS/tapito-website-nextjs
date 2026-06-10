import React from "react";

type MobileStrategicAdvantageProps = {
  data?: {
    title: string;
    desc: string;
    icon: any;
  }[];
};

const MobileStrategicAdvantage: React.FC<MobileStrategicAdvantageProps> = ({ data }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-x-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-4 text-left px-[16px] border-[#EBE4E4]"
          >
            <div className="border-l border-r border-[#EBE4E4] py-[20px] px-[16px]">
              <div className="w-[10px] h-[10px] bg-[#1E1B1A] rounded-full mt-2"></div>
              <div className="my-[50px]">
                <h3 className="text-[18px] font-medium text-[#1E1B1A] font-outfit mb-[20px]">
                  {item.title}
                </h3>
                <p className="mt-[20px] text-[#909090] text-[16px] leading-[144%] font-outfit">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileStrategicAdvantage;
