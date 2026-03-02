import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = {
    Product: [
        { label: "AI Solutions", href: "/ai-solutions" },
        { label: "Integration", href: "/integration" },
        { label: "Pricing", href: "/pricing" },
        { label: "Changelog", href: "/changelog" },
    ],
    Company: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "#" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t border-ad-muted-border/30 bg-ad-surface-dark">
            <Container className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white">
                            ADRAY
                        </Link>
                        <p className="mt-4 text-ad-muted-text text-sm leading-relaxed max-w-sm">
                            Accelerate the speed of business with the Adray Platform and our
                            AI solutions for work, service, and process.
                        </p>
                        <div className="flex gap-4 mt-6">
                            {["X", "Li", "GH"].map((icon) => (
                                <a
                                    key={icon}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-ad-surface-light border border-ad-muted-border flex items-center justify-center text-ad-muted-text hover:text-white hover:border-ad-accent transition-all duration-200 text-xs font-bold"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-white font-semibold text-sm mb-4">
                                {title}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-ad-muted-text text-sm hover:text-white transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-ad-muted-border/20 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-ad-muted-text text-xs">
                        &copy; {new Date().getFullYear()} Adray. All rights reserved.
                    </p>
                    <p className="text-ad-muted-text/50 text-xs">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </Container>
        </footer>
    );
}
