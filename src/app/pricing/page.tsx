import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Pricing Plans | Tapito - Retail AI Platform",
  description: "Choose the right plan for your retail growth. From startups to enterprise retailers, scale your customer engagement with AI-powered automation.",
};

export default function PricingPage() {
  return (
    <main className="flex flex-col w-full">
      <Pricing />
    </main>
  );
}
