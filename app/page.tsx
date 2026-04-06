import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PackagesSection } from "@/components/packages-section"
import { DemosSection } from "@/components/demos-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProcessSection } from "@/components/process-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <DemosSection />
      <TestimonialsSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
