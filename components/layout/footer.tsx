import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Services: [
    { href: "/services#ai-strategy", label: "AI Strategy & Assessment" },
    { href: "/services#automation-workflows", label: "Automation Workflows" },
    { href: "/services#training-workshops", label: "Training & Workshops" },
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
  { href: "https://twitter.com/aireadyri", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/company/ai-ready-rhode-island", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-white.png"
                alt="AI Ready RI Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              AI consulting, automation, and training for Rhode Island nonprofits, schools, businesses, and government.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
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
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/8 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Ready Rhode Island. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
