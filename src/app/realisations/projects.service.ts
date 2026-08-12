import { Service, computed, signal } from '@angular/core';
import { Project } from './project';

const ticketingImages = {
  dashboard: 'https://placehold.co/600x400/233142/FFFFFF?text=Dashboard+tickets',
  auth: 'https://placehold.co/600x400/1e6b46/FFFFFF?text=Authentification',
  tests: 'https://placehold.co/600x400/4e4376/FFFFFF?text=Tests+unitaires',
};

const PROJECTS: Project[] = [
  {
    slug: 'gestionnaire-tickets-support',
    title: 'Gestionnaire de tickets support',
    shortDescription:
      'API REST en Java / Spring Boot pour la gestion de tickets support, avec authentification, tests unitaires JUnit / AssertJ et Mockito.',
    longDescription:
      'API REST complète de gestion de tickets support : authentification, cycle de vie des tickets, commentaires et tableaux de bord. Un projet mené de bout en bout pour démontrer la maîtrise de la stack Java / Spring Boot.',
    period: "2025 – aujourd'hui",
    mainTags: ['API REST', 'Spring Security'],
    imageUrl: ticketingImages.dashboard,
    imageAlt: 'Aperçu du gestionnaire de tickets support',
    screenshots: [
      {
        imageUrl: ticketingImages.dashboard,
        alt: 'Capture : tableau de bord des tickets',
        label: 'Dashboard',
      },
      {
        imageUrl: ticketingImages.auth,
        alt: "Capture : page d'authentification",
        label: 'Authentification',
      },
      {
        imageUrl: ticketingImages.tests,
        alt: 'Capture : tests unitaires',
        label: 'Tests unitaires',
      },
    ],
    context:
      'Construire une API REST complète de gestion de tickets support, pensée comme une vraie application métier : authentification, gestion des rôles, cycle de vie des tickets (nouveau → en cours → résolu), commentaires et tableaux de bord. Objectifs : démontrer une maîtrise de la stack backend de bout en bout — modélisation de données, sécurité, API, tests — et produire un code testé, documenté et facile à faire évoluer.',
    features: [
      'Authentification et gestion des rôles (utilisateur, agent, admin)',
      'CRUD des tickets avec statut et priorité',
      'Commentaires et suivi de conversation par ticket',
      'Assignation des tickets aux agents',
      'Filtres, recherche et pagination',
    ],
    stack: [
      'Java 25',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Spring Web MVC',
      'PostgreSQL',
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
          'Gérer des relations JPA complexes (tickets, commentaires, utilisateurs) sans erreurs de lazy loading ni requêtes N+1.',
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
    demoUrl: '',
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
