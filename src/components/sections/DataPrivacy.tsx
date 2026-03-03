"use client";

import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const featureTags = [
    "Intelligent Protection",
    "Real-Time Threat Detection",
    "Seamless Compliance",
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
                                src="https://framerusercontent.com/images/TRt8OkZ1B4j7B4TuuIPjZZ0f8.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        }
                        title="Multi-Layer Security"
                        subtitle="Protect your enterprise with multi-layered AI security. From data encryption to behavior monitoring, every layer works together."
                    />
                </AnimatedSection>

                {/* Feature tags */}
                <AnimatedSection delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {featureTags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 rounded-full t-p-sm bg-white-7 text-white-90 border border-blue-10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Layered images */}
                <AnimatedSection delay={0.2}>
                    <div className="flex justify-center gap-4 md:gap-6">
                        {layerImages.map((src, i) => (
                            <div
                                key={i}
                                className="relative flex-1 max-w-[200px]"
                                style={{
                                    opacity: i === 0 ? 1 : 0.5,
                                    maskImage:
                                        "linear-gradient(0deg, rgba(0,0,0,0.37) 6%, rgb(0,0,0) 17%, rgba(0,0,0,1) 100%)",
                                    WebkitMaskImage:
                                        "linear-gradient(0deg, rgba(0,0,0,0.37) 6%, rgb(0,0,0) 17%, rgba(0,0,0,1) 100%)",
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Security Layer ${i + 1}`}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
