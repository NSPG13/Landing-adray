import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowLeft, Clock, Share2 } from "lucide-react";

// Static blog data for demo
const posts: Record<
    string,
    {
        title: string;
        category: string;
        date: string;
        readTime: string;
        content: string[];
    }
> = {
    "ai-agents-transforming-enterprise": {
        title: "How AI Agents Are Transforming Enterprise Operations in 2026",
        category: "AI & Enterprise",
        date: "Feb 25, 2026",
        readTime: "8 min read",
        content: [
            "The enterprise landscape is undergoing a fundamental transformation. AI agents — autonomous software entities that can perceive, reason, and act — are moving from research labs to production environments at an unprecedented pace.",
            "Unlike traditional automation tools that follow rigid, pre-defined rules, AI agents can adapt to new situations, learn from outcomes, and collaborate with human team members. This flexibility makes them ideal for the dynamic, complex workflows that characterize modern enterprise operations.",
            "At Adray, we've observed three key trends shaping how enterprises adopt AI agents: First, the shift from single-task automation to multi-step, cross-functional workflows. Second, the growing importance of AI governance and explainability. Third, the emergence of multi-agent systems where specialized agents collaborate on complex tasks.",
            "Consider a typical enterprise scenario: processing incoming customer requests. A traditional system might categorize the request and route it to the right department. An AI agent, however, can understand the full context, pull relevant data from multiple systems, draft a response, check it against compliance rules, and either resolve the issue autonomously or present a recommended solution to a human reviewer.",
            "The results speak for themselves. Our enterprise customers report an average 40% efficiency gain within the first 90 days of deployment, with some achieving up to 70% reduction in manual processing time for routine operations.",
            "Looking ahead, we expect 2026 to be the year when AI agents become a standard part of the enterprise toolkit — not as a novelty, but as an essential operational capability that drives competitive advantage.",
        ],
    },
    "building-scalable-ai-workflows": {
        title: "Building Scalable AI Workflows: A Complete Guide",
        category: "Tutorial",
        date: "Feb 18, 2026",
        readTime: "12 min read",
        content: [
            "Building AI workflows that scale requires careful planning, the right architecture, and a deep understanding of your business processes. In this guide, we'll walk through the complete process from design to deployment.",
            "Step 1: Map Your Current Processes. Before introducing AI, document your existing workflows in detail. Identify bottlenecks, manual touchpoints, and decision points. This mapping exercise often reveals quick wins — processes that are ripe for automation.",
            "Step 2: Design Your Agent Architecture. Choose between single-agent and multi-agent architectures based on complexity. For straightforward, linear workflows, a single agent with clear instructions often suffices. For complex, branching processes with multiple stakeholders, consider a multi-agent system.",
            "Step 3: Configure Data Sources and Integrations. Your AI agents are only as good as the data they can access. Set up secure connections to your CRM, ERP, databases, and communication tools. Adray's integration hub supports 200+ connectors with enterprise-grade security.",
            "Step 4: Build and Test. Use visual workflow builders for rapid prototyping, then refine with custom logic where needed. Always test with real-world data and edge cases. Set up monitoring and alerting from day one.",
            "Step 5: Deploy and Scale. Start with a pilot team, measure results, and expand gradually. Use auto-scaling to handle peak loads and implement fallback mechanisms for when agents encounter situations outside their training.",
        ],
    },
    "enterprise-ai-security-best-practices": {
        title: "Enterprise AI Security: Best Practices for 2026",
        category: "Security",
        date: "Feb 10, 2026",
        readTime: "6 min read",
        content: [
            "As AI systems become more deeply integrated into enterprise operations, security becomes paramount. Here are the essential practices every organization should implement.",
            "Data Governance: Establish clear policies for what data AI agents can access, how it's processed, and where it's stored. Implement data classification and ensure sensitive data is encrypted at rest and in transit.",
            "Access Control: Use role-based access control (RBAC) to limit what each AI agent can do. Apply the principle of least privilege — agents should only have access to the resources they need for their specific tasks.",
            "Audit Logging: Maintain comprehensive logs of all AI agent actions. This is not only essential for security monitoring but also for compliance with regulations like GDPR, HIPAA, and industry-specific requirements.",
            "Model Security: Protect your AI models from adversarial attacks, data poisoning, and prompt injection. Regularly audit model behavior and implement guardrails that prevent unintended actions.",
            "At Adray, security is built into every layer of our platform: SOC 2 Type II certification, end-to-end encryption, and a dedicated security team that monitors for threats 24/7.",
        ],
    },
};

// Fallback for unknown slugs
const defaultPost = {
    title: "Blog Post",
    category: "General",
    date: "2026",
    readTime: "5 min read",
    content: [
        "This blog post content is coming soon. Check back for updates on AI, enterprise automation, and the latest Adray news.",
        "In the meantime, explore our other articles to learn about how AI agents are transforming enterprise operations.",
    ],
};

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = posts[slug] || defaultPost;
    return {
        title: post.title,
        description: post.content[0]?.slice(0, 160),
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = posts[slug] || defaultPost;

    return (
        <>
            {/* Article */}
            <article className="pt-32 pb-24">
                <Container className="max-w-3xl mx-auto">
                    <AnimatedSection>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-ad-muted-text hover:text-ad-accent transition-colors text-sm mb-8"
                        >
                            <ArrowLeft size={16} />
                            Back to Blog
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-ad-accent/10 text-ad-accent border border-ad-accent/20">
                                {post.category}
                            </span>
                            <span className="text-sm text-ad-muted-text">{post.date}</span>
                            <span className="text-sm text-ad-muted-text flex items-center gap-1">
                                <Clock size={14} />
                                {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            {post.title}
                        </h1>

                        {/* Author */}
                        <div className="flex items-center justify-between pb-8 mb-8 border-b border-ad-muted-border/30">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-ad-deep flex items-center justify-center text-ad-primary text-xs font-bold">
                                    AT
                                </div>
                                <div>
                                    <div className="text-white text-sm font-medium">
                                        Adray Team
                                    </div>
                                    <div className="text-ad-muted-text text-xs">
                                        Content & Research
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-ad-muted-text hover:text-ad-accent transition-colors text-sm">
                                <Share2 size={16} />
                                Share
                            </button>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            {post.content.map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="text-ad-muted-text leading-relaxed text-base"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-16 gradient-card rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Ready to get started with Adray?
                            </h3>
                            <p className="text-ad-muted-text text-sm mb-6">
                                Join 500+ enterprises already using AI agents to transform their
                                operations.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-ad-accent hover:bg-ad-primary text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
                            >
                                Start Free Trial
                            </a>
                        </div>
                    </AnimatedSection>
                </Container>
            </article>
        </>
    );
}
