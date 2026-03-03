import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Insights, tutorials, and updates from the Adray team on AI, enterprise automation, and more.",
};

const posts = [
    {
        slug: "ai-agents-transforming-enterprise",
        title: "How AI Agents Are Transforming Enterprise Operations in 2026",
        excerpt:
            "Discover how autonomous AI agents are revolutionizing the way enterprises handle complex operations, from data processing to customer service.",
        category: "AI & Enterprise",
        date: "Feb 25, 2026",
        readTime: "8 min read",
    },
    {
        slug: "building-scalable-ai-workflows",
        title: "Building Scalable AI Workflows: A Complete Guide",
        excerpt:
            "A step-by-step guide to designing, building, and deploying AI-powered workflows that scale with your business needs.",
        category: "Tutorial",
        date: "Feb 18, 2026",
        readTime: "12 min read",
    },
    {
        slug: "enterprise-ai-security-best-practices",
        title: "Enterprise AI Security: Best Practices for 2026",
        excerpt:
            "Essential security practices for deploying AI in enterprise environments, from data governance to model monitoring.",
        category: "Security",
        date: "Feb 10, 2026",
        readTime: "6 min read",
    },
    {
        slug: "future-of-ai-automation",
        title: "The Future of AI Automation: Trends to Watch",
        excerpt:
            "Exploring emerging trends in AI automation, including multi-agent systems, autonomous reasoning, and human-AI collaboration.",
        category: "Industry Trends",
        date: "Feb 3, 2026",
        readTime: "10 min read",
    },
    {
        slug: "customer-success-dataflow",
        title: "How DataFlow Achieved 40% Efficiency Gain with Adray",
        excerpt:
            "A deep dive into how DataFlow, a Fortune 500 company, deployed Adray AI agents across their operations.",
        category: "Case Study",
        date: "Jan 27, 2026",
        readTime: "7 min read",
    },
    {
        slug: "introducing-multi-agent-collaboration",
        title: "Introducing Multi-Agent Collaboration in Adray 2.4",
        excerpt:
            "Learn about our latest feature: AI agents that can collaborate, share context, and coordinate complex tasks together.",
        category: "Product Update",
        date: "Jan 20, 2026",
        readTime: "5 min read",
    },
];

export default function BlogPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <Container className="relative z-10">
                    <AnimatedSection>
                        <SectionHeading
                            tag="Blog"
                            title="Insights & updates"
                            subtitle="The latest on AI, enterprise automation, product updates, and industry trends from the Adray team."
                        />
                    </AnimatedSection>
                </Container>
            </section>

            {/* Featured Post */}
            <section className="py-16">
                <Container>
                    <AnimatedSection>
                        <Link
                            href={`/blog/${posts[0].slug}`}
                            className="block card rounded-2xl p-8 md:p-12 hover:shadow-lg hover:shadow-sky-blue/10 transition-all duration-300 group"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-blue/10 text-sky-blue border border-sky-blue/20">
                                        {posts[0].category}
                                    </span>
                                    <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white group-hover:text-white-100 transition-colors">
                                        {posts[0].title}
                                    </h2>
                                    <p className="mt-3 text-light-blue leading-relaxed">
                                        {posts[0].excerpt}
                                    </p>
                                    <div className="mt-4 flex items-center gap-4 text-sm text-light-blue">
                                        <span>{posts[0].date}</span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {posts[0].readTime}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 aspect-[4/3] card rounded-xl flex items-center justify-center">
                                    <div className="text-sky-blue/20 text-6xl font-bold">AI</div>
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Post Grid */}
            <section className="pb-24">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.slice(1).map((post, i) => (
                            <AnimatedSection key={post.slug} delay={i * 0.1}>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block h-full group"
                                >
                                    <Card className="h-full flex flex-col">
                                        <div className="aspect-[16/9] card rounded-xl mb-4 flex items-center justify-center -mx-2 -mt-2">
                                            <div className="text-sky-blue/20 text-3xl font-bold">
                                                {post.category.slice(0, 2).toUpperCase()}
                                            </div>
                                        </div>
                                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-dark-blue/30 text-white-90 w-fit">
                                            {post.category}
                                        </span>
                                        <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-white-100 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="mt-2 text-light-blue text-sm line-clamp-2 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between text-xs text-light-blue">
                                            <div className="flex items-center gap-3">
                                                <span>{post.date}</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={12} />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <ArrowRight
                                                size={14}
                                                className="text-sky-blue group-hover:translate-x-1 transition-transform"
                                            />
                                        </div>
                                    </Card>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
