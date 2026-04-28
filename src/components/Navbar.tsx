"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Users, BookOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "@/components/features/FeaturesGrid";
import { solutionsData } from "@/components/solutions/SolutionsGrid";

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
  { label: "Pricing", href: "/pricing" },
  { label: "Partners", href: "/partners" },
  { label: "Company", href: "#" },
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

            {/* CTA's */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="py-2.5 px-7 text-[12px] uppercase tracking-widest font-black border-2 border-[#09358c] rounded-full text-[#09358c] hover:bg-[#09358c] hover:text-white transition-all duration-300">
                Log in
              </button>
              <button className="bg-[#09358c] text-white py-2.5 px-7 text-[12px] uppercase tracking-widest font-black rounded-full hover:shadow-lg hover:bg-[#09358c] transition-all duration-300">
                Access Portal
              </button>
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
              className="absolute left-0 right-0 top-full bg-white border-b border-slate-100 shadow-2xl pointer-events-auto"
            >
              <div className="max-w-7xl mx-auto p-10">
                <div className="grid grid-cols-3 gap-8">
                  {features.map((feature) => (
                    <Link
                      key={feature.slug}
                      href={`/features/${feature.slug}`}
                      onClick={closeMenu}
                      className="group flex gap-5 p-5 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                    >
                      <div className="shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-[#09358c] group-hover:text-white transition-colors shadow-sm">
                        <feature.icon size={26} />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-slate-900 group-hover:text-[#09358c] transition-colors mb-2">{feature.title}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">{feature.description}</p>
                      </div>
                    </Link>
                  ))}
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
              className="absolute left-0 right-0 top-full bg-white border-b border-slate-100 shadow-2xl pointer-events-auto"
            >
              <div className="max-w-7xl mx-auto p-10">
                <div className="grid grid-cols-3 gap-8">
                  {solutionsData.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/solutions/${solution.slug}`}
                      onClick={closeMenu}
                      className="group flex gap-5 p-5 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                    >
                      <div className="shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-[#09358c] group-hover:text-white transition-colors shadow-sm">
                        <solution.icon size={26} />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-slate-900 group-hover:text-[#09358c] transition-colors mb-2">{solution.title}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">{solution.desc}</p>
                      </div>
                    </Link>
                  ))}
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
              className="absolute left-0 right-0 top-full bg-white border-b border-slate-100 shadow-2xl pointer-events-auto"
            >
              <div className="max-w-7xl mx-auto px-10 py-8">
                <div className="grid grid-cols-3 gap-6">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex gap-5 p-5 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                    >
                      <div className="shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-[#09358c] group-hover:text-white transition-colors shadow-sm">
                        <link.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-slate-900 group-hover:text-[#09358c] transition-colors mb-2">{link.label}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{link.description}</p>
                      </div>
                    </Link>
                  ))}
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
                  className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 active:scale-90 transition-transform"
                >
                  <X size={24} />
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
                            className="text-3xl font-black text-slate-900 hover:text-[#09358c] transition-colors flex items-center gap-4"
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
                                size={28}
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
                                <Link key={f.slug} href={`/features/${f.slug}`} onClick={closeMenu} className="text-lg font-bold text-slate-600 hover:text-[#09358c]">
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
                                <Link key={s.slug} href={`/solutions/${s.slug}`} onClick={closeMenu} className="text-lg font-bold text-slate-600 hover:text-[#09358c]">
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
                <button className="w-full bg-[#09358c] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[13px] shadow-lg active:scale-95 transition-transform">
                  Access Portal
                </button>
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
