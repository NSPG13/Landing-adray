"use client";

import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const featureTags = [
    "Server-Side Collection",
    "iOS 14+ Proof",
    "Adblocker Immune",
];

const layerImages = [
    "https://framerusercontent.com/images/BOO9YkJWPlVaXJACHcXHqAPuBw.png",
    "https://framerusercontent.com/images/FFx9tCFoevPxrcvXSaMFTcT8.png",
    "https://framerusercontent.com/images/rugS4hRgm7Cf9IUsK51bzhuf4h8.png",
    "https://framerusercontent.com/images/6YZCTbgTJSkogwFP5MNM5Z254gQ.png",
];

export default function DataPrivacy() {
    return (
        <section className="py-20 relative">
            <Container>
                <AnimatedSection>
                    <SectionHeading
                        tag="DATA AND PRIVACY"
                        tagIcon={
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src="/images/svg/TRt8OkZ1B4j7B4TuuIPjZZ0f8.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        }
                        title="Your Data, Fully Protected"
                        subtitle="Server-side collection means your data never touches the browser. Encrypted at rest and in transit, with enterprise-grade privacy built into every layer."
                    />
                </AnimatedSection>

                {/* Feature tags */}
                <AnimatedSection delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {featureTags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 rounded-full t-p-sm bg-white-7 text-white-90 border border-ad-border"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Overlapping perspective layer cards with discrete light flash */}
                <AnimatedSection delay={0.2}>
                    <div className="flex justify-center">
                        <div
                            style={{
                                position: "relative",
                                width: "min(34rem, 90%)",
                                height: "22rem",
                                perspective: "60rem",
                                perspectiveOrigin: "40% 50%",
                            }}
                        >
                            {layerImages.map((src, i) => {
                                /* 4 cards fanning out in Z — front card (i=0) is closest */
                                const reverseI = 3 - i;
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: `${i * 14}%`,
                                            width: "48%",
                                            height: "100%",
                                            transform: `rotateY(-20deg) translateZ(${reverseI * 2}rem)`,
                                            transformStyle: "preserve-3d",
                                            borderRadius: "0.75rem",
                                            overflow: "hidden",
                                            border: "0.06rem solid rgba(255,255,255,0.1)",
                                            background: "rgba(0,0,0,0.3)",
                                        }}
                                    >
                                        {/* Base image */}
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={src}
                                            alt={`Security Layer ${i + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block",
                                                filter: "sepia(1) hue-rotate(230deg) saturate(2)",
                                                opacity: i === 0 ? 0.9 : i === 1 ? 0.7 : 0.5,
                                                maskImage:
                                                    "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgb(0,0,0) 15%, rgba(0,0,0,1) 100%)",
                                                WebkitMaskImage:
                                                    "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgb(0,0,0) 15%, rgba(0,0,0,1) 100%)",
                                            }}
                                        />

                                        {/* Discrete light flash — full card lights up then off */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                background: "radial-gradient(ellipse at 40% 40%, rgba(202,138,229,0.4) 0%, rgba(181,92,255,0.2) 50%, transparent 80%)",
                                                animation: `layer-flash 4s ease-in-out ${i * 0.6}s infinite`,
                                                pointerEvents: "none",
                                            }}
                                        />

                                        {/* Border glow on flash */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                borderRadius: "inherit",
                                                boxShadow:
                                                    "inset 0 0 2rem rgba(181,92,255,0.15), 0 0 1rem rgba(181,92,255,0.08)",
                                                animation: `layer-flash 4s ease-in-out ${i * 0.6}s infinite`,
                                                pointerEvents: "none",
                                            }}
                                        />
                                    </div>
                                );
                            })}

                            {/* Ambient glow behind the stack */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "15%",
                                    left: "20%",
                                    width: "60%",
                                    height: "70%",
                                    background: "radial-gradient(ellipse, rgba(181,92,255,0.1) 0%, transparent 70%)",
                                    filter: "blur(2rem)",
                                    animation: "layer-ambient 4s ease-in-out infinite",
                                    pointerEvents: "none",
                                    zIndex: -1,
                                }}
                            />
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
