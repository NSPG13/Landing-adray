"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollTextColor from "@/components/ui/ScrollTextColor";

const cyclingLogos = [
    { src: "https://framerusercontent.com/images/rHi83QNHLWfMpfg2vj176ghopo.svg", width: 49, height: 68 },
    { src: "https://framerusercontent.com/images/eULxkhSvgmgm7XIuguu97va5Pqo.svg", width: 49, height: 68 },
    { src: "https://framerusercontent.com/images/eGiPk2ZSpnUFip5An5clXOnq40.svg", width: 40, height: 68 },
];

export default function HighlightedText() {
    const [logoIndex, setLogoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogoIndex((prev) => (prev + 1) % cyclingLogos.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 relative">
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
                        style={{ fontFamily: '"Inter Display", var(--font-inter), Inter, sans-serif' }}
                    />
                </div>

                {/* Illustration — rotating gradient + cycling logo */}
                <div className="flex-shrink-0 relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
                    {/* Gradient circle background */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://framerusercontent.com/images/emEabgUGaj1mrFtUh9nCcNLOsk.webp"
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain animate-rotate"
                        style={{ animationDuration: "20s" }}
                    />
                    {/* Cycling logos */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-[68px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={logoIndex}
                                src={cyclingLogos[logoIndex].src}
                                alt=""
                                width={cyclingLogos[logoIndex].width}
                                height={cyclingLogos[logoIndex].height}
                                className="w-auto h-[68px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    );
}
