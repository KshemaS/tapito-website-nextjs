"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Building2,
  FileSpreadsheet,
  ClipboardList,
  ShoppingCart,
  BarChart3,
  Settings,
  FileText,
  CheckCircle,
  Table,
  LayoutGrid,
  Banknote,
  Wallet,
  Box,
  Network,
  TrendingUp,
  Zap,
  PieChart,
  UserCheck,
  Bell
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types for the components
interface ItemBoxProps {
  icon: React.ReactNode;
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
      "flex items-center gap-2 px-4 py-3 rounded-xl border-2 bg-white transition-all duration-300 w-[260px] mx-auto justify-center",
      className
    )}
    style={{ borderColor: color }}
  >
    <div className="p-2 rounded-xl" style={{ color: color, backgroundColor: `${color}10` }}>
      {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 28, strokeWidth: 2.5 }) : icon}
    </div>
    <span className="font-bold text-slate-800 text-xl tracking-tight">{title}</span>
  </motion.div>
);

const GroupIcon = ({ label, icons, colorClass = "text-blue-500" }: { label: string, icons: React.ReactNode[], colorClass?: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="relative w-20 h-20 rounded-3xl flex items-center justify-center bg-slate-50/50 p-3 overflow-hidden group transition-colors">
      <div className="grid grid-cols-2 gap-2">
        {icons.map((icon, i) => (
          <div key={i} className={cn("transition-colors", colorClass)}>
            {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 16 }) : icon}
          </div>
        ))}
      </div>
    </div>
    <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const RightItem = ({ icon: Icon, label, colorClass = "text-blue-500" }: { icon: any, label: string, colorClass?: string }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className={cn("w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:scale-110 shadow-sm", colorClass)}>
      <Icon size={24} />
    </div>
    <span className="text-[10px] font-black text-slate-700 uppercase tracking-tight text-center max-w-[80px] group-hover:text-slate-900 transition-colors leading-tight">
      {label}
    </span>
  </div>
);

export default function OverViewCard() {
  return (
    <div className="relative w-full max-w-[960px] mx-auto bg-white rounded-[4rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden min-h-[640px]">
      {/* Dynamic Connector Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 960 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(222.626, 260) rotate(270) scale(1.6, 1.4) translate(-160, -41.500)"> 
          <g stroke="#166df8" strokeDasharray="0.1 5" strokeDashoffset="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" mask="url(#fade_mask)">
            <animate attributeName="stroke-dashoffset" values="0;5000" dur="300s" calcMode="linear" repeatCount="indefinite"></animate>
            <path stroke="transparent" d="M0 1V0"></path>
            <path d="M124 81V62a16 16 0 00-12.436-15.598l-83.128-18.92A16 16 0 0116 11.884V1"></path>
            <path d="M136 81V55a20 20 0 00-13.856-19.033L74.85 21.437A16 16 0 0163.765 6.211V1"></path>
            <path d="M148 81V49a24 24 0 00-13.769-21.71l-13.051-6.15A16 16 0 01112 6.694V1"></path>
            <path d="M160 80V0"></path>
            <path d="M172 81V49a24 24 0 0113.769-21.71l13.051-6.15A16 16 0 00208 6.694V1"></path>
            <path d="M184 81V55a20 20 0 0113.856-19.033l47.206-15.238a16 16 0 0011.085-15.226V1"></path>
            <path d="M196 81V62a16 16 0 0112.436-15.598l83.128-18.994A16 16 0 00304 11.884V1"></path>
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
        </g>
        
        <g transform="translate(760, 260) rotate(90) scale(1.6, 1.4) translate(-160, -41.500)"> 
          <g stroke="#166df8" strokeDasharray="0.1 5" strokeDashoffset="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" mask="url(#fade_mask_2)">
            <animate attributeName="stroke-dashoffset" values="0;5000" dur="300s" calcMode="linear" repeatCount="indefinite"></animate>
            <path stroke="transparent" d="M0 1V0"></path>
            <path d="M124 81V62a16 16 0 00-12.436-15.598l-83.128-18.92A16 16 0 0116 11.884V1"></path>
            <path d="M136 81V55a20 20 0 00-13.856-19.033L74.85 21.437A16 16 0 0163.765 6.211V1"></path>
            <path d="M148 81V49a24 24 0 00-13.769-21.71l-13.051-6.15A16 16 0 01112 6.694V1"></path>
            <path d="M160 80V0"></path>
            <path d="M172 81V49a24 24 0 0113.769-21.71l13.051-6.15A16 16 0 00208 6.694V1"></path>
            <path d="M184 81V55a20 20 0 0113.856-19.033l47.206-15.238a16 16 0 0011.085-15.226V1"></path>
            <path d="M196 81V62a16 16 0 0112.436-15.598l83.128-18.994A16 16 0 00304 11.884V1"></path>
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
        </g>
      </svg>

      <div className="relative z-10 grid grid-cols-[140px_1fr_140px] items-center h-full">

        {/* Left Column: Input Sources - Colorful */}
        <div className="flex flex-col gap-5">
          <GroupIcon
            label="ERP / CRM"
            colorClass="text-indigo-600"
            icons={[<Building2 key="1" />, <Box key="2" />, <Database key="3" />, <Network key="4" />]}
          />
          <GroupIcon
            label="Process / SOP"
            colorClass="text-emerald-600"
            icons={[<ClipboardList key="1" />, <Settings key="2" />, <FileText key="3" />, <CheckCircle key="4" />]}
          />
          <GroupIcon
            label="Excel / CSV"
            colorClass="text-amber-600"
            icons={[<FileSpreadsheet key="1" />, <Table key="2" />, <LayoutGrid key="3" />, <FileText key="4" />]}
          />
          <GroupIcon
            label="Sales / POS"
            colorClass="text-rose-600"
            icons={[<ShoppingCart key="1" />, <Banknote key="2" />, <Wallet key="3" />, <PieChart key="4" />]}
          />
        </div>

        {/* Center Card */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-[250px] border-2 border-slate-100 rounded-[3rem] p-1.5"
          >
            <div className="bg-white rounded-[3.2rem] flex flex-col items-center justify-center gap-10">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/20">T</div>
                <span className="text-3xl font-black tracking-tight text-slate-900 uppercase">tapito</span>
              </div>

              <div className="w-full flex flex-col gap-4 w-[230px]">
                <ItemBox icon={<Network />} title="Data Integration" color="#22c55e" delay={0.1} />
                <ItemBox icon={<Zap />} title="Campaign Automation" color="#06b6d4" delay={0.2} />
                <ItemBox icon={<TrendingUp />} title="Live Analytics" color="#3b82f6" delay={0.3} />
                <ItemBox icon={<UserCheck />} title="Decision Support" color="#a855f7" delay={0.4} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Key Outputs - Colorful */}
        <div className="flex flex-col gap-12 items-center">
          <RightItem icon={BarChart3} label="CEO View" colorClass="text-blue-600" />
          <RightItem icon={PieChart} label="Reports" colorClass="text-purple-600" />
          <RightItem icon={Bell} label="Alerts" colorClass="text-rose-600" />
          <RightItem icon={FileSpreadsheet} label="Exports" colorClass="text-emerald-600" />
        </div>

      </div>
    </div>
  );
}