"use client";

import { useCallback, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees. */
  intensity?: number;
  /** Lift toward the viewer on hover, in px. */
  lift?: number;
};

/**
 * Pointer-reactive 3D tilt surface built on CSS transforms.
 * No-ops for touch/coarse pointers and for reduced-motion users.
 */
export function TiltCard({ children, className, intensity = 8, lift = 14 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);

  const allowMotion = useCallback(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return (
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const handleMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node || !allowMotion()) return;

      const rect = node.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        node.style.transform = `perspective(900px) rotateX(${(-py * intensity).toFixed(2)}deg) rotateY(${(px * intensity).toFixed(2)}deg) translateZ(${lift}px)`;
      });
    },
    [allowMotion, intensity, lift],
  );

  const reset = useCallback(() => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    const node = ref.current;
    if (node) node.style.transform = "";
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onBlur={reset}
      className={cn("tilt-card", className)}
    >
      {children}
    </div>
  );
}