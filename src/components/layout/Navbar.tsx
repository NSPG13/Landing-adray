"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "For Agencies", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
            <div className="mx-auto max-w-[1200px] px-5 md:px-10 pt-4">
                {/* Desktop: 3 separate pills side by side */}
                <div className="hidden md:flex items-center justify-between">
                    {/* Logo pill */}
                    <Link
                        href="/"
                        className="flex items-center px-3 py-2 rounded-full"
                        style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/adray-logo.svg"
                            alt="Adray"
                            className="h-6 w-auto"
                            style={{ objectFit: "contain" }}
                        />
                    </Link>

                    {/* Links pill */}
                    <nav
                        className="relative flex items-center gap-7 px-6 py-4 rounded-full"
                        style={{
                            backdropFilter: "blur(16px) saturate(1.4)",
                            WebkitBackdropFilter: "blur(16px) saturate(1.4)",
                            background: "rgba(255, 255, 255, 0.08)",
                            boxShadow: "inset -3px -2px 8px 0px rgba(255, 255, 255, 0.07)",
                        }}
                    >
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative group">
                                <Link
                                    href={link.href}
                                    className="relative flex items-center gap-1 t-p-sm text-white-90 hover:text-white-100 transition-colors duration-200 py-1"
                                >
                                    {link.label}
                                    <span className="nav-link-underline" />
                                </Link>
                            </div>
                        ))}
                        {/* Masked gradient border overlay */}
                        <div
                            className="absolute inset-0 rounded-full pointer-events-none"
                            style={{
                                border: "0.5px solid rgb(255, 255, 255)",
                                borderRadius: "999px",
                                mask: "linear-gradient(160deg, #000 0%, transparent 39%, transparent 69%, #000 100%)",
                                WebkitMask: "linear-gradient(160deg, #000 0%, transparent 39%, transparent 69%, #000 100%)",
                            }}
                        />
                    </nav>

                    {/* CTA button */}
                    <a
                        href="/pricing"
                        className="inline-flex items-center justify-center px-5 py-2.5 t-p-sm font-semibold rounded-[15px] bg-black-100 text-white-100 border border-white-40 glow-btn hover:scale-105 transition-transform duration-300"
                    >
                        Get Started Free
                    </a>
                </div>

                {/* Mobile: single pill with hamburger */}
                <div
                    className={cn(
                        "flex md:hidden items-center justify-between rounded-full px-4 py-3 transition-all duration-300",
                        "glass border border-ad-border"
                    )}
                >
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

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300",
                    mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <nav className="glass border border-ad-border mx-5 mt-2 rounded-2xl p-6 flex flex-col gap-4">
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
