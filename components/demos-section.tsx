"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const demos = [
  {
    id: 0,
    title: "Talk Show Studio",
    category: "Interview Format",
    description: "Professional talk show layout with guest management, episode scheduling, and live audience interaction features.",
    image: "/images/demo-talkshow.jpg",
    features: ["Guest Profiles", "Episode Archive"],
  },
  {
    id: 1,
    title: "Culinary Channel",
    category: "Cooking Show",
    description: "Recipe-driven content platform with ingredient lists, step-by-step guides, and meal planning integration.",
    image: "/images/demo-cooking.jpg",
    features: ["Recipe Database", "Shopping Lists"],
  },
  {
    id: 2,
    title: "Audio Network",
    category: "Podcast Platform",
    description: "Audio-first streaming experience with playlist support, transcriptions, and subscriber management.",
    image: "/images/demo-podcast.jpg",
    features: ["Playlist Builder", "Transcripts"],
  },
  {
    id: 3,
    title: "Film Studio",
    category: "Documentary Series",
    description: "Cinematic storytelling platform with chapter navigation, behind-the-scenes content, and filmmaker profiles.",
    image: "/images/demo-documentary.jpg",
    features: ["Chapter Navigation", "BTS Content"],
  },
]

export function DemosSection() {
  const [activeDemo, setActiveDemo] = useState(0)
  const selectedDemo = demos[activeDemo]

  return (
    <section 
      id="msc-demos" 
      className="py-24 lg:py-32 relative bg-surface-2 msc-section msc-surface-2"
      data-divi-section="demos"
      data-divi-modules="gallery,image,text"
    >
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
          <Button variant="outline" className="border-border/50 text-foreground hover:bg-secondary/50 w-fit glass" asChild>
            <a href="#msc-demos">
              View All Demos
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Demos Interactive Grid - New Layout: Featured + 4 Grid */}
        <div className="space-y-6">
          {/* Featured Demo Card - Full Width — hidden on mobile, shown on sm+ */}
          <div className="hidden sm:block bento-card group rounded-3xl border border-border/50 overflow-hidden relative">
            <div className="aspect-[16/9] relative">
              {/* Background Image */}
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

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
                {/* Top - Category & Counter */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {selectedDemo.category}
                    </span>
                    {activeDemo !== 0 && (
                      <span className="text-xs text-muted-foreground">
                        Demo {activeDemo + 1} of {demos.length}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom - Content & CTA */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white">
                      {selectedDemo.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-200 max-w-2xl">
                      {selectedDemo.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {selectedDemo.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-white"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent" asChild>
                      <a href="#" data-demo-link={selectedDemo.id}>
                        View Live Demo
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <span className="text-sm text-gray-300">
                      Click to explore
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Demo Grid — single column on mobile, 2-col on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {demos.map((demo, index) => (
              <div
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={cn(
                  "bento-card group rounded-2xl border overflow-hidden relative cursor-pointer transition-all duration-300 aspect-[16/9] sm:aspect-square",
                  activeDemo === index
                    ? "border-accent/50 bg-accent/5 ring-1 ring-accent/20"
                    : "border-border/50 hover:border-border"
                )}
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                  <Image
                    src={demo.image}
                    alt={demo.title}
                    fill
                    className="object-cover"
                  />
                  {/* Enhanced gradient overlay for better text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-5 sm:p-5 lg:p-6 flex flex-col justify-between">
                  {/* Category */}
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "text-[10px] sm:text-xs font-medium uppercase tracking-wider transition-colors",
                      activeDemo === index ? "text-accent" : "text-gray-300"
                    )}>
                      {demo.category}
                    </span>
                    {activeDemo === index && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className={cn(
                      "text-xl sm:text-xl lg:text-2xl font-bold transition-colors drop-shadow-md",
                      activeDemo === index ? "text-accent" : "text-white group-hover:text-accent"
                    )}>
                      {demo.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-200 line-clamp-2 drop-shadow-sm">
                      {demo.description}
                    </p>

                    {/* Features */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {demo.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex text-xs font-medium px-2.5 py-1 rounded bg-black/40 text-white border border-white/30 backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Link */}
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
        
        {/* Progress Indicators - Below Grid — hidden on mobile since featured card is hidden */}
        <div className="hidden sm:flex items-center justify-center gap-2 mt-8">
          {demos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                activeDemo === index 
                  ? "w-8 bg-accent" 
                  : "w-2.5 bg-border hover:bg-muted-foreground"
              )}
              aria-label={`View demo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
