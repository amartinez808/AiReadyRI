import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  Services: [
    { href: "/services#conversion-websites", label: "Conversion Websites" },
    { href: "/services#growth-systems", label: "Growth Systems" },
    { href: "/services#automation-layer", label: "Automation Layer" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

const socialLinks = [
  { href: "https://twitter.com/signal", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/company/signal", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/signal", icon: Github, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              SIGNAL
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Digital systems that convert. High-performance websites, growth infrastructure, and automation for companies that need results.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SIGNAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
