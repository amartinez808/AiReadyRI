export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  thumbnail: string;
  description: string;
  problem: string;
  approach: string[];
  solution: string;
  outcomes: {
    metric: string;
    value: string;
    description: string;
  }[];
  tags: string[];
  year: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-conversion-optimization",
    title: "Conversion System Overhaul",
    client: "Horizon Financial",
    industry: "FinTech",
    thumbnail: "/work/fintech.jpg",
    description: "Complete redesign of their digital acquisition funnel, resulting in 3x qualified leads.",
    problem: "Horizon Financial was spending heavily on paid acquisition but converting less than 2% of traffic. Their product sign-up flow had 7 steps and a 78% drop-off rate.",
    approach: [
      "Conducted conversion research with session recordings and user interviews",
      "Mapped friction points across the entire funnel",
      "Redesigned signup flow from 7 steps to 3",
      "Implemented real-time validation and progress indicators",
      "Built custom analytics dashboard to track micro-conversions"
    ],
    solution: "We rebuilt their acquisition system from scratch: a new high-converting landing page, streamlined 3-step signup, automated follow-up sequences, and performance tracking infrastructure.",
    outcomes: [
      {
        metric: "Conversion Rate",
        value: "5.8%",
        description: "Up from 1.9% baseline"
      },
      {
        metric: "Form Completion",
        value: "67%",
        description: "Previously 22%"
      },
      {
        metric: "Time to Convert",
        value: "2.3 min",
        description: "Down from 8.7 min"
      },
      {
        metric: "Cost per Lead",
        value: "-61%",
        description: "Reduced acquisition cost"
      }
    ],
    tags: ["Conversion", "FinTech", "UX", "Analytics"],
    year: "2025"
  },
  {
    slug: "saas-growth-automation",
    title: "AI-Powered Growth Engine",
    client: "Datawise",
    industry: "B2B SaaS",
    thumbnail: "/work/saas.jpg",
    description: "Built an automated lead qualification and nurture system that scales without headcount.",
    problem: "Datawise had strong inbound interest but couldn't scale their sales process. 60% of leads were never contacted, and the team was drowning in manual qualification work.",
    approach: [
      "Implemented lead scoring based on behavioral and firmographic data",
      "Built AI-powered qualification chatbot for initial screening",
      "Created personalized nurture sequences for each segment",
      "Integrated CRM with product analytics for intent signals",
      "Automated meeting booking and calendar coordination"
    ],
    solution: "An end-to-end automated growth system: intelligent lead capture, AI qualification, segment-specific nurture campaigns, automated booking, and closed-loop reporting.",
    outcomes: [
      {
        metric: "Qualified Leads",
        value: "+240%",
        description: "More opportunities in pipeline"
      },
      {
        metric: "Response Time",
        value: "< 2 min",
        description: "Previously 24+ hours"
      },
      {
        metric: "Sales Efficiency",
        value: "3.2x",
        description: "More demos per rep"
      },
      {
        metric: "Pipeline Value",
        value: "$2.4M",
        description: "Added in 90 days"
      }
    ],
    tags: ["Automation", "SaaS", "AI", "Lead Gen"],
    year: "2025"
  },
  {
    slug: "ecommerce-performance-rebuild",
    title: "High-Performance Commerce Platform",
    client: "Apex Outdoor",
    industry: "E-commerce",
    thumbnail: "/work/ecommerce.jpg",
    description: "Complete platform rebuild focused on speed, mobile experience, and conversion.",
    problem: "Apex's legacy e-commerce site was slow (4.2s load time), had a 68% mobile bounce rate, and was built on outdated tech that made updates expensive and slow.",
    approach: [
      "Rebuilt on modern stack: Next.js, headless CMS, Shopify backend",
      "Optimized for Core Web Vitals and mobile performance",
      "Implemented progressive image loading and predictive prefetching",
      "Redesigned checkout flow with one-click purchase options",
      "Added personalization engine for product recommendations"
    ],
    solution: "A blazing-fast, mobile-first commerce experience with sub-second page loads, smart product discovery, frictionless checkout, and real-time personalization.",
    outcomes: [
      {
        metric: "Page Speed",
        value: "0.8s",
        description: "Load time (was 4.2s)"
      },
      {
        metric: "Mobile Conv.",
        value: "+89%",
        description: "Mobile conversion rate"
      },
      {
        metric: "Revenue",
        value: "+156%",
        description: "YoY growth"
      },
      {
        metric: "Bounce Rate",
        value: "32%",
        description: "Down from 68%"
      }
    ],
    tags: ["E-commerce", "Performance", "Next.js", "Mobile"],
    year: "2024"
  },
  {
    slug: "healthcare-patient-acquisition",
    title: "Digital Patient Acquisition System",
    client: "Summit Health",
    industry: "Healthcare",
    thumbnail: "/work/healthcare.jpg",
    description: "Multi-location patient acquisition system with automated booking and follow-up.",
    problem: "Summit Health's 12 locations each had different booking systems, no central tracking, and relied on phone calls. Online booking rate was under 10%.",
    approach: [
      "Built unified booking platform across all locations",
      "Implemented smart availability and provider matching",
      "Created location-specific landing pages optimized for local SEO",
      "Set up automated SMS and email confirmation/reminders",
      "Integrated with existing EHR and practice management systems"
    ],
    solution: "A comprehensive patient acquisition platform: SEO-optimized location pages, intelligent booking system, automated communications, and centralized analytics across all locations.",
    outcomes: [
      {
        metric: "Online Bookings",
        value: "64%",
        description: "Of all appointments"
      },
      {
        metric: "No-Shows",
        value: "-47%",
        description: "With automated reminders"
      },
      {
        metric: "New Patients",
        value: "+132%",
        description: "Per location average"
      },
      {
        metric: "Admin Time",
        value: "-8hrs/day",
        description: "Saved per location"
      }
    ],
    tags: ["Healthcare", "Booking", "Local SEO", "Automation"],
    year: "2024"
  }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getFeaturedCaseStudies(count: number = 3): CaseStudy[] {
  return caseStudies.slice(0, count);
}
