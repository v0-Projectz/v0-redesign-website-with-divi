"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "Demos", href: "#demos" },
  ],
  resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background relative">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center glow-accent-sm group-hover:glow-accent transition-all duration-300">
                <span className="text-accent-foreground font-bold text-sm">MSC</span>
              </div>
              <div>
                <span className="block text-base font-semibold tracking-tight text-foreground">
                  My Studio Channel
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Creator Platforms
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Build a platform you own, control, and grow — without relying on social media platforms.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} My Studio Channel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://mystudiochannel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              Visit Current Site
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="border-t border-border/30 py-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground/[0.03] tracking-tighter select-none whitespace-nowrap text-center">
            MY STUDIO CHANNEL
          </div>
        </div>
      </div>
    </footer>
  )
}
