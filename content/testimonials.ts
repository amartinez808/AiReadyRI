export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "SIGNAL rebuilt our entire acquisition funnel in 5 weeks. Our cost per lead dropped 61% and we're finally scaling profitably. Best investment we've made this year.",
    author: "Marcus Chen",
    role: "VP of Growth",
    company: "Horizon Financial"
  },
  {
    quote: "They don't just build websites—they build systems. Our new platform is 5x faster, mobile conversion is up 89%, and we can actually iterate without a dev team.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "Apex Outdoor"
  },
  {
    quote: "What impressed me most was the speed and clarity. No fluff, no endless revisions, just strategic thinking and flawless execution. Pipeline is up 240% in 90 days.",
    author: "David Park",
    role: "Head of Sales",
    company: "Datawise"
  }
];
