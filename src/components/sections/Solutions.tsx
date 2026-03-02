"use client";

import React from "react";
import { Bot, LineChart, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientBlob from "@/components/ui/GradientBlob";
import ScrollTextColor from "@/components/ui/ScrollTextColor";

const solutions = [
    {
        icon: Bot,
        title: "AI Work Agents",
        description:
            "Autonomous agents that handle repetitive tasks, data entry, document processing, and complex business logic — freeing your team to focus on strategy.",
        features: [
            "Task Automation",
            "Document Processing",
            "Data Extraction",
            "Workflow Orchestration",
        ],
    },
    {
        icon: LineChart,
        title: "AI Service Platform",
        description:
            "Intelligent service management with predictive routing, auto-resolution, and real-time performance monitoring for exceptional customer experiences.",
        features: [
            "Smart Routing",
            "Auto Resolution",
            "Performance Analytics",
            "SLA Management",
        ],
    },
    {
        icon: MessageSquare,
        title: "AI Process Engine",
        description:
            "End-to-end process mining and optimization powered by AI, identifying bottlenecks and automatically implementing improvements.",
        features: [
            "Process Mining",
            "Bottleneck Detection",
            "Auto Optimization",
            "Compliance Monitoring",
        ],
    },
];

export default function Solutions() {
    return (
        <section className="py-24 relative overflow-hidden">
            <GradientBlob
                color="deep"
                size="xl"
                className="top-1/2 left-[-200px] -translate-y-1/2"
            />
            <GradientBlob
                color="accent"
                size="lg"
                className="bottom-0 right-[-100px]"
            />

            <Container className="relative z-10">
                <AnimatedSection>
                    <SectionHeading
                        badge="Solutions"
                        title="Powerful AI solutions for <span class='text-gradient'>every business need</span>"
                    />
                    <ScrollTextColor
                        content="Three core platforms working together to transform how your enterprise operates."
                        colorStart="#6B6680"
                        colorEnd="#E1D8F3"
                        trigger="layer-in-view"
                        animationStart="bottom"
                        animationEnd="center"
                        className="text-lg text-center max-w-2xl mx-auto -mt-4 mb-4 leading-relaxed"
                    />
                </AnimatedSection>

                <div className="space-y-16 mt-8">
                    {solutions.map((solution, i) => (
                        <AnimatedSection key={solution.title} delay={0.1}>
                            <div
                                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    } gap-8 lg:gap-16 items-center`}
                            >
                                {/* Text side */}
                                <div className="flex-1">
                                    <div className="w-14 h-14 rounded-2xl bg-ad-accent/10 border border-ad-accent/20 flex items-center justify-center mb-6">
                                        <solution.icon size={26} className="text-ad-accent" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                        {solution.title}
                                    </h3>
                                    <p className="text-ad-muted-text leading-relaxed mb-6">
                                        {solution.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {solution.features.map((feat) => (
                                            <span
                                                key={feat}
                                                className="px-3 py-1.5 rounded-full text-xs font-medium bg-ad-deep/30 text-ad-primary border border-ad-muted-border"
                                            >
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual side */}
                                <div className="flex-1 w-full">
                                    <div className="gradient-card rounded-2xl p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden glow-purple">
                                        <div className="absolute inset-0 bg-gradient-to-br from-ad-accent/5 to-transparent" />
                                        <solution.icon
                                            size={80}
                                            className="text-ad-accent/20"
                                            strokeWidth={1}
                                        />
                                        {/* Decorative dots */}
                                        <div className="absolute top-6 right-6 grid grid-cols-3 gap-2">
                                            {Array.from({ length: 9 }).map((_, j) => (
                                                <div
                                                    key={j}
                                                    className="w-1.5 h-1.5 rounded-full bg-ad-accent/20"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Container>
        </section>
    );
}
