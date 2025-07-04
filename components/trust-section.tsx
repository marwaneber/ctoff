"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Users, CheckCircle, Star, Building, Code, Zap } from "lucide-react"

const trustMetrics = [
  {
    icon: Users,
    number: "50+",
    label: "Projects Delivered",
    description: "Across healthcare, restaurant tech, and SaaS platforms",
  },
  {
    icon: Clock,
    number: "10+",
    label: "Years Experience",
    description: "From startup MVPs to enterprise-scale systems",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Client Rating",
    description: "Consistent 5-star feedback on delivery and communication",
  },
  {
    icon: Zap,
    number: "3 weeks",
    label: "Average MVP Time",
    description: "From concept to production-ready application",
  },
]

const certifications = [
  { name: "AWS Certified", icon: Shield },
  { name: "React Expert", icon: Code },
  { name: "HIPAA Compliant", icon: CheckCircle },
  { name: "SOC 2 Experience", icon: Building },
]

const processGuarantees = [
  {
    title: "Weekly Progress Updates",
    description: "Detailed progress reports every Friday with demos and next steps",
  },
  {
    title: "Code Quality Guarantee",
    description: "Clean, documented, and tested code that your team can maintain",
  },
  {
    title: "30-Day Support Included",
    description: "Post-launch support to ensure smooth operation and quick fixes",
  },
  {
    title: "IP & Source Code Ownership",
    description: "You own everything we build - complete code handoff included",
  },
]

export function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-green-400/30 to-emerald-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-blue-400/30 to-cyan-600/30 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built on Trust & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            10+ years of turning complex ideas into production-ready software. Here's what you can expect.
          </p>
        </motion.div>

        {/* Trust Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{metric.number}</div>
                  <div className="font-semibold mb-2">{metric.label}</div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Certified & Compliant</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Badge variant="outline" className="text-sm px-4 py-2 bg-background/50 backdrop-blur-sm">
                  <cert.icon className="w-4 h-4 mr-2" />
                  {cert.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">What You Can Expect</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {processGuarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">{guarantee.title}</h4>
                        <p className="text-muted-foreground text-sm">{guarantee.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risk-Free Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
            <CardContent className="p-8">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">Risk-Free Start</h3>
              <p className="text-muted-foreground mb-4">
                Not satisfied with the discovery phase? Get a full refund within the first week. No questions asked.
              </p>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                100% Money-Back Guarantee
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
