"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
    className?: string;
}

const logos = [
    { name: "Meta Ads", icon: "/images/svg/meta.svg" },
    { name: "Google Ads", icon: "/images/svg/google-ads.svg" },
    { name: "Google Analytics", icon: "/images/svg/ga4.svg" },
    { name: "Shopify", icon: "/images/svg/shopify.svg" },
    { name: "ChatGPT", icon: "/images/svg/chatgpt.svg" },
    { name: "Claude", icon: "/images/svg/claude.svg" },
    { name: "Gemini", icon: "/images/svg/gemini.svg" },
];

export default function LogoMarquee({ className }: LogoMarqueeProps) {
    return (
        <div className={cn("overflow-hidden py-8", className)}>
            <div className="flex animate-marquee whitespace-nowrap">
                {[...logos, ...logos].map((logo, i) => (
                    <div
                        key={i}
                        className="mx-8 flex items-center gap-3 min-w-[140px] opacity-40"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={logo.icon}
                            alt={logo.name}
                            className="w-5 h-5 object-contain"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                        <span className="text-white-100 text-sm font-semibold tracking-wide whitespace-nowrap select-none" style={{ fontFamily: "var(--font-brand)" }}>
                            {logo.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
