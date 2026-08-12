import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { sailingloc } from "../../data/sailingloc";

export default function SailingLocFeatured() {
  const reduce = useReducedMotion();

  return (
    <section id="sailingloc" className="pb-10 pt-4 md:pb-14">
      <div className="site-shell">
        <motion.article
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[1.5rem] border border-terracotta/15 bg-[#fff8f0] shadow-[0_16px_40px_rgba(43,33,28,0.06)]"
        >
          <div className="border-b border-ink/8 bg-[#f3e6d8]/50 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e8b4a0]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#c97d5d]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8c4a32]/50" />
              <span className="ml-3 truncate rounded-full bg-cream/80 px-3 py-1 text-[11px] text-ink-subtle">
                dsp-dev-o24a-g4.cloud
              </span>
            </div>
          </div>

          <Link
            to="/projets/sailingloc"
            data-cursor="interactive"
            className="group block overflow-hidden"
          >
            <img
              src="/img/sailingloc.png"
              alt="Capture d'écran de la homepage SailingLoc"
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025] md:aspect-[21/10]"
              loading="lazy"
            />
          </Link>

          <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.4fr_auto] md:items-end md:px-9 md:py-9">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-terracotta-deep px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-cream">
                  Projet phare
                </span>
                <span className="text-xs tracking-[0.16em] text-ink-subtle">
                  01
                </span>
              </div>
              <h3 className="display text-3xl text-ink md:text-4xl">
                {sailingloc.title}
              </h3>
              <p className="mt-2 max-w-lg text-sm text-ink-muted md:text-base">
                {sailingloc.subtitle}
              </p>
              <p className="mt-3 text-sm text-ink-subtle">
                {sailingloc.role}
                <span className="mx-2 text-ink/20">·</span>
                {sailingloc.stack}
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8 md:flex-col md:items-end">
              <div className="flex gap-6">
                <div>
                  <p className="display text-2xl text-terracotta-deep">32/32</p>
                  <p className="text-[11px] text-ink-subtle">Tests E2E</p>
                </div>
                <div>
                  <p className="display text-2xl text-terracotta-deep">100</p>
                  <p className="text-[11px] text-ink-subtle">SEO</p>
                </div>
              </div>
              <Link
                to="/projets/sailingloc"
                data-cursor="interactive"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta-deep px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-ink"
              >
                Voir l&apos;étude de cas
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
