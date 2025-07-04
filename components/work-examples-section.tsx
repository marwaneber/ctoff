"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Figma } from "lucide-react"
import Image from "next/image"

interface WorkExample {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  figmaUrl?: string
  category: "design" | "development" | "full-stack"
}

// Mock data based on typical portfolio projects
const workExamples: WorkExample[] = [
  {
    id: "1",
    title: "Restaurant Management Platform",
    description:
      "Full-stack SaaS platform for restaurant operations, inventory management, and customer analytics. Built with modern React architecture and real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "PostgreSQL", "WebSocket", "Stripe"],
    liveUrl: "https://marwane.co",
    githubUrl: "https://github.com",
    category: "full-stack",
  },
  {
    id: "2",
    title: "Healthcare Patient Portal",
    description:
      "HIPAA-compliant patient portal with appointment scheduling, medical records, and telemedicine integration. Focus on accessibility and user experience.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Prisma", "AWS", "WebRTC"],
    liveUrl: "https://marwane.co",
    figmaUrl: "https://figma.com",
    category: "full-stack",
  },
  {
    id: "3",
    title: "Mobility SaaS Dashboard",
    description:
      "Real-time fleet management dashboard with GPS tracking, route optimization, and predictive maintenance alerts. Clean, data-driven interface design.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "D3.js", "Python", "Redis", "Docker"],
    liveUrl: "https://marwane.co",
    githubUrl: "https://github.com",
    figmaUrl: "https://figma.com",
    category: "full-stack",
  },
  {
    id: "4",
    title: "E-commerce Mobile App Design",
    description:
      "Complete UI/UX design system for a luxury fashion e-commerce app. Focus on premium aesthetics and seamless shopping experience.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Figma", "Principle", "After Effects", "Sketch"],
    figmaUrl: "https://figma.com",
    category: "design",
  },
]

export function WorkExamplesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState<"all" | "design" | "development" | "full-stack">("all")

  const filteredExamples =
    selectedCategory === "all" ? workExamples : workExamples.filter((example) => example.category === selectedCategory)

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Examples</h2>
          <p className="text-xl text-muted-foreground mb-8">Real projects, real impact across industries</p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "full-stack", "design", "development"].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category as any)}
                className="capitalize"
              >
                {category === "all" ? "All Work" : category.replace("-", " ")}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredExamples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary/50">
                <div className="relative overflow-hidden">
                  <Image
                    src={example.image || "/placeholder.svg"}
                    alt={example.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {example.liveUrl && (
                      <Button size="sm" className="bg-white/90 text-black hover:bg-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    {example.githubUrl && (
                      <Button size="sm" className="bg-white/90 text-black hover:bg-white">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                    {example.figmaUrl && (
                      <Button size="sm" className="bg-white/90 text-black hover:bg-white">
                        <Figma className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{example.title}</h3>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full capitalize">
                      {example.category.replace("-", " ")}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{example.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {example.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="group bg-transparent"
            onClick={() => window.open("https://marwane.co", "_blank")}
          >
            View Full Portfolio
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
