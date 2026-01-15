"use client";

import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          <div className="text-6xl font-bold text-primary/20">
            {step.number}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
