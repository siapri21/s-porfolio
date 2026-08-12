import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../data/site";

export default function Intro({ onEnter }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Enter" || e.key === "Escape") onEnter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onEnter]);

  useEffect(() => {
    if (!reduce) return undefined;
    const t = setTimeout(onEnter, 400);
    return () => clearTimeout(t);
  }, [reduce, onEnter]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 50% 40%, #fff8f0 0%, #faf3ea 45%, #f3e6d8 100%)",
      }}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
      }}
      role="dialog"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="blob-a absolute left-[-8%] top-[8%] h-[55vmin] w-[55vmin] rounded-[58%_42%_48%_52%/48%_55%_45%_52%] opacity-80"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, #f0c9b4, #e8b4a0 45%, rgba(201,125,93,0.55) 100%)",
          }}
        />
        <div
          className="blob-b absolute bottom-[-12%] right-[-6%] h-[60vmin] w-[60vmin] rounded-[45%_55%_58%_42%/52%_42%_58%_48%] opacity-75"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #e8b4a0, #c97d5d 60%, rgba(140,74,50,0.45))",
          }}
        />
        <div
          className="blob-c absolute left-[55%] top-[55%] h-[28vmin] w-[28vmin] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #fff8f0, rgba(232,180,160,0.7))",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          className="mb-6 font-sans text-[11px] uppercase tracking-[0.28em] text-terracotta-deep/80"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {site.name}
        </motion.p>

        <motion.p
          className="display relative text-[clamp(2.8rem,10vw,5.5rem)] leading-none text-terracotta-deep"
          initial={reduce ? false : { opacity: 0, scale: 0.92, y: 12 }}
          animate={
            reduce
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 1, scale: [0.92, 1.02, 1], y: 0 }
          }
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.brandMark}
        </motion.p>

        <motion.p
          className="mt-5 max-w-xs font-display text-lg text-ink-muted md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.65 }}
        >
          Des idées, des expériences numériques.
        </motion.p>

        <motion.button
          type="button"
          onClick={onEnter}
          data-cursor="interactive"
          className="mt-10 rounded-full bg-terracotta-deep px-8 py-3.5 font-sans text-sm tracking-[0.12em] text-cream shadow-[0_12px_40px_rgba(140,74,50,0.22)] transition hover:bg-ink"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          whileHover={reduce ? undefined : { scale: 1.03 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
        >
          Explorer mon travail
        </motion.button>
      </div>

      <button
        type="button"
        onClick={onEnter}
        className="absolute bottom-8 right-8 z-10 text-xs uppercase tracking-[0.16em] text-ink-subtle transition-colors hover:text-terracotta-deep"
        data-cursor="interactive"
      >
        Passer
      </button>
    </motion.div>
  );
}
