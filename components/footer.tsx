"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground">© 2025 CTOFF — Built by Marwane.</p>
        </motion.div>
      </div>
    </footer>
  )
}
