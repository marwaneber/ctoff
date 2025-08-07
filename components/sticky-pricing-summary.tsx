"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, X } from "lucide-react"

interface PricingSummaryProps {
  total: number
  tier: string
  isVisible: boolean
  onToggle: () => void
}

export function StickyPricingSummary({ total, tier, isVisible, onToggle }: PricingSummaryProps) {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  if (!isVisible) return null

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-6 right-6 z-[9999] max-w-sm bg-background/10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <Card className="border-2 border-primary/50 shadow-2xl bg-background/95 z-[9999] backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <Calculator className="w-5 h-5 text-primary mr-2" />
              <span className="font-semibold">Your MVP</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onToggle} className="h-6 w-6 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-2xl font-bold text-primary mb-1">${total.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground mb-3">{tier}</div>
          <Button size="sm" className="w-full text-sm">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
