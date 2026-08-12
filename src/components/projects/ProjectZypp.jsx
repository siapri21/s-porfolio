import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../animations/Reveal";
import Button from "../ui/Button";
import { projects } from "../../data/projects";

const project = projects.find((p) => p.id === "zypp");

export default function ProjectZypp() {
  const reduce = useReducedMotion();

  return (
    <section id="zypp" className="section-pad">
      <div className="site-shell">
        <motion.article
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[1.5rem] border border-terracotta/15 bg-[#fff8f0]"
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="order-2 flex flex-col justify-center px-7 py-10 md:px-10 md:py-14 lg:order-1">
              <Reveal>
                <p className="text-xs tracking-[0.18em] text-ink-subtle">
                  {project.number}
                </p>
                <h2 className="display mt-2 text-4xl md:text-5xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-ink-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-terracotta-deep px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cream">
                    Projet terminé
                  </span>
                  <span className="rounded-full border border-terracotta px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-terracotta-deep">
                    App mobile en cours
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-terracotta/25 bg-cream px-3 py-1 text-xs text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.liveUrl ? (
                  <div className="mt-8">
                    <Button
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                    >
                      Voir le projet
                    </Button>
                  </div>
                ) : null}
              </Reveal>
            </div>

            <div className="group relative order-1 min-h-[260px] overflow-hidden md:min-h-[380px] lg:order-2">
              <img
                src={project.image}
                alt={`Capture d'écran ${project.title}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
