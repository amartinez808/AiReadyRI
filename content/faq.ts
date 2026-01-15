export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How is SIGNAL different from other agencies?",
    answer: "We're engineers and growth operators, not a traditional agency. Every decision is driven by conversion data, not subjective design preferences. We build systems that compound, not one-off campaigns. And we only take on projects where we're confident we can move the metrics that matter."
  },
  {
    question: "What's your typical project timeline?",
    answer: "Depends on scope. A focused Sprint is 2 weeks. A full website Build typically takes 4-6 weeks from kickoff to launch. Retainer work is ongoing with monthly cycles. We're fast because we eliminate approval theater and focus on outcomes, not process."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with both, but the fit matters more than company stage. Best fits: you have product-market fit (or close to it), you're spending money on acquisition, and you need conversion infrastructure to scale efficiently. If you're pre-revenue or still figuring out positioning, we're probably not the right fit yet."
  },
  {
    question: "What if I just need a simple website?",
    answer: "If 'simple' means a 5-page brochure site with no conversion goals, we're not the right partner. Our work is conversion-focused. But if 'simple' means clean, fast, and optimized to turn visitors into customers—then yes, we can help."
  },
  {
    question: "Do you offer payment plans?",
    answer: "For Build projects, we typically structure payments as 50% upfront, 50% at launch. Retainers are month-to-month with a 3-month minimum commitment. We're flexible with the right partners."
  },
  {
    question: "What happens after the project launches?",
    answer: "All Build projects include 2 weeks of post-launch support for bugs and adjustments. After that, many clients move to a Retainer for ongoing optimization, A/B testing, and continuous improvement. We also offer one-time Sprint projects for tactical work."
  }
];
