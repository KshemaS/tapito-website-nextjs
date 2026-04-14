"use client";

import { ArrowRight, Share2, MessageCircle, Globe, Mail } from "lucide-react";
import Link from "next/link";
import Container from "./Container";

export default function CTASection() {
   return (
      <section className="bg-white py-24">
         <Container>
            <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
               {/* Background effects */}
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(37,99,235,0.15),transparent)] pointer-events-none" />
               <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
               <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full" />

               <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
                  <div>
                     <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1]">Stop Guessing. <br /> <span className="text-blue-400">Start Growing.</span></h2>
                     <p className="text-xl text-slate-400 max-w-xl">
                        Join hundreds of retail giants who have transformed their data into a revenue engine with Tapito.
                     </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center lg:justify-end gap-4">
                     <button className="btn-premium px-10 py-5 text-lg whitespace-nowrap">
                        Book a Demo
                     </button>
                     <button className="btn-secondary bg-transparent border-slate-700 text-white hover:bg-white/5 px-10 py-5 text-lg rounded-full whitespace-nowrap">
                        Talk to Experts
                     </button>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
}

export function Footer() {
   return (
      <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
         <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
               <div className="col-span-1 lg:col-span-1">
                  <Link href="/" className="flex items-center gap-2 mb-6">
                     <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">T</span>
                     </div>
                     <span className="text-xl font-bold tracking-tight text-slate-900">Tapito</span>
                  </Link>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                     The AI-powered customer engagement platform for modern retail. Data → Insights → Action → Growth.
                  </p>
                  <div className="flex gap-4">
                     {[Share2, MessageCircle, Globe, Mail].map((Icon, i) => (
                        <Link key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                           <Icon size={18} />
                        </Link>
                     ))}
                  </div>
               </div>

               <div>
                  <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Product</h5>
                  <ul className="space-y-4">
                     {["BI Dashboard", "AI Analytics", "Automation Engine", "Revenue Intelligence", "Campaigns"].map((item, i) => (
                        <li key={i}><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</Link></li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Solutions</h5>
                  <ul className="space-y-4">
                     {["Retail Chains", "E-commerce", "Supermarkets", "Fashion", "Electronics"].map((item, i) => (
                        <li key={i}><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</Link></li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Connect with Us</h5>
                  <p className="text-sm text-slate-500 mb-4">Stay updated with the latest in retail AI.</p>
                  <div className="flex gap-2">
                     <input type="email" placeholder="Your email" className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-blue-300" />
                     <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-bold"><ArrowRight size={16} /></button>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-slate-400">
                     <Globe size={14} />
                     <span className="text-xs">Available in 40+ countries</span>
                  </div>
               </div>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-slate-400 text-sm">© 2024 Tapito AI Inc. All rights reserved.</p>
               <div className="flex gap-8 text-sm">
                  <Link href="#" className="text-slate-400 hover:text-slate-900">Privacy Policy</Link>
                  <Link href="#" className="text-slate-400 hover:text-slate-900">Terms of Service</Link>
                  <Link href="#" className="text-slate-400 hover:text-slate-900">Cookie Policy</Link>
               </div>
            </div>
         </Container>
      </footer>
   );
}
