"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const experience = [
    {
        title: "Senior Frontend Engineer",
        company: "TechNova Corp",
        year: "2023 - Present",
        description: "Leading the migration to React Server Components and implementing a new design system.",
        icon: Briefcase,
    },
    {
        title: "Frontend Developer",
        company: "WebFlow Studios",
        year: "2021 - 2023",
        description: "Built award-winning marketing sites using Next.js and GSAP for complex animations.",
        icon: Briefcase,
    },
    {
        title: "Freelance Developer",
        company: "Self-Employed",
        year: "2019 - 2021",
        description: "Worked with various startups to prototype and launch MVPs quickly.",
        icon: Briefcase,
    },
    {
        title: "BS Computer Science",
        company: "University of Technology",
        year: "2015 - 2019",
        description: "Specialized in Human-Computer Interaction and Computer Graphics.",
        icon: GraduationCap,
    },
];

function TimelineItem({ item, index }: { item: typeof experience[0]; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={cn(
                "relative flex items-center justify-between md:justify-normal w-full mb-8",
                isEven ? "md:flex-row-reverse" : ""
            )}
        >
            {/* Dot on Line */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-20 -translate-x-1/2" />

            {/* Spacer for desktop layout */}
            <div className="hidden md:block w-5/12" />

            {/* Content Card */}
            <div className={cn(
                "w-full md:w-5/12 pl-12 md:pl-0",
                isEven ? "md:pr-12 md:text-right" : "md:pl-12"
            )}>
                <div className="p-6 rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm shadow-sm hover:bg-accent/20 transition-colors">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
                        <item.icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-primary/80 font-medium mb-2">{item.company} | {item.year}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                </div>
            </div>
        </motion.div>
    );
}

export function ExperienceTimeline() {
    const containerRef = React.useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" ref={containerRef} className="py-24 container px-4 md:px-6 relative">
            <div className="flex flex-col items-center gap-4 text-center mb-16 relative z-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
                <p className="text-muted-foreground max-w-[600px]">
                    My professional journey and academic background.
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line Background */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/30 -translate-x-1/2" />

                {/* Animated Progress Line */}
                <motion.div
                    style={{ height }}
                    className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary to-purple-500 -translate-x-1/2 z-10 origin-top"
                />

                <div className="space-y-12">
                    {experience.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
