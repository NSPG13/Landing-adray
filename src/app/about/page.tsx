"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

/* ── Data ── */
const values = [
    {
        title: "Pioneering",
        description:
            "We lead with bold ideas, constantly pushing the boundaries of what AI can achieve for businesses worldwide.",
        icon: "https://framerusercontent.com/images/oy9JJgqQoJmcnZPSNiNcPKB5Ig.svg",
    },
    {
        title: "Trust",
        description:
            "Enterprise-grade security, transparency, and reliability are at the core of every solution we build.",
        icon: "https://framerusercontent.com/images/hkm6Dj8bW8kfsHv25c6tUxDVgU.svg",
    },
    {
        title: "Measurable Results",
        description:
            "We're relentlessly focused on outcomes — delivering AI that drives real, visible business impact every day.",
        icon: "https://framerusercontent.com/images/DejHPVR2dB07F59rWuIeqnZs6HI.svg",
    },
];

const team = [
    { name: "Ethan Cole", role: "Chief Executive Officer", img: "https://framerusercontent.com/images/RYXfuWpH8clmHYjvLSVy1QMaQ.jpg" },
    { name: "Sofia Andersson", role: "Chief Technology Officer", img: "https://framerusercontent.com/images/08xexKu3Y8knIVLxlLMGJuWpRkI.jpg" },
    { name: "Aisha Patel", role: "VP of Product", img: "https://framerusercontent.com/images/9FJK2lqlHHbzsBwxAzHrODwbCwI.jpg" },
    { name: "James Nakamura", role: "VP of Engineering", img: "https://framerusercontent.com/images/NJ6WPKrK1bpNDJfkVB4ORRgew.jpg" },
    { name: "Clara Müller", role: "Chief Data Officer", img: "https://framerusercontent.com/images/kVLdvblJpIBamNGTqaqvUz2R8.jpg" },
    { name: "Daniel Osei", role: "Head of AI Research", img: "https://framerusercontent.com/images/cw9h4eAEchcVyL5APDU8oi1kw.jpg" },
    { name: "Lena Kowalski", role: "Chief Marketing Officer", img: "https://framerusercontent.com/images/01DcF8MIoxYPYxBg8DFSKi8EiU.jpg" },
    { name: "Marco Ferreira", role: "Chief Revenue Officer", img: "https://framerusercontent.com/images/tFWnBsLBbSHWH4rCgP5l2SSHBY.jpg" },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function AboutPage() {
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
                        ABOUT US
                    </motion.p>
                    <motion.h1
                        className="t-h1 text-white-100 mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease }}
                    >
                        Shaping the Future
                        <br />
                        of Enterprise
                    </motion.h1>
                    <motion.p
                        className="t-p-lg text-ad-subtitle max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease }}
                    >
                        We believe AI should be more than a tool — it should be a partner in
                        transforming how enterprises operate, innovate, and grow.
                    </motion.p>
                </Container>
            </section>

            {/* ── Our Values ── */}
            <section className="py-20 relative">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            tag="OUR VALUES"
                            tagIcon={
                                <img
                                    src="https://framerusercontent.com/images/3UovOTKirX07vhyWYJGSliEt1E4.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                            }
                            title="What Drives Us Forward"
                            subtitle="Our core values shape every product decision, every AI model, and every enterprise partnership we forge."
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((v, i) => (
                            <AnimatedSection key={v.title} delay={i * 0.12}>
                                <div className="card p-8 h-full flex flex-col items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-white-7 border border-ad-border flex items-center justify-center mb-6">
                                        <img src={v.icon} alt="" width={24} height={24} />
                                    </div>
                                    <h3 className="t-h4 text-white-100 mb-3">{v.title}</h3>
                                    <p className="t-p-sm text-ad-muted leading-relaxed">
                                        {v.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── Our Founder ── */}
            <section className="py-20 relative">
                <Container>
                    <AnimatedSection>
                        <div className="card p-10 md:p-16 flex flex-col items-center text-center max-w-3xl mx-auto">
                            <img
                                src="https://framerusercontent.com/images/3UovOTKirX07vhyWYJGSliEt1E4.svg"
                                alt=""
                                width={32}
                                height={32}
                                className="mb-6 opacity-60"
                            />
                            <blockquote className="t-p-lg text-white-90 italic leading-relaxed mb-8">
                                &ldquo;Our mission is to build intelligent systems that don&apos;t
                                just automate tasks, but fundamentally elevate how enterprises
                                think, decide, and grow.&rdquo;
                            </blockquote>
                            <div>
                                <p className="t-p-semibold text-white-100">Ethan Cole</p>
                                <p className="t-p-sm text-ad-muted">
                                    Founder &amp; CEO, Adray
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ── Meet the Team (Pillars) ── */}
            <section className="py-20 relative">
                <Container>
                    <AnimatedSection>
                        <SectionHeading
                            tag="PILLARS"
                            tagIcon={
                                <img
                                    src="https://framerusercontent.com/images/oy9JJgqQoJmcnZPSNiNcPKB5Ig.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                            }
                            title="Meet the Adray Minds"
                            subtitle="The visionaries, builders, and innovators behind the AI enterprise platform."
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {team.map((m, i) => (
                            <AnimatedSection key={m.name} delay={i * 0.08}>
                                <div className="group relative rounded-3xl overflow-hidden aspect-[3/4]">
                                    <img
                                        src={m.img}
                                        alt={m.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)",
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="t-p-semibold text-white-100">{m.name}</p>
                                        <p className="t-p-sm text-ad-muted">{m.role}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── Join Us CTA ── */}
            <section className="py-20 relative">
                <Container className="text-center">
                    <AnimatedSection>
                        <h2 className="t-h2 text-white-100 mb-4">
                            Join the Future of Enterprise AI
                        </h2>
                        <p className="t-p-lg text-ad-subtitle max-w-xl mx-auto mb-10">
                            We&apos;re always looking for brilliant minds to join our team.
                            Explore careers at Adray.
                        </p>
                        <Button variant="primary" size="lg" href="/contact">
                            Get in Touch
                        </Button>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    );
}
