"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    User,
    Briefcase,
    Settings,
    ChevronLeft,
    ChevronRight,
    LogOut
} from "lucide-react";

const sidebarItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Works", href: "/dashboard/works", icon: Briefcase },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
    const [collapsed, setCollapsed] = React.useState(false);
    const pathname = usePathname();

    return (
        <div
            className={cn(
                "relative flex flex-col h-screen border-r border-slate-200 bg-white shadow-sm transition-all duration-300 z-20",
                collapsed ? "w-16" : "w-64"
            )}
        >
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
                {!collapsed && (
                    <span className="text-xl font-bold text-blue-600 tracking-tight truncate">
                        AG Dashboard
                    </span>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1.5 rounded-md hover:bg-sky-50 text-blue-600 transition-colors"
                >
                    {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                </button>
            </div>

            <nav className="flex-1 p-3 space-y-1 mt-4">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-sky-100 text-blue-700 shadow-sm"
                                    : "text-slate-500 hover:bg-sky-50 hover:text-blue-600",
                                collapsed ? "justify-center" : ""
                            )}
                        >
                            <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-500")} />
                            {!collapsed && <span>{item.name}</span>}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-3 border-t border-slate-100">
                <Link
                    href="/"
                    className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600",
                        collapsed ? "justify-center" : ""
                    )}
                >
                    <LogOut className="h-5 w-5 flex-shrink-0" />
                    {!collapsed && <span>Exit Dashboard</span>}
                </Link>
            </div>
        </div>
    );
}
