import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Samurai } from './samurai';

describe('Samurai', () => {
  let component: Samurai;
  let fixture: ComponentFixture<Samurai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Samurai],
    }).compileComponents();

    fixture = TestBed.createComponent(Samurai);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
