"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BlurRevealText from "@/components/ui/BlurRevealText";

const blogs = [
    {
        title: "Breaking Down Data Silos: Unlocking True Business Potential",
        date: "Mar 4, 2025",
        slug: "breaking-down-data-silos",
        image: "https://framerusercontent.com/images/vKz0xspnPDwIVlnVSJnqxZ6oLk.jpg",
        featured: true,
    },
    {
        title: "Revolutionizing Data Intelligence with Adray's AI Agent Builder",
        date: "Mar 9, 2025",
        slug: "revolutionizing-data-intelligence",
        image: "https://framerusercontent.com/images/Tj0JWCTlLgCVTlWJyqPdz4UVNQ.jpg",
    },
    {
        title: "Real-Time Data Tracking: The Competitive Edge Your Enterprise Needs",
        date: "Mar 20, 2025",
        slug: "real-time-data-tracking",
        image: "https://framerusercontent.com/images/Rpw8AONdDdlfyhEoxpB5AhYMk.jpg",
    },
    {
        title: "Predictive Analytics: The Next Frontier in Enterprise Decision-Making",
        date: "Mar 14, 2025",
        slug: "predictive-analytics",
        image: "https://framerusercontent.com/images/4Uv5FqUJzLcj1d9R5xbUwLMHsRE.jpg",
    },
    {
        title: "Breaking Down Data Silos: Unlocking True Business Potential",
        date: "Mar 4, 2025",
        slug: "breaking-down-data-silos",
        image: "https://framerusercontent.com/images/vKz0xspnPDwIVlnVSJnqxZ6oLk.jpg",
    },
    {
        title: "Smarter Decisions with Automated Data Insights",
        date: "Mar 12, 2025",
        slug: "smarter-decisions-automated-insights",
        image: "https://framerusercontent.com/images/Rpw8AONdDdlfyhEoxpB5AhYMk.jpg",
    },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function BlogPage() {
    const featured = blogs[0];
    const grid = blogs.slice(1);

    return (
        <>
            {/* ── Hero ── */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <Container className="relative z-10 text-center">
                    <motion.div
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white-7 text-white-100 t-p-sm mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease }}
                    >
                        BLOGS
                    </motion.div>
                    <motion.h1
                        className="t-h1 text-white-100 mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease }}
                    >
                        <BlurRevealText text="AI Innovation and technology share" startDelay={0.15} />
                    </motion.h1>
                    <motion.p
                        className="t-p-lg text-ad-subtitle max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease }}
                    >
                        Explore in-depth insights, trends, and innovations shaping the future of enterprise AI.
                    </motion.p>
                </Container>
            </section>

            {/* ── Featured Post ── */}
            <section className="pb-12 relative">
                <Container>
                    <AnimatedSection>
                        <Link href={`/blog/${featured.slug}`} className="block group">
                            <div className="card overflow-hidden rounded-3xl">
                                <div className="relative aspect-[2.2/1] overflow-hidden">
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                        <p className="t-p-sm text-ad-tag mb-3">{featured.date}</p>
                                        <h2 className="t-h2 text-white-100 max-w-2xl">
                                            {featured.title}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ── Blog Grid ── */}
            <section className="pb-20 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {grid.map((post, i) => (
                            <AnimatedSection key={`${post.slug}-${i}`} delay={i * 0.08}>
                                <Link href={`/blog/${post.slug}`} className="block group h-full">
                                    <div className="card overflow-hidden rounded-2xl h-full flex flex-col">
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <p className="t-p-sm text-ad-tag mb-2">
                                                {post.date}
                                            </p>
                                            <h3 className="t-p-semibold text-white-100 leading-snug">
                                                {post.title}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
