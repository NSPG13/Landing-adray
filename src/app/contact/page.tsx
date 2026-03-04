"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Users, Newspaper, Handshake, Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

/* ── Contact Cards ── */
const contactCards = [
    {
        icon: <Users size={24} />,
        title: "Connect with Expert Team",
        description:
            "Talk to our AI solutions specialists to learn how Adray fits your business needs.",
    },
    {
        icon: <Newspaper size={24} />,
        title: "Press & Media",
        description:
            "For press inquiries, media kits, and brand collaboration, reach out to our communications team.",
    },
    {
        icon: <Handshake size={24} />,
        title: "Partner & Collaboration",
        description:
            "Explore partnership opportunities, integrations, and co-development programs.",
    },
];

/* ── Offices ── */
const offices = [
    { city: "San Francisco", img: "https://framerusercontent.com/images/DmjBIPplEh6kPt1Q9YhkqNJc28k.jpg" },
    { city: "Nagpur", img: "https://framerusercontent.com/images/fwpUl0wnfBPrN3FCLpzaVDsXYWo.jpg" },
    { city: "London", img: "https://framerusercontent.com/images/RCVQKmWnCQxDINiuRXPLlVE5gE.jpg" },
    { city: "Frankfurt", img: "https://framerusercontent.com/images/2sOt2oZTxvZtMNwZJcE5R0dEpI.jpg" },
    { city: "Dubai", img: "https://framerusercontent.com/images/QWDnwFBhMoMqd27YO2AYSMhguk.jpg" },
];

/* ── FAQ ── */
const faqs = [
    {
        q: "How quickly will I hear back?",
        a: "Our team typically responds within 24 hours on business days. Enterprise inquiries are prioritized.",
    },
    {
        q: "Can I schedule a demo?",
        a: "Absolutely! Fill out the form above and mention you'd like a live demo. We'll set up a personalized walkthrough.",
    },
    {
        q: "Where are your offices?",
        a: "We have offices in San Francisco, Nagpur, London, Frankfurt, and Dubai — with team members working globally.",
    },
    {
        q: "Do you offer enterprise support?",
        a: "Yes. HyperSonic plan customers get dedicated account management, SLA guarantees, and 24/7 priority support.",
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
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            "url(https://framerusercontent.com/images/3ez5Goty6KdEzujpWDVyu8Um6Ns.webp)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        maskImage:
                            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
                    }}
                />
                <Container className="relative z-10 text-center">
                    <motion.p
                        className="t-p-sm uppercase tracking-widest text-ad-tag mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease }}
                    >
                        CONTACT
                    </motion.p>
                    <motion.h1
                        className="t-h1 text-white-100 mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease }}
                    >
                        Need Smarter
                        <br />
                        AI Solutions?
                    </motion.h1>
                    <motion.p
                        className="t-p-lg text-ad-subtitle max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease }}
                    >
                        Get in touch with our team and discover how Adray can transform your
                        enterprise.
                    </motion.p>
                </Container>
            </section>

            {/* ── Contact Cards ── */}
            <section className="pb-20 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactCards.map((c, i) => (
                            <AnimatedSection key={c.title} delay={i * 0.12}>
                                <div className="card p-8 h-full flex flex-col items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-white-7 border border-ad-border flex items-center justify-center mb-6 text-ad-primary">
                                        {c.icon}
                                    </div>
                                    <h3 className="t-h4 text-white-100 mb-3">{c.title}</h3>
                                    <p className="t-p-sm text-ad-muted leading-relaxed">
                                        {c.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
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
                            title="How Can We Help?"
                            subtitle="Fill out the form below and our team will get back to you within 24 hours."
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
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block t-p-sm text-ad-muted mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-ad-surface border border-ad-border text-white-100 t-p-sm placeholder:text-ad-muted/40 focus:outline-none focus:border-ad-primary transition-colors"
                                            placeholder="Doe"
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
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block t-p-sm text-ad-muted mb-2">
                                        Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-xl bg-ad-surface border border-ad-border text-white-100 t-p-sm placeholder:text-ad-muted/40 focus:outline-none focus:border-ad-primary transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label className="block t-p-sm text-ad-muted mb-2">
                                        Query
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-ad-surface border border-ad-border text-white-100 t-p-sm placeholder:text-ad-muted/40 focus:outline-none focus:border-ad-primary transition-colors resize-none"
                                        placeholder="Tell us about your project…"
                                    />
                                </div>
                                <Button variant="primary" size="lg" className="w-full">
                                    Submit
                                </Button>
                            </form>

                            {/* Contact info sidebar */}
                            <div className="flex flex-col gap-6">
                                <div className="card p-6 flex items-start gap-4">
                                    <Phone
                                        size={20}
                                        className="text-ad-primary flex-shrink-0 mt-1"
                                    />
                                    <div>
                                        <p className="t-p-sm text-ad-muted mb-1">Phone</p>
                                        <p className="t-p text-white-100">+1 844 924 8973</p>
                                    </div>
                                </div>
                                <div className="card p-6 flex items-start gap-4">
                                    <Mail
                                        size={20}
                                        className="text-ad-primary flex-shrink-0 mt-1"
                                    />
                                    <div>
                                        <p className="t-p-sm text-ad-muted mb-1">Email</p>
                                        <p className="t-p text-white-100">support@adray.com</p>
                                    </div>
                                </div>
                                <div className="card p-6">
                                    <p className="t-p-sm text-ad-tag uppercase tracking-widest mb-2">
                                        HQ
                                    </p>
                                    <p className="t-p-semibold text-white-100 mb-1">
                                        Adray Americas
                                    </p>
                                    <p className="t-p-sm text-ad-muted leading-relaxed">
                                        548 Market St, Suite 36879
                                        <br />
                                        San Francisco, CA 94104
                                    </p>
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
                            subtitle="Serving enterprises across 5 continents from our offices worldwide."
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
                            title="Common Questions"
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
