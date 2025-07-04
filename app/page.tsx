"use client"
import { HeroSection } from "@/components/hero-section"
import { ProductTeaseSection } from "@/components/product-tease-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { ModularBuffetSection } from "@/components/modular-buffet-section"
import { DifferenceSection } from "@/components/difference-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProductTeaseSection />
      <UseCasesSection />
      <ModularBuffetSection />
      <DifferenceSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
