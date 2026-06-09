"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Users, BookOpen, Mail, Shield, ArrowRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "@/components/features/FeaturesGrid";
import { solutionsData } from "@/components/solutions/SolutionsGrid";
import AnimatedLucideIcon from "@/components/AnimatedLucideIcon";
import BusinessIntelligence from "@/public/assets/images/features/Business Intelligence Dashboard.png";
import AIsmartanaliticsengine from "@/public/assets/images/features/AI Smart Analytics Engine.png";
import campaignautomation from "@/public/assets/images/features/Campaign Automation.png";
import revanuegrowth from "@/public/assets/images/features/Revenue Growth Insights.png";
import voicepowered from "@/public/assets/images/features/Voice-Powered AI Command Center.png";
import smartscheme from "@/public/assets/images/features/Smart Scheme Generator.png";

const companyLinks = [
  {
    label: "About Us",
    href: "/about",
    icon: Users,
    description: "Our story, mission, and the team behind Tapito's retail intelligence platform.",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    icon: BookOpen,
    description: "Real-world results from retailers who transformed their operations with Tapito.",
  }
];

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Plans", href: "/plans" },
  { label: "Partners", href: "/partners" },
  { label: "Company", href: "#" },
  { label: "Contact", href: "/contact" },
];

const FeatureSlider = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { src: voicepowered.src, title: "Voice-Powered AI Command Center" },
    { src: smartscheme.src, title: "Smart Scheme Generator" },
    { src: BusinessIntelligence.src, title: "Business Intelligence Dashboard" },
    { src: AIsmartanaliticsengine.src, title: "AI Smart Analytics Engine" },
    { src: campaignautomation.src, title: "Campaign Automation" },
    { src: revanuegrowth.src, title: "Revenue Growth Insights" },

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-8 h-[240px] flex items-center justify-center overflow-hidden rounded-3xl bg-white/50 border border-white/20">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center"
        >
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full scale-110" />
          <img src={slides[index].src} alt={slides[index].title} className="w-60 h-auto drop-shadow-2xl mb-4" />
          <span className="text-sm font-semibold font-black text-slate-900/40 uppercase tracking-normal">{slides[index].title}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const SolutionSlider = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { src: "/assets/images/home/retail.png", title: "Smart Retail" },
    { src: "/assets/images/home/supermarket.png", title: "Supermarket AI" },
    { src: "/assets/images/home/fashion.png", title: "Fashion Tech" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-8 h-[240px] flex items-center justify-center overflow-hidden rounded-3xl bg-white/50 border border-white/20">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full scale-110" />
          <img src={slides[index].src} alt={slides[index].title} className="w-full h-auto drop-shadow-2xl mb-4" />
          <span className="text-sm font-black text-slate-900/40 uppercase tracking-[0.2em]">{slides[index].title}</span>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <div key={i} className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", i === index ? "bg-[#09358c] w-4" : "bg-slate-200")} />
        ))}
      </div>
    </div>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  // Clean Idle Hide Logic
  useEffect(() => {
    if (!isVisible || window.scrollY <= 150 || activeMenu || isHeaderHovered) {
      return;
    }
    const timer = setTimeout(() => {
      setIsVisible(false);
      setActiveMenu(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, [isVisible, lastScrollY, activeMenu, isHeaderHovered]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else {
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
          if (!isHeaderHovered) {
            setIsVisible(false);
            setActiveMenu(null);
          }
        }
      }
      setLastScrollY(currentScrollY);
    };
    const frameId = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, [lastScrollY, isHeaderHovered]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileFeaturesOpen(false);
    setMobileSolutionsOpen(false);
    setMobileCompanyOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? "hidden" : "";
  };

  // Check if any company sub-link is active
  const isCompanyActive = companyLinks.some((l) => pathname.startsWith(l.href));

  const isHomePage = pathname === "/";

  return (
    <>
      <header
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out w-full",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div
          className={cn(
            "w-full transition-all duration-500 ease-in-out py-3 lg:py-4 2xl:py-6",
            isScrolled || activeMenu || isHeaderHovered || !isHomePage
              ? "bg-white shadow-md border-b border-slate-100"
              : "bg-transparent"
          )}
        >
          <div className="max-w-360 mx-auto px-6 md:px-10 flex items-center justify-between">
            {/* Logo */}
            <Link onClick={closeMenu} href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-28 h-10 lg:w-36 lg:h-12 flex items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="Tapito Logo"
                  className={cn(
                    "w-full h-full object-contain transition-all duration-500",
                  )}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8 xl:gap-12">
                {navLinks?.map((item) => {
                  const isActive =
                    item.label === "Company"
                      ? isCompanyActive
                      : pathname.startsWith(item.href);
                  const hasDropdown =
                    item.label === "Features" ||
                    item.label === "Solutions" ||
                    item.label === "Company";

                  return (
                    <li
                      key={item.label}
                      onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      className="relative py-2"
                    >
                      <Link
                        href={item.href}
                        onClick={item.label === "Company" ? (e) => e.preventDefault() : closeMenu}
                        className={cn(
                          "text-[14px] lg:text-[18px] font-semibold transition-colors flex items-center gap-1.5",
                          isActive || activeMenu === item.label
                            ? "text-[#09358c]"
                            : isScrolled || activeMenu || !isHomePage
                            ? "text-slate-900 hover:text-[#09358c]"
                            : "text-white/80 hover:text-[#09358c]"
                        )}
                      >
                        {item.label}
                        {hasDropdown && (
                          <motion.span
                            animate={{ rotate: activeMenu === item.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={14} />
                          </motion.span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex justify-end gap-4 items-center">
              <div className="hidden lg:flex items-center gap-4">
                {/* <button className="border-2 border-[#09358c] text-[#09358c] py-2.5 px-7 text-[12px] uppercase tracking-widest font-black rounded-full hover:shadow-lg hover:text-white hover:bg-[#09358c] transition-all duration-300">
                  Login
                </button> */}
              </div>
              {/* CTA's */}
              <div className="hidden lg:flex items-center gap-4">
                <Link href="/contact" className="bg-[#09358c] text-white py-3 px-7 text-[12px] uppercase tracking-widest font-black rounded-full hover:shadow-lg hover:bg-[#09358c] transition-all duration-300">
                  Book Demo
                </Link>
              </div>
            </div>
            {/* Mobile Toggle */}
            <button
              className="lg:hidden w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95"
              onClick={toggleMobileMenu}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Mega Menus */}
        <AnimatePresence>
          {activeMenu === "Features" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter("Features")}
              onMouseLeave={handleMouseLeave}
              className="absolute left-1/2 -translate-x-1/2 top-full w-[calc(100vw-120px)] max-w-[1400px] bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-slate-200/60 shadow-[0_40px_100px_-20px_rgba(9,53,140,0.12)] pointer-events-auto overflow-hidden mt-2"
            >
              <div className="flex">
                {/* Left: Featured Image/CTA */}
                <div className="w-[380px] bg-slate-50 p-12 border-r border-slate-100 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-[#09358c] text-[10px] font-black uppercase tracking-widest mb-6">Latest Update</span>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight">AI Voice <br />Command Center</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">Manage your entire retail operation using simple natural language voice commands.</p>
                    <Link href="/features/mobile-app" onClick={closeMenu} className="inline-flex items-center gap-2 text-[#09358c] font-black text-xs uppercase tracking-widest group/btn">
                      Explore Module <ChevronDown className="-rotate-90 group-hover:translate-x-1 transition-transform" size={14} />
                    </Link>
                  </div>
                  <FeatureSlider />
                </div>

                {/* Right: Grid of Features */}
                <div className="flex-1 p-12">
                  <div className="grid grid-cols-3 gap-x-10 gap-y-12">
                    {features.slice(0, 6).map((feature) => (
                      <Link
                        key={feature.slug}
                        href={`/features/${feature.slug}`}
                        onClick={closeMenu}
                        className="group flex gap-5"
                      >
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#09358c] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#09358c]/20 transition-all duration-300">
                        <AnimatedLucideIcon icon={feature.icon} size={24} />
                        </div>
                        <div>
                          <h4 className="text-[17px] font-extrabold text-slate-900 mb-1.5 group-hover:text-[#09358c] transition-colors">{feature.title}</h4>
                          <motion.div
                            initial={{ height: "40px" }}
                            whileHover={{ height: "auto" }}
                            className="overflow-hidden"
                          >
                            <p className="text-[13px] text-slate-500 leading-relaxed font-medium group-hover:line-clamp-none line-clamp-2">
                              {feature.description}
                            </p>
                          </motion.div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-16 pt-10 border-t border-slate-100 flex items-center justify-between">
                     <div className="flex items-center gap-6">
                        <div className="flex -space-x-3">
                           {[1,2,3,4].map(i => (
                             <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                               <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" />
                             </div>
                           ))}
                        </div>
                        <p className="text-xs font-bold text-slate-400">Join <span className="text-slate-900">2,500+</span> retailers scaling with AI.</p>
                     </div>
                     <Link href="/features" onClick={closeMenu} className="px-8 py-3 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-[#09358c] transition-colors shadow-xl shadow-slate-900/10">
                        View All Capabilities
                     </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeMenu === "Solutions" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter("Solutions")}
              onMouseLeave={handleMouseLeave}
              className="absolute left-1/2 -translate-x-1/2 top-full w-[calc(100vw-120px)] max-w-[1400px] bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-slate-200/60 shadow-[0_40px_100px_-20px_rgba(9,53,140,0.12)] pointer-events-auto overflow-hidden mt-2"
            >
              <div className="flex">
                {/* Left: Featured Image/CTA */}
                <div className="w-[380px] bg-slate-50 p-12 border-r border-slate-100 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-[#09358c] text-[10px] font-black uppercase tracking-widest mb-6">Industry Focus</span>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight">Retail Innovation <br />Framework</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">Tailored AI solutions designed specifically for the unique challenges of modern physical retail.</p>
                    <Link href="/solutions" onClick={closeMenu} className="inline-flex items-center gap-2 text-[#09358c] font-black text-xs uppercase tracking-widest group/btn">
                      Explore All Verticals <ChevronDown className="-rotate-90 group-hover:translate-x-1 transition-transform" size={14} />
                    </Link>
                  </div>
                  <SolutionSlider />
                </div>

                {/* Right: Grid of Solutions */}
                <div className="flex-1 p-12">
                  <div className="grid grid-cols-3 gap-x-10 gap-y-12">
                    {solutionsData.slice(0, 9).map((solution) => (
                      <Link
                        key={solution.slug}
                        href={`/solutions/${solution.slug}`}
                        onClick={closeMenu}
                        className="group flex gap-5"
                      >
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#09358c] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#09358c]/20 transition-all duration-300">
                        <AnimatedLucideIcon icon={solution.icon} size={24} />
                        </div>
                        <div>
                          <h4 className="text-[17px] font-extrabold text-slate-900 mb-1.5 group-hover:text-[#09358c] transition-colors">{solution.title}</h4>
                          <motion.div
                            initial={{ height: "40px" }}
                            whileHover={{ height: "auto" }}
                            className="overflow-hidden"
                          >
                            <p className="text-[13px] text-slate-500 leading-relaxed font-medium group-hover:line-clamp-none line-clamp-2">
                              {solution.desc}
                            </p>
                          </motion.div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-16 pt-10 border-t border-slate-100 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#09358c]/5 flex items-center justify-center text-[#09358c]">
                           <Shield size={20} />
                        </div>
                        <p className="text-xs font-bold text-slate-400">Enterprise-grade security and <span className="text-slate-900">GDPR compliance</span> for all retail data.</p>
                     </div>
                     <Link href="/contact" onClick={closeMenu} className="px-8 py-3 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-[#09358c] transition-colors shadow-xl shadow-slate-900/10">
                        Request Customized Solution
                     </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeMenu === "Company" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter("Company")}
              onMouseLeave={handleMouseLeave}
              className="absolute left-1/2 -translate-x-1/2 top-full w-[calc(100vw-120px)] max-w-[1200px] bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-slate-200/60 shadow-[0_40px_100px_-20px_rgba(9,53,140,0.12)] pointer-events-auto overflow-hidden mt-2"
            >
              <div className="flex">
                {/* Left: About Banner */}
                <div className="w-[350px] bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full -mr-10 -mt-10" />
                  <div className="relative z-10">
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6 block">Our Mission</span>
                    <h3 className="text-2xl font-black mb-4">Empowering <br />Retail Growth</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium mb-8">We build the intelligence layer that powers the next generation of physical retail stores.</p>
                  </div>
                  <div className="relative z-10 pt-8 border-t border-white/10">
                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Global HQ</p>
                     <div className="flex items-center gap-3">
                        <Globe size={16} className="text-blue-400" />
                        <span className="text-xs font-bold">Kochi • Dubai • London</span>
                     </div>
                  </div>
                </div>

                {/* Right: Company Links */}
                <div className="flex-1 p-10">
                  <div className="grid grid-cols-2 gap-6">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className="group flex gap-5 p-6 rounded-3xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-100"
                      >
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-50 text-slate-600 group-hover:bg-[#09358c] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                          <link.icon size={26} />
                        </div>
                        <div>
                          <h4 className="text-lg font-extrabold text-slate-900 mb-1 group-hover:text-[#09358c] transition-colors">{link.label}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed font-medium">{link.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[201] w-full max-w-100 bg-white lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-8 border-b border-slate-50">
                <img src="/logo.svg" alt="Logo" className="h-8" />
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 active:scale-90 transition-transform"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((item, idx) => {
                    const hasDropdown =
                      item.label === "Features" ||
                      item.label === "Solutions" ||
                      item.label === "Company";
                    const isExpanded =
                      item.label === "Features"
                        ? mobileFeaturesOpen
                        : item.label === "Solutions"
                          ? mobileSolutionsOpen
                          : item.label === "Company"
                            ? mobileCompanyOpen
                            : false;

                    return (
                      <div key={item.label} className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.label === "Company" ? "#" : item.href}
                            onClick={
                              item.label === "Company"
                                ? (e) => { e.preventDefault(); setMobileCompanyOpen(!mobileCompanyOpen); }
                                : closeMenu
                            }
                            className="text-[22px] font-black text-slate-900 hover:text-[#09358c] transition-colors flex items-center gap-4"
                          >
                            <span className="text-xs font-bold text-slate-400 tabular-nums">0{idx + 1}</span>
                            {item.label}
                          </Link>
                          {hasDropdown && (
                            <button
                              onClick={() => {
                                if (item.label === "Features") setMobileFeaturesOpen(!mobileFeaturesOpen);
                                if (item.label === "Solutions") setMobileSolutionsOpen(!mobileSolutionsOpen);
                                if (item.label === "Company") setMobileCompanyOpen(!mobileCompanyOpen);
                              }}
                              className="p-2"
                            >
                              <ChevronDown
                                size={22}
                                className={cn("transition-transform duration-300", isExpanded && "rotate-180 text-[#09358c]")}
                              />
                            </button>
                          )}
                        </div>

                        <AnimatePresence>
                          {item.label === "Features" && mobileFeaturesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-6 pl-8 grid grid-cols-1 gap-3 overflow-hidden"
                            >
                              {features.map((f) => (
                                <Link key={f.slug} href={`/features/${f.slug}`} onClick={closeMenu} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-slate-100 transition-colors">
                                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#09358c] shadow-sm">
                                    <f.icon size={14} color="#09358c" />
                                  </div>
                                  <span className="text-[14px] font-bold text-slate-700">{f.title}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                          {item.label === "Solutions" && mobileSolutionsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-6 pl-8 grid grid-cols-1 gap-3 overflow-hidden"
                            >
                              {solutionsData.map((s) => (
                                <Link key={s.slug} href={`/solutions/${s.slug}`} onClick={closeMenu} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-slate-100 transition-colors">
                                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-sm", s.color)}>
                                    <s.icon size={14} color="#09358c"/>
                                  </div>
                                  <span className="text-[14px] font-bold text-slate-700">{s.title}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                          {item.label === "Company" && mobileCompanyOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-6 pl-8 flex flex-col gap-3 overflow-hidden"
                            >
                              {companyLinks.map((l) => (
                                <Link key={l.href} href={l.href} onClick={closeMenu} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-slate-100 transition-colors">
                                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-400 shadow-sm">
                                    <l.icon size={14} />
                                  </div>
                                  <span className="text-[14px] font-bold text-slate-700">{l.label}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </nav>
              </div>

              <div className="p-8 border-t border-slate-50 bg-slate-50/50">
                <Link href="/contact" onClick={closeMenu} className="w-full bg-[#09358c] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[13px] shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-3">
                  Book Demo <ArrowRight size={16} />
                </Link>
                <div className="mt-8 flex gap-6 grayscale opacity-50">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Follow us</span>
                  <div className="h-px flex-1 bg-slate-200 self-center" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
