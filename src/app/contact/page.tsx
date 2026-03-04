"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import BlurRevealText from "@/components/ui/BlurRevealText";

/* ── Offices ── */
const offices = [
    { city: "San Francisco", img: "https://framerusercontent.com/images/DmjBIPplEh6kPt1Q9YhkqNJc28k.jpg" },
    { city: "Nagpur", img: "https://framerusercontent.com/images/fwpUl0wnfBPrN3FCLpzaVDsXYWo.jpg" },
    { city: "London", img: "https://framerusercontent.com/images/RCVQKmWnCQxDINiuRXPLlVE5gE.jpg" },
    { city: "Frankfurt", img: "https://framerusercontent.com/images/2sOt2oZTxvZtMNwZJcE5R0dEpI.jpg" },
    { city: "Dubai", img: "https://framerusercontent.com/images/QWDnwFBhMoMqd27YO2AYSMhguk.jpg" },
];

/* ── FAQ (same as homepage) ── */
const faqs = [
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

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function AccordionItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="rounded-[24px] border border-ad-border bg-ad-dark overflow-hidden transition-all duration-300">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
            >
                <span className="t-p font-medium text-white-100 pr-4">{q}</span>
                <span className="w-8 h-8 rounded-full bg-white-7 border border-ad-border flex items-center justify-center flex-shrink-0">
                    {open ? <Minus size={14} className="text-white-90" /> : <Plus size={14} className="text-white-90" />}
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-6 t-p-sm text-ad-muted leading-relaxed">{a}</p>
            </div>
        </div>
    );
}

export default function ContactPage() {
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
                        CONTACT
                    </motion.div>
                    <motion.h1
                        className="t-h1 text-white-100 mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease }}
                    >
                        <BlurRevealText text="Need Smarter AI Solutions?" startDelay={0.15} />
                    </motion.h1>
                    <motion.p
                        className="t-p-lg text-ad-subtitle max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease }}
                    >
                        Connect any app or system to build a unified enterprise intelligence layer.
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
                                    alt="Connect with Expert Team"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="t-h4 text-white-100 mb-3">Connect with Expert Team</h3>
                                    <p className="t-p-sm text-ad-muted leading-relaxed mb-6 flex-1">
                                        Talk to our AI solutions specialists to learn how Adray fits your business needs.
                                    </p>
                                    <a
                                        href="mailto:support@adray.com"
                                        className="inline-flex items-center gap-2 t-p-sm font-semibold text-gradient"
                                    >
                                        Get Help →
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Two smaller cards stacked */}
                        <div className="flex flex-col gap-6">
                            <AnimatedSection delay={0.1}>
                                <div className="card p-8 flex items-start gap-6">
                                    <img
                                        src="https://framerusercontent.com/images/xHfPV4X6jypeMN7rcPFFyCwnhg.svg"
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="flex-shrink-0"
                                    />
                                    <div>
                                        <h3 className="t-h4 text-white-100 mb-2">Press &amp; Media Inquiries</h3>
                                        <p className="t-p-sm text-ad-muted leading-relaxed mb-4">
                                            For press inquiries, media kits, and brand collaboration, reach out to our communications team.
                                        </p>
                                        <a
                                            href="mailto:support@adray.com"
                                            className="inline-flex items-center gap-2 t-p-sm font-semibold text-gradient"
                                        >
                                            Write to us →
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2}>
                                <div className="card p-8 flex items-start gap-6">
                                    <img
                                        src="https://framerusercontent.com/images/zR2pRh2KGfrgsBHUSXxBBrc6Os.svg"
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="flex-shrink-0"
                                    />
                                    <div>
                                        <h3 className="t-h4 text-white-100 mb-2">Partner &amp; Collaboration</h3>
                                        <p className="t-p-sm text-ad-muted leading-relaxed mb-4">
                                            Explore partnership opportunities, integrations, and co-development programs.
                                        </p>
                                        <a
                                            href="mailto:support@adray.com"
                                            className="inline-flex items-center gap-2 t-p-sm font-semibold text-gradient"
                                        >
                                            Let&apos;s Connect →
                                        </a>
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
                    <AnimatedSection>
                        <SectionHeading
                            tag="SUPPORT"
                            tagIcon={
                                <img
                                    src="https://framerusercontent.com/images/hkm6Dj8bW8kfsHv25c6tUxDVgU.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                            }
                            title="We're Here to Help"
                        />
                    </AnimatedSection>

                    <AnimatedSection delay={0.15}>
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-10 max-w-4xl mx-auto">
                            {/* Form */}
                            <form
                                className="card p-8 space-y-6"
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
                                        placeholder="jane@framer.com"
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

                            {/* Contact info sidebar */}
                            <div className="flex flex-col gap-6">
                                <div className="card p-6">
                                    <p className="t-p-sm text-ad-muted mb-1">Phone</p>
                                    <p className="t-p text-white-100">+1 844 924 8973</p>
                                </div>
                                <div className="card p-6">
                                    <p className="t-p-sm text-ad-muted mb-1">Email</p>
                                    <a href="mailto:support@adray.com" className="t-p text-white-100 hover:text-ad-primary transition-colors">
                                        support@adray.com
                                    </a>
                                </div>
                                <div className="card p-6">
                                    <p className="t-p-sm text-ad-tag uppercase tracking-widest mb-2">
                                        HQ
                                    </p>
                                    <p className="t-p-semibold text-white-100 mb-1">
                                        Adray Americas
                                    </p>
                                    <p className="t-p-sm text-ad-muted leading-relaxed mb-4">
                                        548 Market St, Suite 36879
                                        <br />
                                        San Francisco, CA 94104
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=548+Market+St+San+Francisco+CA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 t-p-sm font-semibold text-gradient"
                                    >
                                        Get Directions →
                                    </a>
                                </div>
                            </div>
                        </div>
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
                                    src="https://framerusercontent.com/images/3UovOTKirX07vhyWYJGSliEt1E4.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                            }
                            title="Our Global Presence"
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {offices.map((o, i) => (
                            <AnimatedSection key={o.city} delay={i * 0.08}>
                                <div className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
                                    <img
                                        src={o.img}
                                        alt={o.city}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)",
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="t-p-semibold text-white-100">{o.city}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
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
                                    src="https://framerusercontent.com/images/mH5OKmjNShfPxiFuUqwazYgcLNQ.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                            }
                            title="Frequently Asked Questions"
                        />
                    </AnimatedSection>

                    <div className="max-w-2xl mx-auto space-y-4">
                        {faqs.map((item) => (
                            <AnimatedSection key={item.q}>
                                <AccordionItem q={item.q} a={item.a} />
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
