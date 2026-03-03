"use client";

import React from "react";
import Container from "@/components/ui/Container";
import ScrollTextColor from "@/components/ui/ScrollTextColor";

export default function HighlightedText() {
    return (
        <section className="py-24 md:py-32 relative">
            <Container className="flex flex-col lg:flex-row items-center gap-16">
                {/* Text — scroll-animated color */}
                <div className="flex-1">
                    <ScrollTextColor
                        content="We help enterprises reimagine business growth with our AI Platform, Work Solutions, and Intelligent Marketplace. Unlock efficiency, automation, and innovation across every workflow."
                        colorStart="#2F3950"
                        colorEnd="#FFFFFF"
                        trigger="layer-in-view"
                        animationStart="bottom"
                        animationEnd="center"
                        className="t-h3-lg tracking-[-0.03em]"
                        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                    />
                </div>

                {/* Illustration — rotating logo animation */}
                <div className="flex-shrink-0 relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
                    {/* Gradient circle background */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://framerusercontent.com/images/emEabgUGaj1mrFtUh9nCcNLOsk.webp"
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain animate-rotate"
                        style={{ animationDuration: "20s" }}
                    />
                    {/* Center logo */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://framerusercontent.com/images/9KnJwOszoExl1mcOPudDLQaGg.svg"
                        alt=""
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-auto"
                    />
                </div>
            </Container>
        </section>
    );
}
