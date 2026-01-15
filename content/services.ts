export interface Service {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  timeline: string;
  bestFor: string[];
  subServices: {
    name: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    id: "conversion-websites",
    title: "Conversion Websites",
    description: "High-performance websites engineered for measurable outcomes, not just aesthetics.",
    outcomes: [
      "Measurable lift in conversion rates",
      "Faster page loads and better Core Web Vitals",
      "Clear tracking and attribution",
      "Scalable technical foundation"
    ],
    deliverables: [
      "Conversion-focused strategy and wireframes",
      "Custom UI/UX design system",
      "Production-ready codebase (Next.js/React)",
      "Performance optimization",
      "Analytics and tracking setup",
      "CMS integration (if needed)"
    ],
    timeline: "4-8 weeks",
    bestFor: [
      "B2B companies that need to generate qualified leads",
      "SaaS products with complex value propositions",
      "E-commerce brands focused on growth",
      "Agencies that need to showcase results"
    ],
    subServices: [
      {
        name: "Conversion Strategy",
        description: "Research-backed positioning, messaging, and funnel architecture"
      },
      {
        name: "Copywriting",
        description: "Outcome-driven copy that speaks to intent and removes friction"
      },
      {
        name: "UI/UX Design",
        description: "Interface design that guides users toward action"
      },
      {
        name: "Performance Engineering",
        description: "Sub-second load times, optimized for Core Web Vitals"
      }
    ]
  },
  {
    id: "growth-systems",
    title: "Growth Systems",
    description: "Scalable acquisition and conversion infrastructure that compounds over time.",
    outcomes: [
      "Predictable lead generation",
      "Higher conversion at each funnel stage",
      "Reduced customer acquisition cost",
      "Automated lead qualification"
    ],
    deliverables: [
      "Landing page suite (multiple variants)",
      "Lead capture and qualification system",
      "Email/SMS nurture sequences",
      "A/B testing infrastructure",
      "Analytics dashboards and reporting",
      "Integration with your CRM/tools"
    ],
    timeline: "3-6 weeks",
    bestFor: [
      "Companies running paid acquisition campaigns",
      "Sales teams that need qualified pipeline",
      "Businesses with high-intent traffic but low conversion",
      "Brands scaling across multiple channels"
    ],
    subServices: [
      {
        name: "Funnel Architecture",
        description: "Multi-step conversion paths optimized for each traffic source"
      },
      {
        name: "Landing Page Development",
        description: "High-converting pages designed for specific campaigns"
      },
      {
        name: "Lead Capture Systems",
        description: "Forms, quizzes, and interactive elements that qualify intent"
      },
      {
        name: "Analytics & Attribution",
        description: "Track what works, kill what doesn't, double down on winners"
      }
    ]
  },
  {
    id: "automation-layer",
    title: "Automation Layer",
    description: "Intelligent systems that scale your operations without scaling headcount.",
    outcomes: [
      "Reduced manual work and human error",
      "Faster response times",
      "Better data flow between systems",
      "More capacity without more people"
    ],
    deliverables: [
      "CRM integration and automation setup",
      "Automated follow-up sequences",
      "System integrations (API connections)",
      "AI-powered chatbots and assistants",
      "Workflow automation (Zapier, Make, custom)",
      "Documentation and team training"
    ],
    timeline: "2-5 weeks",
    bestFor: [
      "Teams spending hours on repetitive tasks",
      "Companies with disconnected tools and data",
      "Sales orgs that struggle with follow-up",
      "Businesses ready to scale operations"
    ],
    subServices: [
      {
        name: "CRM Automation",
        description: "Automated lead routing, scoring, and nurture workflows"
      },
      {
        name: "Follow-up Systems",
        description: "Triggered emails, SMS, and notifications based on behavior"
      },
      {
        name: "System Integrations",
        description: "Connect your tools so data flows automatically"
      },
      {
        name: "AI Assistance",
        description: "Chatbots, lead qualification, and smart routing"
      }
    ]
  }
];

export interface EngagementModel {
  id: string;
  name: string;
  duration: string;
  description: string;
  bestFor: string;
  includes: string[];
  startingAt: string;
}

export const engagementModels: EngagementModel[] = [
  {
    id: "sprint",
    name: "Sprint",
    duration: "2 weeks",
    description: "Focused execution on a single, well-defined objective. Perfect for quick wins and tactical improvements.",
    bestFor: "Landing page builds, conversion audits, quick automation setups",
    includes: [
      "Defined scope and deliverables",
      "Daily progress updates",
      "Direct Slack access",
      "One round of revisions included"
    ],
    startingAt: "$8,500"
  },
  {
    id: "build",
    name: "Build",
    duration: "4-6 weeks",
    description: "Comprehensive project with strategy, design, development, and launch. End-to-end execution.",
    bestFor: "Full website builds, multi-page funnels, integrated automation systems",
    includes: [
      "Discovery and strategy phase",
      "Design + development + deployment",
      "Two rounds of revisions",
      "Post-launch support (2 weeks)",
      "Training and documentation"
    ],
    startingAt: "$24,000"
  },
  {
    id: "retainer",
    name: "Retainer",
    duration: "Ongoing (monthly)",
    description: "Continuous optimization, experimentation, and growth support. Your extended digital team.",
    bestFor: "Ongoing optimization, A/B testing, continuous improvement, growth support",
    includes: [
      "Dedicated monthly capacity",
      "Proactive recommendations",
      "Monthly performance reviews",
      "Priority support and response",
      "Flexible scope within capacity"
    ],
    startingAt: "$12,000/mo"
  }
];

export function getService(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
