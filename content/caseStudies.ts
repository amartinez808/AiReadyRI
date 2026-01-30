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
    slug: "nonprofit-ai-workflow-automation",
    title: "AI Workflow Automation for Nonprofit",
    client: "RI Community Action",
    industry: "Nonprofit",
    thumbnail: "/work/nonprofit.jpg",
    description: "Automated grant reporting and client intake processes, saving 20+ hours per week for a small nonprofit team.",
    problem: "RI Community Action's 5-person team was spending over 20 hours weekly on manual data entry, grant reporting, and client intake paperwork. Staff were burned out and programs were suffering.",
    approach: [
      "Audited all administrative workflows and identified automation opportunities",
      "Set up AI-powered document processing for client intake forms",
      "Built automated grant reporting templates using ChatGPT",
      "Created Zapier workflows connecting their CRM, email, and spreadsheets",
      "Trained the entire team on using AI tools for daily tasks"
    ],
    solution: "An integrated automation system that handles client intake processing, auto-generates grant reports from program data, and connects all their tools so information flows without manual entry.",
    outcomes: [
      {
        metric: "Time Saved",
        value: "20+ hrs/wk",
        description: "Reclaimed for program work"
      },
      {
        metric: "Grant Reports",
        value: "75% faster",
        description: "Auto-generated from data"
      },
      {
        metric: "Data Entry",
        value: "-90%",
        description: "Manual entry eliminated"
      },
      {
        metric: "Staff Satisfaction",
        value: "+85%",
        description: "Team morale improved"
      }
    ],
    tags: ["Nonprofit", "Automation", "AI", "Workflows"],
    year: "2025"
  },
  {
    slug: "school-district-ai-training",
    title: "AI Literacy Program for Educators",
    client: "Providence School District",
    industry: "Education",
    thumbnail: "/work/education.jpg",
    description: "Trained 50+ teachers on responsible AI use, prompt engineering, and AI-enhanced lesson planning.",
    problem: "Teachers were either afraid of AI or using it without guidance. The district had no policy, no training, and growing concerns from parents about AI in classrooms.",
    approach: [
      "Developed custom AI training curriculum for K-12 educators",
      "Created hands-on workshops covering ChatGPT, Claude, and education-specific tools",
      "Built prompt engineering guides for lesson planning and assessment",
      "Helped administration draft responsible AI use policies",
      "Trained department leads as internal AI champions"
    ],
    solution: "A comprehensive AI literacy program with tiered workshops (beginner to advanced), practical classroom applications, responsible use policies, and an internal champion network for ongoing support.",
    outcomes: [
      {
        metric: "Teachers Trained",
        value: "50+",
        description: "Across all grade levels"
      },
      {
        metric: "AI Confidence",
        value: "+65%",
        description: "Post-training assessment"
      },
      {
        metric: "Lesson Prep Time",
        value: "-40%",
        description: "Using AI assistance"
      },
      {
        metric: "AI Champions",
        value: "12",
        description: "Internal trainers created"
      }
    ],
    tags: ["Education", "Training", "AI Literacy", "Workshops"],
    year: "2025"
  },
  {
    slug: "small-business-operations-ai",
    title: "AI-Powered Operations Overhaul",
    client: "Narragansett Brewing Co.",
    industry: "Small Business",
    thumbnail: "/work/smallbiz.jpg",
    description: "Implemented AI tools across customer service, inventory, and marketing for a growing Rhode Island business.",
    problem: "Narragansett Brewing was growing fast but still running on spreadsheets and manual processes. Customer inquiries piled up, inventory tracking was error-prone, and marketing was inconsistent.",
    approach: [
      "Mapped all business processes and identified AI automation candidates",
      "Implemented AI chatbot for customer inquiries and order status",
      "Built automated inventory tracking with predictive reorder alerts",
      "Set up AI-assisted content creation for social media and email marketing",
      "Trained team leads on each new AI-powered workflow"
    ],
    solution: "A suite of AI-powered operational improvements: automated customer response system, smart inventory management, AI-assisted marketing content pipeline, and trained team members who can maintain it all.",
    outcomes: [
      {
        metric: "Response Time",
        value: "< 5 min",
        description: "Was 24+ hours"
      },
      {
        metric: "Inventory Errors",
        value: "-72%",
        description: "With AI tracking"
      },
      {
        metric: "Marketing Output",
        value: "3x",
        description: "Content produced per week"
      },
      {
        metric: "Team Efficiency",
        value: "+45%",
        description: "Across operations"
      }
    ],
    tags: ["Small Business", "Operations", "AI", "Automation"],
    year: "2025"
  },
  {
    slug: "government-agency-modernization",
    title: "AI Modernization for State Agency",
    client: "RI Dept. of Labor & Training",
    industry: "Government",
    thumbnail: "/work/government.jpg",
    description: "Streamlined citizen services with AI-powered document processing and automated case routing.",
    problem: "The department was processing thousands of claims manually, with paper forms causing delays, errors, and long wait times for Rhode Island citizens who needed help.",
    approach: [
      "Assessed current document processing workflows and bottlenecks",
      "Implemented AI-powered form recognition and data extraction",
      "Built automated case routing based on claim type and priority",
      "Created AI-assisted response templates for common inquiries",
      "Trained staff on new systems with ongoing support"
    ],
    solution: "An AI-enhanced processing pipeline that automatically reads incoming documents, extracts key data, routes cases to the right team, and helps staff respond faster with AI-suggested templates.",
    outcomes: [
      {
        metric: "Processing Time",
        value: "-60%",
        description: "Per claim average"
      },
      {
        metric: "Error Rate",
        value: "-80%",
        description: "In data entry"
      },
      {
        metric: "Citizen Wait Time",
        value: "-50%",
        description: "For initial response"
      },
      {
        metric: "Staff Capacity",
        value: "+35%",
        description: "More cases handled"
      }
    ],
    tags: ["Government", "Document Processing", "AI", "Modernization"],
    year: "2024"
  }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getFeaturedCaseStudies(count: number = 3): CaseStudy[] {
  return caseStudies.slice(0, count);
}
