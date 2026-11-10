export type ProjectCategory = "Ecole" | "Pro" | "Perso";
export type ProjectSubcategory = "Front" | "Back" | "Fullstack";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string[];
  category: ProjectCategory;
  subcategory: ProjectSubcategory;
  technologies: string[];
  image: string;
  imageAlt: string;
  url?: string;
  githubUrl?: string;
  date: string;
  isTemplate?: boolean;
}

export const CATEGORIES: ProjectCategory[] = ["Ecole", "Pro", "Perso"];
export const SUBCATEGORIES: ProjectSubcategory[] = ["Front", "Back", "Fullstack"];

export const PROJECTS: Project[] = [
  {
    id: "stage-gueules-noires",
    title: "Stage chez Gueules Noires",
    shortDescription: "Communication et développement du site WordPress pour la distillerie Gueules Noires.",
    description: [
      "Lors de ce stage, j'ai pu réaliser la communication et le site WordPress de la distillerie.",
      "Un stage très inspirant qui m'a permis de développer pour un projet réel avec des échanges constants avec le commanditaire.",
      "J'ai pu expérimenter plusieurs casquettes du développement WordPress comme la gestion d'une boutique en ligne avec WooCommerce, la gestion d'un blog mais aussi la mise en page avec un module de bloc, ici Divi."
    ],
    category: "Pro",
    subcategory: "Fullstack",
    technologies: ["WordPress", "WooCommerce", "Divi", "PHP", "CSS"],
    image: "/images/IllustrationStageGN.png",
    imageAlt: "Illustration de mon stage chez Gueules Noires",
    url: "https://www.facebook.com/distillerie.gueules.noires",
    date: "2024",
    isTemplate: false,
  },
  {
    id: "initiation-scss-animation",
    title: "Initiation au SCSS et à l’animation dans les sites web",
    shortDescription: "Projet immersif d'exposition fictive avec animations interactives fluides.",
    description: [
      "Ce projet de groupe institutionnel a permis d’apprendre comment fonctionnait l’animation des sites internet à l’aide d’outils comme GSAP ou ScrollTrigger mais nous a aussi initié au SCSS.",
      "Le but était de proposer un site interactif et engageant pour une exposition fictive, en soignant le dynamisme et les transitions visuelles."
    ],
    category: "Ecole",
    subcategory: "Front",
    technologies: ["GSAP", "ScrollTrigger", "SCSS", "JavaScript", "HTML5"],
    image: "/images/IllustrationProjetIntegration.png",
    imageAlt: "Illustration du projet d'initiation SCSS et animations GSAP",
    date: "2023 - 2024",
    isTemplate: false,
  },
  {
    id: "template-api-microservices",
    title: "Architecture API REST & Microservices",
    shortDescription: "Conception d'une API backend résiliente avec authentification JWT, cache Redis et conteneurisation Docker.",
    description: [
      "Conception et déploiement d'une architecture backend haute performance pour la centralisation de flux de données et de services tiers.",
      "Mise en place d'une authentification sécurisée par JWT, contrôle d'accès basé sur les rôles (RBAC), validation de schémas de données et limitation de requêtes (rate limiting).",
      "Optimisation drastique des temps de réponse grâce à un cache mémoire Redis et automatisation du déploiement avec Docker et bases PostgreSQL."
    ],
    category: "Pro",
    subcategory: "Back",
    technologies: ["Laravel", "PostgreSQL", "Docker", "Redis", "Swagger", "PHP"],
    image: "/images/fond1-min.jpg",
    imageAlt: "Architecture backend d'API REST et microservices",
    githubUrl: "https://github.com/lucrousseau21",
    date: "2024 - 2025",
    isTemplate: true,
  },
  {
    id: "template-ecommerce-headless",
    title: "Plateforme E-Commerce Headless & Analytics",
    shortDescription: "Solution e-commerce complète avec catalogue réactif, gestion d'état et tunnel de paiement Stripe.",
    description: [
      "Développement d'une application e-commerce ultra-réactive combinant une vitrine moderne et un tableau de bord d'administration en temps réel.",
      "Mise en œuvre d'un panier d'achat interactif avec gestion d'état globale, intégration sécurisée de Stripe Checkout et traitement des webhooks de facturation.",
      "Espace back-office avec visualisation dynamique des indicateurs clés (chiffre d'affaires, commandes récentes, taux de conversion) et gestion des stocks."
    ],
    category: "Perso",
    subcategory: "Fullstack",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    image: "/images/IMG_2548-min.jpg",
    imageAlt: "Plateforme E-Commerce Headless et Dashboard",
    githubUrl: "https://github.com/lucrousseau21",
    date: "2025",
    isTemplate: true,
  },
  {
    id: "template-portail-academique",
    title: "Portail Académique & Système de Gestion Étudiant",
    shortDescription: "Système de gestion académique avec API REST, gestion des emplois du temps et base relationnelle.",
    description: [
      "Projet universitaire axé sur la conception d'un système backend robuste pour la gestion centralisée des cours, notes et plannings étudiants.",
      "Modélisation de données relationnelles complexes, création d'endpoints REST sécurisés et traitement des requêtes d'agrégation statistique.",
      "Mise en œuvre de règles métier strictes d'accès selon les profils (étudiants, enseignants, administrateurs) et journalisation complète des actions."
    ],
    category: "Ecole",
    subcategory: "Back",
    technologies: ["Symfony", "PHP", "MySQL", "Doctrine ORM", "REST API", "Docker"],
    image: "/images/IMG_2510-min.jpg",
    imageAlt: "Portail académique et système de gestion étudiant",
    githubUrl: "https://github.com/lucrousseau21",
    date: "2024",
    isTemplate: true,
  },
];
