"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "He didn't just build — he clarified our whole product thinking.",
    author: "Sarah Chen",
    role: "Founder, HealthTech Startup",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    quote: "We launched in 3 weeks, onboarded real users, and scaled with zero downtime.",
    author: "Marcus Rodriguez",
    role: "CTO, Restaurant SaaS",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    quote: "Felt like having a co-founder with a codebase.",
    author: "Emily Watson",
    role: "Solo Founder, Mobility Platform",
    gradient: "from-green-500 to-emerald-500",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-orange-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="text-xl text-muted-foreground">Trust. Results. Calm.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <blockquote className="text-lg mb-6 italic font-medium">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}
                    >
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
