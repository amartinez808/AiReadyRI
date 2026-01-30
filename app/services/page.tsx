import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { services, engagementModels } from "@/content/services";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Clock, Target, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - AI Ready Rhode Island",
  description: "AI strategy, automation workflows, and training for Rhode Island organizations.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <Hero
        headline="AI Consulting Services"
        subheading="End-to-end AI consulting to help your organization adopt, automate, and thrive with artificial intelligence."
        primaryCTA={{
          text: "Book a Consultation",
          href: "/contact",
        }}
      />

      {/* Services */}
      <section className="container mx-auto px-6 py-20">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id}>
              <div className="mb-12">
                <h2 className="mb-4 text-foreground">{service.title}</h2>
                <p className="max-w-3xl text-lg text-muted-foreground">
                  {service.description}
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Outcomes */}
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Outcomes</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Deliverables */}
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Deliverables</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {deliverable}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sub-services */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {service.subServices.map((sub) => (
                  <div
                    key={sub.name}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <h4 className="mb-2 font-semibold text-foreground">
                      {sub.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {sub.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Meta info */}
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Timeline: {service.timeline}</span>
                </div>
              </div>

              {/* Best for */}
              <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-6">
                <h4 className="mb-3 font-semibold text-foreground">
                  Best for:
                </h4>
                <ul className="grid gap-2 md:grid-cols-2">
                  {service.bestFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-6 py-20">
          <SectionHeader
            title="Engagement Models"
            description="Flexible options to match your timeline and goals."
            centered
            className="mx-auto mb-16"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {engagementModels.map((model) => (
              <Card key={model.id} className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {model.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {model.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {model.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-3xl font-bold text-primary">
                    {model.startingAt}
                  </div>

                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      Best for:
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {model.bestFor}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {model.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Get Started?"
        description="Book a free consultation to discuss your organization's AI goals and how we can help."
        primaryCTA={{
          text: "Book a Consultation",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Our Work",
          href: "/work",
        }}
      />

      <Footer />
    </>
  );
}
