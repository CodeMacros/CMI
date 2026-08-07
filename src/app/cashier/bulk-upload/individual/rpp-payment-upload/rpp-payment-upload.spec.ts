import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RppPaymentUpload } from './rpp-payment-upload';

describe('RppPaymentUpload', () => {
  let component: RppPaymentUpload;
  let fixture: ComponentFixture<RppPaymentUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RppPaymentUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RppPaymentUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
