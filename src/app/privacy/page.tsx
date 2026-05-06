"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Shield, Lock, Eye, Globe, Mail, Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PrivacyPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "info-collect", label: "Information We Collect" },
    { id: "bluetooth", label: "Bluetooth Usage" },
    { id: "third-party", label: "Third-Party Services" },
    { id: "usage", label: "How We Use Information" },
    { id: "security", label: "Data Security" },
    { id: "sharing", label: "Data Sharing" },
    { id: "children", label: "Children's Privacy" },
    { id: "rights", label: "Your Rights" },
    { id: "deletion", label: "Account Deletion" },
    { id: "changes", label: "Changes to Policy" },
    { id: "contact", label: "Contact Us" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="pt-32 pb-24 min-h-screen bg-white">
      <Container>
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-widest text-[#05a0ec] mb-6">
              <Shield size={12} />
              Trust & Safety
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Privacy <span className="text-[#09358c]">Policy.</span>
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-400 font-medium">
              <Clock size={16} />
          
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Sticky Tabs Sidebar */}
          <div className="hidden lg:block lg:col-span-4 sticky top-32">
            <div className="relative p-2 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 backdrop-blur-xl">
              <div className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-300 group text-[18px]",
                    )}
                  >
                    {section.label}
                    <ChevronRight 
                      size={16} 
                      className={cn(
                        "transition-all duration-300",
                      )} 
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-24">
            <section id="introduction" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Introduction</h2>
              <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                  Tapito (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how our mobile application collects, uses, stores, and safeguards your information.<br /><br />
                  By using Tapito, you agree to the practices described in this policy.
                </p>
              </div>
            </section>

            <section id="info-collect" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Information We Collect</h2>
              <div className="space-y-12">
                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">1. Microphone Access</h3>
                  <p className="text-slate-600 leading-relaxed font-medium mb-4">Our app requests microphone permission to enable:</p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 font-medium">
                    <li>Live voice conversations with the AI assistant</li>
                    <li>Audio communication features</li>
                    <li>Real-time voice interaction</li>
                  </ul>
                  <p className="text-slate-600 leading-relaxed font-medium mt-4">Microphone data is used only during active voice sessions and is not recorded or stored unless explicitly stated.</p>
                </div>

                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">2. Network & Internet Access</h3>
                  <p className="text-slate-600 leading-relaxed font-medium mb-4">We use internet and network permissions to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 font-medium">
                    <li>Connect to AI services</li>
                    <li>Deliver app functionality</li>
                    <li>Enable real-time communication</li>
                    <li>Send and receive push notifications</li>
                    <li>Improve service reliability</li>
                  </ul>
                </div>

                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">3. Push Notifications</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Using Firebase Cloud Messaging, we may send:<br /><br />
                    • Service alerts<br />
                    • Updates<br />
                    • Important app notifications<br /><br />
                    You may disable notifications through your device settings.
                  </p>
                </div>

                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">4. Local Storage</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    We may store certain data locally on your device using secure storage technologies, including:<br /><br />
                    • User preferences<br />
                    • App settings<br />
                    • Session information<br />
                    • Performance improvements
                  </p>
                </div>
              </div>
            </section>

            <section id="bluetooth" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Bluetooth Usage</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Bluetooth permissions may be used for:<br /><br />
                • Audio device connectivity<br />
                • Wireless headset support<br />
                • Improved voice communication experience<br /><br />
                We do not use Bluetooth to track users.
              </p>
            </section>

            <section id="third-party" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Third-Party Services</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Our app may use third-party services, including:<br /><br />
                • Google Firebase<br />
                • WebRTC communication services<br />
                • Notification services<br /><br />
                These providers may process data according to their own privacy policies.
              </p>
            </section>

            <section id="usage" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium mb-6">We use collected data to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 font-bold text-sm">
                {[
                  "Provide app functionality",
                  "Enable AI chat and voice features",
                  "Improve app performance",
                  "Send notifications",
                  "Maintain security",
                  "Troubleshoot issues"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-[#05a0ec]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="security" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Data Security</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                We implement appropriate technical and organizational security measures to protect your information.<br />
                However, no system is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section id="sharing" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Data Sharing</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                We do not sell your personal data.<br />
                We may share limited data only when necessary to:<br /><br />
                • Provide essential services<br />
                • Meet legal obligations<br />
                • Protect rights and safety
              </p>
            </section>

            <section id="children" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Children's Privacy</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Our app is not intended for children under 13.<br />
                We do not knowingly collect data from children.
              </p>
            </section>

            <section id="rights" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Your Rights</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Depending on your region, you may have the right to:<br /><br />
                • Access your data<br />
                • Delete your data<br />
                • Request corrections<br />
                • Withdraw consent
              </p>
            </section>

            <section id="deletion" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Account Deletion</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Users may request account deletion by contacting:<br />
                Email: [Insert Support Email]<br />
                Website: [Insert Website URL]
              </p>
            </section>

            <section id="changes" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                We may update this Privacy Policy periodically.<br />
                Changes will be posted with an updated effective date.
              </p>
            </section>

            <section id="contact" className="scroll-mt-32">
              <div className="p-10 rounded-[2.5rem] bg-[#09358c] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full" />
                <h2 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">Contact Us</h2>
                <p className="mb-10 opacity-80 text-lg font-medium relative z-10">
                  If you have questions, contact us at:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-black mb-1">Email Support</p>
                      <p className="font-black text-lg">[Insert Support Email]</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Globe size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-black mb-1">Official Website</p>
                      <p className="font-black text-lg">[Insert Website URL]</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default PrivacyPage;
