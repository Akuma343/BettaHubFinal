import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alien } from './alien';

describe('Alien', () => {
  let component: Alien;
  let fixture: ComponentFixture<Alien>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alien],
    }).compileComponents();

    fixture = TestBed.createComponent(Alien);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
