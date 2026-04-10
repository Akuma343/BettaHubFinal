import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dragon } from './dragon';

describe('Dragon', () => {
  let component: Dragon;
  let fixture: ComponentFixture<Dragon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dragon],
    }).compileComponents();

    fixture = TestBed.createComponent(Dragon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
