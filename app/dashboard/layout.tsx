import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-white text-slate-900 overflow-hidden" data-theme="light">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50">
                <DashboardHeader />
                <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
                    {children}
                </main>
            </div>
        </div>
    );
}
