"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Orion Dashboard",
        description: "A futuristic data visualization platform for interstellar logistics.",
        tags: ["Next.js", "D3.js", "Tailwind"],
        link: "#",
        color: "from-blue-500/20 to-cyan-500/20",
        className: "md:col-span-2",
    },
    {
        title: "Nebula Chat",
        description: "Encrypted real-time communication tool.",
        tags: ["React", "Socket.io"],
        link: "#",
        color: "from-purple-500/20 to-pink-500/20",
        className: "md:col-span-1",
    },
    {
        title: "Gravity Note",
        description: "Physics-based note taking app.",
        tags: ["Framer Motion", "Zustand"],
        link: "#",
        color: "from-green-500/20 to-emerald-500/20",
        className: "md:col-span-1",
    },
    {
        title: "Eclipse Commerce",
        description: "Headless e-commerce solution used by major brands.",
        tags: ["Next.js", "Stripe", "Sanity"],
        link: "#",
        color: "from-orange-500/20 to-red-500/20",
        className: "md:col-span-2",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/50 bg-background/30 backdrop-blur-md p-8 shadow-md transition-all hover:shadow-xl",
                project.className
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    project.color
                )}
            />

            <div className="transform-style-3d translate-z-10">
                <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                    {project.description}
                </p>
            </div>

            <div className="mt-8 flex items-center justify-between transform-style-3d translate-z-10">
                <div className="flex gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-full border border-border/50 bg-background/50 px-2.5 py-0.5 text-xs font-semibold transition-colors group-hover:bg-background/80"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    href={project.link}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                >
                    <ArrowUpRight className="h-5 w-5" />
                </Link>
            </div>
        </motion.div>
    );
}

export function ProjectGrid() {
    return (
        <section id="projects" className="py-24 container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                    Selected Works
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground max-w-[600px]"
                >
                    A curation of my best projects, featuring complex physics simulations and seamless user interfaces.
                </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
