"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientBlob from "@/components/ui/GradientBlob";
import ScrollTextColor from "@/components/ui/ScrollTextColor";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <GradientBlob
                color="accent"
                size="xl"
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <Container className="relative z-10">
                <AnimatedSection>
                    <div className="gradient-card rounded-3xl p-12 md:p-16 text-center glow-purple relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-ad-accent/5 via-transparent to-ad-deep/10" />
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to transform your
                                <br />
                                <span className="text-gradient">enterprise with AI?</span>
                            </h2>
                            <ScrollTextColor
                                content="Join 500+ enterprises already using Adray to accelerate their business operations and drive growth."
                                colorStart="#6B6680"
                                colorEnd="#ffffff"
                                trigger="layer-in-view"
                                animationStart="bottom"
                                animationEnd="center"
                                className="text-lg max-w-xl mx-auto mb-10 text-center leading-relaxed"
                            />
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="primary" size="lg" href="/contact">
                                    Start Free Trial
                                </Button>
                                <Button variant="outline" size="lg" href="/pricing">
                                    View Pricing
                                </Button>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
