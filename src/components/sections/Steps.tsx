"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
    {
        number: "01",
        title: "One account, endless sign-in choices",
        description:
            "Choose from Google, Apple, GitHub, or create an account with email and passkey.",
        bullets: [
            "Sign in instantly with Google or GitHub.",
            "Create your own secure login credentials.",
            "Connect through your company's sign-in.",
        ],
        image:
            "https://framerusercontent.com/images/vUiGHc7SR4A4SrQMUODr2UXNbY.png",
    },
    {
        number: "02",
        title: "Choose the Agent You Want to Deploy",
        description:
            "From a vast universe of intelligent agents, pick the one that best fits your needs and serves your purpose.",
        bullets: [
            "Choose agents tailored to your specific tasks.",
            "Access universe of pre-built intelligent.",
            "Deploy agents that align with your goals.",
        ],
        image:
            "https://framerusercontent.com/images/1h2g2AnKRHxZzmSq2umWuiBsSys.png",
    },
    {
        number: "03",
        title: "Prompt or Set to Automation Mode",
        description:
            "You can manually guide and adjust the workflow, or let the agent handle everything automatically.",
        bullets: [
            "Prompt the agent and adjust workflows.",
            "Let the agent handle tasks end-to-end.",
            "Switch between manual and automated.",
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
                <p className="t-p text-light-blue mb-6">{step.description}</p>
                <ul className="space-y-3">
                    {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-white-10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                    <path
                                        d="M1 4L3.5 6.5L9 1"
                                        stroke="white"
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
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    // Beam slides from left to right across the 3 numbers
    const beamX = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]);

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
                        title="3 Steps to Kickstart"
                        subtitle="From setup to measurable success made effortless in three steps."
                    />
                </AnimatedSection>

                {/* Desktop: 2-column (sticky numbers left, cards right) */}
                <div className="hidden lg:flex gap-12">
                    {/* Left: sticky numbers sidebar */}
                    <div className="w-[200px] flex-shrink-0 sticky top-[120px] self-start">
                        <div className="flex items-center">
                            {steps.map((step, i) => (
                                <span
                                    key={step.number}
                                    className={`flex-1 text-center t-h3-lg font-bold ${i === 0 ? "text-gradient" : "text-blue-20"
                                        }`}
                                >
                                    {step.number}.
                                </span>
                            ))}
                        </div>
                        {/* Beam line */}
                        <div className="relative h-[2px] mt-4 overflow-hidden rounded-full" style={{ background: "rgba(125, 164, 255, 0.16)" }}>
                            <motion.div
                                className="absolute inset-y-0 w-1/3"
                                style={{
                                    x: beamX,
                                    background: "linear-gradient(90deg, #ffac0a 0%, #0175ff 100%)",
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
                                <div className="h-px flex-1 bg-blue-10 relative overflow-hidden">
                                    <div
                                        className="absolute inset-y-0 left-0 w-16 animate-beam"
                                        style={{
                                            background: "linear-gradient(90deg, transparent, #0175FF, transparent)",
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
