import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    tag?: string;
    tagIcon?: React.ReactNode;
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export default function SectionHeading({
    tag,
    tagIcon,
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
            {tag && (
                <div className={cn(
                    "flex items-center gap-3 mb-6",
                    align === "center" && "justify-center"
                )}>
                    {tagIcon && (
                        <span className="w-6 h-6 text-light-blue flex-shrink-0">{tagIcon}</span>
                    )}
                    <span className="t-p-sm uppercase tracking-widest text-light-blue">
                        {tag}
                    </span>
                </div>
            )}
            <h2
                className="t-h2 text-white-100"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            {subtitle && (
                <p className="mt-4 t-p-lg text-light-blue">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
