"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import BlurRevealText from "@/components/ui/BlurRevealText";

const partnerLogos = [
    "https://framerusercontent.com/images/eTOvR4ZuGGQENAaE3zs5ZqZxtks.png",
    "https://framerusercontent.com/images/QvWxQDGRcrTJWGZp7OsUlI4k6w0.png",
    "https://framerusercontent.com/images/ZrGThO8Gp1y7Hoki1Dmhr0Flw6U.png",
    "https://framerusercontent.com/images/dTohPdySQSHpfv4TUIdRVoRdHBw.png",
    "https://framerusercontent.com/images/WzG2yfwdF7vdqrjvFu4j7tyJ3Gs.png",
    "https://framerusercontent.com/images/FkPCvWLJEloyx0AnJETPfPfMx4.png",
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden pt-24 bg-black-100">
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            >
                <source
                    src="https://pikaso.cdnpk.net/private/production/1120627992/render_with_bg.mp4?token=exp=1782201600~hmac=e88e7bdb40f3b6efd3e4fde6c925a1805e13e77d68d370bbec66ec16d94c3d16"
                    type="video/mp4"
                />
            </video>

            {/* Noise overlay */}
            <div className="absolute inset-0 noise-overlay" />

            <Container className="relative z-10 text-center flex-1 flex flex-col items-center justify-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    <Badge>Beta Version is launching on 12th September</Badge>
                </motion.div>

                <h1 className="mt-8 t-h1 text-white-100 tracking-tight">
                    <BlurRevealText text="Next-gen enterprise" startDelay={0.15} />
                    <br />
                    <BlurRevealText text="with " startDelay={0.6} />
                    <span className="text-gradient">
                        <BlurRevealText text="AI Agents" startDelay={0.75} />
                    </span>
                </h1>

                <motion.p
                    className="mt-6 t-p-lg text-light-blue max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
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
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.45,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                >
                    <Button variant="primary" size="lg" href="/pricing">
                        Get Started
                    </Button>
                </motion.div>
            </Container>

            {/* Dashboard preview image */}
            <Container className="relative z-10 -mt-10 mb-16">
                <motion.div
                    className="rounded-[24px] overflow-hidden border border-blue-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://framerusercontent.com/images/A6N9GDN1T1HJbhYbb15VfR9Os.png"
                        alt="Adray Dashboard"
                        className="w-full h-auto"
                    />
                </motion.div>
            </Container>

            {/* Logo Marquee */}
            <div className="relative z-10 pb-16 overflow-hidden">
                <div
                    className="relative"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                    }}
                >
                    <div className="flex gap-8 animate-marquee">
                        {[...partnerLogos, ...partnerLogos].map((src, i) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                key={i}
                                src={src}
                                alt="Partner"
                                className="h-8 w-auto opacity-50 flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-100 to-transparent z-10" />
        </section>
    );
}
