import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Hero } from '../hero/hero';
import { Realisations } from '../realisations/realisations';

@Component({
  selector: 'app-home',
  imports: [Hero, Realisations],
  templateUrl: './home.html',
})
export class Home {
  private readonly title = inject(Title);

  constructor() {
    this.title.setTitle('Loïck Cherimont — Développeur Java / Spring Boot');
  }
}
