"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

/* ── Plans ── */
const plans = [
    {
        name: "Sonic",
        monthlyPrice: 49,
        features: [
            "Access to core AI Agents",
            "Workflow automation for teams",
            "Basic integrations",
            "Standard reporting & analytics",
            "Email support",
            "5,000 AI actions per month",
        ],
        trust: "300+ teams trusted this",
        bgImage:
            "https://framerusercontent.com/images/XXSw2JqvtikgOcaexTTozzVsO54.webp",
    },
    {
        name: "Supersonic",
        monthlyPrice: 99,
        features: [
            "Everything in Sonic Monthly",
            "Advanced AI Agents for workflows",
            "Priority integrations",
            "Enhanced dashboards",
            "24/7 support via chat",
            "20,000 AI actions per month",
        ],
        trust: "250+ growing enterprises",
        bgImage:
            "https://framerusercontent.com/images/4fEwCxLuKCW6ZaczMzoeCElmzBg.webp",
    },
    {
        name: "HyperSonic",
        monthlyPrice: null,
        subtitle: "Unlimited automation with dedicated enterprise support.",
        features: [
            "Enterprise-grade AI Agent",
            "Full custom API access",
            "Unlimited workflows & automation",
        ],
        trust: null,
        bgImage:
            "https://framerusercontent.com/images/K53jEm1inmwk6lcSyDVU5W7rvLM.webp",
    },
];

/* ── Comparison Table ── */
type CellValue = boolean | string;

interface ComparisonRow {
    feature: string;
    basic: CellValue;
    standard: CellValue;
    enterprise: CellValue;
}

const essentialFeatures: ComparisonRow[] = [
    { feature: "Track up to 100 keywords", basic: true, standard: true, enterprise: true },
    { feature: "Weekly ranking updates", basic: true, standard: true, enterprise: true },
    { feature: "Basic reporting and alerts", basic: false, standard: true, enterprise: true },
    { feature: "AI lead generation", basic: false, standard: true, enterprise: true },
    { feature: "Real-time ranking updates", basic: false, standard: true, enterprise: true },
];

const advancedFeatures: ComparisonRow[] = [
    { feature: "Competitor analysis for", basic: "5", standard: "20", enterprise: "100" },
    { feature: "Customize interface", basic: true, standard: true, enterprise: true },
    { feature: "24/7 priority support", basic: false, standard: true, enterprise: true },
    { feature: "Full API access", basic: false, standard: true, enterprise: true },
    { feature: "White-label reporting", basic: false, standard: true, enterprise: true },
];

/* ── FAQ ── */
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

function CellDisplay({ value }: { value: CellValue }) {
    if (value === true)
        return <Check size={18} className="text-ad-primary mx-auto" />;
    if (value === false)
        return <X size={18} className="text-ad-muted/40 mx-auto" />;
    return <span className="t-p-sm text-white-90">{value}</span>;
}

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

export default function PricingPage() {
    const [yearly, setYearly] = useState(false);

    const getPrice = (monthly: number | null) => {
        if (monthly === null) return null;
        return yearly ? Math.round(monthly * 12 * 0.7) : monthly;
    };

    const getPeriod = (monthly: number | null) => {
        if (monthly === null) return "";
        return yearly ? "/year" : "/month";
    };

    return (
        <>
            {/* ── Hero ── */}
            <section className="relative pt-40 pb-10 overflow-hidden">
                {/* Background gradient */}
                <img
                    src="https://framerusercontent.com/images/H3Q7Up1GD9JyEYygvN5U7fWpqYQ.webp"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <Container className="relative z-10 text-center">
                    <motion.div
                        className="flex items-center gap-3 justify-center mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease }}
                    >
                        <img
                            src="https://framerusercontent.com/images/3UovOTKirX07vhyWYJGSliEt1E4.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="opacity-80"
                        />
                        <span className="t-p-sm uppercase tracking-widest text-white-100">PRICING</span>
                    </motion.div>
                    <motion.h1
                        className="t-h1 text-white-100 mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease }}
                    >
                        Flexible Plans for Every Enterprise
                    </motion.h1>
                    <motion.p
                        className="t-p-lg text-ad-subtitle max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease }}
                    >
                        From startups to global enterprises, Adray offers AI-powered solutions.
                    </motion.p>
                </Container>
            </section>

            {/* ── Toggle + Cards ── */}
            <section className="py-10 relative">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            tag="PLANS"
                            title="Flexible Plans for Every"
                            subtitle="Choose the plan that fits your team and scales with your business."
                            tagIcon={
                                <img
                                    src="https://framerusercontent.com/images/jQJ8TgGax14f2upuHQKSjpr1jmg.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                            }
                        />
                    </AnimatedSection>

                    {/* Toggle */}
                    <div className="flex items-center justify-center mb-12">
                        <div
                            className="relative inline-flex items-center rounded-2xl border border-ad-border"
                            style={{ background: "rgba(255,255,255,0.1)", padding: "4px" }}
                        >
                            <div
                                className="absolute top-1 bottom-1 rounded-[4px] bg-white-100 transition-all duration-300"
                                style={{
                                    width: "calc(50% - 4px)",
                                    left: yearly ? "calc(50% + 2px)" : "4px",
                                }}
                            />
                            <button
                                onClick={() => setYearly(false)}
                                className={`relative z-10 px-6 py-2.5 t-p-sm font-medium rounded-[4px] transition-colors duration-200 cursor-pointer ${!yearly ? "text-black-100" : "text-white-90"}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setYearly(true)}
                                className={`relative z-10 px-6 py-2.5 t-p-sm font-medium rounded-[4px] transition-colors duration-200 cursor-pointer flex items-center gap-2 ${yearly ? "text-black-100" : "text-white-90"}`}
                            >
                                Yearly
                                <span
                                    className="text-xs font-semibold"
                                    style={{ color: "rgb(255,172,10)" }}
                                >
                                    30%off
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Plan cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan, i) => (
                            <AnimatedSection key={plan.name} delay={i * 0.12}>
                                <div className="card relative overflow-hidden h-full flex flex-col">
                                    <img
                                        src={plan.bgImage}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
                                    />
                                    <div className="relative z-10 p-8 flex flex-col h-full">
                                        {plan.monthlyPrice !== null ? (
                                            <>
                                                <h3 className="t-h4 text-white-100">{plan.name}</h3>
                                                <div className="mt-3 flex items-baseline gap-1">
                                                    <span className="text-4xl font-bold text-white-90">
                                                        ${getPrice(plan.monthlyPrice)}
                                                    </span>
                                                    <span className="text-ad-muted t-p-sm">
                                                        {getPeriod(plan.monthlyPrice)}
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <p className="t-h4 text-gradient">Go for more power</p>
                                                <h3 className="t-h3 text-white-100 mt-2">{plan.name}</h3>
                                            </>
                                        )}

                                        {plan.subtitle && (
                                            <p className="mt-2 t-p-sm text-ad-muted">{plan.subtitle}</p>
                                        )}

                                        <div className="mt-6 mb-8">
                                            <Button variant="primary" href="/contact" className="w-full">
                                                Contact Us
                                            </Button>
                                        </div>

                                        <ul className="space-y-3 mt-auto">
                                            {plan.features.map((f) => (
                                                <li key={f} className="flex items-start gap-3">
                                                    <Check size={16} className="text-ad-primary flex-shrink-0 mt-0.5" />
                                                    <span className="t-p-sm text-white-90">{f}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {plan.trust && (
                                            <p className="mt-8 t-p-sm text-ad-muted text-center">
                                                {plan.trust}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── Comparison Table ── */}
            <section className="py-20 relative">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            tag="COMPARISON"
                            tagIcon={
                                <img
                                    src="https://framerusercontent.com/images/X5M3y8eb51ZE3hAx5kOkcLqc83U.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                            }
                            title="Choose Smarter Plans"
                            subtitle="See what each plan offers and find the perfect fit for you."
                        />
                    </AnimatedSection>

                    <AnimatedSection delay={0.15}>
                        <div className="card overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-ad-border">
                                            <th className="p-6 t-p-sm text-ad-muted font-medium w-1/3">Feature</th>
                                            <th className="p-6 t-p-sm text-white-100 font-semibold text-center">Basic plan</th>
                                            <th className="p-6 t-p-sm text-white-100 font-semibold text-center">Standard plan</th>
                                            <th className="p-6 t-p-sm text-white-100 font-semibold text-center">Enterprise plan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Essential */}
                                        <tr>
                                            <td
                                                colSpan={4}
                                                className="px-6 pt-6 pb-3 t-p-sm uppercase tracking-widest text-ad-tag font-medium"
                                            >
                                                Essential features
                                            </td>
                                        </tr>
                                        {essentialFeatures.map((row) => (
                                            <tr key={row.feature} className="border-t border-ad-border/50">
                                                <td className="px-6 py-4 t-p-sm text-white-90">{row.feature}</td>
                                                <td className="px-6 py-4 text-center"><CellDisplay value={row.basic} /></td>
                                                <td className="px-6 py-4 text-center"><CellDisplay value={row.standard} /></td>
                                                <td className="px-6 py-4 text-center"><CellDisplay value={row.enterprise} /></td>
                                            </tr>
                                        ))}

                                        {/* Advanced */}
                                        <tr>
                                            <td
                                                colSpan={4}
                                                className="px-6 pt-8 pb-3 t-p-sm uppercase tracking-widest text-ad-tag font-medium"
                                            >
                                                Advance features
                                            </td>
                                        </tr>
                                        {advancedFeatures.map((row) => (
                                            <tr key={row.feature} className="border-t border-ad-border/50">
                                                <td className="px-6 py-4 t-p-sm text-white-90">{row.feature}</td>
                                                <td className="px-6 py-4 text-center"><CellDisplay value={row.basic} /></td>
                                                <td className="px-6 py-4 text-center"><CellDisplay value={row.standard} /></td>
                                                <td className="px-6 py-4 text-center"><CellDisplay value={row.enterprise} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ── Decorative gradient ── */}
            <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: 0 }}>
                <img
                    src="https://framerusercontent.com/images/PEUUUxYckhxt8G82fn4Y0LPz5s.png"
                    alt=""
                    className="absolute pointer-events-none"
                    style={{ width: 3296, height: 2255, transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
                />
            </div>

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
                            title="Curious About Adray?"
                            subtitle="Answers to common questions about our AI-powered enterprise platform."
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
