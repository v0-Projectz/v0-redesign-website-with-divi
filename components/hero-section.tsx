"use client"

import Image from "next/image"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-studio.jpg"
          alt="Professional studio production control room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full glass-card px-5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-accent status-indicator" />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              For Creators Who Want More
            </span>
            <Sparkles className="h-3.5 w-3.5 text-accent" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl leading-[1.1]">
            <span className="block">Your Content.</span>
            <span className="block mt-2">Your Channel.</span>
            <span className="block mt-2 text-accent">Your Studio.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            We build studio-style websites that give creators the look and structure 
            of a major network — powered by a custom plugin and professional video 
            setup, built once and owned by you.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base font-semibold glow-accent-sm hover:glow-accent transition-all duration-300"
            >
              Start With a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 text-foreground hover:bg-secondary/50 h-14 px-8 text-base font-medium glass"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              View the Demo
            </Button>
          </div>
        </div>

        {/* Stats Bento Grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "20+", label: "Years Experience", highlight: false },
            { value: "100%", label: "Platform Ownership", highlight: true },
            { value: "24/7", label: "Creator Support", highlight: false },
            { value: "$0", label: "Monthly Platform Fees", highlight: false },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className={cn(
                "bento-card rounded-2xl border border-border/50 p-6",
                stat.highlight ? "glass-card" : "bg-card/50"
              )}
            >
              <div className={cn(
                "text-3xl font-bold sm:text-4xl",
                stat.highlight ? "text-accent" : "text-foreground"
              )}>
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-medium">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
