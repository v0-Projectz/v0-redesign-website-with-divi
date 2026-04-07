"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/tv-wall.jpg",
    alt: "Professional multi-screen TV studio wall",
    eyebrow: "For Creators Who Want More",
    headline: ["Your Content.", "Your Channel.", "Your Studio."],
    sub: "We build studio-style websites that give creators the look and structure of a major network — powered by a custom plugin, built once and owned by you.",
  },
  {
    image: "/images/show-cards.jpg",
    alt: "Netflix-style show cards — The Late Show, Unsolved, Off The Menu and more",
    eyebrow: "Look Like a Real Network",
    headline: ["Your Shows.", "Your Brand.", "Your Network."],
    sub: "Your platform can be organized like a professional streaming network — with structured shows, episodes, and categories that rival any major broadcaster.",
  },
  {
    image: "/images/on-air.jpg",
    alt: "Creator on air — woman podcaster on phone screen with ON AIR sign",
    eyebrow: "Podcasters & Talk Show Hosts",
    headline: ["Your Voice.", "Your Platform.", "Your Audience."],
    sub: "Launch your podcast or talk show with a professional-grade platform that rivals any major network — without monthly platform fees or subscriber charges.",
  },
  {
    image: "/images/creator-solo.jpg",
    alt: "Creator with professional cinema camera in studio",
    eyebrow: "Built for Every Creator",
    headline: ["Your Vision.", "Your Platform.", "Your Legacy."],
    sub: "Showcase your productions on a cinema-quality platform built to present your work exactly the way you intend it to be experienced.",
  },
]

const stats = [
  { value: "20+", label: "Years Experience", highlight: false },
  { value: "100%", label: "Platform Ownership", highlight: true },
  { value: "24/7", label: "Creator Support", highlight: false },
  { value: "$0", label: "Monthly Platform Fees", highlight: false },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setIsTransitioning(false)
    }, 300)
  }, [isTransitioning])

  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  const slide = slides[current]

  return (
    <section 
      id="msc-hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden msc-section"
      data-divi-section="hero"
      data-divi-module="fullwidth-header"
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === current ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/80 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16 pt-20 sm:pt-32 pb-24">

        {/* Hero text — centered */}
        <div
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-500",
            isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          )}
        >
          {/* Eyebrow pill */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full px-5 py-2.5 border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {slide.eyebrow}
            </span>
          </div>

          {/* Headline — slightly smaller */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.07]">
            <span className="block">{slide.headline[0]}</span>
            <span className="block mt-1">{slide.headline[1]}</span>
            <span className="block mt-1" style={{ color: "#F5B841" }}>{slide.headline[2]}</span>
          </h1>

          {/* Sub */}
          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground sm:text-lg">
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base font-semibold glow-accent-sm hover:glow-accent transition-all duration-300"
              asChild
            >
              <a href="#msc-contact">
                Start With a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-foreground hover:bg-white/10 h-14 px-8 text-base font-medium backdrop-blur-sm"
              asChild
            >
              <a href="#msc-demos">
                <Play className="mr-2 h-5 w-5 fill-current" />
                View the Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Arrow Controls — sides (hidden on very small mobile, show on sm+) */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Slide Indicators — centered at bottom of text */}
        <div className="mt-10 flex items-center justify-center gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "rounded-full transition-all duration-500",
                i === current
                  ? "w-8 h-2 bg-accent"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              )}
            />
          ))}
          <span className="ml-2 text-xs text-muted-foreground font-medium tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Stats — 4 blurb boxes, centered */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "rounded-2xl border border-white/10 p-5 text-center backdrop-blur-sm",
                stat.highlight ? "bg-accent/10 border-accent/30" : "bg-white/5"
              )}
            >
              <div
                className="text-2xl font-bold sm:text-3xl"
                style={stat.highlight ? { color: "#F5B841" } : { color: "#fff" }}
              >
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs text-muted-foreground leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-medium">Scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  )
}
