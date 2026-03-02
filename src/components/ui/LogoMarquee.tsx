"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
    className?: string;
}

const logos = [
    "Accenture",
    "Deloitte",
    "McKinsey",
    "BCG",
    "Oracle",
    "SAP",
    "Salesforce",
    "IBM",
];

export default function LogoMarquee({ className }: LogoMarqueeProps) {
    return (
        <div className={cn("overflow-hidden py-8", className)}>
            <div className="flex animate-marquee whitespace-nowrap">
                {[...logos, ...logos].map((logo, i) => (
                    <div
                        key={i}
                        className="mx-8 flex items-center justify-center min-w-[120px]"
                    >
                        <span className="text-ad-muted-text/40 text-xl font-bold tracking-wider uppercase select-none">
                            {logo}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
