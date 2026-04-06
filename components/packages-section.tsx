"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const packages = [
  {
    name: "Creator Launch",
    price: "$5,800",
    description: "Professional streaming-style website using YouTube video hosting.",
    bestFor: "Creators who already host videos on YouTube and want a premium presentation layer.",
    featured: false,
    features: [
      "Cinematic network-style website design",
      "Custom YouTube video player layout",
      "YouTube videos embedded without suggested videos",
      "Streaming-style layout (like Netflix rows)",
      "Mobile optimized",
      "Brand colors & typography setup",
      "Revision rounds included",
      "Built on WordPress + Divi",
      "Tutorial walkthrough after launch",
    ],
  },
  {
    name: "Studio Pro",
    price: "$10,800",
    description: "Professional video platform with your own hosted player.",
    bestFor: "Creators who want their own professional streaming environment without relying on YouTube.",
    featured: true,
    features: [
      "Everything in Creator Launch plus",
      "Custom Video Player",
      "Video hosting via Bunny.net",
      "Video delivery powered by Presto Player",
      "No ads or platform branding",
      "Faster streaming performance",
      "Advanced video playback controls",
    ],
  },
  {
    name: "Network Platform",
    price: "$18,800",
    description: "A full content platform with private member access.",
    bestFor: "Creators launching their own streaming platform, academy, or subscription content network.",
    featured: false,
    features: [
      "Everything in Studio Pro plus",
      "Custom Membership Website",
      "Private login portal",
      "Member-only video libraries",
      "Paid subscriber access capability",
      "Content protection",
      "Structured video categories",
      "Scalable platform structure",
    ],
  },
]

export function PackagesSection() {
  return (
    <section id="packages" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Investment
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Build Packages
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A professional streaming-style website built for you one time. No platform 
            lock-in, no monthly subscriptions, and no per-subscriber fees.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative rounded-2xl border p-8 flex flex-col",
                pkg.featured
                  ? "border-accent bg-card scale-105"
                  : "border-border bg-card/50"
              )}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5">
                    <Star className="h-3.5 w-3.5 fill-accent-foreground text-accent-foreground" />
                    <span className="text-xs font-semibold text-accent-foreground">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Payment Plan: 50% Deposit, 25% Midway, 25% Final
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Best For:</span> {pkg.bestFor}
                </p>
                <Button
                  className={cn(
                    "w-full",
                    pkg.featured
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
