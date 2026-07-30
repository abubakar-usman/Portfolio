"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "scene-3d relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 md:py-28",
        "reveal",
        visible && "reveal-in",
        className,
      )}
    >
      <div className="mb-12 max-w-2xl">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-primary">
          <span className="h-px w-8 bg-primary/60" />
          {eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}