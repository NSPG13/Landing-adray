"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const tabs = [
    {
        id: "precomputed",
        label: "Precomputed",
        icon: (
            <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
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
            <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                <path d="M216 40H40a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Zm-8 160H48V56h160Z" opacity=".2" />
                <path d="M128 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm88-96H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Zm-8 144H48V64h160Z" />
            </svg>
        ),
        title: "Cross-Platform Normalization",
        description:
            "Meta, Google, and GA4 measure differently, attribute differently, and report differently. Adray speaks all three languages \u2014 then translates them into one reconciled view before your AI sees a single number. No more conflicting metrics. No more platform bias.",
        tags: ["Meta", "Google", "GA4"],
        cta: { label: "Get Started", href: "/pricing" },
        image: "/images/Cross-Platform Normalization.png",
    },
    {
        id: "enriched",
        label: "Enriched",
        icon: (
            <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                <path d="M208 104v96a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-96Z" opacity=".2" />
                <path d="M128 24a80.09 80.09 0 0 0-80 80v96a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-96a80.09 80.09 0 0 0-80-80Zm64 176H64v-96a64 64 0 0 1 128 0Zm-64-96a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0v-40a8 8 0 0 1 8-8Z" />
            </svg>
        ),
        title: "The Adray Intelligence Pixel",
        description:
            "Want even richer data? Install the Adray pixel and your attribution gets significantly deeper. Server-side events, first-party identity, deduplication, session stitching \u2014 all flowing back into your Signal. Works on any website. Two clicks via Google Tag Manager, or paste a single script.",
        tags: ["Server-Side", "First-Party", "Deduplication", "Session Stitching"],
        cta: { label: "Get Started", href: "/pricing" },
        image: "/images/The Adray Intelligence Pixel.png",
    },
];

export default function FeaturesTabs() {
    const [activeTab, setActiveTab] = useState(0);

    const card0 = useRef<HTMLDivElement>(null);
    const card1 = useRef<HTMLDivElement>(null);
    const card2 = useRef<HTMLDivElement>(null);
    const cardRefs = [card0, card1, card2];

    /* per-card scroll progress: 0 = top at viewport bottom, 1 = top at 25% from viewport top */
    const { scrollYProgress: sp0 } = useScroll({ target: card0, offset: ["start end", "start 0.25"] });
    const { scrollYProgress: sp1 } = useScroll({ target: card1, offset: ["start end", "start 0.25"] });
    const { scrollYProgress: sp2 } = useScroll({ target: card2, offset: ["start end", "start 0.25"] });

    /* card entrance: slide from 50% right to 0 */
    const x0 = useTransform(sp0, [0, 0.6], ["50%", "0%"]);
    const x1 = useTransform(sp1, [0, 0.6], ["50%", "0%"]);
    const x2 = useTransform(sp2, [0, 0.6], ["50%", "0%"]);
    const xs = [x0, x1, x2];

    /* card fade-in */
    const o0 = useTransform(sp0, [0, 0.35], [0, 1]);
    const o1 = useTransform(sp1, [0, 0.35], [0, 1]);
    const o2 = useTransform(sp2, [0, 0.35], [0, 1]);
    const os = [o0, o1, o2];

    /* progress bar widths */
    const bar0 = useTransform(sp0, (v: number) => `${Math.min(v, 1) * 100}%`);
    const bar1 = useTransform(sp1, (v: number) => `${Math.min(v, 1) * 100}%`);
    const bar2 = useTransform(sp2, (v: number) => `${Math.min(v, 1) * 100}%`);
    const bars = [bar0, bar1, bar2];

    /* detect which card is most centred in viewport */
    const detectActive = () => {
        const vals = [sp0.get(), sp1.get(), sp2.get()];
        let best = -1;
        let bestDist = Infinity;
        vals.forEach((v, i) => {
            if (v > 0.05 && v < 0.95) {
                const dist = Math.abs(v - 0.5);
                if (dist < bestDist) { bestDist = dist; best = i; }
            }
        });
        if (best >= 0) setActiveTab(best);
    };
    useMotionValueEvent(sp0, "change", detectActive);
    useMotionValueEvent(sp1, "change", detectActive);
    useMotionValueEvent(sp2, "change", detectActive);

    return (
        <section className="py-20 relative">
            <Container>
                {/* Header */}
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

                {/* Sticky sidebar + scrolling cards */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    {/* Sticky sidebar — desktop only */}
                    <div className="hidden lg:flex flex-col gap-8 lg:sticky lg:top-32 self-start w-[200px] flex-shrink-0 pt-4">
                        {tabs.map((tab, i) => (
                            <div key={tab.id}>
                                <div
                                    className={`flex items-center gap-2.5 mb-3 transition-all duration-300 ${activeTab === i ? "text-white-100" : "text-ad-muted opacity-40"
                                        }`}
                                >
                                    <span className="flex-shrink-0">{tab.icon}</span>
                                    <span className="t-p font-medium">{tab.label}</span>
                                </div>
                                <div className="h-[2px] rounded-full overflow-hidden" style={{ background: "#3E286F" }}>
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{
                                            width: bars[i],
                                            background: "linear-gradient(90deg, #B55CFF, #CA8AE5)",
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scrolling cards */}
                    <div className="flex-1 flex flex-col gap-20 overflow-x-clip">
                        {tabs.map((tab, i) => (
                            <motion.div
                                key={tab.id}
                                ref={cardRefs[i]}
                                style={{ x: xs[i], opacity: os[i] }}
                            >
                                <div className="card p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-1">
                                        <h3 className="t-h4 text-white-100 mb-3">{tab.title}</h3>
                                        <p className="t-p text-ad-muted mb-6">{tab.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {tab.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1.5 rounded-full t-p-sm bg-white-7 text-white-90 border border-ad-border"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={tab.cta.href}
                                            className="inline-flex items-center gap-2 text-gradient t-p-sm font-semibold hover:opacity-80 transition-opacity"
                                        >
                                            {tab.cta.label} &rarr;
                                        </a>
                                    </div>
                                    <div className="flex-1 w-full">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={tab.image}
                                            alt={tab.title}
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
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
