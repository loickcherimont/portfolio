# PLAN — Rendre le portfolio plus convaincant pour un recruteur

## 1. Objectif

Faire passer le portfolio de « junior qui cherche une passerelle » à
« développeur backend Java / Spring Boot capable de livrer », malgré l'absence
d'expérience Java en entreprise.

Stratégie retenue : **ne pas multiplier les projets, mais rendre la preuve
technique du projet ticketing vérifiable et crédible**. Les autres projets
(jetables ou de formation hors Java) ne sont pas mis en avant comme réalisations
phares.

Message cible :

> Je n'ai pas encore de poste Java en entreprise, mais j'ai déjà livré une API
> REST en équipe (Go), je viens du test industriel (Accenture), et j'ai construit
> seul une application Java / Spring Boot complète, testée, sécurisée,
> documentée et déployée.

## 2. Décisions validées

- **Positionnement** : développeur backend Java / Spring Boot en priorité.
  Ouvert à d'autres langages et à des rôles proches du développement, mais en
  second plan.
- **Disponibilité** : immédiate, Nantes ou remote, CDI idéalement, ouvert à
  d'autres contrats.
- **Rôles proches du dev** : support applicatif et test. **Retirer DevOps** de
  cette liste. DevOps reste dans la stack technique (Docker).
- **Stats hero** :
  - `5` — ans d'autoformation
  - `3` — domaines IT : dev Go, QA, support
  - `68` — tests automatisés (112 cas)
- **Hibernate** : conservé (`Spring Data JPA (Hibernate)`).
- **Projets** : le ticketing Java / Spring Boot reste le **projet phare**.
  Une carte **PHP secondaire** sera ajoutée dans Réalisations, sans fiche
  détaillée, dès que ses informations seront confirmées.
- **Go / Angular** : Go reste une expérience professionnelle (ENERGY-Lab) ;
  Angular reste le frontend du projet ticketing, pas un projet séparé.
- **Pas de témoignage** : miser sur les preuves techniques.
- **Retirer les affirmations non maîtrisées** : lazy loading et requêtes N+1 ne
  doivent plus apparaître.
- **Soft skills** : déplacés de la stack vers À propos, avec une preuve par item.

## 3. Diagnostic actuel

Points forts déjà présents :

- positionnement Java / Spring Boot clair ;
- photo, stack backend, CV téléchargeable, contacts ;
- vrai projet déployé : API Spring Boot + front Angular ;
- design propre et responsive.

Points qui freinent la conversion :

1. **Le projet phare est sous-vendu** : pas de métriques, pas d'identifiants de
   démo, pas de rôle ni d'architecture.
2. **Discours défensif** : « parcours atypique », « junior », « passerelle »,
   IA mise en avant dès le hero.
3. **Parcours incohérent** : le support est dans À propos mais absent des
   Expériences ; le trou 10/2025–02/2026 n'est pas expliqué ; les dates ne
   concordent pas partout.
4. **Conversion perfectible** : CV uniquement en bas de page ; pas de bloc
   « Ce que je cherche » ; navigation cassée depuis une fiche projet.
5. **Preuves non exploitées** : 189 commits, 68 tests, CI, JaCoCo, Docker,
   Swagger, Testcontainers ne sont pas visibles.
6. **Affirmations risquées** : lazy loading / N+1 sont affichés alors qu'ils ne
   peuvent pas être défendus en entretien.

## 4. Plan de contenu

### 4.1 Hero

Fichiers : `src/app/hero/hero.html`, `src/app/hero/hero.ts`,
`src/app/hero/hero.spec.ts`

- **Titre** : conserver `Développeur Back-End Java / Spring Boot`.
- **Paragraphe** (proposition) :

  > Je conçois et je livre des API REST Java / Spring Boot sécurisées, testées
  > et déployées. Dernier projet : une application full-stack de gestion de
  > tickets — JWT, rôles USER/AGENT, PostgreSQL, 68 tests automatisés et CI avec
  > quality gate à 90 % sur le code métier.

- **Ligne de disponibilité** :

  > Nantes · remote · disponible immédiatement · CDI (ouvert à d'autres contrats)

- **CTA** :
  - `Découvrir le projet` → `#realisations`
  - `Télécharger mon CV` → PDF
  - `Me contacter` → `#me-contacter`

- **Stats** :
  1. `5` — `ans d'autoformation`
  2. `3` — `domaines IT : dev Go, QA, support`
  3. `68` — `tests automatisés (112 cas)`

- **IA** : ne plus la mettre dans la première phrase. Elle sera traitée dans un
  encart dédié (voir 4.4).

- **Tests à mettre à jour** :
  - remplacer les assertions `outils d'IA`, `parcours atypique`,
    `Découvrez ce que ça donne concrètement` ;
  - mettre à jour les 3 stats ;
  - ajouter un test pour la ligne de disponibilité ;
  - ajouter un test pour le CTA CV ;
  - adapter le libellé du CTA projet.

### 4.2 Réalisations et fiche projet

Fichiers : `src/app/realisations/projects.service.ts`,
`src/app/realisations/project.ts`,
`src/app/realisations/realisations.html`,
`src/app/realisations/project-card/project-card.html`,
`src/app/realisations/project-detail/project-detail.html`,
`src/app/realisations/project-detail/project-detail.spec.ts`

#### Carte projet

- Afficher la description courte.
- Afficher les tags principaux (`API REST`, `Spring Security`, etc.).
- Ajouter des badges de preuve : `Démo en ligne`, `68 tests`, `CI ≥ 90 %`.
- Présenter le ticketing Java comme **projet phare** (badge dédié).
- Ajouter une carte **PHP secondaire** (badge « Projet secondaire ») : pas de
  fiche détaillée, un lien repo/démo suffit. Informations à confirmer.

#### Bandeau « Preuves » de la fiche

- Rôle : conception, développement, tests, CI/CD, déploiement — **mené seul**.
- Durée : `2025 – aujourd'hui`.
- Métriques :
  - `189` commits
  - `68` tests automatisés (112 cas)
  - `6` endpoints REST
  - `2` rôles (USER / AGENT)
  - `≥ 90 %` de couverture du code métier exigée en CI
  - Docker + Swagger + Testcontainers
- Liens :
  - code backend ;
  - code frontend ;
  - Swagger ;
  - démo en ligne.

#### Identifiants de démo

Afficher un encart visible sur la fiche :

| Rôle  | Email                | Mot de passe |
| ----- | -------------------- | ------------ |
| USER  | `john.doe@gmail.com` | `test123`    |
| AGENT | `agent@company.com`  | `agent123`   |

Sans cela, la démo est inutilisable par un recruteur.

#### Architecture et choix techniques

Section courte :

- Controller → Service → Repository ;
- DTOs explicites ;
- `SecurityFilterChain` + filtre JWT ;
- PostgreSQL + Flyway ;
- tests : Mockito, MockMvc, Testcontainers ;
- CI : GitHub Actions + JaCoCo + build Docker.

#### « Ce que je peux expliquer en entretien »

Remplacer la mention lazy loading / N+1 par des sujets défendables :

- flow JWT : génération, validation, filtre, `SecurityContext` ;
- règles d'accès par rôle (`USER` / `AGENT`) et réponses 401/403 ;
- validation des entrées et gestion centralisée des erreurs (`@RestControllerAdvice`) ;
- stratégie de tests : unitaires, MVC, sécurité, intégration ;
- CI/CD : `./mvnw clean verify`, quality gate JaCoCo, build Docker ;
- documentation Swagger / OpenAPI.

Les deux thèmes « difficulté / solution » sont validés :

1. Sécuriser les endpoints par rôle sans dupliquer la logique →
   `SecurityConfig` + règles par endpoint + tests 401/403.
2. Centraliser les erreurs API avec un format JSON cohérent →
   `@RestControllerAdvice` + exceptions métier + tests.

#### Nettoyage des affirmations risquées

Dans `projects.service.ts` :

- supprimer la difficulté « lazy loading / requêtes N+1 » ;
- supprimer la leçon « relations JPA évitent les requêtes N+1 » ;
- les remplacer par les deux thèmes validés ci-dessus.

Conserver `Spring Data JPA (Hibernate)`, mais ne pas afficher de notion que tu
ne peux pas expliquer.

#### Liens vers les fichiers clés

Ajouter des liens directs vers :

- `SecurityConfig.java` ;
- `JwtAuthenticationFilter.java` ;
- `TicketServiceImpl.java` ;
- `TicketControllerTest.java` ;
- `.github/workflows/ci.yml`.

#### Tests à mettre à jour

- Ajouter des assertions sur le bandeau « Preuves ».
- Ajouter des assertions sur les identifiants de démo.
- Ajouter des assertions sur les liens backend / frontend / Swagger / démo.
- Vérifier que `lazy loading` et `N+1` ne sont plus rendus.

### 4.3 Nouvelle section « Ce que j'apporte »

Créer un composant standalone `src/app/strengths/` (`.ts`, `.html`, `.spec.ts`)
et l'ajouter dans `src/app/home/home.html` après Réalisations.

Trois cartes, chacune avec une preuve :

1. **Je livre de bout en bout**
   API + front + CI + Docker + déploiement.
   → lien vers la fiche projet.

2. **J'ai la rigueur du test**
   QA chez Accenture + 68 tests automatisés + CI.
   → lien vers la fiche projet et l'expérience Accenture.

3. **Je m'adapte vite**
   API Go en entreprise, Angular, WordPress, 5 ans d'autoformation.
   → lien vers les expériences.

### 4.4 Encart « Comment j'utilise l'IA »

Intégrer dans la section « Ce que j'apporte » ou juste après.

Texte proposé :

> J'utilise l'IA pour explorer des pistes, accélérer l'écriture de tests et
> relire le code. Je garde la main sur l'architecture, les choix techniques et la
> validation. Le code est versionné, testé, et je peux l'expliquer.

Preuves : 189 commits, 68 tests, CI.

### 4.5 Compétences

Fichiers : `src/app/stack/stack.html`, `src/app/stack/stack.ts`,
`src/app/stack/stack.spec.ts`

- Retirer le groupe **Soft skills**.
- Conserver `Spring Data JPA (Hibernate)`.
- Conserver le groupe IA, mais en position secondaire.
- Passer de 5 à 4 colonnes.
- Afficher **Java 21** partout. Ne pas afficher Java 25 si le projet est en 21.
- Mettre à jour le titre si nécessaire : `Stack technique` plutôt que
  `Stack technique & savoir-être`.

Tests :

- 4 colonnes au lieu de 5 ;
- supprimer le test des soft skills ;
- conserver le test Hibernate ;
- vérifier Java 21.

### 4.6 Expériences

Fichiers : `src/app/experiences/experiences.html`,
`src/app/experiences/experiences.ts`,
`src/app/experiences/experiences.spec.ts`

- Ajouter **deux cartes Technicien support informatique**, car les activités sont
  différentes :
  - `Manpower (intérim) → CCS SAM → Crédit Mutuel` — 12/2024–09/2025.
    Missions : migration Windows 10 → 11 pour 70 000+ utilisateurs en 6 mois ;
    diagnostic d'incidents bancaires, VPN et habilitations avec PowerShell, en
    lien avec les équipes N2/N3.
  - `Actual Talent (intérim) → Econocom → SNCF` — 03/2026–07/2026.
    Missions : déploiement de Microsoft Authenticator et Windows Hello pour
    200 000+ utilisateurs ; diagnostic Active Directory, VPN et authentification
    avec PowerShell ; suivi via ServiceNow et Confluence.
- Garder la chaîne **intérim → client → client final** : agence en petit, client
  en entreprise, client final dans la description.
- « Fonctions support » est le libellé de la catégorie, pas le nom du projet PHP.
- Ajouter une carte **Développement backend Java — projets personnels**
  (`2021 – aujourd'hui`, note `(autoformation)`).
- Garder Go, QA et WordPress.
- Préciser le type de contrat quand pertinent : stage, CDD, bénévolat.
- Aligner les dates avec À propos.
- Expliquer le trou 10/2025–02/2026 en une phrase : bénévolat WordPress,
  recherche et autoformation Java.
- La stat `3 domaines IT` compte : dev Go, QA, support. WordPress reste un
  bénévolat, non compté dans ce chiffre.

Remplacer les takeaways (`experiences.ts`) par :

1. **Rigueur de test** — validation E2E, analyse de logs et qualification
   d'anomalies chez Accenture.
2. **Travail en équipe** — API versionnée avec les ingénieurs d'ENERGY-Lab,
   Git/GitHub, documentation Swagger.
3. **Autonomie** — 5 ans d'autoformation et livraison d'une application
   Java / Spring Boot complète.
4. **Qualité** — tests automatisés, CI et documentation technique.

Sous-titre de section : remplacer « Un parcours atypique ... » par une phrase
concrète, par exemple « Dev, test et support : trois angles pour apprendre à
livrer du logiciel fiable. »

### 4.7 À propos

Fichiers : `src/app/about/about.html`, `src/app/about/about.spec.ts`

- Corriger `A propos` → `À propos`.
- Remplacer le titre « Une vraie valeur ajoutée » par un titre concret :
  - « Des maths au backend, une méthode construite sur le terrain » (option
    recommandée).
- Conserver le récit : maths → découverte du code (Dev Web standard) → test / support (Nantes) → Java.
- Intégrer les deux contrats support dans la timeline : Manpower → CCS SAM →
  Crédit Mutuel (12/2024–09/2025) et Actual Talent → Econocom → SNCF
  (03/2026–07/2026), avec une mission concrète chacun (migration Windows 11 ;
  déploiement MFA).
- Ajouter un encart **Savoir-être** avec 4 items et une preuve :
  1. **Rigueur & méthode** — QA industriel, tests, CI.
  2. **Esprit analytique** — mathématiques, analyse de logs, debug.
  3. **Autonomie** — 5 ans d'autoformation, projet complet mené seul.
  4. **Collaboration** — Git/GitHub, travail avec des ingénieurs, documentation.
- Ne pas remettre ces soft skills dans la stack.
- Aligner la timeline avec les Expériences.

### 4.8 Contact

Fichiers : `src/app/contact/contact.html`, `src/app/contact/contact.spec.ts`

- Retirer « junior » et « passerelle ».
- Remplacer le sous-titre par :

  > Première opportunité en développement IT — idéalement CDI, disponible
  > immédiatement, Nantes ou remote.

- Ajouter :

  > Java / Spring Boot en priorité ; ouvert à d'autres langages et à des rôles
  > proches du développement (support applicatif, test) pour continuer à
  > progresser sur des projets IT en équipe.

- **Ne pas citer DevOps** dans cette liste.
- Mettre à jour le badge de disponibilité :

  > Disponible immédiatement — Nantes / remote — CDI ou autre contrat

- Garder le CTA CV, l'email, LinkedIn et le téléphone.
- Ne pas afficher de promesse de délai (`Réponse sous 24 h` retiré).
- Ajouter des tests sur le sous-titre, les liens et la disponibilité.

### 4.9 Navigation et finition

Fichiers : `src/app/header/header.html`, `src/app/header/header.ts`,
`src/app/header/header.spec.ts`, `src/app/app.config.ts`

- Remplacer les ancres du header par des `routerLink` avec `fragment` afin
  qu'elles fonctionnent depuis une fiche projet.
- Activer `withInMemoryScrolling({ anchorScrolling: 'enabled' })`.
- Ajouter un lien « Retour aux projets » en haut de la fiche projet.
- Remplacer `Live Demo` par `Démo en ligne`.
- Corriger les libellés :
  - `Réalisations` : « Des projets complets » → « Un projet phare, complété par
    une réalisation secondaire » ;
  - `Voir mon projet` → `Découvrir le projet` ;
  - `A propos` → `À propos`.
- Vérifier tous les liens : démo, API Railway, Swagger, LinkedIn, GitHub, PDF.
- Ajouter un lien discret « Code source du portfolio » (preuve Angular / SSR /
  tests).
- SEO P2 : `sameAs` LinkedIn, `knowsAbout` dans le JSON-LD, schema `Project` si
  simple.
- Accessibilité : lisibilité du hero, focus, contrastes, `alt`, `aria`.

## 5. Fichiers impactés

| Fichier                                                      | Changement                                               |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| `src/app/hero/hero.html`                                     | Nouveau texte, ligne de dispo, CTA CV                    |
| `src/app/hero/hero.ts`                                       | Nouvelles stats 5 / 3 / 68                               |
| `src/app/hero/hero.spec.ts`                                  | Mise à jour des assertions                               |
| `src/app/realisations/projects.service.ts`                   | Retirer N+1, ajouter preuves / credentials / liens + PHP |
| `src/app/realisations/project.ts`                            | Champs : rôle, métriques, credentials, liens, secondaire |
| `src/app/realisations/project-card/project-card.html`        | Description, tags, badges phare / secondaire             |
| `src/app/realisations/project-detail/project-detail.html`    | Bandeau preuves, architecture, credentials, liens        |
| `src/app/realisations/project-detail/project-detail.spec.ts` | Tests des nouvelles sections                             |
| `src/app/strengths/*`                                        | Nouveau composant « Ce que j'apporte »                   |
| `src/app/home/home.html`                                     | Ajouter le composant strengths                           |
| `src/app/stack/stack.html`                                   | Retirer soft skills, 4 colonnes                          |
| `src/app/stack/stack.ts`                                     | Retirer softSkillBadges, garder Hibernate                |
| `src/app/stack/stack.spec.ts`                                | Adapter les tests                                        |
| `src/app/experiences/experiences.html`                       | Deux cartes support + Java, sous-titre                   |
| `src/app/experiences/experiences.ts`                         | Deux contrats support + Java + takeaways                 |
| `src/app/experiences/experiences.spec.ts`                    | Tests des cartes / takeaways                             |
| `src/app/about/about.html`                                   | Titre, accent, soft skills                               |
| `src/app/about/about.spec.ts`                                | Tests du savoir-être                                     |
| `src/app/contact/contact.html`                               | Nouveau sous-titre, dispo, rôles proches                 |
| `src/app/contact/contact.spec.ts`                            | Tests du contenu                                         |
| `src/app/header/header.html`                                 | RouterLink + fragments                                   |
| `src/app/header/header.ts`                                   | Import RouterLink                                        |
| `src/app/header/header.spec.ts`                              | Adapter les href                                         |
| `src/app/app.config.ts`                                      | Anchor scrolling                                         |
| `src/index.html`                                             | SEO P2                                                   |

## 6. Ordre d'exécution

### P0 — impact recruteur immédiat

- [ ] Hero : texte, stats, CTA CV, disponibilité.
- [ ] Fiche projet : preuves, métriques, credentials, architecture, liens.
- [ ] Carte Java phare : description, tags, badge.
- [ ] Contact : nouveau positionnement, support applicatif + test, sans DevOps.
- [ ] Navigation header depuis les pages internes.

### P1 — différenciation

- [ ] Section « Ce que j'apporte ».
- [ ] Encart « Comment j'utilise l'IA ».
- [ ] Expériences : deux cartes support, Java, takeaways, dates.
- [ ] À propos : titre, soft skills, cohérence timeline.
- [ ] Stack : retirer soft skills, garder Hibernate, Java 21.
- [ ] Carte PHP secondaire (à confirmer : nom, repo/démo, fonctionnalités).

### P2 — finition

- [ ] SEO (JSON-LD, LinkedIn, `knowsAbout`).
- [ ] Accessibilité et lisibilité.
- [ ] Relecture des textes et des liens.

## 7. Tests et validation

- `npm test -- --watch=false` (ou `ng test --watch=false`).
- `npm run build`.
- `npx prettier --write .`.
- Vérifier manuellement :
  - la démo est testable avec les identifiants affichés ;
  - la navigation fonctionne depuis `/realisations/:slug` ;
  - aucun texte `lazy loading` / `N+1` ne subsiste ;
  - les stats affichent 5 / 3 / 68 ;
  - les deux contrats support sont visibles avec leurs dates et la chaîne
    intérim → client → client final ;
  - le contact ne contient plus « junior » / « passerelle », ni DevOps dans les
    rôles proches, ni « Réponse sous 24 h » ;
  - la timeline est cohérente entre À propos, Expériences et CV.

## 8. Critères d'acceptation

Un recruteur doit comprendre en moins de 30 secondes :

1. Le profil est **backend Java / Spring Boot**.
2. Le candidat a **livré une application complète, testée et déployée**.
3. Les preuves sont **vérifiables** (code, démo, CI, tests, Swagger).
4. Le parcours atypique est une **méthode**, pas une excuse.
5. Le candidat est **disponible immédiatement** à Nantes ou en remote.
6. Il est **facile de le contacter** (CV, email, LinkedIn, téléphone).

## 9. Points à confirmer / TODO

- [x] Expériences support : Manpower → CCS SAM → Crédit Mutuel
      (12/2024–09/2025) et Actual Talent → Econocom → SNCF (03/2026–07/2026),
      avec intitulés et missions repris du CV.
- [x] Difficultés validées : sécurité JWT/rôles + gestion centralisée des
      erreurs.
- [x] Stats validées : 5 ans d'autoformation, 3 domaines IT, 68 tests.
- [x] Comptes de démo publics validés.
- [x] `Réponse sous 24 h` retiré.
- [x] CV déjà à jour : aucune action.
- [ ] **PHP secondaire** : confirmer le nom du projet, le repo/démo et les
      fonctionnalités. La carte restera secondaire dans Réalisations, sans fiche
      détaillée. C'est le seul point restant avant de lancer l'implémentation.
