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
    expect(titleText).toContain('Junior');
  });

  it('should display the introduction paragraph', () => {
    const paragraph = fixture.nativeElement.querySelector('[data-testid="hero__paragraph"]');
    const paragraphText = normalizeText(paragraph?.textContent);

    expect(paragraphText).toContain('Orienté architecture backend : API REST, Spring Security, Spring Data JPA et tests (JUnit 5 / Mockito). Complément Angular pour produire une application complète lorsque c\'est nécessaire. Capable de mener un projet de bout en bout.');
  });

  it('should display the portfolio photo', () => {
    const portrait = fixture.nativeElement.querySelector('[data-testid="hero__portrait"]');

    expect(portrait).toBeTruthy();
    expect(portrait?.getAttribute('src')).toContain('loick-cherimont-portrait.jpg');
    expect(portrait?.getAttribute('alt')).toBe('Portrait de Loïck CHERIMONT');
  });

  it('should display the three stats with their values and labels', () => {
    const statValues = fixture.nativeElement.querySelectorAll('[data-testid^="stat__value-"]');

    expect(statValues.length).toBe(3);

    const expectedStats = [
      { id: 1, value: '2', label: 'Expériences professionnelles' },
      { id: 2, value: '3', label: 'Ans d\'apprentissage du développement' },
      { id: 3, value: '5+', label: 'Projets construits' },
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
