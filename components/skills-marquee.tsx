"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Atom, Code, Cpu, Database, Figma, Globe, Layers, Layout, Palette, Server, Smartphone, Terminal, Wind, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Zap },
    { name: "TypeScript", icon: Code },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Figma", icon: Palette },
    { name: "Node.js", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "Framer Motion", icon: Layers },
    { name: "Mobile", icon: Smartphone },
    { name: "UI/UX", icon: Layout },
    { name: "Git", icon: Terminal },
    { name: "Web3", icon: Cpu },
];

export function SkillsMarquee() {
    return (
        <section id="skills" className="py-20 overflow-hidden relative border-y border-border/40 bg-background/30 backdrop-blur-sm">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex flex-shrink-0 gap-8 pr-8"
                >
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index} // safe to use index here for double render
                            className="flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-6 py-3 shadow-sm backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-accent"
                        >
                            <skill.icon className="h-5 w-5 text-primary" />
                            <span className="font-medium">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
