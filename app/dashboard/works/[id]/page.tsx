import { ProjectDetailView } from "@/components/dashboard/views/project-detail-view";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return notFound();
    }

    return <ProjectDetailView project={project} />;
}
