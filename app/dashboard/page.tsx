import Link from "next/link";
import { Activity, CreditCard, DollarSign, Users, ArrowUpRight } from "lucide-react";

// Placeholder Card Component since I don't have the shadcn card initialized yet
function DashboardCard({ title, value, description, icon: Icon, trend, color }: any) {
    return (
        <div className={`rounded-xl border ${color || 'bg-white border-slate-200'} text-white shadow-sm p-6 hover:shadow-md transition-shadow`}>
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium text-white/80">{title}</h3>
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <Icon className="h-4 w-4 text-white" />
                </div>
            </div>
            <div className="pt-4">
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="flex items-center gap-1 mt-1">
                    <span className="text-white flex items-center text-xs font-bold bg-white/20 px-1.5 py-0.5 rounded-full">
                        <ArrowUpRight className="h-3 w-3 mr-0.5" />
                        {trend}
                    </span>
                    <p className="text-xs text-white/70">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default function DashboardPage() {
    return (
        <div className="space-y-8">

            {/* Profile Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Profile Overview</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <DashboardCard
                        title="Total Views"
                        value="45,231"
                        trend="+20.1%"
                        description="from last month"
                        icon={Activity}
                        color="bg-[radial-gradient(ellipse_at_top_left,#60a5fa,#1d4ed8)] border-none"
                    />
                    <DashboardCard
                        title="Active Projects"
                        value="12"
                        trend="+2"
                        description="Launching soon"
                        icon={CreditCard}
                        color="bg-[radial-gradient(ellipse_at_top_left,#38bdf8,#0369a1)] border-none"
                    />
                    <DashboardCard
                        title="New Clients"
                        value="573"
                        trend="+201"
                        description="since last hour"
                        icon={Users}
                        color="bg-[radial-gradient(ellipse_at_top_left,#818cf8,#4338ca)] border-none"
                    />
                    <DashboardCard
                        title="Revenue"
                        value="$12,234"
                        trend="+19%"
                        description="from last month"
                        icon={DollarSign}
                        color="bg-[radial-gradient(ellipse_at_top_left,#22d3ee,#0e7490)] border-none"
                    />
                </div>
            </section>

            {/* Demo Projects Section */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Recent Projects</h2>
                    <Link href="/dashboard/works" className="text-sm font-medium text-blue-600 hover:text-blue-700">View all</Link>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="h-40 w-full bg-slate-100 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                {/* Placeholder Project Gradients */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${i === 1 ? 'from-blue-400/20 to-sky-300/20' :
                                    i === 2 ? 'from-purple-400/20 to-blue-300/20' :
                                        'from-emerald-400/20 to-teal-300/20'
                                    }`}></div>
                            </div>
                            <div className="flex flex-col p-5">
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Project Gravity {i}</h3>
                                <p className="text-slate-500 text-sm mt-1">Physics simulation dashboard with real-time data analysis.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                                        In Progress
                                    </span>
                                    <span className="text-xs text-slate-400">Edited 2h ago</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
