"use client";

import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const integrationIcons = [
    { src: "DU8DKlxTsbVIEUdhYPL0FdSSqDY.svg", w: 40, h: 40 },
    { src: "aap1xSJQbafVrLaeVhlLfdpwNZg.svg", w: 60, h: 60 },
    { src: "FQP31xwbbI4n1vs2r24mfuxRGQI.svg", w: 49, h: 40 },
    { src: "EvRpOn9wuYvQYZzCfYwtnS65jRE.svg", w: 40, h: 40 },
    { src: "hdYPy2J7QbpyCYtFC4VUGW13ytI.svg", w: 51, h: 40 },
    { src: "QaeKao8eibxNDl43Zp0JVaFeI.svg", w: 49, h: 48 },
];

export default function HomeIntegration() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background masking gradient */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage:
                        "url(https://framerusercontent.com/images/FMpJMmyNTqRd8oGYputAzs8cso.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <Container className="relative z-10">
                <AnimatedSection>
                    <SectionHeading
                        tag="INTEGRATION"
                        tagIcon={
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src="https://framerusercontent.com/images/A2kRK4SXq8SQGtD1igJ3QJKmUH4.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        }
                        title="Smart Versatile Agent driven Integration"
                        subtitle="Connect custom or pre-built connectors to your enterprise and third-party apps."
                    />
                </AnimatedSection>

                {/* Integration icon grid */}
                <AnimatedSection delay={0.2}>
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                        {integrationIcons.map((icon, i) => (
                            <div
                                key={i}
                                className="w-20 h-20 rounded-[24px] flex items-center justify-center"
                                style={{
                                    background:
                                        "linear-gradient(40deg, rgb(255,205,125) 0%, rgb(12,15,22) 45%, rgb(1,117,255) 100%)",
                                    boxShadow: "0px 6px 24px 0px rgba(255,179,73,0.25)",
                                }}
                            >
                                <div className="w-[72px] h-[72px] rounded-[20px] bg-dark-blue flex items-center justify-center">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`https://framerusercontent.com/images/${icon.src}`}
                                        alt=""
                                        width={icon.w}
                                        height={icon.h}
                                        className="opacity-90"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <div className="text-center">
                        <Button variant="primary" href="/integration">
                            Know More
                        </Button>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
