import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crowntail } from './crowntail';

describe('Crowntail', () => {
  let component: Crowntail;
  let fixture: ComponentFixture<Crowntail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crowntail],
    }).compileComponents();

    fixture = TestBed.createComponent(Crowntail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
