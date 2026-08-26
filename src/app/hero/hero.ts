import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Stat } from './stat/stat';
import { StatInfo } from './stat/stat-info';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Stat],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected stats = signal<Array<StatInfo>>([
    { id: 1, value: '3', label: 'Expériences IT' },
    { id: 2, value: '7', label: 'Ans d\'apprentissage autodidacte' },
    { id: 3, value: '1', label: 'Projet construit et déployé' },
  ]);
}
