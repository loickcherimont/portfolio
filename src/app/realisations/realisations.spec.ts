import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProjectsService } from './projects.service';
import { Realisations } from './realisations';

const normalizeText = (value: string | null | undefined): string => value?.replace(/\s+/g, ' ').trim() ?? '';

describe('Realisations', () => {
  let component: Realisations;
  let fixture: ComponentFixture<Realisations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Realisations],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Realisations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a project with image and button', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-project-card');

    const card = cards[0];
    const cardImg = card.querySelector('img');
    const cardBtn = card.querySelector('.btn');

    expect(cardImg).toBeTruthy();
    expect(cardBtn).toBeTruthy();
  });
});
