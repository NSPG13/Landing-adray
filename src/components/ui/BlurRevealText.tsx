"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface BlurRevealTextProps {
    text: string;
    className?: string;
    startDelay?: number;
    /** If true, animation triggers when scrolled into view instead of on mount */
    triggerOnScroll?: boolean;
}

export default function BlurRevealText({
    text,
    className,
    startDelay = 0,
    triggerOnScroll = false,
}: BlurRevealTextProps) {
    const ref = React.useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const chars = text.split("");
    const shouldAnimate = triggerOnScroll ? isInView : true;

    return (
        <span ref={ref} className={className}>
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : undefined }}
                    initial={{ opacity: 0.001, filter: "blur(10px)", y: 10 }}
                    animate={
                        shouldAnimate
                            ? { opacity: 1, filter: "blur(0px)", y: 0 }
                            : { opacity: 0.001, filter: "blur(10px)", y: 10 }
                    }
                    transition={{
                        duration: 0.4,
                        delay: startDelay + i * 0.025,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}
