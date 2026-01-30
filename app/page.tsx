import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/sections/section-header";
import { ServiceCard } from "@/components/sections/service-card";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { CTASection } from "@/components/sections/cta-section";
import { Stats } from "@/components/sections/stats";
import { AnimatedGrid } from "@/components/background/animated-grid";
import { homeContent } from "@/content/home";
import { getFeaturedCaseStudies } from "@/content/caseStudies";
import { testimonials } from "@/content/testimonials";
import { faqs } from "@/content/faq";
import { Globe, TrendingUp, Zap, Check, X } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const featuredCases = getFeaturedCaseStudies(3);

  const iconMap = {
    globe: <Globe className="h-6 w-6" />,
    "trending-up": <TrendingUp className="h-6 w-6" />,
    zap: <Zap className="h-6 w-6" />,
  };

  return (
    <>
      <AnimatedGrid />
      <Navbar />

      {/* Hero Section */}
      <Hero
        headline={homeContent.hero.headline}
        subheading={homeContent.hero.subheading}
        primaryCTA={{
          text: homeContent.hero.primaryCTA,
          href: "/contact",
        }}
        secondaryCTA={{
          text: homeContent.hero.secondaryCTA,
          href: "/work",
        }}
        trustLine={homeContent.hero.trustLine}
      />

      {/* What We Build Section */}
      <section className="container mx-auto px-6 py-20">
        <SectionHeader
          title="What We Build"
          description="Three pillars of modern digital growth infrastructure."
          centered
          className="mx-auto"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {homeContent.pillars.map((pillar, index) => (
            <ServiceCard
              key={pillar.title}
              icon={iconMap[pillar.icon as keyof typeof iconMap]}
              title={pillar.title}
              description={pillar.description}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-6 py-20">
          <SectionHeader
            title={homeContent.process.title}
            centered
            className="mx-auto"
          />

          <div className="mt-16">
            <ProcessSteps steps={homeContent.process.steps} />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-16 flex items-end justify-between">
          <SectionHeader
            title="Featured Work"
            description="Recent projects that moved the needle."
          />
          <Link
            href="/work"
            className="hidden text-sm font-medium text-primary hover:underline md:block"
          >
            View All Work →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCases.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/work"
            className="text-sm font-medium text-primary hover:underline"
          >
            View All Work →
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-6 py-20">
          <Stats stats={homeContent.stats} />
        </div>
      </section>

      {/* Services Snapshot Section */}
      <section className="container mx-auto px-6 py-20">
        <SectionHeader
          title="Services"
          description="Conversion-focused solutions for modern businesses."
          centered
          className="mx-auto"
        />

        <div className="mt-16 space-y-4 text-center">
          <p className="text-lg text-muted-foreground">
            Conversion Websites • Growth Systems • Automation Layer
          </p>
          <Link
            href="/services"
            className="inline-block text-sm font-medium text-primary hover:underline"
          >
            Explore Services →
          </Link>
        </div>
      </section>

      {/* Signal vs Noise Section */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-6 py-20">
          <SectionHeader
            title={homeContent.signalVsNoise.title}
            centered
            className="mx-auto mb-16"
          />

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Signal Column */}
            <div className="rounded-lg border-2 border-primary bg-background p-8">
              <div className="mb-6 flex items-center gap-2">
                <Check className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Signal
                </h3>
              </div>
              <ul className="space-y-4">
                {homeContent.signalVsNoise.signal.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Noise Column */}
            <div className="rounded-lg border border-border bg-background p-8 opacity-60">
              <div className="mb-6 flex items-center gap-2">
                <X className="h-6 w-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-muted-foreground">
                  Noise
                </h3>
              </div>
              <ul className="space-y-4">
                {homeContent.signalVsNoise.noise.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="h-5 w-5 shrink-0 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-20">
        <SectionHeader
          title="What Clients Say"
          centered
          className="mx-auto mb-16"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-6 py-20">
          <SectionHeader
            title="Frequently Asked Questions"
            centered
            className="mx-auto mb-16"
          />

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection
        headline="Ready to Leverage AI for Your Organization?"
        description="Let's talk about how AI can help your team work smarter and do more."
        primaryCTA={{
          text: "Book a Consultation",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "See Our Work",
          href: "/work",
        }}
      />

      <Footer />
    </>
  );
}
