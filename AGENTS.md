# AGENTS.md

## Project

Personal portfolio v3 (Angular 22, Bootstrap 5.3.8, Sass) for Loïck Cherimont, a backend Java/Spring Boot developer. Visible content must be in **French**; technical terms/code in English (spec §7.1).

**`instructions/cahier-des-charges-portfolio.md` is the authoritative spec** (structure, sections, colors, typography, content). `instructions/*.html` are design POCs to iterate on in the browser before implementing in Angular. Read the spec before building features.

## Stack quirks

- Standalone Angular app (no NgModules): bootstrap via `src/main.ts` → `App`. Component classes use `imports:` arrays, signals, `templateUrl`/`styleUrl`. Prefix is `app`, inline/component styles are SCSS.
- Routing exists (`src/app/app.routes.ts`) but is currently **empty** — no routes defined yet.
- Design tokens live in `src/styles.scss` as Bootstrap SCSS overrides (`$primary: #2772DB`, `$secondary`/`$body-color: #233142`, `$light: #F3F3F0`) plus a `@font-face` for "Google Sans Flex" pointing at `src/app/assets/fonts/...`.

## Commands

- Dev server: `npm start` (port 4200, hot reload)
- Build: `npm run build`
- Test: `npm test` (use `ng test --watch=false` for a single run)
- Format: `npx prettier --write .` (no format/lint script is configured; there is no ESLint config)

No CI workflows exist.

## Testing

- Runner is **Vitest 4** via the `@angular/build:unit-test` builder (angular.json) — no Karma/Jasmine. `vitest/globals` types come from `tsconfig.spec.json`. Specs live next to components as `*.spec.ts`.
- Do **not** pass `--browsers=...` to `ng test` — the Vitest builder does not support it (it runs headless with jsdom).
- The legacy `app.spec.ts` "should render title" test is **commented out**: it asserted on the scaffold `Hello, pv3` title, which no longer exists. Re-enable/extend it when the app has real content.
- Write tests in english
