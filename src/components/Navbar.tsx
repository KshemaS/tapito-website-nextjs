"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Users, BookOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "@/components/features/FeaturesGrid";
import { solutionsData } from "@/components/solutions/SolutionsGrid";
import AnimatedLucideIcon from "@/components/AnimatedLucideIcon";

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
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
    description: "Get in touch with our sales and support team for tailored solutions.",
  },
];

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Plans", href: "/pricing" },
  { label: "Partners", href: "/partners" },
  { label: "Company", href: "#" },
  { label: "Contact", href: "/contact" },
];

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

  return (
    <>
      <header
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
        className={cn(
          "fixed top-0 left-0 right-0 z-100 transition-all duration-500 ease-in-out w-full",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div
          className={cn(
            "w-full transition-all duration-500 ease-in-out py-3 lg:py-4 2xl:py-6",
            isScrolled
              ? "bg-white/80 backdrop-blur-xl shadow-md"
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
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8 xl:gap-12">
                {navLinks.map((item) => {
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
                            : "text-slate-600 hover:text-[#09358c]"
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
                  Request Demo
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onMouseEnter={() => handleMouseEnter("Features")}
              onMouseLeave={handleMouseLeave}
              className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] pointer-events-auto"
            >
              <div className="max-w-[1500px] mx-auto p-10">
                <div className="grid grid-cols-3 gap-8 items-start">
                  {features.map((feature) => {
                    const isActive = pathname === `/features/${feature.slug}`;
                    return (
                      <Link
                        key={feature.slug}
                        href={`/features/${feature.slug}`}
                        onClick={closeMenu}
                        className={cn(
                          "group relative rounded-3xl transition-all duration-300 border shadow-sm overflow-hidden",
                          isActive
                            ? "bg-[#09358c]/5 border-[#09358c]/20 shadow-inner"
                            : "bg-white border-slate-100/60 hover:bg-white hover:border-[#09358c]/10 hover:shadow-[0_20px_40px_rgba(9,53,140,0.08)] hover:-translate-y-1"
                        )}
                      >
                        <motion.div
                          initial="initial"
                          whileHover="hover"
                          className="flex gap-5 w-full p-6 relative z-10"
                        >
                          <div className={cn(
                            "shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm relative overflow-hidden",
                            isActive 
                              ? "bg-[#09358c] text-white shadow-[#09358c]/20 shadow-lg" 
                              : "bg-slate-50 text-slate-600 group-hover:bg-[#09358c] group-hover:text-white group-hover:shadow-[#09358c]/30 group-hover:shadow-xl group-hover:scale-110"
                          )}>
                            <AnimatedLucideIcon icon={feature.icon} size={26} className="relative z-10 transition-transform duration-500 group-hover:rotate-6" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={cn(
                              "text-lg font-extrabold transition-colors mb-1.5",
                              isActive ? "text-[#09358c]" : "text-slate-900 group-hover:text-[#09358c]"
                            )}>{feature.title}</h4>
                            <motion.div
                              variants={{
                                initial: { height: 22 },
                                hover: { height: "auto" }
                              }}
                              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                              className="relative overflow-hidden"
                            >
                              <p className="text-[14px] text-slate-500 font-medium leading-relaxed line-clamp-1 group-hover:line-clamp-none group-hover:text-slate-600">
                                {feature.description}
                              </p>
                            </motion.div>
                          </div>
                        </motion.div>
                        {/* Subtle background glow on hover */}
                        {!isActive && (
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#09358c]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {activeMenu === "Solutions" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onMouseEnter={() => handleMouseEnter("Solutions")}
              onMouseLeave={handleMouseLeave}
              className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] pointer-events-auto"
            >
              <div className="max-w-[1500px] mx-auto p-10">
                <div className="grid grid-cols-3 gap-8 items-start">
                  {solutionsData.map((solution) => {
                    const isActive = pathname === `/solutions/${solution.slug}`;
                    return (
                      <Link
                        key={solution.slug}
                        href={`/solutions/${solution.slug}`}
                        onClick={closeMenu}
                        className={cn(
                          "group relative rounded-3xl transition-all duration-300 border shadow-sm overflow-hidden",
                          isActive
                            ? "bg-[#09358c]/5 border-[#09358c]/20 shadow-inner"
                            : "bg-white border-slate-100/60 hover:bg-white hover:border-[#09358c]/10 hover:shadow-[0_20px_40px_rgba(9,53,140,0.08)] hover:-translate-y-1"
                        )}
                      >
                        <motion.div
                          initial="initial"
                          whileHover="hover"
                          className="flex gap-5 w-full p-6 relative z-10"
                        >
                          <div className={cn(
                            "shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm relative overflow-hidden",
                            isActive 
                              ? "bg-[#09358c] text-white shadow-[#09358c]/20 shadow-lg" 
                              : "bg-slate-50 text-slate-600 group-hover:bg-[#09358c] group-hover:text-white group-hover:shadow-[#09358c]/30 group-hover:shadow-xl group-hover:scale-110"
                          )}>
                             <AnimatedLucideIcon icon={solution.icon} size={26} className="relative z-10 transition-transform duration-500 group-hover:rotate-6" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={cn(
                              "text-lg font-extrabold transition-colors mb-1.5",
                              isActive ? "text-[#09358c]" : "text-slate-900 group-hover:text-[#09358c]"
                            )}>{solution.title}</h4>
                            <motion.div
                              variants={{
                                initial: { height: 22 },
                                hover: { height: "auto" }
                              }}
                              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                              className="relative overflow-hidden"
                            >
                              <p className="text-[14px] text-slate-500 font-medium leading-relaxed line-clamp-1 group-hover:line-clamp-none group-hover:text-slate-600">
                                {solution.desc}
                              </p>
                            </motion.div>
                          </div>
                        </motion.div>
                        {!isActive && (
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#09358c]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {activeMenu === "Company" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onMouseEnter={() => handleMouseEnter("Company")}
              onMouseLeave={handleMouseLeave}
              className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] pointer-events-auto"
            >
              <div className="max-w-7xl mx-auto px-10 py-8">
                <div className="grid grid-cols-3 gap-6 items-start">
                  {companyLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className={cn(
                          "group relative rounded-3xl transition-all duration-300 border shadow-sm overflow-hidden",
                          isActive
                            ? "bg-[#09358c]/5 border-[#09358c]/20 shadow-inner"
                            : "bg-white border-slate-100/60 hover:bg-white hover:border-[#09358c]/10 hover:shadow-[0_20px_40px_rgba(9,53,140,0.08)] hover:-translate-y-1"
                        )}
                      >
                        <motion.div
                          initial="initial"
                          whileHover="hover"
                          className="flex gap-5 w-full p-6 relative z-10"
                        >
                          <div className={cn(
                            "shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm relative overflow-hidden",
                            isActive 
                              ? "bg-[#09358c] text-white shadow-[#09358c]/20 shadow-lg" 
                              : "bg-slate-50 text-slate-600 group-hover:bg-[#09358c] group-hover:text-white group-hover:shadow-[#09358c]/30 group-hover:shadow-xl group-hover:scale-110"
                          )}>
                            <AnimatedLucideIcon icon={link.icon} size={26} className="relative z-10 transition-transform duration-500 group-hover:rotate-6" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={cn(
                              "text-lg font-extrabold transition-colors mb-1.5",
                              isActive ? "text-[#09358c]" : "text-slate-900 group-hover:text-[#09358c]"
                            )}>{link.label}</h4>
                            <motion.div
                              variants={{
                                initial: { height: 22 },
                                hover: { height: "auto" }
                              }}
                              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                              className="relative overflow-hidden"
                            >
                              <p className="text-[14px] text-slate-500 font-medium leading-relaxed line-clamp-1 group-hover:line-clamp-none group-hover:text-slate-600">
                                {link.description}
                              </p>
                            </motion.div>
                          </div>
                        </motion.div>
                        {!isActive && (
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#09358c]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        )}
                      </Link>
                    );
                  })}
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
              className="fixed inset-0 z-200 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-201 w-full max-w-100 bg-white lg:hidden shadow-2xl flex flex-col"
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
                                className={cn("transition-transform", isExpanded && "rotate-180")}
                              />
                            </button>
                          )}
                        </div>

                        {/* Nested items for mobile */}
                        <AnimatePresence>
                          {item.label === "Features" && mobileFeaturesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-6 pl-8 flex flex-col gap-4 overflow-hidden"
                            >
                              {features.map((f) => (
                                <Link key={f.slug} href={`/features/${f.slug}`} onClick={closeMenu} className="text-[16px] font-bold text-slate-600 hover:text-[#09358c]">
                                  {f.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                          {item.label === "Solutions" && mobileSolutionsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-6 pl-8 flex flex-col gap-4 overflow-hidden"
                            >
                              {solutionsData.map((s) => (
                                <Link key={s.slug} href={`/solutions/${s.slug}`} onClick={closeMenu} className="text-[16px] font-bold text-slate-600 hover:text-[#09358c]">
                                  {s.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                          {item.label === "Company" && mobileCompanyOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-6 pl-8 flex flex-col gap-4 overflow-hidden"
                            >
                              {companyLinks.map((l) => (
                                <Link key={l.href} href={l.href} onClick={closeMenu} className="text-lg font-bold text-slate-600 hover:text-[#09358c]">
                                  {l.label}
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
                <Link href="/contact" className="w-full bg-[#09358c] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[13px] shadow-lg active:scale-95 transition-transform">
                  Request Demo
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
