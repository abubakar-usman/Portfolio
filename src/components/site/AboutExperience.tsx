import { Section } from "./Section";
import { experience, profile } from "@/lib/profile";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="Learning by building real software"
      description={profile.summary}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Product engineering",
            body: "Multi-tenant architectures with org-scoped isolation, RBAC and auth flows that survive production traffic.",
          },
          {
            title: "Applied AI",
            body: "LLM and voice pipelines with Gemini, OpenAI, Eleven Labs and Vapi wired into real user-facing features.",
          },
          {
            title: "Systems & security",
            body: "Data structures in C++, automata theory, malware detection and API threat scanning tooling.",
          },
        ].map((card) => (
          <article key={card.title} className="glass-panel rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="work"
      eyebrow="Experience & Education"
      title="Where the work happens"
    >
      <ol className="relative space-y-8 border-l border-border pl-8">
        {experience.map((item) => (
          <li key={`${item.role}-${item.company}`} className="relative">
            <span className="absolute -left-[41px] top-2 flex h-4 w-4 items-center justify-center rounded-full border border-primary/50 bg-background">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">
                  {item.role} <span className="text-primary">· {item.company}</span>
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-primary"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
