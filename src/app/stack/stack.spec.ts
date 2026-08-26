import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stack } from './stack';

const normalizeText = (value: string | null | undefined): string =>
  value?.replace(/\s+/g, ' ').trim() ?? '';

describe('Stack', () => {
  let component: Stack;
  let fixture: ComponentFixture<Stack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stack],
    }).compileComponents();

    fixture = TestBed.createComponent(Stack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the section label, title and subtitle', () => {
    const label = fixture.nativeElement.querySelector('[data-testid="stack__label"]');
    const title = fixture.nativeElement.querySelector('[data-testid="stack__title"]');
    const subtitle = fixture.nativeElement.querySelector('[data-testid="stack__subtitle"]');

    expect(normalizeText(label?.textContent)).toBe('// Compétences');
    expect(normalizeText(title?.textContent)).toContain('Stack technique & savoir-être');
    expect(normalizeText(subtitle?.textContent)).toContain(
      'Chaque technologie listée est utilisée dans mes projets',
    );
  });

  it('should render five skill columns', () => {
    const columns = fixture.nativeElement.querySelectorAll(
      '#competences > .container > .row > [class*="col-"]',
    );

    expect(columns.length).toBe(5);
  });

  it('should fill the full viewport height like the hero', () => {
    const section = fixture.nativeElement.querySelector('#competences');

    expect(section?.classList.contains('min-vh-100')).toBe(true);
    expect(section?.classList.contains('d-flex')).toBe(true);
    expect(section?.classList.contains('justify-content-center')).toBe(true);
  });

  it('should display the Backend group with filled (primary) badges', () => {
    const group = fixture.nativeElement.querySelector('[data-testid="stack__group-backend"]');
    const filledBadges = group?.querySelectorAll('.text-bg-primary');

    expect(filledBadges?.length).toBe(2);
    expect(normalizeText(group?.textContent)).toContain('Backend');
    expect(normalizeText(group?.textContent)).toContain('Java 21');
    expect(normalizeText(group?.textContent)).toContain('Spring Boot');
    expect(normalizeText(group?.textContent)).toContain('Spring Data JPA (Hibernate)');
  });

  it('should display standard badges as outlined (empty) badges', () => {
    const group = fixture.nativeElement.querySelector('[data-testid="stack__group-backend"]');
    const outlinedBadges = group?.querySelectorAll('.border');

    expect(outlinedBadges?.length).toBe(3);
  });

  it('should group Data and DevOps in the same column', () => {
    const column = fixture.nativeElement
      .querySelector('[data-testid="stack__group-devops"]')
      ?.closest('.col-md-6');
    const dataGroup = column?.querySelector('[data-testid="stack__group-data"]');

    expect(dataGroup).toBeTruthy();
    expect(normalizeText(dataGroup?.textContent)).toContain('SQL (PostgreSQL)');
  });

  it('should display the Frontend group with its complementary note', () => {
    const group = fixture.nativeElement.querySelector('[data-testid="stack__group-frontend"]');

    expect(normalizeText(group?.textContent)).toContain('(compétence complémentaire)');
    expect(normalizeText(group?.textContent)).toContain('Angular');
    expect(normalizeText(group?.textContent)).toContain('Bootstrap 5');
  });

  it('should display soft skills with the secondary-filled badge style', () => {
    const group = fixture.nativeElement.querySelector('[data-testid="stack__group-soft-skills"]');
    const softBadges = group?.querySelectorAll('.text-bg-secondary');

    expect(softBadges?.length).toBe(3);
    expect(normalizeText(group?.textContent)).toContain('Curiosité');
    expect(normalizeText(group?.textContent)).toContain('Esprit analytique');
    expect(normalizeText(group?.textContent)).toContain('Persévérance');
  });
});
