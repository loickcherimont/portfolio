import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero } from './hero';

const normalizeText = (value: string | null | undefined): string => value?.replace(/\s+/g, ' ').trim() ?? '';

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

    expect(paragraphText).toContain('API REST Java / Spring Boot');
    expect(paragraphText).toContain('outils d\'IA');
    expect(paragraphText).toContain('parcours atypique');
    expect(paragraphText).toContain('Découvrez ce que ça donne concrètement');
  });

  it('should display the portfolio photo', () => {
    const portrait = fixture.nativeElement.querySelector('[data-testid="hero__portrait"]');

    expect(portrait).toBeTruthy();
    expect(portrait?.getAttribute('src')).toContain('loick-cherimont-portrait.jpg');
    expect(portrait?.getAttribute('alt')).toBe('Loïck Cherimont, développeur Backend Java Spring Boot à Nantes');
  });

  it('should display the three stats with their values and labels', () => {
    const statValues = fixture.nativeElement.querySelectorAll('[data-testid^="stat__value-"]');

    expect(statValues.length).toBe(3);

    const expectedStats = [
      { id: 1, value: '3', label: 'Expériences IT' },
      { id: 2, value: '7', label: 'Ans d\'apprentissage autodidacte' },
      { id: 3, value: '1', label: 'Projet construit et déployé' },
    ];

    for (const stat of expectedStats) {
      const value = fixture.nativeElement.querySelector(`[data-testid="stat__value-${stat.id}"]`);
      const label = fixture.nativeElement.querySelector(`[data-testid="stat__label-${stat.id}"]`);

      expect(value?.textContent?.trim()).toBe(stat.value);
      expect(label?.textContent?.trim()).toBe(stat.label);
    }
  });

  it('should link "Voir mon projet" to the projects/portfolio section', () => {
    const cta = fixture.nativeElement.querySelector('[data-testid="hero__cta-projects"]');

    expect(cta?.getAttribute('href')).toBe('#realisations');
    expect(normalizeText(cta?.textContent)).toBe('Voir mon projet');
  });

  it('should link "Me contacter" to the contact section', () => {
    const cta = fixture.nativeElement.querySelector('[data-testid="hero__cta-contact"]');

    expect(cta?.getAttribute('href')).toBe('#me-contacter');
    expect(normalizeText(cta?.textContent)).toBe('Me contacter');
  });
});
