# AGENTS.md

## Project

Personal portfolio v3 (Angular 22, Bootstrap 5.3.8, Sass) for Loïck Cherimont, a backend Java/Spring Boot developer. Visible content must be in **French**; technical terms/code in English (spec §7.1).

**`instructions/cahier-des-charges-portfolio.md` is the authoritative spec** (structure, sections, colors, typography, content). `instructions/*.html` are design POCs to iterate on in the browser before implementing in Angular. Read the spec before building features.

## Stack quirks

- Bootstrap via `src/main.ts` → `App`. Component classes use `imports:` arrays, signals, `templateUrl`/`styleUrl`. Prefix is `app`, inline/component styles are SCSS.
- Routing exists (`src/app/app.routes.ts`) but is currently **empty** — no routes defined yet.
- Design tokens live in `src/styles.scss` as Bootstrap SCSS overrides (`$primary: #2772DB`, `$secondary`/`$body-color: #233142`, `$light: #F3F3F0`) plus a `@font-face` for "Google Sans Flex" pointing at `src/app/assets/fonts/...`.

## Coding conventions

- To style components use maximum `Bootstrap` and if it required use `SCSS`
- Follow this workflow to implement a stable feature :
  - Use `instructions/cahier-des-charges-portfolio.md` and `instructions/*.html` files
  - Establish a plan after prompt
  - Implement the feature (code)
  - Implement tests on component(s) (UI, services)
  - Make a code review (fix last bugfixes)
  - Explain what you made to developer
- Use english for comments and the more as possible `JSDoc`
- For `SCSS`, use BEM methodology

You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

### TypeScript

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

### Angular

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default since Angular v19
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly. `OnPush` is the default in Angular v22+
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images
  - `NgOptimizedImage` does not work for inline base64 images

### Accessibility

- It MUST pass all AXE checks
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `model()` for two-way bound properties with `[(prop)]` syntax instead of pairing `input()` with `output()`
- Use `computed()` for derived state
- Use `linkedSignal()` for state derived from multiple reactive sources that must stay synchronized
- Prefer inline templates for small components
- Prefer Signal Forms (`@angular/forms/signals`) for new forms. They are stable in Angular v22+ and provide signal-based state, type-safe field access, and schema-based validation
- When not using Signal Forms, prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file

### State management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

### Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like `new Date()` are available

### Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Prefer the `@Service` decorator over `@Injectable({providedIn: 'root'})` for new singleton services (Angular v22+)
- Use the `inject()` function instead of constructor injection

## Commands

- Dev server: `npm start` (port 4200, hot reload)
- Build: `npm run build`
- Test: `npm test` (use `ng test --watch=false` for a single run)
- Format: `npx prettier --write .` (no format/lint script is configured; there is no ESLint config)

No CI workflows exist.

## Testing

- Runner is **Vitest 4** via the `@angular/build:unit-test` builder (angular.json) — no Karma/Jasmine. `vitest/globals` types come from `tsconfig.spec.json`. Specs live next to components as `*.spec.ts`.
- Do **not** pass `--browsers=...` to `ng test` — the Vitest builder does not support it (it runs headless with jsdom).
- The legacy `app.spec.ts` "should render title" test is **commented out**: it asserted on the scaffold `Hello, portfolio` title, which no longer exists. Re-enable/extend it when the app has real content.

### Testing components

Write specs in English. A component under test is a TypeScript class decorated
with `@Component` — its template is either inline (`template`) or an external
HTML file (`templateUrl`). The component may inject services: provide them in the
`TestBed` via the `providers` array of `configureTestingModule`.

Concrete model (see the full passing example in `src/app/footer/footer.spec.ts`
and its template `src/app/footer/footer.html`):

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display name and position', () => {
    const footerName = fixture.nativeElement.querySelector('[data-testid="footer__name"]');

    expect(footerName?.textContent?.trim()).toBe(
      'Loïck CHERIMONT | Développeur Back-End Java / Spring Boot Junior',
    );
  });

  it('should display legal link', () => {
    const legalLink = fixture.nativeElement.querySelector('[data-testid="footer__link"]');

    expect(legalLink?.textContent?.trim()).toBe('Mentions légales');
  });
});
```

If the component injects a service, register it (or a stub) in `providers`
before creating the fixture:

```typescript
await TestBed.configureTestingModule({
  imports: [ComponentToTest],
  providers: [SomeService],
}).compileComponents();
```

Rules:

- `TestBed.createComponent()` does not run change detection synchronously;
  `await fixture.whenStable()` waits for the initial change detection run
  (Angular 22 docs). Re-await `whenStable()` after mutating component state to
  re-render — do not call `fixture.detectChanges()` in the `beforeEach`.
- Query the rendered DOM with `fixture.nativeElement.querySelector(...)`. Prefer
  `data-testid` attributes over CSS classes for stable selectors.
- `fakeAsync`/`tick` is not recommended with the Vitest runner — use plain `async`
  tests or Vitest fake timers (`vi.useFakeTimers()`).
