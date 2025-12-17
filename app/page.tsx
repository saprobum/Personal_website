import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SkillsMarquee } from "@/components/skills-marquee";
import { ProjectGrid } from "@/components/project-grid";
import { ExperienceTimeline } from "@/components/experience-timeline";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <ProjectGrid />
      <ExperienceTimeline />

      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="container px-4">
          <p>© {new Date().getFullYear()} Antigravity Portfolio. Built with Next.js & Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}
