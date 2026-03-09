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
        title: "Precomputed, AI-Ready Snapshots",
        description:
            "Not raw API dumps. Structured, normalized, compressed data your AI can actually work with — resulting in better outputs, fewer wasted tokens, and more accurate answers.",
        tags: [
            { label: "Structured" },
            { label: "Normalized" },
            { label: "Compressed" },
            { label: "AI-Ready" },
        ],
        cta: { label: "Get Started", href: "/pricing" },
        image:
            "https://framerusercontent.com/images/DKhCP3xiqB8m3zBp2E6ysooT3SY.webp",
    },
    {
        id: "normalized",
        label: "Normalized",
        iconSvg: "DzDW9qxLWt1R7V7DL7f89IPJfk.svg",
        title: "Cross-Platform Normalization",
        description:
            "Meta, Google, GA4, and Shopify speaking the same language before your AI sees a single number. No more conflicting metrics or platform bias.",
        tags: [
            { label: "Meta" },
            { label: "Google" },
            { label: "GA4" },
            { label: "Shopify" },
        ],
        cta: { label: "Get Started", href: "/pricing" },
        image:
            "https://framerusercontent.com/images/4ABnXaFshXBVkaMyEU2NjeeqE.webp",
    },
    {
        id: "enriched",
        label: "Enriched",
        iconSvg: "Akgvq4ROltzdkv9bMr9wLtsd5c.svg",
        title: "The Adray Intelligence Pixel",
        description:
            "Want even richer data? The pixel is an enrichment layer — not a requirement. Install it and your attribution gets significantly deeper. Works on any website. Install via Google Tag Manager in two clicks, or paste a single script.",
        tags: [
            { label: "Server-Side" },
            { label: "First-Party" },
            { label: "Deduplication" },
            { label: "Session Stitching" },
        ],
        cta: { label: "Get Started", href: "/pricing" },
        image:
            "https://framerusercontent.com/images/rYyqmKb6ZW8scPMDoDnkLicukfc.png",
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
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src="https://framerusercontent.com/images/GFmvU3dWENS60V2v8Jglw0qJ7zY.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        }
                        title="Everyone else gives AI your data. We give AI the truth."
                        subtitle="Any connector can move raw numbers from your ad platforms into an LLM. Adray precomputes your marketing data before it ever reaches an AI."
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
