"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GradientBlob from "@/components/ui/GradientBlob";
import TypewriterEffect from "@/components/ui/TypewriterEffect";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-24">
            {/* Background blobs */}
            <GradientBlob
                color="accent"
                size="xl"
                className="top-[-200px] left-1/2 -translate-x-1/2"
            />
            <GradientBlob
                color="deep"
                size="lg"
                className="bottom-0 left-[-100px]"
            />
            <GradientBlob
                color="primary"
                size="md"
                className="top-1/3 right-[-50px]"
            />

            <Container className="relative z-10 text-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    <Badge>Beta Version is launching on 12th September</Badge>
                </motion.div>

                <motion.h1
                    className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                >
                    Next-gen enterprise
                    <br />
                    <span className="text-gradient">
                        with{" "}
                        <TypewriterEffect
                            textList={[
                                "AI Agents",
                                "Smart Automation",
                                "Intelligent Workflows",
                                "Predictive Analytics",
                            ]}
                            speed={80}
                            cycle={true}
                            cursorChar="|"
                            className="text-gradient"
                        />
                    </span>
                </motion.h1>

                <motion.p
                    className="mt-6 text-base sm:text-lg text-ad-muted-text max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                >
                    Accelerate the speed of business with the Adray Platform and our AI
                    solutions for work, service, and process.
                </motion.p>

                <motion.div
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.45,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                >
                    <Button variant="primary" size="lg" href="/contact">
                        Get Started
                    </Button>
                    <Button variant="outline" size="lg" href="/about">
                        Learn More
                    </Button>
                </motion.div>
            </Container>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
