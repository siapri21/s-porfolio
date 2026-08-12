import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 pb-10 pt-16">
      <div className="site-shell relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="display text-2xl md:text-3xl">{site.brandMark}</p>
          <p className="mt-2 text-sm text-ink-muted">{site.role}</p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="text-ink-muted hover:text-terracotta-deep"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="text-ink-muted hover:text-terracotta-deep"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              data-cursor="interactive"
              className="text-ink-muted hover:text-terracotta-deep"
            >
              Email
            </a>
          </div>
        </div>
        <p className="text-xs tracking-wide text-ink-subtle">© {site.year}</p>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none truncate px-[var(--space-gutter)] text-[clamp(3rem,12vw,8rem)] leading-none text-ink/[0.04] font-display"
      >
        {site.brandMark}
      </p>
    </footer>
  );
}
