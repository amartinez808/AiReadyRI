import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/sections/cta-section";
import { getCaseStudy, caseStudies } from "@/content/caseStudies";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found - AI Ready Rhode Island",
    };
  }

  return {
    title: `${caseStudy.title} - AI Ready Rhode Island`,
    description: caseStudy.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>

        {/* Header */}
        <div className="mt-8 mb-16">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{caseStudy.client}</span>
            <span>•</span>
            <span>{caseStudy.industry}</span>
            <span>•</span>
            <span>{caseStudy.year}</span>
          </div>

          <h1 className="mb-6 text-foreground">{caseStudy.title}</h1>
          <p className="max-w-3xl text-xl text-muted-foreground">
            {caseStudy.description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Outcomes Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudy.outcomes.map((outcome) => (
            <div
              key={outcome.metric}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-2 text-4xl font-bold text-primary">
                {outcome.value}
              </div>
              <div className="mb-1 font-semibold text-foreground">
                {outcome.metric}
              </div>
              <div className="text-sm text-muted-foreground">
                {outcome.description}
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Problem */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              The Problem
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {caseStudy.problem}
            </p>
          </section>

          {/* Approach */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Our Approach
            </h2>
            <ul className="space-y-4">
              {caseStudy.approach.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-lg leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Solution */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              The Solution
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {caseStudy.solution}
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="mb-6 text-2xl font-bold text-foreground">
            Want similar results for your business?
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/work">View More Work</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
