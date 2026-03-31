"use client";

import React from "react";
import Container from "@/components/ui/Container";
import ScrollTextColor from "@/components/ui/ScrollTextColor";

export default function HighlightedText() {
    return (
        <section className="py-20 relative">
            <Container className="flex flex-col lg:flex-row items-center gap-16">
                {/* Text — scroll-animated color */}
                <div className="flex-1">
                    <ScrollTextColor
                        content="Your AI chat is now your marketing analytics. No new tool to learn. No dashboard to log into. Just your data, reconciled, packed, and ready, wherever you already work."
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
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 md:h-20 md:w-20"
                            style={{
                                background: "rgba(0,0,0,0.35)",
                                backdropFilter: "blur(8px)",
                                WebkitBackdropFilter: "blur(8px)",
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/svg/chatgpt.svg"
                                alt="OpenAI"
                                className="h-8 w-8 object-contain invert brightness-0 md:h-10 md:w-10"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
