"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const part1 = [
    {
        q: "What is Adray?",
        a: "Adray is an AI-powered enterprise platform that deploys intelligent agents to automate workflows, enhance customer service, and drive business growth across your organization.",
    },
    {
        q: "How are AI Agents different from automation tools?",
        a: "Unlike traditional automation tools that follow rigid rules, Adray\u2019s AI Agents learn, adapt, and make intelligent decisions. They understand context, handle complex scenarios, and improve over time \u2014 going far beyond simple if-then workflows.",
    },
    {
        q: "Can Adray integrate with our existing systems?",
        a: "Yes. Adray supports 200+ integrations out of the box, including Salesforce, SAP, Slack, HubSpot, SharePoint, and more. Custom API connectors are also available on Supersonic and HyperSonic plans.",
    },
    {
        q: "Is Adray secure for enterprise use?",
        a: "Absolutely. Adray is SOC 2 Type II certified, GDPR compliant, and supports HIPAA for healthcare customers. All data is encrypted at rest and in transit with enterprise-grade security protocols.",
    },
];

const part2 = [
    {
        q: "How quickly can Adray be implemented?",
        a: "Most teams are up and running within days. Our guided onboarding, pre-built templates, and dedicated support team ensure a smooth and fast deployment \u2014 no complex setup required.",
    },
    {
        q: "Can AI Agents replace human employees?",
        a: "Adray\u2019s AI Agents are designed to augment your team, not replace them. They handle repetitive, time-consuming tasks so your people can focus on strategic, high-value work.",
    },
    {
        q: "How does Adray improve customer service?",
        a: "AI Agents resolve customer queries instantly and accurately, 24/7. They understand intent, access knowledge bases, and escalate complex issues to human agents seamlessly \u2014 improving satisfaction and response times.",
    },
    {
        q: "Is Adray scalable for global operations?",
        a: "Yes. Adray is built for enterprise scale \u2014 supporting multi-region deployments, multilingual agents, unlimited workflows, and thousands of concurrent AI actions with guaranteed uptime SLAs.",
    },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="rounded-[24px] border border-blue-10 bg-dark-blue overflow-hidden transition-all duration-300"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
            >
                <span className="t-p font-medium text-white-100 pr-4">{q}</span>
                <span className="w-8 h-8 rounded-full bg-white-7 border border-blue-10 flex items-center justify-center flex-shrink-0">
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
                <p className="px-6 pb-6 t-p-sm text-light-blue leading-relaxed">
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
                        subtitle="Answers to common questions about our AI-powered enterprise platform."
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Part 01 */}
                    <div>
                        <p className="t-p-sm text-light-blue uppercase tracking-widest mb-6">
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
                        <p className="t-p-sm text-light-blue uppercase tracking-widest mb-6">
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
