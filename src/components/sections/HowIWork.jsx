import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../animations/Reveal";
import { howIWork } from "../../data/sailingloc";

export default function HowIWork() {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      className="section-pad overflow-hidden border-y border-terracotta/10"
      style={{
        background:
          "linear-gradient(180deg, #faf3ea 0%, #f6ebe0 50%, #faf3ea 100%)",
      }}
    >
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow mb-3">Méthode</p>
          <h2 className="display max-w-xl text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08]">
            Comment je{" "}
            <span className="text-terracotta-deep">travaille</span>.
          </h2>
          <p className="mt-4 max-w-md text-sm text-ink-muted md:text-base">
            Une méthode simple, visible dans chaque projet, surtout quand les
            choses deviennent complexes.
          </p>
        </Reveal>

        <ol className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {howIWork.map((step, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.li
                key={step.n}
                initial={
                  reduce ? false : { opacity: 0, x: fromLeft ? -28 : 28, y: 10 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduce ? undefined : { y: -2, scale: 1.01 }}
                className={`grid grid-cols-[auto_1fr] overflow-hidden rounded-2xl border border-terracotta/20 bg-[#fff8f0] ${
                  fromLeft ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="flex items-center bg-terracotta-soft/40 px-4 py-4 md:px-5">
                  <span className="display text-3xl text-terracotta-deep md:text-4xl">
                    {step.n}
                  </span>
                </div>
                <div className="px-4 py-4 md:px-6 md:py-5">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="display text-xl md:text-2xl">{step.title}</h3>
                    {i < howIWork.length - 1 ? (
                      <span className="text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                        → {howIWork[i + 1].title}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 text-sm text-ink-muted">{step.text}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center font-display text-base text-terracotta-deep md:text-lg">
            {howIWork.map((s, i) => (
              <span key={s.n}>
                {s.title}
                {i < howIWork.length - 1 ? (
                  <span className="mx-1.5 text-terracotta/40">→</span>
                ) : null}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
