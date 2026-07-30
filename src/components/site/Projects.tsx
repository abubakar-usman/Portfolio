import { Section } from "./Section";
import { TiltCard } from "./TiltCard";
import { projects } from "@/lib/profile";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Products, platforms and engines"
      description="Full-stack SaaS, live AI tooling and systems-level engineering — each shipped end to end."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <TiltCard key={project.name} intensity={6}>
            <article className="glass-panel group relative h-full overflow-hidden rounded-2xl p-7 transition-colors duration-300 hover:border-primary/40">
              <span
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold">{project.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{project.tagline}</p>

              <ul className="mt-4 space-y-2.5">
                {project.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-300 hover:translate-x-1"
                >
                  Visit live site
                  <span aria-hidden>→</span>
                </a>
              ) : null}
            </article>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
