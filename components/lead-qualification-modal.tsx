"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Toaster, toast } from "sonner";
import { totalmem } from "os";
import useEmblaCarousel from "embla-carousel-react";

interface LeadQualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTotal: number;
  selectedModules: string[];
}

const countryPlaceholders: Record<string, string> = {
  // North America
  "+1": "612-345-6789", // US/Canada

  // Europe
  "+44": "7123 456789", // UK
  "+33": "6 12 34 56 78", // France
  "+49": "1512 3456789", // Germany
  "+34": "612 34 56 78", // Spain
  "+39": "312 345 6789", // Italy
  "+31": "6 12345678", // Netherlands
  "+32": "470 12 34 56", // Belgium
  "+46": "70 123 45 67", // Sweden
  "+47": "901 23 456", // Norway
  "+358": "40 123 4567", // Finland
  "+45": "12 34 56 78", // Denmark
  "+351": "912 345 678", // Portugal
  "+41": "79 123 45 67", // Switzerland
  "+43": "660 1234567", // Austria
  "+353": "87 123 4567", // Ireland
  "+48": "512 345 678", // Poland
  "+420": "601 123 456", // Czech Republic
  "+421": "912 345 678", // Slovakia
  "+36": "30 123 4567", // Hungary
  "+40": "712 345 678", // Romania
  "+359": "88 123 4567", // Bulgaria
  "+30": "691 234 5678", // Greece
  "+386": "31 234 567", // Slovenia
  "+385": "91 123 4567", // Croatia
  "+371": "21 234 567", // Latvia
  "+370": "612 34567", // Lithuania
  "+372": "5123 4567", // Estonia

  // MENA
  "+971": "50 123 4567", // UAE
  "+974": "33X XXXX", // Qatar
  "+966": "5X XXX XXXX", // Saudi Arabia
  "+965": "500 12345", // Kuwait
  "+973": "3600 1234", // Bahrain
  "+968": "9123 4567", // Oman
};

const countryCodes = [
  {
    group: "North America",
    codes: [{ label: "🇺🇸🇨🇦 +1 (US/Canada)", value: "+1" }],
  },
  {
    group: "Europe",
    codes: [
      { label: "🇬🇧 +44 (UK)", value: "+44" },
      { label: "🇫🇷 +33 (France)", value: "+33" },
      { label: "🇩🇪 +49 (Germany)", value: "+49" },
      { label: "🇪🇸 +34 (Spain)", value: "+34" },
      { label: "🇮🇹 +39 (Italy)", value: "+39" },
      { label: "🇳🇱 +31 (Netherlands)", value: "+31" },
      { label: "🇧🇪 +32 (Belgium)", value: "+32" },
      { label: "🇸🇪 +46 (Sweden)", value: "+46" },
      { label: "🇳🇴 +47 (Norway)", value: "+47" },
      { label: "🇫🇮 +358 (Finland)", value: "+358" },
      { label: "🇩🇰 +45 (Denmark)", value: "+45" },
      { label: "🇵🇹 +351 (Portugal)", value: "+351" },
      { label: "🇨🇭 +41 (Switzerland)", value: "+41" },
      { label: "🇦🇹 +43 (Austria)", value: "+43" },
      { label: "🇮🇪 +353 (Ireland)", value: "+353" },
      { label: "🇵🇱 +48 (Poland)", value: "+48" },
      { label: "🇨🇿 +420 (Czech Republic)", value: "+420" },
      { label: "🇸🇰 +421 (Slovakia)", value: "+421" },
      { label: "🇭🇺 +36 (Hungary)", value: "+36" },
      { label: "🇷🇴 +40 (Romania)", value: "+40" },
      { label: "🇧🇬 +359 (Bulgaria)", value: "+359" },
      { label: "🇬🇷 +30 (Greece)", value: "+30" },
      { label: "🇸🇮 +386 (Slovenia)", value: "+386" },
      { label: "🇭🇷 +385 (Croatia)", value: "+385" },
      { label: "🇱🇻 +371 (Latvia)", value: "+371" },
      { label: "🇱🇹 +370 (Lithuania)", value: "+370" },
      { label: "🇪🇪 +372 (Estonia)", value: "+372" },
    ],
  },
  {
    group: "MENA (Gulf & Levant)",
    codes: [
      { label: "🇦🇪 +971 (UAE)", value: "+971" },
      { label: "🇶🇦 +974 (Qatar)", value: "+974" },
      { label: "🇸🇦 +966 (Saudi Arabia)", value: "+966" },
      { label: "🇰🇼 +965 (Kuwait)", value: "+965" },
      { label: "🇧🇭 +973 (Bahrain)", value: "+973" },
      { label: "🇴🇲 +968 (Oman)", value: "+968" },
    ],
  },
];

const steps = [
  {
    title: "Tell us about your project",
    fields: ["name", "email", "company"],
  },
  {
    title: "Project details",
    fields: ["idea", "timeline"],
  },
  {
    title: "Perfect fit check",
    fields: ["stage", "team", "priority"],
  },
];

type FormField =
  | "name"
  | "email"
  | "company"
  | "idea"
  | "timeline"
  | "budget"
  | "stage"
  | "team"
  | "priority"
  | "whatsapp"
  | "countryCode";
type FormData = Record<FormField, string>;

export function LeadQualificationModal({
  isOpen,
  onClose,
  selectedTotal,
  selectedModules,
}: LeadQualificationModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "+1", // Default to Morocco
    whatsapp: "", // Optional field for WhatsApp
    company: "",
    idea: "",
    timeline: "",
    budget: selectedTotal.toLocaleString(),
    stage: "",
    team: "",
    priority: "",
  });

  const phonePlaceholder =
    countryPlaceholders[formData.countryCode] || "Enter phone number";
  const selectedCountryCode = formData.countryCode || "+1"; // Default to +1 if not set
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Fetch data or perform side effects here
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      // Validate current step
      setSuccess(false);
      const currentFields = steps[currentStep].fields as FormField[];
      console.log("Validating fields:", currentFields);
      const isValid = currentFields.every((field) => {
        const value = formData[field];
        if (field === "email") {
          // Simple email validation
          return value && /\S+@\S+\.\S+/.test(value);
        }
        return value && value.trim() !== "";
      });
      console.log("Is valid:", isValid);
      if (!isValid) {
        toast.error("Please fill in all required fields correctly.");
        return;
      }
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your API
      // For example:
      setLoading(true);
      setError("");
      setSuccess(false);
      fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services: selectedModules, // array of module ids/names
          budget: selectedTotal.toLocaleString(),
        }),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Lead submitted successfully");
            toast.success("Thank you! Your lead has been submitted.");
            setSuccess(true);
            setFormData({
              name: "",
              email: "",
              countryCode: "+1", // Reset to default country code
              whatsapp: selectedCountryCode + "", // Reset WhatsApp field
              company: "",
              idea: "",
              timeline: "",
              budget: selectedTotal.toLocaleString(),
              stage: "",
              team: "",
              priority: "",
            });
            setCurrentStep(0);
            onClose();
          } else {
            toast.error("Failed to submit lead. Please try again later.");
            console.error("Error submitting lead");
            response.json().then((data) => {
              setError(data.error || "Submission failed");
            });
          }
        })
        .catch((error) => {
          toast.error("Network error. Please check your connection.");
          console.error("Network error:", error);
          setError("Network error");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <Toaster position="top-center" richColors className="z-10" />
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
            <h3 className="text-xl font-semibold mb-6">
              {steps[currentStep].title}
            </h3>

            {currentStep === 0 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <div className="flex gap-2">
                    <div className="w-34">
                      <Select
                        value={formData.countryCode}
                        onValueChange={(value) =>
                          updateFormData("countryCode", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select country code" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map(({ group, codes }) => (
                            <SelectGroup key={group}>
                              <SelectLabel>{group}</SelectLabel>
                              {codes.map(({ label, value }) => (
                                <SelectItem key={value} value={value}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder={phonePlaceholder}
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      className="flex-1 w-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    required
                  />
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="idea">Project Idea *</Label>
                  <Textarea
                    id="idea"
                    name="idea"
                    value={formData.idea}
                    onChange={handleChange}
                    placeholder="Describe your project in detail (50 words or more)..."
                    rows={5}
                    required
                    minLength={50}
                  />
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    {formData.idea
                      .split(" ")
                      .filter((word) => word.trim().length > 0).length >= 50 ? (
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Good job!</span>
                        <span className="text-sm font-medium">
                          {
                            formData.idea
                              .split(" ")
                              .filter((word) => word.trim().length > 0).length
                          }{" "}
                          Words
                        </span>
                      </div>
                    ) : (
                      <span>
                        {
                          formData.idea
                            .split(" ")
                            .filter((word) => word.trim().length > 0).length
                        }{" "}
                        / 50 words minimum
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Timeline</Label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) =>
                        updateFormData("timeline", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (2-4 weeks)</SelectItem>
                        <SelectItem value="month">1-2 months</SelectItem>
                        <SelectItem value="quarter">3+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Budget</Label>
                    <Input
                      id="budget"
                      name="budget"
                      value={`$${selectedTotal.toLocaleString()}`}
                      disabled
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-base font-medium">
                    What stage is your project?
                  </Label>
                  <RadioGroup
                    value={formData.stage}
                    onValueChange={(value: string) =>
                      updateFormData("stage", value)
                    }
                    className="mt-2"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="idea" id="idea" />
                      <Label htmlFor="idea">
                        Just an idea - need validation
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="validated" id="validated" />
                      <Label htmlFor="validated">
                        Validated concept - ready to build
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="existing" id="existing" />
                      <Label htmlFor="existing">
                        Have existing product - need improvements
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label className="text-base font-medium">
                    Do you have a technical team?
                  </Label>
                  <RadioGroup
                    value={formData.team}
                    onValueChange={(value: string) =>
                      updateFormData("team", value)
                    }
                    className="mt-2"
                    required
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
            Selected package:{" "}
            <span className="font-semibold text-primary">
              ${selectedTotal.toLocaleString()}
            </span>
          </div>
          <div className="flex space-x-3">
            {currentStep > 0 && (
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <Button onClick={handleNext} disabled={loading}>
              {loading ? (
                "Submitting..."
              ) : currentStep === steps.length - 1 ? (
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

        {error && <div className="text-red-500 mt-4">{error}</div>}
        {success !== false && (
          <div className="text-green-500 mt-4">
            Thank you! We'll be in touch.
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
