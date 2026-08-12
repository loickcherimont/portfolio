import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose a non-empty list of projects', () => {
    expect(service.projects().length).toBeGreaterThan(0);
  });

  it('should contain the ticketing project as a real project', () => {
    const project = service.getProject('gestionnaire-tickets-support');

    expect(project?.title).toBe('Gestionnaire de tickets support');
    expect(project?.isPlaceholder).toBe(false);
  });

  it('should return undefined for an unknown slug', () => {
    expect(service.getProject('does-not-exist')).toBeUndefined();
  });

  it('should compute the number of projects', () => {
    expect(service.projectsCount()).toBe(service.projects().length);
  });
});
