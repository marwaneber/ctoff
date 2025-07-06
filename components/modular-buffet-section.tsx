"use client"

import { LeadQualificationModal } from "@/components/lead-qualification-modal"
import { StickyPricingSummary } from "@/components/sticky-pricing-summary"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, useInView } from "framer-motion"
import { Calculator, Check, Sparkles } from "lucide-react"
import { useRef, useState } from "react"

const modules = [
  { id: "discovery", name: "Discovery & Roadmap", price: 800, essential: true },
  { id: "ui-shell", name: "UI Shell (Tailwind + multilingual)", price: 1200, essential: true },
  { id: "auth", name: "Role-based Auth", price: 800, essential: false },
  { id: "crud", name: "Core CRUD modules", price: 1000, essential: true },
  { id: "payments", name: "Payments / Stripe", price: 600, essential: false },
  { id: "dashboards", name: "Dashboards", price: 900, essential: false },
  { id: "deployment", name: "Deployment (VPS/Railway)", price: 400, essential: true },
  { id: "handoff", name: "Handoff Docs", price: 300, essential: true },
]

const bonusOption = { id: "figma", name: "Figma First design option", price: 600 }

export function ModularBuffetSection() {
  const minCost = modules
    .filter(m => m.essential)
    .reduce((sum, m) => sum + m.price, 0);

  const maxCost = modules.reduce((sum, m) => sum + m.price, 0) + bonusOption.price;
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedModules, setSelectedModules] = useState<string[]>(modules.filter((m) => m.essential).map((m) => m.id))
  const [includeFigma, setIncludeFigma] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showStickySummary, setShowStickySummary] = useState(false)

  const handleModuleToggle = (moduleId: string, essential: boolean) => {
    if (essential) return // Can't uncheck essential modules

    setSelectedModules((prev) => (prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]))
  }

  const calculateTotal = () => {
    const moduleTotal = modules
      .filter((module) => selectedModules.includes(module.id))
      .reduce((sum, module) => sum + module.price, 0)
    const figmaTotal = includeFigma ? bonusOption.price : 0
    return moduleTotal + figmaTotal
  }

  const getPricingTier = (total: number) => {
    if (total <= 3000) return { name: "Starter MVP", color: "text-blue-600" }
    if (total <= 5000) return { name: "Professional MVP", color: "text-purple-600" }
    if (total <= 7000) return { name: "Premium MVP", color: "text-green-600" }
    return { name: "Enterprise MVP", color: "text-orange-600" }
  }

  const currentTier = getPricingTier(calculateTotal())

  return (
    <section id="packages" ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      <StickyPricingSummary
        total={calculateTotal()}
        tier={currentTier.name}
        isVisible={showStickySummary}
        onToggle={() => setShowStickySummary(!showStickySummary)}
      />
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-orange-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Modular Buffet</h2>
          <p className="text-xl text-muted-foreground mb-2">Build It Your Way.</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Most devs tell you what they'll build. I let you choose what you need — and deliver it with precision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">🧩 Build your MVP buffet-style:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {modules.map((module, index) => (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={module.id}
                        checked={selectedModules.includes(module.id)}
                        onCheckedChange={() => handleModuleToggle(module.id, module.essential)}
                        disabled={module.essential}
                      />
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="font-medium">{module.name}</span>
                        {module.essential && <Badge variant="secondary">Essential</Badge>}
                      </div>
                    </div>
                    <span className="font-bold text-primary">${module.price.toLocaleString()}</span>
                  </motion.div>
                ))}

                {/* Bonus Option */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center justify-between p-4 rounded-lg border-2 border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id={bonusOption.id}
                      checked={includeFigma}
                      onCheckedChange={(checked) => setIncludeFigma(checked as boolean)}
                    />
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="font-medium">🎁 Bonus: {bonusOption.name}</span>
                    </div>
                  </div>
                  <span className="font-bold text-primary">${bonusOption.price.toLocaleString()}</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pricing Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Card className="border-2 border-primary/50 shadow-2xl bg-gradient-to-br from-primary/5 to-purple-600/5">
              <CardContent className="p-8">
                <div className="text-3xl font-bold mb-2">
                  Total: <span className="text-primary">${calculateTotal().toLocaleString()}</span>
                </div>
                <div className="text-lg font-medium mb-4">
                  <span className={currentTier.color}>{currentTier.name}</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  💸 Starting at ${minCost} — All the way up to ${maxCost} for full branded MVPs.
                </p>
                <Button
                  size="lg"
                  onClick={() => setShowModal(true)}
                  className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  → Compose Your MVP Now
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowStickySummary(true)} className="mt-4">
                  <Calculator className="w-4 h-4 mr-2" />
                  Pin Pricing
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>


        <LeadQualificationModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          selectedTotal={calculateTotal()}
          selectedModules={selectedModules}
        />
      </div>
    </section>
  )
}
