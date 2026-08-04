import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PslbPayout } from './pslb-payout';

describe('PslbPayout', () => {
  let component: PslbPayout;
  let fixture: ComponentFixture<PslbPayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PslbPayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PslbPayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
