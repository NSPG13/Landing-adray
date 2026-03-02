"use client";

import React from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";

const testimonials = [
    {
        quote:
            "Adray&apos;s AI agents have completely transformed how we handle our enterprise operations. We&apos;ve seen a 40% increase in efficiency.",
        author: "Sarah Chen",
        role: "CTO, TechForward Inc.",
        avatar: "SC",
    },
    {
        quote:
            "The integration capabilities are remarkable. We connected our entire tech stack in under a week and the AI learned our workflows instantly.",
        author: "Marcus Williams",
        role: "VP Engineering, DataFlow",
        avatar: "MW",
    },
    {
        quote:
            "From deployment to measurable ROI in just 30 days. The analytics platform alone pays for itself. Truly enterprise-grade AI.",
        author: "Elena Rodriguez",
        role: "CEO, ScaleAI Solutions",
        avatar: "ER",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 relative gradient-section">
            <Container>
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-ad-deep/40 text-ad-primary border border-ad-muted-border backdrop-blur-sm mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-ad-accent animate-pulse" />
                            Testimonials
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Loved by <span className="text-gradient">industry leaders</span>
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <AnimatedSection key={t.author} delay={i * 0.15}>
                            <Card className="h-full flex flex-col">
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <svg
                                            key={j}
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="#B55CFF"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <p
                                    className="text-ad-muted-text text-sm leading-relaxed flex-1 mb-6"
                                    dangerouslySetInnerHTML={{ __html: t.quote }}
                                />
                                <div className="flex items-center gap-3 pt-4 border-t border-ad-muted-border/30">
                                    <div className="w-10 h-10 rounded-full bg-ad-deep flex items-center justify-center text-ad-primary text-xs font-bold">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <div className="text-white text-sm font-medium">
                                            {t.author}
                                        </div>
                                        <div className="text-ad-muted-text text-xs">{t.role}</div>
                                    </div>
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </Container>
        </section>
    );
}
