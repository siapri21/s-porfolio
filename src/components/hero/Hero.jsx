import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";
import OrganicScene from "./OrganicScene";
import { site } from "../../data/site";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28"
    >
      <OrganicScene />

      <div className="site-shell relative z-10 flex min-h-[calc(100svh-6rem)] flex-col justify-center pb-24">
        <motion.h1
          className="display text-[clamp(2.4rem,6vw,4.25rem)] leading-[1.05]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          {site.name}
        </motion.h1>

        <motion.p
          className="display mt-5 max-w-3xl text-[clamp(1.65rem,4.2vw,3rem)] leading-[1.15] text-ink-muted"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          Je transforme des idées en expériences numériques.
        </motion.p>

        <motion.p
          className="mt-5 font-sans text-sm uppercase tracking-[0.2em] text-terracotta-deep md:text-base"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {site.role}
        </motion.p>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
        >
          Développeuse full-stack et mobile, je conçois et développe des
          expériences web et mobiles modernes, de l&apos;idée au déploiement.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
        >
          <Button href="#projets">Voir mes projets</Button>
          <Button href="#contact" variant="secondary">
            Me contacter
          </Button>
        </motion.div>

        <motion.div
          className="mt-10 flex gap-5 text-sm text-ink-subtle"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            className="hover:text-terracotta-deep"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            className="hover:text-terracotta-deep"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor="interactive"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink-subtle"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Découvrir
        <motion.span
          aria-hidden="true"
          className="block h-8 w-px bg-terracotta"
          animate={reduce ? undefined : { scaleY: [0.4, 1, 0.4], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
