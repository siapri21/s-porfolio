import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function OrganicScene() {
  const rootRef = useRef(null);
  const isFine = useMediaQuery("(pointer: fine) and (min-width: 768px)");
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (!isFine || reduce) return undefined;
    const el = rootRef.current;
    if (!el) return undefined;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--mx", `${x * 18}px`);
      el.style.setProperty("--my", `${y * 14}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [isFine, reduce]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{ "--mx": "0px", "--my": "0px" }}
    >
      <div
        className="blob-a absolute -right-[8%] top-[8%] h-[55vmin] w-[55vmin] rounded-[42%_58%_60%_40%/48%_42%_58%_52%] opacity-90"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #E8B4A0, #C97D5D 55%, #8C4A32 100%)",
          filter: "blur(0.5px)",
          boxShadow: "inset -20px -30px 60px rgba(43,33,28,0.18)",
          transform: "translate3d(var(--mx), var(--my), 0)",
        }}
      />
      <div
        className="blob-b absolute left-[4%] top-[28%] h-[38vmin] w-[38vmin] rounded-[60%_40%_45%_55%/50%_55%_45%_50%] opacity-70"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, #FAF3EA, #E8B4A0 60%, #C97D5D)",
          transform: "translate3d(calc(var(--mx) * -0.6), calc(var(--my) * -0.5), 0)",
        }}
      />
      <div
        className="blob-c absolute bottom-[6%] right-[18%] h-[28vmin] w-[28vmin] rounded-[48%_52%_58%_42%/42%_58%_42%_58%] opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(232,180,160,0.9), rgba(140,74,50,0.55))",
          transform: "translate3d(calc(var(--mx) * 0.4), calc(var(--my) * 0.35), 0)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent md:via-cream/40" />
    </div>
  );
}
