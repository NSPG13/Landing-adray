"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollTextColor from "@/components/ui/ScrollTextColor";

const toolLogos = [
    { name: "ChatGPT", src: "/images/svg/chatgpt.svg" },
    { name: "Claude", src: "/images/svg/claude.svg" },
    { name: "Gemini", src: "/images/svg/gemini.svg" },
    { name: "Copilot", src: "/images/svg/copilot.svg" },
    { name: "Grok", src: "/images/svg/grok.svg" },
    { name: "DeepSeek", src: "/images/svg/deepseek.svg" },
] as const;

export default function HighlightedText() {
    return (
        <section className="py-20 relative">
            <Container className="flex flex-col lg:flex-row items-center gap-16">
                {/* Text — scroll-animated color */}
                <div className="flex-1">
                    <ScrollTextColor
                        content="Your AI chat is now your marketing analytics. No new tool to learn. No dashboard to log into. Just your data — reconciled, packed, and ready — wherever you already work."
                        colorStart="#3E286F"
                        colorEnd="#FFFFFF"
                        trigger="layer-in-view"
                        animationStart="center"
                        animationEnd="bottom"
                        className="t-h3-lg tracking-[-0.03em]"
                        style={{ fontFamily: 'var(--font-display)' }}
                    />
                </div>

                {/* Illustration — rotating gradient + tool logos cluster */}
                <div className="shrink-0 relative w-[340px] h-[340px] md:w-[400px] md:h-[400px]">
                    {/* Gradient circle background */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://framerusercontent.com/images/emEabgUGaj1mrFtUh9nCcNLOsk.webp"
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain animate-rotate"
                        style={{ animationDuration: "8s", filter: "brightness(1.33) sepia(1) hue-rotate(230deg) saturate(2)" }}
                    />
                    {/* Tool logos inside the disk */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-[168px] h-[168px] md:w-[196px] md:h-[196px]">
                            {/* soft glass base */}
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background:
                                        "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 35%, rgba(0,0,0,0.0) 70%)",
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.25) inset",
                                }}
                            />

                            {toolLogos.map((logo, i) => {
                                const count = toolLogos.length;
                                const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
                                const r = 68; // px
                                const x = Math.cos(angle) * r;
                                const y = Math.sin(angle) * r;

                                return (
                                    <motion.div
                                        key={logo.name}
                                        className="absolute left-1/2 top-1/2"
                                        style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, amount: 0.6 }}
                                        transition={{ duration: 0.5, delay: i * 0.06 }}
                                    >
                                        <div
                                            className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border border-white/10"
                                            style={{
                                                background: "rgba(255,255,255,0.06)",
                                                backdropFilter: "blur(10px)",
                                                WebkitBackdropFilter: "blur(10px)",
                                            }}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={logo.src} alt={logo.name} className="w-6 h-6 object-contain" />
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* center dot */}
                            <motion.div
                                className="absolute left-1/2 top-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full -translate-x-1/2 -translate-y-1/2 border border-white/10"
                                style={{
                                    background: "rgba(255,255,255,0.05)",
                                    backdropFilter: "blur(10px)",
                                    WebkitBackdropFilter: "blur(10px)",
                                }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 0.55, delay: 0.15 }}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
