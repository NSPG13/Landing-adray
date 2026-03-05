"use client";

import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const cards = [
    {
        title: "Zero-Friction Setup",
        description:
            "Install from the Shopify App Store, connect Meta and Google in 60 seconds, and get your MCP endpoint instantly.",
        bgImage:
            "https://framerusercontent.com/images/AroYsG98cecxdfVar1RpE3QmpjY.webp",
    },
    {
        title: "Cross-Platform Truth",
        description:
            "Reconcile conflicting ROAS, deduplicate conversions, and resolve attribution conflicts across Meta, Google, and Shopify.",
        bgImage:
            "https://framerusercontent.com/images/yW0YwfEjj3XVmK9OpcRWpCha3k.png",
    },
    {
        title: "Server-Side Pixel",
        description:
            "First-party data collection that\u2019s immune to iOS privacy changes, ad blockers, and browser tracking prevention.",
        bgImage:
            "https://framerusercontent.com/images/UoZeXgrLVIo07yWMmdM4MO8F0.webp",
    },
    {
        title: "Use Any AI",
        description:
            "Analyze your data with ChatGPT, Claude, or Gemini. No new tools to learn \u2014 your AI, your workflow.",
        bgImage:
            "https://framerusercontent.com/images/TdhDQYxz25yRgOwLKeC05FZVk.webp",
    },
];

export default function Exceptionalities() {
    return (
        <section className="py-20 relative">
            <Container>
                <AnimatedSection>
                    <SectionHeading
                        tag="EXCEPTIONALITIES"
                        tagIcon={
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src="https://framerusercontent.com/images/BZk5mbe8FBf9Lhl8okYcCei2g.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        }
                        title="What sets Adray apart"
                        subtitle="The only free ecommerce data layer that reconciles your ad platforms."
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card, i) => (
                        <AnimatedSection key={card.title} delay={i * 0.1}>
                            <Card className="h-full relative overflow-hidden min-h-[260px]">
                                {/* Background image */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={card.bgImage}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                    style={i === 0 ? { filter: "brightness(1.33)", opacity: 0.35 } : { opacity: 0.3 }}
                                />

                                {/* Speed card decorations */}
                                {i === 0 && (
                                    <>
                                        {/* SVG wireframe overlay */}
                                        <svg
                                            viewBox="0 0 578 462"
                                            fill="none"
                                            className="absolute inset-0 w-full h-full pointer-events-none"
                                            style={{ opacity: 0.5 }}
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M 0 144 L 222 0 L 577.5 162.5 L 325.5 461.5 L 0 245 L 119 0 L 577.5 95.5 L 0 199 L 577.5 419 L 69.5 0 L 119 461.5 L 428 0 L 487.5 461.5"
                                                stroke="rgba(255,255,255,0.15)"
                                                strokeWidth="1"
                                            />
                                        </svg>
                                        {/* Animated gradient lines */}
                                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                            {[
                                                { deg: 12, color: "rgb(202,138,229)" },
                                                { deg: 82, color: "rgb(202,138,229)" },
                                                { deg: 147, color: "rgb(202,138,229)" },
                                                { deg: 39, color: "rgb(202,138,229)" },
                                                { deg: -9, color: "rgb(181,92,255)" },
                                                { deg: -97, color: "rgb(181,92,255)" },
                                                { deg: 26, color: "rgb(181,92,255)" },
                                                { deg: -56, color: "rgb(181,92,255)" },
                                            ].map((line, li) => (
                                                <div
                                                    key={li}
                                                    className="absolute"
                                                    style={{
                                                        width: 14,
                                                        height: 2,
                                                        filter: "blur(2px)",
                                                        background: `linear-gradient(${line.deg}deg, ${line.color}, rgb(255,255,255))`,
                                                        top: `${15 + li * 10}%`,
                                                        left: `${10 + li * 11}%`,
                                                        animation: `speed-line-float ${3 + li * 0.4}s ease-in-out infinite alternate`,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="t-h4 text-white-100 mb-3">{card.title}</h3>
                                    <p className="t-p text-ad-muted">{card.description}</p>
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>

                {/* CTA Card */}
                <AnimatedSection delay={0.4}>
                    <Card className="mt-6 text-center py-12">
                        <h3 className="t-h4 text-white-100 mb-2">
                            Ready to see your real ROAS?
                        </h3>
                        <p className="t-p text-ad-muted mb-8">
                            Install free from the Shopify App Store. Under 5 minutes to your first real insight.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" href="/pricing">
                                Start Free
                            </Button>
                            <Button variant="ghost" href="/contact">
                                Get in touch
                            </Button>
                        </div>
                    </Card>
                </AnimatedSection>
            </Container>
        </section>
    );
}
