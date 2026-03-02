import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientBlob from "@/components/ui/GradientBlob";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Simple, transparent pricing for Adray AI platform. Choose the plan that fits your enterprise needs.",
};

const plans = [
    {
        name: "Starter",
        price: "$49",
        period: "/month",
        description: "Perfect for small teams getting started with AI automation.",
        features: [
            { text: "Up to 5 AI Agents", included: true },
            { text: "1,000 tasks/month", included: true },
            { text: "Basic analytics", included: true },
            { text: "Email support", included: true },
            { text: "5 integrations", included: true },
            { text: "API access", included: false },
            { text: "Custom workflows", included: false },
            { text: "Dedicated account manager", included: false },
        ],
        cta: "Start Free Trial",
        popular: false,
    },
    {
        name: "Professional",
        price: "$199",
        period: "/month",
        description:
            "For growing businesses that need advanced AI capabilities and support.",
        features: [
            { text: "Up to 25 AI Agents", included: true },
            { text: "10,000 tasks/month", included: true },
            { text: "Advanced analytics + AI insights", included: true },
            { text: "Priority support", included: true },
            { text: "50 integrations", included: true },
            { text: "Full API access", included: true },
            { text: "Custom workflows", included: true },
            { text: "Dedicated account manager", included: false },
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description:
            "For large organizations needing unlimited scale, security, and tailored solutions.",
        features: [
            { text: "Unlimited AI Agents", included: true },
            { text: "Unlimited tasks", included: true },
            { text: "Enterprise analytics + custom reports", included: true },
            { text: "24/7 dedicated support", included: true },
            { text: "200+ integrations", included: true },
            { text: "Full API access + webhooks", included: true },
            { text: "Custom workflows + templates", included: true },
            { text: "Dedicated account manager", included: true },
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

const faqs = [
    {
        question: "Can I switch plans at any time?",
        answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.",
    },
    {
        question: "Is there a free trial?",
        answer:
            "Yes! All plans come with a 14-day free trial. No credit card required to start.",
    },
    {
        question: "What happens when I exceed my task limit?",
        answer:
            "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional task packs.",
    },
    {
        question: "Do you offer annual billing?",
        answer:
            "Yes, annual billing comes with a 20% discount on all plans. Contact our sales team for details.",
    },
    {
        question: "What security certifications do you have?",
        answer:
            "Adray is SOC 2 Type II certified, GDPR compliant, and supports HIPAA for healthcare customers on Enterprise plans.",
    },
    {
        question: "Can I customize AI agents for my specific use case?",
        answer:
            "Absolutely. Professional and Enterprise plans include custom workflow builders. Enterprise customers also get dedicated AI training.",
    },
];

export default function PricingPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
                <GradientBlob
                    color="accent"
                    size="xl"
                    className="top-0 left-1/2 -translate-x-1/2"
                />
                <Container className="relative z-10">
                    <AnimatedSection>
                        <SectionHeading
                            badge="Pricing"
                            title="Simple, transparent <span class='text-gradient'>pricing</span>"
                            subtitle="Start free, scale as you grow. No hidden fees, no surprises."
                        />
                    </AnimatedSection>
                </Container>
            </section>

            {/* Plans */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, i) => (
                            <AnimatedSection key={plan.name} delay={i * 0.15}>
                                <div
                                    className={`rounded-2xl p-8 h-full flex flex-col relative transition-all duration-300 ${plan.popular
                                            ? "gradient-card border-ad-accent/40 glow-purple scale-105"
                                            : "gradient-card"
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <span className="px-4 py-1 rounded-full text-xs font-semibold bg-ad-accent text-white">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold text-white">
                                            {plan.name}
                                        </h3>
                                        <div className="mt-4 flex items-baseline gap-1">
                                            <span className="text-4xl font-bold text-white">
                                                {plan.price}
                                            </span>
                                            <span className="text-ad-muted-text text-sm">
                                                {plan.period}
                                            </span>
                                        </div>
                                        <p className="mt-3 text-sm text-ad-muted-text">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-3 flex-1 mb-8">
                                        {plan.features.map((feat) => (
                                            <li key={feat.text} className="flex items-center gap-3">
                                                {feat.included ? (
                                                    <Check
                                                        size={16}
                                                        className="text-ad-accent flex-shrink-0"
                                                    />
                                                ) : (
                                                    <X
                                                        size={16}
                                                        className="text-ad-muted-text/30 flex-shrink-0"
                                                    />
                                                )}
                                                <span
                                                    className={`text-sm ${feat.included
                                                            ? "text-ad-ice"
                                                            : "text-ad-muted-text/40"
                                                        }`}
                                                >
                                                    {feat.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        variant={plan.popular ? "primary" : "outline"}
                                        size="md"
                                        href="/contact"
                                        className="w-full"
                                    >
                                        {plan.cta}
                                    </Button>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-24 gradient-section">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            badge="FAQ"
                            title="Frequently asked <span class='text-gradient'>questions</span>"
                            subtitle="Everything you need to know about Adray pricing and plans."
                        />
                    </AnimatedSection>
                    <div className="max-w-3xl mx-auto grid gap-6">
                        {faqs.map((faq, i) => (
                            <AnimatedSection key={faq.question} delay={i * 0.08}>
                                <div className="gradient-card rounded-xl p-6">
                                    <h4 className="text-white font-semibold mb-2">
                                        {faq.question}
                                    </h4>
                                    <p className="text-ad-muted-text text-sm leading-relaxed">
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
