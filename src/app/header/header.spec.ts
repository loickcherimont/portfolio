import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Brand', () => {
    it('should display the full name', () => {
      const brand = host.querySelector('.navbar-brand');

      expect(brand?.textContent).toContain('Loïck');
      expect(brand?.textContent).toContain('CHERIMONT');
    });

    it('should link back to the home section', () => {
      const brand = host.querySelector('.navbar-brand') as HTMLAnchorElement;

      expect(brand.getAttribute('href')).toBe('#accueil');
    });
  });

  describe('Menu', () => {
    it('should render 6 menu items', () => {
      const links = host.querySelectorAll('.navbar-nav a');

      expect(links.length).toBe(6);
    });

    it('every link should be an internal anchor', () => {
      const links = host.querySelectorAll('.navbar-nav a');

      for (const link of Array.from(links)) {
        expect(link.getAttribute('href')).toMatch(/^#/);
      }
    });
  });

  describe('CTA "Me contacter"', () => {
    const cta = () =>
      Array.from(host.querySelectorAll('.navbar-nav a')).find((a) =>
        a.textContent?.includes('Me contacter'),
      );

    it('should look like a button (btn, not nav-link)', () => {
      expect(cta()?.classList.contains('btn')).toBe(true);
      expect(cta()?.classList.contains('btn-primary')).toBe(true);
      expect(cta()?.classList.contains('nav-link')).toBe(false);
    });

    it('should link to the contact section', () => {
      expect(cta()?.getAttribute('href')).toBe('#me-contacter');
    });
  });

  describe('Mobile toggler', () => {
    it('should declare the Bootstrap contract', () => {
      const btn = host.querySelector('.navbar-toggler');

      expect(btn?.getAttribute('data-bs-toggle')).toBe('collapse');
      expect(btn?.getAttribute('data-bs-target')).toBe('#navMenu');
    });

    it('should be accessible', () => {
      const btn = host.querySelector('.navbar-toggler');

      expect(btn?.getAttribute('aria-controls')).toBe('navMenu');
      expect(btn?.getAttribute('aria-expanded')).toBe('false');
      expect(btn?.getAttribute('aria-label')).toBe('Ouvrir le menu');
    });
  });

  describe('Consistency', () => {
    it('the toggler target should exist in the template', () => {
      const target = host.querySelector('#navMenu');

      expect(target).not.toBeNull();
      expect(target?.classList.contains('collapse')).toBe(true);
    });
  });
});
