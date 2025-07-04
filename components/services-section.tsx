"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, PenTool, Code } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "System Design Sprint",
    description: "Product flows, APIs, scaling blueprint, and modular roles.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: PenTool,
    title: "UI Design (Figma)",
    description: "Clean, modern, interactive designs that sell and convert.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Build & Launch",
    description: "Full-stack MVPs, standalone apps or platform extensions.",
    gradient: "from-green-500 to-emerald-500",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Modular Services</h2>
          <p className="text-xl text-muted-foreground">Pick what you need, when you need it</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-lg">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
