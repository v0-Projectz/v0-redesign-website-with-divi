"use client"

import { Mic, Utensils, Clapperboard, Video, Smile, Sparkles, Film, Camera, Check } from "lucide-react"

const programmingStyles = [
  { icon: Mic, label: "Interview Talk Show" },
  { icon: Video, label: "Daytime Talk Show" },
  { icon: Smile, label: "Panel Talk Show" },
  { icon: Sparkles, label: "Late-Night Show" },
  { icon: Camera, label: "Lifestyle Show" },
  { icon: Clapperboard, label: "DIY Creative" },
  { icon: Utensils, label: "Cooking Show" },
  { icon: Film, label: "Drama Series" },
]

const platformFeatures = [
  "Network-style layout that organizes your shows like a professional channel",
  "Custom video players designed for a polished viewing experience",
  "Structured programming layout that makes it easy for viewers to explore",
  "Scalable platform design that can grow with your channel",
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Designed for Every Genre
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Programming Styles We Support
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you&apos;re launching a talk show, cooking show, podcast, or full series, 
            your channel can be organized and presented like a professional network.
          </p>
        </div>

        {/* Programming Styles - Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 mb-20">
          {programmingStyles.map((style, index) => (
            <div
              key={style.label}
              className="bento-card group p-5 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-accent/30 transition-all duration-300 text-center"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                <style.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {style.label}
              </span>
            </div>
          ))}
        </div>

        {/* Platform Preview Section - Large Bento Card */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Preview Visual */}
          <div className="lg:col-span-7 bento-card rounded-3xl border border-border/50 overflow-hidden relative">
            <div className="aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-secondary/50 via-card to-secondary/30 relative">
              {/* Mock streaming interface */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-accent/20 border border-accent/30" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-24 rounded bg-foreground/10" />
                      <div className="h-2 w-16 rounded bg-foreground/5" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-20 rounded-lg bg-foreground/5 border border-border/50" />
                    <div className="h-8 w-8 rounded-lg bg-accent/20 border border-accent/30" />
                  </div>
                </div>
                
                {/* Featured content */}
                <div className="flex-1 grid grid-cols-3 gap-3">
                  <div className="col-span-2 rounded-xl bg-foreground/5 border border-border/30 relative overflow-hidden">
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="h-2.5 w-2/3 rounded bg-foreground/10 mb-2" />
                      <div className="h-2 w-1/2 rounded bg-foreground/5" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="rounded-lg bg-foreground/5 border border-border/30 aspect-video" />
                    ))}
                  </div>
                </div>
                
                {/* Bottom row */}
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-lg bg-foreground/5 border border-border/30 aspect-video" />
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent/5 blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 bento-card glass-card rounded-3xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl leading-tight">
              See What Your Channel Could Look Like
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Your platform can be organized like a professional streaming network 
              with structured shows, episodes, and categories. Everything is designed 
              to help your content feel intentional, organized, and ready for a 
              professional audience from day one.
            </p>
            <ul className="mt-8 space-y-4">
              {platformFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
