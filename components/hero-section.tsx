"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Package } from "lucide-react"

export function HeroSection() {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-muted-foreground font-medium"
          >
            Meet CTOFF.
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              product architect
            </span>{" "}
            your idea's been waiting for.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From sketch to scale, I turn raw ideas into elegant, production-ready software — with the precision of an
            engineer and the vision of a founder.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
              <div className="flex items-center text-muted-foreground">
                <ArrowRight className="w-5 h-5 mr-2 text-primary" />
                Get your MVP built.
              </div>
              <div className="flex items-center text-muted-foreground">
                <ArrowRight className="w-5 h-5 mr-2 text-primary" />
                Design your system like it's meant to last.
              </div>
              <div className="flex items-center text-muted-foreground">
                <ArrowRight className="w-5 h-5 mr-2 text-primary" />
                Move fast, ship clean.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a 1:1 Strategy Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToPackages}
              className="text-lg px-8 py-6 rounded-full border-2 hover:bg-primary/5 transition-all duration-300 bg-transparent"
            >
              <Package className="mr-2 h-5 w-5" />
              See Packages
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
