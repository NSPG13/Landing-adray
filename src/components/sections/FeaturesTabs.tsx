"use client";

import React, { useState } from "react";
import { Cpu, Globe, Database } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const tabs = [
    {
        id: "usage",
        label: "Usage",
        icon: Cpu,
        title: "AI Agent for work",
        description:
            "Connect to your business systems, understand your data and workflows, and activate agentic.",
        tags: ["Healthcare", "Tech Assistance", "Support", "Marketer"],
        cta: { label: "See Uses", href: "/ai-solutions" },
        image:
            "https://framerusercontent.com/images/DKhCP3xiqB8m3zBp2E6ysooT3SY.webp",
    },
    {
        id: "technology",
        label: "Technology",
        icon: Globe,
        title: "Alpha Technology",
        description:
            "Create valuable AI agents and agentic workflows with confidence and ongoing control.",
        tags: ["Multi-Agent", "Latest Model", "Dialog GPT", "Supervisor Agents"],
        cta: { label: "Explore Tech", href: "/ai-solutions" },
        image:
            "https://framerusercontent.com/images/4ABnXaFshXBVkaMyEU2NjeeqE.webp",
    },
    {
        id: "data",
        label: "Data",
        icon: Database,
        title: "Enterprise data sources",
        description:
            "Our design approach is ecosystem agnostic, allowing you to choose how you connect data.",
        tags: ["SharePoint", "SAP", "Slack", "Confluence"],
        cta: { label: "Start Setup", href: "/integration" },
        image:
            "https://framerusercontent.com/images/rYyqmKb6ZW8scPMDoDnkLicukfc.png",
    },
];

export default function FeaturesTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const current = tabs[activeTab];

    return (
        <section className="py-24 relative">
            <Container>
                <AnimatedSection>
                    <SectionHeading
                        tag="FEATURES"
                        tagIcon={<Cpu size={18} />}
                        title="All-in-one AI for enterprise"
                        subtitle="Simplify, accelerate, and transform with one connected AI ecosystem."
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
                                        ? "bg-white-7 text-white-100 border border-blue-10"
                                        : "text-light-blue hover:text-white-90"
                                    }`}
                            >
                                <tab.icon size={18} />
                                <span className="t-p-medium">{tab.label}</span>
                            </button>
                        ))}
                        {/* Progress line */}
                        <div className="hidden lg:block h-1 lg:h-auto lg:w-1 rounded-full bg-blue-20 overflow-hidden mt-2 lg:mt-0 lg:ml-4">
                            <div
                                className="h-full w-full rounded-full animate-progress"
                                style={{
                                    background: "linear-gradient(180deg, #FFCD7D, #0175FF)",
                                }}
                            />
                        </div>
                    </div>

                    {/* Tab content */}
                    <AnimatedSection key={current.id} className="flex-1">
                        <div className="card p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="t-h4 text-white-100 mb-3">{current.title}</h3>
                                <p className="t-p text-light-blue mb-6">
                                    {current.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {current.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 rounded-full t-p-sm bg-white-7 text-white-90 border border-blue-10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Button variant="secondary" href={current.cta.href}>
                                    {current.cta.label}
                                </Button>
                            </div>

                            {/* Image */}
                            <div className="flex-1 w-full">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={current.image}
                                    alt={current.title}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
}
