"use client"

import { Users, Tv, BookOpen, Headphones } from "lucide-react"

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

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
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
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
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
        </div>
      </div>
    </section>
  )
}
