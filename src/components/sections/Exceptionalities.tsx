"use client";

import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const cards = [
    {
        title: "AI-Native by Design",
        description:
            "No dashboard. Your AI chat is the interface. Ask questions in plain language, get answers backed by precomputed, reconciled data.",
        bgImage:
            "https://framerusercontent.com/images/AroYsG98cecxdfVar1RpE3QmpjY.webp",
    },
    {
        title: "Works on Any Website",
        description:
            "Shopify, WooCommerce, custom builds, B2B. If you\u2019re running digital ads, Adray works for you.",
        bgImage:
            "https://framerusercontent.com/images/yW0YwfEjj3XVmK9OpcRWpCha3k.png",
    },
    {
        title: "Portable Everywhere",
        description:
            "One Signal PDF. Works in any AI \u2014 Claude, ChatGPT, Gemini, Grok, Manus, Copilot, Perplexity \u2014 wherever you already work. Refreshed automatically every day.",
        bgImage:
            "https://framerusercontent.com/images/UoZeXgrLVIo07yWMmdM4MO8F0.webp",
    },
    {
        title: "Instant Value",
        description:
            "Your Signal starts building the moment your first platform connects. You don\u2019t need a complete stack to get started.",
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
                        tag="FEATURES"
                        tagIcon={
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src="/images/svg/BZk5mbe8FBf9Lhl8okYcCei2g.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        }
                        title="Built different. From the data layer up."
                        subtitle=""
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
                                    style={i === 0 ? { filter: "brightness(1.33) sepia(1) hue-rotate(230deg) saturate(2)", opacity: 0.35 } : { filter: "sepia(1) hue-rotate(230deg) saturate(2)", opacity: 0.3 }}
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
                            Zero new tools to learn.
                        </h3>
                        <p className="t-p text-ad-muted mb-8">
                            No new UI. No weekly logins. No clunky integrations. Your AI does the work.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" href="/pricing">
                                Get Started Free
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
