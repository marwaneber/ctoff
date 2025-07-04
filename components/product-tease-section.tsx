"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ProductTeaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = ["UI", "Infra", "Speed"]

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-pink-400/30 to-orange-600/30 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Built Different.
          </motion.h2>

          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-2xl font-semibold text-foreground">Not a freelancer. Not an agency. A partner.</p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              CTOFF isn't here to deliver lines of code — it's here to bring clarity, sharpness, and real execution to
              your product.
            </p>
          </motion.div>

          {/* Feature Boxes Animation */}
          <div className="mb-12">
            <div className="flex justify-center items-center gap-8 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl flex items-center justify-center border-2 border-primary/20 backdrop-blur-sm"
                >
                  <span className="font-bold text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl font-semibold text-primary"
            >
              CTOFF connects them all.
            </motion.div>
          </div>

          {/* Benefits List */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">UI so intuitive it explains itself</h4>
                  <p className="text-muted-foreground text-sm">Clean interfaces that users understand instantly</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Architectures that scale with your ambition</h4>
                  <p className="text-muted-foreground text-sm">Built to grow from MVP to enterprise</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Delivery that builds trust from week one</h4>
                  <p className="text-muted-foreground text-sm">Consistent progress, clear communication</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">No noise. No fluff. Just clean, focused product engineering.</h4>
                  <p className="text-muted-foreground text-sm">Every line of code serves a purpose</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
