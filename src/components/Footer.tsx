"use client";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

interface IconProps extends React.SVGProps<SVGSVGElement> {
   size?: number | string;
}

const InstagramIcon = ({ size = 24, ...props }: IconProps) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
   >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
   </svg>
);

const YoutubeIcon = ({ size = 24, ...props }: IconProps) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
   >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9" />
   </svg>
);

const FacebookIcon = ({ size = 24, ...props }: IconProps) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
   >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
   </svg>
);

const socialLinks = [
   { Icon: InstagramIcon, href: "https://www.instagram.com/tapito.ai/", label: "Tapito AI on Instagram" },
   { Icon: YoutubeIcon, href: "https://www.youtube.com/@tapitoai", label: "Tapito AI on YouTube" },
   { Icon: FacebookIcon, href: "https://www.facebook.com/tapitoai", label: "Tapito AI on Facebook" },
   { Icon: Mail, href: "mailto:hello@tapito.ai", label: "Email Tapito AI" }
];
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
                     {socialLinks.map(({ Icon, href, label }, i) => (
                        <Link key={i} href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#05a0ec] hover:border-[#05a0ec] transition-all">
                           <Icon size={18} aria-hidden="true" />
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
                     <input type="email" placeholder="Your email" aria-label="Email address for newsletter" className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-[#05a0ec]" />
                     <button type="submit" aria-label="Subscribe to newsletter" className="bg-[#09358c] text-white rounded-lg px-4 py-2 text-sm font-bold hover:bg-[#05a0ec] transition-colors"><ArrowRight size={16} /></button>
                  </div>
                  {/* <div className="mt-8 flex items-center gap-2 text-slate-400">
                     <Globe size={14} />
                     <span className="text-xs">Available in 40+ countries</span>
                  </div> */}
               </div>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-4">
               <p className="text-slate-600 text-sm">
                  © {new Date().getFullYear()} Tapito AI Inc. All rights reserved. Developed by&nbsp;
                  <a
                     href="https://fegno.com?utm_source=client_website&utm_medium=agency_credit&utm_campaign=portfolio_referral&utm_id=tapito&utm_content=tapito"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-slate-600 hover:text-slate-900 transition-colors font-bold"
                  >
                     Fegno Technologies
                  </a>.
               </p>
               <div className="flex gap-4 sm:gap-6 lg:gap-8 sm:flex-row flex-col text-sm">
                  <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-900">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="text-slate-600 hover:text-slate-900">Terms of Service</Link>
               </div>
            </div>
         </Container>
      </footer>
   );
}
