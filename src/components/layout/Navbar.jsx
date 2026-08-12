import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "../../data/site";

function navTo(href) {
  if (href.startsWith("#")) return `/${href}`;
  return href;
}

export default function Navbar({ visible }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!visible) return null;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open ? "bg-cream/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="site-shell flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            className="font-display text-lg tracking-tight text-ink md:text-xl"
            data-cursor="interactive"
          >
            <span className="md:hidden">{site.brandShort}</span>
            <span className="hidden md:inline">{site.brandMark}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={onHome ? link.href : navTo(link.href)}
                className="text-sm tracking-wide text-ink-muted transition-colors hover:text-terracotta-deep"
                data-cursor="interactive"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden text-ink"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            data-cursor="interactive"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-cream md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.nav
              className="flex flex-col gap-2 px-[var(--space-gutter)] pb-16 pt-28"
              aria-label="Mobile"
              initial={reduce ? false : { y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: 24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  to={onHome ? link.href : navTo(link.href)}
                  onClick={() => setOpen(false)}
                  className="display block border-b border-ink/10 py-5 text-4xl"
                  data-cursor="interactive"
                >
                  <motion.span
                    initial={reduce ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="block"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
