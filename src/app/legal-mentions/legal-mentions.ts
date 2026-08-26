import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-legal-mentions',
  imports: [],
  templateUrl: './legal-mentions.html',
})
export class LegalMentions {
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  constructor() {
    this.title.setTitle('Mentions légales — Loïck Cherimont');
    this.updateCanonical('https://loickcherimont.github.io/pv3/mentions-legales');
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
