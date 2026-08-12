import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { ProjectDetail } from './project-detail';

const routes = [{ path: 'realisations/:slug', component: ProjectDetail }];

const normalizeText = (value: string | null | undefined): string =>
  value?.replace(/\s+/g, ' ').trim() ?? '';

describe('ProjectDetail', () => {
  it('should render the project sheet for a known slug', async () => {
    TestBed.configureTestingModule({
      imports: [ProjectDetail],
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl(
      '/realisations/gestionnaire-tickets-support',
      ProjectDetail,
    );
    const el = harness.routeNativeElement;

    expect(component).toBeTruthy();
    expect(el?.querySelector('[data-testid="project-detail__title"]')?.textContent?.trim()).toBe(
      'Gestionnaire de tickets support',
    );
    expect(
      normalizeText(el?.querySelector('[data-testid="project-detail__description"]')?.textContent),
    ).toContain('API REST');
  });

  it('should display the period badge and main tags', async () => {
    TestBed.configureTestingModule({
      imports: [ProjectDetail],
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/realisations/gestionnaire-tickets-support', ProjectDetail);
    const el = harness.routeNativeElement;

    expect(
      normalizeText(el?.querySelector('[data-testid="project-detail__meta"]')?.textContent),
    ).toContain('2025');
    expect(
      normalizeText(el?.querySelector('[data-testid="project-detail__meta"]')?.textContent),
    ).toContain('API REST');
  });

  it('should render the contextual blocks of the sheet', async () => {
    TestBed.configureTestingModule({
      imports: [ProjectDetail],
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/realisations/gestionnaire-tickets-support', ProjectDetail);
    const el = harness.routeNativeElement;

    expect(el?.querySelector('[data-testid="project-detail__context-title"]')).toBeTruthy();
    expect(el?.querySelector('[data-testid="project-detail__features-title"]')).toBeTruthy();
    expect(el?.querySelector('[data-testid="project-detail__stack-title"]')).toBeTruthy();
    expect(el?.querySelector('[data-testid="project-detail__difficulties-title"]')).toBeTruthy();
    expect(el?.querySelector('[data-testid="project-detail__lessons-title"]')).toBeTruthy();
  });

  it('should render the source code and demo buttons', async () => {
    TestBed.configureTestingModule({
      imports: [ProjectDetail],
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/realisations/gestionnaire-tickets-support', ProjectDetail);
    const el = harness.routeNativeElement;

    const github = el?.querySelector('[data-testid="project-detail__github"]');
    const demo = el?.querySelector('[data-testid="project-detail__demo"]');

    expect(github?.getAttribute('href')).toBe('https://github.com/loickcherimont/ticketing-api');
    expect(demo).toBeNull();
  });

  it('should switch the main image when a screenshot is selected', async () => {
    TestBed.configureTestingModule({
      imports: [ProjectDetail],
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/realisations/gestionnaire-tickets-support', ProjectDetail);
    const el = harness.routeNativeElement;
    const mainImage = el?.querySelector('[data-testid="project-detail__main-image"]');
    const thumbnail = el?.querySelector(
      '[data-testid="project-detail__thumbnail-Authentification"]',
    ) as HTMLButtonElement | null;

    expect(thumbnail).toBeTruthy();

    const beforeStyle = mainImage?.getAttribute('style');

    thumbnail?.click();
    harness.fixture.detectChanges();

    const updatedImage = el?.querySelector('[data-testid="project-detail__main-image"]');

    expect(beforeStyle).toContain('Dashboard');
    expect(updatedImage?.getAttribute('style')).toContain('Authentification');
    expect(updatedImage?.getAttribute('style')).not.toBe(beforeStyle);
  });

  it('should render a not-found state for an unknown slug', async () => {
    TestBed.configureTestingModule({
      imports: [ProjectDetail],
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/realisations/does-not-exist', ProjectDetail);
    const el = harness.routeNativeElement;

    expect(el?.querySelector('[data-testid="project-detail__not-found"]')).toBeTruthy();
    expect(
      normalizeText(el?.querySelector('[data-testid="project-detail__not-found"]')?.textContent),
    ).toContain("n'existe pas");
  });
});
