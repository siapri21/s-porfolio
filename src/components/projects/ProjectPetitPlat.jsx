import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../animations/Reveal";
import { projects } from "../../data/projects";

const project = projects.find((p) => p.id === "petitplat");

function AppPreview() {
  return (
    <div className="relative mx-auto w-[230px]">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-terracotta-soft/40 blur-2xl"
      />
      <motion.div
        className="relative overflow-hidden rounded-[2.2rem] border-[3px] border-ink/80 bg-ink p-2 shadow-[0_28px_60px_rgba(43,33,28,0.2)]"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35 }}
      >
        <div className="overflow-hidden rounded-[1.75rem] bg-[#fff8f0]">
          <div className="flex justify-center pt-2">
            <span className="h-4 w-20 rounded-full bg-ink/90" />
          </div>
          <div className="space-y-4 px-4 pb-6 pt-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta-deep">
                PetitPlat
              </p>
              <p className="mt-1 font-display text-xl leading-tight text-ink">
                Diversification,
                <br />
                en douceur.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-terracotta-soft to-terracotta p-4 text-cream">
              <p className="text-[10px] uppercase tracking-wider text-cream/70">
                Chatbot IA
              </p>
              <p className="mt-2 text-sm leading-snug">
                « Quelles textures à 6 mois ? »
              </p>
            </div>
            <div className="space-y-2">
              {["Repas du jour", "Recettes", "Suivi"].map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl bg-cream px-3 py-2.5 ring-1 ring-terracotta/15"
                >
                  <span className="text-xs text-ink">{label}</span>
                  <span className="text-terracotta">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectPetitPlat() {
  const reduce = useReducedMotion();

  return (
    <section id="petitplat" className="section-pad">
      <div className="site-shell">
        <motion.article
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[1.5rem] border border-terracotta/20 bg-[#fff8f0]"
        >
          <div className="grid items-center gap-10 px-7 py-12 md:px-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="text-xs tracking-[0.18em] text-ink-subtle">
                  {project.number}
                </span>
                <span className="rounded-full bg-terracotta-deep px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-cream">
                  En développement
                </span>
              </div>
              <h2 className="display text-4xl md:text-5xl">{project.title}</h2>
              <p className="mt-4 max-w-md text-ink-muted">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-terracotta/25 bg-cream px-3 py-1 text-xs text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-8 font-display text-xl text-terracotta-deep md:text-2xl">
                Chatbot IA au cœur de l&apos;expérience.
              </p>
            </Reveal>

            <AppPreview />
          </div>
        </motion.article>
      </div>
    </section>
  );
}
