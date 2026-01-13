import React from "react";

/**
 * Timeline style (image 1):
 * - Ligne verticale au centre + points
 * - Cartes alternées gauche/droite
 * - “badge” orange en haut de chaque carte
 * - Petits dessins décoratifs (sans changer le fond de section)
 *
 * Données adaptées à ton CV : alternance + stage + McDo + formations.
 * Source CV: :contentReference[oaicite:0]{index=0}
 */

const timeline = [
  {
    type: "experience",
    badge: "ALTERNANCE",
    role: "Développeuse Full Stack & Mobile",
    org: "TROPHENIX ASSO",
    period: "Déc. 2024 — Sept. 2025",
    bullets: [
      "Développement et amélioration de fonctionnalités sur une application mobile (React Native).",
      "Conception de maquettes UI/UX sur Figma avant intégration.",
      "Support sur le site web et participation à l’organisation d’événements.",
      "Technos : React Native, Figma, JavaScript.",
    ],
  },
  {
    type: "formation",
    badge: "FORMATION",
    role: "Chef de Projet Digital — Développeuse Web Full Stack (B3+M1)",
    org: "Institut IEF2I (Digital School of Paris) — Vincennes",
    period: "Sept. 2024 — Nov. 2024",
    bullets: [
      "Approche projet : cadrage, planification, livrables.",
      "Consolidation front-end / back-end et intégration API.",
    ],
  },
  {
    type: "experience",
    badge: "STAGE (2 mois)",
    role: "Développeuse Web",
    org: "TROPHENIX ASSO",
    period: "Sept. 2024 — Nov. 2024",
    bullets: [
      "Réalisation complète du site web de l’association.",
      "Interfaces avec React + Tailwind CSS.",
      "Mise en place d’un back-end avec Node.js et intégration d’API REST.",
      "Technos : React, Node.js, Tailwind, JavaScript.",
    ],
  },
  {
    type: "formation",
    badge: "FORMATION",
    role: "Développeuse Web & Mobile (Bac+2)",
    org: "Doranco — Bagnolet",
    period: "Fév. 2024 — Nov. 2024",
    bullets: [
      "Apprentissage intensif : React, Angular, Node.js.",
      "Développement d’applications responsives (web & mobile).",
    ],
  },
];

const Dot = () => (
  <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-md" />
);

const Experience = () => {
  return (
    //  Fond inchangé (tu avais bg-white/50)
    <section id="experience" className="py-20 px-6 bg-white/50 relative z-10 overflow-hidden">
      {/* Dessins décoratifs (sans toucher le fond) */}
      <svg
        className="absolute left-6 top-10 opacity-70"
        width="70"
        height="70"
        viewBox="0 0 80 80"
        aria-hidden="true"
      >
        <path
          d="M40 6l7 18 19 1-15 12 5 19-16-10-16 10 5-19-15-12 19-1z"
          fill="#FB923C"
          fillOpacity="0.35"
          stroke="#FB923C"
          strokeWidth="2"
        />
      </svg>

      <svg
        className="absolute right-8 top-12 opacity-60"
        width="90"
        height="90"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <rect x="18" y="18" width="26" height="26" fill="none" stroke="#FB923C" strokeWidth="3" />
        <rect x="52" y="52" width="26" height="26" fill="none" stroke="#FB923C" strokeWidth="3" />
      </svg>

      <div className="absolute -left-12 bottom-10 w-72 h-72 bg-orange-200/60 rounded-[48px] rotate-6" />

      {/* marge 10% gauche/droite */}
      <div className="px-[10%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto" />
        </div>

        <div className="relative">
          {/* ligne centrale */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[3px] bg-orange-300/70 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const left = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-5/12">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8">
                      {/* badge orange (style image 1) */}
                      <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide mb-4">
                        {item.badge}
                      </div>

                      <h3 className="text-lg md:text-xl font-extrabold uppercase mb-2">
                        {item.role}
                      </h3>
                      <div className="text-gray-700 font-semibold mb-1">{item.org}</div>
                      <div className="text-gray-500 text-sm mb-4">{item.period}</div>

                      <ul className="text-gray-700 text-sm leading-relaxed space-y-2 list-disc pl-5">
                        {item.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* center dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <Dot />
                  </div>

                  {/* empty spacer */}
                  <div className="w-full md:w-5/12 hidden md:block" />
                </div>
              );
            })}
          </div>

          {/* version mobile: petite ligne + points */}
          <div className="md:hidden mt-10 text-center text-sm text-gray-500">
            Astuce : sur mobile, la timeline passe en mode “stack” (plus lisible).
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
