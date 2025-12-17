"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { User } from "lucide-react";

export function DashboardHeader() {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 backdrop-blur-md px-6">
            <h1 className="text-xl font-bold text-slate-800">Overview</h1>
            <div className="flex items-center gap-4">
                <ModeToggle />
                <div className="h-9 w-9 rounded-full bg-sky-100 flex items-center justify-center border border-sky-200">
                    <User className="h-5 w-5 text-blue-600" />
                </div>
            </div>
        </header>
    );
}
