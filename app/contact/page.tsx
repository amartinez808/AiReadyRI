"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Calendar, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you'd send this to an API route
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-foreground">Let's Talk</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Book a 30-minute strategy call to discuss your goals. No sales pitch, just an honest conversation about whether we can help.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="rounded-lg border border-primary bg-primary/5 p-8 text-center">
                  <h3 className="mb-4 text-2xl font-semibold text-foreground">
                    Thanks for reaching out!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll review your message and get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="mt-2"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="mt-2"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="mt-2"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <Label htmlFor="budget">Budget Range *</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => {
                        setFormData((prev) => ({ ...prev, budget: value }));
                        if (errors.budget) {
                          setErrors((prev) => ({ ...prev, budget: "" }));
                        }
                      }}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10k</SelectItem>
                        <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                        <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                        <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                        <SelectItem value="100k-plus">$100k+</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.budget && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.budget}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Tell us about your project *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What are you looking to build? What are your goals?"
                      rows={6}
                      className="mt-2"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-xl font-semibold text-foreground">
                  Other Ways to Connect
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <a
                        href="mailto:hello@signal.agency"
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        hello@signal.agency
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Calendar className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">
                        Book Directly
                      </div>
                      <a
                        href="https://calendly.com/signal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        Schedule a call on Calendly
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <p className="text-sm text-muted-foreground">
                        Remote-first, US-based
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-3 font-semibold text-foreground">
                  What to expect:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• We'll respond within 24 hours</li>
                  <li>• 30-minute discovery call (no pitch)</li>
                  <li>• Honest assessment of fit</li>
                  <li>• Custom proposal if we're aligned</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
