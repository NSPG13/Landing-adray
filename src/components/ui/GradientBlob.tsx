import React from "react";
import { cn } from "@/lib/utils";

interface GradientBlobProps {
    className?: string;
    color?: "primary" | "accent" | "deep";
    size?: "sm" | "md" | "lg" | "xl";
}

const colorMap = {
    primary: "bg-ad-primary/20",
    accent: "bg-ad-accent/20",
    deep: "bg-ad-deep/30",
};

const sizeMap = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
};

export default function GradientBlob({
    className,
    color = "accent",
    size = "lg",
}: GradientBlobProps) {
    return (
        <div
            className={cn(
                "absolute rounded-full blur-3xl opacity-50 pointer-events-none",
                colorMap[color],
                sizeMap[size],
                className
            )}
            aria-hidden="true"
        />
    );
}
