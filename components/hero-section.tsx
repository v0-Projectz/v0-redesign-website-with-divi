"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/hero-studio.jpg",
    alt: "Professional studio production control room",
    eyebrow: "For Creators Who Want More",
    headline: ["Your Content.", "Your Channel.", "Your Studio."],
    sub: "We build studio-style websites that give creators the look and structure of a major network — powered by a custom plugin, built once and owned by you.",
  },
  {
    image: "/images/hero-slide-2.jpg",
    alt: "Professional podcast recording studio",
    eyebrow: "Podcasters & Talk Show Hosts",
    headline: ["Your Show.", "Your Brand.", "Your Audience."],
    sub: "Launch your podcast or talk show with a professional-grade platform that rivals any major network — without the monthly platform fees.",
  },
  {
    image: "/images/hero-slide-3.jpg",
    alt: "Luxury cooking show set",
    eyebrow: "Culinary & Lifestyle Creators",
    headline: ["Your Kitchen.", "Your Episodes.", "Your Empire."],
    sub: "Bring your culinary content to life with a fully custom streaming platform built around your unique show format and personal brand.",
  },
  {
    image: "/images/hero-slide-4.jpg",
    alt: "Cinematic video production studio",
    eyebrow: "Filmmakers & Documentarians",
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

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-32 pb-20">
        <div
          className={cn(
            "max-w-4xl transition-all duration-500",
            isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          )}
        >
          {/* Eyebrow */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full px-5 py-2.5 border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent status-indicator" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {slide.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05]">
            <span className="block">{slide.headline[0]}</span>
            <span className="block mt-1">{slide.headline[1]}</span>
            <span className="block mt-1" style={{ color: "#F5B841" }}>{slide.headline[2]}</span>
          </h1>

          {/* Sub */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {slide.sub}
          </p>

          {/* CTAs */}
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
              className="border-white/20 text-foreground hover:bg-white/10 h-14 px-8 text-base font-medium backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              View the Demo
            </Button>
          </div>
        </div>

        {/* Arrow Controls */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          <button
            onClick={prev}
            className="h-12 w-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="h-12 w-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-36 left-6 lg:left-12 flex items-center gap-3 z-20">
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

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "bento-card rounded-2xl border border-white/10 p-6",
                stat.highlight ? "bg-accent/10 border-accent/30" : "bg-white/5 backdrop-blur-sm"
              )}
            >
              <div
                className="text-3xl font-bold sm:text-4xl"
                style={stat.highlight ? { color: "#F5B841" } : undefined}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
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
