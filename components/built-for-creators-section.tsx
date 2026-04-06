"use client"

import { Target, Mic, Users, Globe, Tv, ArrowRight } from "lucide-react"

const creatorTypes = [
  { icon: Target, text: "Creators launching their first platform" },
  { icon: Mic, text: "Podcasters ready to organize and showcase their content" },
  { icon: Users, text: "Coaches building a media presence" },
  { icon: Globe, text: "Content creators tired of relying on social platforms" },
  { icon: Tv, text: "Creators who want a professional, network-style presentation" },
]

export function BuiltForCreatorsSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-surface-1">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[oklch(0.10_0.004_260)] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[oklch(0.10_0.004_260)] to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                For Creators
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight mb-6">
              Built for Creators Like You
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you&apos;re just starting or ready to grow, this platform is designed for creators who want more control. Creators come to My Studio Channel at different stages, but they all have one thing in common — they want a platform they can own, control, and grow.
            </p>
            
            {/* Creator Types List */}
            <ul className="space-y-4">
              {creatorTypes.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                    <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-foreground leading-relaxed pt-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right - CTA Card */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 border border-border/50 bg-gradient-to-br from-accent/5 to-transparent">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Take Control?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Stop relying on algorithms and platform rules. Build something you own, something that represents your brand, and something that grows with your audience.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <span>No monthly platform fees</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <span>No per-subscriber costs</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <span>Full ownership from day one</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 glow-accent-sm hover:glow-accent"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
