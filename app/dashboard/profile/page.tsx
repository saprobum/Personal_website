import { User, Mail, MapPin, Link as LinkIcon, Edit3 } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">

            {/* Header Cover & Avatar */}
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="h-48 w-full bg-gradient-to-r from-blue-600 to-sky-400"></div>
                <div className="px-8 pb-8">
                    <div className="relative -mt-16 mb-4">
                        <div className="h-32 w-32 rounded-full border-4 border-white bg-slate-100 shadow-md overflow-hidden relative">
                            {/* Avatar Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-slate-400">
                                JD
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">John Doe</h1>
                            <p className="text-slate-500 font-medium">Senior Software Engineer</p>
                            <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">
                                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> San Francisco, CA</span>
                                <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> john.doe@example.com</span>
                                <span className="flex items-center gap-1"><LinkIcon className="h-4 w-4" /> johndoe.dev</span>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm">
                            <Edit3 className="h-4 w-4" />
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* About Section */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">About</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Passionate developer with over 5 years of experience in building scalable web applications.
                            Specialized in React, Next.js, and modern CSS frameworks. Driven by a desire to create
                            intuitive user experiences and performant code.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Experience</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-lg bg-sky-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <BriefcaseIcon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Senior Frontend Engineer</h3>
                                    <p className="text-sm text-slate-500">TechNova Inc. • 2021 - Present</p>
                                    <p className="mt-2 text-sm text-slate-600">Leading the core product team migration to Next.js.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-lg bg-sky-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <BriefcaseIcon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Frontend Developer</h3>
                                    <p className="text-sm text-slate-500">WebFlow Studios • 2018 - 2021</p>
                                    <p className="mt-2 text-sm text-slate-600">Built marketing sites for Fortune 500 clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "GraphQL"].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-sky-50 text-blue-700 rounded-full text-xs font-medium border border-sky-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BriefcaseIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}
