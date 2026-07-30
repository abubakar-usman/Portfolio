import { Section } from "./Section";
import { TiltCard } from "./TiltCard";
import { skillGroups } from "@/lib/profile";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="A stack built for shipping"
      description="From type-safe product surfaces to database design, AI orchestration and security tooling."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <TiltCard key={group.title}>
            <div className="glass-panel group h-full rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {group.title}
              </h3>
              <div className="mt-4 h-px w-full" style={{ background: "var(--gradient-line)" }} />
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
