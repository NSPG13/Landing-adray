"use client";

import React from "react";
import { Zap, Layers, SlidersHorizontal, Puzzle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const cards = [
    {
        icon: Zap,
        title: "Speed",
        description:
            "Faster time-to-value with our enterprise AI solutions and AI agent marketplace.",
        visual: "gradient-lines",
    },
    {
        icon: Layers,
        title: "Deep capabilities",
        description:
            "An agent platform with the depth to adapt to every interaction, workflow, behavior, and enterprise.",
        visual: "shine-dots",
    },
    {
        icon: SlidersHorizontal,
        title: "Control",
        description:
            "The power of a standardized platform built for the demands.",
        visual: "slider-bars",
    },
    {
        icon: Puzzle,
        title: "Flexibility",
        description:
            "Our design approach is ecosystem agnostic, allowing you to choose.",
        visual: "scrolling-icons",
    },
];

export default function Exceptionalities() {
    return (
        <section className="py-24 relative">
            <Container>
                <AnimatedSection>
                    <SectionHeading
                        tag="EXCEPTIONALITIES"
                        tagIcon={<Zap size={18} />}
                        title="What sets Adray apart"
                        subtitle="Smarter, faster, and more adaptive than traditional AI solutions."
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card, i) => (
                        <AnimatedSection key={card.title} delay={i * 0.1}>
                            <Card className="h-full relative overflow-hidden min-h-[260px]">
                                {/* Visual background */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none">
                                    {card.visual === "gradient-lines" && (
                                        <div className="absolute inset-0">
                                            <div
                                                className="absolute inset-0 animate-rotate"
                                                style={{
                                                    background:
                                                        "conic-gradient(from 0deg, transparent, #0175FF, transparent, #FFCD7D, transparent)",
                                                    filter: "blur(40px)",
                                                }}
                                            />
                                        </div>
                                    )}
                                    {card.visual === "shine-dots" && (
                                        <div className="flex items-center justify-center h-full gap-8">
                                            {[0, 1, 2, 3].map((d) => (
                                                <div
                                                    key={d}
                                                    className="w-3 h-3 rounded-full bg-white-100 animate-shine"
                                                    style={{ animationDelay: `${d * 0.5}s` }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {card.visual === "slider-bars" && (
                                        <div className="flex flex-col items-center justify-center h-full gap-4 px-16">
                                            {[70, 50, 85].map((w, j) => (
                                                <div
                                                    key={j}
                                                    className="h-2 rounded-full w-full overflow-hidden"
                                                    style={{ background: "var(--blue-20)" }}
                                                >
                                                    <div
                                                        className="h-full rounded-full"
                                                        style={{
                                                            width: `${w}%`,
                                                            background: `linear-gradient(90deg, #0175FF, #FFCD7D)`,
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {card.visual === "scrolling-icons" && (
                                        <div className="flex items-center h-full overflow-hidden">
                                            <div className="flex gap-4 animate-marquee">
                                                {Array.from({ length: 16 }).map((_, k) => (
                                                    <div
                                                        key={k}
                                                        className="w-10 h-10 rounded-lg border border-blue-10 bg-dark-blue flex-shrink-0"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white-7 border border-blue-10 flex items-center justify-center mb-5">
                                        <card.icon size={22} className="text-white-90" />
                                    </div>
                                    <h3 className="t-h4 text-white-100 mb-3">{card.title}</h3>
                                    <p className="t-p text-light-blue">{card.description}</p>
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>

                {/* CTA Card */}
                <AnimatedSection delay={0.4}>
                    <Card className="mt-6 text-center py-12">
                        <h3 className="t-h4 text-white-100 mb-2">
                            Ready to get started?
                        </h3>
                        <p className="t-p text-light-blue mb-8">
                            Let&apos;s make this happen. We&apos;re ready when you are.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" href="/pricing">
                                Get Started
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
