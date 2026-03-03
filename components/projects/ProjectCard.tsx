import { Project } from "@/types";
import { Github, ExternalLink } from "lucide-react";
import Tag from "@/components/ui/Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border border-[var(--border)] rounded-xl p-5 space-y-3 hover:border-[var(--muted)] hover:shadow-sm transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-base group-hover:text-[var(--muted)] transition-colors">
          {project.title}
        </h3>
        <span className="text-xs text-[var(--muted)] shrink-0">{project.year}</span>
      </div>
      <p className="text-sm text-[var(--muted)] leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      <div className="flex gap-3 pt-1">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
          >
            <Github size={14} /> Source
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </article>
  );
}
