"use client";

import React, { useState } from "react";
import { MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
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

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const prev = () =>
        setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    const next = () =>
        setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

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
                        tagIcon={<MessageSquare size={18} />}
                        title="Trusted by customers"
                        subtitle="Proven outcomes shared by industry leaders and innovators."
                    />
                </AnimatedSection>

                {/* Carousel */}
                <div className="relative">
                    {/* Cards row */}
                    <div className="flex gap-6 overflow-hidden">
                        {testimonials.map((t, i) => (
                            <div
                                key={t.author}
                                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-transform duration-500"
                                style={{
                                    transform: `translateX(-${current * 100}%)`,
                                }}
                            >
                                <div className="glass border border-blue-10 rounded-[24px] p-8 h-full flex flex-col">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {Array.from({ length: 5 }).map((_, j) => (
                                            <svg
                                                key={j}
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="#FFCD7D"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <p className="t-p text-white-90 flex-1 mb-8">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>

                                    <div className="flex items-center gap-3 pt-6 border-t border-blue-10">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={t.image}
                                            alt={t.author}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <div className="t-p-sm font-medium text-white-100">
                                                {t.author}
                                            </div>
                                            <div className="t-p-sm text-light-blue">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation arrows */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full bg-white-7 border border-blue-10 flex items-center justify-center text-white-90 hover:text-white-100 hover:bg-white-10 transition-all cursor-pointer"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full bg-white-7 border border-blue-10 flex items-center justify-center text-white-90 hover:text-white-100 hover:bg-white-10 transition-all cursor-pointer"
                            aria-label="Next"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
