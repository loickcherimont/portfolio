import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Hero } from '../hero/hero';
import { Realisations } from '../realisations/realisations';
import { Stack } from '../stack/stack';
import { Experiences } from '../experiences/experiences';
import { About } from "../about/about";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [Hero, Realisations, Stack, Experiences, About, Contact],
  templateUrl: './home.html',
})
export class Home {
  private readonly title = inject(Title);

  constructor() {
    this.title.setTitle('Loïck Cherimont — Développeur Java / Spring Boot');
  }
}
