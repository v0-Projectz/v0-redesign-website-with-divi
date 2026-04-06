"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#demos", label: "Demos" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center glow-accent-sm group-hover:glow-accent transition-all duration-300">
                <span className="text-accent-foreground font-bold text-sm tracking-tight">MSC</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-semibold tracking-tight text-foreground">
                My Studio Channel
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Creator Platforms
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            >
              View Demo
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent-sm hover:glow-accent transition-all duration-300">
              Book Consultation
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-border/50">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-secondary/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-6 mt-4 border-t border-border/50">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary w-full justify-center"
              >
                View Demo
              </Button>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full justify-center glow-accent-sm">
                Book Consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
