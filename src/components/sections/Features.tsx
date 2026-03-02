"use client";

import React from "react";
import {
    Brain,
    Zap,
    Shield,
    BarChart3,
    Workflow,
    Globe,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ScrollTextColor from "@/components/ui/ScrollTextColor";

const features = [
    {
        icon: Brain,
        title: "Intelligent Automation",
        description:
            "AI-powered agents that learn from your business processes and automate complex workflows with minimal human intervention.",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description:
            "Experience real-time data processing and instant AI responses, accelerating decision-making across your entire organization.",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description:
            "Bank-grade encryption, SOC 2 compliance, and advanced threat detection to keep your business data safe and secure.",
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description:
            "Deep insights and predictive analytics powered by machine learning, turning your data into actionable intelligence.",
    },
    {
        icon: Workflow,
        title: "Seamless Workflows",
        description:
            "Connect and orchestrate across 200+ enterprise tools with our intelligent integration engine and pre-built connectors.",
    },
    {
        icon: Globe,
        title: "Global Scale",
        description:
            "Deploy across regions with edge computing support, multi-language AI, and 99.99% uptime SLA for mission-critical operations.",
    },
];

export default function Features() {
    return (
        <section className="py-24 relative gradient-section">
            <Container>
                <AnimatedSection>
                    <SectionHeading
                        badge="Features"
                        title="We help enterprise businesses grow with <span class='text-gradient'>AI-Powered Solutions</span>"
                    />
                    <ScrollTextColor
                        content="Our comprehensive Work Solutions Marketplace uses cutting-edge AI to streamline automation, analytics, and operations."
                        colorStart="#6B6680"
                        colorEnd="#E1D8F3"
                        trigger="layer-in-view"
                        animationStart="bottom"
                        animationEnd="center"
                        className="text-lg text-center max-w-2xl mx-auto -mt-4 mb-4 leading-relaxed"
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <AnimatedSection key={feature.title} delay={i * 0.1}>
                            <Card className="h-full group">
                                <div className="w-12 h-12 rounded-xl bg-ad-accent/10 border border-ad-accent/20 flex items-center justify-center mb-5 group-hover:bg-ad-accent/20 group-hover:border-ad-accent/40 transition-all duration-300">
                                    <feature.icon
                                        size={22}
                                        className="text-ad-accent group-hover:text-ad-primary transition-colors"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-ad-muted-text leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </Container>
        </section>
    );
}
