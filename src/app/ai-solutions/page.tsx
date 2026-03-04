"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const solutions = [
    {
        title: "AI for Work",
        headline: "Productivity at scale",
        description:
            "Empower your workforce with intelligent automation that adapts, learns, and accelerates execution across every department.",
        tags: ["Smart Scheduling", "Task Automation", "Knowledge Search", "Meeting Insights"],
        href: "/ai-solutions/ai-for-work",
        image: "https://framerusercontent.com/images/XXSw2JqvtikgOcaexTTozzVsO54.webp",
    },
    {
        title: "AI for Service",
        headline: "Redefine the CX",
        description:
            "Deliver instant, intelligent, and empathetic customer experiences with AI agents that understand context and resolve issues 24/7.",
        tags: ["Smart Routing", "Sentiment Analysis", "Real-Time Resolve", "Omnichannel"],
        href: "/ai-solutions/ai-for-service",
        image: "https://framerusercontent.com/images/4fEwCxLuKCW6ZaczMzoeCElmzBg.webp",
    },
    {
        title: "AI for Process",
        headline: "Process Intelligence",
        description:
            "Unlock end-to-end visibility across complex workflows. Detect bottlenecks, predict failures, and drive continuous improvement with AI.",
        tags: ["Workflow Mining", "Anomaly Detection", "Auto-Optimize", "Compliance"],
        href: "/ai-solutions/ai-for-process",
        image: "https://framerusercontent.com/images/K53jEm1inmwk6lcSyDVU5W7rvLM.webp",
    },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function AISolutionsPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            "url(https://framerusercontent.com/images/3ez5Goty6KdEzujpWDVyu8Um6Ns.webp)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        maskImage:
                            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
                    }}
                />
                <Container className="relative z-10 text-center">
                    <motion.p
                        className="t-p-sm uppercase tracking-widest text-ad-tag mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease }}
                    >
                        AI SOLUTIONS
                    </motion.p>
                    <motion.h1
                        className="t-h1 text-white-100 mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease }}
                    >
                        Discover the Power
                        <br />
                        of Adray
                    </motion.h1>
                    <motion.p
                        className="t-p-lg text-ad-subtitle max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease }}
                    >
                        Purpose-built AI solutions for every layer of your enterprise — from
                        the people who power it to the processes that drive it.
                    </motion.p>
                </Container>
            </section>

            {/* ── Solution Cards ── */}
            <section className="py-20 relative">
                <Container>
                    <div className="flex flex-col gap-8">
                        {solutions.map((s, i) => (
                            <AnimatedSection key={s.title} delay={i * 0.12}>
                                <div className="card relative overflow-hidden rounded-3xl">
                                    <img
                                        src={s.image}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
                                    />
                                    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
                                        <div className="flex-1">
                                            <p className="t-p-sm text-ad-tag uppercase tracking-widest mb-2">
                                                {s.title}
                                            </p>
                                            <h2 className="t-h2 text-white-100 mb-3">
                                                {s.headline}
                                            </h2>
                                            <p className="t-p text-ad-muted leading-relaxed mb-6 max-w-lg">
                                                {s.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {s.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 rounded-full text-xs font-medium bg-white-7 text-ad-subtitle border border-ad-border"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <Link
                                                href={s.href}
                                                className="inline-flex items-center gap-2 t-p-sm font-semibold text-ad-primary hover:text-white-100 transition-colors"
                                            >
                                                Learn More
                                                <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
