import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { SectionHeader } from "@/components/sections/section-header";
import { aboutContent } from "@/content/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - SIGNAL",
  description: "We build digital systems that convert. Meet the team behind SIGNAL.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <Hero
        headline={aboutContent.hero.headline}
        subheading={aboutContent.hero.subheading}
        primaryCTA={{
          text: "Work With Us",
          href: "/contact",
        }}
      />

      {/* Story */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-foreground">
            {aboutContent.story.title}
          </h2>
          <div className="space-y-6">
            {aboutContent.story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-6 py-20">
          <SectionHeader
            title="Our Principles"
            centered
            className="mx-auto mb-16"
          />

          <div className="grid gap-8 md:grid-cols-2">
            {aboutContent.principles.map((principle, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-background p-8"
              >
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-foreground">{aboutContent.team.title}</h2>
          <p className="text-lg text-muted-foreground">
            {aboutContent.team.description}
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-6 py-20">
          <SectionHeader
            title={aboutContent.clients.title}
            centered
            className="mx-auto mb-16"
          />

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-3">
            {aboutContent.clients.logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-lg border border-border bg-background p-6"
              >
                <span className="text-lg font-semibold text-muted-foreground">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's Work Together"
        description="If you're serious about growth and ready to invest in systems that convert, let's talk."
        primaryCTA={{
          text: "Book a Strategy Call",
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
