"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { 
    label: "Services",
    children: [
      { href: "#services", label: "Programming Styles" },
      { href: "#own-platform", label: "Own Your Platform" },
      { href: "#packages", label: "Packages" },
    ]
  },
  {
    label: "Resources",
    children: [
      { href: "#requirements", label: "Requirements" },
      { href: "#demos", label: "Demos" },
      { href: "#faq", label: "FAQ" },
    ]
  },
  { href: "#contact", label: "Contact" },
]

interface DropdownMenuProps {
  label: string
  children: { href: string; label: string }[]
  isScrolled: boolean
}

function DropdownMenu({ label, children, isScrolled }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      
      {isOpen && (
        <div 
          className="absolute top-full left-0 pt-2 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-xl py-2 min-w-[200px]">
            {children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileMenu(expandedMobileMenu === label ? null : label)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-white/[0.06]"
          : "bg-transparent"
      )}
      style={isScrolled ? { backgroundColor: "rgba(13,13,15,0.92)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" } : undefined}
    >
      <div className="w-full px-6 lg:px-12">
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
              'children' in link ? (
                <DropdownMenu 
                  key={link.label} 
                  label={link.label} 
                  children={link.children} 
                  isScrolled={isScrolled}
                />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              asChild
            >
              <a href="#demos">View Demo</a>
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent-sm hover:glow-accent transition-all duration-300" asChild>
              <a href="#contact">
                Book Consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
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
        <div className="lg:hidden border-t border-white/[0.06]" style={{ backgroundColor: "rgba(13,13,15,0.97)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}>
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              'children' in link ? (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-secondary/50"
                    onClick={() => toggleMobileSubmenu(link.label)}
                  >
                    {link.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", expandedMobileMenu === link.label && "rotate-180")} />
                  </button>
                  {expandedMobileMenu === link.label && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-secondary/50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-secondary/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="flex flex-col gap-3 pt-6 mt-4 border-t border-border/50">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary w-full justify-center"
                asChild
              >
                <a href="#demos" onClick={() => setIsMobileMenuOpen(false)}>View Demo</a>
              </Button>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full justify-center glow-accent-sm" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Consultation
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
