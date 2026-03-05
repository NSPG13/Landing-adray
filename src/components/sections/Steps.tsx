"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
    {
        number: "01",
        title: "Install from the Shopify App Store",
        description:
            "One-click install. Server-side pixel activates automatically via Shopify webhooks. No code, no JavaScript, fully automatic.",
        bullets: [
            "One-click install from Shopify App Store.",
            "Server-side pixel auto-installs silently.",
            "Works for WooCommerce and BigCommerce too.",
        ],
        image:
            "https://framerusercontent.com/images/vUiGHc7SR4A4SrQMUODr2UXNbY.png",
    },
    {
        number: "02",
        title: "Connect Meta + Google in 60 Seconds",
        description:
            "Authorize your Meta and Google ad accounts via OAuth. Adray starts reconciling your data immediately \u2014 no configuration needed.",
        bullets: [
            "Connect Meta Ads via secure OAuth flow.",
            "Connect Google Ads in two clicks.",
            "Data reconciliation begins automatically.",
        ],
        image:
            "https://framerusercontent.com/images/1h2g2AnKRHxZzmSq2umWuiBsSys.png",
    },
    {
        number: "03",
        title: "Ask Your AI About Real ROAS",
        description:
            "Copy your MCP endpoint, connect it to ChatGPT or Claude, and ask your first question. See the truth behind your ad spend in seconds.",
        bullets: [
            "Copy your MCP endpoint from the Adray dashboard.",
            "Connect to ChatGPT, Claude, or Gemini.",
            "Ask anything about your real ad performance.",
        ],
        image:
            "https://framerusercontent.com/images/8KzDLcSNotT5Lxj1UyWAsRCZu3E.png",
    },
];

function StepCard({ step }: { step: (typeof steps)[0] }) {
    return (
        <div className="card overflow-hidden flex flex-col md:flex-row">
            {/* Text content */}
            <div className="flex-1 p-6 md:p-8">
                <h3 className="t-h4 text-white-100 mb-4">{step.title}</h3>
                <p className="t-p text-ad-muted mb-6">{step.description}</p>
                <ul className="space-y-3">
                    {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-white-10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                    <defs>
                                        <linearGradient id="checkGrad" x1="0" y1="0" x2="10" y2="8" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#B55CFF" />
                                            <stop offset="1" stopColor="#CA8AE5" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M1 4L3.5 6.5L9 1"
                                        stroke="url(#checkGrad)"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span className="t-p text-white-90">{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Image */}
            <div
                className="flex-1 relative min-h-[200px] md:min-h-0"
                style={{
                    maskImage: "linear-gradient(90deg, transparent 0%, black 11%, black 100%)",
                    WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 11%, black 100%)",
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(1.5)" }}
                />
            </div>
        </div>
    );
}

export default function Steps() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    // Derive active step index from scroll progress (0-0.33 → step 0, 0.33-0.66 → step 1, 0.66-1.0 → step 2)
    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const idx = v < 0.33 ? 0 : v < 0.66 ? 1 : 2;
        setActiveStep(idx);
    });

    // Beam slides to align with the active number (0%, 100%, 200%)
    const beamX = useTransform(scrollYProgress, [0, 0.33, 0.34, 0.66, 0.67, 1], ["0%", "0%", "100%", "100%", "200%", "200%"]);

    return (
        <section className="py-20 relative" ref={sectionRef}>
            <Container>
                <AnimatedSection>
                    <SectionHeading
                        tag="STEPS TO USE"
                        tagIcon={
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src="https://framerusercontent.com/images/lwNa4WCrpY0HtXMtN0IteQrJig.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        }
                        title="3 Steps to Real Data"
                        subtitle="From install to real ROAS in under five minutes."
                    />
                </AnimatedSection>

                {/* Desktop: 2-column (sticky numbers left, cards right) */}
                <div className="hidden lg:flex gap-20">
                    {/* Left: sticky numbers sidebar */}
                    <div className="w-[22%] flex-shrink-0 sticky top-[120px] self-start">
                        <div className="flex items-center">
                            {steps.map((step, i) => (
                                <span
                                    key={step.number}
                                    className={`flex-1 text-center t-h3-lg font-bold transition-all duration-500 ${i === activeStep ? "text-gradient" : "text-ad-deep"
                                        }`}
                                >
                                    {step.number}.
                                </span>
                            ))}
                        </div>
                        {/* Beam line */}
                        <div className="relative h-[2px] mt-4 overflow-hidden rounded-full" style={{ background: "rgba(62, 40, 111, 0.35)" }}>
                            <motion.div
                                className="absolute inset-y-0 w-1/3"
                                style={{
                                    x: beamX,
                                    background: "linear-gradient(90deg, #b55cff 0%, #ca8ae5 100%)",
                                    height: "2px",
                                }}
                            />
                        </div>
                    </div>

                    {/* Right: stacked cards */}
                    <div className="flex-1 space-y-8">
                        {steps.map((step) => (
                            <AnimatedSection key={step.number} delay={0.1}>
                                <StepCard step={step} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Mobile: stacked vertically */}
                <div className="lg:hidden space-y-12">
                    {steps.map((step) => (
                        <AnimatedSection key={step.number} delay={0.1}>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="t-h3-lg text-gradient font-bold">
                                    {step.number}.
                                </span>
                                <div className="h-px flex-1 bg-ad-border relative overflow-hidden">
                                    <div
                                        className="absolute inset-y-0 left-0 w-16 animate-beam"
                                        style={{
                                            background: "linear-gradient(90deg, transparent, #CA8AE5, transparent)",
                                        }}
                                    />
                                </div>
                            </div>
                            <StepCard step={step} />
                        </AnimatedSection>
                    ))}
                </div>
            </Container>
        </section>
    );
}
