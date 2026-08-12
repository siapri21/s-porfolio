export const sailingloc = {
  title: "SailingLoc",
  subtitle: "Plateforme de location de bateaux entre particuliers",
  badge: "Projet phare",
  role: "Cheffe de projet",
  stack: "PERN + Supabase",
  teamNote:
    "Projet étudiant réalisé dans une équipe de 3 personnes, sous l'agence fictive Pandawan.",
  overview:
    "SailingLoc est une plateforme de location de bateaux entre particuliers permettant la recherche, la réservation et le paiement de bateaux dans des ports français et européens.",
  features: [
    "Recherche de bateaux",
    "Localisation & dates",
    "Carte interactive",
    "Réservation",
    "Paiement Stripe",
    "Espace propriétaire",
    "Espace administrateur",
    "Messagerie",
    "Favoris & avis",
    "Vérification de documents",
    "Gestion des rôles",
    "Interface FR / EN",
    "PWA",
  ],
  metrics: [
    { value: "32 / 32", label: "E2E tests passed" },
    { value: "100 / 100", label: "Lighthouse SEO" },
    { value: "4", label: "rôles utilisateurs" },
    { value: "13", label: "tables PostgreSQL" },
  ],
  testing: {
    headline: "32/32 Playwright E2E tests réussis",
    journeys: [
      "Authentification",
      "Rôles",
      "Recherche",
      "Réservation",
      "Espace propriétaire",
      "Administration",
    ],
    unit: "Tests unitaires avec node --test.",
    coverage:
      "Couverture globale : 57,2 % des lignes · 92,4 % des fonctions.",
  },
  security: {
    intro:
      "La sécurité n'a pas seulement été déclarée : elle a été vérifiée en conditions réelles.",
    items: [
      "JWT à deux niveaux : access token et refresh token révocable",
      "RBAC",
      "Rate limiting",
      "bcrypt (coût 12)",
      "Politique de robustesse des mots de passe",
      "Vérification anti-fuite Have I Been Pwned (k-anonymity)",
      "Validation Zod",
      "Helmet / CSP",
      "Protection XSS",
      "Requêtes paramétrées via Supabase",
    ],
  },
  loadTesting: {
    title: "Tests de charge",
    points: [
      "k6 exécuté sur le VPS de production.",
      "Des dégradations ont été détectées lors de la montée en charge.",
      "Le VPS est resté stable en CPU / RAM.",
      "Le goulot d'étranglement a été identifié côté Supabase.",
      "Le rate limiter s'est déclenché en conditions réelles.",
    ],
    loop: ["Détecter", "Analyser", "Comprendre", "Améliorer"],
  },
  incidents: [
    {
      title: "WebSocket",
      problem:
        "Le client Supabase Realtime nécessitait un transport WebSocket non disponible nativement dans l'environnement Node utilisé.",
      solution: "Injection du package ws comme transport.",
    },
    {
      title: "DNS",
      problem:
        "Une ancienne entrée AAAA IPv6 empêchait la validation Let's Encrypt lors de la migration.",
      solution: "Diagnostic puis correction des zones DNS A / AAAA.",
    },
    {
      title: "Production",
      problem:
        "Permissions Nginx, variables d'environnement, service worker mis en cache.",
      solution: "Diagnostic ciblé et corrections en production.",
    },
  ],
  seo: {
    score: "100 / 100",
    items: [
      "robots.txt",
      "Sitemap dynamique (142 URLs)",
      "Google Search Console",
      "Canonical dynamique",
      "Open Graph & Twitter Cards",
      "Composant SEO réutilisable",
      "Indexation Google",
    ],
  },
  roleDetails: [
    "Gestion du projet",
    "Cahier des charges",
    "SEO",
    "Jira",
    "Coordination",
    "Déploiement",
    "Tests",
    "Diagnostic d'incidents",
    "Décisions techniques",
  ],
  liveUrl: "https://dsp-dev-o24a-g4.cloud",
  sourceUrl: "https://github.com/Netizor/Sailingloc",
};

export const howIWork = [
  {
    n: "01",
    title: "Comprendre",
    text: "Comprendre le besoin et le problème avant de toucher au code.",
  },
  {
    n: "02",
    title: "Concevoir",
    text: "Penser l'expérience et l'interface avec intention.",
  },
  {
    n: "03",
    title: "Construire",
    text: "Construire une solution robuste, maintenable et claire.",
  },
  {
    n: "04",
    title: "Tester",
    text: "Tester les parcours critiques et améliorer sans se mentir.",
  },
  {
    n: "05",
    title: "Livrer",
    text: "Déployer, observer, diagnostiquer et faire évoluer.",
  },
];

export const toolbox = {
  Frontend: [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
  ],
  Backend: ["Node.js", "Express", "PHP", "Symfony"],
  Mobile: ["React Native", "Expo", "Flutter"],
  Bases: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Neon"],
  Outils: [
    "Git",
    "GitHub",
    "Vite",
    "Figma",
    "Jira",
    "WordPress",
    "Adobe (bases)",
  ],
};
