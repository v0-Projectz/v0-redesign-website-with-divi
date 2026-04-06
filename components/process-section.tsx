"use client"

const steps = [
  {
    number: "01",
    title: "Book Your Consultation",
    description: "We start with a call to understand your goals and determine the right setup for your platform.",
  },
  {
    number: "02",
    title: "Submit Your Materials",
    description: "Provide your content, links, and assets so we can begin building your platform.",
  },
  {
    number: "03",
    title: "Build & Review",
    description: "We build your site with you, review it together, and make revisions based on your package.",
  },
  {
    number: "04",
    title: "Launch Your Platform",
    description: "Your site is finalized, delivered, and ready for you to manage and grow.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A Simple, Guided Process
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Get your platform built and ready to launch in four straightforward steps.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-[1px] bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                {/* Step Number */}
                <div className="h-16 w-16 rounded-full border-2 border-accent bg-background flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-accent">{step.number}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
