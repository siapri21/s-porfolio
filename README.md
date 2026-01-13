# Portfolio Siapri Ouattara

Portfolio moderne et responsive pour développeuse Full Stack & Mobile en recherche d'alternance.

## 🚀 Technologies utilisées

- **React 18** - Framework JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes
- **Canvas API** - Animations de particules

## 📦 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner ou créer le projet**
```bash
npx create-react-app siapri-portfolio
cd siapri-portfolio
```

2. **Installer les dépendances**
```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

3. **Initialiser Tailwind CSS**
```bash
npx tailwindcss init -p
```

4. **Copier tous les fichiers fournis** dans leur emplacement respectif selon la structure du projet

5. **Lancer le projet**
```bash
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 📁 Structure du projet

```
siapri-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── animations/
│   │   └── ParticleCanvas.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── experiences.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Personnalisation

### Modifier vos informations
- **Projets** : Éditez `src/data/projects.js`
- **Expériences** : Éditez `src/data/experiences.js`
- **Compétences** : Éditez `src/data/skills.js`

### Changer les couleurs
Modifiez le fichier `tailwind.config.js` dans la section `theme.extend.colors`

### Ajouter votre photo
Remplacez l'URL de l'image dans `src/components/Hero.jsx`

## 🌐 Déploiement

### Netlify
1. Build command: `npm run build`
2. Publish directory: `build`

### Vercel
1. Importez votre repo GitHub
2. Vercel détectera automatiquement React

### GitHub Pages
```bash
npm install gh-pages --save-dev
```
Ajoutez dans `package.json`:
```json
"homepage": "https://votre-username.github.io/siapri-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Puis: `npm run deploy`

## 📝 TODO

- [ ] Ajouter les vraies images de projets
- [ ] Ajouter les liens GitHub des projets
- [ ] Ajouter les liens démo des projets
- [ ] Optimiser les images
- [ ] Ajouter Google Analytics
- [ ] Ajouter un formulaire de contact fonctionnel

## 👩‍💻 Auteure

**Siapri Ouattara**
- Email: siapriouattara21@gmail.com
- LinkedIn: [ouattara-siapri](https://www.linkedin.com/in/ouattara-siapri/)
- GitHub: [siapri](https://github.com/siapri)

## 📄 Licence

Ce projet est sous licence MIT.