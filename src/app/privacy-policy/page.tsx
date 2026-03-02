import { Metadata } from "next";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Adray Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <article className="pt-32 pb-24">
            <Container className="max-w-3xl mx-auto">
                <AnimatedSection>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-ad-muted-text text-sm mb-12">
                        Last updated: March 1, 2026
                    </p>

                    <div className="space-y-8 text-ad-muted-text leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">
                                1. Introduction
                            </h2>
                            <p>
                                Adray (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
                                privacy. This Privacy Policy explains how we collect, use,
                                disclose, and safeguard your information when you use our
                                platform, website, and services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">
                                2. Information We Collect
                            </h2>
                            <p className="mb-3">
                                We collect information you provide directly, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Account information (name, email, company, role)
                                </li>
                                <li>
                                    Usage data (how you interact with our platform)
                                </li>
                                <li>
                                    Technical data (IP address, browser type, device information)
                                </li>
                                <li>
                                    Communications (support tickets, feedback, survey responses)
                                </li>
                                <li>
                                    Business data processed through our AI agents (governed by
                                    your Data Processing Agreement)
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">
                                3. How We Use Your Information
                            </h2>
                            <p className="mb-3">We use collected information to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send technical notices, updates, and support messages</li>
                                <li>Respond to your comments, questions, and requests</li>
                                <li>
                                    Monitor and analyze trends, usage, and activities
                                </li>
                                <li>
                                    Detect, investigate, and prevent fraudulent transactions and
                                    other illegal activities
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">
                                4. Data Security
                            </h2>
                            <p>
                                We implement industry-standard security measures to protect your
                                data, including AES-256 encryption at rest, TLS 1.3 encryption
                                in transit, SOC 2 Type II certification, regular security audits
                                and penetration testing, and role-based access controls. While
                                no method of transmission over the internet is 100% secure, we
                                strive to protect your personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">
                                5. Data Retention
                            </h2>
                            <p>
                                We retain your information for as long as your account is active
                                or as needed to provide services. You may request deletion of
                                your data at any time by contacting us at privacy@adray.ai.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">
                                6. Third-Party Services
                            </h2>
                            <p>
                                We may share information with third-party service providers who
                                perform services on our behalf, such as hosting, analytics, and
                                customer support. These providers are contractually obligated to
                                protect your data and use it only for the purposes we specify.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">
                                7. Your Rights
                            </h2>
                            <p className="mb-3">
                                Depending on your jurisdiction, you may have the right to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Delete your data</li>
                                <li>Object to or restrict processing</li>
                                <li>Data portability</li>
                                <li>Withdraw consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">
                                8. Contact Us
                            </h2>
                            <p>
                                If you have questions about this Privacy Policy, please contact
                                us at{" "}
                                <a
                                    href="mailto:privacy@adray.ai"
                                    className="text-ad-accent hover:text-ad-primary transition-colors"
                                >
                                    privacy@adray.ai
                                </a>{" "}
                                or write to us at: Adray, Inc., 100 Innovation Drive, San
                                Francisco, CA 94105.
                            </p>
                        </section>
                    </div>
                </AnimatedSection>
            </Container>
        </article>
    );
}
