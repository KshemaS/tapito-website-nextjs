import Container from "@/components/Container";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactReasons from "@/components/contact/ContactReasons";
import WorldPresence from "@/components/contact/WorldPresence";
import ContactResources from "@/components/contact/ContactResources";
import { PageBackground } from "@/components/PageBackground";

export const metadata = {
  title: "Contact Us | Tapito - Retail AI Platform",
  description: "Get in touch with our team to explore how Tapito AI can elevate your retail business with automated orchestration and multi-location tracking.",
};

const ContactPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafbfc]">

      {/* ── Background Patterns ──────────────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* High-end animated background */}
      <PageBackground />

      {/* ── Hero / Contact Grid ──────────────────────────────── */}
      <Container className="relative z-10 pt-20 sm:pt-28 pb-12 sm:pb-20 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-12 xl:col-span-5">
            <ContactHero />
          </div>
          <div className="lg:col-span-12 xl:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>

      {/* ── Reasons Section ──────────────────────────────────── */}
      <ContactReasons />

      {/* ── World Presence ───────────────────────────────────── */}
      <Container className="pt-16 sm:pt-24 pb-24 sm:pb-32 relative z-10">
        <WorldPresence />
      </Container>

      {/* ── Resources Section ────────────────────────────────── */}
      <ContactResources />

    </main>
  );
};

export default ContactPage;
