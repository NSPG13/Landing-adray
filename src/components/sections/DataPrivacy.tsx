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

                {/* Overlapping perspective layer cards with light pass */}
                <AnimatedSection delay={0.2}>
                    <div className="flex justify-center">
                        <div
                            style={{
                                position: "relative",
                                width: "min(32rem, 90%)",
                                aspectRatio: "4 / 3",
                                perspective: "50rem",
                            }}
                        >
                            {layerImages.map((src, i) => {
                                const zOffset = i * -3.5;
                                const xShift = i * 4;
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            position: "absolute",
                                            top: "5%",
                                            bottom: "5%",
                                            left: `${8 + xShift}%`,
                                            width: "55%",
                                            transform: `rotateY(-18deg) translateZ(${zOffset}rem)`,
                                            transformStyle: "preserve-3d",
                                            borderRadius: "0.75rem",
                                            overflow: "hidden",
                                            border: "0.06rem solid rgba(255,255,255,0.08)",
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
                                                filter: `brightness(${i === 0 ? 1.9 : i === 1 ? 1.6 : 1}) sepia(1) hue-rotate(230deg) saturate(2)`,
                                                opacity: i <= 1 ? 1 : 0.5,
                                                maskImage:
                                                    "linear-gradient(0deg, rgba(0,0,0,0.37) 6%, rgb(0,0,0) 17%, rgba(0,0,0,1) 100%)",
                                                WebkitMaskImage:
                                                    "linear-gradient(0deg, rgba(0,0,0,0.37) 6%, rgb(0,0,0) 17%, rgba(0,0,0,1) 100%)",
                                            }}
                                        />

                                        {/* Light pass overlay — sweeps through this layer */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                background:
                                                    "linear-gradient(180deg, transparent 0%, rgba(181,92,255,0.25) 40%, rgba(202,138,229,0.35) 50%, rgba(181,92,255,0.25) 60%, transparent 100%)",
                                                backgroundSize: "100% 300%",
                                                animation: `layer-light-pass 3.5s ease-in-out ${i * 0.5}s infinite`,
                                                mixBlendMode: "screen",
                                                pointerEvents: "none",
                                            }}
                                        />

                                        {/* Edge highlight glow */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                borderRadius: "inherit",
                                                boxShadow:
                                                    "inset 0 0 1.5rem rgba(181,92,255,0.15), inset 0 0 3rem rgba(202,138,229,0.08)",
                                                animation: `layer-edge-glow 3.5s ease-in-out ${i * 0.5}s infinite`,
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
                                    top: "20%",
                                    left: "25%",
                                    width: "50%",
                                    height: "60%",
                                    background: "radial-gradient(ellipse, rgba(181,92,255,0.12) 0%, transparent 70%)",
                                    filter: "blur(2rem)",
                                    animation: "layer-ambient 3.5s ease-in-out infinite",
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
