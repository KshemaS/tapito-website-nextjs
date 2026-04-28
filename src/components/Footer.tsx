"use client";
import { ArrowRight, Share2, MessageCircle, Globe, Mail } from "lucide-react";
import Link from "next/link";
import Container from "./Container";
import CTASection from "./CTASection";
import { featuresData } from "@/components/features/FeaturesGrid";
import { solutionsData } from "@/components/solutions/SolutionsGrid";

export { CTASection };

export function Footer() {
   return (
      <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
         <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
               <div className="col-span-1 lg:col-span-1">
                  <Link href="/" className="flex items-center gap-2 mb-6">
                     <div className="w-28 h-10 flex items-center justify-center">
                        <img 
                           src="/logo.svg" 
                           alt="Tapito Logo" 
                           className="w-full h-full object-contain"
                        />
                     </div>
                  </Link>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                     The AI-powered customer engagement platform for modern retail. Data → Insights → Action → Growth.
                  </p>
                  <div className="flex gap-4">
                     {[Share2, MessageCircle, Globe, Mail].map((Icon, i) => (
                        <Link key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#05a0ec] hover:border-[#05a0ec] transition-all">
                           <Icon size={18} />
                        </Link>
                     ))}
                  </div>
               </div>

               <div>
                  <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Features</h5>
                  <ul className="space-y-4">
                     {featuresData.map((feature, i) => (
                        <li key={i}>
                           <Link href={`/features/${feature.slug}`} className="text-slate-500 hover:text-[#05a0ec] transition-colors">
                              {feature.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Solutions</h5>
                  <ul className="space-y-4">
                     {solutionsData.map((solution, i) => (
                        <li key={i}>
                           <Link href={`/solutions/${solution.slug}`} className="text-slate-500 hover:text-[#05a0ec] transition-colors">
                              {solution.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Connect with Us</h5>
                  <p className="text-sm text-slate-500 mb-4">Stay updated with the latest in retail AI.</p>
                  <div className="flex gap-2">
                     <input type="email" placeholder="Your email" className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-[#05a0ec]" />
                     <button className="bg-[#09358c] text-white rounded-lg px-4 py-2 text-sm font-bold hover:bg-[#05a0ec] transition-colors"><ArrowRight size={16} /></button>
                  </div>
                  {/* <div className="mt-8 flex items-center gap-2 text-slate-400">
                     <Globe size={14} />
                     <span className="text-xs">Available in 40+ countries</span>
                  </div> */}
               </div>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-slate-400 text-sm">© 2026 Tapito AI Inc. All rights reserved.</p>
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
