"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/profile";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const desktopLinks = links;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass-panel mx-4 md:mx-auto" : "bg-transparent",
          menuOpen && "rounded-b-none",
        )}
      >
        <a
          href="#top"
          aria-label="Go to the top of the page"
          onClick={closeMenu}
          className="font-display text-sm font-bold tracking-[0.22em] uppercase transition-colors hover:text-primary"
        >
          AU<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {desktopLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:bg-surface hover:text-foreground focus-visible:bg-surface focus-visible:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_0_28px_-6px_var(--primary)] focus-visible:bg-primary/20 md:inline-block"
        >
          Hire me
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 text-foreground shadow-sm transition-all duration-300 hover:border-primary/50 hover:text-primary focus-visible:border-primary/50 focus-visible:text-primary md:hidden"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <div
        id="mobile-nav-menu"
        className={cn(
          "fixed inset-x-0 top-0 z-40 pt-20 md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          aria-label="Close mobile menu backdrop"
          onClick={closeMenu}
          className={cn(
            "absolute inset-0 top-20 bg-background/60 backdrop-blur-sm transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          className={cn(
            "relative mx-4 max-h-[calc(100vh-6rem)] overflow-auto rounded-3xl border border-border/60 bg-background/95 p-3 shadow-2xl transition-all duration-300 ease-out",
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          )}
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground transition-all duration-300 hover:bg-surface hover:text-foreground focus-visible:bg-surface focus-visible:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href={`mailto:${profile.email}`}
                onClick={closeMenu}
                className="block rounded-2xl border border-primary/40 bg-primary/10 px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary/20 focus-visible:bg-primary/20"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}