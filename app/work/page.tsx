import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { caseStudies } from "@/content/caseStudies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - AI Ready Rhode Island",
  description: "Case studies and results from our AI consulting and automation engagements across Rhode Island.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <Hero
        headline="Our Work in Action"
        subheading="Real engagements. Real results. See how we've helped Rhode Island organizations leverage AI."
        primaryCTA={{
          text: "Book a Consultation",
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
        description="Let's discuss how AI consulting and automation can help your organization."
        primaryCTA={{
          text: "Book a Consultation",
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
