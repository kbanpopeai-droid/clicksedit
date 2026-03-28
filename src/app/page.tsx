import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import PainPoints from "@/components/sections/PainPoints";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Statement from "@/components/sections/Statement";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import PricingPreview from "@/components/sections/PricingPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <FeaturedWork />
        <Statement />
        <Benefits />
        <Process />
        <Testimonials />
        <WhyUs />
        <PricingPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
