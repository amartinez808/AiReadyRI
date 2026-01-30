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
    id: "ai-strategy",
    title: "AI Strategy & Assessment",
    description: "Evaluate your organization's AI readiness and build a clear roadmap for adoption that aligns with your goals.",
    outcomes: [
      "Clear understanding of AI opportunities in your operations",
      "Prioritized list of high-impact AI use cases",
      "Custom AI adoption roadmap with timeline",
      "Team readiness assessment and gap analysis"
    ],
    deliverables: [
      "Organizational AI readiness audit",
      "Workflow analysis and opportunity mapping",
      "Custom AI adoption roadmap",
      "ROI projections for recommended initiatives",
      "Executive summary and presentation",
      "Implementation priority matrix"
    ],
    timeline: "2-4 weeks",
    bestFor: [
      "Organizations exploring AI for the first time",
      "Nonprofits looking to do more with less",
      "Schools planning AI integration into operations or curriculum",
      "Government agencies modernizing services"
    ],
    subServices: [
      {
        name: "AI Readiness Audit",
        description: "Comprehensive assessment of your current workflows, tools, and team capabilities"
      },
      {
        name: "Opportunity Mapping",
        description: "Identify the highest-impact areas where AI can save time and improve outcomes"
      },
      {
        name: "Roadmap Development",
        description: "Phased implementation plan tailored to your budget and capacity"
      },
      {
        name: "Stakeholder Alignment",
        description: "Presentations and workshops to get leadership and staff on the same page"
      }
    ]
  },
  {
    id: "automation-workflows",
    title: "Automation Workflows",
    description: "Design and implement AI-powered automations that streamline your operations and free up your team for higher-value work.",
    outcomes: [
      "Reduced manual work and repetitive tasks",
      "Faster response times and processing",
      "Better data flow between systems",
      "More capacity without more headcount"
    ],
    deliverables: [
      "Custom AI workflow design and implementation",
      "Tool setup and configuration (ChatGPT, Claude, etc.)",
      "System integrations and API connections",
      "Automated reporting and notifications",
      "Documentation and standard operating procedures",
      "Team training on new workflows"
    ],
    timeline: "3-6 weeks",
    bestFor: [
      "Teams spending hours on repetitive administrative tasks",
      "Organizations with disconnected tools and manual data entry",
      "Nonprofits that need to stretch limited staff resources",
      "Schools automating communications, grading support, or reporting"
    ],
    subServices: [
      {
        name: "Workflow Design",
        description: "Map your current processes and design AI-enhanced alternatives"
      },
      {
        name: "Tool Implementation",
        description: "Set up and configure ChatGPT, Claude, Zapier, Make, and other AI tools"
      },
      {
        name: "System Integration",
        description: "Connect your existing tools so data flows automatically"
      },
      {
        name: "AI Assistants",
        description: "Custom chatbots, document processors, and smart automation agents"
      }
    ]
  },
  {
    id: "training-workshops",
    title: "Training & Workshops",
    description: "Hands-on AI training that meets your team where they are—from complete beginners to power users ready to build advanced workflows.",
    outcomes: [
      "Team confidence and competency with AI tools",
      "Practical skills they can use immediately",
      "Reduced fear and resistance to AI adoption",
      "Internal AI champions who can train others"
    ],
    deliverables: [
      "Custom training curriculum for your organization",
      "Live, hands-on workshop sessions",
      "Training materials and reference guides",
      "Practice exercises with real-world scenarios",
      "Post-training support and Q&A sessions",
      "Progress tracking and competency assessment"
    ],
    timeline: "1-4 weeks",
    bestFor: [
      "Organizations where staff are curious but unsure about AI",
      "Schools training teachers to use AI responsibly",
      "Nonprofits wanting to upskill their teams",
      "Businesses building internal AI capabilities"
    ],
    subServices: [
      {
        name: "AI Foundations",
        description: "Beginner-friendly introduction to AI tools like ChatGPT and Claude"
      },
      {
        name: "Prompt Engineering",
        description: "Learn to write effective prompts that get consistent, useful results"
      },
      {
        name: "Workflow Automation Training",
        description: "Hands-on training with Zapier, Make, and other automation platforms"
      },
      {
        name: "AI for Educators",
        description: "Responsible AI use in classroom settings, curriculum design, and student support"
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
    id: "assessment",
    name: "Assessment",
    duration: "1-2 weeks",
    description: "A focused AI readiness evaluation with actionable recommendations. The perfect starting point for any organization.",
    bestFor: "Organizations exploring AI, leadership alignment, quick wins identification",
    includes: [
      "AI readiness audit",
      "Opportunity assessment",
      "Executive summary with recommendations",
      "30-minute follow-up call"
    ],
    startingAt: "Contact us"
  },
  {
    id: "engagement",
    name: "Full Engagement",
    duration: "4-8 weeks",
    description: "Comprehensive consulting with strategy, implementation, and training. End-to-end AI transformation support.",
    bestFor: "AI roadmap development, workflow automation, team training programs",
    includes: [
      "Discovery and strategy phase",
      "Implementation and deployment",
      "Team training sessions",
      "Post-engagement support (2 weeks)",
      "Documentation and guides"
    ],
    startingAt: "Contact us"
  },
  {
    id: "ongoing",
    name: "Ongoing Partnership",
    duration: "Monthly",
    description: "Continuous AI support, optimization, and training. Your dedicated AI consulting partner.",
    bestFor: "Ongoing optimization, new workflow development, continuous team upskilling",
    includes: [
      "Dedicated monthly consulting hours",
      "Proactive AI opportunity identification",
      "Monthly progress reviews",
      "Priority support and response",
      "Flexible scope based on needs"
    ],
    startingAt: "Contact us"
  }
];

export function getService(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
