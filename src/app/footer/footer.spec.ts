import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      // The footer renders a `routerLink`: the Router must be provided for the
      // directive to resolve the link into an actual `href` attribute.
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display name and position', () => {
    const footerName = fixture.nativeElement.querySelector('[data-testid="footer__name"]');

    expect(footerName?.textContent?.trim()).toBe('Loïck CHERIMONT | Développeur Back-End Java / Spring Boot Junior');
  });

  it('should display legal link', () => {
    const legalLink = fixture.nativeElement.querySelector('[data-testid="footer__link"]');

    expect(legalLink?.textContent?.trim()).toBe('Mentions légales');
  });

  it('should display copyright paragraph', () => {
    const copyrightParagraph = fixture.nativeElement.querySelector('[data-testid="footer__copyright"]');

    expect(copyrightParagraph?.textContent?.trim()).toBe('Copyright © 2026 | Loïck CHERIMONT | Tous droits réservés.');
  });

  it('should link to the legal mentions page', () => {
    const legalLink = fixture.nativeElement.querySelector('[data-testid="footer__link"]');

    expect(legalLink?.getAttribute('href')).toBe('/mentions-legales');
  });
});
