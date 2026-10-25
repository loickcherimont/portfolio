import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero } from './hero';

const normalizeText = (value: string | null | undefined): string =>
  value?.replace(/\s+/g, ' ').trim() ?? '';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main title', () => {
    const title = fixture.nativeElement.querySelector('[data-testid="hero__title"]');
    const titleText = normalizeText(title?.textContent);

    expect(titleText).toContain('Développeur');
    expect(titleText).toContain('Back-End Java / Spring Boot');
  });

  it('should display the introduction paragraph', () => {
    const paragraph = fixture.nativeElement.querySelector('[data-testid="hero__paragraph"]');
    const paragraphText = normalizeText(paragraph?.textContent);

    expect(paragraphText).toContain('Je conçois et livre des API REST Java / Spring Boot');
    expect(paragraphText).toContain('gestion des incidents IT');
    expect(paragraphText).toContain('68 tests automatisés');
    expect(paragraphText).toContain('couverture de code de 90 % sur le code métier');
    expect(paragraphText).not.toContain("outils d'IA");
    expect(paragraphText).not.toContain('parcours atypique');
  });

  it('should display a concise green availability badge above the title', () => {
    const availability = fixture.nativeElement.querySelector('[data-testid="hero__availability"]');
    const title = fixture.nativeElement.querySelector('[data-testid="hero__title"]');
    const dot = availability?.querySelector('.hero__availability-dot');

    expect(normalizeText(availability?.textContent)).toBe('Nantes · disponible immédiatement');
    expect(availability?.classList.contains('border-success')).toBe(true);
    expect(dot?.classList.contains('bg-success')).toBe(true);
    expect(
      availability?.compareDocumentPosition(title) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it('should display the portfolio photo', () => {
    const portrait = fixture.nativeElement.querySelector('[data-testid="hero__portrait"]');

    expect(portrait).toBeTruthy();
    expect(portrait?.getAttribute('src')).toContain('loick-cherimont-portrait.jpg');
    expect(portrait?.getAttribute('alt')).toBe(
      'Loïck Cherimont, développeur Backend Java Spring Boot à Nantes',
    );
  });

  it('should display the three stats with their values and labels', () => {
    const statValues = fixture.nativeElement.querySelectorAll('[data-testid^="stat__value-"]');

    expect(statValues.length).toBe(3);

    const expectedStats = [
      { id: 1, value: '5', label: "ans d'autoformation" },
      { id: 2, value: '4', label: "ans d'expérience IT" },
      { id: 3, value: '68', label: 'tests automatisés (112 cas)' },
    ];

    for (const stat of expectedStats) {
      const value = fixture.nativeElement.querySelector(`[data-testid="stat__value-${stat.id}"]`);
      const label = fixture.nativeElement.querySelector(`[data-testid="stat__label-${stat.id}"]`);

      expect(value?.textContent?.trim()).toBe(stat.value);
      expect(label?.textContent?.trim()).toBe(stat.label);
    }
  });

  it('should link "Découvrir le projet" to the projects section', () => {
    const cta = fixture.nativeElement.querySelector('[data-testid="hero__cta-projects"]');

    expect(cta?.getAttribute('href')).toBe('#realisations');
    expect(normalizeText(cta?.textContent)).toBe('Découvrir le projet');
  });

  it('should link to the downloadable CV', () => {
    const cta = fixture.nativeElement.querySelector('[data-testid="hero__cta-cv"]');

    expect(cta?.getAttribute('href')).toBe('contact/loick-cherimont-cv-developpeur-java.pdf');
    expect(cta?.getAttribute('download')).toBe('loick-cherimont-cv-developpeur-java.pdf');
    expect(cta?.getAttribute('aria-label')).toBe('Télécharger mon CV, format PDF');
    expect(normalizeText(cta?.textContent)).toBe('Télécharger mon CV');
  });
});
