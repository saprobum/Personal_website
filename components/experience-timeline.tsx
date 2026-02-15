"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const experience = [
    {
        title: "Senior Frontend Engineer",
        company: "TechNova Corp",
        year: "2023 - Present",
        description: "Leading the migration to React Server Components and implementing a new design system.",
        icon: Briefcase,
        tags: ["React", "TypeScript", "Next.js", "Leadership"],
    },
    {
        title: "Frontend Developer",
        company: "WebFlow Studios",
        year: "2021 - 2023",
        description: "Built award-winning marketing sites using Next.js and GSAP for complex animations.",
        icon: Briefcase,
        tags: ["Next.js", "GSAP", "Framer Motion", "Tailwind"],
    },
    {
        title: "Freelance Developer",
        company: "Self-Employed",
        year: "2019 - 2021",
        description: "Worked with various startups to prototype and launch MVPs quickly.",
        icon: Briefcase,
        tags: ["React", "Node.js", "MongoDB", "Firebase"],
    },
    {
        title: "BS Computer Science",
        company: "University of Technology",
        year: "2015 - 2019",
        description: "Specialized in Human-Computer Interaction and Computer Graphics.",
        icon: GraduationCap,
        tags: ["HCI", "Graphics", "Algorithms", "Research"],
    },
];

// Animated counter component
function AnimatedCounter({ value }: { value: string }) {
    return (
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
            {value}
        </motion.span>
    );
}

// Timeline node component with glow effect
function TimelineNode({ 
    item, 
    index, 
    isActive 
}: { 
    item: typeof experience[0]; 
    index: number; 
    isActive: boolean;
}) {
    const isEven = index % 2 === 0;
    const Icon = item.icon;

    return (
        <motion.div
            className={cn(
                "absolute left-4 md:left-1/2 z-20 -translate-x-1/2",
                "flex items-center justify-center"
            )}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                delay: index * 0.1 
            }}
        >
            {/* Outer glow ring */}
            <motion.div
                animate={isActive ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.2, 0.5],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-lg"
            />
            
            {/* Main node */}
            <div className={cn(
                "relative w-12 h-12 rounded-full flex items-center justify-center",
                "bg-gradient-to-br from-purple-600 to-cyan-600 shadow-xl",
                "border-4 border-background"
            )}>
                <Icon className="w-5 h-5 text-white" />
            </div>
        </motion.div>
    );
}

// Timeline card component
function TimelineCard({ 
    item, 
    index, 
    isActive 
}: { 
    item: typeof experience[0]; 
    index: number; 
    isActive: boolean;
}) {
    const isEven = index % 2 === 0;
    const cardRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ 
                opacity: 0, 
                x: isEven ? 100 : -100,
                rotateY: isEven ? 15 : -15 
            }}
            animate={isInView ? { 
                opacity: 1, 
                x: 0,
                rotateY: 0 
            } : {}}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.15 
            }}
            className={cn(
                "relative group",
                isEven ? "md:mr-auto md:pr-16 md:text-right" : "md:ml-auto md:pl-16 md:text-left",
                "w-full md:w-[calc(50%-2rem)] pl-20 md:pl-0"
            )}
        >
            {/* Connection line to node */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className={cn(
                    "hidden md:block absolute top-6 h-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 origin-left",
                    isEven ? "right-0 w-16" : "left-0 w-16 origin-right"
                )}
            />

            {/* Card */}
            <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={cn(
                    "relative p-6 rounded-2xl overflow-hidden",
                    "bg-gradient-to-br from-card/80 to-card/40",
                    "border border-border/50 backdrop-blur-xl",
                    "shadow-lg shadow-purple-500/5",
                    "group-hover:shadow-xl group-hover:shadow-purple-500/10",
                    "group-hover:border-purple-500/30",
                    "transition-all duration-500"
                )}
            >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative">
                    {/* Year badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4",
                            "bg-gradient-to-r from-purple-500/10 to-cyan-500/10",
                            "text-purple-600 dark:text-purple-400 border border-purple-500/20"
                        )}
                    >
                        <Sparkles className="w-3 h-3" />
                        {item.year}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 transition-all duration-300">
                        {item.title}
                    </h3>

                    {/* Company */}
                    <p className="text-muted-foreground font-medium mb-3 flex items-center gap-2 md:justify-start">
                        <span className={cn("w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500", isEven && "md:order-last")} />
                        {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                    </p>

                    {/* Tags */}
                    <div className={cn("flex flex-wrap gap-2", isEven && "md:justify-end")}>
                        {item.tags.map((tag, tagIndex) => (
                            <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.15 + 0.4 + tagIndex * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className={cn(
                                    "px-3 py-1 text-xs rounded-full",
                                    "bg-foreground/5 text-foreground/70",
                                    "border border-border/30",
                                    "hover:bg-purple-500/10 hover:border-purple-500/30",
                                    "hover:text-purple-600 dark:hover:text-purple-400",
                                    "transition-colors duration-300"
                                )}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Arrow indicator */}
                <motion.div
                    initial={{ opacity: 0, x: isEven ? 10 : -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className={cn(
                        "absolute top-1/2 -translate-y-1/2",
                        isEven ? "left-4" : "right-4"
                    )}
                >
                    <ArrowRight className={cn(
                        "w-5 h-5 text-purple-500",
                        !isEven && "rotate-180"
                    )} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

// Stats section
function StatsSection() {
    const stats = [
        { label: "Years Experience", value: "5+" },
        { label: "Projects Completed", value: "50+" },
        { label: "Companies Worked", value: "4" },
        { label: "Technologies", value: "20+" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 mb-16"
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-transparent border border-border/30 backdrop-blur-sm"
                >
                    <AnimatedCounter value={stat.value} />
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
            ))}
        </motion.div>
    );
}

export function ExperienceTimeline() {
    const containerRef = React.useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const heightSpring = useSpring(height, { stiffness: 100, damping: 30 });

    // Update active index based on scroll
    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const index = Math.min(
                Math.floor(latest * experience.length),
                experience.length - 1
            );
            setActiveIndex(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section id="experience" ref={containerRef} className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-4 text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-sm font-medium text-purple-600 dark:text-purple-400"
                    >
                        My Journey
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Experience &{" "}
                        </span>
                        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    
                    <p className="text-muted-foreground max-w-[600px] text-lg">
                        A timeline of my professional journey, from university to senior engineering roles.
                    </p>
                </motion.div>

                {/* Stats */}
                <StatsSection />

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line Background */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />

                    {/* Animated Progress Line */}
                    <motion.div
                        style={{ height: heightSpring }}
                        className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 -translate-x-1/2 z-10 origin-top shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    />

                    {/* Timeline Items */}
                    <div className="space-y-12 md:space-y-24">
                        {experience.map((item, index) => (
                            <div key={index} className="relative">
                                <TimelineNode 
                                    item={item} 
                                    index={index} 
                                    isActive={index <= activeIndex}
                                />
                                <TimelineCard 
                                    item={item} 
                                    index={index} 
                                    isActive={index <= activeIndex}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-20"
                >
                    <p className="text-muted-foreground mb-4">
                        Interested in working together?
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300"
                    >
                        Let's Connect
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
