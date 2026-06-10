import type { Metadata } from "next";
import { Noto_Sans, Geist } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingCTA from "@/components/about/FloatingCTA";
import ScrollToTop from "@/components/ScrollToTop";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Tapito | AI-Powered Customer Engagement Platform",
  description: "Turn your retail data into revenue automatically with Tapito's AI-powered analytics, real-time insights, and automated engagement.",
  keywords: "retail ai, customer engagement, bi dashboard, retail analytics, automated marketing",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${geist.variable} font-sans antialiased text-slate-900`}>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <Navbar />
        <main>
          {children}
        </main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
