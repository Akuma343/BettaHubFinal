import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plakat } from './plakat';

describe('Plakat', () => {
  let component: Plakat;
  let fixture: ComponentFixture<Plakat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plakat],
    }).compileComponents();

    fixture = TestBed.createComponent(Plakat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
