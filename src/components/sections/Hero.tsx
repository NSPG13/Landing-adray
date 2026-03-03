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

const ease = [0.12, 0.23, 0.5, 1] as const;

export default function Hero() {
    return (
        <section className="relative flex flex-col bg-black-100" style={{ padding: "160px 0 20px", gap: "25px" }}>
            {/* ── Video Container — 857px, 3 layers (video + frost + noise) ── */}
            <div
                className="absolute top-0 left-0 right-0 overflow-hidden"
                style={{
                    height: "857px",
                    zIndex: 1,
                    background: "#000",
                    mask: "linear-gradient(#000 0% 85.6929%, #0000 100%)",
                    WebkitMask: "linear-gradient(#000 0% 85.6929%, #0000 100%)",
                }}
            >
                {/* Layer 0 — video (hue-rotated to purple palette) */}
                <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: 0, filter: "hue-rotate(70deg) saturate(1.3)" }}
                    initial={{ opacity: 0, y: 80, scale: 1.1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease }}
                    src="https://pikaso.cdnpk.net/private/production/2290455794/59751519-c5a8-4e4b-b8dd-94ffbfa08aa8-0.mp4?token=exp=1775001600~hmac=946fe13b73c600580de2f6d03194555735d752048382e42b0ebe1dcdf4a376b6"
                />
                {/* Layer 0b — purple tint overlay for color accuracy */}
                <div
                    className="absolute inset-0"
                    style={{
                        zIndex: 0,
                        background: "radial-gradient(ellipse at 50% 60%, rgba(202,138,229,0.15) 0%, rgba(62,40,111,0.1) 50%, transparent 80%)",
                        mixBlendMode: "screen",
                    }}
                />
                {/* Layer 1 — Frost/glass overlay */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        zIndex: 1,
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        background: "linear-gradient(180deg, rgba(255,254,250,0) 0%, rgba(255,255,255,0.07) 100%)",
                        mask: "radial-gradient(50% 50% at 47.9% 93.9%, transparent 69.1%, rgba(0,0,0,0.9) 81.8%, #000 100%)",
                        WebkitMask: "radial-gradient(50% 50% at 47.9% 93.9%, transparent 69.1%, rgba(0,0,0,0.9) 81.8%, #000 100%)",
                    }}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease }}
                />
                {/* Layer 2 — Noise texture */}
                <div
                    className="absolute inset-0 noise-overlay"
                    style={{
                        opacity: 0.14,
                        zIndex: 1,
                        mask: "linear-gradient(rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 15.3%, rgba(0,0,0,0.98) 31.6%, #000 100%)",
                        WebkitMask: "linear-gradient(rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 15.3%, rgba(0,0,0,0.98) 31.6%, #000 100%)",
                    }}
                />
            </div>

            {/* ── Main Content ── */}
            <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 md:px-10" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "130px" }}>
                {/* Content block — 40px gap between children */}
                <div className="flex flex-col items-center text-center w-full" style={{ gap: "40px" }}>
                    {/* Badge — 10px gap to heading group */}
                    <div className="flex flex-col items-center" style={{ gap: "10px" }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease }}
                        >
                            <Badge>Beta Version is launching on 12th September</Badge>
                        </motion.div>

                        {/* Heading group — 24px gap between title/subtitle */}
                        <div className="flex flex-col items-center" style={{ gap: "24px" }}>
                            {/* H1 — outer container animates scale */}
                            <motion.div
                                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.1, ease }}
                            >
                                <h1 className="t-h1 text-white-100 text-center" style={{ maxWidth: "780px" }}>
                                    <BlurRevealText text="Next-gen enterprise" startDelay={0.15} />
                                    <br />
                                    <BlurRevealText text="with AI Agents" startDelay={0.6} />
                                </h1>
                            </motion.div>

                            {/* Subtitle — white, weight 500, blur reveal, text-shadow */}
                            <div style={{ maxWidth: "524px", textShadow: "0 1px 2px rgba(0,0,0,0.32)" }}>
                                <BlurRevealText
                                    text="Accelerate the speed of business with the Adray Platform and our AI solutions for work, service, and process."
                                    startDelay={0.4}
                                    className="t-p-lg-medium text-white-100 tracking-[-0.03em] text-center"
                                />
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5, ease }}
                    >
                        <Button variant="primary" size="lg" href="/pricing">
                            Get Started
                        </Button>
                    </motion.div>
                </div>

                {/* Dashboard — with bottom fade mask, no border/radius */}
                <motion.div
                    className="w-full"
                    style={{
                        padding: "0 0 40px",
                        mask: "linear-gradient(#000 0%, rgba(0,0,0,0.44) 76.5%, transparent 100%)",
                        WebkitMask: "linear-gradient(#000 0%, rgba(0,0,0,0.44) 76.5%, transparent 100%)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://framerusercontent.com/images/A6N9GDN1T1HJbhYbb15VfR9Os.png"
                        alt="Adray Dashboard"
                        className="w-full h-auto"
                        style={{ aspectRatio: "1.6036" }}
                    />
                </motion.div>
            </div>

            {/* ── Logo Marquee ── */}
            <div className="relative z-[2] pb-4 overflow-hidden" style={{ padding: "0 40px 40px" }}>
                <div
                    className="relative"
                    style={{
                        maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                    }}
                >
                    <div className="flex items-center gap-[74px] animate-marquee">
                        {[...partnerLogos, ...partnerLogos].map((src, i) => (
                            <div key={i} className="flex-shrink-0 w-[150px] h-[48px] flex items-center justify-center overflow-hidden" style={{ filter: "grayscale(1)" }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt="Partner"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
