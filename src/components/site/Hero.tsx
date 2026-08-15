"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { marqueeSkills, profile } from "@/lib/profile";

const portraitSrc = "/logo.png";

const floatingChips: { label: string; position: React.CSSProperties; delay: string }[] = [
  { label: "Next.js 14", position: { left: "-8%", top: "16%" }, delay: "-1.5s" },
  { label: "Gemini AI", position: { right: "-6%", top: "26%" }, delay: "-3.5s" },
  { label: "PostgreSQL", position: { left: "-4%", bottom: "24%" }, delay: "-5s" },
  { label: "Multi-tenant SaaS", position: { right: "-10%", bottom: "14%" }, delay: "-2.4s" },
];

export function Hero() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);

  const handlePointer = useCallback((event: PointerEvent) => {
    const node = stageRef.current;
    if (!node) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      node.style.setProperty("--mx", x.toFixed(3));
      node.style.setProperty("--my", y.toFixed(3));
    });
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointer);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [handlePointer]);

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="scene-3d mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="preserve-3d">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for work · {profile.location}
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,4.75rem)] font-bold leading-[0.98] tracking-tight">
            <span className="block">Abubakar</span>
            <span className="text-gradient block">Usman</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.role} — building multi-tenant SaaS, live AI products and security tooling
            that ship to real users.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-float)" }}
            >
              <span className="relative z-10">View my work</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-surface-strong"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-5 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-primary">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 3D portrait stage */}
        <div
          ref={stageRef}
          className="scene-3d relative mx-auto w-full max-w-md"
          style={{ ["--mx" as string]: 0, ["--my" as string]: 0 }}
        >
          <div
            className="preserve-3d relative"
            style={{
              transform:
                "rotateY(calc(var(--mx) * 16deg)) rotateX(calc(var(--my) * -12deg)) translateZ(0)",
              transition: "transform 0.35s var(--ease-out-soft)",
            }}
          >
            <div className="animate-spin-slow absolute inset-x-6 top-8 aspect-square rounded-full border border-dashed border-primary/25" />
            <div
              className="absolute inset-x-2 bottom-0 top-10 rounded-[2.5rem] bg-gradient-to-b from-primary/25 to-accent/10 blur-2xl"
              aria-hidden
            />

            <div
              className="glass-panel relative overflow-hidden rounded-[2rem]"
              style={{ transform: "translateZ(40px)" }}
            >
              <Image
                src={portraitSrc}
                width={1024}
                height={1280}
                alt="Portrait of Abubakar Usman, full-stack SaaS developer"
                className="relative z-10 w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-background via-background/70 to-transparent p-6 pt-16">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
                  NUTECH · BSCS 2024–2028
                </p>
                <p className="mt-1 font-display text-lg font-semibold">
                  Full-Stack &amp; AI Engineering
                </p>
              </div>
            </div>

            {floatingChips.map((chip) => (
              <span
                key={chip.label}
                className="animate-float glass-panel absolute z-30 hidden rounded-full px-4 py-2 font-mono text-xs whitespace-nowrap text-foreground/90 md:inline-flex"
                style={{
                  ...chip.position,
                  transform: "translateZ(90px)",
                  animationDelay: chip.delay,
                }}
              >
                {chip.label}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-20 overflow-hidden border-y border-border/70 py-4">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground"
            >
              {skill}
              <span className="ml-10 text-primary">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}