"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Why does pricing start at $5,800?",
    answer: "This includes professional video setup, custom plugin installation, consulting, and studio-style layout work. Each platform is built with care to ensure it meets professional network standards.",
  },
  {
    question: "Do I own my website and content?",
    answer: "Yes. You fully own your site and all content. Unlike platforms that charge monthly fees and hold your content hostage, your platform is built for you to own and operate independently forever.",
  },
  {
    question: "Do you provide hosting or domains?",
    answer: "No, but we assist with setup and provide recommendations for reliable hosting providers. This keeps you in control of your infrastructure and costs.",
  },
  {
    question: "Do you host videos?",
    answer: "No, we connect your videos using professional players or platforms like Bunny.net. This gives you flexibility and control over your video hosting costs and performance.",
  },
  {
    question: "What if I don't have thumbnails or artwork?",
    answer: "Thumbnail and artwork creation is available as an add-on service. We can create professional thumbnails, show artwork, and promotional graphics that match your brand.",
  },
  {
    question: "What do I need for consulting calls?",
    answer: "Consulting calls must be attended on a desktop or laptop browser for optimal screen sharing. Mobile devices and tablets are not supported for these sessions.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Common Inquiries
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Find answers to the most frequently asked questions about our services and processes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
