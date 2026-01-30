export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Ready Rhode Island",
    description: "AI consulting, automation workflows, and training for Rhode Island nonprofits, schools, businesses, and government.",
    url: "https://aireadyri.com",
    sameAs: [
      "https://twitter.com/aireadyri",
      "https://linkedin.com/company/ai-ready-rhode-island",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "josh@aireadyri.com",
      contactType: "Customer Service",
      areaServed: "US",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "Rhode Island",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Ready Rhode Island Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Strategy & Assessment",
            description: "Evaluate AI readiness and build adoption roadmaps for organizations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automation Workflows",
            description: "AI-powered workflow automation using modern tools",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Training & Workshops",
            description: "Hands-on AI training for teams and organizations",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
