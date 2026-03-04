"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const plans = [
    {
        name: "Sonic",
        monthlyPrice: 49,
        subtitle: null,
        features: [
            "Access to core AI Agents",
            "Workflow automation for teams",
            "Basic integrations",
            "Standard reporting & analytics",
            "Email support",
            "5,000 AI actions per month",
        ],
        trust: "300+ teams trusted this",
        bgImage:
            "https://framerusercontent.com/images/XXSw2JqvtikgOcaexTTozzVsO54.webp",
    },
    {
        name: "Supersonic",
        monthlyPrice: 99,
        subtitle: null,
        features: [
            "Everything in Sonic Monthly",
            "Advanced AI Agents for workflows",
            "Priority integrations",
            "Enhanced dashboards",
            "24/7 support via chat",
            "20,000 AI actions per month",
        ],
        trust: "250+ growing enterprises",
        bgImage:
            "https://framerusercontent.com/images/4fEwCxLuKCW6ZaczMzoeCElmzBg.webp",
    },
    {
        name: "HyperSonic",
        monthlyPrice: null,
        subtitle: "Unlimited automation with dedicated enterprise support.",
        features: [
            "Enterprise-grade AI Agent",
            "Full custom API access",
            "Unlimited workflows & automation",
        ],
        trust: null,
        bgImage:
            "https://framerusercontent.com/images/K53jEm1inmwk6lcSyDVU5W7rvLM.webp",
    },
];

export default function HomePricing() {
    const [yearly, setYearly] = useState(false);

    const getPrice = (monthly: number | null) => {
        if (monthly === null) return null;
        return yearly ? Math.round(monthly * 12 * 0.7) : monthly;
    };

    const getPeriod = (monthly: number | null) => {
        if (monthly === null) return "";
        return yearly ? "/year" : "/month";
    };

    return (
        <section className="py-20 relative">
            <Container>
                <AnimatedSection>
                    <SectionHeading
                        tag="PRICING"
                        tagIcon={
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src="https://framerusercontent.com/images/3UovOTKirX07vhyWYJGSliEt1E4.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        }
                        title="Flexible Plans for Every"
                        subtitle="Choose the plan that fits your team and scales with your business."
                    />
                </AnimatedSection>

                {/* Toggle — Framer pill-tab selector */}
                <div className="flex items-center justify-center mb-12">
                    <div
                        className="relative inline-flex items-center rounded-2xl border border-ad-border"
                        style={{ background: "rgba(255,255,255,0.1)", padding: "4px" }}
                    >
                        {/* Sliding white selector */}
                        <div
                            className="absolute top-1 bottom-1 rounded-[4px] bg-white-100 transition-all duration-300"
                            style={{
                                width: "calc(50% - 4px)",
                                left: yearly ? "calc(50% + 2px)" : "4px",
                            }}
                        />
                        <button
                            onClick={() => setYearly(false)}
                            className={`relative z-10 px-6 py-2.5 t-p-sm font-medium rounded-[4px] transition-colors duration-200 cursor-pointer ${!yearly ? "text-black-100" : "text-white-90"}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setYearly(true)}
                            className={`relative z-10 px-6 py-2.5 t-p-sm font-medium rounded-[4px] transition-colors duration-200 cursor-pointer flex items-center gap-2 ${yearly ? "text-black-100" : "text-white-90"}`}
                        >
                            Yearly
                            <span
                                className="px-1.5 py-0.5 rounded text-xs font-semibold"
                                style={{ background: "rgba(62,40,111,0.4)", color: "#CA8AE5" }}
                            >
                                30%off
                            </span>
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan, i) => (
                        <AnimatedSection key={plan.name} delay={i * 0.12}>
                            <div className="card relative overflow-hidden h-full flex flex-col">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={plan.bgImage}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
                                />
                                <div className="relative z-10 p-8 flex flex-col h-full">
                                    <h3 className="t-h4 text-white-100">{plan.name}</h3>

                                    {plan.monthlyPrice !== null ? (
                                        <div className="mt-3 flex items-baseline gap-1">
                                            <span className="text-4xl font-bold text-white-90">
                                                ${getPrice(plan.monthlyPrice)}
                                            </span>
                                            <span className="text-ad-muted t-p-sm">
                                                {getPeriod(plan.monthlyPrice)}
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="mt-3">
                                            <p className="t-h4 text-gradient">Go for more power</p>
                                        </div>
                                    )}

                                    {plan.subtitle && (
                                        <p className="mt-2 t-p-sm text-ad-muted">
                                            {plan.subtitle}
                                        </p>
                                    )}

                                    <div className="mt-6 mb-8">
                                        <Button
                                            variant="primary"
                                            href="/contact"
                                            className="w-full"
                                        >
                                            Contact Us
                                        </Button>
                                    </div>

                                    <ul className="space-y-3 flex-1">
                                        {plan.features.map((feat) => (
                                            <li key={feat} className="flex items-start gap-3">
                                                <span
                                                    className="w-5 h-5 rounded-full bg-white-10 flex items-center justify-center flex-shrink-0 mt-0.5"
                                                    style={{
                                                        boxShadow:
                                                            "inset 0 0 0 1px rgba(255,255,255,0.4)",
                                                    }}
                                                >
                                                    <Check size={10} className="text-white-100" />
                                                </span>
                                                <span className="t-p-sm text-white-90">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {plan.trust && (
                                        <p className="mt-6 t-p-sm text-ad-muted text-center">
                                            {plan.trust}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Container>
        </section>
    );
}
