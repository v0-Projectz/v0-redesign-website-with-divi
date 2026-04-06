"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const demos = [
  {
    id: 0,
    title: "Talk Show Studio",
    category: "Interview Format",
    description: "Professional talk show layout with guest management, episode scheduling, and live audience interaction features.",
    image: "/images/demo-talkshow.jpg",
    features: ["Guest Profiles", "Episode Archive", "Live Chat"],
  },
  {
    id: 1,
    title: "Culinary Channel",
    category: "Cooking Show",
    description: "Recipe-driven content platform with ingredient lists, step-by-step guides, and meal planning integration.",
    image: "/images/demo-cooking.jpg",
    features: ["Recipe Database", "Shopping Lists", "Video Tutorials"],
  },
  {
    id: 2,
    title: "Audio Network",
    category: "Podcast Platform",
    description: "Audio-first streaming experience with playlist support, transcriptions, and subscriber management.",
    image: "/images/demo-podcast.jpg",
    features: ["Playlist Builder", "Transcripts", "RSS Feeds"],
  },
  {
    id: 3,
    title: "Film Studio",
    category: "Documentary Series",
    description: "Cinematic storytelling platform with chapter navigation, behind-the-scenes content, and filmmaker profiles.",
    image: "/images/demo-documentary.jpg",
    features: ["Chapter Navigation", "BTS Content", "Filmmaker Bios"],
  },
]

export function DemosSection() {
  const [activeDemo, setActiveDemo] = useState(0)
  const selectedDemo = demos[activeDemo]

  return (
    <section id="demos" className="py-24 lg:py-32 relative bg-surface-2">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[oklch(0.135_0.005_260)] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[oklch(0.10_0.004_260)] to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              View Demos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Take a look at some of the creator platforms and studio-style 
              websites we&apos;ve been building. More projects launching soon.
            </p>
          </div>
          <Button variant="outline" className="border-border/50 text-foreground hover:bg-secondary/50 w-fit glass">
            View All Demos
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Demos Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Featured Demo - Large Card (Left Side) */}
          <div className="lg:col-span-7 bento-card group rounded-3xl border border-border/50 overflow-hidden relative">
            <div className="aspect-video lg:aspect-[4/3] relative">
              {/* Image with smooth transition */}
              <div className="absolute inset-0">
                {demos.map((demo) => (
                  <div
                    key={demo.id}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      activeDemo === demo.id ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      fill
                      className="object-cover"
                      priority={demo.id === 0}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-accent/90 flex items-center justify-center glow-accent cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-accent-foreground fill-current ml-1" />
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {selectedDemo.category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="text-xs text-muted-foreground">
                      Demo {activeDemo + 1} of {demos.length}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {selectedDemo.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {selectedDemo.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedDemo.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-full bg-secondary/50 border border-border/50 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-5 flex items-center gap-4">
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent">
                      View Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                    <span className="text-xs text-muted-foreground">
                      Click to explore
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stack (Right Side) - Clickable Cards */}
          <div className="lg:col-span-5 grid gap-4 lg:gap-4">
            {demos.map((demo, index) => (
              <div
                key={demo.title}
                onClick={() => setActiveDemo(index)}
                className={cn(
                  "bento-card group rounded-2xl border overflow-hidden relative cursor-pointer transition-all duration-300",
                  activeDemo === index
                    ? "border-accent/50 bg-accent/5 ring-1 ring-accent/20"
                    : "border-border/50 hover:border-border"
                )}
              >
                <div className="flex items-stretch h-full">
                  {/* Image */}
                  <div className="w-1/3 relative min-h-[100px]">
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80" />
                    
                    {/* Active Indicator */}
                    {activeDemo === index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-accent/20">
                        <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                          <Play className="h-4 w-4 text-accent-foreground fill-current ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-5 bg-card/50 flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-[10px] font-medium uppercase tracking-wider transition-colors",
                        activeDemo === index ? "text-accent" : "text-muted-foreground"
                      )}>
                        {demo.category}
                      </span>
                      {activeDemo === index && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      )}
                    </div>
                    <h3 className={cn(
                      "mt-1.5 font-semibold transition-colors",
                      activeDemo === index ? "text-accent" : "text-foreground group-hover:text-accent"
                    )}>
                      {demo.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {demo.description}
                    </p>
                    <div className={cn(
                      "mt-3 inline-flex items-center gap-1 text-xs font-medium transition-all",
                      activeDemo === index 
                        ? "text-accent opacity-100" 
                        : "text-accent opacity-0 group-hover:opacity-100"
                    )}>
                      {activeDemo === index ? "Currently Viewing" : "View Demo"}
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {demos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeDemo === index 
                  ? "w-8 bg-accent" 
                  : "w-2 bg-border hover:bg-muted-foreground"
              )}
              aria-label={`View demo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
