import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function CustomCursor() {
  const isFine = useMediaQuery("(pointer: fine)");
  const reduce = usePrefersReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isFine || reduce) return undefined;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onOver = (e) => {
      const t = e.target.closest("a, button, [data-cursor='interactive']");
      setHover(Boolean(t));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [isFine, reduce]);

  if (!isFine || reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-difference"
      animate={{
        x: pos.x - (hover ? 18 : 6),
        y: pos.y - (hover ? 18 : 6),
        width: hover ? 36 : 12,
        height: hover ? 36 : 12,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.35 }}
      style={{
        borderRadius: "999px",
        background: hover ? "rgba(250,243,234,0.85)" : "rgba(250,243,234,0.7)",
        border: "1px solid rgba(250,243,234,0.5)",
      }}
    />
  );
}
