import { profile } from "@/lib/profile";

const footerLinks = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export function Footer() {
    return (
        <footer className="mt-24 border-t border-border/40 bg-surface/30 pt-12 pb-8 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-6">

                {/* Main 3-Column Grid */}
                <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3">

                    {/* Column 1: Brand - Reduced gap from 4 to 2 */}
                    <div className="flex flex-col gap-2">
                        <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                            AU<span className="text-primary">.</span>
                        </h4>
                        <p className="max-w-[260px] text-sm leading-tight text-muted-foreground">
                            Full-Stack Developer specializing in SaaS and AI Engineering.
                        </p>
                    </div>

                    {/* Column 2: Navigation - All links in one line with tight gap */}
                    <div className="flex flex-col gap-2">
                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                            Navigation
                        </h4>
                        <nav className="flex flex-wrap items-center gap-x-4">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Contact - Reduced gap and right aligned */}
                    <div className="flex flex-col gap-2 md:items-end">
                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                            Available for new projects
                        </h4>
                        <a
                            href={`mailto:${profile.email}`}
                            className="text-sm font-semibold text-foreground transition-colors hover:text-primary md:text-right"
                        >
                            {profile.email}
                        </a>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-12 flex items-center justify-between border-t border-border/20 ">
                    <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
                        © {new Date().getFullYear()} Abubakar Usman. Built with Next-level attention.
                    </p>
                    <div className="h-1 w-1 rounded-full bg-primary" />
                </div>

            </div>
        </footer>
    );
}