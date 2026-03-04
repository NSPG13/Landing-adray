"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";

/* ── Blog data store (mirrors blog listing) ── */
const posts: Record<
    string,
    {
        title: string;
        date: string;
        image: string;
        body: string[];
    }
> = {
    "breaking-down-data-silos": {
        title: "Breaking Down Data Silos: Unlocking True Business Potential",
        date: "Mar 4, 2025",
        image: "https://framerusercontent.com/images/vKz0xspnPDwIVlnVSJnqxZ6oLk.jpg",
        body: [
            "Data silos are one of the biggest obstacles to enterprise efficiency. When departments store and manage data independently — without shared access or unified governance — the result is fragmented decision-making, duplicated effort, and missed opportunities.",
            "Adray's Data Unification Engine connects disparate data sources into a single, live intelligence layer. From CRMs and ERPs to cloud storage and internal databases, every data point becomes accessible, searchable, and actionable — without moving or copying data.",
            "By eliminating silos, enterprises unlock a 360-degree view of their operations. Marketing sees what sales is doing. Finance understands customer trends. Leadership gets real-time dashboards that reflect the entire business, not just one slice of it.",
            "The impact is measurable: faster reporting cycles, fewer errors in cross-functional handoffs, and a dramatic reduction in the time teams spend searching for information. Data becomes an asset, not a bottleneck.",
        ],
    },
    "revolutionizing-data-intelligence": {
        title: "Revolutionizing Data Intelligence with Adray's AI Agent Builder",
        date: "Mar 9, 2025",
        image: "https://framerusercontent.com/images/Tj0JWCTlLgCVTlWJyqPdz4UVNQ.jpg",
        body: [
            "Traditional BI tools give you dashboards. Adray's AI Agent Builder gives you intelligence that acts. Instead of passively visualizing data, AI Agents built with Adray actively monitor, analyze, and respond to business events in real time.",
            "The Agent Builder enables teams — even non-technical ones — to design intelligent workflows that pull from multiple data sources, apply contextual logic, and execute actions automatically. Whether it's flagging anomalies in spend, routing support tickets, or predicting churn, AI Agents do the heavy lifting.",
            "This shift from reactive dashboards to proactive intelligence represents a fundamental change in how enterprises operate. Decisions are no longer delayed by manual analysis — they happen in the moment, powered by agents that understand your business context.",
        ],
    },
    "real-time-data-tracking": {
        title: "Real-Time Data Tracking: The Competitive Edge Your Enterprise Needs",
        date: "Mar 20, 2025",
        image: "https://framerusercontent.com/images/Rpw8AONdDdlfyhEoxpB5AhYMk.jpg",
        body: [
            "In today's fast-moving markets, yesterday's data is already outdated. Real-time data tracking gives enterprises the ability to respond instantly to changes — whether in customer behavior, market conditions, or internal operations.",
            "Adray's real-time engine processes data streams with sub-second latency, feeding live insights into dashboards, alerts, and AI Agents simultaneously. This means sales teams see pipeline changes as they happen, ops teams spot issues before they escalate, and leadership makes decisions based on what's happening now, not last week.",
            "The competitive advantage is clear: enterprises that operate on real-time data move faster, serve customers better, and outperform those still relying on batch-processed reports.",
        ],
    },
    "predictive-analytics": {
        title: "Predictive Analytics: The Next Frontier in Enterprise Decision-Making",
        date: "Mar 14, 2025",
        image: "https://framerusercontent.com/images/4Uv5FqUJzLcj1d9R5xbUwLMHsRE.jpg",
        body: [
            "Predictive analytics moves beyond understanding what happened to forecasting what will happen next. For enterprises, this means anticipating demand, identifying risks, and uncovering revenue opportunities before they become obvious.",
            "Adray's predictive capabilities are built directly into the platform — no separate ML tools or data science teams required. AI Agents can be configured to forecast trends, score leads, predict churn, or flag anomalies using historical patterns and live data.",
            "The result is a proactive enterprise that doesn't just react to the market — it stays ahead of it. From supply chain planning to customer retention, predictive analytics powered by Adray turns data into foresight.",
        ],
    },
    "smarter-decisions-automated-insights": {
        title: "Smarter Decisions with Automated Data Insights",
        date: "Mar 12, 2025",
        image: "https://framerusercontent.com/images/Rpw8AONdDdlfyhEoxpB5AhYMk.jpg",
        body: [
            "Every enterprise generates vast volumes of data. The challenge isn't collection — it's extraction. Turning raw data into actionable insights requires time, expertise, and often, manual effort that doesn't scale.",
            "Adray automates the insight generation process end to end. AI Agents continuously scan your data landscape, surface meaningful patterns, and deliver recommendations directly to the people who need them — in Slack, email, dashboards, or custom apps.",
            "This automation doesn't replace human judgment — it amplifies it. By eliminating the grunt work of data preparation and analysis, teams can focus on interpreting insights and taking strategic action. The result: faster decisions, fewer blind spots, and a culture of data-driven execution.",
        ],
    },
};

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = posts[slug];

    if (!post) {
        return (
            <section className="pt-40 pb-20">
                <Container className="text-center">
                    <h1 className="t-h1 text-white-100 mb-6">Post Not Found</h1>
                    <p className="t-p text-ad-muted mb-8">
                        The blog post you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 t-p-sm font-semibold text-gradient"
                    >
                        ← Back to Blog
                    </Link>
                </Container>
            </section>
        );
    }

    return (
        <article>
            {/* ── Hero ── */}
            <section className="relative pt-40 pb-10 overflow-hidden">
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease }}
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 t-p-sm text-ad-tag mb-8 hover:text-white-100 transition-colors"
                        >
                            ← Back to Blog
                        </Link>
                        <p className="t-p-sm text-ad-tag mb-4">{post.date}</p>
                        <h1 className="t-h1 text-white-100 mb-8 max-w-3xl">
                            {post.title}
                        </h1>
                    </motion.div>
                </Container>
            </section>

            {/* ── Cover Image ── */}
            <section className="pb-12">
                <Container>
                    <motion.div
                        className="card overflow-hidden rounded-3xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease }}
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full aspect-[2/1] object-cover"
                        />
                    </motion.div>
                </Container>
            </section>

            {/* ── Body ── */}
            <section className="pb-20">
                <Container>
                    <motion.div
                        className="max-w-2xl mx-auto space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease }}
                    >
                        {post.body.map((p, i) => (
                            <p key={i} className="t-p-lg text-ad-muted leading-relaxed">
                                {p}
                            </p>
                        ))}
                    </motion.div>
                </Container>
            </section>
        </article>
    );
}
