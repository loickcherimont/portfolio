import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Project } from '../project';
import { ProjectCard } from './project-card';

const normalizeText = (value: string | null | undefined): string => value?.replace(/\s+/g, ' ').trim() ?? '';

const realProject: Project = {
  slug: 'test-project',
  title: 'Test Project',
  shortDescription: 'Une courte description du projet.',
  longDescription: 'Une longue description du projet.',
  period: '2025',
  mainTags: ['Java', 'Spring Boot'],
  imageUrl: 'https://placehold.co/600x400',
  imageAlt: 'Aperçu du projet de test',
  screenshots: [],
  context: '',
  features: [],
  stack: [],
  difficulties: [],
  lessons: [],
  githubUrl: 'https://github.com/example/test',
  demoUrl: '',
  isPlaceholder: false,
};

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', realProject);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const title = fixture.nativeElement.querySelector('[data-testid="project-card__title-test-project"]');

    expect(title?.textContent?.trim()).toBe('Test Project');
  });

  it('should render the preview image with a placeholder', () => {
    const image = fixture.nativeElement.querySelector('.project-card__image');

    expect(image?.getAttribute('src')).toContain('placehold.co');
    expect(image?.getAttribute('alt')).toBe('Aperçu du projet de test');
  });

  it('should link "Découvrir le projet" to the detail page', () => {
    const cta = fixture.nativeElement.querySelector('[data-testid="project-card__cta-test-project"]');

    expect(normalizeText(cta?.textContent)).toBe('Découvrir le projet');
    expect(cta?.getAttribute('href')).toBe('/realisations/test-project');
  });

  it('should not render tags, period, description or source code button', () => {
    const tags = fixture.nativeElement.querySelectorAll('.project-tag');
    const period = fixture.nativeElement.querySelector('.project-period');
    const description = fixture.nativeElement.querySelector('.project-desc');
    const github = fixture.nativeElement.querySelector('[data-testid="project-card__github-test-project"]');

    expect(tags.length).toBe(0);
    expect(period).toBeNull();
    expect(description).toBeNull();
    expect(github).toBeNull();
  });

  it('should render a disabled CTA for placeholder projects', async () => {
    fixture.componentRef.setInput('project', { ...realProject, isPlaceholder: true });
    await fixture.whenStable();

    const cta = fixture.nativeElement.querySelector('[data-testid="project-card__cta-test-project"]');

    expect(cta?.getAttribute('aria-disabled')).toBe('true');
    expect(normalizeText(cta?.textContent)).toBe('Bientôt disponible');
  });
});
