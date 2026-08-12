import { Component, computed, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);
  private readonly title = inject(Title);

  protected readonly project = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    return slug ? this.projectsService.getProject(slug) : undefined;
  });

  protected readonly mainImage = signal('');

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const project = slug ? this.projectsService.getProject(slug) : undefined;

    if (project) {
      this.title.setTitle(`${project.title} — Loïck CHERIMONT`);
      this.mainImage.set(project.imageUrl);
    } else {
      this.title.setTitle('Projet introuvable — Loïck CHERIMONT');
    }
  }

  protected selectScreenshot(imageUrl: string): void {
    this.mainImage.set(imageUrl);
  }
}
