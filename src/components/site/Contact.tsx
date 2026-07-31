import { Section } from "./Section";
import { profile } from "@/lib/profile";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "WhatsApp / Call", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { label: "LinkedIn", value: "abubakar-usman", href: profile.linkedin },
  { label: "GitHub", value: "abubakar-usman", href: profile.github },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something that ships"
      description="Open to internships, freelance builds and collaboration on SaaS or AI products."
    >
      <div className="glass-panel relative overflow-hidden rounded-3xl p-8 md:p-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold leading-snug md:text-3xl">
              Based in {profile.location}. Working with teams anywhere.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group relative mt-7 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-float)" }}
            >
              <span
                className="animate-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-primary"
                aria-hidden
              />
              <span className="relative">Start a conversation</span>
            </a>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block rounded-xl border border-border bg-surface px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-strong"
                >
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    {channel.label}
                  </span>
                  <span className="mt-1 block truncate text-sm">{channel.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Abubakar Usman. All rights reserved.</p>
        <p className="font-mono uppercase tracking-[0.2em]">Built with Next-level attention</p>
      </footer>
    </Section>
  );
}
