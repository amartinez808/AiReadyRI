"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  headline: string;
  subheading: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  trustLine?: string;
}

export function Hero({
  headline,
  subheading,
  primaryCTA,
  secondaryCTA,
  trustLine,
}: HeroProps) {
  return (
    <section className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="text-foreground">{headline}</h1>
        <p className="mx-auto mt-6 max-w-2xl">{subheading}</p>

        {(primaryCTA || secondaryCTA) && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCTA && (
              <Button asChild size="lg">
                <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
              </Button>
            )}
            {secondaryCTA && (
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        )}

        {trustLine && (
          <p className="mt-8 text-sm text-muted-foreground">{trustLine}</p>
        )}
      </motion.div>
    </section>
  );
}
