import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dumbo } from './dumbo';

describe('Dumbo', () => {
  let component: Dumbo;
  let fixture: ComponentFixture<Dumbo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dumbo],
    }).compileComponents();

    fixture = TestBed.createComponent(Dumbo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
