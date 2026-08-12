import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../animations/Reveal";
import { isEmailConfigured, sendContactEmail } from "../../lib/emailjs";
import { site } from "../../data/site";

const initial = { name: "", email: "", message: "" };

const fieldClass =
  "w-full rounded-2xl border border-terracotta/20 bg-cream px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink-subtle/70 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20";

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [errorDetail, setErrorDetail] = useState("");
  const reduce = useReducedMotion();
  const emailReady = isEmailConfigured();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const result = await sendContactEmail(form);
      setForm(initial);
      setStatus(result?.fallback === "mailto" ? "mailto" : "success");
    } catch (err) {
      setStatus("error");
      setErrorDetail(err?.message || "");
    }
  };

  return (
    <section id="contact" className="section-pad overflow-hidden">
      <div className="site-shell">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[1.75rem] border border-terracotta/15 bg-[#f6ebe0]/80"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-terracotta-soft/40 blur-3xl"
          />

          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:p-14">
            <Reveal>
              <p className="eyebrow mb-3">Contact</p>
              <h2 className="display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08]">
                Construisons{" "}
                <span className="text-terracotta-deep">quelque chose</span>.
              </h2>
              <p className="mt-4 max-w-sm text-ink-muted">
                Un projet, une opportunité, une conversation. Écrivez-moi, je
                réponds avec attention.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${site.email}`}
                  data-cursor="interactive"
                  className="block font-medium text-terracotta-deep transition hover:text-ink"
                >
                  {site.email}
                </a>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="interactive"
                    className="text-ink-muted hover:text-terracotta-deep"
                  >
                    GitHub
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="interactive"
                    className="text-ink-muted hover:text-terracotta-deep"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="rounded-[1.5rem] bg-cream p-6 shadow-[0_18px_40px_rgba(43,33,28,0.05)] ring-1 ring-ink/5 md:p-8"
                noValidate
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs uppercase tracking-[0.16em] text-ink-subtle"
                    >
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Votre nom"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs uppercase tracking-[0.16em] text-ink-subtle"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="vous@email.com"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs uppercase tracking-[0.16em] text-ink-subtle"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Parlez-moi de votre projet…"
                      className={`${fieldClass} resize-y`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  data-cursor="interactive"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-terracotta-deep px-7 py-3.5 text-sm font-medium text-cream transition hover:bg-ink disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Envoi…" : "Envoyer le message"}
                </button>

                {status === "success" ? (
                  <motion.p
                    role="status"
                    className="mt-4 font-display text-xl text-terracotta-deep"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Merci, votre message est bien parti.
                  </motion.p>
                ) : null}

                {status === "mailto" ? (
                  <motion.p
                    role="status"
                    className="mt-4 text-sm text-ink-muted"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Votre client mail s&apos;est ouvert. Envoyez le message pour
                    me contacter
                    {!emailReady
                      ? " (EmailJS non configuré pour l&apos;instant)."
                      : "."}
                  </motion.p>
                ) : null}

                {status === "error" ? (
                  <div role="alert" className="mt-4 text-sm text-terracotta-deep">
                    <p>
                      Impossible d&apos;envoyer pour le moment. Réessayez ou
                      écrivez à{" "}
                      <a href={`mailto:${site.email}`} className="underline">
                        {site.email}
                      </a>
                      .
                    </p>
                    {errorDetail ? (
                      <p className="mt-2 text-xs text-ink-subtle">
                        Détail : {errorDetail}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </form>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
