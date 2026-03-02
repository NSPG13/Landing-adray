import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium",
                "bg-ad-deep/40 text-ad-primary border border-ad-muted-border",
                "backdrop-blur-sm",
                className
            )}
        >
            <span className="w-1.5 h-1.5 rounded-full bg-ad-accent animate-pulse" />
            {children}
        </span>
    );
}
