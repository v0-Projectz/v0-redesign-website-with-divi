"use client"

import { ArrowUpRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const demos = [
  {
    title: "MSC Template v1",
    category: "Custom Video Player",
    rating: 3,
    date: "Nov 12, 2025",
    color: "from-amber-500/20 to-orange-600/20",
  },
  {
    title: "MSC Template v2",
    category: "Photo Market",
    rating: 4,
    date: "Aug 12, 2025",
    color: "from-blue-500/20 to-cyan-600/20",
  },
  {
    title: "MSC Template v3",
    category: "Content Streaming",
    rating: 3,
    date: "Sep 12, 2025",
    color: "from-emerald-500/20 to-teal-600/20",
  },
  {
    title: "MSC Template v4",
    category: "Explorer Discovery",
    rating: 4,
    date: "Jan 12, 2026",
    color: "from-rose-500/20 to-pink-600/20",
  },
]

export function DemosSection() {
  return (
    <section id="demos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Our Work
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              View Demos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Take a look at some of the creator platforms and studio-style 
              websites we&apos;ve been building. More projects launching soon.
            </p>
          </div>
          <Button variant="outline" className="border-border text-foreground hover:bg-secondary w-fit">
            View All Demos
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Demos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer"
            >
              {/* Preview Image Area */}
              <div className={`aspect-video bg-gradient-to-br ${demo.color} relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
                {/* Mock interface elements */}
                <div className="absolute inset-4 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-white/30" />
                    <div className="h-2 w-2 rounded-full bg-white/30" />
                    <div className="h-2 w-2 rounded-full bg-white/30" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 rounded bg-white/20" />
                    <div className="h-2 w-1/2 rounded bg-white/20" />
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground flex items-center gap-2">
                    View Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {demo.title}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{demo.category}</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < demo.rating
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Released {demo.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
