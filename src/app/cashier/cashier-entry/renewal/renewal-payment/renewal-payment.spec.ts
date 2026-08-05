import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalPayment } from './renewal-payment';

describe('RenewalPayment', () => {
  let component: RenewalPayment;
  let fixture: ComponentFixture<RenewalPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewalPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalPayment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
