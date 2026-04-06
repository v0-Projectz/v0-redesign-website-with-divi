"use client"

import Image from "next/image"
import { Users, Tv, BookOpen, Headphones, ArrowUpRight, Monitor, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Tv,
    title: "Network-Style Layouts",
    description: "Present your content like a professional streaming network with structured shows and episodes.",
  },
  {
    icon: Users,
    title: "Creator Community",
    description: "Access our exclusive creator community for continued learning and support as your channel grows.",
  },
  {
    icon: BookOpen,
    title: "Built-In Tutorials",
    description: "Custom plugin with step-by-step tutorials so you never feel left figuring things out alone.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Direct communication with the team building your site, plus guided walkthrough after launch.",
  },
]

const channelFeatures = [
  "Network-style layout that organizes your shows like a professional channel",
  "Custom video players designed for a polished viewing experience",
  "Structured programming layout that makes it easy for viewers to explore your content",
  "Scalable platform design that can grow with your channel"
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative bg-surface-1">
      {/* Subtle top/bottom edge fades to blend with adjacent sections */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[oklch(0.10_0.004_260)] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[oklch(0.10_0.004_260)] to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* What We Do - Main Content */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 mb-20">
          {/* Main Content Card - spans 7 columns */}
          <div className="lg:col-span-7 bento-card glass-card rounded-3xl p-8 lg:p-10 border border-border/50">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                What We Do
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
              About My Studio Channel
            </h2>
            
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              My Studio Channel helps creators launch their own television-style 
              platforms online. From talk shows and cooking shows to podcasts and 
              documentaries, we design clean, organized websites that showcase 
              programming the way a real network would.
            </p>
            
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Because we&apos;re creators too, we understand what it takes to present 
              your work professionally. Every platform includes a custom built-in 
              plugin with step-by-step tutorials, plus access to our creator 
              community for continued learning and support.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Learn more about our process
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Image Card - spans 5 columns - WhatWeDo.jpg */}
          <div className="lg:col-span-5 bento-card rounded-3xl overflow-hidden border border-border/50 relative min-h-[300px] lg:min-h-0">
            <Image
              src="/images/what-we-do.jpg"
              alt="Professional production crew filming in studio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-xl p-4">
                <p className="text-sm font-medium text-foreground">Built for creators, by creators</p>
                <p className="text-xs text-muted-foreground mt-1">20+ years of media experience</p>
              </div>
            </div>
          </div>

          {/* Feature Cards - 4 across */}
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="lg:col-span-3 bento-card group p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                <feature.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* See What Your Channel Could Look Like */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight mb-6">
              See What Your Channel Could Look Like
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Your platform can be organized like a professional streaming network with structured shows, episodes, and categories.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your channel is structured to highlight your shows and make it easy for viewers to explore your content. Creators can organize their programming into categories, present episodes clearly, and build a platform that feels like a real network.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Everything is designed to help your content feel intentional, organized, and ready for a professional audience from day one.
            </p>
            
            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              {channelFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-sm text-muted-foreground italic">
              Advanced features like dedicated show pages and episode libraries are available in our premium packages.
            </p>
          </div>

          {/* Right - SeeWhatChannelLooksLike.jpg */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-border/50 relative aspect-[4/3]">
              <Image
                src="/images/see-what-channel.jpg"
                alt="Professional streaming channel interface with multiple show thumbnails"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="#demos"
                  className="h-16 w-16 rounded-full bg-accent/90 flex items-center justify-center glow-accent cursor-pointer hover:scale-110 transition-transform duration-300"
                >
                  <Play className="h-6 w-6 text-accent-foreground fill-current ml-1" />
                </a>
              </div>
              
              {/* Bottom badge */}
              <div className="absolute bottom-4 left-4">
                <div className="glass rounded-lg px-4 py-2 flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-accent" />
                  <span className="text-sm text-foreground">Network-Style Layout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
