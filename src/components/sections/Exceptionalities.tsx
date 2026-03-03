"use client";

import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const cards = [
    {
        title: "Speed",
        description:
            "Faster time-to-value with our enterprise AI solutions and AI agent marketplace.",
        bgImage:
            "https://framerusercontent.com/images/AroYsG98cecxdfVar1RpE3QmpjY.webp",
    },
    {
        title: "Deep capabilities",
        description:
            "An agent platform with the depth to adapt to every interaction, workflow, behavior, and enterprise.",
        bgImage:
            "https://framerusercontent.com/images/yW0YwfEjj3XVmK9OpcRWpCha3k.png",
    },
    {
        title: "Control",
        description:
            "The power of a standardized platform built for the demands.",
        bgImage:
            "https://framerusercontent.com/images/UoZeXgrLVIo07yWMmdM4MO8F0.webp",
    },
    {
        title: "Flexibility",
        description:
            "Our design approach is ecosystem agnostic, allowing you to choose.",
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
                        subtitle="Smarter, faster, and more adaptive than traditional AI solutions."
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
                                    className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
                                />

                                {/* Content */}
                                <div className="relative z-10">
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
