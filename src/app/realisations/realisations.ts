import { Component, computed, inject } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-realisations',
  imports: [ProjectCard],
  templateUrl: './realisations.html',
})
export class Realisations {
  private readonly projectsService = inject(ProjectsService);

  protected readonly projects = computed(() => this.projectsService.projects());
}
