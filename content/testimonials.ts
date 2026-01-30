export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "AI Ready Rhode Island transformed how our team works. We went from being afraid of AI to using it every day. The training was practical, approachable, and immediately useful.",
    author: "Maria Santos",
    role: "Executive Director",
    company: "RI Community Action"
  },
  {
    quote: "Our teachers went from skeptical to enthusiastic about AI in just two workshops. The hands-on approach made all the difference—they left with skills they could use the next day.",
    author: "James Wright",
    role: "Superintendent",
    company: "Providence School District"
  },
  {
    quote: "Joshua and his team understood our challenges as a small business. They didn't just recommend tools—they built the workflows, trained our staff, and stuck around to make sure everything worked.",
    author: "Elena Rodriguez",
    role: "Owner",
    company: "Narragansett Brewing Co."
  }
];
