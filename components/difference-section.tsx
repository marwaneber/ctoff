"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const comparisons = [
  {
    category: "Approach",
    others: "Build what you ask for",
    ctoff: "Help you define what matters, then build it better",
  },
  {
    category: "Design Thinking",
    others: "Backend-first, UI as afterthought",
    ctoff: "UI-first product thinking",
  },
  {
    category: "Infrastructure",
    others: "Basic deployment, hope it scales",
    ctoff: "Real infra awareness from day one",
  },
  {
    category: "Execution Speed",
    others: "Slow iterations, heavy processes",
    ctoff: "Fast, low-drag execution",
  },
  {
    category: "Experience",
    others: "Generic web development",
    ctoff: "Healthcare, restaurant ops, SaaS expertise",
  },
  {
    category: "End Result",
    others: "MVPs that feel like prototypes",
    ctoff: "MVPs that don't feel like MVPs",
  },
]

export function DifferenceSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why CTOFF?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most developers build what you ask for. I help you define what matters, then build it better than you
            imagined.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {/* Other Devs Column */}
            <Card className="border-2 border-red-200 dark:border-red-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <X className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-xl font-bold text-red-600 dark:text-red-400">Other Devs</h3>
                </div>
                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="border-l-2 border-red-200 dark:border-red-800 pl-4"
                    >
                      <p className="text-sm font-medium text-red-600 dark:text-red-400">{item.category}</p>
                      <p className="text-muted-foreground">{item.others}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTOFF Column */}
            <Card className="border-2 border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Check className="w-6 h-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400">CTOFF</h3>
                </div>
                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="border-l-2 border-green-200 dark:border-green-800 pl-4"
                    >
                      <p className="text-sm font-medium text-green-600 dark:text-green-400">{item.category}</p>
                      <p className="text-foreground font-medium">{item.ctoff}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              "🟢 UI-first product thinking",
              "🟢 Real infra awareness",
              "🟢 Fast, low-drag execution",
              "🟢 Experience across healthcare, restaurant ops, SaaS",
              "🟢 MVPs that don't feel like MVPs",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center"
              >
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
