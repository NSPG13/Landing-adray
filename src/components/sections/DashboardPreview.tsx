"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function DashboardPreview() {
    return (
        <section className="relative py-8 -mt-16 z-20">
            <Container>
                <AnimatedSection delay={0.2}>
                    <motion.div
                        className="relative mx-auto max-w-5xl"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Glow effect behind the dashboard */}
                        <div className="absolute inset-0 bg-ad-accent/10 rounded-3xl blur-3xl scale-95" />

                        {/* Dashboard mockup */}
                        <div className="relative rounded-2xl overflow-hidden border border-ad-muted-border shadow-2xl shadow-ad-accent/10">
                            {/* Dashboard header */}
                            <div className="bg-ad-surface-dark border-b border-ad-muted-border/50 px-6 py-4 flex items-center gap-4">
                                <span className="text-white font-bold text-sm">ADRAY</span>
                                <span className="text-ad-primary text-sm flex items-center gap-1.5">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                    Analytics Agent
                                </span>
                                <div className="flex-1 mx-4">
                                    <div className="bg-ad-surface-light rounded-full px-4 py-1.5 flex items-center gap-2 max-w-xs">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="text-ad-muted-text"
                                        >
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="M21 21l-4.35-4.35" />
                                        </svg>
                                        <span className="text-ad-muted-text text-xs">
                                            Search here...
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-ad-muted-text">Eng (US)</span>
                                    <div className="w-8 h-8 rounded-full bg-ad-deep" />
                                </div>
                            </div>

                            {/* Dashboard body */}
                            <div className="bg-ad-surface flex min-h-[400px]">
                                {/* Sidebar */}
                                <div className="w-48 border-r border-ad-muted-border/30 p-4 hidden sm:block">
                                    <div className="space-y-1">
                                        {[
                                            "Active",
                                            "Protocol",
                                            "Overview",
                                            "Prompt",
                                            "Sources",
                                            "Model",
                                            "Settings",
                                        ].map((item, i) => (
                                            <div
                                                key={item}
                                                className={`px-3 py-2 rounded-lg text-xs ${i === 0
                                                        ? "bg-ad-accent/20 text-ad-accent font-medium"
                                                        : "text-ad-muted-text hover:text-white"
                                                    }`}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main content */}
                                <div className="flex-1 p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-white font-semibold text-sm">
                                            Today&apos;s Sales
                                        </h3>
                                        <div className="flex gap-2">
                                            {["Export", "Filter"].map((btn) => (
                                                <span
                                                    key={btn}
                                                    className="px-3 py-1 rounded-lg text-xs bg-ad-surface-light text-ad-muted-text border border-ad-muted-border/30"
                                                >
                                                    {btn}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats cards */}
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                        {[
                                            { label: "Total Sales", value: "$26", color: "bg-red-500/20", icon: "text-red-400" },
                                            { label: "Total Orders", value: "432", color: "bg-green-500/20", icon: "text-green-400" },
                                            { label: "Product Sold", value: "9", color: "bg-yellow-500/20", icon: "text-yellow-400" },
                                            { label: "New Customers", value: "42", color: "bg-blue-500/20", icon: "text-blue-400" },
                                        ].map((stat) => (
                                            <div
                                                key={stat.label}
                                                className="bg-ad-surface-light rounded-xl p-4 border border-ad-muted-border/20"
                                            >
                                                <div
                                                    className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center mb-3`}
                                                >
                                                    <div className={`w-3 h-3 rounded-full ${stat.icon.replace("text-", "bg-")}`} />
                                                </div>
                                                <div className="text-white font-bold text-lg">
                                                    {stat.value}
                                                </div>
                                                <div className="text-ad-muted-text text-xs mt-1">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Charts area */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        {/* Bar chart placeholder */}
                                        <div className="bg-ad-surface-light rounded-xl p-4 border border-ad-muted-border/20">
                                            <div className="text-xs text-ad-muted-text mb-4">
                                                Top Products
                                            </div>
                                            <div className="flex items-end gap-2 h-24">
                                                {[60, 45, 80, 35, 70, 50, 65].map((h, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 bg-ad-accent/40 rounded-t"
                                                        style={{ height: `${h}%` }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Map placeholder */}
                                        <div className="bg-ad-surface-light rounded-xl p-4 border border-ad-muted-border/20">
                                            <div className="text-xs text-ad-muted-text mb-4">
                                                Sales Mapping by Country
                                            </div>
                                            <div className="h-24 flex items-center justify-center">
                                                <div className="text-ad-deep text-xs flex gap-1">
                                                    {Array.from({ length: 20 }).map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-2 h-2 rounded-full bg-ad-accent/30"
                                                            style={{
                                                                transform: `translateY(${Math.sin(i * 0.5) * 10}px)`,
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right panel - Visitor Insights */}
                                <div className="w-64 border-l border-ad-muted-border/30 p-4 hidden lg:block">
                                    <div className="text-xs text-ad-muted-text mb-4">
                                        Visitor Insights
                                    </div>
                                    <div className="space-y-3">
                                        {/* Mini line chart */}
                                        <div className="h-20 flex items-end gap-1">
                                            {[30, 50, 35, 60, 45, 70, 55, 80, 65, 90].map(
                                                (h, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 bg-gradient-to-t from-ad-accent/20 to-ad-accent/60 rounded-t"
                                                        style={{ height: `${h}%` }}
                                                    />
                                                )
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-ad-surface rounded-lg p-2">
                                                <div className="text-white font-bold text-sm">87%</div>
                                                <div className="text-ad-muted-text text-xs">
                                                    Satisfaction
                                                </div>
                                            </div>
                                            <div className="bg-ad-surface rounded-lg p-2">
                                                <div className="text-white font-bold text-sm">
                                                    2.4k
                                                </div>
                                                <div className="text-ad-muted-text text-xs">
                                                    Visitors
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
