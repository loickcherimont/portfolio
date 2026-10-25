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
    { id: 1, value: '5', label: "ans d'autoformation" },
    { id: 2, value: '4', label: "ans d'expérience IT" },
    { id: 3, value: '68', label: 'tests automatisés (112 cas)' },
  ]);
}
