# MakeMeLearn Next.js

Une plateforme moderne d'entraide entre autodidactes créatifs, construite avec Next.js 15.

## 🚀 Fonctionnalités

- **Landing Page Moderne** : Design responsive avec animations fluides
- **Système d'Inscription** : Newsletter avec validation en temps réel
- **Pages Complètes** : Accueil, À propos, Comment ça marche, FAQ, Contact, CGU, Confidentialité
- **API Intégrée** : Routes API Next.js pour formulaires et analytics
- **Base de Données** : Prisma + PostgreSQL/SQLite
- **Performance** : SSG/SSR optimisé, images optimisées
- **SEO** : Metadata, sitemap, robots.txt automatiques
- **TypeScript** : Type safety complète

## 🛠️ Stack Technologique

- **Framework** : Next.js 15 (App Router)
- **UI** : React 18 + Tailwind CSS
- **Animations** : Framer Motion
- **Formulaires** : React Hook Form + Zod
- **Base de données** : Prisma ORM
- **Email** : Nodemailer
- **Icons** : Lucide React
- **TypeScript** : Type safety complète

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/creach-t/makemelearn-nextjs.git
cd makemelearn-nextjs

# Installer les dépendances
npm install

# Configurer la base de données
cp .env.example .env.local
# Éditer .env.local avec vos configurations

# Générer le client Prisma
npm run db:generate

# Pousser le schéma vers la DB
npm run db:push

# Lancer en développement
npm run dev
```

## 🔧 Configuration

Créer un fichier `.env.local` :

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/makemelearn"
# ou pour SQLite en dev :
# DATABASE_URL="file:./dev.db"

# Email (optionnel pour dev)
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="your-email@example.com"
SMTP_PASSWORD="your-password"
EMAIL_FROM="hello@makemelearn.fr"

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

## 📁 Structure du Projet

```
makemelearn-nextjs/
├── app/                    # App Router (Next.js 15)
│   ├── (pages)/           # Pages groupées
│   │   ├── about/         # Page À propos
│   │   ├── contact/       # Page Contact
│   │   ├── faq/           # Page FAQ
│   │   └── how-it-works/  # Comment ça marche
│   ├── api/               # Routes API
│   │   ├── contact/       # API contact
│   │   ├── subscribe/     # API newsletter
│   │   └── stats/         # API statistiques
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout racine
│   └── page.tsx           # Page d'accueil
├── components/            # Composants réutilisables
│   ├── ui/               # Composants UI de base
│   ├── forms/            # Composants formulaires
│   ├── sections/         # Sections de pages
│   └── layout/           # Composants layout
├── lib/                  # Utilitaires et config
│   ├── db.ts            # Configuration Prisma
│   ├── email.ts         # Configuration email
│   ├── validations.ts   # Schémas Zod
│   └── utils.ts         # Utilitaires
├── prisma/              # Configuration base de données
│   └── schema.prisma    # Schéma de la DB
├── public/              # Assets statiques
└── types/               # Types TypeScript
```

## 🎨 Design System

- **Couleurs** : Palette moderne avec gradients
- **Typographie** : Inter font pour lisibilité optimale
- **Espacement** : Système cohérent basé sur Tailwind
- **Animations** : Micro-interactions avec Framer Motion
- **Responsive** : Mobile-first approach

## 🔗 Routes

- `/` - Page d'accueil
- `/about` - À propos
- `/how-it-works` - Comment ça marche
- `/faq` - Questions fréquentes
- `/contact` - Contact
- `/legal/terms` - Conditions d'utilisation
- `/legal/privacy` - Politique de confidentialité

## API Endpoints

- `POST /api/subscribe` - Inscription newsletter
- `POST /api/contact` - Formulaire de contact
- `GET /api/stats` - Statistiques publiques

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Docker

```bash
docker build -t makemelearn-nextjs .
docker run -p 3000:3000 makemelearn-nextjs
```

### Manuel

```bash
npm run build
npm start
```

## 📊 Analytics

- **Built-in** : Système de tracking intégré
- **Google Analytics** : Support GA4
- **Performance** : Core Web Vitals monitoring

## 🔐 Sécurité

- **Validation** : Zod schemas pour toutes les entrées
- **Rate Limiting** : Protection API intégrée
- **CORS** : Configuration sécurisée
- **Sanitization** : Nettoyage des données utilisateur

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT © 2025 MakeMeLearn

## 📧 Contact

- Email : hello@makemelearn.fr
- GitHub : [@creach-t](https://github.com/creach-t)

---

⭐ **N'hésitez pas à star le projet si vous l'aimez !**
