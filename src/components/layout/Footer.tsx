"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const footerLinks = {
    Navigation: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Integration", href: "/integration" },
        { label: "Contact", href: "/contact" },
    ],
    Documentation: [
        { label: "Blogs", href: "/blog" },
        { label: "Changelog", href: "/changelog" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms and Conditions", href: "/privacy-policy" },
    ],
    "Other Pages": [
        { label: "Launching Soon", href: "/launching-soon" },
        { label: "404", href: "/404" },
    ],
    "Social Connect": [
        { label: "Instagram", href: "https://instagram.com/" },
        { label: "X / Twitter", href: "https://x.com/" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
        { label: "Reddit", href: "https://reddit.com/" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* CTA Section */}
            <div className="relative py-32 md:py-40">
                {/* Background image */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            "url(https://framerusercontent.com/images/3ez5Goty6KdEzujpWDVyu8Um6Ns.webp)",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
                    }}
                />

                <Container className="relative z-10 text-center">
                    <AnimatedSection>
                        <h2 className="t-h2 text-white-100 mb-6">
                            Step Into Adray
                            <br />
                            The Future of Intelligent Agents
                        </h2>
                        <p className="t-p-lg text-light-blue max-w-xl mx-auto mb-10">
                            Everything your team needs, in one simple workspace. Stay focused,
                            stay in sync.
                        </p>
                        <Button variant="primary" size="lg" href="/pricing">
                            Get Started
                        </Button>
                    </AnimatedSection>

                    {/* Large logo display */}
                    <div className="mt-20 flex items-center justify-center gap-8">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://framerusercontent.com/images/9KnJwOszoExl1mcOPudDLQaGg.svg"
                            alt=""
                            className="h-8 md:h-10 w-auto opacity-20"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://framerusercontent.com/images/9KnJwOszoExl1mcOPudDLQaGg.svg"
                            alt="Adray"
                            className="h-12 md:h-16 w-auto"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://framerusercontent.com/images/9KnJwOszoExl1mcOPudDLQaGg.svg"
                            alt=""
                            className="h-8 md:h-10 w-auto opacity-20"
                        />
                    </div>
                </Container>
            </div>

            {/* Footer Links */}
            <div className="border-t border-blue-10">
                <Container className="py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="t-p-semibold text-white-100 mb-4">{title}</h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="t-p-sm text-light-blue hover:text-white-100 transition-colors duration-200"
                                                {...(link.href.startsWith("http")
                                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                                    : {})}
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
                    <div className="mt-12 pt-8 border-t border-blue-10 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="t-p-sm text-light-blue">
                            All rights reserved for @Adray
                        </p>
                        <p className="t-p-sm text-blue-20">
                            Built with Next.js & Tailwind CSS
                        </p>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
