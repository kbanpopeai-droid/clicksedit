import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <WhyUs />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  )
}
