import { Service, computed, signal } from '@angular/core';
import { Project } from './project';

const ticketingImages = {
  hub: 'realisations/ticketing-api-hub.png',
  login: 'realisations/ticketing-web-app-login.png',
  main: 'realisations/ticketing-web-app-main.png',
};

export const PROJECTS: Project[] = [
  {
    slug: 'gestionnaire-tickets-support',
    title: 'Gestionnaire de tickets support',
    shortDescription:
      'API REST en Java / Spring Boot avec authentification JWT, PostgreSQL et tests JUnit 5 / AssertJ / Mockito.',
    longDescription:
      'API REST Java / Spring Boot sécurisée avec authentification JWT, contrôle d\'accès par rôles (USER / AGENT) et cycle de vie complet des tickets. PostgreSQL, tests JUnit 5 / Mockito, Swagger UI, Docker, CI/CD avec GitHub Actions et JaCoCo. Déployée sur Railway.',
    period: "2025 – aujourd'hui",
    mainTags: ['API REST', 'Spring Security'],
    imageUrl: ticketingImages.hub,
    imageAlt: 'Aperçu du gestionnaire de tickets support',
    screenshots: [
      {
        imageUrl: ticketingImages.hub,
        alt: 'Capture : Hub de l\'API de gestion de ticket avec Spring Boot',
        label: 'API de gestion de ticket',
      },
      {
        imageUrl: ticketingImages.login,
        alt: "Capture : page d'authentification",
        label: 'Authentification',
      },
      {
        imageUrl: ticketingImages.main,
        alt: 'Capture : Page principale sous Angular',
        label: 'Page principale',
      },
    ],
    context:
      'Construire une API REST complète de gestion de tickets support, pensée comme une vraie application métier : authentification JWT, gestion des rôles (USER / AGENT), cycle de vie des tickets (OPEN → IN_PROGRESS → SOLVED). Objectifs : maîtriser la stack backend de bout en bout — Spring Security, modélisation JPA, API REST, tests — et produire un code testé, documenté (Swagger UI) et facile à faire évoluer.',
    features: [
      'Authentification JWT et contrôle d\'accès par rôles (USER / AGENT)',
      'CRUD des tickets avec cycle de vie (OPEN → IN_PROGRESS → SOLVED)',
      'Documentation API interactive avec Swagger UI',
      'Pipeline CI/CD automatisé (GitHub Actions + JaCoCo)',
      'Containerisation Docker et déploiement Railway',
    ],
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Spring Web MVC',
      'PostgreSQL',
      'Lombok',
      'JUnit 5 / AssertJ',
      'Mockito',
      'Swagger UI',
      'Docker / Docker Compose',
    ],
    difficulties: [
      {
        difficulty:
          "Sécuriser tous les endpoints selon le rôle de l'utilisateur sans dupliquer la logique de contrôle.",
        solution:
          'Configuration déclarative de Spring Security (règles par endpoint) et granularité par annotations, couverte par des tests de sécurité.',
      },
      {
        difficulty:
          'Gérer des relations JPA complexes (tickets, utilisateurs) sans erreurs de lazy loading ni requêtes N+1.',
        solution:
          'Architecture en couches stricte (Controller → Service → Repository), DTOs explicites et tests unitaires Mockito sur les comportements critiques.',
      },
    ],
    lessons: [
      'Sécurité pensée dès la conception : définir Spring Security et les rôles avant la logique métier évite de tout réécrire.',
      "L'architecture en couches et les DTOs rendent le code testable (Mockito) et facile à faire évoluer.",
      'Un modèle de données réfléchi en amont (relations JPA) évite les requêtes N+1 et les surprises de lazy loading.',
      "Documenter l'API (Swagger UI) transforme le projet en un outil utilisable par d'autres développeurs.",
      'Les tests doivent cibler les comportements critiques plutôt que couvrir le code pour la forme.',
    ],
    githubUrl: 'https://github.com/loickcherimont/ticketing-api',
    demoUrl: 'https://loickcherimont.github.io/ticketing-web-v2',
    isPlaceholder: false,
  },
];

@Service()
export class ProjectsService {
  private readonly projectsSignal = signal<Project[]>(PROJECTS);

  readonly projects = this.projectsSignal.asReadonly();

  readonly projectsCount = computed(() => this.projectsSignal().length);

  getProject(slug: string): Project | undefined {
    return this.projectsSignal().find((project) => project.slug === slug);
  }
}
