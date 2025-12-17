"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Github, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

function FloatingShape({ className, delay = 0 }: { className?: string; delay?: number }) {
    return (
        <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            className={cn("absolute rounded-full blur-3xl opacity-30", className)}
        />
    );
}

export function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    const x = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const y = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 -z-10 bg-background">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 relative z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center rounded-full border border-border/50 bg-background/50 px-3 py-1 text-sm backdrop-blur-md w-fit"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        Available for new projects
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                        Defying Gravity <br />
                        <span className="text-primary/80">Designing Future.</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                        I build weightless, physics-driven digital experiences that captivate and engage.
                        Blending high-performance code with fluid motion.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <Link
                            href="#projects"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            View Work
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                            href="https://github.com"
                            target="_blank"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            Github
                        </Link>
                    </div>
                </motion.div>

                {/* Interactive Visual */}
                <motion.div
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    className="relative h-[400px] w-full flex items-center justify-center perspective-1000"
                >
                    {/* Floating Avatar */}
                    <motion.div
                        className="relative w-80 h-80 z-20 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden glass-card"
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Image
                            src="/portfolio-avatar.png"
                            alt="Professional Avatar"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Floating Orbs behind */}
                    <FloatingShape className="w-72 h-72 bg-purple-500/20 -top-10 -right-10" delay={0} />
                    <FloatingShape className="w-56 h-56 bg-blue-500/20 bottom-0 -left-10" delay={2} />
                </motion.div>

            </div>
        </section>
    );
}
