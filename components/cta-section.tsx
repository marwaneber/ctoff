"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Download, ArrowRight } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/40 to-purple-600/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/40 to-orange-600/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/30 to-cyan-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Product Deserves Better.
          </motion.h2>

          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">You don't need another dev.</p>
            <p className="text-xl md:text-2xl text-foreground font-semibold">
              You need someone who sees your product the way you do — and knows how to ship it.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
              <div className="flex items-center text-muted-foreground">
                <ArrowRight className="w-5 h-5 mr-2 text-primary" />
                I'll help you design it.
              </div>
              <div className="flex items-center text-muted-foreground">
                <ArrowRight className="w-5 h-5 mr-2 text-primary" />
                Build it.
              </div>
              <div className="flex items-center text-muted-foreground">
                <ArrowRight className="w-5 h-5 mr-2 text-primary" />
                Launch it.
              </div>
            </div>
            <p className="text-2xl font-bold text-primary">Let's do this the right way.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />→ Book My Discovery Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-2 hover:bg-primary/5 transition-all duration-300 group bg-transparent"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />→ Download My MVP Starter
              Kit PDF
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
