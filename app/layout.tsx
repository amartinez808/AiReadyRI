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
  title: "AI Ready Rhode Island | AI Consulting & Automation for Organizations",
  description: "AI consulting, automation workflows, and training for Rhode Island nonprofits, schools, businesses, and government. Strategy, implementation, and hands-on support.",
  keywords: ["AI Ready Rhode Island", "AI consulting", "AI automation", "Rhode Island", "nonprofits", "schools", "small business", "AI training", "workflow automation"],
  authors: [{ name: "AI Ready Rhode Island" }],
  creator: "AI Ready Rhode Island",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aireadyri.com",
    title: "AI Ready Rhode Island | AI Consulting & Automation",
    description: "AI consulting, automation workflows, and training for Rhode Island organizations.",
    siteName: "AI Ready Rhode Island",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ready Rhode Island | AI Consulting & Automation",
    description: "AI consulting, automation workflows, and training for Rhode Island organizations.",
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
