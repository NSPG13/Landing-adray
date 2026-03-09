"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const plans = [
    {
        name: "Free",
        monthlyPrice: 0,
        subtitle: null,
        features: [
            "Meta, Google, GA4 & Shopify connectors",
            "Secure portable data link",
            "Works in any AI",
            "Pre-built prompt templates",
            "60-day rolling data window",
        ],
        trust: null,
        cta: "Get Started Free",
        bgImage:
            "https://framerusercontent.com/images/XXSw2JqvtikgOcaexTTozzVsO54.webp",
    },
    {
        name: "Pro",
        monthlyPrice: 49,
        subtitle: "+ 0.3% of ad spend (capped at $1,250/mo)",
        features: [
            "Everything in Free",
            "Unlimited data history",
            "Priority support",
            "Early MCP access (Q2 2026)",
            "Additional workspaces: $25/mo each",
        ],
        trust: null,
        cta: "Start Pro",
        bgImage:
            "https://framerusercontent.com/images/4fEwCxLuKCW6ZaczMzoeCElmzBg.webp",
    },
    {
        name: "Enterprise",
        monthlyPrice: null,
        subtitle: "Custom pricing for teams at scale.",
        features: [
            "Custom onboarding",
            "30–60 day invoicing",
            "Dedicated support",
            "SLA",
            "Volume pricing",
        ],
        trust: null,
        cta: "Talk to Us",
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
                        title="Free to start. Built to scale."
                        subtitle="No dashboards to pay for. Just your data, ready for AI."
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
                                    style={{ filter: "sepia(1) hue-rotate(230deg) saturate(2)" }}
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
                                            <p className="t-h4 text-gradient">Custom</p>
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
                                            {plan.cta}
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
