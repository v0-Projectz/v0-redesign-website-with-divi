"use client"

import { Mic, Utensils, Clapperboard, Video, Smile, Sparkles, Film, Camera } from "lucide-react"

const programmingStyles = [
  { icon: Mic, label: "Interview-Style Talk Show" },
  { icon: Video, label: "Daytime Talk Show" },
  { icon: Smile, label: "Daytime Panel Talk Show" },
  { icon: Sparkles, label: "Late-Night Style Talk Show" },
  { icon: Camera, label: "Home Lifestyle Show" },
  { icon: Clapperboard, label: "DIY Creative Show" },
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
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Designed for Creators Across Every Genre
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Programming Styles We Support
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you&apos;re launching a talk show, cooking show, podcast, or full series, 
            your channel can be organized and presented like a professional network.
          </p>
        </div>

        {/* Programming Styles Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {programmingStyles.map((style, index) => (
            <div
              key={style.label}
              className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 hover:bg-card/80 transition-all duration-300 text-center"
            >
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                <style.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {style.label}
              </span>
            </div>
          ))}
        </div>

        {/* Platform Preview Section */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Preview Visual */}
          <div className="relative">
            <div className="aspect-video rounded-xl border border-border bg-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              {/* Mock streaming interface */}
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded bg-accent/20" />
                  <div className="h-4 w-32 rounded bg-secondary" />
                </div>
                {/* Mock video grid */}
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-secondary/50 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
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
                  <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
