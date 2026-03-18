"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const tabs = [
    {
        id: "precomputed",
        label: "Precomputed",
        iconSvg: "01d6Xos4x3sbU293TmKaFduYFAc.svg",
        title: "Precomputed, AI-Ready Signal",
        description:
            "Your platforms report what they want you to see. Adray computes what\u2019s true \u2014 ROAS on net revenue, blended CAC against verified new customers, anomaly flags, and campaign-level truth. Structured for AI to read.",
        tags: [
            { label: "Structured" },
            { label: "Normalized" },
            { label: "Compressed" },
            { label: "AI-Ready" },
        ],
        cta: { label: "Get Started", href: "/pricing" },
        image:
            "/images/adray-analytics.png",
    },
    {
        id: "normalized",
        label: "Normalized",
        iconSvg: "DzDW9qxLWt1R7V7DL7f89IPJfk.svg",
        title: "Cross-Platform Normalization",
        description:
            "Meta, Google, and GA4 measure differently, attribute differently, and report differently. Adray speaks all three languages \u2014 then translates them into one reconciled view before your AI sees a single number. No more conflicting metrics. No more platform bias.",
        tags: [
            { label: "Meta" },
            { label: "Google" },
            { label: "GA4" },
        ],
        cta: { label: "Get Started", href: "/pricing" },
        image:
            "/images/Cross-Platform Normalization.png",
    },
    {
        id: "enriched",
        label: "Enriched",
        iconSvg: "Akgvq4ROltzdkv9bMr9wLtsd5c.svg",
        title: "The Adray Intelligence Pixel",
        description:
            "Want even richer data? Install the Adray pixel and your attribution gets significantly deeper. Server-side events, first-party identity, deduplication, session stitching \u2014 all flowing back into your Signal. Works on any website. Two clicks via Google Tag Manager, or paste a single script.",
        tags: [
            { label: "Server-Side" },
            { label: "First-Party" },
            { label: "Deduplication" },
            { label: "Session Stitching" },
        ],
        cta: { label: "Get Started", href: "/pricing" },
        image:
            "/images/The Adray Intelligence Pixel.png",
    },
];

export default function FeaturesTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const current = tabs[activeTab];

    return (
        <section className="py-20 relative">
            <Container>
                <AnimatedSection>
                    <SectionHeading
                        tag="WHY IT WORKS"
                        tagIcon={
                            <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M117.25 157.92a60 60 0 0 1-34.17-34.17L24 140.25V216h76.25ZM138.75 98.08a60 60 0 0 1 34.17 34.17L232 115.75V40h-76.25Z" opacity=".2" />
                                <path d="M176 100a59.77 59.77 0 0 0-21.59 4L130.08 72H176a8 8 0 0 0 0-16H120a8 8 0 0 0-6.92 4L96 88.63 78.92 60A8 8 0 0 0 72 56H32a8 8 0 0 0 0 16h35.08l18.46 31.9A60 60 0 1 0 118 175.35L128 192h-8a8 8 0 0 0 0 16h16a8 8 0 0 0 6.92-4L160 175.37l17.08 28.6A8 8 0 0 0 184 208h40a8 8 0 0 0 0-16h-35.08L160 141.07A59.88 59.88 0 0 0 176 100ZM80 144a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44Zm96 56a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44Z" />
                            </svg>
                        }
                        title="Using your marketing data in AI is painful. We fixed that."
                        subtitle="Adray reconciles your ad spend, normalizes it across platforms, and structures it so your AI can actually reason with it. Not raw API dumps. Not dashboard screenshots. A verified, precomputed Signal PDF \u2014 delivered every day."
                    />
                </AnimatedSection>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Tab sidebar */}
                    <div className="flex lg:flex-col gap-2 lg:gap-4 lg:w-[200px] flex-shrink-0">
                        {tabs.map((tab, i) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(i)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer text-left w-full ${activeTab === i
                                    ? "bg-white-7 text-white-100 border border-ad-border"
                                    : "text-ad-muted hover:text-white-90 opacity-50 hover:opacity-80"
                                    }`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`https://framerusercontent.com/images/${tab.iconSvg}`}
                                    alt=""
                                    width={18}
                                    height={18}
                                    className="flex-shrink-0"
                                />
                                <span className="t-p-sm font-medium">{tab.label}</span>
                            </button>
                        ))}
                        {/* Progress line */}
                        <div className="hidden lg:block w-full h-1 rounded-full overflow-hidden mt-4" style={{ background: "#3E286F" }}>
                            <div
                                key={activeTab}
                                className="h-full rounded-full animate-progress"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #B55CFF, #CA8AE5)",
                                }}
                            />
                        </div>
                    </div>

                    {/* Tab content */}
                    <AnimatedSection key={current.id} className="flex-1">
                        <div className="card p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="t-h4 text-white-100 mb-3">
                                    {current.title}
                                </h3>
                                <p className="t-p text-ad-muted mb-6">
                                    {current.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {current.tags.map((tag) => (
                                        <span
                                            key={tag.label}
                                            className="px-3 py-1.5 rounded-full t-p-sm bg-white-7 text-white-90 border border-ad-border"
                                        >
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={current.cta.href}
                                    className="inline-flex items-center gap-2 text-gradient t-p-sm font-semibold hover:opacity-80 transition-opacity"
                                >
                                    {current.cta.label} →
                                </a>
                            </div>

                            {/* Image */}
                            <div className="flex-1 w-full">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={current.image}
                                    alt={current.title}
                                    className="w-full h-auto rounded-2xl"
                                    style={{ filter: "sepia(1) hue-rotate(230deg) saturate(2)" }}
                                />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
}
