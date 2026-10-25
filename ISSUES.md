# Issues — Portfolio

Issues derived from section **6. Ordre d'exécution** of `PLAN.md`.
Priorities: P0 = `HIGH`, P1 = `MEDIUM`, P2 = `LOW`.

| ID  | PRIORITY  | ISSUE                                                          | DESCRIPTION                                                                                              |
| --- | --------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 01  | 🔴 HIGH   | [✅ DONE] Rewrite hero copy, stats, CTAs and availability       | Replace the hero copy with the validated Java / Spring Boot positioning; add availability and project, CV and contact CTAs; update stats to 5 / 4 / 68. |
| 02  | 🔴 HIGH   | [🔴HIGH] Add proof and demo credentials to the project page     | Add metrics, solo role, architecture, links and demo accounts to the ticketing project page.               |
| 03  | 🔴 HIGH   | [🔴HIGH] Highlight the flagship Java project card               | Update the Java card with a short description, tags, proof badges and a "Flagship project" badge.          |
| 04  | 🔴 HIGH   | [🔴HIGH] Rewrite contact positioning                            | Clarify the job search: permanent contract, immediate availability, Nantes/remote and adjacent roles without DevOps. |
| 05  | 🔴 HIGH   | [🔴HIGH] Fix navigation from internal pages                     | Fix header links from a project page and add a link back to the projects list.                             |
| 06  | 🟡 MEDIUM | [🟡MEDIUM] Create a "What I bring" section                      | Create three strength cards, each backed by evidence and a link.                                           |
| 07  | 🟡 MEDIUM | [🟡MEDIUM] Add an AI usage note                                 | Explain controlled AI usage, backed by commits, tests and CI.                                              |
| 08  | 🟡 MEDIUM | [🟡MEDIUM] Expand experience with support roles, Java and takeaways | Add both support contracts and the Java card, explain the gap and rewrite the takeaways.                |
| 09  | 🟡 MEDIUM | [🟡MEDIUM] Update About title, soft skills and timeline         | Fix the accent, change the title, align the timeline and add evidence-backed soft skills.                  |
| 10  | 🟡 MEDIUM | [🟡MEDIUM] Simplify the stack to 4 columns, Hibernate and Java 21 | Remove soft skills, keep Hibernate, switch to 4 columns and display Java 21.                              |
| 11  | 🟡 MEDIUM | [🟡MEDIUM] Add the secondary PHP project card                   | Add a secondary PHP card with a link, without a detail page. Blocked until the project details are confirmed. |
| 12  | 🟢 LOW    | [🟢LOW] Add SEO structured data for LinkedIn and skills         | Add LinkedIn, `knowsAbout` and the `Project` schema to the JSON-LD.                                        |
| 13  | 🟢 LOW    | [🟢LOW] Improve accessibility and readability                   | Check readability, focus, contrast, `alt`/`aria` and fix AXE errors.                                       |
| 14  | 🟢 LOW    | [🟢LOW] Review copy, dates and links                            | Check copy, dates, stats, links and remove risky claims.                                                   |

## Issue 01 — Rewrite hero copy, stats, CTAs and availability

**Status:** ✅ Completed

### Implemented

- Replaced the hero introduction with factual positioning around secure,
  tested and deployed Java / Spring Boot REST APIs and the IT incident
  management project.
- Highlighted 68 automated tests, continuous integration and 90% code coverage
  on business code.
- Added the availability line: Nantes, remote, immediately available, permanent
  contract preferred and open to other contract types.
- Updated the calls to action:
  - **Découvrir le projet** → `#realisations`
  - **Télécharger mon CV** → downloadable PDF
  - **Me contacter** → `#me-contacter`
- Updated the statistics:
  - `5` — ans d’autoformation
  - `4` — ans d’expérience IT
  - `68` — tests automatisés (112 cas)
- Updated the hero component tests for the copy, availability, statistics and
  CTA destinations and CV download.

### Validation

- Hero component tests: **9 passed**.
- Prettier check: **passed**.
