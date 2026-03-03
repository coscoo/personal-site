import { projects } from "@/data/projects";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 animate-[fadeIn_0.4s_ease-in-out]">
      <SectionHeader
        title="Projects"
        subtitle="Things I've built, shipped, and broken."
      />
      <ProjectGrid projects={sorted} />
    </div>
  );
}
