import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SkillsMarquee } from "@/components/skills-marquee";
import { ProjectGrid } from "@/components/project-grid";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <ProjectGrid />
      <ExperienceTimeline />
      <Footer />
    </main>
  );
}
