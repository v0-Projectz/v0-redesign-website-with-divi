"use client"

import { Calendar, FileText, Layers, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book Your Consultation",
    description: "We start with a call to understand your goals and determine the right setup for your platform.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Submit Your Materials",
    description: "Provide your content, links, and assets so we can begin building your platform.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Build & Review",
    description: "We build your site with you, review it together, and make revisions based on your package.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch Your Platform",
    description: "Your site is finalized, delivered, and ready for you to manage and grow.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-surface-1">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[oklch(0.10_0.004_260)] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[oklch(0.10_0.004_260)] to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A Simple, Guided Process
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Get your platform built and ready to launch in four straightforward steps.
          </p>
        </div>

        {/* Process Steps - Bento Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`bento-card relative rounded-3xl border border-border/50 p-6 lg:p-8 ${
                index === 0 ? "glass-card" : "bg-card/30"
              }`}
            >
              {/* Connection Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-gradient-to-r from-border/50 to-transparent z-10" />
              )}
              
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-14 w-14 rounded-2xl bg-secondary/50 border border-border/50 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="text-4xl font-bold text-accent/20">{step.number}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Progress indicator */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className={`h-1.5 flex-1 rounded-full ${
                    index === 0 ? "bg-accent" : "bg-secondary/50"
                  }`} />
                  <span className="text-xs text-muted-foreground font-medium">
                    Step {index + 1} of 4
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
