import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { caseStudies } from "@/content/caseStudies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - SIGNAL",
  description: "Case studies and results from our conversion-focused projects.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <Hero
        headline="Work That Moves the Needle"
        subheading="Real projects. Real metrics. Real business impact."
        primaryCTA={{
          text: "Book a Strategy Call",
          href: "/contact",
        }}
      />

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </section>

      <CTASection
        headline="Want Results Like These?"
        description="Let's discuss how we can help you achieve similar growth."
        primaryCTA={{
          text: "Book a Strategy Call",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "Explore Services",
          href: "/services",
        }}
      />

      <Footer />
    </>
  );
}
