import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientBlob from "@/components/ui/GradientBlob";
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Adray — our mission, vision, and the team building the next generation of enterprise AI agents.",
};

const values = [
    {
        icon: Target,
        title: "Mission Driven",
        description:
            "We exist to democratize enterprise AI, making powerful automation accessible to every business regardless of size.",
    },
    {
        icon: Eye,
        title: "Transparency",
        description:
            "Every AI decision is explainable. We believe in open, transparent AI systems that earn trust through clarity.",
    },
    {
        icon: Heart,
        title: "Customer First",
        description:
            "Our customers' success is our success. We design every feature based on real enterprise needs and feedback.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "We build bridges between humans and AI, creating hybrid workflows where both excel at what they do best.",
    },
    {
        icon: Award,
        title: "Excellence",
        description:
            "Enterprise-grade quality in everything we ship. From 99.99% uptime to SOC 2 compliance — we don't cut corners.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Always pushing the boundaries of what AI can do for enterprise operations, investing heavily in R&D.",
    },
];

const team = [
    {
        name: "Alexandra Wei",
        role: "CEO & Co-Founder",
        initials: "AW",
        bio: "Former VP at Google Cloud. 15+ years in enterprise AI.",
    },
    {
        name: "David Park",
        role: "CTO & Co-Founder",
        initials: "DP",
        bio: "Ex-OpenAI researcher. PhD in Machine Learning from MIT.",
    },
    {
        name: "Maria Santos",
        role: "VP of Product",
        initials: "MS",
        bio: "Previously led product at Salesforce Einstein AI.",
    },
    {
        name: "James Mitchell",
        role: "VP of Engineering",
        initials: "JM",
        bio: "Built scalable systems at AWS. 12 years in distributed computing.",
    },
    {
        name: "Priya Patel",
        role: "Head of AI Research",
        initials: "PP",
        bio: "Published 40+ papers on NLP. Former research lead at DeepMind.",
    },
    {
        name: "Thomas Anderson",
        role: "Head of Sales",
        initials: "TA",
        bio: "Scaled enterprise sales at Databricks from $10M to $200M ARR.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
                <GradientBlob
                    color="accent"
                    size="xl"
                    className="top-0 right-[-200px]"
                />
                <Container className="relative z-10">
                    <AnimatedSection>
                        <SectionHeading
                            badge="About Adray"
                            title="Building the future of <span class='text-gradient'>enterprise AI</span>"
                            subtitle="We're a team of AI researchers, engineers, and business leaders united by a single mission: making enterprise AI that actually works."
                        />
                    </AnimatedSection>
                </Container>
            </section>

            {/* Story */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <div>
                                <span className="text-ad-accent text-sm font-semibold uppercase tracking-wider">
                                    Our Story
                                </span>
                                <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
                                    From research lab to enterprise platform
                                </h3>
                                <div className="mt-6 space-y-4 text-ad-muted-text leading-relaxed">
                                    <p>
                                        Adray was founded in 2023 by a team of AI researchers who
                                        saw a critical gap: while AI capabilities were advancing
                                        rapidly, enterprises struggled to implement and benefit from
                                        these breakthroughs.
                                    </p>
                                    <p>
                                        We built Adray to bridge that gap — creating AI agents that
                                        understand enterprise workflows, integrate seamlessly with
                                        existing tools, and deliver measurable ROI from day one.
                                    </p>
                                    <p>
                                        Today, Adray powers operations for 500+ enterprises across
                                        40 countries, from Fortune 500 companies to fast-growing
                                        startups that need enterprise-grade AI.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <div className="gradient-card rounded-2xl p-8 glow-purple aspect-square flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-ad-accent/10 via-transparent to-ad-deep/20" />
                                <div className="relative text-center">
                                    <div className="text-6xl font-bold text-gradient mb-4">
                                        2023
                                    </div>
                                    <div className="text-ad-muted-text">Founded</div>
                                    <div className="mt-8 grid grid-cols-2 gap-6">
                                        <div>
                                            <div className="text-2xl font-bold text-white">500+</div>
                                            <div className="text-xs text-ad-muted-text">
                                                Enterprises
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">40+</div>
                                            <div className="text-xs text-ad-muted-text">
                                                Countries
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">150+</div>
                                            <div className="text-xs text-ad-muted-text">
                                                Team Members
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">$50M+</div>
                                            <div className="text-xs text-ad-muted-text">
                                                Raised
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Values */}
            <section className="py-24 gradient-section">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            badge="Our Values"
                            title="What drives us <span class='text-gradient'>every day</span>"
                            subtitle="The principles that guide our decisions, shape our culture, and define how we build AI for the enterprise."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, i) => (
                            <AnimatedSection key={value.title} delay={i * 0.1}>
                                <Card className="h-full">
                                    <div className="w-12 h-12 rounded-xl bg-ad-accent/10 border border-ad-accent/20 flex items-center justify-center mb-5">
                                        <value.icon size={22} className="text-ad-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-ad-muted-text leading-relaxed">
                                        {value.description}
                                    </p>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Team */}
            <section className="py-24">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            badge="Our Team"
                            title="Meet the people behind <span class='text-gradient'>Adray</span>"
                            subtitle="A world-class team from Google, OpenAI, Salesforce, AWS, DeepMind, and more."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map((member, i) => (
                            <AnimatedSection key={member.name} delay={i * 0.1}>
                                <Card className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-ad-deep mx-auto flex items-center justify-center text-ad-primary text-xl font-bold mb-4">
                                        {member.initials}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-ad-accent text-sm mt-1">{member.role}</p>
                                    <p className="text-ad-muted-text text-sm mt-3">
                                        {member.bio}
                                    </p>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
