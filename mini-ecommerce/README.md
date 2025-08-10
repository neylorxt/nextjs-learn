# Documentation du site Mini-Ecommerce

Ce document présente la documentation technique et fonctionnelle du site Mini-Ecommerce, développé avec Next.js.

## 1. Introduction

Mini-Ecommerce est une application web permettant d'explorer les fonctionnalités d'un site de commerce en ligne simplifié. Ce projet a été bootstrappé avec Create Next App et utilise Next.js pour la construction de l'interface ainsi que la gestion des routes et du rendu côté serveur.

## 2. Prérequis

- Node.js (version recommandée LTS)
- npm, yarn ou pnpm

## 3. Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/neylorxt/nextjs-learn.git
   ```
2. Se positionner dans le dossier du projet :
   ```bash
   cd nextjs-learn/mini-ecommerce
   ```
3. Installer les dépendances :
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn
   ```
4. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

## 4. Structure du projet

Le projet est organisé de la façon suivante :

```
mini-ecommerce/
├── components.json             # Composants utilisés dans le projet
├── next.config.ts              # Configuration de Next.js
├── package.json                # Dépendances du projet
├── public/                    # Ressources statiques (images, icônes, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css       # Styles globaux
│   │   ├── layout.tsx        # Layout principal
│   │   ├── page.tsx          # Page d'accueil
│   │   ├── _components/      # Composants spécifiques (header, carousel, etc.)
│   │   ├── _data/            # Données statiques ou dynamiques du site
│   │   └── [id]/             # Pages dynamiques (ex: détail produit)
├── lib/
│   └── utils.ts              # Fonctions utilitaires
└── types/
    └── daisyui.d.ts          # Déclarations de types pour daisyUI
```

## 5. Fonctionnalités

- **Navigation dynamique** : Le site utilise les routes dynamiques de Next.js (exemple : dossier `[id]`) pour afficher des pages spécifiques selon l'identifiant.

- **Interface réactive** : La conception est basée sur des composants réutilisables et le CSS global permet de maintenir un style homogène sur tout le site.

- **Optimisation des polices** : Utilisation de `next/font` pour optimiser automatiquement le chargement des polices, notamment la police Geist de Vercel.

## 6. Guide d'utilisation

- **Développement local** : Après avoir démarré le serveur, le site peut être consulté à l'adresse [http://localhost:3000](http://localhost:3000).

- **Modification des composants** : Les composants se trouvent dans `src/app/_components/`. Toute modification de ces fichiers sera immédiatement reflétée dans l'interface grâce au Hot Reloading.

- **Gestion des données** : Les données statiques ou les appels d'API peuvent être configurés dans le dossier `src/app/_data/`.

## 7. Déploiement

Pour déployer le site en production, vous pouvez utiliser des services comme Vercel ou Netlify.

### Déploiement sur Vercel

1. Connectez-vous à votre compte Vercel.
2. Importez le dépôt GitHub.
3. Suivez les instructions pour déployer le projet.

## 8. Ressources supplémentaires

- [Documentation Next.js](https://nextjs.org/docs)
- [Guide Tailwind CSS](https://tailwindcss.com/docs)
- [Dépôt GitHub du projet](https://github.com/neylorxt/nextjs-learn)

---

Ce document peut être mis à jour en fonction des évolutions du projet. Pour toute question ou suggestion, merci de contacter l'équipe de développement.
