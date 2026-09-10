import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
              Selected Work
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Products I&apos;ve designed &amp; built
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-muted">
              Live platforms spanning education, fintech, e-commerce, and
              career tech.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
