import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the realisations section', () => {
    const title = fixture.nativeElement.querySelector('[data-testid="realisations__title"]');

    expect(title?.textContent?.trim()).toBe("Ce que j'ai construit");
  });

  it('should set the document title for SEO', () => {
    expect(document.title).toBe('Loïck Cherimont — Développeur Java / Spring Boot');
  });
});
