import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettaTypes } from './betta-types';

describe('BettaTypes', () => {
  let component: BettaTypes;
  let fixture: ComponentFixture<BettaTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BettaTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(BettaTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
