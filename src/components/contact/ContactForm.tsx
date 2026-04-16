"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Field wrapper ───────────────────────────────────────── */
function Field({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState("");
  const [reason, setReason] = useState("");

  const inputCls =
    "w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 font-medium text-slate-900 placeholder:font-normal placeholder:text-slate-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Glow halo */}
      <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-3xl opacity-50 rounded-[3rem]" />

      <div className="relative bg-white/80 backdrop-blur-2xl rounded-[1.25rem] border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Gradient top bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />

        <div className="p-8 md:p-12">
          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="space-y-7 relative z-10"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field>
                    <input type="text" className={inputCls} placeholder="First Name *" />
                  </Field>
                  <Field>
                    <input type="text" className={inputCls} placeholder="Last Name *" />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field>
                    <input type="email" className={inputCls} placeholder="Work Email *" />
                  </Field>
                  <Field>
                    <input type="text" className={inputCls} placeholder="Company *" />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field>
                    <div className="relative">
                      <select
                        className={cn(inputCls, "appearance-none cursor-pointer", !country && "text-slate-400 font-normal")}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      >
                        <option value="" disabled>Country *</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="IN">India</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="SG">Singapore</option>
                        <option value="AE">UAE</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                    </div>
                  </Field>
                  <Field>
                    <div className="relative">
                      <select
                        className={cn(inputCls, "appearance-none cursor-pointer", !reason && "text-slate-400 font-normal")}
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                      >
                        <option value="" disabled>Contact Reason *</option>
                        <option value="demo">Request a Demo</option>
                        <option value="partner">Partnership Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="press">Press &amp; Media</option>
                        <option value="careers">Careers</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                    </div>
                  </Field>
                </div>

                <Field>
                  <textarea
                    className={cn(inputCls, "min-h-[150px] resize-none")}
                    placeholder="How can we help you?"
                  />
                </Field>

                <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-8">
                  <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-sm">
                    By submitting this form, I agree to Tapito&apos;s{" "}
                    <a href="#" className="text-indigo-600 font-bold hover:underline">privacy policy</a>{" "}
                    and{" "}
                    <a href="#" className="text-indigo-600 font-bold hover:underline">terms of service</a>.
                  </p>
                  <button
                    type="submit"
                    className="btn-premium whitespace-nowrap min-w-[200px] shadow-indigo-600/30 inline-flex items-center gap-2.5"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                className="flex flex-col items-center justify-center py-20 text-center gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-3xl font-black text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
                  Thanks for reaching out. Our team will get back to you within 2 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setCountry(""); setReason(""); }}
                  className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-bold transition-colors"
                >
                  ← Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
