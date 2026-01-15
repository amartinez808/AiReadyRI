import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
