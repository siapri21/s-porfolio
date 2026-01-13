import React from "react";

const cards = [
  {
    title: "Développement Web",
    description:
      "Création d’interfaces modernes, performantes et responsives adaptées aux besoins du projet.",
    icon: (
      <svg viewBox="0 0 200 160" className="w-40 h-auto">
        <rect x="20" y="20" width="160" height="100" rx="12" fill="#FFE8D9" />
        <rect x="35" y="35" width="80" height="10" rx="5" fill="#FF7A18" />
        <rect x="35" y="55" width="120" height="10" rx="5" fill="#FDBA74" />
        <rect x="35" y="75" width="100" height="10" rx="5" fill="#FDBA74" />
      </svg>
    ),
  },
  {
    title: "Back-end & API",
    description:
      "Développement d’API REST, gestion des bases de données et logique métier.",
    icon: (
      <svg viewBox="0 0 200 160" className="w-40 h-auto">
        <circle cx="100" cy="70" r="45" fill="#E0E7FF" />
        <rect x="60" y="60" width="80" height="20" rx="6" fill="#6366F1" />
        <rect x="75" y="90" width="50" height="10" rx="5" fill="#A5B4FC" />
      </svg>
    ),
  },
  {
    title: "Applications Mobile",
    description:
      "Conception d’applications mobiles modernes avec une expérience utilisateur fluide.",
    icon: (
      <svg viewBox="0 0 200 160" className="w-40 h-auto">
        <rect x="65" y="20" width="70" height="120" rx="16" fill="#E9D5FF" />
        <rect x="80" y="40" width="40" height="60" rx="8" fill="#A855F7" />
        <circle cx="100" cy="120" r="6" fill="#7C3AED" />
      </svg>
    ),
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      {/* ✅ marge 10 % gauche / droite */}
      <div className="px-[10%]">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ce que je peux apporter en alternance
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-8 text-center"
            >
              {/* Illustration */}
              <div className="flex justify-center mb-6">
                <div className="bg-gray-50 rounded-2xl p-4">
                  {card.icon}
                </div>
              </div>

              {/* Texte */}
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
