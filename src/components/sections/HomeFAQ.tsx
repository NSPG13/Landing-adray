"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const part1 = [
    {
        q: "What is Adray?",
        a: "Adray is a free ecommerce data layer that reconciles your Meta, Google, and Shopify data into one source of truth. Connect it to ChatGPT, Claude, or Gemini via MCP and get real attribution insights \u2014 no new dashboard to learn.",
    },
    {
        q: "How is Adray different from Triple Whale or Northbeam?",
        a: "Those tools are paid dashboards you have to learn and log into. Adray is free infrastructure \u2014 we own the data layer, and you analyze it with the AI tools you already use. No new UI, no monthly dashboard fee, and our server-side pixel captures 30\u201340% more events.",
    },
    {
        q: "What platforms does Adray connect to?",
        a: "Adray connects to Meta Ads, Google Ads, and Shopify out of the box. WooCommerce and BigCommerce connectors are coming soon. On the AI side, we support ChatGPT, Claude, and Gemini via MCP protocol.",
    },
    {
        q: "Is my ad data secure?",
        a: "Yes. All data is collected server-side and encrypted at rest and in transit. Our pixel never touches the browser, making it immune to iOS privacy changes and ad blockers. Your data stays yours.",
    },
];

const part2 = [
    {
        q: "How quickly can I set up Adray?",
        a: "Under 5 minutes. Install from the Shopify App Store, connect your ad accounts via OAuth, and your MCP endpoint is ready. No code, no JavaScript, no developer needed.",
    },
    {
        q: "What are Adray marketing agents?",
        a: "Marketing agents are AI-powered automations that act on your data \u2014 reallocating budgets, detecting creative fatigue, flagging anomalies, and generating weekly reports. They run on your own LLM key, so there\u2019s near-zero cost to Adray.",
    },
    {
        q: "What does the free plan include?",
        a: "The free plan includes the Shopify app with auto-install pixel, Meta and Google connectors, an MCP endpoint for any major LLM, pre-built prompt templates, and a limited attribution window. No credit card required.",
    },
    {
        q: "What\u2019s the $49 Pro plan for?",
        a: "Pro unlocks Looker Studio dashboards, Canva creative feed integration, unlimited attribution history, and priority support. It\u2019s built for merchants who want the full visualization and creative workflow on top of the free data layer.",
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
                        title="Curious About Adray?"
                        subtitle="Answers to common questions about our ecommerce data platform."
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
