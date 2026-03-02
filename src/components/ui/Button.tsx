"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    children: React.ReactNode;
}

export default function Button({
    variant = "primary",
    size = "md",
    href,
    children,
    className,
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer";

    const variants = {
        primary:
            "bg-ad-accent hover:bg-ad-primary text-white shadow-lg shadow-ad-accent/20 hover:shadow-ad-accent/40 hover:scale-105",
        secondary:
            "bg-ad-surface-light hover:bg-ad-deep text-ad-ice border border-ad-muted-border hover:border-ad-primary/40 hover:scale-105",
        ghost:
            "bg-transparent hover:bg-ad-surface-light text-ad-ice hover:text-white",
        outline:
            "bg-transparent border border-ad-muted-border hover:border-ad-accent text-ad-ice hover:text-white hover:scale-105",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
