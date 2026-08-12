import Reveal from "../animations/Reveal";
import { site } from "../../data/site";

const focus = [
  { n: "01", label: "Conception produit" },
  { n: "02", label: "Équipe & projet" },
  { n: "03", label: "Qualité & tests" },
  { n: "04", label: "Livraison & diagnostic" },
];

const stack = [
  "React",
  "Angular",
  "TypeScript",
  "Node.js",
  "Flutter",
  "React Native",
];

export default function About() {
  return (
    <section id="about" className="section-pad overflow-hidden">
      <div className="site-shell relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[15%] top-10 h-[22rem] w-[22rem] rounded-full bg-terracotta-soft/35 blur-3xl"
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">À propos</p>
              <h2 className="display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.08]">
                Un peu{" "}
                <span className="relative inline-block text-terracotta-deep">
                  sur moi
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 -z-10 h-[0.35em] w-full rounded-full bg-terracotta-soft/70"
                  />
                </span>
                .
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
                <p>
                  Je suis développeuse{" "}
                  <span className="font-medium text-ink">
                    Full-Stack & Mobile
                  </span>
                  , diplômée{" "}
                  <span className="font-medium text-ink">{site.diploma}</span>.
                  Ce qui m&apos;intéresse, ce n&apos;est pas seulement
                  d&apos;écrire du code : c&apos;est de transformer une
                  intention en produit utilisable.
                </p>
                <p>
                  En équipe, j&apos;aime cadrer, prioriser, et garder le fil
                  entre design, technique et livraison.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-terracotta-soft/45 px-4 py-2 text-xs font-medium tracking-wide text-terracotta-deep ring-1 ring-terracotta/25"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="relative mt-10 overflow-hidden rounded-[1.5rem] border border-terracotta/25 bg-[#fff8f0] px-7 py-8 md:px-9">
                <p className="font-display text-xl leading-snug text-ink md:text-2xl">
                  Je construis avec méthode : comprendre d&apos;abord, livrer
                  ensuite, et ne jamais laisser la qualité au hasard.
                </p>
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="relative flex flex-col justify-end">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-terracotta/20 bg-[#fff8f0] p-7 shadow-[0_20px_50px_rgba(43,33,28,0.05)] md:p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-terracotta-deep">
                Ma façon de travailler
              </p>
              <ul className="space-y-5">
                {focus.map((item) => (
                  <li
                    key={item.n}
                    className="flex items-baseline gap-4 border-b border-terracotta/15 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="font-display text-2xl text-terracotta">
                      {item.n}
                    </span>
                    <span className="text-sm text-ink md:text-base">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
