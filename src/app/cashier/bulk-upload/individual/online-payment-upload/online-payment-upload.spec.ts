import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePaymentUpload } from './online-payment-upload';

describe('OnlinePaymentUpload', () => {
  let component: OnlinePaymentUpload;
  let fixture: ComponentFixture<OnlinePaymentUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlinePaymentUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlinePaymentUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
