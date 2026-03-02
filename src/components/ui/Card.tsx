import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({
    children,
    className,
    hover = true,
}: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl p-6 gradient-card transition-all duration-300",
                hover && "hover:shadow-lg hover:shadow-ad-accent/5 hover:-translate-y-1",
                className
            )}
        >
            {children}
        </div>
    );
}
