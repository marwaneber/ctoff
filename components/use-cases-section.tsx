"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Rocket, Shield, Palette, Handshake } from "lucide-react"

const useCases = [
  {
    icon: Brain,
    title: "MVP Idea Validation",
    description: "Figma-first mockups, lean tech stack, 2–3 week launch path",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Early-Stage SaaS",
    description: "Frontend-heavy dashboard builds, auth, payments, CI/CD",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Regulated Products",
    description: "Structured roadmaps, secure infra, smart backend design",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "UX-Poor Teams",
    description: "UI polish + strategic frontend architecture",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Handshake,
    title: "Agencies",
    description: "White-labeled CTO builds you can resell or scale",
    gradient: "from-indigo-500 to-purple-500",
  },
]

export function UseCasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Engineered for Founders Who Want More.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a solo founder with an idea, or a growing team in need of a sharp execution partner — CTOFF
            is built for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${useCase.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <useCase.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-muted-foreground font-medium">What I Bring</p>
                    <p className="text-sm mt-2 leading-relaxed">{useCase.description}</p>
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
