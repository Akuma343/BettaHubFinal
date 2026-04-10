import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Koi } from './koi';

describe('Koi', () => {
  let component: Koi;
  let fixture: ComponentFixture<Koi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Koi],
    }).compileComponents();

    fixture = TestBed.createComponent(Koi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
