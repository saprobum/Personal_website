"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Code,
  Cpu,
  Database,
  Figma,
  Globe,
  Layers,
  Layout,
  Palette,
  Server,
  Smartphone,
  Terminal,
  Wind,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "React", icon: Atom, color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", icon: Zap, color: "from-gray-900 to-gray-700" },
  { name: "TypeScript", icon: Code, color: "from-blue-600 to-blue-400" },
  { name: "Tailwind CSS", icon: Wind, color: "from-cyan-400 to-teal-400" },
  { name: "Figma", icon: Palette, color: "from-purple-500 to-pink-500" },
  { name: "Node.js", icon: Server, color: "from-green-600 to-green-400" },
  { name: "PostgreSQL", icon: Database, color: "from-blue-700 to-blue-500" },
  { name: "Framer Motion", icon: Layers, color: "from-pink-500 to-purple-500" },
  { name: "Mobile", icon: Smartphone, color: "from-indigo-500 to-purple-500" },
  { name: "UI/UX", icon: Layout, color: "from-orange-500 to-red-500" },
  { name: "Git", icon: Terminal, color: "from-orange-600 to-red-600" },
  { name: "Web3", icon: Cpu, color: "from-violet-500 to-purple-600" },
];

export function SkillsMarquee() {
  return (
    <section
      id="skills"
      className="py-20 overflow-hidden relative border-y border-border/40 bg-background/30 backdrop-blur-sm"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background via-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background via-background to-transparent z-10 pointer-events-none" />

      {/* Section Title */}
      <div className="container px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I work with
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="flex mb-6">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0 gap-4 pr-4"
        >
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={`row1-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative flex items-center gap-3 rounded-2xl border border-border/50 bg-background/80 px-5 py-3 shadow-md backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-lg cursor-pointer min-w-fit"
            >
              {/* Gradient background on hover */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                  skill.color,
                )}
              />

              <div className="relative">
                <skill.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-semibold text-sm relative">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 - Right to Left (Reversed) */}
      <div className="flex">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0 gap-4 pr-4"
        >
          {[...skills.slice().reverse(), ...skills.slice().reverse()].map(
            (skill, index) => (
              <motion.div
                key={`row2-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative flex items-center gap-3 rounded-2xl border border-border/50 bg-background/80 px-5 py-3 shadow-md backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-lg cursor-pointer min-w-fit"
              >
                {/* Gradient background on hover */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                    skill.color,
                  )}
                />

                <div className="relative">
                  <skill.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-semibold text-sm relative">
                  {skill.name}
                </span>
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
