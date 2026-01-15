export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SIGNAL",
    description: "Digital Systems That Convert - High-performance websites, growth systems, and automation for modern businesses.",
    url: "https://signal.agency",
    logo: "https://signal.agency/logo.png",
    sameAs: [
      "https://twitter.com/signal",
      "https://linkedin.com/company/signal",
      "https://github.com/signal",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@signal.agency",
      contactType: "Customer Service",
      areaServed: "US",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "Remote",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SIGNAL Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conversion Websites",
            description: "High-performance websites engineered for measurable outcomes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Growth Systems",
            description: "Scalable acquisition and conversion infrastructure",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automation Layer",
            description: "Intelligent systems that scale operations",
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
