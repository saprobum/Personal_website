import { ArrowLeft, ExternalLink, Github, Calendar, User, Code2 } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/projects";

export function ProjectDetailView({ project }: { project: Project }) {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Link
                href="/dashboard/works"
                className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
            >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Works
            </Link>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className={`h-64 md:h-80 w-full ${project.image} relative`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30 mb-3">
                            {project.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
                        <p className="text-slate-200 mt-2 text-lg">{project.description}</p>
                    </div>
                </div>

                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">Overview</h2>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {project.longDescription}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">Technologies</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium border border-slate-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 space-y-4">
                                <div className="flex items-start gap-3">
                                    <User className="h-5 w-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-medium text-slate-400">Client</div>
                                        <div className="font-semibold text-slate-900">{project.client}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Code2 className="h-5 w-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-medium text-slate-400">My Role</div>
                                        <div className="font-semibold text-slate-900">{project.role}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-medium text-slate-400">Timeline</div>
                                        <div className="font-semibold text-slate-900">{project.timeline}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button className="flex w-full items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                                    <ExternalLink className="h-4 w-4" />
                                    Visit Live Site
                                </button>
                                <button className="flex w-full items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors">
                                    <Github className="h-4 w-4" />
                                    View Source Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
