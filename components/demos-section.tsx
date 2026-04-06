"use client"

import Image from "next/image"
import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const demos = [
  {
    title: "Talk Show Studio",
    category: "Interview Format",
    description: "Professional talk show layout with guest management",
    image: "/images/demo-talkshow.jpg",
  },
  {
    title: "Culinary Channel",
    category: "Cooking Show",
    description: "Recipe-driven content with episode organization",
    image: "/images/demo-cooking.jpg",
  },
  {
    title: "Audio Network",
    category: "Podcast Platform",
    description: "Audio-first streaming with playlist support",
    image: "/images/demo-podcast.jpg",
  },
  {
    title: "Film Studio",
    category: "Documentary Series",
    description: "Cinematic storytelling with chapter navigation",
    image: "/images/demo-documentary.jpg",
  },
]

export function DemosSection() {
  return (
    <section id="demos" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      
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

        {/* Demos Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Featured Demo - Large Card */}
          <div className="lg:col-span-7 bento-card group rounded-3xl border border-border/50 overflow-hidden relative cursor-pointer">
            <div className="aspect-video lg:aspect-auto lg:h-full relative">
              <Image
                src={demos[0].image}
                alt={demos[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-16 w-16 rounded-full bg-accent/90 flex items-center justify-center glow-accent">
                  <Play className="h-6 w-6 text-accent-foreground fill-current ml-1" />
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="glass rounded-2xl p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {demos[0].category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {demos[0].title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {demos[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stack */}
          <div className="lg:col-span-5 grid gap-4 lg:gap-6">
            {demos.slice(1).map((demo, index) => (
              <div
                key={demo.title}
                className="bento-card group rounded-2xl border border-border/50 overflow-hidden relative cursor-pointer"
              >
                <div className="flex items-stretch h-full">
                  {/* Image */}
                  <div className="w-1/3 relative">
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-5 bg-card/50 flex flex-col justify-center">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-accent">
                      {demo.category}
                    </span>
                    <h3 className="mt-1.5 font-semibold text-foreground group-hover:text-accent transition-colors">
                      {demo.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {demo.description}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      View Demo
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
