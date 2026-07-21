import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllMatches } from './show-all-matches';

describe('ShowAllMatches', () => {
  let component: ShowAllMatches;
  let fixture: ComponentFixture<ShowAllMatches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAllMatches],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowAllMatches);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
