import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - AI Ready Rhode Island",
  description: "Terms of service for AI Ready Rhode Island agency.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-foreground">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              Last updated: January 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">2. Services</h2>
              <p>
                AI Ready Rhode Island provides digital marketing and web development services. Specific terms for each engagement will be outlined in separate service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of AI Ready Rhode Island or its content suppliers and is protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">4. User Conduct</h2>
              <p>
                You agree not to use this website in any way that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violates any applicable laws or regulations</li>
                <li>Infringes on the rights of others</li>
                <li>Contains harmful or malicious code</li>
                <li>Attempts to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">5. Limitation of Liability</h2>
              <p>
                AI Ready Rhode Island shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use this website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">6. Disclaimer</h2>
              <p>
                This website and all information, content, materials, and services included on or otherwise made available to you through this website are provided on an "as is" and "as available" basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">8. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">9. Contact</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:josh@aireadyri.com" className="text-primary hover:underline">
                  josh@aireadyri.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
