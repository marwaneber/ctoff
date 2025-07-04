"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"

interface LeadQualificationModalProps {
  isOpen: boolean
  onClose: () => void
  selectedTotal: number
}

const steps = [
  {
    title: "Tell us about your project",
    fields: ["name", "email", "company"],
  },
  {
    title: "Project details",
    fields: ["idea", "timeline", "budget"],
  },
  {
    title: "Perfect fit check",
    fields: ["stage", "team", "priority"],
  },
]

export function LeadQualificationModal({ isOpen, onClose, selectedTotal }: LeadQualificationModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    idea: "",
    timeline: "",
    budget: "",
    stage: "",
    team: "",
    priority: "",
  })

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit form
      console.log("Form submitted:", formData)
      onClose()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Let's Build Your MVP</DialogTitle>
          <div className="flex items-center space-x-2 mt-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  index <= currentStep ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </DialogHeader>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="py-6"
          >
            <h3 className="text-xl font-semibold mb-6">{steps[currentStep].title}</h3>

            {currentStep === 0 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => updateFormData("company", e.target.value)}
                    placeholder="Your company name"
                  />
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="idea">Project Idea *</Label>
                  <Textarea
                    id="idea"
                    value={formData.idea}
                    onChange={(e) => updateFormData("idea", e.target.value)}
                    placeholder="Describe your project in a few sentences..."
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => updateFormData("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (2-4 weeks)</SelectItem>
                        <SelectItem value="month">1-2 months</SelectItem>
                        <SelectItem value="quarter">3+ months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => updateFormData("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2k-5k">$2k - $5k</SelectItem>
                        <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                        <SelectItem value="10k+">$10k+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">What stage is your project?</Label>
                  <RadioGroup
                    value={formData.stage}
                    onValueChange={(value: string) => updateFormData("stage", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="idea" id="idea" />
                      <Label htmlFor="idea">Just an idea - need validation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="validated" id="validated" />
                      <Label htmlFor="validated">Validated concept - ready to build</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="existing" id="existing" />
                      <Label htmlFor="existing">Have existing product - need improvements</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-medium">Do you have a technical team?</Label>
                  <RadioGroup
                    value={formData.team}
                    onValueChange={(value: string) => updateFormData("team", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="none" />
                      <Label htmlFor="none">No technical team</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="some" id="some" />
                      <Label htmlFor="some">Some technical knowledge</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="full" id="full" />
                      <Label htmlFor="full">Full technical team</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center pt-6 border-t">
          <div className="text-sm text-muted-foreground">
            Selected package: <span className="font-semibold text-primary">${selectedTotal.toLocaleString()}</span>
          </div>
          <div className="flex space-x-3">
            {currentStep > 0 && (
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <Button onClick={handleNext}>
              {currentStep === steps.length - 1 ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Submit
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
