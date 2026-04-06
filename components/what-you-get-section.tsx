"use client"

import Image from "next/image"
import { MessageSquare, Layout, Layers, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: MessageSquare,
    title: "Consulting & Revisions",
    description: "Guided consulting calls and included revisions to ensure your site is built correctly, efficiently, and ready for launch."
  },
  {
    icon: Layout,
    title: "Studio-Style Website Layout",
    description: "A professionally designed homepage and show pages that present your content with a clean, network-inspired structure."
  },
  {
    icon: Layers,
    title: "Custom Plugin & Media Setup",
    description: "Includes installation and setup of our proprietary Studio Channel plugin, developed in house to support studio style layouts, content presentation, and professional video and audio embedding."
  }
]

export function WhatYouGetSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Darkened Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/msc-background.jpg"
          alt="Studio Channel Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Included Features
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight mb-6">
            What You Get with My Studio Channel
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Launch your own professional media website with everything you need to look like a network.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 transition-all duration-500 hover:glow-accent-sm bg-card/50"
            >
              <div className="h-14 w-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#packages" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 glow-accent-sm hover:glow-accent"
          >
            View Packages
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
