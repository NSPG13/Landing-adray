"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const part1 = [
    {
        q: "What is Adray?",
        a: "The first AI-native marketing data system. We reconcile your Meta, Google, GA4, and Shopify data into precomputed, AI-ready snapshots \u2014 then pack them into a secure portable link you drop into any AI. No dashboard. No new tool. Just your AI chat, with data it can actually work with. Native MCP connectors for Claude, ChatGPT, and Gemini \u2014 for real-time, conversational queries \u2014 arriving Q2 2026.",
    },
    {
        q: "Who is Adray for?",
        a: "Any business running digital ads \u2014 ecommerce brands, B2B companies, marketing agencies. If you\u2019re spending on Meta or Google and want your AI to help you make better decisions, Adray works for you. It runs on any website \u2014 Shopify, WooCommerce, custom builds, anything.",
    },
    {
        q: "How is this different from Triple Whale?",
        a: "Triple Whale is a dashboard \u2014 you log in, read charts, and leave. Adray is infrastructure \u2014 we pack your data into a portable link you drop into the AI you\u2019re already using. No new interface to learn. No monthly dashboard fee to justify. And because Adray precomputes and normalizes your data before it reaches any AI, you get better answers than you\u2019d ever get by connecting raw platform data. Different paradigm entirely.",
    },
    {
        q: "How is this different from Windsor.ai?",
        a: "Windsor connects your ad platforms to AI \u2014 so does Adray. The difference is what happens before the AI sees your data. Windsor passes through raw platform numbers. Adray precomputes, normalizes, and reconciles them first \u2014 resolving conflicts between what Meta claims, what Google claims, and what actually happened. The result: your AI gives you answers you can act on, not just numbers to interpret. And with Adray\u2019s portable link, your data travels with you to any AI \u2014 you\u2019re not locked into one interface.",
    },
];

const part2 = [
    {
        q: "How does the data link work?",
        a: "The moment you connect your first platform, Adray generates a secure portable snapshot of your marketing data. Paste it into any AI and ask questions in plain language. Refreshes with every sync. Native MCP connectors \u2014 one-click deep integration \u2014 arriving Q2 2026.",
    },
    {
        q: "Do I need to install the pixel to get value?",
        a: "No. Connect your ad platforms via OAuth and your data link is ready immediately. The pixel is an enrichment layer \u2014 install it and you unlock deeper attribution: reconciliation, deduplication, session-to-order stitching. But you don\u2019t need it to start.",
    },
    {
        q: "How does the pixel install work?",
        a: "Via Google Tag Manager \u2014 Adray\u2019s agent installs the tag for you, you click Publish. Or paste a single script directly into your site. Works on any platform. No developer required.",
    },
    {
        q: "How fast is setup?",
        a: "Under 2 minutes to your first data link. Connect Meta, Google, GA4, or Shopify via OAuth \u2014 your link is ready as soon as the first one connects.",
    },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="rounded-[24px] border border-ad-border bg-ad-dark overflow-hidden transition-all duration-300"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
            >
                <span className="t-p font-medium text-white-100 pr-4">{q}</span>
                <span className="w-8 h-8 rounded-full bg-white-7 border border-ad-border flex items-center justify-center flex-shrink-0">
                    {open ? (
                        <Minus size={14} className="text-white-90" />
                    ) : (
                        <Plus size={14} className="text-white-90" />
                    )}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="px-6 pb-6 t-p-sm text-ad-muted leading-relaxed">
                    {a}
                </p>
            </div>
        </div>
    );
}

export default function HomeFAQ() {
    return (
        <section className="py-20 relative">
            <Container>
                <AnimatedSection>
                    <SectionHeading
                        tag="FAQ"
                        tagIcon={
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src="https://framerusercontent.com/images/mH5OKmjNShfPxiFuUqwazYgcLNQ.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        }
                        title="Commonly asked questions"
                        subtitle=""
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Part 01 */}
                    <div>
                        <p className="t-p-sm text-ad-muted uppercase tracking-widest mb-6">
                            Part 01
                        </p>
                        <div className="space-y-4">
                            {part1.map((item) => (
                                <AnimatedSection key={item.q}>
                                    <AccordionItem q={item.q} a={item.a} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>

                    {/* Part 02 */}
                    <div>
                        <p className="t-p-sm text-ad-muted uppercase tracking-widest mb-6">
                            Part 02
                        </p>
                        <div className="space-y-4">
                            {part2.map((item) => (
                                <AnimatedSection key={item.q}>
                                    <AccordionItem q={item.q} a={item.a} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
