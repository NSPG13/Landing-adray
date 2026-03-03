"use client";

import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
    {
        quote:
            "Adray is the top-performing AI Agent we\u2019ve seen to date \u2014 resolving complex queries faster and more accurately than any human team could. It has not only enhanced our support operations but also improved client satisfaction across the board.",
        author: "Daniel Reyes",
        role: "Chief Operations Officer, LuminaTech",
        image:
            "https://framerusercontent.com/images/BIY5osAhJGxk35JHUCh9nq0Wro.jpg",
    },
    {
        quote:
            "Adray\u2019s AI Agents have completely transformed our workflow efficiency. What once took hours now takes minutes. Their adaptability and precision make them the most capable AI solution we\u2019ve ever implemented \u2014 truly redefining enterprise automation.",
        author: "Sarah Mitchell",
        role: "VP of Digital Transformation, Nexora",
        image:
            "https://framerusercontent.com/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg",
    },
    {
        quote:
            "With Adray\u2019s AI platform, our enterprise has gained speed, insight, and scalability. The intelligence behind their agents is unmatched \u2014 it\u2019s like having an expert team working 24/7 with consistency and accuracy. Adray continues to push the boundaries.",
        author: "Priya Nair",
        role: "Head of Innovation, Altara Global",
        image:
            "https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg",
    },
];

// Duplicate for infinite loop
const allTestimonials = [...testimonials, ...testimonials];

function TestimonialCard({
    t,
}: {
    t: (typeof testimonials)[0];
}) {
    return (
        <div className="flex-shrink-0 w-[600px] max-w-[85vw]">
            <div
                className="rounded-[24px] border border-blue-10 p-6 h-full flex items-stretch gap-6"
                style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                }}
            >
                {/* Profile image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={t.image}
                    alt={t.author}
                    className="w-24 h-full min-h-[160px] rounded-[16px] object-cover flex-shrink-0"
                />

                {/* Separator */}
                <div className="w-px bg-blue-10 flex-shrink-0" />

                {/* Content */}
                <div className="flex flex-col justify-between py-1">
                    <p className="t-p-sm text-white-90 leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-4">
                        <div className="t-p-sm font-medium text-white-100">
                            {t.author}
                        </div>
                        <div className="t-p-sm text-light-blue">{t.role}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "url(https://framerusercontent.com/images/i8sq3FWUDAbUH2kTIeqGIMeGrwE.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <Container className="relative z-10">
                <AnimatedSection>
                    <SectionHeading
                        tag="TESTIMONIALS"
                        tagIcon={
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src="https://framerusercontent.com/images/BbcmkQqb9ghruMNQHqLHlo3xDs.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        }
                        title="Trusted by customers"
                        subtitle="Proven outcomes shared by industry leaders and innovators."
                    />
                </AnimatedSection>
            </Container>

            {/* Infinite scrolling carousel */}
            <div
                className="relative"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
            >
                <div className="flex gap-12 animate-marquee-testimonial">
                    {allTestimonials.map((t, i) => (
                        <TestimonialCard key={`${t.author}-${i}`} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
