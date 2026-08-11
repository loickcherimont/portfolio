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
    { id: 1, value: '2', label: 'Expériences professionnelles' },
    { id: 2, value: '3', label: 'Ans d\'apprentissage du développement' },
    { id: 3, value: '5+', label: 'Projets construits' },
  ]);
}
