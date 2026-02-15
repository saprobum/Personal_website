"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { ArrowUpRight, Eye, Github, Star, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Orion Dashboard",
    description:
      "A futuristic data visualization platform for interstellar logistics with real-time analytics.",
    tags: ["Next.js", "D3.js", "Tailwind"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "from-blue-500 to-cyan-500",
    className: "md:col-span-2",
    featured: true,
    stats: { views: "12.5k", stars: 234 },
  },
  {
    title: "Nebula Chat",
    description:
      "Encrypted real-time communication tool with end-to-end encryption.",
    tags: ["React", "Socket.io", "WebRTC"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "from-purple-500 to-pink-500",
    className: "md:col-span-1",
    stats: { views: "8.2k", stars: 156 },
  },
  {
    title: "Gravity Note",
    description:
      "Physics-based note taking app with smooth animations and gestures.",
    tags: ["Framer Motion", "Zustand", "TypeScript"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "from-green-500 to-emerald-500",
    className: "md:col-span-1",
    stats: { views: "6.7k", stars: 89 },
  },
  {
    title: "Eclipse Commerce",
    description: "Headless e-commerce solution used by major brands worldwide.",
    tags: ["Next.js", "Stripe", "Sanity"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "from-orange-500 to-red-500",
    className: "md:col-span-2",
    stats: { views: "15.3k", stars: 312 },
  },
  {
    title: "Stellar API",
    description: "High-performance GraphQL API with advanced caching.",
    tags: ["GraphQL", "Node.js", "Redis"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "from-indigo-500 to-blue-500",
    className: "md:col-span-1",
    stats: { views: "9.8k", stars: 178 },
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);
  const translateZ = useTransform(mouseX, [-0.5, 0.5], [0, 0]);

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
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-border/40 bg-background/50 backdrop-blur-xl shadow-lg transition-all duration-500 hover:shadow-2xl",
        project.className,
        isHovered && "z-10",
      )}
    >
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br blur-xl opacity-50",
            project.color,
          )}
        />
      </div>

      {/* Gradient Border on Hover */}
      <motion.div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
        )}
        style={{
          background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
        }}
        animate={
          isHovered
            ? {
                background: [
                  "linear-gradient(0deg, rgba(168,85,247,0.1), rgba(34,211,238,0.1))",
                  "linear-gradient(360deg, rgba(168,85,247,0.1), rgba(34,211,238,0.1))",
                ],
              }
            : {}
        }
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Featured Badge */}
      {project.featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-500/90 to-orange-500/90 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white shadow-lg"
        >
          <Sparkles className="w-3 h-3" />
          Featured
        </motion.div>
      )}

      {/* Project Image */}
      <div
        className={cn(
          "relative h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br",
          imageError ? project.color : "from-background/50 to-background/30",
        )}
      >
        <motion.div
          className="absolute inset-0"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {!imageError && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
              onError={() => setImageError(true)}
            />
          )}
          {/* Overlay gradient */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br mix-blend-overlay",
              imageError ? "opacity-30" : "opacity-60",
              project.color,
            )}
          />
          {/* Fallback Icon when image fails */}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-white/50" />
            </div>
          )}
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
        />

        {/* Floating Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center gap-3"
        >
          <Link
            href={project.link}
            className="flex items-center gap-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          >
            <Eye className="h-4 w-4" />
            View
          </Link>
          <Link
            href={project.github}
            className="flex items-center gap-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-md px-2.5 py-1 text-xs font-medium border border-border/50"
            >
              <Eye className="h-3 w-3 text-blue-500" />
              {project.stats.views}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-md px-2.5 py-1 text-xs font-medium border border-border/50"
            >
              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
              {project.stats.stars}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="flex flex-col flex-1 p-5 md:p-6"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="flex-1">
          <motion.h3
            className="text-xl md:text-2xl font-bold tracking-tight mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-foreground group-hover:to-foreground transition-all"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tags and Action */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.05 + 0.2 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={cn(
                  "inline-flex items-center rounded-full border border-border/50 bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold transition-all",
                  "hover:border-foreground/30 hover:bg-foreground/5",
                )}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 45 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={project.link}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 shadow-md",
                "bg-gradient-to-br hover:shadow-lg",
                project.borderColor,
                "text-white",
              )}
            >
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
        animate={isHovered ? { x: ["-100%", "100%"] } : { x: "-100%" }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
      />
    </motion.div>
  );
}

export function ProjectGrid() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Grid */}
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"
        />

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
        />
      </div>

      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-4 py-2 text-sm font-medium"
          >
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Selected Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-[700px] leading-relaxed"
          >
            A curation of my best projects, featuring complex physics
            simulations, seamless user interfaces, and cutting-edge web
            technologies.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40 overflow-hidden"
          >
            <span className="relative z-10">View All Projects</span>
            <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
