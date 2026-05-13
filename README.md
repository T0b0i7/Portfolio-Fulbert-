# Portfolio de GOUDALO Ozias Fulbert

Développeur Full-stack & Spécialiste en Systèmes de Sécurité Informatique

![Portfolio](https://via.placeholder.com/1200x630/1a1a2e/ffffff?text=GOUDALO+Ozias+Fulbert+Portfolio)

## 🚀 À propos

Portfolio professionnel de GOUDALO Ozias Fulbert, développeur full-stack et spécialiste en cybersécurité basé au Bénin (Porto-Novo / Dowa). Ce site présente mes projets, compétences techniques et expériences professionnelles dans le domaine du développement web et de la sécurité des systèmes d'information.

## ✨ Fonctionnalités

- **Design moderne et responsive** - Interface épurée avec animations fluides optimisée pour mobile, tablette et desktop
- **Section Hero** - Présentation personnelle avec navigation rapide
- **À propos** - Parcours professionnel et formation détaillée avec timeline responsive
- **Projets** - Galerie de 6 projets en cybersécurité/développment avec cards adaptatives
- **Compétences** - Stack technique organisée par catégorie avec icônes responsive
- **Contact** - Formulaire de contact avec infos directes, entièrement mobile-friendly
- **Mode sombre** - Thème dark élégant par défaut
- **Performance** - Chargement rapide, animations optimisées pour mobile
- **Accessibilité** - Support des préférences réduites de mouvement, contraste élevé, zones de touche suffisantes

## 🛠️ Technologies utilisées

### Frontend
- **React 19** - Interface utilisateur
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **CSS3** - Styles modernes avec variables CSS

### Icônes
- **React Icons** - Bibliothèque d'icônes comprehensive

### Outils de développement
- **ESLint** - Linting JavaScript/TypeScript
- **Prettier** - Formatage de code
- **CSpell** - Vérification orthographique

## 📁 Structure du projet

```
portfolio-latest-main/
├── src/
│   ├── components/          # Composants React réutilisables
│   │   ├── floating-button.tsx
│   │   ├── glow-box.tsx
│   │   ├── hero-bg.tsx
│   │   ├── mouse-trail.tsx
│   │   ├── scroll-bar.tsx
│   │   ├── section-title.component.tsx
│   │   └── text-hover.component.tsx
│   ├── data/
│   │   └── portfolio.ts     # Données du portfolio (profil, projets, compétences)
│   ├── sections/            # Sections principales
│   │   ├── about-me.section.tsx
│   │   ├── contact.section.tsx
│   │   ├── info.section.tsx
│   │   ├── projects.section.tsx
│   │   └── tech-stack.section.tsx
│   ├── styles/              # Feuilles de style CSS
│   │   ├── about-me.css
│   │   ├── contact.css
│   │   ├── floating-button.css
│   │   ├── glow-box.css
│   │   ├── hero-bg.css
│   │   ├── info-section.css
│   │   ├── mouse-trail.css
│   │   ├── projects.css
│   │   ├── tech-stack.css
│   │   ├── text-hover.css
│   │   └── title.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── prettier.config.cjs
├── cspell.json
└── README.md
```

## 🚦 Installation

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou pnpm

### Étapes

1. **Cloner le dépôt**
```bash
git clone https://github.com/T0b0i7/Portfolio-Fulbert-.git
cd Portfolio-Fulbert-
```

2. **Installer les dépendances**
```bash
npm install
# ou
pnpm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```
L'application sera disponible sur `http://localhost:5173`

4. **Construire pour la production**
```bash
npm run build
```

5. **Prévisualiser la build**
```bash
npm run preview
```

## 🎨 Personnalisation

Toutes les données du portfolio sont centralisées dans `src/data/portfolio.ts`. Pour personnaliser:

- **Profil personnel** - Modifier l'objet `personal`
- **Réseaux sociaux** - Ajouter/supprimer des liens dans `socialLinks`
- **À propos** - Mettre à jour `about.intro` et `about.timeline`
- **Projets** - Ajouter vos projets dans le tableau `projects`
- **Compétences** - Adapter `techStack.groups` selon votre stack

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Construit le projet pour production |
| `npm run preview` | Prévisualise la build de production |
| `npm run lint` | Linting + formatage + vérification orthographe |
| `npm run lint:ci` | Vérifications pour CI/CD |
| `npm run spellcheck` | Vérification orthographique |
| `npm run format` | Formatage du code avec Prettier |

## 🌐 Déploiement

Le projet est optimisé pour déploiement sur:
- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**
- Tout hébergeur supportant les sites statiques

La build produit des fichiers optimisés dans le dossier `dist/`.

## 📧 Contact

- **Email**: oziasgoudalo@gmail.com
- **Téléphone**: +229 01 52 997 997 / +229 01 92 22 46 57
- **Localisation**: Porto-Novo / Dowa, Bénin

## 📄 Informations légales

- **Nom**: GOUDALO Ozias Fulbert
- **Titre**: Développeur Full-stack & Systèmes de Sécurité Informatique
- **Formation**: Licence en Systèmes de Sécurité Informatique (en cours)
- **Certifications**: ICDL

## 🤝 Contributions

Ce projet est un portfolio personnel. Les suggestions d'amélioration sont les bienvenues via issues et pull requests.

---

**© 2025 GOUDALO Ozias Fulbert. Tous droits réservés.**

*Développé avec React, TypeScript et Vite*