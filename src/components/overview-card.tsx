"use client";

import { motion } from "framer-motion";
import AnimatedLucideIcon from "./AnimatedLucideIcon";
import { cn } from "@/lib/utils";

// Types for the components
interface ItemBoxProps {
  icon: string;
  title: string;
  color: string;
  className?: string;
  delay?: number;
}

const ItemBox = ({ icon, title, color, className, delay = 0 }: ItemBoxProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -1, scale: 1.01, boxShadow: "0 8px 20px -5px rgba(0,0,0,0.05)" }}
    className={cn(
      "flex items-center justify-start gap-2 px-3 py-3 rounded-xl border-2 bg-white transition-all duration-300 max-w-[180px] sm:max-w-full lg:max-w-[220px] xl:max-w-[260px] w-full mx-auto",
      className
    )}
    style={{ borderColor: color }}
  >
    <div className="p-2 rounded-md" style={{ color: color, backgroundColor: `${color}10` }}>
      <AnimatedLucideIcon name={icon} size={20} strokeWidth={2.5} />
    </div>
    <span className="font-bold text-slate-800 text-[14px] sm:text-[16px] xl:text-[16px] tracking-tight">{title}</span>
  </motion.div>
);

const GroupIcon = ({ label, icons, colorClass = "text-blue-500" }: { label: string, icons: string[], colorClass?: string }) => (
  <div className="flex flex-col items-start 2xl:items-center gap-2">
    <div className="relative w-20 h-20 rounded-3xl flex items-center justify-center bg-slate-50/50 p-3 overflow-hidden group transition-colors">
      <div className="grid grid-cols-2 gap-2">
        {icons.map((icon, i) => (
          <div key={i} className={cn("transition-colors", colorClass)}>
            <AnimatedLucideIcon name={icon} size={16} />
          </div>
        ))}
      </div>
    </div>
    <span className="text-[10px] 2xl:text-[12px] font-black text-slate-700 uppercase tracking-[0.2em] text-center max-w-[120px]">{label}</span>
  </div>
);

const RightItem = ({ icon, label, colorClass = "text-blue-500" }: { icon: string, label: string, colorClass?: string }) => (
  <div className="flex flex-col items-end lg:items-center gap-2 group cursor-pointer">
    <div className={cn("w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:scale-110 shadow-sm", colorClass)}>
      <AnimatedLucideIcon name={icon} size={24} />
    </div>
    <span className="text-[10px] font-black text-slate-700 uppercase tracking-tight text-center max-w-[80px] group-hover:text-slate-900 transition-colors leading-tight">
      {label}
    </span>
  </div>
);

export default function OverViewCard() {
  return (
    <div className="w-full">
      {/* Desktop Layout: shown on md and up */}
      <div className="hidden md:block relative w-full max-w-[960px] mx-auto rounded-[4rem] overflow-hidden min-h-[640px]">
        {/* Dynamic Connector Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 960 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            transform="translate(222.626, 250) rotate(270) scale(1.6, 1.4) translate(-160, -41.500)"
          > 
            <g stroke="#05a0ec" strokeDasharray="0.1 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" mask="url(#fade_mask)">
              <animate attributeName="stroke-dashoffset" values="0;-6" dur="0.8s" repeatCount="indefinite"></animate>
              <path d="M0 1V0" stroke="transparent" />
              <path d="M124 81V62a16 16 0 00-12.436-15.598l-83.128-18.92A16 16 0 0116 11.884V1" />
              <path d="M136 81V55a20 20 0 00-13.856-19.033L74.85 21.437A16 16 0 0163.765 6.211V1" />
              <path d="M148 81V49a24 24 0 00-13.769-21.71l-13.051-6.15A16 16 0 01112 6.694V1" />
              <path d="M160 80V0" />
              <path d="M172 81V49a24 24 0 0113.769-21.71l13.051-6.15A16 16 0 00208 6.694V1" />
              <path d="M184 81V55a20 20 0 0113.856-19.033l47.206-15.238a16 16 0 0011.085-15.226V1" />
              <path d="M196 81V62a16 16 0 0112.436-15.598l83.128-18.994A16 16 0 00304 11.884V1" />
            </g>
            <defs>
              <linearGradient id="gradient" y2="1" x2="0">
                <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
                <stop offset=".2" stopColor="#fff"></stop>
                <stop offset=".8" stopColor="#fff"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
              </linearGradient>
              <mask id="fade_mask" maskContentUnits="objectBoundingBox">
                <path fill="url(#gradient)" d="M0 0h2v1H0z"></path>
              </mask>
            </defs>
          </motion.g>
          
          <motion.g 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            transform="translate(730, 250) rotate(90) scale(1.6, 1.4) translate(-160, -41.500)"
          > 
            <g stroke="#05a0ec" strokeDasharray="0.1 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" mask="url(#fade_mask_2)">
              <animate attributeName="stroke-dashoffset" values="0;-6" dur="0.8s" repeatCount="indefinite"></animate>
              <path d="M0 1V0" stroke="transparent" />
              <path d="M124 81V62a16 16 0 00-12.436-15.598l-83.128-18.92A16 16 0 0116 11.884V1" />
              <path d="M136 81V55a20 20 0 00-13.856-19.033L74.85 21.437A16 16 0 0163.765 6.211V1" />
              <path d="M148 81V49a24 24 0 00-13.769-21.71l-13.051-6.15A16 16 0 01112 6.694V1" />
              <path d="M160 80V0" />
              <path d="M172 81V49a24 24 0 0113.769-21.71l13.051-6.15A16 16 0 00208 6.694V1" />
              <path d="M184 81V55a20 20 0 0113.856-19.033l47.206-15.238a16 16 0 0011.085-15.226V1" />
              <path d="M196 81V62a16 16 0 0112.436-15.598l83.128-18.994A16 16 0 00304 11.884V1" />
            </g>
            <defs>
              <linearGradient id="gradient_2" y2="1" x2="0">
                <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
                <stop offset=".2" stopColor="#fff"></stop>
                <stop offset=".8" stopColor="#fff"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
              </linearGradient>
              <mask id="fade_mask_2" maskContentUnits="objectBoundingBox">
                <path fill="url(#gradient_2)" d="M0 0h2v1H0z"></path>
              </mask>
            </defs>
          </motion.g>
        </svg>

        <div className="relative z-10 grid grid-cols-[140px_1fr_140px] items-center h-full">
          {/* Left Column: Input Sources - Colorful */}
          <div className="flex flex-col gap-5 items-start">
            <GroupIcon
              label="ERP / CRM"
              colorClass="text-[#09358c]"
              icons={["Building2", "Box", "Users", "Network"]}
            />
            <GroupIcon
              label="Databases"
              colorClass="text-emerald-600"
              icons={["Database", "Server", "HardDrive", "Layers"]}
            />
            <GroupIcon
              label="Excel / CSV"
              colorClass="text-amber-600"
              icons={["FileSpreadsheet", "Table", "LayoutGrid", "FileText"]}
            />
            <GroupIcon
              label="eCommerce / POS"
              colorClass="text-rose-600"
              icons={["ShoppingCart", "Banknote", "Wallet", "PieChart"]}
            />
          </div>

          {/* Center Card */}
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full max-w-[250px] rounded-[3rem] p-1.5"
            >
              <div className="rounded-[3.2rem] flex flex-col items-center justify-center gap-10">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-10 flex items-center justify-center">
                    <img src="/logo.svg" alt="Tapito Logo" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-4 w-[230px]">
                  <ItemBox icon="Network" title="Data Integration" color="#06dcc3" delay={0.1} />
                  <ItemBox icon="Zap" title="Campaign Automation" color="#05a0ec" delay={0.2} />
                  <ItemBox icon="TrendingUp" title="Live Analytics" color="#09358c" delay={0.3} />
                  <ItemBox icon="UserCheck" title="AI Recommendations" color="#05a0ec" delay={0.4} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Outputs - Colorful */}
          <div className="flex flex-col gap-8 items-center">
            <RightItem icon="BarChart3" label="CEO View" colorClass="text-[#09358c]" />
            <RightItem icon="Smartphone" label="Ai Assistance" colorClass="text-emerald-600" />
            <RightItem icon="FileSpreadsheet" label="Exports" colorClass="text-emerald-600" />
            <RightItem icon="PieChart" label="Reports" colorClass="text-[#05a0ec]" />
            <RightItem icon="Bell" label="Alerts" colorClass="text-[#06dcc3]" />
          </div>
        </div>
      </div>

      {/* Mobile Stacked Flow Layout: shown on mobile, hidden on md and up */}
      <div className="md:hidden flex flex-col items-center gap-6 w-full max-w-sm mx-auto py-6">
        {/* Step 1: Inputs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-100">
            <AnimatedLucideIcon name="LogIn" size={12} className="text-slate-400" />
            1. Connect Data Sources
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
            <GroupIcon
              label="ERP / CRM"
              colorClass="text-[#09358c]"
              icons={["Building2", "Box", "Users", "Network"]}
            />
            <GroupIcon
              label="Databases"
              colorClass="text-emerald-600"
              icons={["Database", "Server", "HardDrive", "Layers"]}
            />
            <GroupIcon
              label="Excel / CSV"
              colorClass="text-amber-600"
              icons={["FileSpreadsheet", "Table", "LayoutGrid", "FileText"]}
            />
            <GroupIcon
              label="eCommerce / POS"
              colorClass="text-rose-600"
              icons={["ShoppingCart", "Banknote", "Wallet", "PieChart"]}
            />
          </div>
        </motion.div>

        {/* Connector Line 1 */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-[2px] h-8 bg-gradient-to-b from-[#09358c] to-[#05a0ec]" />
          <AnimatedLucideIcon name="ChevronDown" size={16} className="text-[#05a0ec] animate-bounce" />
        </div>

        {/* Step 2: Core AI Engine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[linear-gradient(135deg,rgba(9,53,140,0.02)_0%,rgba(5,160,236,0.05)_100%)] rounded-[2.5rem] p-6 border-2 border-[#05a0ec]/20 shadow-lg shadow-blue-500/5 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[10px] font-bold uppercase tracking-wider text-[#09358c]">
            <AnimatedLucideIcon name="Cpu" size={12} className="text-[#09358c]" />
            2. Tapito AI Engine
          </div>

          <div className="w-16 h-7 flex items-center justify-center">
            <img src="/logo.svg" alt="Tapito Logo" className="w-full h-full object-contain" />
          </div>

          <div className="flex flex-col gap-3 w-full max-w-[240px]">
            <ItemBox icon="Network" title="Data Integration" color="#06dcc3" delay={0.1} className="max-w-full" />
            <ItemBox icon="Zap" title="Campaign Automation" color="#05a0ec" delay={0.2} className="max-w-full" />
            <ItemBox icon="TrendingUp" title="Live Analytics" color="#09358c" delay={0.3} className="max-w-full" />
            <ItemBox icon="UserCheck" title="AI Recommendations" color="#05a0ec" delay={0.4} className="max-w-full" />
          </div>
        </motion.div>

        {/* Connector Line 2 */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-[2px] h-8 bg-gradient-to-b from-[#05a0ec] to-[#06dcc3]" />
          <AnimatedLucideIcon name="ChevronDown" size={16} className="text-[#06dcc3] animate-bounce" />
        </div>

        {/* Step 3: Outputs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-100">
            <AnimatedLucideIcon name="LogOut" size={12} className="text-slate-400" />
            3. Actionable Insights
          </div>

          <div className="grid grid-cols-3 gap-y-6 gap-x-2 w-full justify-items-center">
            <RightItem icon="BarChart3" label="CEO View" colorClass="text-[#09358c]" />
            <RightItem icon="Smartphone" label="AI Assistant" colorClass="text-emerald-600" />
            <RightItem icon="FileSpreadsheet" label="Exports" colorClass="text-emerald-600" />
            <div className="col-span-3 flex justify-center gap-8 w-full mt-2">
              <RightItem icon="PieChart" label="Reports" colorClass="text-[#05a0ec]" />
              <RightItem icon="Bell" label="Alerts" colorClass="text-[#06dcc3]" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
