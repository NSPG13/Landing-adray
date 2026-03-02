"use client";

import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";

const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "40%", label: "Efficiency Gain" },
    { value: "200+", label: "Integrations" },
];

export default function Stats() {
    return (
        <section className="py-16 border-y border-ad-muted-border/20">
            <Container>
                <AnimatedSection>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-ad-muted-text">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
