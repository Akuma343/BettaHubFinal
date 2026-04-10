import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Veiltail } from './veiltail';

describe('Veiltail', () => {
  let component: Veiltail;
  let fixture: ComponentFixture<Veiltail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Veiltail],
    }).compileComponents();

    fixture = TestBed.createComponent(Veiltail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
