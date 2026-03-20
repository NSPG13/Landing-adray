"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const TAB_DURATION = 8000; // ms per tab

const tabs = [
    {
        id: "precomputed",
        label: "Precomputed",
        icon: (
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                <path d="M224 48H32a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Zm-8 144H40V64h176Z" opacity=".2" />
                <path d="M224 48H32a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Zm-8 144H40V64h176ZM88 112a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8Zm0 32a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8Z" />
            </svg>
        ),
        title: "Precomputed, AI-Ready Signal",
        description:
            "Your platforms report what they want you to see. Adray computes what\u2019s true \u2014 ROAS on net revenue, blended CAC against verified new customers, anomaly flags, and campaign-level truth. Structured for AI to read.",
        tags: ["Structured", "Normalized", "Compressed", "AI-Ready"],
        cta: { label: "Get Started", href: "/pricing" },
        image: "/images/adray-analytics.png",
    },
    {
        id: "normalized",
        label: "Normalized",
        icon: (
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                <path d="M216 40H40a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Zm-8 160H48V56h160Z" opacity=".2" />
                <path d="M128 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm88-96H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Zm-8 144H48V64h160Z" />
            </svg>
        ),
        title: "Cross-Platform Normalization",
        description:
            "Meta, Google, and GA4 measure differently, attribute differently, and report differently. Adray speaks all three languages &mdash; then translates them into one reconciled view before your AI sees a single number. No more conflicting metrics. No more platform bias.",
        tags: ["Meta", "Google", "GA4"],
        cta: { label: "Get Started", href: "/pricing" },
        image: "/images/Cross-Platform Normalization.png",
    },
    {
        id: "enriched",
        label: "Enriched",
        icon: (
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                <path d="M208 104v96a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-96Z" opacity=".2" />
                <path d="M128 24a80.09 80.09 0 0 0-80 80v96a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-96a80.09 80.09 0 0 0-80-80Zm64 176H64v-96a64 64 0 0 1 128 0Zm-64-96a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0v-40a8 8 0 0 1 8-8Z" />
            </svg>
        ),
        title: "The Adray Intelligence Pixel",
        description:
            "Want even richer data? Install the Adray pixel and your attribution gets significantly deeper. Server-side events, first-party identity, deduplication, session stitching &mdash; all flowing back into your Signal. Works on any website. Two clicks via Google Tag Manager, or paste a single script.",
        tags: ["Server-Side", "First-Party", "Deduplication", "Session Stitching"],
        cta: { label: "Get Started", href: "/pricing" },
        image: "/images/The Adray Intelligence Pixel.png",
    },
];

export default function FeaturesTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [progress, setProgress] = useState(0);
    const startRef = useRef<number | null>(null);
    const rafRef = useRef<number>(0);

    const advance = useCallback(() => {
        setActiveTab((prev) => (prev + 1) % tabs.length);
        setProgress(0);
        startRef.current = null;
    }, []);

    useEffect(() => {
        const tick = (now: number) => {
            if (startRef.current === null) startRef.current = now;
            const elapsed = now - startRef.current;
            const pct = Math.min(elapsed / TAB_DURATION, 1);
            setProgress(pct);
            if (pct >= 1) {
                advance();
            } else {
                rafRef.current = requestAnimationFrame(tick);
            }
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [activeTab, advance]);

    const handleTabClick = (i: number) => {
        setActiveTab(i);
        setProgress(0);
        startRef.current = null;
    };

    const current = tabs[activeTab];

    return (
        <section className="py-20 relative">
            <Container>
                {/* Split header */}
                <AnimatedSection>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-full t-p-sm bg-white-7 text-white-90 border border-ad-border">
                            <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M117.25 157.92a60 60 0 0 1-34.17-34.17L24 140.25V216h76.25ZM138.75 98.08a60 60 0 0 1 34.17 34.17L232 115.75V40h-76.25Z" opacity=".2" />
                                <path d="M176 100a59.77 59.77 0 0 0-21.59 4L130.08 72H176a8 8 0 0 0 0-16H120a8 8 0 0 0-6.92 4L96 88.63 78.92 60A8 8 0 0 0 72 56H32a8 8 0 0 0 0 16h35.08l18.46 31.9A60 60 0 1 0 118 175.35L128 192h-8a8 8 0 0 0 0 16h16a8 8 0 0 0 6.92-4L160 175.37l17.08 28.6A8 8 0 0 0 184 208h40a8 8 0 0 0 0-16h-35.08L160 141.07A59.88 59.88 0 0 0 176 100ZM80 144a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44Zm96 56a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44Z" />
                            </svg>
                            WHY IT WORKS
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                        <h2 className="t-h2 text-white-100 lg:max-w-[50%]">
                            Using your marketing data in AI is painful. We fixed that.
                        </h2>
                        <p className="t-p text-ad-muted lg:max-w-[42%] lg:text-right">
                            Adray reconciles your ad spend, normalizes it across platforms, and structures it so your AI can actually reason with it. Not raw API dumps. Not dashboard screenshots. A verified, precomputed Signal PDF&nbsp;&mdash; delivered every day.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Tab selector row */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    {tabs.map((tab, i) => {
                        const isActive = activeTab === i;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(i)}
                                className="flex items-center gap-3 cursor-pointer group text-left flex-1"
                            >
                                {/* Icon */}
                                <span
                                    className={`flex-shrink-0 transition-colors duration-300 ${isActive ? "text-white-100" : "text-ad-muted opacity-50 group-hover:opacity-80"
                                        }`}
                                >
                                    {tab.icon}
                                </span>

                                {/* Progress line */}
                                <span className="relative h-[2px] flex-1 rounded-full overflow-hidden" style={{ background: "#3E286F" }}>
                                    {isActive && (
                                        <span
                                            className="absolute inset-y-0 left-0 rounded-full"
                                            style={{
                                                width: `${progress * 100}%`,
                                                background: "linear-gradient(90deg, #B55CFF, #CA8AE5)",
                                            }}
                                        />
                                    )}
                                </span>

                                {/* Label */}
                                <span
                                    className={`t-p-sm font-medium whitespace-nowrap transition-colors duration-300 ${isActive ? "text-white-100" : "text-ad-muted opacity-50 group-hover:opacity-80"
                                        }`}
                                >
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab content card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                    >
                        <div className="card p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="t-h4 text-white-100 mb-3">
                                    {current.title}
                                </h3>
                                <p
                                    className="t-p text-ad-muted mb-6"
                                    dangerouslySetInnerHTML={{ __html: current.description }}
                                />
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {current.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 rounded-full t-p-sm bg-white-7 text-white-90 border border-ad-border"
                                        >
                                            {tag}
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

                            {/* Image with left-fade mask */}
                            <div className="flex-1 w-full relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={current.image}
                                    alt={current.title}
                                    className="w-full h-auto rounded-2xl"
                                    style={{
                                        filter: "sepia(1) hue-rotate(230deg) saturate(2)",
                                        maskImage: "linear-gradient(90deg, transparent 0%, black 15%, black 100%)",
                                        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 15%, black 100%)",
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </section>
    );
}
