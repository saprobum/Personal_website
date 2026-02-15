"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  PanInfo,
} from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Code2,
  Rocket,
  Zap,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Slide data
const slides = [
  {
    id: 1,
    badge: "👋 Welcome",
    title: "Defying Gravity",
    subtitle: "Designing Future.",
    description:
      "I build weightless, physics-driven digital experiences that captivate and engage. Blending high-performance code with fluid motion.",
    image: "/portfolio-avatar.png",
    primaryBtn: { text: "View Work", href: "#projects", icon: ArrowRight },
    secondaryBtn: { text: "Github", href: "https://github.com", icon: Github },
    gradient: "from-purple-500 to-cyan-500",
    bgGradient: "from-purple-500/30 to-cyan-500/30",
  },
  {
    id: 2,
    badge: "💼 Professional",
    title: "Full-Stack",
    subtitle: "Developer & Designer",
    description:
      "Crafting seamless experiences from concept to deployment. Specializing in React, Next.js, and modern web technologies with a keen eye for design.",
    image: "/portfolio-avatar.png",
    primaryBtn: { text: "My Skills", href: "#skills", icon: Code2 },
    secondaryBtn: {
      text: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/30 to-blue-500/30",
  },
  {
    id: 3,
    badge: "🚀 Innovation",
    title: "Creative",
    subtitle: "Problem Solver",
    description:
      "Transforming complex challenges into elegant solutions. Passionate about creating products that make a difference in people's lives.",
    image: "/portfolio-avatar.png",
    primaryBtn: { text: "See Projects", href: "#projects", icon: Rocket },
    secondaryBtn: { text: "Contact", href: "#contact", icon: Mail },
    gradient: "from-pink-500 to-purple-500",
    bgGradient: "from-pink-500/30 to-purple-500/30",
  },
];

function FloatingShape({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
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
  const [[page, direction], setPage] = React.useState([0, 0]);
  const [isDragging, setIsDragging] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const slideIndex = ((page % slides.length) + slides.length) % slides.length;
  const currentSlide = slides[slideIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 0.5);
    mouseY.set((clientY / innerHeight - 0.5) * 0.5);
  };

  const rotateX = useTransform(mouseY, [-0.25, 0.25], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.25, 0.25], [-5, 5]);

  // Auto-play carousel
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        paginate(1);
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [page, isDragging]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
        />

        {/* Dynamic Gradient Orbs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={cn(
                "absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full blur-[120px] bg-gradient-to-br",
                currentSlide.bgGradient,
              )}
            />
            <motion.div
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
              className={cn(
                "absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full blur-[120px] bg-gradient-to-tl",
                currentSlide.bgGradient,
              )}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Carousel Container */}
      <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8 py-20">
        <div className="max-w-7xl w-full mx-auto relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                rotateY: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, { offset, velocity }: PanInfo) => {
                setIsDragging(false);
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center cursor-grab active:cursor-grabbing"
              style={{ perspective: 1200 }}
            >
              {/* Left Content */}
              <motion.div
                className="flex flex-col gap-8 z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center rounded-full border border-border/50 bg-gradient-to-r from-background/80 to-background/50 px-4 py-2 text-sm backdrop-blur-xl w-fit shadow-lg"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex h-2 w-2 rounded-full bg-green-500 mr-2"
                  />
                  {currentSlide.badge}
                </motion.div>

                {/* Title */}
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
                  >
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                      {currentSlide.title}
                    </span>
                    <span
                      className={cn(
                        "block bg-clip-text text-transparent bg-gradient-to-r mt-2",
                        currentSlide.gradient,
                      )}
                    >
                      {currentSlide.subtitle}
                    </span>
                  </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed"
                >
                  {currentSlide.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={currentSlide.primaryBtn.href}
                      className={cn(
                        "group relative inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 overflow-hidden bg-gradient-to-r",
                        currentSlide.gradient,
                        `shadow-${currentSlide.gradient.split("-")[1]}-500/30 hover:shadow-${currentSlide.gradient.split("-")[1]}-500/40`,
                      )}
                    >
                      <span className="relative z-10 flex items-center">
                        {currentSlide.primaryBtn.text}
                        <currentSlide.primaryBtn.icon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={currentSlide.secondaryBtn.href}
                      className="inline-flex h-12 items-center justify-center rounded-full border-2 border-border/50 bg-background/50 backdrop-blur-xl px-8 text-sm font-semibold shadow-lg transition-all hover:bg-accent hover:border-foreground/20 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <currentSlide.secondaryBtn.icon className="mr-2 h-4 w-4" />
                      {currentSlide.secondaryBtn.text}
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Progress Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-3 items-center pt-4"
                >
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setPage([index, index > slideIndex ? 1 : -1])
                      }
                      className="group relative"
                    >
                      <div
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          index === slideIndex
                            ? "w-12 bg-gradient-to-r" +
                                " " +
                                currentSlide.gradient
                            : "w-8 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                        )}
                      />
                    </button>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.div
                  style={{ rotateX, rotateY, perspective: 1200 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Main Image Card */}
                  <motion.div
                    className="relative w-80 h-80 lg:w-96 lg:h-96 z-20 rounded-3xl border-2 border-white/20 shadow-2xl overflow-hidden backdrop-blur-sm"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Gradient overlay */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-10 z-10",
                        currentSlide.gradient,
                      )}
                    />

                    <Image
                      src={currentSlide.image}
                      alt="Professional Avatar"
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Animated border glow */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      animate={{
                        boxShadow: [
                          `0 0 20px ${currentSlide.gradient.includes("purple") ? "rgba(168, 85, 247, 0.3)" : "rgba(34, 211, 238, 0.3)"}`,
                          `0 0 60px ${currentSlide.gradient.includes("cyan") ? "rgba(34, 211, 238, 0.5)" : "rgba(168, 85, 247, 0.5)"}`,
                          `0 0 20px ${currentSlide.gradient.includes("purple") ? "rgba(168, 85, 247, 0.3)" : "rgba(34, 211, 238, 0.3)"}`,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Floating Icons */}
                  <motion.div
                    className="absolute top-10 -left-8 z-30"
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg backdrop-blur-sm",
                        currentSlide.gradient,
                      )}
                    >
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-20 -right-8 z-30"
                    animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg backdrop-blur-sm",
                        currentSlide.gradient,
                      )}
                    >
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Floating Orbs */}
                  <FloatingShape
                    className={cn(
                      "w-80 h-80 -top-20 -right-20 blur-[100px] bg-gradient-to-br",
                      currentSlide.bgGradient,
                    )}
                    delay={0}
                  />
                  <FloatingShape
                    className={cn(
                      "w-64 h-64 -bottom-10 -left-20 blur-[100px] bg-gradient-to-tl",
                      currentSlide.bgGradient,
                    )}
                    delay={2}
                  />

                  {/* Orbiting particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={cn(
                        "absolute w-3 h-3 rounded-full bg-gradient-to-r",
                        currentSlide.gradient,
                      )}
                      style={{ left: "50%", top: "50%" }}
                      animate={{
                        x: [0, Math.cos((i * Math.PI * 2) / 6) * 180, 0],
                        y: [0, Math.sin((i * Math.PI * 2) / 6) * 180, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-xl border-2 border-border/50 flex items-center justify-center shadow-lg hover:border-foreground/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-xl border-2 border-border/50 flex items-center justify-center shadow-lg hover:border-foreground/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
            Scroll to explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-border/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className={cn(
                "w-1 h-2 rounded-full bg-gradient-to-b",
                currentSlide.gradient,
              )}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
