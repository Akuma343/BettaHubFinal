import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareGuides } from './care-guides';

describe('CareGuides', () => {
  let component: CareGuides;
  let fixture: ComponentFixture<CareGuides>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareGuides],
    }).compileComponents();

    fixture = TestBed.createComponent(CareGuides);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
