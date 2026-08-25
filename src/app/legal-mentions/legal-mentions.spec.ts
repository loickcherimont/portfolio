import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalMentions } from './legal-mentions';

describe('LegalMentions', () => {
  let component: LegalMentions;
  let fixture: ComponentFixture<LegalMentions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalMentions],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalMentions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
