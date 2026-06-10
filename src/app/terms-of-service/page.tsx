"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { FileText, Shield, Scale, Info, Terminal, AlertTriangle, HelpCircle, Mail, Globe, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TermsPage = () => {
  const sections = [
    { id: "acceptance", label: "Acceptance of Terms" },
    { id: "eligibility", label: "Eligibility & Accounts" },
    { id: "license", label: "License & Access" },
    { id: "acceptable-use", label: "Acceptable Use" },
    { id: "subscriptions", label: "Subscriptions & Fees" },
    { id: "ip", label: "Intellectual Property" },
    { id: "disclaimers", label: "Disclaimers" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "changes", label: "Changes to Terms" },
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
              <FileText size={12} />
              Legal Agreements
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Terms of <span className="text-[#09358c]">Service.</span>
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-2xl">
              Please read these terms carefully before using the Tapito platform and services.
            </p>
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
                      "w-full flex items-center justify-between px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-300 group text-[18px] text-slate-600 hover:bg-white hover:shadow-sm"
                    )}
                  >
                    {section.label}
                    <ChevronRight 
                      size={16} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-24">
            <section id="acceptance" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Acceptance of Terms</h2>
              <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                  By accessing or using the Tapito dashboard, API, mobile application, and customer engagement services (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use the Service.
                </p>
              </div>
            </section>

            <section id="eligibility" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Eligibility &amp; Accounts</h2>
              <div className="space-y-6 text-slate-600 font-medium">
                <p className="text-lg leading-relaxed">
                  To register for an account and use the Service, you must represent a valid business entity or be an individual at least 18 years of age. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Provide accurate, complete, and updated information during account registration.</li>
                  <li>Maintain the confidentiality of your account credentials and restrict access to unauthorized users.</li>
                  <li>Promptly notify support@tapito.ai of any suspected security breaches or unauthorized account activity.</li>
                </ul>
              </div>
            </section>

            <section id="license" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">License &amp; Access</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Tapito grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service solely for your internal business operations in accordance with these Terms. You may not sell, rent, lease, or distribute the Service or use it to build competing products.
              </p>
            </section>

            <section id="acceptable-use" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Acceptable Use</h2>
              <div className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-100 transition-all duration-500">
                <p className="text-slate-600 leading-relaxed font-medium mb-6">
                  You agree not to use the Service to:
                </p>
                <ul className="grid grid-cols-1 gap-4 text-slate-600 font-bold text-sm">
                  {[
                    "Upload or transmit malicious software, viruses, or exploit vulnerabilities.",
                    "Engage in unauthorized web scraping, data harvesting, or load testing without written permission.",
                    "Send unsolicited promotional communications (spam) in violation of local laws (e.g., CAN-SPAM, GDPR).",
                    "Reverse engineer, decompile, or attempt to extract the source code of the platform."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="subscriptions" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Subscriptions &amp; Fees</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Access to certain features of the Service requires a paid subscription. Billing is processed recurringly based on your selected plan (monthly or annually). All fees are non-refundable unless specified otherwise. Failure to pay fees when due may result in immediate suspension or termination of your account.
              </p>
            </section>

            <section id="ip" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                The Service, including all design assets, branding, software code, algorithms, and AI features, is and remains the exclusive property of Tapito and its licensors. You retain ownership of any data you upload to the Service, but grant Tapito a license to process your data to provide and improve the Service.
              </p>
            </section>

            <section id="disclaimers" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Disclaimers</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. TAPITO DISCLAIMS ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.
              </p>
            </section>

            <section id="liability" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, TAPITO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA OR GOODWILL RESULTING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section id="changes" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                We reserve the right to modify these terms at any time. We will notify you of any material changes by posting the new terms on the platform or sending an email. Your continued use of the Service after changes become effective constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section id="contact" className="scroll-mt-32">
              <div className="p-10 rounded-[2.5rem] bg-[#09358c] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full" />
                <h2 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">Contact Legal Team</h2>
                <p className="mb-10 opacity-80 text-lg font-medium relative z-10">
                  If you have any questions or concerns about these Terms, please contact us:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-black mb-1">Email Support</p>
                      <p className="font-black text-lg">support@tapito.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Globe size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-black mb-1">Official Website</p>
                      <p className="font-black text-lg">https://tapito.ai</p>
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

export default TermsPage;
