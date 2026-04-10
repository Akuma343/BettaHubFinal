import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giant } from './giant';

describe('Giant', () => {
  let component: Giant;
  let fixture: ComponentFixture<Giant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Giant],
    }).compileComponents();

    fixture = TestBed.createComponent(Giant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
