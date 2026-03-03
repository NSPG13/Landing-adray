import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Integrations",
    description:
        "Connect Adray with 200+ enterprise tools. Seamless integrations for Salesforce, Slack, SAP, and more.",
};

const integrationCategories = [
    {
        category: "CRM & Sales",
        tools: [
            { name: "Salesforce", description: "Sync contacts, leads, and opportunities." },
            { name: "HubSpot", description: "Automate marketing and sales workflows." },
            { name: "Pipedrive", description: "Pipeline management and deal tracking." },
        ],
    },
    {
        category: "Communication",
        tools: [
            { name: "Slack", description: "Real-time notifications and AI commands." },
            { name: "Microsoft Teams", description: "Embedded AI assistants in your workspace." },
            { name: "Discord", description: "Community and team communication." },
        ],
    },
    {
        category: "Cloud & Infrastructure",
        tools: [
            { name: "AWS", description: "Deploy and scale on Amazon infrastructure." },
            { name: "Google Cloud", description: "BigQuery, Vertex AI, and GCS integration." },
            { name: "Azure", description: "Full Microsoft cloud ecosystem support." },
        ],
    },
    {
        category: "Data & Analytics",
        tools: [
            { name: "Snowflake", description: "Cloud data warehouse integration." },
            { name: "Databricks", description: "Unified analytics and ML platform." },
            { name: "Tableau", description: "Business intelligence visualization." },
        ],
    },
    {
        category: "ERP & Operations",
        tools: [
            { name: "SAP", description: "Enterprise resource planning integration." },
            { name: "Oracle", description: "Database and cloud applications." },
            { name: "ServiceNow", description: "IT service management automation." },
        ],
    },
    {
        category: "Development",
        tools: [
            { name: "GitHub", description: "Code repository and CI/CD automation." },
            { name: "Jira", description: "Project management and issue tracking." },
            { name: "Notion", description: "Knowledge base and documentation." },
        ],
    },
];

const apiFeatures = [
    {
        title: "REST API",
        description: "Full RESTful API with comprehensive documentation, SDKs for Python, Node.js, Java, and Go.",
    },
    {
        title: "Webhooks",
        description: "Real-time event notifications to your systems. Configure custom hooks for any agent action or data change.",
    },
    {
        title: "GraphQL",
        description: "Flexible data querying with our GraphQL endpoint. Get exactly the data you need in a single request.",
    },
    {
        title: "SSO & OAuth",
        description: "Enterprise single sign-on support with SAML 2.0, OAuth 2.0, and OpenID Connect.",
    },
];

export default function IntegrationPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <Container className="relative z-10">
                    <AnimatedSection>
                        <SectionHeading
                            tag="Integrations"
                            title="Connect with 200+ tools"
                            subtitle="Seamlessly integrate Adray with your existing tech stack. No code required for most integrations."
                        />
                    </AnimatedSection>
                </Container>
            </section>

            {/* Integration Grid */}
            <section className="py-24">
                <Container>
                    <div className="space-y-16">
                        {integrationCategories.map((cat, i) => (
                            <AnimatedSection key={cat.category} delay={i * 0.1}>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-sky-blue" />
                                        {cat.category}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {cat.tools.map((tool) => (
                                            <Card key={tool.name} className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-dark-blue/50 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white-90 font-bold text-sm">
                                                        {tool.name.slice(0, 2).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-medium text-sm">
                                                        {tool.name}
                                                    </h4>
                                                    <p className="text-light-blue text-xs mt-1">
                                                        {tool.description}
                                                    </p>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* API Section */}
            <section className="py-24">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            tag="Developer API"
                            title="Build anything with our powerful API"
                            subtitle="Full programmatic access to every Adray capability. Build custom integrations and extensions."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {apiFeatures.map((feat, i) => (
                            <AnimatedSection key={feat.title} delay={i * 0.1}>
                                <Card className="h-full">
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        {feat.title}
                                    </h4>
                                    <p className="text-light-blue text-sm leading-relaxed">
                                        {feat.description}
                                    </p>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Code preview */}
                    <AnimatedSection delay={0.3}>
                        <div className="mt-12 max-w-3xl mx-auto card rounded-2xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-blue-10/30">
                                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                <span className="ml-2 text-xs text-light-blue">
                                    api-example.ts
                                </span>
                            </div>
                            <pre className="p-6 text-sm text-white-90 overflow-x-auto">
                                <code>{`import { Adray } from '@adray/sdk';

const client = new Adray({
  apiKey: process.env.ADRAY_API_KEY,
});

// Create an AI agent
const agent = await client.agents.create({
  name: 'Sales Analyst',
  type: 'analytics',
  model: 'adray-enterprise-v2',
});

// Execute a task
const result = await agent.run({
  task: 'Analyze Q4 sales data and generate insights',
  sources: ['salesforce', 'hubspot'],
});

console.log(result.insights);`}</code>
                            </pre>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-24">
                <Container>
                    <AnimatedSection>
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Don&apos;t see your tool?
                            </h2>
                            <p className="text-light-blue max-w-lg mx-auto mb-8">
                                We&apos;re constantly adding new integrations. Request an integration
                                or build your own with our API.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="primary" size="lg" href="/contact">
                                    Request Integration
                                </Button>
                                <Button variant="outline" size="lg" href="#">
                                    API Documentation
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    );
}
