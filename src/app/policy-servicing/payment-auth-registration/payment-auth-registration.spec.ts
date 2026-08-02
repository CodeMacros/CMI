import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAuthRegistration } from './payment-auth-registration';

describe('PaymentAuthRegistration', () => {
  let component: PaymentAuthRegistration;
  let fixture: ComponentFixture<PaymentAuthRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentAuthRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentAuthRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
