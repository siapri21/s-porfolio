import { Link } from "react-router-dom";
import { useEffect } from "react";
import Reveal from "../animations/Reveal";
import Button from "../ui/Button";
import { sailingloc } from "../../data/sailingloc";

function Block({ children, className = "" }) {
  return <div className={`py-10 md:py-14 ${className}`}>{children}</div>;
}

export default function SailingLocCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="pb-20 pt-24 md:pt-28">
      <div className="site-shell">
        <Reveal>
          <Link
            to="/#projets"
            className="text-sm text-ink-subtle transition-colors hover:text-terracotta-deep"
            data-cursor="interactive"
          >
            ← Retour aux projets
          </Link>
        </Reveal>

        <header className="mt-8">
          <Reveal>
            <p className="eyebrow mb-4">{sailingloc.badge}</p>
            <h1 className="display text-[clamp(2.8rem,7vw,5rem)] leading-none">
              {sailingloc.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink-muted md:text-xl">
              {sailingloc.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <p>
                <span className="text-ink-subtle">Rôle : </span>
                {sailingloc.role}
              </p>
              <p>
                <span className="text-ink-subtle">Stack : </span>
                {sailingloc.stack}
              </p>
            </div>
            <p className="mt-3 max-w-2xl text-sm text-ink-subtle">
              {sailingloc.teamNote}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-[1.5rem] border border-ink/10">
            <img
              src="/img/sailingloc.png"
              alt="Capture d'écran de la homepage SailingLoc"
              className="aspect-[16/9] w-full object-cover object-top md:aspect-[21/9]"
              loading="lazy"
            />
          </Reveal>
        </header>

        <Block>
          <Reveal>
            <h2 className="display mb-4 text-3xl md:text-4xl">Le produit.</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
              {sailingloc.overview}
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sailingloc.features.map((f, i) => (
              <Reveal key={f} delay={Math.min(i * 0.03, 0.25)}>
                <li className="rounded-xl border border-terracotta/20 bg-[#fff8f0] px-4 py-3 text-sm text-ink-muted">
                  {f}
                </li>
              </Reveal>
            ))}
          </ul>
        </Block>

        <Block className="rounded-[1.75rem] bg-terracotta-deep px-6 text-cream md:px-10">
          <Reveal>
            <h2 className="display mb-8 text-3xl">En chiffres.</h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {sailingloc.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06}>
                <p className="display text-4xl md:text-5xl">{m.value}</p>
                <p className="mt-2 text-sm text-cream/70">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </Block>

        <Block>
          <Reveal>
            <p className="eyebrow mb-3">Culture du test</p>
            <h2 className="display mb-4 text-3xl md:text-4xl">
              {sailingloc.testing.headline}
            </h2>
            <p className="mb-5 max-w-xl text-ink-muted">
              Les parcours critiques ont été testés :
            </p>
            <ul className="mb-6 flex flex-wrap gap-2">
              {sailingloc.testing.journeys.map((j) => (
                <li
                  key={j}
                  className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink-muted"
                >
                  {j}
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-muted">{sailingloc.testing.unit}</p>
            <p className="mt-2 text-sm text-ink-subtle">
              {sailingloc.testing.coverage}
            </p>
          </Reveal>
        </Block>

        <Block className="rounded-[1.75rem] bg-[#f3e6d8]/70 px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-3">Sécurité</p>
            <h2 className="display mb-4 max-w-2xl text-3xl md:text-4xl">
              {sailingloc.security.intro}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {sailingloc.security.items.map((item, i) => (
              <Reveal key={item} delay={i * 0.03}>
                <p className="border-l-2 border-terracotta pl-4 text-sm text-ink-muted">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </Block>

        <Block>
          <Reveal>
            <h2 className="display mb-5 text-3xl">
              {sailingloc.loadTesting.title}
            </h2>
            <ul className="mb-8 max-w-2xl space-y-2 text-ink-muted">
              {sailingloc.loadTesting.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="font-display text-xl text-terracotta-deep md:text-2xl">
              {sailingloc.loadTesting.loop.join(" → ")}
            </p>
          </Reveal>
        </Block>

        <Block className="border-y border-ink/10">
          <Reveal>
            <h2 className="display mb-6 text-3xl md:text-4xl">
              Quand ça casse.
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {sailingloc.incidents.map((inc, i) => (
              <Reveal key={inc.title} delay={i * 0.07}>
                <article className="h-full rounded-2xl border border-ink/10 bg-[#fff8f0] p-6">
                  <h3 className="display text-2xl">{inc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {inc.problem}
                  </p>
                  <p className="mt-3 text-sm text-terracotta-deep">
                    {inc.solution}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Block>

        <Block>
          <Reveal>
            <p className="eyebrow mb-3">SEO</p>
            <p className="display text-5xl text-terracotta-deep md:text-6xl">
              {sailingloc.seo.score}
            </p>
            <p className="mt-2 text-sm text-ink-muted">Lighthouse SEO</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {sailingloc.seo.items.map((item) => (
                <li key={item} className="text-sm text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Block>

        <Block className="border-t border-ink/10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="eyebrow mb-3">Mon rôle</p>
              <h2 className="display text-3xl md:text-4xl">
                {sailingloc.role}
              </h2>
              <p className="mt-4 text-ink-muted">
                Projet réalisé dans une équipe de 3 personnes. La crédibilité
                passe aussi par ce qu&apos;on ne s&apos;attribue pas.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="columns-1 gap-x-8 sm:columns-2">
                {sailingloc.roleDetails.map((r) => (
                  <li
                    key={r}
                    className="mb-2 break-inside-avoid text-sm text-ink-muted"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="mt-10 flex flex-wrap gap-4">
            <Button
              href={sailingloc.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le projet
            </Button>
            <Button
              href={sailingloc.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Voir le code
            </Button>
          </Reveal>
        </Block>
      </div>
    </article>
  );
}
