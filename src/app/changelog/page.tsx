import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientBlob from "@/components/ui/GradientBlob";
import { Sparkles, Bug, Zap, Wrench } from "lucide-react";

export const metadata: Metadata = {
    title: "Changelog",
    description:
        "Stay up to date with the latest Adray platform updates, new features, and improvements.",
};

type ChangeType = "feature" | "fix" | "improvement" | "breaking";

interface ChangeItem {
    type: ChangeType;
    text: string;
}

interface Release {
    version: string;
    date: string;
    title: string;
    description: string;
    changes: ChangeItem[];
}

const typeConfig: Record<ChangeType, { icon: typeof Sparkles; color: string; label: string }> = {
    feature: { icon: Sparkles, color: "text-ad-accent bg-ad-accent/10", label: "Feature" },
    fix: { icon: Bug, color: "text-green-400 bg-green-400/10", label: "Fix" },
    improvement: { icon: Zap, color: "text-yellow-400 bg-yellow-400/10", label: "Improvement" },
    breaking: { icon: Wrench, color: "text-red-400 bg-red-400/10", label: "Breaking" },
};

const releases: Release[] = [
    {
        version: "2.4.0",
        date: "February 28, 2026",
        title: "Multi-Agent Collaboration",
        description:
            "Introducing the ability for multiple AI agents to collaborate on complex tasks, sharing context and coordinating actions.",
        changes: [
            { type: "feature", text: "Multi-agent collaboration framework with shared context" },
            { type: "feature", text: "Agent-to-agent communication protocol" },
            { type: "improvement", text: "50% faster agent response time" },
            { type: "fix", text: "Fixed memory leak in long-running agent sessions" },
        ],
    },
    {
        version: "2.3.0",
        date: "February 15, 2026",
        title: "Advanced Analytics Dashboard",
        description:
            "Completely redesigned analytics dashboard with real-time metrics, custom report builder, and AI-powered insights.",
        changes: [
            { type: "feature", text: "New analytics dashboard with real-time data" },
            { type: "feature", text: "Custom report builder with drag-and-drop" },
            { type: "improvement", text: "Improved data visualization engine" },
            { type: "fix", text: "Resolved timezone issues in scheduled reports" },
        ],
    },
    {
        version: "2.2.0",
        date: "January 30, 2026",
        title: "Enterprise SSO & Governance",
        description:
            "Enhanced security features including SAML 2.0 SSO, role-based access control, and comprehensive audit logging.",
        changes: [
            { type: "feature", text: "SAML 2.0 and OIDC single sign-on" },
            { type: "feature", text: "Granular role-based access control (RBAC)" },
            { type: "feature", text: "Comprehensive audit logging" },
            { type: "improvement", text: "Improved API rate limiting" },
        ],
    },
    {
        version: "2.1.0",
        date: "January 10, 2026",
        title: "Workflow Templates",
        description:
            "Pre-built workflow templates for common enterprise use cases. Get started in minutes, not days.",
        changes: [
            { type: "feature", text: "50+ pre-built workflow templates" },
            { type: "feature", text: "Template marketplace for community contributions" },
            { type: "improvement", text: "Faster workflow deployment pipeline" },
            { type: "fix", text: "Fixed edge case in conditional workflow branches" },
            { type: "fix", text: "Resolved webhook retry logic" },
        ],
    },
    {
        version: "2.0.0",
        date: "December 15, 2025",
        title: "Adray 2.0 — Major Release",
        description:
            "Complete platform redesign with new AI engine, improved performance, and a brand new developer experience.",
        changes: [
            { type: "feature", text: "New AI engine with 3x faster inference" },
            { type: "feature", text: "Redesigned developer portal and SDK" },
            { type: "feature", text: "GraphQL API support" },
            { type: "breaking", text: "API v1 endpoints deprecated (6-month migration period)" },
            { type: "improvement", text: "99.99% uptime SLA for Enterprise plans" },
        ],
    },
];

export default function ChangelogPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
                <GradientBlob
                    color="accent"
                    size="lg"
                    className="top-0 right-1/4"
                />
                <Container className="relative z-10">
                    <AnimatedSection>
                        <SectionHeading
                            badge="Changelog"
                            title="What&apos;s new in <span class='text-gradient'>Adray</span>"
                            subtitle="Stay up to date with the latest features, improvements, and fixes."
                        />
                    </AnimatedSection>
                </Container>
            </section>

            {/* Timeline */}
            <section className="py-24">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        {releases.map((release, i) => (
                            <AnimatedSection key={release.version} delay={i * 0.1}>
                                <div className="relative pl-8 pb-16 last:pb-0 border-l border-ad-muted-border/30">
                                    {/* Timeline dot */}
                                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-ad-accent" />

                                    {/* Version badge */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-ad-accent/10 text-ad-accent border border-ad-accent/20">
                                            v{release.version}
                                        </span>
                                        <span className="text-sm text-ad-muted-text">
                                            {release.date}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {release.title}
                                    </h3>
                                    <p className="text-ad-muted-text text-sm mb-6">
                                        {release.description}
                                    </p>

                                    {/* Changes */}
                                    <div className="space-y-3">
                                        {release.changes.map((change, j) => {
                                            const config = typeConfig[change.type];
                                            const Icon = config.icon;
                                            return (
                                                <div
                                                    key={j}
                                                    className="flex items-start gap-3 text-sm"
                                                >
                                                    <span
                                                        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium ${config.color} flex-shrink-0`}
                                                    >
                                                        <Icon size={12} />
                                                        {config.label}
                                                    </span>
                                                    <span className="text-ad-ice">{change.text}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
