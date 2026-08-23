"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/profile";

const navLinks = [
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "py-3" : "py-6")}>
      <nav className={cn(
        "mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-2.5 transition-all duration-500",
        scrolled ? "glass-panel mx-4 border border-white/10 bg-background/60 backdrop-blur-md md:mx-auto" : "bg-transparent"
      )}>
        {/* Logo */}
        <a href="#top" className="font-display text-lg font-bold tracking-tighter transition-colors hover:text-primary">
          AU<span className="text-primary">.</span>
        </a>

        {/* Desktop Links (All 6 added here) */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105 active:scale-95 sm:inline-block"
          >
            Hire Me
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-4 top-20 z-40 rounded-3xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-surface"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2 border-border" />
              <a
                href={`mailto:${profile.email}`}
                className="w-full rounded-2xl bg-primary py-4 text-center font-bold text-primary-foreground"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 