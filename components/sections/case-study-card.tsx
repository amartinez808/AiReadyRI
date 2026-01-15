"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/content/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${caseStudy.slug}`}>
        <Card className="group h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]">
          <CardContent className="p-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span>{caseStudy.client}</span>
              <span>•</span>
              <span>{caseStudy.industry}</span>
            </div>

            <h3 className="mb-3 text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {caseStudy.title}
            </h3>

            <p className="mb-6 text-muted-foreground">
              {caseStudy.description}
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-white/8 pt-6">
              {caseStudy.outcomes.slice(0, 2).map((outcome) => (
                <div key={outcome.metric}>
                  <div className="text-2xl font-bold text-primary">
                    {outcome.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {outcome.metric}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
              View Case Study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
