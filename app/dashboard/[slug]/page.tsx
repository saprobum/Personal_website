import { ProfileView } from "@/components/dashboard/views/profile-view";
import { WorksView } from "@/components/dashboard/views/works-view";
import { SettingsView } from "@/components/dashboard/views/settings-view";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return [
        { slug: "profile" },
        { slug: "settings" },
    ];
}

export default async function DashboardDynamicPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    switch (slug) {
        case "profile":
            return <ProfileView />;
        case "settings":
            return <SettingsView />;
        default:
            return notFound();
    }
}
