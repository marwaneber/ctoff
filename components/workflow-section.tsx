"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessagesSquare, Palette, Hammer, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: MessagesSquare,
    title: "Align",
    subtitle: "Discovery & Strategy",
    description:
      "Deep dive into your vision, market, and technical requirements. We establish clear success metrics and project scope.",
    details: [
      "Stakeholder interviews & user research",
      "Technical architecture assessment",
      "Success metrics definition",
      "Project roadmap creation",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Design",
    subtitle: "System & Experience",
    description:
      "Create the blueprint with Apple-level attention to detail. Every interaction is intentional, every pixel purposeful.",
    details: [
      "Information architecture & user flows",
      "High-fidelity prototypes in Figma",
      "Design system & component library",
      "Usability testing & iteration",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Hammer,
    title: "Build",
    subtitle: "Craft & Quality",
    description:
      "Development with precision engineering. Clean code, scalable architecture, and performance optimization from day one.",
    details: [
      "Modern tech stack implementation",
      "API design & database optimization",
      "Real-time testing & quality assurance",
      "Performance monitoring & optimization",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Ship",
    subtitle: "Launch & Scale",
    description:
      "Strategic deployment with monitoring, analytics, and continuous improvement. Your success is our success.",
    details: [
      "Production deployment & monitoring",
      "User analytics & feedback collection",
      "Performance optimization",
      "Ongoing support & iteration",
    ],
    color: "from-orange-500 to-red-500",
  },
]

export function WorkflowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      className="py-24 bg-muted/30 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-orange-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
          <p className="text-xl text-muted-foreground mb-4">Apple-style clarity meets startup speed</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              Inspired by Apple's design philosophy: <em>"Simplicity is the ultimate sophistication."</em>
              Every step is intentional, every decision backed by user research and technical excellence.
            </p>
          </div>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />

            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">{step.subtitle}</p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-xs text-muted-foreground">
                          <ArrowRight className="w-3 h-3 mr-2 mt-0.5 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{step.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{step.description}</p>

                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-xs text-muted-foreground">
                          <ArrowRight className="w-3 h-3 mr-2 mt-0.5 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile Connection Line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Apple Design Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <cite className="text-sm font-medium text-primary">— Steve Jobs</cite>
            <p className="text-sm text-muted-foreground mt-2">This philosophy drives every decision in our process</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
