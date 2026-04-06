"use client"

import { Image as ImageIcon, Share2, Settings, Globe, Server, Video, Play, Mic } from "lucide-react"

const addons = [
  {
    icon: ImageIcon,
    title: "Thumbnails & Show Artwork",
    price: "Starting at our rates per show",
    description: "Includes custom video thumbnails, show artwork, episode artwork, and featured images designed for your platform.",
    note: "Thumbnails are strongly recommended to achieve the intended studio-style layout. Without thumbnails, the visual presentation may be simplified."
  },
  {
    icon: Share2,
    title: "Social Media Graphics Package",
    price: "Starting at industry standard rates",
    description: "Includes professionally designed website headers, profile images, cover images, and promotional graphics so your brand looks consistent across platforms.",
    note: null
  }
]

const recommendations = [
  { icon: Globe, label: "Domain name" },
  { icon: Server, label: "Hosting" },
  { icon: Video, label: "Video hosting" },
  { icon: Play, label: "Professional video player" },
  { icon: Mic, label: "Audio setup" }
]

export function AddonsSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-surface-2">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[oklch(0.10_0.004_260)] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[oklch(0.10_0.004_260)] to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Enhance Your Platform
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight mb-6">
            Add-Ons & Recommendations
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enhance your platform with additional tools and services that help your channel look polished and launch successfully.
          </p>
        </div>

        {/* Add-ons Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {addons.map((addon, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <addon.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{addon.title}</h3>
                  <p className="text-sm text-accent">{addon.price}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{addon.description}</p>
              {addon.note && (
                <p className="text-sm text-muted-foreground italic border-l-2 border-accent/30 pl-4">
                  {addon.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Recommendations Card */}
        <div className="glass-card rounded-2xl p-8 lg:p-10 border border-border/50 bg-gradient-to-br from-accent/5 to-transparent">
          <div className="flex items-start gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
              <Settings className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Recommendations</h3>
              <p className="text-muted-foreground">
                We guide you through the setup and configuration of key elements needed to launch your channel:
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            {recommendations.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/30">
                <div className="h-8 w-8 rounded-lg bg-secondary/50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-6 text-muted-foreground text-center">
            We don&apos;t just build the website — we help ensure everything is configured properly so your platform works smoothly from day one.
          </p>
        </div>
      </div>
    </section>
  )
}
