"use client"

import { ArrowRight, Mail, Phone, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(336) 303-1658",
    href: "tel:+13363031658",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Admin@MyStudioChannel.com",
    href: "mailto:Admin@MyStudioChannel.com",
  },
  {
    icon: Calendar,
    label: "Schedule",
    value: "Book a consultation call",
    href: "#",
  },
]

export function ContactSection() {
  return (
    <section 
      id="msc-contact" 
      className="py-24 lg:py-32 relative bg-surface-2 msc-section msc-surface-2"
      data-divi-section="contact"
      data-divi-modules="contact-form,text"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left - Content Card */}
          <div className="lg:col-span-5 bento-card glass-card rounded-3xl border border-border/50 p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Contact
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Schedule a consultation or reach out with questions — we&apos;ll walk 
              you through the process step by step.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                    <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{item.label}</div>
                    <div className="font-medium text-foreground group-hover:text-accent transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Schedule CTA */}
            <Button className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-base font-semibold glow-accent-sm hover:glow-accent transition-all duration-300">
              Schedule a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right - Form Card */}
          <div className="lg:col-span-7 bento-card rounded-3xl border border-border/50 bg-card/30 p-8 lg:p-10">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground/50 h-12 rounded-xl focus:border-accent/50 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground/50 h-12 rounded-xl focus:border-accent/50 focus:ring-accent/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground/50 h-12 rounded-xl focus:border-accent/50 focus:ring-accent/20"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground/50 h-12 rounded-xl focus:border-accent/50 focus:ring-accent/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground/50 resize-none rounded-xl focus:border-accent/50 focus:ring-accent/20"
                />
              </div>
              <Button type="submit" className="w-full bg-secondary/50 text-foreground hover:bg-secondary/80 border border-border/50 h-14 text-base font-semibold">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
