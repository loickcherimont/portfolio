import { Component, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { NgOptimizedImage } from '@angular/common';

const BASE_URL = 'https://loickcherimont.github.io/portfolio';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  protected readonly project = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    return slug ? this.projectsService.getProject(slug) : undefined;
  });

  protected readonly mainImage = signal('');

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const project = slug ? this.projectsService.getProject(slug) : undefined;

    if (project) {
      const pageTitle = `${project.title} — Loïck CHERIMONT`;
      const pageUrl = `${BASE_URL}/realisations/${slug}`;
      const imageUrl = `${BASE_URL}${project.imageUrl}`;

      this.title.setTitle(pageTitle);
      this.meta.updateTag({ name: 'description', content: project.shortDescription });

      // Open Graph
      this.meta.updateTag({ property: 'og:title', content: pageTitle });
      this.meta.updateTag({ property: 'og:description', content: project.shortDescription });
      this.meta.updateTag({ property: 'og:type', content: 'article' });
      this.meta.updateTag({ property: 'og:url', content: pageUrl });
      this.meta.updateTag({ property: 'og:image', content: imageUrl });

      // Twitter/X Card
      this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
      this.meta.updateTag({ name: 'twitter:description', content: project.shortDescription });
      this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

      // Canonical URL
      this.updateCanonical(pageUrl);

      this.mainImage.set(project.imageUrl);
    } else {
      this.title.setTitle('Projet introuvable — Loïck CHERIMONT');
      this.meta.updateTag({
        name: 'description',
        content: 'Projet introuvable sur le portfolio de Loïck Cherimont.',
      });
    }
  }

  protected selectScreenshot(imageUrl: string): void {
    this.mainImage.set(imageUrl);
  }

  private updateCanonical(url: string): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }
}
