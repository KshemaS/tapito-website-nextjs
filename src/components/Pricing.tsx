"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, ArrowRight, Zap, Target, Rocket, Shield, Globe, ZapIcon, Layers3, TrendingUp, Sparkles, Building2, ChevronDown, Mail } from "lucide-react";
import Container from "./Container";
import { cn } from "@/lib/utils";
import Particles from "./Particles";
import Orb from "./Orb";
import BorderGlow from "./BorderGlow";

const plans = [
  {
    name: "Starter",
    description: "Launch Your Data Journey",
    idealFor: "Ideal for small retailers getting started with data-driven marketing",
    icon: Layers3,
    features: [
      "BI dashboard (sales & insights)",
      "Basic customer segmentation",
      "Manual campaign management",
      "Up to 10,000 customers",
      "Campaign tracking (limited)",
      "Basic ROI tracking",
      "Email & chat support",
      "API integrations (POS, CRM)",
    ],
    cta: "Book a Demo",
    popular: false,
    color: "blue",
    hue: 220,
  },
  {
    name: "Growth",
    description: "Scale with AI Intelligence",
    idealFor: "Ideal for growing retail brands & regional chains",
    icon: TrendingUp,
    features: [
      "Advanced segmentation (RFM)",
      "AI insights (limited credits)",
      "Semi-automated campaigns",
      "Up to 50,000 customers",
      "Increased campaign limits",
      "Advanced ROI analytics",
      "Performance benchmarking",
      "Priority support",
      "Free AI tokens (limited)",
    ],
    cta: "Book a Demo",
    popular: false,
    color: "violet",
    hue: 260,
  },
  {
    name: "Elite",
    description: "Full AI Automation",
    idealFor: "Ideal for large retailers & multi-location businesses",
    icon: Sparkles,
    features: [
      "Unlimited AI insights",
      "Fully automated orchestration",
      "Unlimited customers & campaigns",
      "Real-time predictive analytics",
      "Cross-channel ROI attribution",
      "Dedicated account manager",
      "Multi-location tracking",
      "Mobile analytics + voice",
      "Advanced API integrations",
      "High-volume AI token access",
    ],
    cta: "Book a Demo",
    popular: true,
    color: "indigo",
    hue: 240,
  },
  {
    name: "Enterprise",
    description: "Built for Scale",
    idealFor: "Ideal for enterprise retailers with complex requirements",
    icon: Building2,
    features: [
      "Platform customization",
      "Dedicated implementation team",
      "SLA-backed enterprise support",
      "Custom contracts & billing",
      "White-label capabilities",
      "Executive business reviews",
      "Custom AI models",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "slate",
    hue: 200,
  },
];

const SpotlightCard = ({ children, className, popular, hue }: { children: React.ReactNode; className?: string; popular?: boolean; hue: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={cn("relative h-full", className)}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-40">
          <div className="flex items-center gap-2 px-3 py-1 bg-indigo-600 rounded-full border border-indigo-400 shadow-[0_8px_16px_-4px_rgba(79,70,229,0.3)] whitespace-nowrap">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-[10px] font-bold uppercase tracking-[0.05em] text-white">
              Most Popular
            </span>
          </div>
        </div>
      )}

      <motion.div
        onMouseMove={onMouseMove}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
        className={cn(
          "group relative flex flex-col h-full rounded-[1.25rem] border border-slate-200/60 bg-white/80 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_24px_48px_-12px_rgba(99,102,241,0.12)]",
          popular 
            ? "shadow-[0_40px_80px_-15px_rgba(79,70,229,0.2)] border-indigo-500 hover:border-indigo-500 ring-2 ring-indigo-500/10 bg-white/95" 
            : "hover:border-indigo-200/50"
        )}
      >
        {popular && (
          <BorderGlow 
            borderRadius="1.25rem" 
            duration={8} 
            size={120} 
            colorFrom="#6366f1" 
            colorTo="#a855f7" 
          />
        )}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[1.25rem] opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.05), transparent 40%)`
            ),
          }}
        />
        
        <div className={cn(
          "relative z-10 flex flex-col h-full rounded-[1.1rem] transition-all duration-500",
          popular ? "p-6 pt-10 pb-20" : "p-6 pt-10 pb-10"
        )}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const displayIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={false}
      className={cn(
        "group overflow-hidden transition-all duration-500 rounded-[1rem] border backdrop-blur-xl",
        isOpen 
          ? "bg-white/80 border-indigo-200/60 shadow-[0_32px_64px_-16px_rgba(30,64,175,0.08)]" 
          : "bg-white/40 border-white/40 hover:border-indigo-100 hover:bg-white/60 shadow-sm"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-7 flex items-center justify-between text-left group/btn"
      >
        <div className="flex items-center gap-6">
          <div
            className={cn(
              "w-11 h-11 rounded-2xl flex items-center justify-center text-[11px] font-black transition-all duration-500",
              isOpen 
                ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200" 
                : "bg-white/80 text-slate-400 group-hover/btn:text-indigo-600 border border-slate-100 group-hover/btn:border-indigo-100 group-hover/btn:shadow-md group-hover/btn:shadow-indigo-50/50"
            )}
          >
            {displayIndex}
          </div>
          <span
            className={cn(
              "text-[16px] font-black transition-colors duration-500 tracking-tight",
              isOpen ? "text-slate-900" : "text-slate-600 group-hover/btn:text-indigo-600"
            )}
          >
            {question}
          </span>
        </div>
        <div
          className={cn(
            "w-11 h-11 rounded-2xl border flex items-center justify-center transition-all duration-500",
            isOpen
              ? "bg-slate-900 border-slate-900 text-white rotate-180"
              : "bg-white/80 border-slate-100 text-slate-400 group-hover/btn:border-indigo-100 group-hover/btn:text-indigo-600"
          )}
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 ml-17 text-slate-500 text-[15px] font-medium leading-relaxed max-w-2xl">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section className="pt-32 pb-32 lg:pt-48 relative overflow-hidden bg-[#fafbfc]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] -left-[10%] w-[70%] h-[70%] opacity-20 transition-transform duration-1000">
          <Orb hue={240} hoverIntensity={0.5} />
        </div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] opacity-20 transition-transform duration-1000">
          <Orb hue={280} hoverIntensity={0.5} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-40">
          <Particles />
        </div>
      </div>

      <Container>
        <div className="text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-900 bg-gradient-to-r from-indigo-50/90 to-violet-50/90 backdrop-blur-xl rounded-full border border-indigo-200/50 shadow-sm shadow-indigo-100/50"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap size={12} className="text-indigo-600 fill-current" />
              </motion.div>
              Pricing Plans
            </motion.div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.95]">
              Ready to revolutionize <br /> <span className="gradient-text">your retail analytics?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Join 500+ leading retailers who use Tapito to make smarter, faster, more profitable decisions every day.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative z-10 lg:px-4">
          <PricingCard plan={plans[0]} />
          <PricingCard plan={plans[1]} />
          <div className="relative lg:z-10 lg:-mt-10 lg:-mb-10">
            <PricingCard plan={plans[2]} />
          </div>
          <PricingCard plan={plans[3]} />
        </div>

        <div className="mt-40 relative z-10 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.1em] text-blue-600 bg-blue-50/50 rounded-full border border-blue-100/50"
                >
                  FAQ
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-6 tracking-tight leading-[1.1]">
                  Frequently asked <br /> questions
                </h3>
                <p className="text-slate-500 font-medium mb-10 leading-relaxed text-[15px] max-w-sm">
                  Everything you need to know about plans, billing, and devices. Can't find your answer? We're happy to help.
                </p>

                <div className="group relative p-10 rounded-[1.5rem] bg-slate-900 overflow-hidden shadow-2xl shadow-indigo-900/10">
                  <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                    <Sparkles size={140} className="text-indigo-400" />
                  </div>
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full" />
                  
                  <div className="relative z-10 flex flex-col items-start gap-8">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/40 relative">
                       <Mail size={30} strokeWidth={1.5} />
                       <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h5 className="font-black text-white text-2xl tracking-tight mb-3">Still have questions?</h5>
                      <p className="text-slate-400 text-[15px] font-medium leading-relaxed">Our strategic team responds within 24 hours.</p>
                    </div>
                    <button className="w-full mt-4 bg-white text-slate-900 py-5 rounded-2xl font-black text-[13px] uppercase tracking-[0.2em] transition-all hover:bg-indigo-600 hover:text-white shadow-xl shadow-black/20 hover:shadow-indigo-600/30 hover:-translate-y-1">
                      Contact support
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 xl:col-span-8">
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly can I set up Tapito?",
                    answer: "Most retailers are up and running within 24-48 hours. Our strategic team assists with the initial data integration from your POS or CRM platform."
                  },
                  {
                    question: "Which platforms and OS does Tapito support?",
                    answer: "Tapito is platform-agnostic. We integrate with major POS systems (Shopify, Square, Lightspeed) and CRMs (Salesforce, HubSpot, Klaviyo)."
                  },
                  {
                    question: "How are devices counted for billing?",
                    answer: "Billing is based on the number of active locations or terminals connected to the platform. We offer volume-based discounts for large enterprises."
                  },
                  {
                    question: "Is there a free trial?",
                    answer: "Yes, we offer a 14-day free trial for the Starter and Growth plans so you can experience the power of AI-driven insights firsthand."
                  },
                  {
                    question: "Can I switch or upgrade my plan mid-cycle?",
                    answer: "Absolutely. You can upgrade or adjust your plan at any time. Changes take effect immediately for upgrades, while downgrades apply to the next cycle."
                  },
                  {
                    question: "Does Tapito integrate with our existing SSO and directory?",
                    answer: "Yes, Enterprise customers can utilize SSO integration (Okta, Azure AD) for secure and centralized access management."
                  },
                  {
                    question: "What compliance certifications does Tapito hold?",
                    answer: "Tapito is SOC2 Type II compliant and adheres to GDPR and CCPA regulations to ensure your data is always secure and handled ethically."
                  },
                  {
                    question: "What support options are available?",
                    answer: "Support varies by plan, ranging from email and chat for Starter to dedicated account managers and 24/7 priority support for Elite and Enterprise."
                  }
                ].map((faq, fIndex) => (
                  <FAQItem key={fIndex} index={fIndex} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const PricingCard = ({ plan }: { plan: typeof plans[0] }) => {
  const Icon = plan.icon;
  return (
    <SpotlightCard 
      popular={plan.popular} 
      hue={plan.hue}
    >
      <div className="mb-8">
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative transition-all duration-300",
          plan.popular 
            ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-600/20" 
            : "bg-slate-50 text-slate-900 border border-slate-200/50"
        )}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-4xl font-bold text-slate-900 mb-3 leading-none tracking-tight">{plan.name}</h3>
        <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-full mb-8 shadow-sm shadow-indigo-500/20" />
        
        <p className="text-[11px] font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 uppercase tracking-[0.15em]">{plan.description}</p>
        <p className="text-[13px] font-medium text-slate-500 leading-relaxed pr-4">{plan.idealFor}</p>
      </div>

      <div className="flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">Plan Features</span>
          <div className="h-px w-full bg-slate-100" />
        </div>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, fIndex) => (
            <motion.li 
              key={fIndex} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: fIndex * 0.05, duration: 0.3 }}
              className="flex items-start gap-3.5 group/item"
            >
              <div className={cn(
                "mt-0.5 flex-shrink-0 w-5.5 h-5.5 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/item:scale-110",
                plan.popular 
                  ? "bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600 group-hover/item:from-indigo-600 group-hover/item:to-violet-600 group-hover/item:text-white group-hover/item:shadow-md group-hover/item:shadow-indigo-500/25" 
                  : "bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white"
              )}>
                <Check size={11} strokeWidth={3.5} />
              </div>
              <span className="text-[13px] font-semibold text-slate-600 leading-snug group-hover/item:text-slate-800 transition-colors">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-full py-6 rounded-2xl font-black transition-all duration-500 flex items-center justify-center gap-3 group relative overflow-hidden",
            plan.popular 
              ? "btn-premium text-white shadow-[0_25px_50px_-12px_rgba(99,102,241,0.4)] border-none" 
              : "bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20 border border-slate-800 hover:shadow-2xl hover:shadow-slate-900/30"
          )}
        >
          <span className="relative z-10 uppercase text-[11px] tracking-[0.2em]">{plan.cta}</span>
          <ArrowRight size={18} className="relative z-10 transition-all duration-500 group-hover:translate-x-1.5 group-hover:scale-110" />
          
          {/* Premium shine effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: "-200%" }}
            whileHover={{ x: "200%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          
          {plan.popular && (
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
          )}
        </motion.button>
      </div>
    </SpotlightCard>
  );
};


export default Pricing;
