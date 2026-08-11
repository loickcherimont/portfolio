# Cahier des charges — Portfolio Développeur V3

**Projet :** Portfolio de Loïck Cherimont
**Version :** 1.0
**Statut :** Brouillon de cadrage
**Référence d'inspiration :** POC réalisé avec Claude AI (`portfolio-ideas-claude-ai.html`), portfolio React existant (`https://github.com/loickcherimont/ideas-portfolio-v3/blob/main/index.html`)

---

## 1. Présentation du projet

Refonte (V3) du portfolio personnel d'un développeur, destiné à être publié en ligne sur GitHub Pages afin d'appuyer une recherche d'emploi ou de mission.

Le site doit présenter un profil de **développeur backend Java / Spring Boot**, avec une compétence complémentaire en **Angular**, et donner envie à un recruteur de prendre contact.

---

## 2. Objectifs

* Concevoir un portfolio pour un développeur backend Java / Spring Boot (dominante 80–90 %) avec des compétences Angular en complément (10–20 %).
* Mettre en avant des projets démontrant des compétences techniques concrètes.
* Présenter un parcours professionnel et technique cohérent.
* Inciter les recruteurs à prendre contact (email, LinkedIn, téléphone, CV) pour des offres de développeur ou des postes passerelles vers le développement.

---

## 3. Positionnement

Le portfolio doit présenter un développeur :

* **Autonome**
* **Atypique** : parcours académique et expériences professionnelles hors norme
* **Sérieux** : capable de mener un projet de bout en bout et conscient des bonnes pratiques de développement
* **Orienté backend** : Java / Spring Boot constituent le cœur de son profil
* **Polyvalent** : capable d'intervenir sur un frontend Angular lorsque nécessaire

Le terme **« junior » ne doit pas constituer un élément central du positionnement ou de l'identité visuelle du portfolio**. Le niveau du candidat doit être compris à travers ses projets, ses compétences et son parcours.

---

## 4. Public cible

* Recruteurs techniques
* Managers techniques
* ESN (entreprises de services numériques)
* Entreprises recherchant un développeur Java Backend
* Entreprises proposant des postes d'entrée ou des postes passerelles vers le développement

---

## 5. Image recherchée

À l'issue de sa visite, le visiteur doit retenir que le candidat est :

* Développeur Backend Java / Spring Boot
* Capable de réaliser un frontend Angular lorsque nécessaire
* Orienté architecture backend
* Habitué aux outils modernes de développement
* Capable de produire une application complète, de la conception à la réalisation
* Capable d'expliquer les choix techniques réalisés dans ses projets
* Habitué à utiliser des outils d'IA comme assistants de productivité sans déléguer sa compréhension technique

---

## 6. Technologies et outils à utiliser

### 6.1 Frontend

* Angular 22
* Bootstrap 5.3.8
* Sass

### 6.2 Versioning

* Git
* GitHub

### 6.3 Outils d'intelligence artificielle

L'intelligence artificielle est utilisée comme **outil d'assistance et d'amélioration de la productivité**, et non comme substitut à l'apprentissage ou à la compréhension technique.

Outils susceptibles d'être utilisés :

* OpenCode
* GitHub Copilot
* ChatGPT
* Claude
* Gemini / Gemini Code
* Autres outils d'IA pertinents selon les besoins du projet

Les outils d'IA peuvent notamment être utilisés pour :

* explorer différentes solutions techniques ;
* générer des prototypes ou POC ;
* accélérer l'écriture de code répétitif ;
* proposer des pistes de résolution lors d'un blocage ;
* expliquer du code ou des concepts ;
* effectuer des revues de code ;
* améliorer la documentation ;
* identifier des erreurs ou des problèmes potentiels ;
* accélérer les tâches de recherche et de synthèse.

**Principe fondamental :** l'utilisation de l'IA ne doit jamais conduire à intégrer dans le projet du code ou des concepts que le candidat ne comprend pas et qu'il serait incapable d'expliquer en entretien.

---

## 7. Exigences transverses

### 7.1 Langue

* Contenu visible : **français**
* Contenu technique (code, badges de compétences, termes techniques) : **anglais lorsque pertinent**

### 7.2 Vocabulaire technique

* N'employer que des termes techniques réellement maîtrisés par le candidat.
* Chaque notion mise en avant doit pouvoir être expliquée à l'oral en entretien.
* Ne pas ajouter de technologies uniquement pour donner une apparence plus avancée au profil.

### 7.3 Référencement (SEO)

* Site facilement indexable et trouvable sur internet.
* Contenus pensés pour le SEO :

  * balises `title` et `meta` pertinentes ;
  * structure sémantique HTML ;
  * titres hiérarchisés ;
  * textes naturels contenant les mots-clés pertinents.
* Le référencement ne doit pas dégrader la lisibilité du site pour un recruteur.

### 7.4 Méthode de conception et de développement

Le développement du portfolio peut être réalisé avec l'appui de l'intelligence artificielle afin d'accélérer la production.

L'utilisation de l'IA doit toutefois respecter les principes suivants :

* Le cahier des charges reste la référence fonctionnelle et visuelle du projet.
* L'IA peut être utilisée pour produire rapidement des POC et explorer des directions visuelles.
* Un POC généré par IA peut servir de base à l'implémentation finale après validation et itération.
* Le code final doit rester compris et maîtrisé par le candidat.
* L'IA ne doit pas se substituer à l'apprentissage des technologies utilisées.
* Toute fonctionnalité ou technologie intégrée au projet doit pouvoir être expliquée et justifiée.

### 7.5 Approche de prototypage

Le workflow privilégié est :

**Cahier des charges → POC → observation dans le navigateur → itérations → implémentation finale**

Figma peut être utilisé lorsque sa valeur ajoutée est pertinente, mais **n'est pas une étape obligatoire du processus de conception**.

---

## 8. Critères de réussite

Le portfolio est considéré comme réussi si un recruteur, après consultation, comprend rapidement que :

1. Le développement backend Java constitue le cœur des compétences.
2. Le frontend Angular est une compétence complémentaire, non centrale.
3. Les projets présentés démontrent des compétences réelles.
4. Le candidat a une démarche professionnelle.
5. Le parcours atypique constitue une valeur ajoutée et non un point faible.
6. Le candidat est capable de mener un projet de bout en bout.
7. Le candidat utilise les outils d'IA pour améliorer sa productivité sans dépendre d'eux pour comprendre ou expliquer son code.
8. Le visiteur est naturellement incité à prendre contact via LinkedIn, téléphone ou email.

---

## 9. Direction artistique

### 9.1 Typographie

* Police : **Google Sans Flex**

### 9.2 Palette de couleurs

| Rôle                         | Couleur | Code hex  |
| ---------------------------- | ------- | --------- |
| Texte / presque noir         | ⬛       | `#233142` |
| Fond principal / blanc cassé | ⬜       | `#F3F3F0` |
| Fond secondaire / blanc      | ⬜       | `#FFFFFF` |
| Couleur primaire / bleu      | 🟦      | `#2772DB` |

La couleur primaire doit être utilisée avec parcimonie afin de conserver une identité visuelle sobre et professionnelle.

---

## 10. Architecture du site et périmètre fonctionnel

### Convention commune

Chaque section principale, du **Hero** au **Contact**, comporte :

* un titre ;
* un sous-titre ;
* un contenu spécifique à la section.

---

### 10.1 Header

Header fixe contenant :

* Logo / nom : **Loïck CHERIMONT**
* Menu de navigation :

  * Accueil — ancre vers le Hero
  * Réalisations
  * Compétences
  * Expériences
  * À propos
  * Contact — bouton visuellement mis en avant comme CTA

---

### 10.2 Hero — Accueil

Le Hero doit permettre au visiteur d'identifier immédiatement le positionnement professionnel du candidat.

Contenu :

* Photo professionnelle
* Titre : **Développeur Java / Spring Boot**
* Texte de présentation mentionnant :

  * Java / Spring Boot comme spécialisation principale ;
  * Angular comme compétence complémentaire ;
  * les principales compétences backend.
* Deux appels à l'action :

  * **« Voir mon projet »** → ancre vers Réalisations
  * **« Me contacter »** → ancre vers Contact
* Trois chiffres clés à définir.

Les chiffres devront apporter une information réellement pertinente et vérifiable, par exemple :

* années d'expérience dans l'IT ;
* années consacrées à l'apprentissage et à la pratique du développement ;
* nombre de projets réellement présentables.

Les valeurs définitives restent à déterminer.

---

### 10.3 Réalisations

Vue de synthèse présentant les projets sélectionnés.

Pour chaque projet :

* image de prévisualisation ;
* titre ;
* bouton **« Découvrir le projet »** ouvrant une fiche détaillée.

#### Fiche projet

Chaque projet dispose d'une page dédiée. Structure de la fiche :

* En-tête projet : titre, description courte, badge de période, tags principaux
* Image principale
* Idéalement plusieurs captures d'écran supplémentaires (au moins 3 lorsque cela apporte une réelle valeur)
* **Contexte & objectifs**
* **Fonctionnalités principales** — 5 maximum, présentées en liste à puces avec icônes simples
* **Choix techniques & compétences mobilisées** — badges des technologies réellement utilisées
* **Difficultés rencontrées & solutions apportées** — une carte par thème, difficulté et solution présentées côte à côte
* **Enseignements tirés** — encart de synthèse de ce que le projet a apporté
* Bouton **« Voir le code source »** avec lien GitHub
* Bouton **« Live Demo »** vers le projet en ligne

Les boutons sont présentés en rangée centrée, empilés sur mobile, sans encart dédié.

La présentation détaillée des fiches projet s'appuie sur le POC `instructions/project-file-poc.html`.

#### Projets identifiés à ce stade

1. **Gestionnaire de tickets support**

   * Java
   * Spring Boot
   * Spring Security
   * Spring Data JPA
   * PostgreSQL
   * API REST

2. **Messagerie sécurisée en temps réel**

   * Spring Boot
   * WebSocket / STOMP
   * JWT
   * Spring Security

---

### 10.4 Compétences

Affichage sous forme de badges Bootstrap.

Les technologies les plus importantes pour le poste backend visé doivent être visuellement prioritaires.

| Catégorie                   | Technologies                                                                       |
| --------------------------- | ---------------------------------------------------------------------------------- |
| Backend                     | Java 25, Spring Boot, Spring Security, Spring Data JPA / Hibernate, Spring Web MVC |
| Data                        | SQL, PostgreSQL                                                                    |
| Testing                     | JUnit 5, AssertJ, Mockito, Postman                                                 |
| DevOps / Tooling            | Docker, Docker Compose, Git, GitHub                                                |
| Frontend *(complémentaire)* | TypeScript, Angular, Bootstrap                                                     |
| IA / Productivité           | OpenCode, GitHub Copilot, ChatGPT, Claude, Gemini                                  |

Les outils d'IA ne doivent pas être présentés au même niveau que les compétences fondamentales de développement.

Les soft skills ne sont pas intégrées au tableau principal des compétences techniques. Elles doivent être démontrées ou présentées dans les sections **Expériences** et **À propos** lorsque cela est pertinent.

---

### 10.5 Expériences

Présentation sous forme de cartes, une par expérience.

Chaque carte contient :

* Nom du poste
* Entreprise
* Badge de période / dates
* Descriptif court intégrant les mots-clés techniques pertinents et les éléments importants de la mission

En dessous de l'ensemble des cartes :

### « Ce que ces expériences m'ont apporté »

Encart de synthèse inspiré du POC réalisé avec Claude AI.

L'objectif est de montrer comment les différentes expériences professionnelles ont contribué à construire le profil actuel du candidat.

---

### 10.6 À propos

Cette section doit adopter une approche davantage narrative.

Éléments à présenter :

* Genèse du goût pour le code dans le parcours du candidat
* Parcours géographique : **Réunion → Lyon → Nantes (2022 – aujourd'hui)**
* Parcours atypique : mathématiques puis informatique
* Apprentissage autodidacte du développement
* Évolution progressive vers le développement backend Java
* Objectif professionnel à long terme
* Engagement du candidat pour atteindre cet objectif

Cette section doit contextualiser le parcours sans faire du statut de « junior » l'élément central de l'identité professionnelle.

---

### 10.7 Me contacter

Contenu :

* Titre : **Me contacter**
* Sous-titre
* Bouton de téléchargement du CV
* Moyens de contact :

  * Email
  * LinkedIn
  * Téléphone
* Localisation :

  * **Nantes, France**

La section Contact constitue le principal point de conversion du portfolio.

---

### 10.8 Footer

Footer volontairement minimaliste.

Contenu :

* Nom et prénom
* Positionnement court : **Développeur Java Backend**
* Lien vers **Mentions légales**
* Copyright

Les informations déjà présentes dans la section Contact (email, LinkedIn, téléphone, localisation) ne sont pas répétées inutilement dans le footer.

---

## 11. Mentions légales

Une page dédiée aux mentions légales pourra contenir notamment :

### Éditeur

**Loïck Cherimont**

### Hébergement

**GitHub Pages**

### Crédits

Mention des ressources tierces utilisées lorsque nécessaire :

* bibliothèques d'icônes ;
* images ou illustrations provenant de sources externes ;
* polices de caractères et licences applicables ;
* autres ressources soumises à des conditions particulières d'utilisation.

Les informations affichées doivent correspondre aux ressources réellement utilisées dans la version finale du site.

---

## 12. Références et sources d'inspiration

| Élément                                                                                    | Source                                  |
| ------------------------------------------------------------------------------------------ | --------------------------------------- |
| Style général / bouton Contact du header / encart « Ce que ces expériences m'ont apporté » | POC réalisé avec Claude AI              |
| Présentation détaillée des fiches projet                                                   | POC `instructions/project-file-poc.html` |
| Contenu initial des mentions légales                                                       | Dépôt GitHub `devoir-portfolio-reactjs` |

Les références servent uniquement de sources d'inspiration. Le portfolio final doit disposer d'une identité visuelle et d'une présentation propres.

---

## 13. Workflow de développement assisté par IA

Le développement du portfolio suit une approche où l'intelligence artificielle est utilisée comme **accélérateur de productivité**, tout en conservant la maîtrise technique du candidat.

### Étape 1 — Cadrage

Le présent cahier des charges définit :

* les objectifs ;
* le positionnement ;
* la cible ;
* le contenu ;
* la structure ;
* la direction artistique ;
* les contraintes techniques.

### Étape 2 — Prototypage

Utilisation d'un ou plusieurs outils d'IA pour générer rapidement un **POC HTML/CSS** à partir du cahier des charges.

Le POC peut utiliser :

* des placeholders ;
* du contenu provisoire ;
* des images temporaires ;
* des composants simplifiés.

L'objectif est de valider rapidement la direction visuelle et la hiérarchie de l'information dans un navigateur réel.

### Étape 3 — Itération

Le POC est testé et évalué :

* sur desktop ;
* sur mobile ;
* en termes de lisibilité ;
* en termes de hiérarchie visuelle ;
* en termes de navigation ;
* en termes de responsive design ;
* en termes d'accessibilité.

Les problèmes identifiés donnent lieu à des itérations avant l'implémentation finale.

### Étape 4 — Implémentation

Le POC validé sert de référence pour l'implémentation Angular / Bootstrap / Sass.

Le code est progressivement restructuré afin de respecter :

* les conventions du framework ;
* la maintenabilité ;
* la réutilisabilité ;
* l'accessibilité ;
* les bonnes pratiques frontend.

### Étape 5 — Validation technique

Tout code généré ou suggéré par une IA doit être :

* lu ;
* compris ;
* testé ;
* adapté si nécessaire ;
* validé par le candidat.

Aucune technologie ou fonctionnalité ne doit être intégrée uniquement parce qu'une IA l'a proposée.

---

## 14. Points restant à trancher

* Contenu final des 3 chiffres clés du Hero
* Valeurs exactes des chiffres
* Nombre définitif de projets à présenter dans Réalisations
* Captures d'écran réelles à intégrer par projet
* Rédaction finale des textes de la section À propos
* Descriptifs définitifs des expériences professionnelles
* Contenu final des fiches projets
* Liste définitive des ressources tierces et crédits
* Validation finale du responsive design
* Validation finale de l'accessibilité et du SEO

---

## 15. Principe directeur du projet

> **L'intelligence artificielle est un outil de productivité, pas un substitut à l'apprentissage.**

Le portfolio doit refléter les compétences réelles du candidat.

L'IA peut accélérer la recherche, le prototypage, la rédaction, la génération de code, la revue et le débogage, mais **la compréhension, les décisions techniques et la validation finale restent sous la responsabilité du développeur.**
