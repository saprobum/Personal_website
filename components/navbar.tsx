"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Dashboard", href: "/dashboard" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <div
                className={cn(
                    "flex w-full max-w-5xl items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md border border-border/40 shadow-lg"
                        : "bg-transparent border border-transparent"
                )}
            >
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                        Antigravity
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <ModeToggle />
                </div>
            </div>
        </motion.header>
    );
}
