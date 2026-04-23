import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingCTA from "@/components/about/FloatingCTA";

const notoSans = Noto_Sans({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
    <html lang="en" className="scroll-smooth">
      <body className={`${notoSans.variable} font-sans antialiased text-slate-900`}>
        <Navbar />
        {children}
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
