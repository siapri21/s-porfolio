import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "../animations/Reveal";
import { toolbox } from "../../data/sailingloc";

export default function Toolbox() {
  const [active, setActive] = useState("Frontend");
  const reduce = useReducedMotion();
  const categories = Object.keys(toolbox);

  return (
    <section
      id="stack"
      className="section-pad overflow-hidden border-y border-terracotta/10"
      style={{
        background:
          "linear-gradient(165deg, #faf3ea 0%, #f6ebe0 50%, #faf3ea 100%)",
      }}
    >
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-3">Stack</p>
            <h2 className="display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08]">
              Ma <span className="text-terracotta-deep">boîte à outils</span>.
            </h2>
            <p className="mt-4 max-w-sm text-sm text-ink-muted md:text-base">
              Les outils avec lesquels je conçois, construis et livre, choisis
              avec intention.
            </p>

            <ul className="mt-8 space-y-1">
              {categories.map((cat) => {
                const on = active === cat;
                return (
                  <li key={cat}>
                    <button
                      type="button"
                      data-cursor="interactive"
                      onClick={() => setActive(cat)}
                      aria-pressed={on}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition ${
                        on
                          ? "bg-terracotta-deep text-cream"
                          : "text-ink-muted hover:bg-[#fff8f0] hover:text-ink"
                      }`}
                    >
                      <span className="display text-2xl md:text-3xl">{cat}</span>
                      <span
                        className={`text-xs tracking-wider ${
                          on ? "text-cream/70" : "text-ink-subtle"
                        }`}
                      >
                        {toolbox[cat].length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-terracotta/20 bg-[#fff8f0] p-7 md:min-h-[380px] md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-terracotta-soft/50 blur-2xl"
              />
              <p className="relative text-xs uppercase tracking-[0.2em] text-terracotta-deep">
                {active}
              </p>

              <AnimatePresence mode="wait">
                <motion.ul
                  key={active}
                  className="relative mt-8 flex flex-wrap gap-3"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {toolbox[active].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
                      className="rounded-full bg-cream px-5 py-3 text-sm font-medium text-ink shadow-sm ring-1 ring-terracotta/20"
                      data-cursor="interactive"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>

              <p
                aria-hidden="true"
                className="pointer-events-none absolute bottom-4 right-6 font-display text-[5rem] leading-none text-terracotta-deep/10 md:text-[7rem]"
              >
                {String(categories.indexOf(active) + 1).padStart(2, "0")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
