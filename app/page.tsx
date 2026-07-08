import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Showroom from "@/components/Showroom";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <UseCases />
        <Showroom />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
