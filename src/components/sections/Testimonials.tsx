"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
    {
        quote:
            "With Adray\u2019s AI platform, our enterprise has gained speed, insight, and scalability. The intelligence behind their agents is unmatched \u2014 it\u2019s like having an expert team working 24/7 with consistency and accuracy. Adray continues to push the boundaries.",
        author: "Priya Nair",
        role: "Head of Innovation, Altara Global",
        image:
            "https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg",
    },
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
];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0,
    }),
};

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = useCallback(
        (dir: number) => {
            setDirection(dir);
            setCurrent((prev) => {
                const next = prev + dir;
                if (next < 0) return testimonials.length - 1;
                if (next >= testimonials.length) return 0;
                return next;
            });
        },
        []
    );

    const t = testimonials[current];

    return (
        <section className="py-20 relative overflow-hidden">
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

                {/* Testimonial card */}
                <AnimatedSection delay={0.15}>
                    <div className="relative overflow-hidden min-h-[320px] md:min-h-[280px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch"
                            >
                                {/* Portrait image */}
                                <div className="w-full md:w-[280px] flex-shrink-0">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={t.image}
                                        alt={t.author}
                                        className="w-full h-[300px] md:h-full rounded-2xl object-cover"
                                        style={{ objectPosition: "center top" }}
                                    />
                                </div>

                                {/* Quote content */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <blockquote className="t-p md:text-lg text-white-90 leading-relaxed mb-8">
                                        &ldquo;{t.quote}&rdquo;
                                    </blockquote>
                                    <div>
                                        <p className="t-p font-semibold text-white-100">
                                            {t.author}
                                        </p>
                                        <p className="t-p-sm text-ad-muted mt-1">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation arrows */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={() => paginate(-1)}
                            className="w-12 h-12 rounded-full border border-ad-border bg-white-7 flex items-center justify-center hover:bg-white-10 transition-colors cursor-pointer"
                            aria-label="Previous testimonial"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"
                                alt="Previous"
                                width={20}
                                height={20}
                                style={{ filter: "invert(1)" }}
                            />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="w-12 h-12 rounded-full border border-ad-border bg-white-7 flex items-center justify-center hover:bg-white-10 transition-colors cursor-pointer"
                            aria-label="Next testimonial"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
                                alt="Next"
                                width={20}
                                height={20}
                                style={{ filter: "invert(1)" }}
                            />
                        </button>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
