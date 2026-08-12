import Reveal from "../animations/Reveal";

export default function SelectedWork() {
  return (
    <section id="projets" className="section-pad pb-2">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow mb-3">Projets</p>
          <h2 className="display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08]">
            Travaux{" "}
            <span className="text-terracotta-deep">sélectionnés</span>.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-ink-muted md:text-base">
            SailingLoc porte la preuve. Les autres projets montrent
            l&apos;étendue : web, mobile, produit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
