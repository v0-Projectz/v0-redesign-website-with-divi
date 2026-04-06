import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { OwnPlatformSection } from "@/components/own-platform-section"
import { PackagesSection } from "@/components/packages-section"
import { RequirementsSection } from "@/components/requirements-section"
import { DemosSection } from "@/components/demos-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BuiltForCreatorsSection } from "@/components/built-for-creators-section"
import { WhatYouGetSection } from "@/components/what-you-get-section"
import { AddonsSection } from "@/components/addons-section"
import { ProcessSection } from "@/components/process-section"
import { FAQSection } from "@/components/faq-section"
import { PoliciesSection } from "@/components/policies-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OwnPlatformSection />
      <PackagesSection />
      <RequirementsSection />
      <DemosSection />
      <TestimonialsSection />
      <BuiltForCreatorsSection />
      <WhatYouGetSection />
      <AddonsSection />
      <ProcessSection />
      <FAQSection />
      <PoliciesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
