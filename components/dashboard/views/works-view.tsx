import { ArrowUpRight, Github, ExternalLink, Filter } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function WorksView() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">My Works</h1>
                    <p className="text-slate-500">Showcase of featured projects and experiments.</p>
                </div>

                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                        <Filter className="h-4 w-4" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 border border-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
                        <Github className="h-4 w-4" />
                        View on GitHub
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((work) => (
                    <Link
                        href={`/dashboard/works/${work.id}`}
                        key={work.id}
                        className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className={`h-48 w-full ${work.image} relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                                    <ExternalLink className="h-4 w-4" />
                                </span>
                            </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <span className="inline-block px-2 py-1 bg-sky-50 text-blue-600 text-xs font-semibold rounded-full border border-sky-100 mb-2">
                                        {work.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {work.title}
                                    </h3>
                                </div>
                                <Link href="#" className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </div>

                            <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
                                {work.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                                <span>Updated 2 days ago</span>
                                <span>v1.0.2</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
