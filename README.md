# Portfolio - Siapri Ouattara

Portfolio éditorial React pour **Siapri Ouattara**, Full-Stack & Mobile Developer.

## Stack

- React 19 (Create React App)
- Tailwind CSS 3
- Framer Motion
- EmailJS (formulaire de contact côté client)
- Lucide React

## Installation

```bash
npm install
cp .env.example .env
# Renseigner les clés EmailJS publiques dans .env
npm start
```

## Variables EmailJS

```env
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

Template recommandé : variables `from_name`, `from_email`, `message`, `reply_to`.

## Scripts

| Commande | Description |
|----------|-------------|
| `npm start` | Dev server |
| `npm run build` | Build production (`build/`) |
| `npm test` | Tests |

## Déploiement Render

Fichier `render.yaml` fourni :

- **Build command** : `npm install && npm run build`
- **Publish directory** : `build`

Sur le dashboard Render, définir les variables `REACT_APP_EMAILJS_*` pour le formulaire.

## Structure

```
src/
├── components/
│   ├── intro/          # Scène d'arrivée
│   ├── hero/           # Hero + formes organiques
│   ├── layout/         # Navbar, Footer, curseur
│   ├── sections/       # About, How I Work, Work, Toolbox, Contact
│   ├── projects/       # SailingLoc + projets secondaires
│   ├── animations/     # Reveal
│   └── ui/             # Button, Section, Heading
├── data/               # Contenu (site, projets, case study)
├── hooks/
└── lib/emailjs.js
```
