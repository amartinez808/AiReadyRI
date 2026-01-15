import type { Metadata } from "next";
import { Inter, Michroma } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIGNAL - Digital Systems That Convert",
  description: "High-performance digital systems built for conversion. Web development, growth systems, and automation for modern businesses.",
  keywords: ["digital agency", "web development", "growth marketing", "conversion optimization", "automation"],
  authors: [{ name: "SIGNAL" }],
  creator: "SIGNAL",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://signal.agency",
    title: "SIGNAL - Digital Systems That Convert",
    description: "High-performance digital systems built for conversion.",
    siteName: "SIGNAL",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIGNAL - Digital Systems That Convert",
    description: "High-performance digital systems built for conversion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${michroma.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
