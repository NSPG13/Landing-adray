"use client";

import React from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LogoMarquee from "@/components/ui/LogoMarquee";

export default function LogoBar() {
    return (
        <section className="py-16 border-y border-ad-muted-border/20">
            <Container>
                <AnimatedSection>
                    <p className="text-center text-xs uppercase tracking-widest text-ad-muted-text mb-6">
                        Trusted by leading enterprises worldwide
                    </p>
                    <LogoMarquee />
                </AnimatedSection>
            </Container>
        </section>
    );
}
