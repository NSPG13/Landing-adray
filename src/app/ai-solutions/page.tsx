import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
    Bot,
    LineChart,
    MessageSquare,
    FileSearch,
    Database,
    Shield,
    Cpu,
    Network,
    Layers,
} from "lucide-react";

export const metadata: Metadata = {
    title: "AI Solutions",
    description:
        "Explore Adray's AI solutions — intelligent agents for work, service, and process automation.",
};

const solutions = [
    {
        icon: Bot,
        title: "AI Work Agents",
        description:
            "Autonomous agents that handle repetitive tasks, data entry, and complex business logic — freeing your team to focus on what matters.",
        capabilities: [
            "Autonomous task completion",
            "Multi-step workflow execution",
            "Context-aware decision making",
            "Self-improving performance",
        ],
    },
    {
        icon: LineChart,
        title: "Analytics Intelligence",
        description:
            "Deep learning analytics that surface insights, predict trends, and recommend actions across your entire data landscape.",
        capabilities: [
            "Predictive analytics",
            "Anomaly detection",
            "Real-time dashboards",
            "Natural language queries",
        ],
    },
    {
        icon: MessageSquare,
        title: "Conversational AI",
        description:
            "Enterprise-grade chatbots and virtual assistants that understand context, handle complex queries, and escalate intelligently.",
        capabilities: [
            "Multi-turn conversations",
            "Sentiment analysis",
            "Knowledge base integration",
            "Omnichannel support",
        ],
    },
    {
        icon: FileSearch,
        title: "Document Intelligence",
        description:
            "AI-powered document processing that extracts, classifies, and validates information from any document type with 99%+ accuracy.",
        capabilities: [
            "OCR & extraction",
            "Classification & tagging",
            "Compliance validation",
            "Multi-format support",
        ],
    },
    {
        icon: Database,
        title: "Data Integration Hub",
        description:
            "Unified data layer that connects, transforms, and synchronizes data across 200+ enterprise tools and databases.",
        capabilities: [
            "Real-time sync",
            "Data transformation",
            "Schema mapping",
            "CDC streaming",
        ],
    },
    {
        icon: Shield,
        title: "Security & Governance",
        description:
            "AI-driven security monitoring, access control, and governance framework to keep your data safe and compliant.",
        capabilities: [
            "Threat detection",
            "Access management",
            "Audit logging",
            "Compliance automation",
        ],
    },
];

const useCases = [
    {
        icon: Cpu,
        title: "IT Operations",
        description: "Automate incident management, monitoring, and infrastructure scaling with intelligent AIOps.",
    },
    {
        icon: Network,
        title: "Supply Chain",
        description: "Optimize logistics, demand forecasting, and vendor management with ML-powered automation.",
    },
    {
        icon: Layers,
        title: "Finance",
        description: "Streamline invoicing, reconciliation, fraud detection, and financial reporting with AI agents.",
    },
];

export default function AISolutionsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <Container className="relative z-10">
                    <AnimatedSection>
                        <SectionHeading
                            tag="AI Solutions"
                            title="Enterprise AI that actually works"
                            subtitle="From autonomous agents to intelligent analytics — a complete AI platform designed for enterprise-scale operations."
                        />
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <div className="flex justify-center gap-4">
                            <Button variant="primary" size="lg" href="/contact">
                                Request Demo
                            </Button>
                            <Button variant="outline" size="lg" href="/pricing">
                                View Pricing
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Solutions Grid */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, i) => (
                            <AnimatedSection key={solution.title} delay={i * 0.1}>
                                <Card className="h-full flex flex-col">
                                    <div className="w-14 h-14 rounded-2xl bg-sky-blue/10 border border-sky-blue/20 flex items-center justify-center mb-6">
                                        <solution.icon size={26} className="text-sky-blue" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {solution.title}
                                    </h3>
                                    <p className="text-light-blue text-sm leading-relaxed mb-6 flex-1">
                                        {solution.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {solution.capabilities.map((cap) => (
                                            <li
                                                key={cap}
                                                className="flex items-center gap-2 text-xs text-white-90"
                                            >
                                                <div className="w-1 h-1 rounded-full bg-sky-blue" />
                                                {cap}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* How it works */}
            <section className="py-24">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            tag="How It Works"
                            title="Go live in three simple steps"
                            subtitle="From setup to value delivery in days, not months."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                step: "01",
                                title: "Connect",
                                description:
                                    "Link your existing tools and data sources through our secure integration hub.",
                            },
                            {
                                step: "02",
                                title: "Configure",
                                description:
                                    "Set up AI agents with our no-code builder tailored to your business workflows.",
                            },
                            {
                                step: "03",
                                title: "Scale",
                                description:
                                    "Deploy across your organization and watch AI agents optimize operations automatically.",
                            },
                        ].map((step, i) => (
                            <AnimatedSection key={step.step} delay={i * 0.15}>
                                <div className="text-center">
                                    <div className="text-5xl font-bold text-gradient mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-light-blue text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Use Cases */}
            <section className="py-24">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            tag="Use Cases"
                            title="AI solutions for every department"
                            subtitle="See how enterprises across industries use Adray to transform their operations."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {useCases.map((uc, i) => (
                            <AnimatedSection key={uc.title} delay={i * 0.1}>
                                <Card className="h-full">
                                    <div className="w-12 h-12 rounded-xl bg-sky-blue/10 border border-sky-blue/20 flex items-center justify-center mb-5">
                                        <uc.icon size={22} className="text-sky-blue" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">
                                        {uc.title}
                                    </h3>
                                    <p className="text-sm text-light-blue leading-relaxed">
                                        {uc.description}
                                    </p>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-24">
                <Container>
                    <AnimatedSection>
                        <div className="card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-dark-blue/10" />
                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Ready to see Adray in action?
                                </h2>
                                <p className="text-light-blue max-w-lg mx-auto mb-8">
                                    Schedule a personalized demo and discover how AI agents can
                                    transform your enterprise operations.
                                </p>
                                <Button variant="primary" size="lg" href="/contact">
                                    Schedule Demo
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    );
}
