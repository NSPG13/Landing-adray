"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Check, DollarSign } from "lucide-react";
import { useState } from "react";

const plans = [
    {
        name: "Sonic",
        monthlyPrice: 49,
        description:
            "Designed for small teams and startups exploring the potential of intelligent AI agents.",
        features: [
            "Up to 5 AI Agents",
            "1,000 automated tasks per month",
            "Basic analytics dashboard",
            "Email support (48h response)",
            "5 pre-built integrations",
        ],
        image:
            "https://framerusercontent.com/images/n4TP2GIMIYnwG8phVpbQRmVlxU.png",
    },
    {
        name: "Supersonic",
        monthlyPrice: 99,
        description:
            "Built for growing businesses that need advanced AI capabilities, automation, and support.",
        features: [
            "Up to 25 AI Agents",
            "10,000 tasks per month",
            "Advanced analytics & AI insights",
            "Priority support (12h response)",
            "50+ integrations + custom API access",
        ],
        popular: true,
        image:
            "https://framerusercontent.com/images/dPCNk9mR1ADMP6nJMBnz9vNmEA.png",
    },
    {
        name: "HyperSonic",
        monthlyPrice: null,
        description:
            "Tailored for large organizations that demand unlimited scale, enterprise-grade security, and dedicated support.",
        features: [
            "Unlimited AI Agents",
            "Unlimited automated tasks",
            "Enterprise analytics + custom reports",
            "24/7 dedicated support + SLA",
            "200+ integrations + webhooks + SSO",
        ],
        image:
            "https://framerusercontent.com/images/jLKr5Ic8zfN5Dh1ksJhLjkXdUI.png",
    },
];

const faqs = [
    {
        question: "Can I switch plans at any time?",
        answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\u2019ll prorate the difference.",
    },
    {
        question: "Is there a free trial?",
        answer:
            "Yes! All plans come with a 14-day free trial. No credit card required to start.",
    },
    {
        question: "What happens when I exceed my task limit?",
        answer:
            "We\u2019ll notify you when you\u2019re approaching your limit. You can upgrade your plan or purchase additional task packs.",
    },
    {
        question: "Do you offer annual billing?",
        answer:
            "Yes, annual billing comes with a 30% discount on all plans. Simply toggle to yearly on the pricing section above.",
    },
    {
        question: "What security certifications do you have?",
        answer:
            "Adray is SOC 2 Type II certified, GDPR compliant, and supports HIPAA for healthcare customers on Enterprise plans.",
    },
    {
        question: "Can I customize AI agents for my specific use case?",
        answer:
            "Absolutely. Supersonic and HyperSonic plans include custom workflow builders. HyperSonic customers also get dedicated AI training.",
    },
];

export default function PricingPage() {
    const [yearly, setYearly] = useState(false);

    const getPrice = (monthly: number | null) => {
        if (monthly === null) return "Custom";
        return yearly ? `$${Math.round(monthly * 12 * 0.7)}` : `$${monthly}`;
    };

    const getPeriod = (monthly: number | null) => {
        if (monthly === null) return "";
        return yearly ? "/year" : "/month";
    };

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-12 overflow-hidden">
                <Container className="relative z-10">
                    <AnimatedSection>
                        <SectionHeading
                            tag="PRICING"
                            tagIcon={<DollarSign size={18} />}
                            title="Plans & Pricing"
                            subtitle="Start free, scale as you grow. No hidden fees, no surprises."
                        />
                    </AnimatedSection>

                    {/* Billing toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span
                            className={`t-p-sm cursor-pointer transition-colors ${!yearly ? "text-white-100" : "text-light-blue"
                                }`}
                            onClick={() => setYearly(false)}
                        >
                            Monthly
                        </span>
                        <button
                            onClick={() => setYearly(!yearly)}
                            className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${yearly ? "bg-sky-blue" : "bg-blue-20"
                                }`}
                        >
                            <span
                                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white-100 transition-transform ${yearly ? "translate-x-6" : ""
                                    }`}
                            />
                        </button>
                        <span
                            className={`t-p-sm cursor-pointer transition-colors ${yearly ? "text-white-100" : "text-light-blue"
                                }`}
                            onClick={() => setYearly(true)}
                        >
                            Yearly
                        </span>
                        {yearly && (
                            <span className="px-2 py-0.5 rounded-md bg-dark-yellow/20 text-light-yellow text-xs font-semibold">
                                30% off
                            </span>
                        )}
                    </div>
                </Container>
            </section>

            {/* Plans */}
            <section className="py-12 pb-24">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan, i) => (
                            <AnimatedSection key={plan.name} delay={i * 0.15}>
                                <div className="card relative overflow-hidden h-full flex flex-col">
                                    {/* Background image */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={plan.image}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
                                    />
                                    <div className="relative z-10 p-8 flex flex-col h-full">
                                        {plan.popular && (
                                            <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold bg-sky-blue/20 text-sky-blue border border-sky-blue/30 mb-4">
                                                Most Popular
                                            </span>
                                        )}
                                        <h3 className="t-h4 text-white-100">{plan.name}</h3>
                                        <div className="mt-3 flex items-baseline gap-1">
                                            <span className="text-4xl font-bold text-white-100">
                                                {getPrice(plan.monthlyPrice)}
                                            </span>
                                            <span className="text-light-blue t-p-sm">
                                                {getPeriod(plan.monthlyPrice)}
                                            </span>
                                        </div>
                                        <p className="mt-3 t-p-sm text-light-blue">
                                            {plan.description}
                                        </p>

                                        <ul className="space-y-3 flex-1 mt-6 mb-8">
                                            {plan.features.map((feat) => (
                                                <li key={feat} className="flex items-start gap-3">
                                                    <Check
                                                        size={16}
                                                        className="text-sky-blue flex-shrink-0 mt-0.5"
                                                    />
                                                    <span className="t-p-sm text-white-90">{feat}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            variant={plan.popular ? "primary" : "outline"}
                                            size="md"
                                            href="/contact"
                                            className="w-full"
                                        >
                                            Contact Us
                                        </Button>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-24">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            tag="FAQ"
                            tagIcon={<DollarSign size={18} />}
                            title="Frequently asked questions"
                            subtitle="Everything you need to know about Adray pricing and plans."
                        />
                    </AnimatedSection>
                    <div className="max-w-3xl mx-auto grid gap-4">
                        {faqs.map((faq, i) => (
                            <AnimatedSection key={faq.question} delay={i * 0.08}>
                                <div className="card p-6">
                                    <h4 className="text-white-100 font-semibold mb-2">
                                        {faq.question}
                                    </h4>
                                    <p className="text-light-blue t-p-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
