"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "For Agencies", href: "/agencies" },
];

export default function Navbar() {
    const [visible, setVisible] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
            style={{ background: visible ? "#000" : "transparent" }}
        >
            <div className="mx-auto max-w-[1200px] px-5 md:px-10">
                {/* Desktop */}
                <div className="hidden md:flex items-center justify-between w-full py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/adray-logo.svg"
                            alt="Adray"
                            className="h-6 w-auto"
                            style={{ objectFit: "contain" }}
                        />
                    </Link>

                    {/* Links */}
                    <nav className="flex items-center gap-7">
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative group">
                                <Link
                                    href={link.href}
                                    className="relative flex items-center gap-1 t-p-sm font-semibold text-white-100 hover:text-white-100 transition-colors duration-200 py-1"
                                >
                                    {link.label}
                                    <span className="nav-link-underline" />
                                </Link>
                            </div>
                        ))}
                    </nav>

                    {/* CTA button */}
                    <a
                        href="/pricing"
                        className="inline-flex items-center justify-center px-5 py-2.5 t-p-sm font-semibold rounded-[15px] bg-black-100 text-white-100 border border-white-40 glow-btn hover:scale-105 transition-transform duration-300"
                    >
                        Get Started Free
                    </a>
                </div>

                {/* Mobile */}
                <div className="flex md:hidden items-center justify-between py-3">
                    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/adray-logo.svg"
                            alt="Adray"
                            className="h-6 w-auto"
                        />
                    </Link>
                    <button
                        className="text-white-100 p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Bottom border */}
            <div className="w-full h-px transition-opacity duration-500" style={{ background: "rgba(255,255,255,0.1)", opacity: visible ? 1 : 0 }} />

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300",
                    mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
                style={{ background: "#000" }}
            >
                <nav className="mx-5 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-white-90 hover:text-white-100 transition-colors py-2 t-p"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="/pricing"
                        className="mt-2 inline-flex items-center justify-center px-6 py-3 t-p-sm font-semibold rounded-[15px] bg-black-100 text-white-100 border border-white-40 glow-btn"
                    >
                        Get Started Free
                    </a>
                </nav>
            </div>
        </header>
    );
}
