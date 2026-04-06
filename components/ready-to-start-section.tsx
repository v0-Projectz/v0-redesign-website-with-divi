"use client"

import Image from "next/image"
import { ArrowRight, Rocket } from "lucide-react"

export function ReadyToStartSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Darkened Background Image - on-air */}
      <div className="absolute inset-0">
        <Image
          src="/images/on-air-bg.jpg"
          alt="On Air Studio Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
            <Rocket className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Get Started Today
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight mb-6">
            Ready to Launch Your Channel?
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Build a platform you own, control, and grow — without relying on social media platforms. Take the first step towards your professional media presence today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 glow-accent-sm hover:glow-accent text-lg"
            >
              Start With a Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="#demos" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border/50 text-foreground font-medium hover:bg-secondary/50 transition-all duration-300"
            >
              View Demo Channels
            </a>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            No commitment required. Let&apos;s discuss your vision and see how we can bring it to life.
          </p>
        </div>
      </div>
    </section>
  )
}
