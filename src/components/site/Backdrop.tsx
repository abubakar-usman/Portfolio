/**
 * Ambient 3D backdrop: aurora blooms, a perspective grid floor and orbiting
 * rings. Purely decorative — hidden from assistive tech.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="animate-aurora absolute -left-32 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-primary/20 blur-[120px]" />
      <div
        className="animate-aurora absolute -right-24 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[130px]"
        style={{ animationDelay: "-6s" }}
      />

      {/* Perspective grid floor */}
      <div className="scene-3d absolute inset-x-0 bottom-0 h-[55vh]">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            transform: "rotateX(74deg)",
            transformOrigin: "50% 100%",
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--primary) 55%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--primary) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to top, black, transparent 78%)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent 78%)",
          }}
        />
      </div>

      {/* Orbiting rings */}
      <div className="scene-3d absolute right-[8%] top-[18%] hidden h-80 w-80 lg:block">
        <div className="animate-orbit absolute inset-0 rounded-full border border-primary/25" />
        <div
          className="animate-orbit absolute inset-8 rounded-full border border-accent/25"
          style={{ animationDirection: "reverse", animationDuration: "30s" }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,transparent,var(--background)_88%)]" />
    </div>
  );
}
