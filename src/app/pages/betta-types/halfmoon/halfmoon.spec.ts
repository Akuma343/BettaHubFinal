import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Halfmoon } from './halfmoon';

describe('Halfmoon', () => {
  let component: Halfmoon;
  let fixture: ComponentFixture<Halfmoon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Halfmoon],
    }).compileComponents();

    fixture = TestBed.createComponent(Halfmoon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
