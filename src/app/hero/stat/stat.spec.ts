import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stat } from './stat';
import { StatInfo } from './stat-info';

describe('Stat', () => {
  let component: Stat;
  let fixture: ComponentFixture<Stat>;
  const statInfo: StatInfo = {
    id: 1,
    value: '2',
    label: 'Expériences professionnelles',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stat],
    }).compileComponents();

    fixture = TestBed.createComponent(Stat);
    component = fixture.componentInstance;

    // We set statInfo because of the required input on Stat.
    fixture.componentRef.setInput('statInfo', statInfo);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the stat value and label', () => {
    const value = fixture.nativeElement.querySelector('[data-testid="stat__value-1"]');
    const label = fixture.nativeElement.querySelector('[data-testid="stat__label-1"]');

    expect(value?.textContent?.trim()).toBe('2');
    expect(label?.textContent?.trim()).toBe('Expériences professionnelles');
  });
});
