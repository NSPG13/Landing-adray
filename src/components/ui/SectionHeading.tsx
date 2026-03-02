import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    badge?: string;
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export default function SectionHeading({
    badge,
    title,
    subtitle,
    className,
    align = "center",
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "max-w-3xl mb-12 md:mb-16",
                align === "center" && "mx-auto text-center",
                className
            )}
        >
            {badge && (
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-ad-deep/40 text-ad-primary border border-ad-muted-border backdrop-blur-sm mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-ad-accent animate-pulse" />
                    {badge}
                </span>
            )}
            <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            {subtitle && (
                <p className="mt-4 text-base sm:text-lg text-ad-muted-text leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
