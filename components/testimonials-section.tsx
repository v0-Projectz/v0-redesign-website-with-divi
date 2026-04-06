"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "I am thrilled to share my experience working with Yolando Brown. Her passion for her work shines through in everything she does. Her extensive knowledge and expertise in web development were invaluable, ensuring that our websites were not only visually stunning but also highly functional and user-friendly.",
    author: "Tige",
    role: "Non-Profit Founder",
    initials: "T",
  },
  {
    quote: "I am incredibly grateful for the invaluable assistance in creating and developing my website. Their expertise not only helped me build a stunning online presence but also provided exceptional business coaching. The insightful tips and practical tools shared were instrumental in launching my beauty business successfully.",
    author: "Melanie",
    role: "Makeup Artist/Stylist",
    initials: "M",
  },
  {
    quote: "My experience has been nothing but extraordinary. I needed help with my website that I couldn't put the finishing touches on. She was ready to take on the job, and fix my mess that I had created. She made my website and logo exactly how I imagined them. 5 stars isn't enough.",
    author: "Mrs. Hart",
    role: "Laundry Services Founder",
    initials: "H",
  },
  {
    quote: "The team was very professional and personable. The business is top-tier and she's a superstar. A very dedicated individual. I will continue to use her services for many years to come and will continue recommending the business to many friends and family!",
    author: "Kristina",
    role: "Client",
    initials: "K",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Creators Are Saying
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Real results from creators we&apos;ve worked with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-accent/20" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-muted-foreground leading-relaxed pr-8">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-accent">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
