"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import BlurRevealText from "@/components/ui/BlurRevealText";
import { brandify } from "@/lib/utils";

/* ── Offices ── */
const offices = [
    {
        city: "San Francisco",
        country: "United States",
        img: "https://framerusercontent.com/images/W8C39CdQlC7KEiy4TqYSYSFey1g.jpg",
        company: "Adray Americas",
        flag: "https://framerusercontent.com/images/EKJKz0Ea1JuAJx3wKCZDIGVfoQc.png",
        description: "North American HQ — merchant onboarding, partnerships, and customer success.",
        mapUrl: "https://www.google.com/maps/place/San+Francisco,+CA,+USA/@37.7576928,-122.4787995,13z",
    },
    {
        city: "Nagpur",
        country: "India",
        img: "https://framerusercontent.com/images/SKMm9pxh4pb8gdXnHmU5aOEdHS0.jpg",
        company: "Adray India",
        flag: "",
        description: "Core engineering — pixel infrastructure, data pipeline, and AI agent development.",
        mapUrl: "https://www.google.com/maps/place/Nagpur,+Maharashtra,+India",
    },
    {
        city: "London",
        country: "United Kingdom",
        img: "https://framerusercontent.com/images/z1IF17Tru5VgU6RFBAZQOr478.jpg",
        company: "Adray UK",
        flag: "",
        description: "European merchant services and agency partnerships.",
        mapUrl: "https://www.google.com/maps/place/London,+UK",
    },
    {
        city: "Frankfurt",
        country: "Germany",
        img: "https://framerusercontent.com/images/xn6XyGqCrTCriyl4zkDnRiyqTY.jpg",
        company: "Adray Europe",
        flag: "",
        description: "GDPR compliance center and EU data residency operations.",
        mapUrl: "https://www.google.com/maps/place/Frankfurt,+Germany",
    },
    {
        city: "Dubai",
        country: "United Arab Emirates",
        img: "https://framerusercontent.com/images/0do0bgsbBj8Xi5b8pXUWVvU4ADA.jpg",
        company: "Adray MENA",
        flag: "",
        description: "MENA regional operations and cross-border ecommerce support.",
        mapUrl: "https://www.google.com/maps/place/Dubai,+UAE",
    },
];

/* ── FAQ (same as homepage) ── */
const faqs = [
    {
        q: "What exactly does Adray do?",
        a: "Adray is a free ecommerce data infrastructure layer. It installs a server-side pixel on your store, connects your Meta, Google, and Shopify data into one unified source of truth, and exposes it via an MCP endpoint so you can query it from ChatGPT, Claude, or Gemini.",
    },
    {
        q: "Is Adray really free?",
        a: "Yes. The core data layer — including the server-side pixel, platform connectors, MCP endpoint, and basic attribution — is completely free with no merchant limit. Pro is $49/mo for Looker Studio dashboards, Canva templates, and unlimited history.",
    },
    {
        q: "How does the server-side pixel work?",
        a: "Our pixel fires from your server, not the browser. That means it bypasses iOS 14+ restrictions, ad blockers, and cookie consent gaps — capturing 30-40% more conversion events than client-side tags.",
    },
    {
        q: "What platforms does Adray connect?",
        a: "Currently Meta Ads, Google Ads, and Shopify. TikTok Ads support is on the roadmap. All data is normalized and reconciled so you see one consistent picture across every platform.",
    },
    {
        q: "What is the MCP endpoint?",
        a: "MCP (Model Context Protocol) lets any AI — ChatGPT, Claude, Gemini — read your store and ad data directly. Just ask questions like 'What was my blended ROAS last week?' in natural language. No new UI to learn.",
    },
    {
        q: "How long does setup take?",
        a: "About five minutes. Install the Shopify app, connect your Meta and Google accounts, and data starts flowing immediately. No developer or agency needed.",
    },
    {
        q: "What are Adray Agents?",
        a: "Optional AI agents that run on your own LLM API key — budget pacing, creative fatigue detection, anomaly alerts, and auto-reporting. They cost per-agent and carry zero compute cost on our side.",
    },
    {
        q: "Is my data safe?",
        a: "Your data stays yours. We collect first-party conversion events server-side, store them encrypted, and never sell or share merchant data. The pixel runs on your domain — fully GDPR and privacy compliant.",
    },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function AccordionItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="rounded-[24px] border border-ad-border bg-ad-dark overflow-hidden transition-all duration-300">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
            >
                <span className="t-p font-medium text-white-100 pr-4">{brandify(q)}</span>
                <span className="w-8 h-8 rounded-full bg-white-7 border border-ad-border flex items-center justify-center flex-shrink-0">
                    {open ? <Minus size={14} className="text-white-90" /> : <Plus size={14} className="text-white-90" />}
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-6 t-p-sm text-ad-muted leading-relaxed">{brandify(a)}</p>
            </div>
        </div>
    );
}

export default function ContactPage() {
    const [selectedOffice, setSelectedOffice] = useState(0);

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
                        <img
                            src="/images/svg/xDPyxO9KaHgkC204pqOjJmGbwk.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="opacity-80"
                        />
                        CONTACT
                    </motion.div>
                    <motion.h1
                        className="t-h1 text-white-100 mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease }}
                    >
                        <BlurRevealText text="Questions About Your Data?" startDelay={0.15} />
                    </motion.h1>
                    <motion.p
                        className="t-p-lg text-ad-subtitle max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease }}
                    >
                        Whether you need onboarding help, want to explore a partnership, or just have a question — we’re here.
                    </motion.p>
                </Container>
            </section>

            {/* ── Contact Cards (1 large + 2 small) ── */}
            <section className="pb-20 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Large card with image */}
                        <AnimatedSection>
                            <div className="card overflow-hidden h-full flex flex-col">
                                <img
                                    src="https://framerusercontent.com/images/77v7OsCWhXM6Xy0eey2iJbdberY.webp"
                                    alt="Get Onboarding Help"
                                    className="w-full h-48 object-cover"
                                    style={{ filter: "sepia(1) hue-rotate(230deg) saturate(2)" }}
                                />
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="t-h4 text-white-100 mb-3">Get Onboarding Help</h3>
                                    <p className="t-p-sm text-ad-muted leading-relaxed mb-6 flex-1">
                                        Need a hand connecting your Shopify store, Meta, or Google Ads? Our team will walk you through setup and make sure your data is flowing.
                                    </p>
                                    <Button variant="primary" href="mailto:support@adray.com" className="w-full">
                                        Get Help
                                    </Button>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Two smaller cards stacked */}
                        <div className="flex flex-col gap-6">
                            <AnimatedSection delay={0.1}>
                                <div className="card p-8 flex items-start gap-6">
                                    <div className="relative flex-shrink-0 w-[40px] h-[40px] rounded-2xl bg-black overflow-hidden">
                                        <img
                                            src="https://framerusercontent.com/images/VZt72ssnuCqRvMzPSvHlDQ1iNU.png"
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <img
                                            src="/images/svg/xHfPV4X6jypeMN7rcPFFyCwnhg.svg"
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="relative z-10"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="t-h4 text-white-100 mb-2">Press &amp; Media Inquiries</h3>
                                        <p className="t-p-sm text-ad-muted leading-relaxed mb-4">
                                            For interviews, articles, and media requests.
                                        </p>
                                        <Button variant="primary" href="mailto:support@adray.com" className="w-full">
                                            Write to us
                                        </Button>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2}>
                                <div className="card p-8 flex items-start gap-6">
                                    <div className="relative flex-shrink-0 w-[40px] h-[40px] rounded-2xl bg-black overflow-hidden">
                                        <img
                                            src="https://framerusercontent.com/images/VZt72ssnuCqRvMzPSvHlDQ1iNU.png"
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <img
                                            src="/images/svg/zR2pRh2KGfrgsBHUSXxBBrc6Os.svg"
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="relative z-10"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="t-h4 text-white-100 mb-2">Agency &amp; Integration Partners</h3>
                                        <p className="t-p-sm text-ad-muted leading-relaxed mb-4">
                                            Run an agency or build ecommerce tools? Let&apos;s explore how <span style={{ fontFamily: 'var(--font-brand)' }}>Adray</span>&apos;s data layer fits your stack.
                                        </p>
                                        <Button variant="primary" href="mailto:support@adray.com" className="w-full">
                                            Let&apos;s Connect
                                        </Button>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── Support Form ── */}
            <section className="py-20 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-12">
                        <AnimatedSection>
                            <SectionHeading
                                tag="SUPPORT"
                                tagIcon={
                                    <img
                                        src="/images/svg/ovrqK10uB6vuZpVvC1WLvsJNHFU.svg"
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                }
                                title="We're Here to Help"
                                subtitle="Need help with your pixel, data sync, or agent setup? Reach out via the form, phone, or email."
                                align="left"
                                className="mb-0"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={0.1}>
                            <div>
                                <p className="t-p-sm uppercase tracking-widest text-ad-tag mb-6">GET SUPPORT</p>
                                <div className="space-y-4">
                                    <a href="tel:+18449248973" className="flex items-center gap-4 group">
                                        <div className="relative flex-shrink-0 w-[34px] h-[34px] rounded-xl bg-black overflow-hidden">
                                            <img
                                                src="https://framerusercontent.com/images/VZt72ssnuCqRvMzPSvHlDQ1iNU.png"
                                                alt=""
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            <img
                                                src="/images/svg/ZWTVawMwhcN0IIzbO291BWd5c.svg"
                                                alt=""
                                                width={34}
                                                height={34}
                                                className="relative z-10"
                                            />
                                        </div>
                                        <span className="t-p text-white-100 group-hover:text-ad-primary transition-colors">+1 844 924 8973</span>
                                    </a>
                                    <a href="mailto:support@adray.com" className="flex items-center gap-4 group">
                                        <div className="relative flex-shrink-0 w-[34px] h-[34px] rounded-xl bg-black overflow-hidden">
                                            <img
                                                src="https://framerusercontent.com/images/VZt72ssnuCqRvMzPSvHlDQ1iNU.png"
                                                alt=""
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            <img
                                                src="/images/svg/ochO9ePlZvXdFfWVus3LbO0Yw.svg"
                                                alt=""
                                                width={34}
                                                height={34}
                                                className="relative z-10"
                                            />
                                        </div>
                                        <span className="t-p text-white-100 group-hover:text-ad-primary transition-colors">support@adray.com</span>
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.15}>
                        <form
                            className="card p-8 space-y-6 max-w-5xl mx-auto"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block t-p-sm text-ad-muted mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-ad-surface border border-ad-border text-white-100 t-p-sm placeholder:text-ad-muted/40 focus:outline-none focus:border-ad-primary transition-colors"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div>
                                    <label className="block t-p-sm text-ad-muted mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-ad-surface border border-ad-border text-white-100 t-p-sm placeholder:text-ad-muted/40 focus:outline-none focus:border-ad-primary transition-colors"
                                        placeholder="Smith"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block t-p-sm text-ad-muted mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-ad-surface border border-ad-border text-white-100 t-p-sm placeholder:text-ad-muted/40 focus:outline-none focus:border-ad-primary transition-colors"
                                    placeholder="jane@yourstore.com"
                                />
                            </div>
                            <div>
                                <label className="block t-p-sm text-ad-muted mb-2">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-xl bg-ad-surface border border-ad-border text-white-100 t-p-sm placeholder:text-ad-muted/40 focus:outline-none focus:border-ad-primary transition-colors"
                                    placeholder="+1234567890"
                                />
                            </div>
                            <div>
                                <label className="block t-p-sm text-ad-muted mb-2">
                                    Query
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-ad-surface border border-ad-border text-white-100 t-p-sm placeholder:text-ad-muted/40 focus:outline-none focus:border-ad-primary transition-colors resize-none"
                                    placeholder="Share your query"
                                />
                            </div>
                            <Button variant="primary" size="lg" className="w-full">
                                Submit
                            </Button>
                        </form>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ── Offices ── */}
            <section className="py-20 relative">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            tag="OFFICES"
                            tagIcon={
                                <img
                                    src="/images/svg/3UiRUIAjek5XnV6oCtR4F5HwgOU.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                            }
                            title="Our Global Presence"
                            subtitle="Regional offices supporting merchants, agencies, and partners worldwide."
                        />
                    </AnimatedSection>

                    <AnimatedSection delay={0.15}>
                        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
                            {/* Tab sidebar */}
                            <div className="flex flex-col">
                                {offices.map((o, i) => (
                                    <button
                                        key={o.city}
                                        onClick={() => setSelectedOffice(i)}
                                        className={`relative text-left px-4 py-4 transition-colors cursor-pointer ${selectedOffice === i
                                            ? "text-white-100"
                                            : "text-ad-muted hover:text-white-90"
                                            }`}
                                    >
                                        {selectedOffice === i && (
                                            <motion.div
                                                className="absolute left-0 top-0 bottom-0 w-[2px] bg-ad-primary"
                                                layoutId="officeTab"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <p className="t-p font-medium">{o.city}</p>
                                        <p className="t-p-sm text-ad-muted">{o.country}</p>
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-6">
                                <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                                    <img
                                        src={offices[selectedOffice].img}
                                        alt={offices[selectedOffice].city}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Detail panel */}
                                <div className="card p-6 flex items-center gap-6">
                                    {offices[selectedOffice].flag && (
                                        <img
                                            src={offices[selectedOffice].flag}
                                            alt=""
                                            className="w-[57px] h-[57px] rounded-full flex-shrink-0"
                                            style={{ filter: "sepia(1) hue-rotate(230deg) saturate(2)" }}
                                        />
                                    )}
                                    <div className="flex-1">
                                        <h4 className="t-p-semibold text-white-100 mb-1">{brandify(offices[selectedOffice].company)}</h4>
                                        <p className="t-p-sm text-ad-muted">{offices[selectedOffice].description}</p>
                                    </div>
                                    <Button variant="primary" href={offices[selectedOffice].mapUrl} className="flex-shrink-0">
                                        Get Directions
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ── FAQ ── */}
            <section className="py-20 relative">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            tag="FAQ"
                            tagIcon={
                                <img
                                    src="/images/svg/mH5OKmjNShfPxiFuUqwazYgcLNQ.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                            }
                            title="Curious About <span style='font-family:var(--font-brand)'>Adray</span>?"
                            subtitle="Answers to common questions about our ecommerce data infrastructure."
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="space-y-4">
                            {faqs.slice(0, 4).map((item) => (
                                <AnimatedSection key={item.q}>
                                    <AccordionItem q={item.q} a={item.a} />
                                </AnimatedSection>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {faqs.slice(4, 8).map((item) => (
                                <AnimatedSection key={item.q}>
                                    <AccordionItem q={item.q} a={item.a} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
