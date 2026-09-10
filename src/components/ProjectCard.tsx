import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-medium uppercase tracking-wide text-accent-light">
            {project.tag}
          </span>
          <h3 className="mt-1.5 text-lg font-semibold text-foreground">
            {project.name}
          </h3>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.features.map((feature) => (
          <span
            key={feature}
            className="rounded-full border border-border bg-surface-2/60 px-3 py-1 text-xs text-muted"
          >
            {feature}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-light">
        Visit Site
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  );
}
