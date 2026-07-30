import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentOutward } from './independent-outward';

describe('IndependentOutward', () => {
  let component: IndependentOutward;
  let fixture: ComponentFixture<IndependentOutward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndependentOutward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndependentOutward);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
