import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
