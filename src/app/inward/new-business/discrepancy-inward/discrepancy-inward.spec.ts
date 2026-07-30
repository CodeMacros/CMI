import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscrepancyInward } from './discrepancy-inward';

describe('DiscrepancyInward', () => {
  let component: DiscrepancyInward;
  let fixture: ComponentFixture<DiscrepancyInward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscrepancyInward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscrepancyInward);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
